import React from "react";
import Profile_Form from './Profile_Form';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {}

function ProfileSettings(props: Props) {
  const {} = props;

  return (
    <div className=" border rounded-lg " >

      <div className=" border-b " >
        <h2 className=" p-5 py-2 " >Account Settings</h2>
      </div>
      <div className=" flex justify-between gap-6 p-5 " >
        <div className=" w-full max-w-[512px]  " >
            <Profile_Form></Profile_Form>
        </div>
        <div className=" w-full  flex justify-center items-center " >
            <div className=" text-center " >
                <div>
                    <Avatar className=" w-[200px] h-[200px] " >
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    <button className=" mt-5 px-8 py-2 rounded-full border font-semibold border-Primary text-Primary " >Chose Image</button>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
}

export default ProfileSettings;
