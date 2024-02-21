"use client";
import React from "react";
import { currentUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Logo from "./ui/logo";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "NEET UG",
    href: "/notes/neet",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "JEE Advanced",
    href: "/notes/jee",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "JEE Mains",
    href: "/notes/jee",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "CUET",
    href: "/notes/cuet",
    description: "Visually or semantically separates content.",
  },
  {
    title: "CBSE",
    href: "/notes/cbse",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "ICSE",
    href: "/notes/icse",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "UP Boards",
    href: "/notes/upboard",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <nav className=" h-24 flex justify-between items-center px-6 py-4 backdrop-blur-md ">
      <Logo></Logo>
      <ul className="gap-8 items-center hidden md:flex ">
        <li>
          <Link href={"/"} className="hover:text-lime-600">
            Home
          </Link>
        </li>

        <li>
          <NavigationMenu>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="p-3 text-md">
                Notes
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] grid-cols-1 md:grid-cols-2 p-3 gap-3 ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu>
        </li>
        <li>
          <Link href={"/courses"} className="hover:text-lime-600">
            Courses
          </Link>
        </li>
        <li>
          <Link href={"/admission"} className="hover:text-lime-600">
            Admission
          </Link>
        </li>
        <li>
         
        </li>
      </ul>
      {toggle ? (
        <Button
          variant="outline"
          className="md:hidden"
          onClick={() => setToggle(!toggle)}
        >
          <Menu></Menu>
        </Button>
      ) : (
        <div className="flex flex-col items-end gap-4 absolute top-7 right-6 w-screen h-screen">
          <Button
            variant="outline"
            className="md:hidden max-w-[56px]"
            onClick={() => setToggle(!toggle)}
          >
            <X></X>
          </Button>
          <ul className="items-center flex flex-col p-8 justify-center bg-lime-200 rounded-lg shadow-md w-64 backdrop-blur-sm">
            <li className="m-2">
              <Link href={"/"} className="hover:text-lime-600 mt-8">
                Home
              </Link>
            </li>

            <li className="m-2">
              <Link href={"/courses"} className="hover:text-lime-600 mt-2">
                Courses
              </Link>
            </li>
            <li className="m-2">
              <NavigationMenu>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="p-3 bg-lime-200 text-md ">
                    Notes
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] grid-cols-1 md:grid-cols-2 p-2 gap-1">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        ></ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
            </li>
            <li className="m-2">
              <Link href={"/admission"} className="hover:text-lime-600 mt-2">
                Admission
              </Link>
            </li>
            <li>
            
        </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
