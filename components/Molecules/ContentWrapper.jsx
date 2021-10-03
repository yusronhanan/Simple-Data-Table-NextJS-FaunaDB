import React from "react";

export default function ContentWrapper({ children }) {
  return (
    <div className="pt-1 pb-2 px-3 overflow-y-auto">
      <div className="p-5 flex flex-col justify-between bg-gray-100 dark:bg-gray-200 rounded-lg">
        {children}
      </div>
    </div>
  );
}
