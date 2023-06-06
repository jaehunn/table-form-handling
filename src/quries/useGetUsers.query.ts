import { UseQueryOptions, useQuery } from "@tanstack/react-query";

import { getUsers } from "~/api";

export const useGetUsers = (
  params: Parameters<typeof getUsers>[0],
  { enabled }: UseQueryOptions
) => {
  return useQuery(["USERS", { ...params }], () => getUsers(params), {
    select: ({ data }) => data,
    enabled,
  });
};
