function reducer(state = {cart: []}, action){
    switch(action.type){
        case 'Add_to_cart': 
        return {
            ...state,
            cart: [
                ...state.cart,
                action.payload
            ]
        }
        default:
        return state;
    }
}

export default reducer;