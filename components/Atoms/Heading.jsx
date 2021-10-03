import React from "react";

export default function Heading({ text }) {
  return (
    <h3 className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold capitalize dark:text-gray-300">
      <span>{text}</span>
    </h3>
  );
}
