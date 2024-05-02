import { instance } from "@/Instance";
import { Dispatch, SetStateAction } from "react";
export const checkPayment = async (
  setIsPaid: Dispatch<SetStateAction<boolean>>
) => {
  try {
    const paymentCheckRes = await instance.post("/checkPayment", {
      invoiceId: localStorage.getItem("invoiceId"),
      token: localStorage.getItem("paymentToken"),
    });
    if (paymentCheckRes.data === "PAID") {
      localStorage.removeItem("invoiceId");
      localStorage.removeItem("paymentToken");
      setIsPaid(true);
    } else return alert("Not paid");
  } catch (error) {
    alert("Payment time is expired");
  }
};
