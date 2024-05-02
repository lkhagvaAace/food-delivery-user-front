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
import { QrVisiblity } from "@/context/QrVisiblity";
import { Invoice } from "@/context/InvoiceContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Invoice>
      <SelectedFoods>
        <SelectedCategory>
          <FoodInfo>
            <InputValue>
              <QrVisiblity>
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
              </QrVisiblity>
            </InputValue>
          </FoodInfo>
        </SelectedCategory>
      </SelectedFoods>
    </Invoice>
  );
}
