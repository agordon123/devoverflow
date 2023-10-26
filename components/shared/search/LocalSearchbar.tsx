"use client";
import React from "react";
import { Input } from "../../ui/input";
import Image from "next/image";

interface CustomInputProps {
  route: string;
  iconPosition: string;
  placeholder: string;
  otherClasses?: string;
  imgSrc: string;
}
const LocalSearchbar = ({
  route,
  iconPosition,
  placeholder,
  imgSrc,
  otherClasses,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          className="cursor-pointer"
          alt="search"
          width={24}
          height={24}
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient text-dark400_light700  border-none shadow-none outline-none "
      />
      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          className="cursor-pointer"
          alt="search icon"
          width={24}
          height={24}
        />
      )}
    </div>
  );
};

export default LocalSearchbar;
