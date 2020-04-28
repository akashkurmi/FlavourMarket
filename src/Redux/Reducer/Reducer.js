const LoginDetail={
    UserName:null,
    PassWord:null,
    cart :0
}

const Reducer=(state=LoginDetail,action)=>{
  
      
    if(action.type.UName )
    return{...state,UserName:action.type.UName}

    if(action.type.PWord )
    return{...state,PassWord:action.type.PWord}  

    if(action.type==='INCREMENT')
    {
        return{...state,cart:state.cart+1}}
  

    console.log(state);
    return state;
}

export default Reducer;