import React from "react";

export default function Hello({ name }) {
  return (
    <div className="flex flex-row capitalize text-3xl">
      <span className="font-semibold">hello,</span>
      <span>{name}!</span>
    </div>
  );
}
