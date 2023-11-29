import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: '',
    result: {},
    hotel: {},
    room: {},
}

const hotelSlice = createSlice({
    name: 'HOTEL',
    initialState,
    reducers: {
        result: (state, { payload }) => {
            state.result = payload
        },
        getHotel: (state, { payload }) => {
            state.hotel = payload
        }
    },

})


export const { result, getHotel } = hotelSlice.actions

export default hotelSlice.reducer