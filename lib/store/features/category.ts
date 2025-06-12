import { createSlice ,createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export const getFullItem=createAsyncThunk('category/getItem',async ()=>{
    try{
        const response=await axios.get('/api/category/get_item')
        return response.data
    }catch (err){
        return err
    }
})
export const getAdd=createAsyncThunk('category/Add',async ({name,parentId}:categoryReqProps)=>{
    try{
        const response=await axios.post('/api/category/add',{
            name,parentId
        })
        return response.data.msg
    }catch (err){
        return err
    }
})
export const update=createAsyncThunk('category/Update',async ({id,category:{name,parentId}}:categoryUpdateReqProps)=>{
    try{
        const response=await axios.patch(`/api/category/${id}`,{
            name,parentId
        })
        return response.data.msg
    }catch (err){
        return err
    }
})
export const deleteCategory=createAsyncThunk('category/delete',async (id:string)=>{
    try{
        const response=await axios.delete(`/api/category/${id}`)
        return response.data.msg
    }catch (err){
        return err
    }
})

const initialState:categoryRedux={
    status:'idle',
    data:[]
}

const category=createSlice({
    name:'category',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getFullItem.rejected,(state)=>{
            state.status='Fail'
        })
        builder.addCase(getFullItem.pending,(state)=>{
            state.status='Loading'
        })
        builder.addCase(getFullItem.fulfilled,(state,action:PayloadAction<categoryReqProps[]>)=>{
            state.status='Success'
            state.data=action.payload
        })
        builder.addCase(getAdd.rejected,(state)=>{
            state.status='Fail'
        })
        builder.addCase(getAdd.pending,(state)=>{
            state.status='Loading'
        })
        builder.addCase(getAdd.fulfilled,(state)=>{
            state.status='Success'
        })
        builder.addCase(update.rejected,(state)=>{
            state.status='Fail'
        })
        builder.addCase(update.pending,(state)=>{
            state.status='Loading'
        })
        builder.addCase(update.fulfilled,(state)=>{
            state.status='Success'
        })

    }
})



export default category.reducer