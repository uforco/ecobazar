"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { signOut, useSession } from "next-auth/react";

const ProfileAccount = () => {

  const { data: profile, status } = useSession()

  // console.log("show useSession profile", auth)


  return (
    <div className=" mr-1 ">
      <Menubar className="bg-transparent outline-none  border-none p-0 ">
        <MenubarMenu>
          <MenubarTrigger className=" accountUser p-0 cursor-pointer ">
            <div className=" w-[36px] h-[36px] overflow-hidden flex justify-center items-center rounded-full border ">
              {status === 'authenticated' && profile?.user?.image ? (
                <Image
                  src={profile?.user?.image}
                  alt={"user profile image"}
                  width={100}
                  height={100}
                ></Image>
              ) : (
                <UserIcon></UserIcon>
              )}
            </div>
          </MenubarTrigger>
          <MenubarContent className=" right-2 ">
            <MenubarItem>
              Account <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator className=" border border-gray-300 " />
            <MenubarItem>
              <Link href={"/account"}> Dashboard </Link>{" "}
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href={"/account/settings"}>Settings</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              {
                status === 'authenticated' && profile?.user?.email?
                <button onClick={() => signOut()} >LogOut</button>
                :
                <Link href={"/login"}>LogIn</Link>
              }
            </MenubarItem>
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
      ></Image>
    </div>
  );
};
