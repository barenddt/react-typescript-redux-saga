export const INCREMENT = "INCREMENT";
export const INCREMENT_ASYNC = "INCREMENT_ASYNC";
export const DECREMENT = "DECREMENT";

export interface CounterState {
  count: number;
}

interface IncrementCounter {
  type: typeof INCREMENT;
}

interface DecrementCounter {
  type: typeof DECREMENT;
}

interface IncrementCounterAsync {
  type: typeof INCREMENT_ASYNC;
}

export type CounterActionTypes = IncrementCounter | IncrementCounterAsync | DecrementCounter;
