import React from "react";
// images


import Tina from "./assets/img/tina.jpeg";
import TinaINSuit from "./assets/img/tina_in_suit .jpeg";
import TattooMachine from "./assets/img/tattoo_machine1.jpeg";
import TattooMachineHand from "./assets/img/tattoo_machine2.jpeg";
import TattooMachineInTheHands from "./assets/img/tattoo_machine4.jpeg";
// import Logo from "./assets/img/logo.svg";
import Logo from "./assets/img/logo.png"

import { dataText } from "./translate/ru/dataRu";
import { List } from "./components/molecules/list/List";
import {Footer} from "./components/organisms/footer/Footer";

export const App = () => {
  return (

    <div className="bg-dark-100">
      <div className={"content-center flex-col "}>
          <img className="fill-white-100 mx-auto my-20 " src={Logo}  alt="Logo"/>

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
      <div className="footer">
       <Footer/>
      </div>
    </div>
  );
};
