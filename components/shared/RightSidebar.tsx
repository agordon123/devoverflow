/* eslint-disable no-unused-vars */

import Link from "next/link";
import RenderTag from "./RenderTag";

import Image from "next/image";
import React from "react";
import { getTopQuestions } from "@/lib/actions/question.actions";
import { getMostPopularTags } from "@/lib/actions/tag.actions";

const popularTags = [
  {
    _id: "1",
    name: "javascript",
    totalQuestions: 5,
  },
  {
    _id: "2",
    name: "reactjs",
    totalQuestions: 4,
  },
  {
    _id: "3",
    name: "nodejs",
    totalQuestions: 3,
  },
  {
    _id: "4",
    name: "nextjs",
    totalQuestions: 4,
  },
  {
    _id: "5",
    name: "typescript",
    totalQuestions: 5,
  },
];

const RightSidebar = async () => {
  const hotQuestions = await getTopQuestions();
  const topTags = await getMostPopularTags();
  return (
    <section
      className="custom-scrollbar background-light900_dark200 light-border 
    sticky right-0 top-0 flex h-screen w-[350px] flex-col justify-between  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[330px]"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">TOP QUESTIONS</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/question/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between text-center"
            >
              <p className="body-medium text-dark500_light700">
                {" "}
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron-right"
                height={20}
                width={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
        <div className="mt-16">
          <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
          <div className="mt-7 flex flex-col gap-4">
            {topTags.map((tag, idx) => (
              <RenderTag
                key={idx}
                _id={tag._id}
                totalQuestions={tag.numberOfQuestions}
                name={tag.name}
                showCount
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
