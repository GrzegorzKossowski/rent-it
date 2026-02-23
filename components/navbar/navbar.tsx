import React from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/navbar/logo";
import { ThemeToggle } from "@/components/navbar/theme-toggle";
import { NavMenu } from "@/components/navbar/nav-menu";

const Navbar = () => {
  return (
    <nav className="h-16 bg-background border-b border-accent">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="outline" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button className="hidden xs:inline-flex">Get Started</Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            {/* <NavigationSheet /> */}
            Mobile menu
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
