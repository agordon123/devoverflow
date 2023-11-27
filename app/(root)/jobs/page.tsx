import React from "react";
import {
  fetchCountries,
  fetchJobs,
  fetchLocation,
} from "@/lib/actions/jobs.actions";
import JobsFilter from "@/components/shared/JobsFilter";
import JobCard from "@/components/cards/JobCard";
import Pagination from "@/components/shared/Pagination";
import { Job } from "@/types";

interface Props {
  searchParams: {
    q: string;
    location: string;
    page: string;
  };
}
const Page = async ({ searchParams }: Props) => {
  // get user location
  const userLocation = await fetchLocation();
  // using user location as default location, + search query
  const jobs = await fetchJobs({
    query:
      `${searchParams.q}, ${searchParams.location}` ??
      `Software Engineer in ${userLocation}`,
    page: searchParams.page ?? 1,
  });
  // country list for filtering
  const countries = await fetchCountries();
  // for pagination
  const page = parseInt(searchParams.page ?? 1);

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Jobs</h1>
      <div className="flex">
        <JobsFilter countriesList={countries} />
      </div>

      <section className="light-border mb-9 mt-11 flex flex-col gap-9 border-b pb-9">
        {jobs.length > 0 ? (
          jobs.map((job: Job) => {
            if (job.job_title && job.job_title.toLowerCase() !== "undefined")
              return <JobCard key={job.id} job={job} />;

            return null;
          })
        ) : (
          <div className="paragraph-regular text-dark200_light800 w-full text-center">
            Oops! We couldn&apos;t find any jobs under that query.
          </div>
        )}
      </section>

      {jobs.length > 0 && (
        <Pagination pageNumber={page} isNext={jobs.length === 10} />
      )}
    </>
  );
};

export default Page;
