import React from "react";

export default function MainWrapper({ children }) {
  return (
    <main
      className="my-1 pt-2 pb-2 px-10 flex-1 bg-gray-200 dark:bg-black rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto"
    >
      {children}
    </main>
  );
}
