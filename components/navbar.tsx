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
  navigationMenuTriggerStyle, // Import trigger style
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import Placeholder from "@/public/Nikentolad Logos/Nikentolad group.png";
import { Menu, X } from 'lucide-react'; // Import icons for mobile menu

export function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md w-full">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" passHref className="flex items-center gap-2">
            <Image
              className="object-contain" // Use contain to prevent distortion
              src={Placeholder}
              width={40} // Slightly smaller logo
              height={40}
              alt="Nikentolad Group Logo"
            // Removed placeholder="blur" as it might not be necessary for small logos
            />
            {/* Optional: Add text logo */}
            {/* <span className="font-semibold text-lg">Nikentolad</span> */}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/products" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Products
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Subsidiaries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* Keep existing dropdown structure but adjust width/grid if needed */}
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {/* ...existing ListItem components... */}
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
                <Link href="/#services" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#footer" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
          {/* Mobile Links - Consider styling them differently if needed */}
          <Link href="/" passHref className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/products" passHref className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Products</Link>
          {/* Mobile Subsidiaries - Could be a simple link or a collapsible section */}
          {/* For simplicity, linking to the section for now */}
          <Link href="/#subsidiary" passHref className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Subsidiaries</Link>
          <Link href="/#services" passHref className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/projects" passHref className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#footer" passHref className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </nav>
  )
}

// ListItem component remains the same
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
          <p className="line-clamp-3 text-sm leading-snug text-muted-foreground"> {/* Increased line-clamp slightly */}
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
