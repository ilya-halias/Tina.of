import React from "react";
// types
import {EquipmentListItemType, EquipmentListType} from "../../molecules/list/mockDataType";

type Props = {
    data: EquipmentListItemType;
};
export const EquipmentListItem = ({ data }: Props) => {
    return <li className="text-2xl m-4">{data.title}</li>;
};
