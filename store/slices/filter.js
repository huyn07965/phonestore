import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name : 'Filter',
    initialState : {
        items : {
            active : 'Mới nhất',
            fromValue: 0, 
            toValue: 50000000
        },
    },
    reducers : {
        Filter : ( state, actions ) => {
            const {active,fromValue,toValue} = actions.payload
            return {
                ...state.items,
                items: {
                    active,
                    fromValue,
                    toValue
                }
            }
        }
    }, 
})

export const {Filter} = filterSlice.actions
export default filterSlice.reducer
