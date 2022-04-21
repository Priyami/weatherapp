import { createStore } from 'redux';

const initialState = {

    historyItem: [],
    
}

const weatherReducer = (state = initialState, action) => {
    if (action.type === 'ADD') {
       // let updatedItems = [...state.historyItem];
       let  updatedItems = state.historyItem.concat(action.item);
        updatedItems = updatedItems.filter((obj, pos, arr) => {
            return arr.map(mapObj =>
                mapObj.cityName).indexOf(obj.cityName) == pos;
        });

        return {
            ...state,
            historyItem: updatedItems,

        };

    }

    return state;
}

const store = createStore(weatherReducer);

export default store;