import React from "react";
// data
import {descriptionList, equipmentList} from "./mockData";
// components
import { ListItem } from "../../atoms/listItem/ListItem";
import {EquipmentListItem} from "../../atoms/EquipmentListItem/EquipmentListItem";
import {dataText} from "../../../translate/ru/dataRu";

export const List = () => {
  return (
      <div>
    <ul>
      {descriptionList.map((item) => (
        <ListItem key={item.id} data={item} />
      ))}
    </ul>
          <h3 className="text-6xl text-center p-12"> {dataText.equipment.title}</h3>
        <ul>
            {equipmentList.map((item) => (
                <EquipmentListItem key={item.id} data={item} />
            ))}
        </ul>
      </div>
  );
};
