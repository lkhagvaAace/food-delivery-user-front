import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fooddetail } from "@/context/FDVisiblityContext";
import { SelectedFoods } from "@/context/SelectedFoodContext";
import { BasketBarVisiblity } from "@/context/BasketContext";
import { FoodInfo } from "@/context/FoodDetail";
import { Order } from "@/context/OrderContext";
import { LoginVisiblity } from "@/context/LoginVisiblity";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SelectedFoods>
      <FoodInfo>
        <Order>
          <BasketBarVisiblity>
            <LoginVisiblity>
              <Fooddetail>
                <Component {...pageProps} />
              </Fooddetail>
            </LoginVisiblity>
          </BasketBarVisiblity>
        </Order>
      </FoodInfo>
    </SelectedFoods>
  );
}
