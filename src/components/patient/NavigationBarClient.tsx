"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function NavigationBarClient() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="font-bold text-[#0077B6]">
                    Hospital Name
                  </span>
                </Link>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services">
                    <AccordionTrigger>Our Services</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        <Link
                          href="/emergencies"
                          className="text-sm text-gray-600 hover:text-[#0077B6]"
                        >
                          Emergency Care
                        </Link>
                        <Link
                          href="/out-patient-dpt"
                          className="text-sm text-gray-600 hover:text-[#0077B6]"
                        >
                          Outpatient Services
                        </Link>
                        <Link
                          href="/specialities"
                          className="text-sm text-gray-600 hover:text-[#0077B6]"
                        >
                          Medical Specialties
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="patients">
                    <AccordionTrigger>Patient Information</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        {patientInfo.map((info) => (
                          <Link
                            key={info.title}
                            href={info.href}
                            className="text-sm text-gray-600 hover:text-[#0077B6]"
                          >
                            {info.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link
                  href="/contact"
                  className="font-medium text-gray-600 hover:text-[#0077B6]"
                >
                  Contact Us
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                    >
                      <Sun className="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span>Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-[200px]">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      System
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                {isLoggedIn ? (
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Log out
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setIsLoggedIn(true)}
                    >
                      Sign in
                    </Button>
                    <Button
                      className="w-full justify-start bg-[#FF9800] hover:bg-[#F57C00] text-white"
                      onClick={() => setIsLoggedIn(true)}
                    >
                      Sign up
                    </Button>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <span className="hidden font-bold text-[#0077B6] md:inline-block">
              Hospital Name
            </span>
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-600 hover:text-[#0077B6]">
                Our Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#E1F5FE] to-[#B3E5FC] p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-[#0077B6]">
                          Hospital Name
                        </div>
                        <p className="text-sm leading-tight text-gray-600">
                          Providing compassionate care and cutting-edge medical
                          services to our community.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/emergencies" title="Emergency Care">
                    24/7 emergency medical services for critical conditions.
                  </ListItem>
                  <ListItem
                    href="/outpatient"
                    title="Outpatient Services"
                  >
                    Comprehensive care for non-emergency medical needs.
                  </ListItem>
                  <ListItem
                    href="/specialities"
                    title="Medical Specialties"
                  >
                    Expert care across various medical specializations.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-600 hover:text-[#0077B6]">
                Patient Information
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {patientInfo.map((info) => (
                    <ListItem
                      key={info.title}
                      title={info.title}
                      href={info.href}
                    >
                      {info.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium text-gray-600 hover:text-[#0077B6]">
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-600">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="hidden md:flex items-center space-x-2">
            {isLoggedIn ? (
              <Button
                variant="ghost"
                onClick={() => setIsLoggedIn(false)}
                className="text-gray-600 hover:text-[#0077B6]"
              >
                Log out
              </Button>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={() => setIsLoggedIn(true)}
                  className="text-gray-600 hover:text-[#0077B6]"
                >
                  Sign in
                </Button>
                <Button
                  onClick={() => setIsLoggedIn(true)}
                  className="bg-[#FF9800] hover:bg-[#F57C00] text-white"
                >
                  Sign up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

const ListItem = ({ className, title, children, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#E1F5FE] hover:text-[#0077B6] focus:bg-[#E1F5FE] focus:text-[#0077B6]"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

const patientInfo = [
  {
    title: "Admission Process",
    href: "/patients/admission",
    description:
      "Learn about our streamlined admission process for inpatient care.",
  },
  {
    title: "Visitor Information",
    href: "/patients/visitors",
    description:
      "Guidelines and information for those visiting patients in our hospital.",
  },
  {
    title: "Patient Rights",
    href: "/patients/rights",
    description:
      "Understand your rights and responsibilities as a patient in our care.",
  },
  {
    title: "Billing & Insurance",
    href: "/patients/billing",
    description:
      "Information about billing procedures and accepted insurance plans.",
  },
];
