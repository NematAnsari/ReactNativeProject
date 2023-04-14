import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUserData = createAsyncThunk("User",async()=>{
    const response = await axios.get("https://dummyjson.com/products?limit=2");
    // console.log("state: ",JSON.stringify(response));
    return(response.data);
      
})