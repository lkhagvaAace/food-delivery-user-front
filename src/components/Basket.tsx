import { instance } from "@/Instance";
import { isBasketBarVisibleContext } from "@/context/BasketContext";
import { OrderContext } from "@/context/OrderContext";
import { SelectedFoodContext } from "@/context/SelectedFoodContext";
import { UserIdContext } from "@/context/UserIdContext";
import { Cancel } from "@/svg/Cancel";
import { Rightarrow } from "@/svg/Rightarrow";
import { Food } from "@/types/foodType";
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
type ThemContextType = {
  selectedFoods: Food[];
  setSelectedFoods: Dispatch<SetStateAction<Food[]>>;
};

export const Basket = () => {
  const { userId, setUserId } = useContext(UserIdContext);
  const { isBasketBarVisible, setIsBasketBarVisible } = useContext(
    isBasketBarVisibleContext
  );
  const { selectedFoods, setSelectedFoods } =
    useContext<ThemContextType>(SelectedFoodContext);
  const [total, setTotal] = useState<number>(0);
  const deleting = (id: number) => {};
  const countChange = (data: Food, type: string) => {
    // const newArray: Food[] = selectedFoods.filter((el: Food) => {
    //   return el.id != data.id;
    // });
    // if (type === "minus" && data.count > 1) {
    //   setSelectedFoods([
    //     ...newArray,
    //     {
    //       id: data.id,
    //       foodName: data.foodName,
    //       price: data.price,
    //       img: data.img,
    //       categoryName: data.categoryName,
    //       count: data.count - 1,
    //     },
    //   ]);
    // }
    // if (type === "sum") {
    //   setSelectedFoods([
    //     ...newArray,
    //     {
    //       id: data.id,
    //       foodName: data.foodName,
    //       price: data.price,
    //       img: data.img,
    //       categoryName: data.categoryName,
    //       count: data.count + 1,
    //     },
    //   ]);
    // }
  };
  const countingTotal = useMemo(() => {
    const sum: number = selectedFoods.reduce(
      (acc: number, cur: Food) => acc + cur.price * cur.count,
      0
    );
    setTotal(sum);
  }, [selectedFoods]);
  const createOrder = async () => {
    try {
      const orderNumber = Math.floor(Math.random() * 100000 + 1);
      const selectedOrder = {
        userId: userId,
        orderNumber: orderNumber,
        foods: selectedFoods,
        totalPrice: total,
        process: "Waiting",
        createdDate: new Date(),
      };
      const res = await instance.post("/createOrder", selectedOrder);
      console.log("res", res);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(userId);
  return (
    <div className="absolute z-1 flex justify-end w-full h-full bg-gray-100">
      <div className="absolute z-2 flex flex-col bg-white items-center justify-between w-1/3 px-8 rounded-lg min-h-screen border-[1px] border-solid border-black">
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center p-2 pr-12">
            <button onClick={() => setIsBasketBarVisible(false)}>
              <Rightarrow />
            </button>
            <p className="text-black font-medium text-lg">Таны сагс</p>
            <p></p>
          </div>
          <hr></hr>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {selectedFoods?.map((data) => {
            return (
              <div className="flex w-full justify-between">
                {data && data.img && (
                  <img src={`${data.img}`} className="w-1/2" alt="Food Image" />
                )}

                <div className="flex flex-col w-1/2 px-8 gap-16">
                  {data && data.name && data.price && data.count && (
                    <div className="flex">
                      <div className="flex flex-col">
                        <p className="text-black text-xl font-semibold">
                          {data.name}
                        </p>
                        <p className="text-lg text-green-500">{data.price} ₮</p>
                      </div>
                      <button
                        // onClick={() => {
                        //   deleting(data._id);
                        // }}
                        className="w-8 h-8"
                      >
                        <Cancel />
                      </button>
                    </div>
                  )}
                  <div className="flex justify-between w-3/4 items-center">
                    <button
                      onClick={() => {
                        countChange(data, "minus");
                      }}
                      className="text-white bg-green-500 w-8 h-8 rounded-lg justify-center items-center font-semibold text-3xl flex"
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
                      className="text-white bg-green-500 w-8 h-8 rounded-lg justify-center items-center font-semibold text-3xl flex"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full h-fit flex justify-between px-4 py-2">
          <div className="flex flex-col gap-2">
            <label className="text-xs text-gray-500">Нийт төлөх дүн</label>
            <p className="text-sm font-bold text-black">{total}</p>
          </div>
          <button
            onClick={() => {
              setIsBasketBarVisible(false);
              if (selectedFoods.length > 0) {
                createOrder();
                setSelectedFoods([]);
              }
            }}
            className="bg-green-500 rounded-lg w-1/2 h-12"
          >
            Захиалах
          </button>
        </div>
      </div>
    </div>
  );
};
