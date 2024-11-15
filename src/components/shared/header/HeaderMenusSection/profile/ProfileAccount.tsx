import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";


import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"




{/* <UserIcon></UserIcon> */}

const ProfileAccount = () => {
  return (
    <div className=" mr-1 " >
      <Menubar className="bg-transparent outline-none  border-none p-0 " >
        <MenubarMenu >
          <MenubarTrigger className=" accountUser p-0 cursor-pointer " >
            <UserIcon></UserIcon>
          </MenubarTrigger>
          <MenubarContent className=" right-2 " >
            <MenubarItem>
              Account <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator className=" border border-gray-300 " />
            <MenubarItem>Profile</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Settings</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>LogIn</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

    </div>
  );
};

export default ProfileAccount;

const UserIcon = () => {
  return (
    <div className=" p-2 size-[36px] flex justify-center items-center ">
      <Image
        width={62}
        height={62}
        src={"/images/navBer/userIcon.png"}
        alt={""}
      >
      </Image>
    </div>
  );
};




// <DropdownMenu>
//         <DropdownMenuTrigger className=" outline-none text-white " >
//             <UserIcon></UserIcon>
//             {/* user */}
//         </DropdownMenuTrigger>
//         <DropdownMenuContent>
//           <DropdownMenuLabel>My Account</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem>Profile</DropdownMenuItem>
//           <DropdownMenuItem>Billing</DropdownMenuItem>
//           <DropdownMenuItem>Team</DropdownMenuItem>
//           <DropdownMenuItem>Subscription</DropdownMenuItem>

//           {/* <DropdownMenuGroup> */}
//           <DropdownMenuItem>Team</DropdownMenuItem>
//           <DropdownMenuSub>
//             <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
//             <DropdownMenuPortal>
//               <DropdownMenuSubContent>
//                 <DropdownMenuItem>Email</DropdownMenuItem>
//                 <DropdownMenuItem>Message</DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>More...</DropdownMenuItem>
//               </DropdownMenuSubContent>
//             </DropdownMenuPortal>
//           </DropdownMenuSub>
//           {/* </DropdownMenuGroup> */}
//         </DropdownMenuContent>
//       </DropdownMenu>