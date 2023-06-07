import React from "react";
import "./footer.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-dark-100 text-center p-8 ">
      <div className={"pt-3"}>
        ИП Заяц Валентина Васильевна УНП791093989 Гос.регистрация от 7 сентября
        2018г Номер 0704780
      </div>
      <div className={"pt-3"}>
        Юр.адрес: г.Могилёв ул.Космонавтов 17-25 +375333792389 e-mail
        Shendrikova1964@mail.ru
      </div>
      <div className={"pt-3"}>
        Время работы пункта самовывоза : ПН-ПТ с 10:00 до 17:00 | Время приёма
        заказов по телефону : ПН-ПТ с 9:00 до 20:00 Приём заказов на сайте:
        круглосуточно
      </div>
      <p>
        Регистрационный номер в торговом реестре Республики Беларусь: 557597
      </p>

      <div className={"flex flex-col md:flex-row md:justify-center"}>
        <p>
          {" "}
          <Link to={"/returnGoods"}>Возврат и обмен товара</Link>
        </p>
        <p>
          {" "}
          <Link to={"/declaration"} className={"pl-8"}>
            Декларация о соответствии
          </Link>
        </p>
      </div>
    </div>
  );
};
