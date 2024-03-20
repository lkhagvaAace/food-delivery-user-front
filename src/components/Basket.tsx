import { AlertVisibleContext } from "@/context/AlertVisiblity";
import { AlertWordContext } from "@/context/AlertWord";
import { isBasketBarVisibleContext } from "@/context/BasketContext";
import { NewInBasketContext } from "@/context/NewInBaskter";
import { SelectedFoodContext } from "@/context/SelectedFoodContext";
import { Cancel } from "@/svg/Cancel";
import { Leftarrow } from "@/svg/Leftarrow";
import { Food } from "@/types/foodType";
import { createOrder } from "@/utilities/createOrder";
import { useRouter } from "next/router";
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
type ThemContextType = {
  selectedFoods: Food[];
  setSelectedFoods: Dispatch<SetStateAction<Food[]>>;
};
export const Basket = () => {
  const { newInBasket, setNewInBasket } = useContext(NewInBasketContext);
  const router = useRouter();
  const { isBasketBarVisible, setIsBasketBarVisible } = useContext(
    isBasketBarVisibleContext
  );
  const { alertVisible, setAlertVisible } = useContext(AlertVisibleContext);
  const { alertWord, setAlertWord } = useContext(AlertWordContext);
  const [token, setToken] = useState<string | null>("");
  const { selectedFoods, setSelectedFoods } =
    useContext<ThemContextType>(SelectedFoodContext);
  const [total, setTotal] = useState<number>(0);
  const deleting = (id: string) => {
    const newBasketFood = selectedFoods.filter((el: Food) => {
      return el._id !== id;
    });
    setSelectedFoods(newBasketFood);
  };
  const countChange = (data: Food, type: string) => {
    const newArray: Food[] = selectedFoods.filter((el: Food) => {
      return el._id != data._id;
    });
    const minusFood: Food = {
      _id: data._id,
      name: data.name,
      price: data.price,
      img: data.img,
      category: data.category,
      count: data.count - 1,
      _v: 0,
      isSale: data.isSale,
      ingredients: data.ingredients,
    };
    const plusFood: Food = {
      _id: data._id,
      name: data.name,
      price: data.price,
      img: data.img,
      category: data.category,
      count: data.count + 1,
      _v: 0,
      isSale: data.isSale,
      ingredients: data.ingredients,
    };
    if (type === "minus" && data.count > 1) {
      setSelectedFoods([...newArray, minusFood]);
    }
    if (type === "sum") {
      setSelectedFoods([...newArray, plusFood]);
    }
  };
  const countingTotal = useMemo(() => {
    const sum: number = selectedFoods.reduce(
      (acc: number, cur: Food) =>
        acc + ((cur.price * (100 - cur.isSale.salePercent)) / 100) * cur.count,
      0
    );
    setTotal(sum);
  }, [selectedFoods]);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setToken(token);
    setNewInBasket(false);
  }, []);
  const ordering = async () => {
    try {
      createOrder(selectedFoods, token);
      setAlertWord("Амжилттай захиалга хийгдлээ!");
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 2000);
    } catch (error) {
      console.error("error in ordering", error);
    }
  };
  return (
    <div className="absolute z-30 flex justify-end w-full h-full">
      <div className="absolute z-30 flex flex-col bg-white items-center justify-between w-1/3 px-8 rounded-lg min-h-screen border-[1px] border-solid border-black">
        <div className="flex flex-col w-full h-1/6">
          <div className="flex justify-between items-center p-2 pr-12">
            <button onClick={() => setIsBasketBarVisible(false)}>
              <Leftarrow />
            </button>
            <p className="text-black font-medium text-lg">Таны сагс</p>
          </div>
          <hr></hr>
        </div>
        <div className="flex flex-col gap-4 w-full justify-start h-[750px] overflow-scroll mt-4">
          {selectedFoods.length > 0 ? (
            selectedFoods.map((data) => {
              return (
                <div key={data._id} className="flex w-full flex-col">
                  <div className="flex w-full justify-between">
                    {data && data.img && (
                      <img
                        src={`${data.img}`}
                        className="w-1/2 h-48"
                        alt="Food Image"
                      />
                    )}
                    <div className="flex flex-col w-1/2 px-8 gap-8">
                      {data && data.name && data.price && data.count && (
                        <div className="flex w-full justify-between">
                          <div className="flex flex-col">
                            <p className="text-black text-2xl font-bold">
                              {data.name}
                            </p>
                            <p className="text-lg font-bold text-green-500">
                              {data.isSale.isSale
                                ? (
                                    (data.price *
                                      (100 - data.isSale.salePercent)) /
                                    100
                                  ).toLocaleString()
                                : data.price.toLocaleString()}
                              ₮
                            </p>
                            <p className="text-lg text-gray-400 mt-4">
                              {data.ingredients}
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              deleting(data._id);
                            }}
                            className="w-8 h-8"
                          >
                            <Cancel />
                          </button>
                        </div>
                      )}
                      <div className="flex justify-between w-1/2 items-center gap-2">
                        <button
                          onClick={() => {
                            countChange(data, "minus");
                          }}
                          className="text-white bg-green-500 w-16 h-12 rounded-lg justify-center items-center font-semibold text-3xl flex"
                        >
                          -
                        </button>
                        <p className="text-black font-semibold text-lg flex items-center">
                          {data.count}
                        </p>
                        <button
                          onClick={() => {
                            countChange(data, "sum");
                          }}
                          className="text-white bg-green-500 w-16 h-12 rounded-lg justify-center items-center font-semibold text-3xl flex"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[1px] mt-8 bg-gray-400"></div>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col w-full justify-center items-center">
              <img src="./box.png" className="w-32 h-32" />
              <p className="text-black text-lg">Таны сагс хоосон байна.</p>
            </div>
          )}
        </div>
        <div className="w-full h-1/6 flex justify-between px-4 py-2">
          <div className="flex flex-col gap-2">
            <label className="text-xs text-gray-500">Нийт төлөх дүн</label>
            <p className="text-sm font-bold text-black">{total}</p>
          </div>
          {selectedFoods.length > 0 ? (
            <button
              onClick={() => {
                setIsBasketBarVisible(false);
                if (selectedFoods.length > 0) {
                  setSelectedFoods([]);
                }
                ordering();
              }}
              className="bg-green-500 rounded-lg w-1/2 h-12"
            >
              Захиалах
            </button>
          ) : (
            <button
              onClick={() => {
                setIsBasketBarVisible(false);
                setAlertWord("Таны сагс хоосон байна!");
                setAlertVisible(true);
                setTimeout(() => {
                  setAlertVisible(false);
                }, 2000);
              }}
              className="bg-gray-300 rounded-lg w-1/2 h-12"
            >
              Захиалах
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
