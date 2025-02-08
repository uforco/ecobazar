
import Image from "next/image";
import Link from 'next/link';
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
            <MenubarItem> <Link href={"/account"}> Dashboard </Link> </MenubarItem>
            <MenubarSeparator />
              <MenubarItem>
                <Link href={"/account/settings"}>Settings</Link>
              </MenubarItem>
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

