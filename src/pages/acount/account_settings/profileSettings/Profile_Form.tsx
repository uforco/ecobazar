import React from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';


interface Props {}

function Profile_Form(props: Props) {
  const {} = props;

  return (
    <>
      <form className=" flex flex-col gap-6  " action="">
        <div className="grid w-full items-center gap-1.5">
            <Label className=" ml-1 mb-1 " htmlFor="first_Name">First name</Label>
            <Input  type="text" id="first_Name" placeholder="Dianne" />
        </div>
        <div className="grid w-full  items-center gap-1.5">
            <Label className=" ml-1 mb-1 " htmlFor="last_Name">Last Name</Label>
            <Input type="text" id="last_Name" placeholder="Russell" />
        </div>
        <div className="grid w-full  items-center gap-1.5">
            <Label className=" ml-1 mb-1 " htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="dianne.russell@gmail.com" />
        </div>
        <div className="grid w-full  items-center gap-1.5">
            <Label className=" ml-1 mb-1 " htmlFor="phone_Number">Phone Number</Label>
            <Input type="number" id="phone_Number" placeholder="(603) 555-0123" />
        </div>
        <div>
            <Button className=" rounded-full px-8 bg-Primary " >Save Changes</Button>
        </div>
      </form>
    </>
  );
}

export default Profile_Form;
