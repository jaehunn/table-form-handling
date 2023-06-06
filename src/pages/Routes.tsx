import { Navigate, Routes as ReactRouterRoutes, Route } from "react-router-dom";

import { UserSearch } from ".";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/user-search" element={<UserSearch />} />

      <Route path="*" element={<Navigate replace to="/user-search" />} />
    </ReactRouterRoutes>
  );
};
