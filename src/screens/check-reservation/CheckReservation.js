import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReservationInfo from '../../components/reservation-info/ReservationInfo'
import ReservationPrice from '../../components/reservation-price/ReservationPrice'
import UserBooking from '../../components/user-booking/UserBooking'
const CheckReservation = () => {
    return (
        <View>
            <ReservationInfo />
            <UserBooking />
            <ReservationPrice />
        </View>
    )
}

export default CheckReservation

const styles = StyleSheet.create({})