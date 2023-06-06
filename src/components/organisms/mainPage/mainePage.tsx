import Logo from "../../../assets/img/logo.png";
import { dataText } from "../../../translate/ru/dataRu";
import TattooMachine from "../../../assets/img/tattoo_machine1.jpeg";
import TattooMachineInTheHands from "../../../assets/img/tattoo_machine4.jpeg";
import TattooMachineHand from "../../../assets/img/tattoo_machine2.jpeg";
import Tina from "../../../assets/img/tina.jpeg";
import { List } from "../../molecules/list/List";
import TinaINSuit from "../../../assets/img/tina_in_suit .jpeg";
import React from "react";

export const MainPage = () => {
  return (
    <div className="bg-dark-100">
      <div className={"content-center flex-col "}>
        <img className="fill-white-100 mx-auto my-20 " src={Logo} alt="Logo" />
        <p className="text-right pr-40 text-3xl"> by Valentina Zayats</p>

        <h2 className="text-5xl text-center p-8 font-extralight">
          {dataText.smallHeader}
        </h2>
      </div>
      <div className={"flex justify-around m-16"}>
        <img className="max-w-sm" src={TattooMachine} />
        <img className="max-w-sm" src={TattooMachineInTheHands} />
        <img className="max-w-sm" src={TattooMachineHand} />
      </div>

      <h3 className="text-6xl text-center p-16"> {dataText.describes.title}</h3>

      <div className="flex justify-around">
        <img className={"max-h-100 max-w-xl"} src={Tina} alt="Tina" />
        <List />
        <img
          className={"max-h-100 max-w-xl"}
          src={TinaINSuit}
          alt="TinaINSuit"
        />
      </div>
    </div>
  );
};
