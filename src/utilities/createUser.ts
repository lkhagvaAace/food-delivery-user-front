import { instance } from "@/Instance";
import { valuesType } from "@/types/valuesType";
export const createUser = async (
  e: React.FormEvent<HTMLFormElement>,
  values: valuesType,
  setLoading: any
) => {
  e.preventDefault();
  setLoading(true);
  try {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    const res = await instance.post("/createUser", user);
    return res.status;
  } catch (error) {
    console.error("error in createUser", error);
    setLoading(false);
    return alert("User already exist");
  }
};
