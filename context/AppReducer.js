export const initialState = {
    cart: {
        items: {},
        total: 0,
    },
};

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'init_stored': {
            return action.value;
        }
        case 'add_cart': {
            console.log(action.value.quantity)
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: {
                        ...state.cart.items,
                        [action.value.id]: {
                            ...action.value,
                            quantity:
                                action.value.id in state.cart.items ?
                                    action.value.quantity + state.cart.items[action.value.id].quantity : action.value.quantity,
                        }
                    },
                    total: state.cart.total + action.value.quantity,
                },
            };
        }
        case 'remove_cart': {
            const quantity = state.cart.items[action.value].quantity;
            const newItems = Object.keys(state.cart.items).filter((id) => id !== action.value)
                .reduce((obj, key) => {
                    obj[key] = state.cart.items[key];
                    return obj;
                }, {});

            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: newItems,
                    total: state.cart.total - quantity,
                },
            };
        }
    }
};
