import { createSlice ,createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export const getCategory=createAsyncThunk("categories/get",async ()=>{
    try{
        const res= await axios.get('/api/admin/categories/get')
        return res.data

    }
    catch (err:any){
        console.log(err)
        return "hata olustu";

    }
})


const initialState:ReduxCategory={
    data:[] ,
    updates:{
        id:'',
        name:'',
        parentId:''
    }
}
   


const categories=createSlice({
    name:'product',
    initialState,
    reducers:{
      setCategory:(state,action)=>{
        state.updates=action.payload
      }
    },
    extraReducers:(builder)=>{
    builder
      .addCase(getCategory.pending, (state) => {
        state.data=[]
      })
      .addCase(getCategory.fulfilled, (state,action: PayloadAction<CategoryProps[]>) => {
        state.data=action.payload
      })
      .addCase(getCategory.rejected, (state) => {
            state.data=[]

      });

    }
})
export const {setCategory} = categories.actions
export default categories.reducer