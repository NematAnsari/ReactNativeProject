import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchUserData } from '../API/user';








interface objType {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    get: {
      lat: string,
      lng: string
    }
  }
}


export interface ICounterState {
  count: number;
  Name: string[];
  cartItem: any[],
  order:any[];
}

const initialState: ICounterState = {
  count: 0,
  Name: [],
  cartItem: [],
  order:[],

};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    addToCart: (state, action: any) => {
      const {id} = action.payload;
      let check = state.cartItem.some(obj=> obj.id===id);
     if(!check){

       state.count += 1;
       state.cartItem.push(action.payload)
     }
      
    },
    removeToCart: (state, action: any) => {
      const { id } = action.payload;
      state.cartItem = state.cartItem.filter(obj => obj.id !== id)
      state.count-=1;
    },

 order:(state,action)=>{
         console.log("order inside Counter",action.payload)
           state.order.push(action.payload);
        }

  },

  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.Name.push(action.payload);


    }),

      builder.addCase(fetchUserData.pending, () => {
        console.log("pending");

      }),
      builder.addCase(fetchUserData.rejected, () => {
        console.log("rejected");
      })
  }
});

export const {  addToCart, removeToCart,order } = counterSlice.actions;



export default counterSlice.reducer;
