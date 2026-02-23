import React, { PropsWithChildren } from "react";

type Props = {
  className: string;
  orientation?: string;
} & PropsWithChildren;

export const NavMenu = ({ children, className, orientation }: Props) => {
  return <div>NavMenu</div>;
};
