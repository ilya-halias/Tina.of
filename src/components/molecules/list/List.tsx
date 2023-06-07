import React from "react";
// data
import { descriptionList, equipmentList } from "./mockData";
// components
import { ListItem } from "../../atoms/listItem/ListItem";
import { EquipmentListItem } from "../../atoms/EquipmentListItem/EquipmentListItem";
import { dataText } from "../../../translate/ru/dataRu";

export const List = () => {
  return (
    <div>
      <h2 className=" text-2xl p-4 sm:text-4xl md:text-5xl text-center md:p-16 lg:py-8">
        {" "}
        {dataText.describes.title}
      </h2>
      <ul>
        {descriptionList.map((item) => (
          <ListItem key={item.id} data={item} />
        ))}
      </ul>
      <h2 className=" text-2xl p-4 sm:text-4xl md:text-5xl text-center md:p-12 lg:py-8">
        {dataText.equipment.title}
      </h2>
      <ul>
        {equipmentList.map((item) => (
          <EquipmentListItem key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
};
