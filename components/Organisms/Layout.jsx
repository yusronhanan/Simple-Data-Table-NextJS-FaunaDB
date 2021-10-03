import React from "react";
import NavList from "../Molecules/NavList";
import AppLogo from "../Atoms/AppLogo";
import MainWrapper from "../Molecules/MainWrapper";
import HeaderWrapper from "../Molecules/HeaderWrapper";

export default function Layout({ children }) {
  return (
    <div className="h-screen w-full flex overflow-hidden select-none">
      <HeaderWrapper>
        {/* Left side NavBar */}
        <div>
          {/* App Logo */}
          <AppLogo />
        </div>
        <NavList />
      </HeaderWrapper>
      <MainWrapper>{children}</MainWrapper>
    </div>
  );
}
