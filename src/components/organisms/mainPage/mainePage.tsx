import Logo from "../../../assets/img/logo.png";
import { dataText } from "../../../translate/ru/dataRu";
import TattooMachine from "../../../assets/img/tattoo_machine1.jpeg";
import TattooMachineInTheHands from "../../../assets/img/tattoo_machine4.jpeg";
import TattooMachineHand from "../../../assets/img/tattoo_machine2.jpeg";
import Tina from "../../../assets/img/tina.jpeg";
import { List } from "../../molecules/list/List";
import React from "react";

export const MainPage = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-dark-100">
      <div className={"content-center flex-col "}>
        <div>
          <img
            className="fill-white-100 mx-auto mt-20 mb-4 p-4 md:mb-10"
            src={Logo}
            alt="Logo"
          />
        </div>
        <p className="text-right pr-4 text-base md:text-right 2xl::pr-40 md:text-2xl">
          by Valentina Zayats
        </p>

        <h1 className="text-2xl p-4 sm:text-4xl md:text-6xl text-center md:p-16">
          {dataText.smallHeader}
        </h1>
      </div>
      <div>
        <div
          className={
            "flex flex-col px-4   lg:flex-row md:gap-2 lg:justify-between lg:m-0 2xl:px-52 md:m-12"
          }
        >
          <div className={"sm:self-center"}>
            <img
              className=" my-4 sl:max-w-sm object-cover sm:max-w-xl lg:max-w-xs 2xl:max-w-md"
              src={TattooMachine}
              alt={"tattooMashine"}
            />
          </div>
          <div className={"sm:self-center"}>
            <img
              className="my-4 sl:max-w-sm object-cover sm:max-w-xl lg:max-w-xs 2xl:max-w-md "
              src={TattooMachineInTheHands}
              alt={"tattooMashine"}
            />
          </div>
          <div className={"sm:self-center"}>
            <img
              className=" my-4 sl:max-w-sm object-cover sm:max-w-xl lg:max-w-xs 2xl:max-w-md"
              src={TattooMachineHand}
              alt={"tattooMashine"}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-3 px-4   lg:flex-row lg:justify-around  lg:mt-20 ">
        <div className={"sm:self-center"}>
          <img
            className={
              "my-4   object-cover sl:max-w-sm sm:max-w-xl lg:max-h-100 md:max-w-xl lg:max-w-xs 2xl:max-w-xl md:max-h-160"
            }
            src={Tina}
            alt="Tina"
          />
        </div>
        <List />
      </div>
    </div>
  );
};
