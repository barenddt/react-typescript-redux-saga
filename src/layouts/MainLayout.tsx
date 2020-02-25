import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";

import { ThemeType } from "../types/themeTypes";

interface MainLayoutProps {
  variant?: "fluid" | "fixed";
  className?: string;
  children: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  const { variant = "fixed", className, children } = props;
  const classes = useStyles({ ...props });

  return <div className={clsx(classes.root, classes[variant], className)}>{children}</div>;
};

const useStyles = createUseStyles((theme: ThemeType) => ({
  root: {
    fontFamily: "Overpass",
    backgroundColor: theme.palette.backgrounds.dark,
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  fluid: {
    width: "100%"
  },
  fixed: {
    width: "65%",
    margin: "auto"
  }
}));
export default MainLayout;
