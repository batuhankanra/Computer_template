import { createSlice ,createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct=createAsyncThunk("product/get",async ()=>{
    try{
        const res= await axios.get('/api/admin/product/get')
        return res.data

    }
    catch (err:any){
        console.log(err)
        return "hata olustu";

    }
})


const initialState:ReduxProduct={
    data:[] ,
    update:{title:"",description:"",createdAt:"",id:"",img:[],price:0,updatedAt:"",user:{email:"",id:'',name:""},userId:""}
}


const product=createSlice({
    name:'product',
    initialState,
    reducers:{
      setProduct:(state,action)=>{
        state.update=action.payload
      }
    },
    extraReducers:(builder)=>{
    builder
      .addCase(getProduct.pending, (state) => {
        state.data=[]
      })
      .addCase(getProduct.fulfilled, (state,action: PayloadAction<ProductsProps[]>) => {
        state.data=action.payload
      })
      .addCase(getProduct.rejected, (state) => {
            state.data=[]

      });

    }
})
export const {setProduct} = product.actions
export default product.reducer