import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from "@expo/vector-icons";
import { Image } from '@rneui/base';
const ReservationInfo = (room) => {
    return (
        <View style={[styles.card, styles.elevation]}>
            <View style={{ ...styles.flex, justifyContent: "space-between" }}>
                <View style={{ width: "20%", height: "100%", }}>
                    <Image
                        source={{ uri: 'https://source.unsplash.com/random?sig=2' }}
                        containerStyle={styles.image}
                    />
                </View>

                <View style={{ width: "70%", height: "100%", }}>
                    <View style={styles.flex}>
                        <FontAwesome5 name="hotel" size={22} />
                        <Text style={{ fontSize: 22, marginLeft: 10, fontWeight: "700" }}>{"hotel"}</Text>
                    </View>
                    <Text>
                        {room?.address || "address"}
                    </Text>
                    <View style={{ ...styles.flex, justifyContent: "space-between" }}>
                        <Text style={styles.textGray}>Ngày nhận phòng</Text>
                        <Text>...</Text>
                    </View>
                    <View style={{ ...styles.flex, justifyContent: "space-between" }}>
                        <Text style={styles.textGray}>Ngày nhận phòng</Text>
                        <Text>...</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                    Phòng
                </Text>
                <View style={{ ...styles.flex, justifyContent: "space-between" }}>
                    <Text style={styles.textGray}>Khách/Phòng</Text>
                    <Text>...</Text>
                </View>
                <View style={{ ...styles.flex, justifyContent: "space-between" }}>
                    <Text style={styles.textGray}>Kiểu giường</Text>
                    <Text>...</Text>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                    Phòng
                </Text>
                <View style={{ ...styles.flex, justifyContent: "space-between" }}>
                    <Text style={styles.textGray}>Khách/Phòng</Text>
                    <Text>...</Text>
                </View>
                <View style={{ ...styles.flex, justifyContent: "space-between" }}>
                    <Text style={styles.textGray}>Kiểu giường</Text>
                    <Text>...</Text>
                </View>
            </View>
        </View>
    )
}

export default ReservationInfo

const styles = StyleSheet.create({
    flex: {
        display: "flex",
        flexDirection: "row"
    },
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 13,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
    },
    elevation: {
        elevation: 10,
        shadowColor: 'rgba(0, 0, 0, 1);',
    },
    image: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,
    },
    textGray: {
        color: "gray",
        fontSize: 14,
    }
})