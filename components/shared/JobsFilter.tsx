"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LocalSearchbar from "../shared/search/LocalSearchbar";

import { Country } from "@/types";
import { formUrlQuery } from "@/lib/utils";
import React from "react";

interface JobsFilterProps {
  countriesList: Country[];
  otherClasses?: string | undefined;
  containerClasses?: string;
}
const JobsFilter = ({
  countriesList,
  otherClasses,
  containerClasses,
}: JobsFilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const handleUpdateParams = (value: string) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "location",
      value,
    });

    router.push(newUrl, { scroll: false });
  };
  const paramFilter = searchParams.get("location");
  return (
    <div className="relative mt-11 flex w-full justify-between gap-5 max-sm:flex-col sm:items-center">
      <LocalSearchbar
        route={pathname}
        iconPosition="left"
        imgSrc="/assets/icons/job-search.svg"
        placeholder="Job Title, Company, or Keywords"
        otherClasses="flex-1 max-sm:w-full"
      />
      <Select
        onValueChange={(value) => handleUpdateParams(value)}
        defaultValue={paramFilter || undefined}
      >
        <SelectTrigger className="body-regular light-border background-light800_dark300 text-dark500_light700 line-clamp-1 flex min-h-[56px] items-center gap-3 border p-4 sm:max-w-[210px]">
          <Image
            src="/assets/icons/carbon-location.svg"
            alt="location"
            width={18}
            height={18}
          />
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select Location" />
          </div>
        </SelectTrigger>

        <SelectContent className="light-border background-light800_dark300 text-dark500_light700 max-h-[350px] max-w-[250px] bg-light-900  dark:border dark:bg-dark-300">
          <SelectGroup>
            {countriesList ? (
              countriesList.map((country: Country, idx: number) => (
                <SelectItem
                  key={idx}
                  value={country.name.common}
                  className="cursor-pointer bg-light-800 focus:bg-light-800 dark:bg-dark-500 dark:focus:bg-dark-500"
                >
                  {country.name.common}
                </SelectItem>
              ))
            ) : (
              <SelectItem value="No results found">No results found</SelectItem>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default JobsFilter;
