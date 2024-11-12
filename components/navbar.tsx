"use client"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import Placeholder from "@/public/Nikentolad Logos/Nikentolad group.png";

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Farm Tanks",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     title: "Farm Tankers",
//     href: "/docs/primitives/hover-card",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     title: "Aviation Fuel Handling",
//     href: "/docs/primitives/progress",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     title: "Pipeline Installation",
//     href: "/docs/primitives/scroll-area",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     title: "Building Construction",
//     href: "/docs/primitives/tabs",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     title: "Fuel Bowser Sales/Retrofit",
//     href: "/docs/primitives/tooltip",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ]

export function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row items-center justify-center md:justify-normal lg:justify-normal p-4 bg-white shadow-md">
      <div className="md:w-1/4 flex items-center justify-between w-full">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
            <Image
              className="not-prose object-cover object-bottom rounded-lg"
              src={Placeholder}
              width={50}
              height={50}
              alt="hero image"
              placeholder="blur"
            />
          </div>
          <button
            className="md:hidden text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>
      <div className="md:w-3/4 flex justify-center items-center">
        <NavigationMenu className={`${isOpen ? "block" : "hidden"} md:flex`}>
          <NavigationMenuList className="flex flex-col md:flex-row gap-3">
            <NavigationMenuItem>
              <Link href="/" passHref>
                <span className="font-medium text-base">
                  Home
                </span>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="pl-4">
              <Link href="/products" passHref>
                <span className="font-medium text-base">
                  Products
                </span>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <span className="font-medium text-base">
                  Subsidiaries
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[260px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/#subsidiary" title="Nikentolad Farms Limited">
                    was established and incorporated in Nigeria in the year 2016 with RC 1377435. The company is into the production of farm products.
                  </ListItem>
                  <ListItem href="/#subsidiary" title="Nikentolad Nigerian Limited">
                    established and incorporated in the year 2016 with RC 1377432. The company is into generation of electriciy through the use of renewable energy solutions, working in conjunction with distribution companies to end shortage of electricity in the country.
                  </ListItem>
                  <ListItem href="/#subsidiary" title="Nikentolad Energy Limited">
                    incorporated in the year 2005 with RC 633721. The company has expertice in the areas of: Procurement, General Aviation, Fuel Handling and Fuel Facilities Business, Engineering, Technical Support, Services, Logistics/Supply Chain and Brand Management, Construction, Consultancy and Advisory Services to the aviation industry, Oil & Gas Companies, Manufacturing Companies, the military, Governmental Agenies and Parastatals.
                  </ListItem>
                  <ListItem href="/#subsidiary" title="HydroWells Water">
                    established and incorporated in 2017 UNDER THE COMPANIES AND ALLIED MATTERS ACT 1990 and the company is limited by shares.
                  </ListItem>
                  <ListItem href="/#subsidiary" title="Nikenando Energy Limited">
                    established and incorporated in 2017 UNDER THE COMPANIES AND ALLIED MATTERS ACT 1990 and the company is limited by shares.
                  </ListItem>
                  <ListItem href="/#subsidiary" title="Nikentolad Properties Limited">
                  incorporated in the year 2005 with RC 633721. The company has expertice in the areas of: Procurement, General Aviation, Fuel Handling and Fuel Facilities Business, Engineering, Technical Support, Services, Logistics/Supply Chain and Brand Management, Construction, Consultancy and Advisory Services to the aviation industry, Oil & Gas Companies, Manufacturing Companies, the military, Governmental Agenies and Parastatals.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#services" passHref>
                <span className="font-medium text-base">
                  Services
                </span>
              </Link>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>
                <span className="font-medium text-base">
                  Services
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link href="#footer" passHref>
                <span className="font-medium text-base">
                  Contact Us
                </span>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

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
  )
})
ListItem.displayName = "ListItem"