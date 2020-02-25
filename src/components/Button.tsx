import clsx from "clsx";
import Color from "color";
import React from "react";
import { createUseStyles } from "react-jss";

import { ColorOptions, ThemeType } from "../types/themeTypes";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: ColorOptions;
  label: string;
  className?: string;
}

const Button = React.forwardRef((props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const { className, label, ...rest } = props;

  const classes = useStyles({ ...props });

  return (
    <button className={clsx(classes.root, className)} ref={ref} {...rest}>
      <span className={clsx(classes.label)}>{label}</span>
    </button>
  );
});

const useStyles = createUseStyles((theme: ThemeType) => ({
  root: ({ color }: ButtonProps) => ({
    padding: "6px 10px",
    border: "none",
    borderRadius: "3px",
    color: theme.palette.text.light,
    outline: "none",
    minWidth: "100px",
    backgroundColor: theme.palette[color || "primary"],
    margin: 5,
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: Color(theme.palette[color || "primary"])
        .darken(0.1)
        .hex()
    },
    "&:active": {
      backgroundColor: Color(theme.palette[color || "primary"])
        .darken(0.2)
        .hex()
    }
  }),
  label: {
    fontSize: 13,
    textTransform: "uppercase",
    fontWeight: "600"
  }
}));

export default Button;
