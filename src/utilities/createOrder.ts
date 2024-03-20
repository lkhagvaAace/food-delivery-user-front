import { instance } from "@/Instance";
import { Food } from "@/types/foodType";
export const createOrder = async (
  selectedFoods: Food[],
  token: string | null
) => {
  try {
    const res = await instance.post("/createOrder", selectedFoods, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status != 201) return alert("Failed to createOrder");
  } catch (error) {
    console.error("error in createOrder", error);
  }
};
