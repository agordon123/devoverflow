import React from "react";
import { getAllTags } from "@/lib/actions/tag.tactions";
import { TagFilters } from "@/constants/filters";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import Link from "next/link";
import Filters from "@/components/shared/Filters";

import NoResult from "@/components/shared/NoResult";
const Page = async () => {
  const result = await getAllTags({});
  console.log(result.tags);
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Tags</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Tags"
          otherClasses="flex-1"
        />

        <Filters
          filters={TagFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <section className="mt-12 flex flex-wrap gap-4">
        {result.tags.length > 0 ? (
          result.tags.map((tag) => {
            return (
              <Link
                href={`/tags/${tag._id}`}
                key={tag._id}
                className="shadow-light100_darknone"
              >
                <article className="background-light900_dark200 light-border flex w-full flex-col rounded-2xl border px-8 py-10 sm:w-[260px]">
                  <div className="background-light800_dark400 w-fit rounded-sm px-5 py-1.5">
                    <p className="paragraph-semibold text-dark300_light900 ">
                      {tag.name}
                    </p>
                  </div>
                  <p className="small-medium text-dark400_light500 mt-3.5">
                    {" "}
                    <span className="body-semibold primary-text-gradient mr-2.5">
                      {tag.questions.length}+ Questions
                    </span>
                  </p>
                </article>
              </Link>
            );
          })
        ) : (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
            {" "}
            <NoResult
              title="No Tags Found"
              description="No Tags with that signature came up in the search"
              link="/ask-question"
              linkTitle="Ask a Question"
            />
            No Tags Found
          </div>
        )}
      </section>
    </>
  );
};

export default Page;