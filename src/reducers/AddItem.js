export const initialState = {
    items:[],
    user: null,
}

export function AddItem(state=initialState,action){
    switch(action.type){
        case "ADD_ITEM":
            initialState.items.push(action.item)
            return {
                ...state,
                items: [...state.items,action.item]
            }
        case "REMOVE_ITEM":
            let index = state.items.find(x => x.id === action.item.id)
            console.log(index)
            let newItems = [...state.items];
            newItems.splice(index,1)
            return {
                ...state,
                items: newItems
                }
        case "EMPTY":
            initialState.items = []
            return{
                ...state,
                items: []
            }
        default:
            return state
    }
}

