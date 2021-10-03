import React from "react";

export default function SectionWrapper({ children }) {
  return (
    <div className="flex">
      <div className="mr-6 w-full mt-8 py-2 flex-shrink-0 flex flex-col h-auto bg-white dark:bg-gray-600 rounded-lg">
        {children}
      </div>
    </div>
  );
}
