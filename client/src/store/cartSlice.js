import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getCarts = createAsyncThunk(
  'cart/getCarts',
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
      const response = await fetch('https://fakestoreapi.com/carts')
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
// const addToCart = createAsyncThunk('cart/addToCart', async (_, thunkApi) => {})
const cartSlice = createSlice({
  name: 'cart',
  initialState: { data: [], isLoading: false, isError: false, error: '' },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCarts.fulfilled, (state, { payload }) => {
      state.data = payload
      state.isError = false
      state.isLoading = false
      state.error = ''
    })
    builder.addCase(getCarts.pending, (state, { payload }) => {
      state.data = payload
      state.isError = false
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(getCarts.rejected, (state, { payload }) => {
      state.isError = true
      state.isLoading = true
      state.error = payload
    })
  }
})

export default cartSlice.reducer
