import { rest } from "msw";

import { getUsers } from "./getUsers";

export const handlers = () => {
  return [rest.get("/api/users", getUsers)];
};
