/* 
Time to practice removing items from an array. The spread operator can be 
used here as well. Other useful JavaScript methods include slice() and 
concat() too.

//-----------------------------------------------------------------------------

The reducer and action creator were modified to remove an item from an 
array based on the index of the item. Finish writing the reducer so a 
new state array is returned with the item at the specific index removed.
 */

const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {

    switch (action.type) {   // 1
        case 'REMOVE_ITEM':
            // Don't mutate state here or the tests will fail
            let newState = [...state];
            newState.splice(action.index, 1)
            return newState
        default:
            return state;
    }

    // switch (action.type) {  // 2
    //     case "REMOVE_ITEM":
    //         // don't mutate state here or the tests will fail
    //         return [
    //             ...state.slice(0, action.index),
    //             ...state.slice(action.index + 1, state.length)
    //         ];
    //     default:
    //         return state;
    // }

    // switch (action.type) {  // 3
    //     case "REMOVE_ITEM":
    //         // don't mutate state here or the tests will fail
    //         return state.slice(0, action.index).concat(state.slice(action.index + 1, state.length));
    //     default:
    //         return state;
    // }
};

const removeItem = (index) => {
    return {
        type: 'REMOVE_ITEM',
        index
    }
}

const store = Redux.createStore(immutableReducer);




//------------------------------------------------------------------------

const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {

};

const removeItem = index => {
    return {
        type: "REMOVE_ITEM",
        index
    };
};

const store = Redux.createStore(immutableReducer);