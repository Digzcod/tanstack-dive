import React from "react";
import { Alert } from "@mui/material";

import InfiniteScroll from "react-infinite-scroller";
import { Person } from "./People";
import { useInfiniteQuery } from "@tanstack/react-query";

const initialUrl = "https://swapi.dev/api/people/";
const fetchUrl = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export default function InfinitePeople() {
  const { data, hasNextPage, fetchNextPage, isLoading, isError, isFetching } =
    useInfiniteQuery({
      queryKey: ["star-people next-page-run"],
      queryFn: async({ pageParam = initialUrl }) => await fetchUrl(pageParam),
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    });

  console.log(data);

  if (isLoading) return <Alert><h4>Data is trying to fetching</h4></Alert>;
  if (isError) return <Alert><h4>Error! </h4></Alert> 
  return (
    <>
    <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
      {data.pages.map((pageData: any) => {
        // eslint-disable-next-line no-unused-expressions
        return pageData.results.map((person: any) => {
          return (
            <Person
              key={person.name}
              name={person.name}
              hairColor={person.hairColor}
              eyeColor={person.eyeColor}
              />
              );
            });
        })}
    </InfiniteScroll>
    {isFetching && <Alert severity="success"><h1>Data is refetching</h1></Alert>}
    {!hasNextPage && <Alert severity="warning"><h1>No More Data</h1></Alert>}
        </>
  );
}

