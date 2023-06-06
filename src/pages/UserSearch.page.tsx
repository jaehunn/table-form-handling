import { useGetUsers } from "~/quries/useGetUsers.query";

export const UserSearch = () => {
  const { data: UsersData } = useGetUsers(
    {},
    {
      enabled: true,
    }
  );

  console.log({ UsersData });

  return <div>UserSearch</div>;
};
