import React from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/navbar/logo";
import { ThemeToggle } from "@/components/navbar/theme-toggle";
import { NavMenu } from "@/components/navbar/nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { KeySquareIcon, LogInIcon } from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const handleClick = React.useCallback(() => {
    redirect(`/dashboard`);
  }, []);

  return (
    <nav className="h-16 bg-background border-b border-accent">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6">
        <Logo />

        {/* Desktop Menu */}
        {/* Desktop navigation menu */}
        <div className="hidden md:flex">
          <NavMenu />
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            className="hidden md:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary text-primary-foreground p-2"
            href="/dashboard"
          >
            <LogInIcon />
          </Link>
          <Link
            className="inline-flex md:hidden items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary text-primary-foreground p-2"
            href="/dashboard"
          >
            <LogInIcon />
          </Link>
          <Button className="hidden xs:inline-flex">Get Started</Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
