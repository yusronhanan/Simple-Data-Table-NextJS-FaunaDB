import React from "react";

export default function HeaderWrapper({ children }) {
  return (
    <nav className="w-24 flex flex-col items-center bg-white dark:bg-gray-800 py-4">
      {children}
    </nav>
  );
}
