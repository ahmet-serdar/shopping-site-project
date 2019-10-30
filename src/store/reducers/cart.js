const initialState = {
  items: [],
  isModalOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      if (state.items.indexOf(action.item) === -1) {
        action.item.quantity =
          typeof action.quantity === "number" ? action.quantity : 1;
        return {...state, items: [...state.items, action.item]};
      } else {
        const index = state.items.indexOf(action.item);
        if(state.items[index].quantity >= 10){

          return {...state, isModalOpen:true}
        }      
        state.items[index].quantity =
          typeof action.quantity === "number"
            ? action.quantity
            : state.items[index].quantity + 1;
        return {...state};
      }
    }
    case "DELETE_ALL": {
      return state.items.filter(({ id }) => id !== action.id);
    }
    case 'CLOSE_MODAL': {
        return {...state, isModalOpen: false}
    }

    default: {
      return state;
    }
  }
};
