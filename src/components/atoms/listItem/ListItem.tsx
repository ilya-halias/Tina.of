import React from "react";
// types
import { DescribeListItemType } from "../../molecules/list/mockDataType";

type Props = {
  data: DescribeListItemType;
};
export const ListItem = ({ data }: Props) => {
  return (
    <li className=" overflow-hidden text-base m-1.5 sm:text-2xl 2xl:text-3xl  md:m-4">
      {data.title}
    </li>
  );
};
