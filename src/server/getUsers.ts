import { rest } from "msw";

export const getUsers: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      data: getUsersData,
    })
  );
};

export const getUsersData = [
  {
    id: 0,
    name: "Jack",
    description: "Hi, I'm Jack",
  },
  {
    id: 1,
    name: "Henry",
    description: "Hi, I'm Henry",
  },
  {
    id: 2,
    name: "Jolly",
    description: "Hi, I'm Jolly",
  },
  {
    id: 3,
    name: "Louis",
    description: "Hi, I'm Louis",
  },
];
