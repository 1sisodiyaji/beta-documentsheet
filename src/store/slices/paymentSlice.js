import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  paymentDetails: null,
}

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentDetails: (state, action) => {
      state.paymentDetails = action.payload
    },
    clearPaymentDetails: (state) => {
      state.paymentDetails = null
    },
  },
})

export const { setPaymentDetails, clearPaymentDetails } = paymentSlice.actions
export default paymentSlice.reducer
