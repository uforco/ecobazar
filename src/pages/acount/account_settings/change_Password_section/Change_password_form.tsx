import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

interface Props {}

function Change_password_form(props: Props) {
  const {} = props;

  return (
    <>
      <form className=" flex flex-col gap-6 w-full " action="">
        <div className="grid w-full  items-center gap-1.5">
          <Label className=" ml-1 mb-1 " htmlFor="Current_Password">
            Current Password
          </Label>
          <Input type="password" id="Current_Password" placeholder="Password" />
        </div>

        <div className=" flex items-center w-full gap-4 ">
          <div className="grid w-full  items-center gap-1.5">
            <Label className=" ml-1 mb-1 " htmlFor="New_Password">
              New Password
            </Label>
            <Input type="password" id="New_Password" placeholder="Password" />
          </div>

          <div className="grid w-full  items-center gap-1.5">
            <Label className=" ml-1 mb-1 " htmlFor="Confirm_Password">
              Confirm Password
            </Label>
            <Input
              type="password"
              id="Confirm_Password"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <Button className=" rounded-full px-8 bg-Primary ">
            Change Password
          </Button>
        </div>
      </form>
    </>
  );
}

export default Change_password_form;
