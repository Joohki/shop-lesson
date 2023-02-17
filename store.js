import { configureStore, createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {setCart(state){
    return [];
  }, increaseCount(state,action){
    let copy = state.find((a,i)=>{ return action.payload===a.id});
    copy.count+=1;
  }, decreaseCount(state, action){
    let copy = state.find((a,i)=>{ return action.payload===a.id});
    if(copy.count>=1){copy.count-=1};
  }, increaseItem(state,action){
    state.push(action.payload);
  }
}})

export default configureStore({
  reducer: {
    cart : cart.reducer
  }
}) 

export let { setCart, increaseCount, decreaseCount, increaseItem} = cart.actions 