import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Card } from '@rneui/themed';

import mockData from '../../redux/hotel/mock-data/HotelResult'
import { Button } from '@rneui/base';
const Result = ({ navigation }) => {
    const handleSelectHotel = () => {
        navigation.navigate('Hotel')
    }
    return (
        <ScrollView style={{ backgroundColor: "#fff", padding: 10 }}>
            <Text>{mockData?.totalItems} Chỗ nghỉ</Text>
            <View style={styles.resultList}>
                {mockData?.hotels?.map((result, idx) => (
                    <View key={idx} style={styles.resultBlock}>
                        <View style={{ ...styles.imageWrapper, backgroundColor: 'red' }}>
                            <Image
                                source={{ uri: result?.hotelImgPath }}
                                style={{ ...styles.image, resizeMode: 'cover' }}
                            />

                        </View>


                        <View style={styles.content}>
                            <Text style={{ color: '#0735D6', fontSize: 20, fontWeight: '700' }}>{result?.hotelName}</Text>
                            <View style={styles.flexCenter}>
                                <Icon name="location-pin" size={20} color="black" />
                                <Text>{result?.address}</Text>
                            </View>
                            {result?.amenities?.map((item, idx) => (
                                <View style={styles.flexCenter} key={idx}>
                                    <Icon name='check' size={20} color="black" />
                                    <Text>{item}</Text>
                                </View>
                            ))}
                            <Text style={styles.priceColor}>
                                {result?.minPrice} VND
                                <Text style={{ color: 'black', fontSize: 14, marginLeft: 10 }}>
                                    Phòng/đêm
                                </Text>
                            </Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: '100%' }}>
                                <View style={styles.flexCenter}>
                                    <Text style={{ color: 'red' }}>{result?.rating}/10</Text>
                                    <View><Text>{`  ${result?.reviews} đánh giá`}</Text></View>
                                </View>
                            </View>
                            <Button
                                buttonStyle={
                                    {
                                        backgroundColor: "#E67E03"
                                    }
                                }
                                onPress={handleSelectHotel}
                            >
                                Chọn phòng
                            </Button>
                        </View>

                    </View>
                ))}
            </View>
        </ScrollView>
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