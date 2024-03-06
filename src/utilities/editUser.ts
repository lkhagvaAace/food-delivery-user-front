import { instance } from "@/Instance";

type userValuesType = {
  name: string;
  email: string;
  phoneNumber: number;
};
export const edit = async (
  e: React.FormEvent<HTMLFormElement>,
  values: userValuesType,
  img: File | null,
  id: string
) => {
  e.preventDefault();
  try {
    const user = {
      id: id,
      name: values.name,
      email: values.email,
      phoneNumber: values.phoneNumber,
    };
    const formData = new FormData();
    formData.append("user", JSON.stringify(user));
    if (!img) {
      return false;
    }
    formData.append("image", img);
    const res = await fetch("http://localhost:3005/updateUser", {
      method: "PUT",
      body: formData,
    });
    if (res.status == 200) alert("Successfully updated");
  } catch (error) {
    console.error("error in editUser", error);
    alert("failed to updated");
  }
};
