import { createSlice ,createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export const createProduct=createAsyncThunk("product/create",async (formData:FormData,{rejectWithValue})=>{
    try{
        const res= await axios.post('/api/admin/product/add',formData,{
            headers:{
                "Content-Type":"multipard/form-data"
            }
        })
        return res.data

    }
    catch (err:any){
        console.log(err)
        return rejectWithValue(err.response?.data?.message || "Hata oluştu");

    }
})
export const productUpdate=createAsyncThunk("product/update",async ( {formData,id}:CreateProductArgs,{rejectWithValue})=>{
  try{
        const res= await axios.put(`/api/admin/product/${id}`,formData,{
            headers:{
                "Content-Type":"multipard/form-data"
            }
        })
        return res.data

    }
    catch (err:any){
        console.log(err)
        return rejectWithValue(err.response?.data?.message || "Hata oluştu");

    }
})
export const ProductDelete=createAsyncThunk("product/delete",async ( {id}:{id:string},{rejectWithValue})=>{
  try{
        const res= await axios.delete(`/api/admin/product/${id}`)
        return res.data

    }
    catch (err:any){
        return rejectWithValue(err.response?.data?.message || "Hata oluştu");

    }
})


const initialState:ProductState={
    success:false,
    loading:false,
    error:""

}


const product=createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
         builder
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createProduct.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createProduct.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
      builder
      .addCase(productUpdate.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(productUpdate.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(productUpdate.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
       builder
      .addCase(ProductDelete.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(ProductDelete.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(ProductDelete.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    }
})
export default product.reducer