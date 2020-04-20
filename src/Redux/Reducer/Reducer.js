const LoginDetail={
    UserName:null,
    PassWord:null,
    cart :0
}

const Reducer=(state=LoginDetail,action)=>{
  
      
    if(action.type.UName )
    return{UserName:action.type.UName}

    if(action.type.PWord )
    return{PassWord:action.type.PWord}  

    if(action.type='INCREMENT')
    return{cart:state.cart+1}
  

    console.log(state);
    return state;
}

export default Reducer;