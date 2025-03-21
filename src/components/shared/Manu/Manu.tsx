"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import MenuItem from "./MenuItem";
import Image from 'next/image';



const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },

  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
const categorylist = [
    {
        image: '/images/home/category/Vegetable.png',
        name: 'Vegetable',
        link: "/vegetable",
        nestedItem: [
            {
                name: 'green vegetables',
                link: '/green_vegetables'
            },
            {
                name: 'cruciferous',
                link: '/cruciferous'
            },
            {
                name: 'allium vegetables',
                link: '/allium_vegetables'
            }
        ]    
    },
    {
        image: '/images/home/category/fruits.png',
        name: 'Fresh fruit',
        link: "/fresh_fruit",  
    },
    {
        image: '/images/home/category/fish.png',
        name: 'River Fish',
        link: "/fish",
        nestedItem: [
            {
                name: 'River Fish',
                link: '/river_fish'
            },
            {
                name: 'Sea Fish',
                link: '/sea_fish'
            },
            {
                name: 'Farmed Fish',
                link: '/farmed_fish'
            }
        ]
    },
    {
        image: '/images/home/category/meat.png',
        name: 'Meat',
        link: "/meat",
        nestedItem: [
            {
                name: 'chicken',
                link: '/chicken'
            },
            {
                name: 'beef',
                link: '/beef'
            },
            {
                name: 'goat',
                link: '/goat'
            }
        ]   
    },
    {
        image: '/images/home/category/soft-drink.png',
        name: 'Water and Drinks',
        link: "/water_and_drinks",
        nestedItem: [
            {
                name: 'string cheese',
                link: '/string_cheese'
            },
            {
                name: 'Dried fruit',
                link: '/dried_fruit'
            },
            {
                name: 'Granola bars',
                link: '/granola_bars'
            },
            {
                name: 'Graham Crackers',
                link: '/graham_crackers'
            }
        ]    
    },
    {
        image: '/images/home/category/soft-drink.png',
        name: 'Water and Drinks',
        link: "/water_and_drinks",
        nestedItem: [
            {
                name: 'string cheese',
                link: '/string_cheese'
            },
            {
                name: 'Dried fruit',
                link: '/dried_fruit'
            },
            {
                name: 'Granola bars',
                link: '/granola_bars'
            },
            {
                name: 'Graham Crackers',
                link: '/graham_crackers'
            }
        ]    
    },
    {
        image: '/images/home/category/soft-drink.png',
        name: 'Water and Drinks',
        link: "/water_and_drinks",
        nestedItem: [
            {
                name: 'string cheese',
                link: '/string_cheese'
            },
            {
                name: 'Dried fruit',
                link: '/dried_fruit'
            },
            {
                name: 'Granola bars',
                link: '/granola_bars'
            },
            {
                name: 'Graham Crackers',
                link: '/graham_crackers'
            }
        ]    
    },
    {
        image: '/images/home/category/snacks.png',
        name: 'Snacks',
        link: "/snacks",
        nestedItem: [
            {
                name: 'string cheese',
                link: '/string_cheese'
            },
            {
                name: 'Dried fruit',
                link: '/dried_fruit'
            },
            {
                name: 'Granola bars',
                link: '/granola_bars'
            },
            {
                name: 'Graham Crackers',
                link: '/graham_crackers'
            }
        ]   
    }
]


export default function Manu() {

  // TODO: responsive Manu system
  return (
    <NavigationMenu className=" hidden md:block " >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger  className=" navigation-trigger hover:bg-transparent bg-transparent font-medium text-gray-500 hover:text-white " > 
            Shop
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" grid gap-3 p-4  md:w-[400px] lg:w-[700px] xl:w-[900px] h-auto lg:grid-cols-3 ">
                <li className=" row-span-3 h-32 inline-block ">
                    <NavigationMenuLink asChild>
                    <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                    >
                        <>
                          <div className="mb-2 mt-2 text-lg font-medium">
                            <Image src={"/images/Logo.png"} width={200} height={80} alt={"Logo"}></Image>
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI and
                          Tailwind CSS.
                          </p>
                        </>
                    </Link>
                    </NavigationMenuLink>
                </li>
                {
                    categorylist?.map(( category, inx )=> <li className="inline-block" key={`${category.name}-${inx}`} >
                    <NavigationMenuLink asChild>
                        <MenuItem category={category} ></MenuItem>
                    </NavigationMenuLink>
                  </li>)
                }
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger  className=" navigation-trigger hover:bg-transparent bg-transparent font-medium text-gray-500 hover:text-white " >Pages</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4  md:w-[300px] h-auto lg:grid-cols-[1fr] ">
                  <li className=" w-full" >
                    <Link className=" text-gray-500 w-full hover:text-Primary " href="/shop" >
                        Shop
                    </Link>
                  </li>
                  <li className=" w-full" >
                    <Link className=" text-gray-500 w-full hover:text-Primary " href="/" >
                        Blog
                    </Link>
                  </li>
                  <li className=" w-full" >
                    <Link className=" text-gray-500 w-full hover:text-Primary " href="/" >
                        Faqs
                    </Link>
                  </li>
                  <li className=" w-full" >
                    <Link className=" text-gray-500 w-full hover:text-Primary " href="/" >
                        Terms & Condition
                    </Link>
                  </li>
                  <li className=" w-full" >
                    <Link className=" text-gray-500 w-full hover:text-Primary " href="/" >
                        Privacy Policy
                    </Link>
                  </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className=" navigation-trigger hover:bg-transparent bg-transparent font-medium text-gray-500 hover:text-white " >Components</NavigationMenuTrigger>
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
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className=" mx-4 navigation-trigger hover:bg-transparent bg-transparent text-sm text-gray-500 hover:text-white ">
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className=" mx-4 navigation-trigger hover:bg-transparent bg-transparent text-sm text-gray-500 hover:text-white ">
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
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
  );
});
ListItem.displayName = "ListItem";

// 3 dimension nested menu
