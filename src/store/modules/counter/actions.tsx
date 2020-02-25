import { CounterActionTypes, DECREMENT, INCREMENT, INCREMENT_ASYNC } from "./types";

export function increment(): CounterActionTypes {
  return {
    type: INCREMENT
  };
}

export function incrementAsync(): CounterActionTypes {
  return {
    type: INCREMENT_ASYNC
  };
}

export function decrement(): CounterActionTypes {
  return {
    type: DECREMENT
  };
}
