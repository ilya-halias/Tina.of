// @ts-ignore
import css from "../index.css"
import Tina from "../img/Tina .jpeg"
import TinaINSuit from "../img/Tina-in-suit .jpeg"
import TattooMachine from "../img/tattoo machine .jpeg"
import TattooMachineHand from "../img/tattoo machine  in the hand.jpeg"

import TattooMachineInTheHands from "../img/tattoo machine n the hands.jpeg"

export const App = () => {
    return (
        <div className='bg-black'>
            <div className={"content-center"}>
        <h1 className="text-9xl  text-center p-14 ">
            Tina
        </h1>
        <h2 className="text-5xl text-center p-8 font-extralight"  > Аппарат для перманентного макияжа</h2>

    </div>
            <div className={"flex justify-around m-16"}>
                 <img  className="max-w-sm" src={TattooMachine}/>
                <img className="max-w-sm" src={TattooMachineInTheHands}/>
                <img className="max-w-sm"src={TattooMachineHand}/>
            </div>

            <h3 className="text-6xl text-center p-16">Характеристики аппарата:</h3>


            <div className="flex justify-around">
            <img className={"max-h-100 max-w-xl"} src={Tina} alt="Tina"/>
                <ul >

                    <li className="text-2xl m-3">
                        Коллекторный двигатель 5 Ватт
                    </li>         <li className="text-2xl m-4">
                        Рабочий диапазон 5-10 Вольт
                    </li>        <li className="text-2xl m-4">
                        Максимальный ток двигателя 0.5 Ампер
                    </li>         <li className="text-2xl m-4">
                        Скорость двигателя 4.500- 9.000 об/мин
                    </li>        <li className="text-2xl m-4">
                        Количество проколов в секунду 60-130
                    </li>        <li className="text-2xl m-4">
                        Ход эксцентрика 3.5 мм
                    </li>        <li className="text-2xl m-4">
                        Вылет иглы 0-4.5 мм
                    </li>          <li className="text-2xl m-4">
                        Подключение RCA
                    </li>         <li className="text-2xl m-4">
                        Вес машинки 108 грамм
                    </li>
                </ul>
            <img className={"max-h-100 max-w-xl"} src={TinaINSuit} alt="TinaINSuit"/>
            </div>
            <div className={css.fother}>
                <p> Что-то еще будет</p>
            </div>
        </div>
    )
}
