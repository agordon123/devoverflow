"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { removeKeysFromQuery, formUrlQuery } from "@/lib/utils";
import GlobalResult from "./GlobalResult";
interface Props {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasses?: string | undefined;
  containerClasses?: string;
}
const GlobalSearch = ({ filters, otherClasses, containerClasses }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [search, setSearch] = useState(query || "");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "global",
          value: search,
        });

        router.push(newUrl, { scroll: false });
      } else {
        if (query) {
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ["global", "type"],
          });

          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, router, pathname, searchParams, query]);
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
          value={search}
          className="paragraph-regular no-focus placeholder text-dark400_light700 background-light800_darkgradient border-none bg-transparent shadow-none outline-none"
          onChange={(e) => {
            setSearch(e.target.value);
            if (!isOpen) setIsOpen(true);
            if (e.target.value === "") setIsOpen(false);
          }}
        />
      </div>
      {isOpen && <GlobalResult />}
    </div>
  );
};

export default GlobalSearch;
