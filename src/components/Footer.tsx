import React from "react";
import { Logo } from "../svg/Logo";
import { Whitelogo } from "../svg/Whitelogo";
import { Meta } from "../svg/Meta";
import { Instagram } from "../svg/Instagram";
import { Twitter } from "../svg/Twitter";
import { useRouter } from "next/router";

type Props = {};

export const Footer = (props: Props) => {
  const router = useRouter();
  return (
    <div className="bg-[#18BA51] bg-[url('/bg.png')] w-full h-96 flex flex-col justify-between items-center py-12">
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={() => router.push("/")}
          className="w-6 h-6 rounded-[50]"
        >
          <Whitelogo />
        </button>
        <p className="font-semibold text-2xl">Food Delivery</p>
      </div>
      <div className="flex gap-16">
        <button
          onClick={() => router.push("/")}
          className="text-white text-xl font-medium"
        >
          Нүүр
        </button>
        <button className="text-white text-xl font-medium">Холбоо барих</button>
        <button
          onClick={() => router.push("/menu")}
          className="text-white text-xl font-medium"
        >
          Хоолны цэс
        </button>
        <button
          onClick={() => router.push("/footerinfo")}
          className="text-white text-xl font-medium"
        >
          Үйлчилгээний нөхцөл
        </button>
        <button
          onClick={() => router.push("/footerinfo")}
          className="text-white text-xl font-medium"
        >
          Нууцын бодлого
        </button>
      </div>
      <div className="flex gap-4">
        <a
          href="https://www.facebook.com/profile.php?id=100030129013700"
          className="w-8 h-8"
        >
          <Meta />
        </a>
        <a href="https://www.instagram.com/saikono_ace/" className="w-8 h-8">
          <Instagram />
        </a>
        <a className="w-8 h-8">
          <Twitter />
        </a>
      </div>
      <div className="bg-white w-3/4 h-[1px]"></div>
      <div className="flex flex-col justify-center items-center">
        <p>© 2024 Pinecone Foods LLC</p>
        <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
      </div>
    </div>
  );
};
