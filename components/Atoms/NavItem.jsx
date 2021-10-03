import React from "react";
import Link from "next/link";
export default function NavItem({ label, href, src }) {
  return (
    <li className="mt-3 p-2 text-blue-600 dark:text-blue-300 rounded-lg">
      <Link href={href}>
        <a className=" flex flex-col items-center">
          <img src={src} alt={label} className="h-7 w-7" />
          <span className="text-xs mt-2">{label}</span>
        </a>
      </Link>
    </li>
  );
}
