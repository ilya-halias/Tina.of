import React from "react";
// types
import { DescribeListItemType } from "../../molecules/list/mockDataType";

type Props = {
  data: DescribeListItemType;
};
export const ListItem = ({ data }: Props) => {
  return <li className="text-2xl m-4">{data.title}</li>;
};
