import { instance } from "@/Instance";
import { Food } from "@/types/foodType";
import { InvoiceType } from "@/types/invoiceType";
export const createOrder = async (
  selectedFoods: Food[],
  token: string | null,
  total: number,
  setInvoice: React.Dispatch<React.SetStateAction<InvoiceType>>
) => {
  try {
    const orderRes = await instance.post("/createOrder", selectedFoods, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const tokenRes = await instance.post(
      "https://merchant.qpay.mn/v2/auth/token",
      null,
      {
        headers: { Authorization: `Basic UE9XRVJfRVhQTzpvOXc4V0xoWg==` },
      }
    );
    localStorage.setItem("paymentToken", tokenRes.data.access_token);
    const invoiceRes = await instance.post(
      "/createInvoice",
      {
        token: tokenRes.data.access_token,
        amount: total,
        orderId: orderRes.data.id,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    localStorage.setItem("invoiceId", invoiceRes.data.invoice_id);
    setInvoice(invoiceRes.data);
  } catch (error) {
    console.error("error in createOrder", error);
  }
};
