import { createSlice ,createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export const createCategories=createAsyncThunk("categories/create",async (data:CategoryFetchProps,{rejectWithValue})=>{
    try{
        const res= await axios.post('/api/admin/categories/add',data)
        return res.data

    }
    catch (err:any){
        console.log(err)
        return rejectWithValue(err.response?.data?.message || "Hata oluştu");

    }
})
export const updateCategories=createAsyncThunk("categories/update",async ( {data,id}:{data:CategoryFetchProps,id:string},{rejectWithValue})=>{
  try{
        const res= await axios.put(`/api/admin/categories/${id}`,data)
        return res.data

    }
    catch (err:any){
        console.log(err)
        return rejectWithValue(err.response?.data?.message || "Hata oluştu");

    }
})
export const deleteCategory=createAsyncThunk("categories/delete",async ( {id}:{id:string},{rejectWithValue})=>{
  try{
        const res= await axios.delete(`/api/admin/categories/${id}`)
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


const apiCategories=createSlice({
    name:'categories',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
      builder
      .addCase(createCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createCategories.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createCategories.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
      builder
      .addCase(updateCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateCategories.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateCategories.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
       builder
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(deleteCategory.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(deleteCategory.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    }
})
export default apiCategories.reducer