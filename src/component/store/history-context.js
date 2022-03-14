import { createStore} from 'redux';

const initialState = {
   
    historyItem: [],
    
}

const weatherReducer = (state = initialState, action) => {    
    if(action.type === 'ADD') {
           let updatedItems  = [...state.historyItem];
           updatedItems = state.historyItem.concat(action.item);
           console.log("Store History", updatedItems);
           updatedItems = updatedItems.filter((obj, pos, arr) => {
               console.log("arr", arr)
            return arr.map(mapObj =>
                  mapObj.cityName).indexOf(obj.cityName) == pos;
            });
          console.log(updatedItems);

        return {
            ...state,
            historyItem: updatedItems,
            
        };  
    }
   return state;
}

const store = createStore(weatherReducer);

export default store;