import { MonitorCogIcon } from "lucide-react";
import React from "react";

export default function Logo() {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <MonitorCogIcon className="size-4" />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
        <span className="truncate font-semibold">Rent-IT</span>
        <span className="truncate text-xs">Najem sprzętu IT</span>
      </div>
    </div>
  );
}
