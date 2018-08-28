const initialState = {
  name: 'Bob',
}


export default function (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {...state, name: action.payload }
    default:
      return state
  }
}
