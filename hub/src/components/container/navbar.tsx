"use client";

import * as React from "react";
import { FileText, Menu, User, X, Box } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const NAV_LIST = [
  {
    label: "Blog",
    icon: FileText,
  },
  {
    label: "Forum",
    icon: User,
  },
  {
    label: "Marketplace",
    icon: Box,
  },
  {
    label: "About",
    icon: FileText,
  },
];

function NavList() {
  return (
    <ul className="mt-4 flex flex-col gap-1 lg:mt-0 lg:flex-row lg:items-center lg:gap-1">
      {NAV_LIST.map(({ icon: Icon, label }) => (
        <li key={label}>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground hover:bg-secondary flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors"
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setOpenNav(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="px-0 py-4">
      <div className="relative flex items-center">
        <a href="#" className="block text-lg font-bold">
          Creative Tim UI
        </a>
        <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <NavList />
        </div>
        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <Button size="sm" variant="ghost">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
        <Button
          size="sm"
          variant="ghost"
          className="ml-auto grid lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {openNav && (
        <div className="mt-4 lg:hidden">
          <NavList />
          <Separator className="my-4" />
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" className="w-full">
              Sign In
            </Button>
            <Button size="sm" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
