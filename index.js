
const redux = require('redux');

// [cakes,sweets ]
// [cakesReducer , sweetsReducer]

const ORDERED_CAKES = "ORDERED_CAKES";
const ORDERED_SWEETS = "ORDERED_SWEETS";
const RESTORE_CAKES = "RESTORE_CAKES";
const RESTORE_SWEETS = "RESTORE_SWEETS";


const initialStateforCakes = {
    cakes : 100
}

const initialStateforSweets = {
  sweets : 200
}

const orderCakes = (qty)=>{
    return{

        type : ORDERED_CAKES,
        payload : {qty : qty}
    }
}
const restoreCakes = (qty)=>{
    return{
        type :RESTORE_CAKES,
        payload : {qty : qty}

    }
}

const orderSweets = (qty)=>{
    return{

        type : ORDERED_SWEETS,
        payload : {qty : qty}
    }
}

const restoreSweets = (qty)=>{
    return{
        type :RESTORE_SWEETS,
        payload : {qty : qty}

    }
}

const cakesReducer = (state = initialStateforCakes, action)=>{
    switch(action.type){
        case ORDERED_CAKES :
            return {
                ...state,
                cakes : state.cakes - action.payload.qty
            }
            case RESTORE_CAKES :
            return {
                ...state,
                cakes : state.cakes + action.payload.qty
            }
  default :
  return state
    }

}
const sweetsReducer = (state = initialStateforSweets , action)=>{
    
    switch(action.type){
        case ORDERED_SWEETS:
            return {
                ...state,
                sweets : state.sweets - action.payload.qty
            }
            case RESTORE_SWEETS:
                return {
                    ...state,
                    sweets : state.sweets + action.payload.qty
                }
  default :
  return state
    }
}

// combinedReducers

const rootReducer = redux.combineReducers({
      cakes : cakesReducer,
      sweets : sweetsReducer
});
const store = redux.createStore(rootReducer);

console.log("Initial State =>",store.getState());
store.subscribe(()=>{
    console.log("Next state => ", store.getState());
})

store.dispatch(orderCakes(10));
store.dispatch(orderSweets(25));

store.dispatch(restoreCakes(100));
store.dispatch(restoreSweets(250));