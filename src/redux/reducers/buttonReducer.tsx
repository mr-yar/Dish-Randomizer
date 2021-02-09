const initialState = {meals: null};

export function buttonReducer(
  state = initialState,
  action: {type: string; payload: any}
): any {
  if (action.type === 'BUTTON_LOAD') {
    return {
      ...state,
      meals: action.payload
    };
  }
  return state;
}
