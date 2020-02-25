import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../components/Button";
import MainLayout from "../layouts/MainLayout";
import { decrement, increment, incrementAsync } from "../store/modules/counter/actions";
import { getCount } from "../store/modules/counter/selectors";
import { RootState } from "../store/reducers";

const CounterPage = () => {
  const count = useSelector<RootState, number>(getCount);
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment());
  };

  const decrementCount = () => {
    dispatch(decrement());
  };

  const incrementCountAsync = () => {
    dispatch(incrementAsync());
  };

  return (
    <MainLayout variant="fluid">
      <h1 style={{ color: "white" }}>{count}</h1>
      <Button onClick={incrementCount} label="Increment" />
      <Button onClick={decrementCount} color="error" label="Decrement" />
      <Button onClick={incrementCountAsync} color="secondary" label="Increment Async" />
    </MainLayout>
  );
};

export default CounterPage;
