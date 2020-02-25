import { CounterActionTypes, CounterState, DECREMENT, INCREMENT } from "./types";

let initialState: CounterState = {
  count: 0
};

export default function counter(state = initialState, action: CounterActionTypes): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: ++state.count };
    case DECREMENT:
      return { ...state, count: --state.count };
    default:
      return { ...state };
  }
}
