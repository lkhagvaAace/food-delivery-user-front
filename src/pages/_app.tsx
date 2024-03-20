import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fooddetail } from "@/context/FDVisiblityContext";
import { SelectedFoods } from "@/context/SelectedFoodContext";
import { BasketBarVisiblity } from "@/context/BasketContext";
import { FoodInfo } from "@/context/FoodDetail";
import { LoginVisiblity } from "@/context/LoginVisiblity";
import { InputValue } from "@/context/HeaderInput";
import { SelectedCategory } from "@/context/SelectedCategory";
import { AlertVisiblity } from "@/context/AlertVisiblity";
import { AlertWord } from "@/context/AlertWord";
import { NewInBasket } from "@/context/NewInBaskter";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SelectedFoods>
      <SelectedCategory>
        <FoodInfo>
          <InputValue>
            <BasketBarVisiblity>
              <LoginVisiblity>
                <Fooddetail>
                  <AlertVisiblity>
                    <AlertWord>
                      <NewInBasket>
                        <Component {...pageProps} />
                      </NewInBasket>
                    </AlertWord>
                  </AlertVisiblity>
                </Fooddetail>
              </LoginVisiblity>
            </BasketBarVisiblity>
          </InputValue>
        </FoodInfo>
      </SelectedCategory>
    </SelectedFoods>
  );
}
