import { createSlice } from '@reduxjs/toolkit'

const calTotalPrice = (cart) => {

}
const initialState = {
    cart: {
        hotel: null,
        rooms: [],
        totalPriceWithoutTax: null,
    },
    reservation: {
    },
    checkIn: "",
    checkOut: "",
    bookingReserved: {},
    linkVnpay: "",
    invoice: {}
}

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setCheckInOut: (state, { payload }) => {
            const { checkIn, checkOut } = payload;
            state.checkIn = checkIn;
            state.checkOut = checkOut;
        },
        addRoomToCart: (state, { payload }) => {
            const { hotel, room, count, onSuccess } = payload;
            const existingRoomIndex = state.cart.rooms.findIndex((r) => r?.id === room?.id);
            if (existingRoomIndex !== -1) {
                state.cart.rooms[existingRoomIndex].count = count;
            } else {
                state.cart = {
                    hotel: hotel,
                    rooms: [
                        ...state.cart.rooms,
                        {
                            ...room,
                            count: count,
                        },
                    ],
                };
            }
            onSuccess && onSuccess();
        },
        booking: (state, { payload }) => {
            state.bookingReserved = payload
        },
        saveReservation: (state, { payload }) => {
            const { onSuccess, reservation } = payload;
            state.reservation = reservation;
            onSuccess && onSuccess();
        },
        pay: (state, { payload }) => {
            state.linkVnpay = payload
        },
        invoice: (state, { payload }) => {
            state.invoice = payload
        },
    },
},)

export const { booking, addRoomToCart, setCheckInOut, saveReservation, pay, invoice } = bookingSlice.actions

export default bookingSlice.reducer