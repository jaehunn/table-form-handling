import Axios from "axios";

type Params = {
  // ...
};

type Response = {
  data: User[];
};

type User = {
  id: number;
  name: string;
  description: string;
};

export const getUsers = (params: Params) => {
  // ...

  return Axios.get<Response>(`/api/users`, {
    params,
  });
};
