import React from "react";
import NavItem from "../Atoms/NavItem";

export default function NavList() {
  return (
    <ul className="mt-2 text-gray-700 dark:text-gray-400 capitalize">
      <NavItem label="Order" href="/" src="/order-icon.svg" />
    </ul>
  );
}
