const initialState = {
    list: [],
    activeId: null
}

function AddToCart(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            {
                const newList = [...state.list];
                const indexproduct = newList.findIndex(item => item.id === action.payload.id);

                if (indexproduct === -1) {

                    newList.push(action.payload);
                } else {
                    return {
                        ...state,
                        list: [...newList.slice(0, indexproduct), {
                            id: action.payload.id,
                            name: action.payload.name,
                            image: action.payload.image,
                            price: action.payload.price,
                            amount: action.payload.amount + 1

                        }, ...newList.slice(indexproduct + 1)]
                    };
                }
                return {
                    ...state,
                    list: newList
                };
            }
        case "REMOVE_CART":
            {
                const newList = state.list.filter((item) => item.id !== action.payload.id);
                return {
                    ...state,
                    list: newList
                };
            }
        default:
            {
                return state;
            }
    }
}

export default AddToCart;