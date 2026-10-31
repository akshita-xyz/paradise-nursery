export const initialState = {items: []};
export const cartSlice = {name:"cart",initialState,reducers:{addItem:(state,action)=>{if(!state.items.find(i=>i.id===action.payload.id))state.items.push({...action.payload,quantity:1)},removeItem:(state,action)=>{state.items=state.items.filter(i=>i.id!==action.payload)},increment:(state,action)=>{const i=state.items.find(i=>i.id===action.payload);if(i)i.quantity++},decrement:(state,action)=>{const i=state.items.find(i=>i.id===action.payload);if(i&&i.quantity>1)i.quantity--}}};
export const {addItem,removeItem,increment,decrement}=cartSlice.reducers;
export default cartSlice;
