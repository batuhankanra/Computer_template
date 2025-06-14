import { createSlice ,createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers=createAsyncThunk("user/get",async ()=>{
    try{
        const res= await axios.get('/api/admin/user/get')
        return res.data

    }
    catch (err:any){
        console.log(err)
        return "hata olustu";

    }
})


const initialState:UserGetRedux={
    data:[] ,
    update:{name:'',role:'',email:'',id:''}
}


const getUser=createSlice({
    name:'user',
    initialState,
    reducers:{
      setUser:(state,action)=>{
        state.update=action.payload
      }
    },
    extraReducers:(builder)=>{
    builder
      .addCase(getUsers.pending, (state) => {
        state.data=[]
      })
      .addCase(getUsers.fulfilled, (state,action: PayloadAction<UserProps[]>) => {
        state.data=action.payload
      })
      .addCase(getUsers.rejected, (state) => {
            state.data=[]

      });

    }
})
export const {setUser} = getUser.actions
export default getUser.reducer