import React from "react";
import { Alert } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";
import Species from "./Species";

const ULR_SPECIES = `https://swapi.dev/api/species/`;
const fetchDataSpecies = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch species data");
  return res.json();
};

export default function InfiniteSpecies() {
  const { data, isFetching, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["infinite species"],
      queryFn: async ({ pageParam = ULR_SPECIES }) =>
        await fetchDataSpecies(pageParam),
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    });

  console.log(data);

  if (isLoading)
    return (
      <Alert severity="info">
        <h4>Data is trying to fetching</h4>
      </Alert>
    );
  if (isError)
    return (
      <Alert severity="error">
        <h4>Error! </h4>
      </Alert>
    );

  return (
    <>
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map((pageData: any) => {
          return pageData.results.map((species: any) => {
            return (
              <Species
              key={species.name}
                name={species.name}
                language={species.language}
                average_lifespan={species.average_lifespan}
              />
            );
          });
        })}
      </InfiniteScroll>
      {isFetching && (
        <Alert severity="success">
          <h4>Data is trying to fetching</h4>
        </Alert>
      )}
      {!hasNextPage && (
        <Alert severity="warning">
          <h4>No More Data</h4>
        </Alert>
      )}
    </>
  );
}
