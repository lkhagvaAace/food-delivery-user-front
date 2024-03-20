import { Phonenumber } from "@/svg/Phonenumber";
import { User } from "@/types/userType";

type userValuesType = {
  name: string;
  email: string;
  phoneNumber: number;
};
export const edit = async (
  e: React.FormEvent<HTMLFormElement>,
  values: userValuesType,
  userInfo: User,
  img: File,
  id: string,
  setLoading: any,
  setAlertVisible: any,
  setAlertWord: any,
  setOnEdit: any
) => {
  e.preventDefault();
  try {
    if (!img && !values.name && !values.email && !values.phoneNumber) {
      setOnEdit(false);
      return;
    }
    setLoading(true);
    const firstUser = {
      id: id,
      name: values.name ? values.name : userInfo.name,
      email: values.email ? values.email : userInfo.email,
      phoneNumber: values.phoneNumber
        ? values.phoneNumber
        : userInfo.phoneNumber,
    };
    const formData = new FormData();
    if (!img) {
      const user = {
        id: id,
        name: values.name ? values.name : userInfo.name,
        email: values.email ? values.email : userInfo.email,
        phoneNumber: values.phoneNumber
          ? values.phoneNumber
          : userInfo.phoneNumber,
        image: userInfo.avatarImg,
      };
      formData.append("user", JSON.stringify(user));
    } else {
      formData.append("image", img);
      formData.append("user", JSON.stringify(firstUser));
    }
    const res = await fetch("http://localhost:8080/updateUser", {
      method: "PUT",
      body: formData,
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    if (res.status == 200) {
      setAlertWord("Хувийн мэдээлэл амжилттай шинэчлэгдлээ!");
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 2000);
    }
    setOnEdit(false);
  } catch (error) {
    console.error("error in editUser", error);
    alert("failed to updated");
  }
};
