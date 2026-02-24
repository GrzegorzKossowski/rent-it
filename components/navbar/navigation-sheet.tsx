import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Logo from "./logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet key={"bottom"}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo />
        {/* <NavMenu orientation="vertical" className="mt-12" /> */}
        <div className="mt-8 space-y-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          dolores eos temporibus saepe dolore quasi, expedita, culpa sed
          mollitia officia quis? Aperiam natus illo rem modi ea ipsum voluptas
          quis.
        </div>
      </SheetContent>
    </Sheet>
  );
};
