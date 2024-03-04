import { instance } from "@/Instance";
import { Food } from "@/types/foodType";
export const getFoods = async (getFoodsFunction: (data: Food[]) => void) => {
  try {
    const res = await instance.get("/getFoods");
    getFoodsFunction(res.data);
  } catch (error) {
    console.error("error in getfoods", error);
  }
};
