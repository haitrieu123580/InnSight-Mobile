import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import ReservationInfo from '../../components/reservation-info/ReservationInfo'
import ReservationPrice from '../../components/reservation-price/ReservationPrice'
import { TextInput } from 'react-native';
import { Input } from '@rneui/themed';
import { Button } from '@rneui/base';
import { useSelector } from 'react-redux';
const Booking = () => {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    // const { cart } = useSelector(state => state.Booking)
    const { searchParams, cart } = useSelector(state => state.Hotel)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Đặt phòng khách sạn",
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
            },
            headerStyle: {
                height: 110,
                borderBottomColor: "transparent",
                shadowColor: "transparent",
            },
            headerTitleAlign: 'center',
        });
    }, []);
    const onSubmitReservation = () => {
        console.log('Bookking:', cart);
        // console.log('Phone Number:', phoneNumber);
        // console.log('Email:', email);
        const reservation = {
            hotelId: cart?.hotelId,
            note: "",
            name: fullName,
            email: email,
            phoneNumber: phoneNumber,
            paymentMethod: "Cash",
            roomTypeReservedList: [
                {
                    "id": 1,
                    "count": 1,
                    "price": 123.456
                }
            ],
            totalPrice: 4000.00,
            tax: 6000,
            vat: 222,
            startDay: searchParams?.checkinDay,
            endDay: searchParams?.checkoutDay
        }
        navigation.navigate('Reservation')
    }
    return (
        <ScrollView style={styles.bgWhite}>
            <ReservationInfo />
            <View>
                <Input
                    placeholder=''
                    label="Họ và tên"
                    labelStyle={styles.labelStyle}
                    inputContainerStyle={styles.inputStyle}
                    onChangeText={(text) => setFullName(text)}
                />
                <Input
                    placeholder=''
                    label="Số điện thoại"
                    labelStyle={styles.labelStyle}
                    inputContainerStyle={styles.inputStyle}
                    onChangeText={(text) => setPhoneNumber(text)}
                />
                <Input
                    placeholder=''
                    label="Địa chỉ email"
                    labelStyle={styles.labelStyle}
                    inputContainerStyle={styles.inputStyle}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <ReservationPrice />
            <Button
                buttonStyle={
                    styles.button
                }
                onPress={onSubmitReservation}
            >
                Tiếp tục
            </Button>
        </ScrollView>
    )
}

export default Booking

const styles = StyleSheet.create({
    bgWhite: {
        backgroundColor: "#FFF"
    },
    labelStyle: {
        color: "black"
    },
    inputStyle: {
        borderWidth: 1,
        borderRadius: 5
    },
    button: {
        backgroundColor: "#E65300",
        // borderRadius: 5
    }
})