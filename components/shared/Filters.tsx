"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/lib/utils";

interface FilterProps {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasses?: string | undefined;
  containerClasses?: string;
}
const Filters = ({ filters, otherClasses, containerClasses }: FilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const paramFilter = searchParams.get("filter");
  const handleUpdateParams = (value: string) => {
    const newURL = formUrlQuery({
      params: searchParams.toString(),
      key: "filter",
      value,
    });
    router.push(newURL, { scroll: false });
  };
  return (
    <div className={`relative ${containerClasses}`}>
      <Select
        onValueChange={handleUpdateParams}
        defaultValue={paramFilter || undefined}
      >
        <SelectTrigger
          className={`body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5 ${otherClasses}`}
        >
          {" "}
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select a Filter" />
          </div>{" "}
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                className="text-dark500_light700"
              >
                {item.name}{" "}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
