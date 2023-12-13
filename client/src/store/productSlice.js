import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseUrl } from '../constants/baseUrl'

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const response = await fetch(`${baseUrl}/products`)
      const data = await response.json()

      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState: { data: [], loading: false, searchQuery: '' },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    }
  },
  extraReducers: builder => {
    // get Products
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      // console.log(state, payload)
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
export const { setSearchQuery } = productSlice.actions
export default productSlice.reducer
