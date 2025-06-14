import { createSlice ,createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";


export const userUpdate=createAsyncThunk("user/update",async ( {id,name,email,role}:{id:string,name:string,email:string,role:string},{rejectWithValue})=>{
  try{
        const res= await axios.put(`/api/admin/user/${id}`,{id,name,email,role},{
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
export const userDelete=createAsyncThunk("user/delete",async ( {id}:{id:string},{rejectWithValue})=>{
  try{
        const res= await axios.delete(`/api/admin/user/${id}`)
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


const userApi=createSlice({
    name:'userApi',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        
      builder
      .addCase(userUpdate.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(userUpdate.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(userUpdate.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
       builder
      .addCase(userDelete.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(userDelete.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(userDelete.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    }
})
export default userApi.reducer