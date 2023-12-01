import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: '',
    result: {},
    hotel: {},
    room: {},
    searchParams: {
        province: null,
        checkinDay: null,
        checkoutDay: null,
        count: null,
        adultCount: null,
        childrenCount: null,
        rate: null,
        fromPrice: null,
        toPrice: null,
        review: null,
        pageIndex: null,
        pageSize: null
    }
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
        },
        setSearchParams: (state, { payload }) => {
            state.searchParams = {
                province: payload?.province,
                checkinDay: payload?.checkinDay,
                checkoutDay: payload?.checkoutDay,
                count: payload?.count,
                adultCount: payload?.adultCount,
                childrenCount: payload?.childrenCount,
                rate: payload?.rate,
                fromPrice: payload?.fromPrice,
                toPrice: payload?.toPrice,
                review: payload?.review,
                pageIndex: payload?.pageIndex,
                pageSize: payload?.pageSize
            }
        }
    },

})


export const { result, getHotel, setSearchParams } = hotelSlice.actions

export default hotelSlice.reducer