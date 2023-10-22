"use client";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { GlobalSearchFilters } from "@/constants/filters";
interface Props {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasses?: string | undefined;
  containerClasses?: string;
}
const GlobalSearch = ({ filters, otherClasses, containerClasses }: Props) => {
  return (
    <div
      className={`${containerClasses}relative w-full max-w-[600px] max-lg:hidden`}
    >
      <div
        className={`${otherClasses}background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4`}
      >
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />

        <Input
          type="text"
          placeholder="Search globally"
          value=""
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
