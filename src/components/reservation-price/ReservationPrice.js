import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ReservationPrice = () => {
    return (
        <View style={[styles.card, styles.elevation]}>
            <View style={{ ...styles.flex, justifyContent: "space-between" }}>
                <Text style={styles.heading}>
                    Thành tiền
                </Text>
                <Text style={{ ...styles.heading, color: "red" }}>
                    {`VND`}
                </Text>
            </View>
            <View>
        
            </View>
        </View>
    )
}

export default ReservationPrice

const styles = StyleSheet.create({
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
    flex: {
        display: "flex",
        flexDirection: "row"
    },
})