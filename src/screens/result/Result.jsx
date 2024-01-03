import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from '@rneui/base';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const Result = ({ navigation }) => {
    const { result } = useSelector(state => state.Hotel)
    const dispatch = useDispatch();
    const [hotels, setHotels] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const getHotels = () => {
        setIsLoading(true);
        // dispatch({
        //     type: HotelAction.SEARCH_HOTELS_START,
        //     province: provinces,
        //     adults: adults,
        //     children: children,
        //     rooms: rooms,
        //     startDay: startDay,
        //     endDay: endDay,
        //     onSuccess: () => {
        //         navigation.navigate('Result')
        //     },
        //     onError: () => {
        //         Alert.alert("Không tìm thấy")
        //     }
        // })
    };
    useEffect(() => {

    }, [result])
    const renderLoader = () => {
        return (
            isLoading ?
                <View style={styles.loaderStyle}>
                    <ActivityIndicator size="large" color="#aaa" />
                </View> : null
        );
    };

    const loadMoreItem = () => {
        setCurrentPage(currentPage + 1);
    };
    const handleSelectHotel = (id) => {
        navigation.navigate('Hotel', { hotelId: id })
    }
    const renderItem = ({ item }) => {
        return (<View style={styles.resultBlock}>
            <View style={{ ...styles.imageWrapper, backgroundColor: 'gray' }}>
                <Image
                    source={{ uri: item?.hotelImgPath }}
                    style={{ ...styles.image, resizeMode: 'cover' }}
                />

            </View>


            <View style={styles.content}>
                <Text style={{ color: '#0735D6', fontSize: 20, fontWeight: '700' }}>{item?.hotelName}</Text>
                <View style={styles.flexCenter}>
                    <Icon name="location-pin" size={20} color="black" />
                    <Text>{item?.address}</Text>
                </View>
                {item?.amenities?.map((amenty, idx) => (
                    <View style={styles.flexCenter} key={idx}>
                        <Icon name='check' size={20} color="black" />
                        <Text>{amenty}</Text>
                    </View>
                ))}
                <Text style={styles.priceColor}>
                    {item?.minPrice} VND
                    <Text style={{ color: 'black', fontSize: 14, marginLeft: 10 }}>
                        Phòng/đêm
                    </Text>
                </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: '100%' }}>
                    <View style={styles.flexCenter}>
                        <Text style={{ color: 'red' }}>{item?.rating}/10</Text>
                        <View><Text>{`  ${item?.reviews} đánh giá`}</Text></View>
                    </View>
                </View>
                <Button
                    buttonStyle={
                        {
                            backgroundColor: "#E67E03"
                        }
                    }
                    onPress={(event) => { event.preventDefault(); handleSelectHotel(item?.id) }}
                >
                    Chọn phòng
                </Button>
            </View>

        </View>)
    }
    return (
        <View style={{ backgroundColor: "#fff", padding: 10 }}>
            <Text>{result?.totalItems} Chỗ nghỉ</Text>
            <View style={styles.resultList}>
                <FlatList
                    data={result?.hotels}
                    renderItem={renderItem}
                    keyExtractor={item => item?.id}
                    ListFooterComponent={renderLoader}
                    onEndReached={loadMoreItem}
                    onEndReachedThreshold={0}
                />
            </View>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    resultList: {
        marginTop: 10,
    },
    resultBlock: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-between",
        marginBottom: 20,
        // alignItems: "center"
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageWrapper: {
        width: '40%',
        height: 300
    },
    content: {
        width: '60%',
        paddingLeft: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    flexCenter: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: "center",
        // justifyContent: 'flex-rt'
        // justifyContent: "space-between"
    },
    priceColor: {
        color: "#E67E03",
        fontSize: 24,
        fontWeight: "700",
    },

})