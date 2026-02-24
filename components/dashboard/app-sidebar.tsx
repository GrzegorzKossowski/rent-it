import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  ArrowDownIcon,
  ChartPieIcon,
  ChartSplineIcon,
  CheckCheckIcon,
  CommandIcon,
  ComputerIcon,
  CopyPlusIcon,
  CpuIcon,
  LaptopIcon,
  LayoutListIcon,
  MonitorCogIcon,
  OctagonIcon,
  OctagonXIcon,
  PlusIcon,
  ScanQrCodeIcon,
  SquareCheckBigIcon,
  User2Icon,
  UserRoundPlusIcon,
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../navbar/theme-toggle";

const data = [
  { icon: <ScanQrCodeIcon />, label: "Scan QR" },
  { icon: <CopyPlusIcon />, label: "Dodaj komputer" },
  { icon: <ChartSplineIcon />, label: "Statystyki", url: "stats" },
  { icon: <LayoutListIcon />, label: "Sprzęt", url:"equipment" },
  { icon: <UserRoundPlusIcon />, label: "Dodaj pracownika" },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex justify-between items-center">
            <Link href={"/"} className="cursor-pointer">
              <SidebarMenuButton
                size="lg"
                asChild
                className="group-data-[collapsible=icon]:justify-center"
              >
                <div>
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <MonitorCogIcon className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                    <span className="truncate font-semibold">Rent-IT</span>
                    <span className="truncate text-xs">Najem sprzętu IT</span>
                  </div>
                </div>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex gap-4">TO DZIAŁA <ArrowDownIcon/></SidebarGroupLabel>
          <SidebarGroupAction>
            <SquareCheckBigIcon color="green" />{" "}
            <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href={`/dashboard/${data[2].url}`}>
                <SidebarMenuButton className="cursor-pointer">
                  {data[2].icon} {data[2].label}
                  <SidebarMenuBadge>OK</SidebarMenuBadge>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href={`/dashboard/${data[3].url}`}>
                <SidebarMenuButton className="cursor-pointer">
                  {data[3].icon} {data[3].label}
                  <SidebarMenuBadge>OK</SidebarMenuBadge>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="flex gap-4">To nie działa <OctagonXIcon color="red"/></SidebarGroupLabel>
          <SidebarMenu>
            {data.map((el, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton className="cursor-not-allowed">
                  {el.icon} {el.label}
                  <SidebarMenuBadge>{index + 1}</SidebarMenuBadge>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
