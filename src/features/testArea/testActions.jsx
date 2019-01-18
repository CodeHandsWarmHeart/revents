import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants'

export const incrementCounter = () =>{
    return{
        type: INCREMENT_COUNTER //action must have a type

    }
}
export const decrementCounter = () =>{
    return{
        type: DECREMENT_COUNTER //action must have a type
        
    }
}