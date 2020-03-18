const initialState = {
    name: 'md',
    result: []
}

export default (state = initialState, action) => {
    console.log("reducer", action.type, action.payload);
    switch (action.type) {
     case 'SIMPLE_ACTION':
        state.result.push(action.payload);
      return  {...state}
     default:
      return state;
    }
   }