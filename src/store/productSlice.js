import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const response = await fetch('http://localhost:3001/products')
      const data = await response.json()
      console.log('🛩️ products data :', data)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState: { data: [], loading: false },
  reducers: {},
  extraReducers: builder => {
    // get Products
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      console.log(state, payload)
      state.data = payload
    })
    builder.addCase(getProducts.pending, (state, { payload }) => {
      console.log(state, payload)
    })
    builder.addCase(getProducts.rejected, (state, { payload }) => {
      console.log(state, payload)
    })
  }
})
export default productSlice.reducer
