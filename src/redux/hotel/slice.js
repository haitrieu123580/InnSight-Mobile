import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: '',
    searchFilter: {
        province: "Thành phố Đà nẵng",
        checkinDay: "2023-11-13",
        checkoutDay: "2023-11-20",
        count: 2,
        adultCount: 2,
        childrenCount: 0,
        rate: null,
        fromPrice: null,
        toPrice: null,
        review: null,
        pageIndex: "",
        pageSize: ""
    }
}

const hotelSlice = createSlice({
    name: 'HOTEL',
    initialState,
    reducers: {
        sample: (state, { payload }) => {
            state.message = payload
        },
        setCheckInOutDay: (state, { payload }) => {

        },
        setProvice: (state, { payload }) => {

        },
        setOptions: (state, { payload }) => {

        }
    },

})


export const { sample } = hotelSlice.actions

export default hotelSlice.reducer