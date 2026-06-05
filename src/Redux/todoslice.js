import{createSlice} from "@reduxjs/toolkit";
const todoslice= createSlice({
    name:"todo",
    initialState:{
        todos:[]
    },

    reducers:{
         addtodo(state,action){
            state.todos.push(action.payload);
         },
         deletetodo(state,action){
             state.todos=state.todos.filter((item,index)=>(
                index!==action.payload
            ))
         },
         editTodo(state, action) {
  state.todos[action.payload.index] =
    action.payload.text;
}
    }

})

export const{addtodo,deletetodo,editTodo}= todoslice.actions; // addtodo ko action se bahar bej do taki app.jsx mai use kr paye
export default todoslice.reducer;  // reducer ko store mai use krna hai isliye bahar export kr rhe hai