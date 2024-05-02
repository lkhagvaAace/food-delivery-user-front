import { Food } from "@/types/foodType";
export const putIntoBasket = async (
  product: Food,
  type: boolean,
  selectedFoods: Food[],
  setSelectedFoods: React.Dispatch<React.SetStateAction<Food[]>>
) => {
  try {
    const action = type ? 1 : -1;
    let indexFinder: number = 0;
    for (let i = 0; i < selectedFoods.length; i++) {
      if (product._id === selectedFoods[i]._id) {
        indexFinder = i;
        break;
      }
    }
    const previosProducts: Food[] = selectedFoods.filter((el, i) => {
      return i < indexFinder;
    });
    const nextProducts: Food[] = selectedFoods.filter((el, i) => {
      return i > indexFinder;
    });
    const newProduct: Food = {
      ...product,
      count: product.count + action,
    };
    setSelectedFoods([...previosProducts, newProduct, ...nextProducts]);
  } catch (error) {}
};
