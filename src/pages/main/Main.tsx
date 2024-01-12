import { Outlet } from "react-router-dom";
import React from "react";

export const Main: React.FC = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
