import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {}

function Billing_Addres_form(props: Props) {
  const {} = props;

  return (
    <>
      <form className=" flex flex-col gap-6 w-full " action="">
        <div className=" flex items-center w-full gap-4 ">
          <div className="grid w-full items-center gap-1.5">
            <Label className=" ml-1 mb-1 " htmlFor="first_Name">
              First name
            </Label>
            <Input type="text" id="first_Name" placeholder="Dianne" />
          </div>

          <div className="grid w-full  items-center gap-1.5">
            <Label className=" ml-1 mb-1 " htmlFor="last_Name">
              Last Name
            </Label>
            <Input type="text" id="last_Name" placeholder="Russell" />
          </div>

          <div className="grid w-full  items-center gap-1.5">
            <Label className=" ml-1 mb-1 " htmlFor="company_Name">
              Company Name{" "}
              <span className=" text-gray-500 ">{"(optional)"}</span>
            </Label>
            <Input type="text" id="company_Name" placeholder="Zakirsoft" />
          </div>
        </div>

        <div className="grid w-full  items-center gap-1.5">
          <Label className=" ml-1 mb-1 " htmlFor="street_Address">
            Street Address
          </Label>
          <Input type="text" id="street_Address" placeholder="4140 Par" />
        </div>

        <div className=" flex items-center w-full gap-4 ">
          <div className="grid w-full items-center gap-1.5">
            <Label className=" ml-1 mb-1 " htmlFor="country">
              Country / Region
            </Label>
            <Input type="text" id="country" placeholder="United States" />
          </div>

          <div className="grid w-full  items-center gap-1.5">
            <Label className=" ml-1 mb-1 " htmlFor="States">
              States
            </Label>
            <Input type="text" id="States" placeholder="Washington DC" />
          </div>

          <div className="grid w-full  items-center gap-1.5">
            <Label className=" ml-1 mb-1 " htmlFor="Zip_Code">
              Zip Code
            </Label>
            <Input type="text" id="Zip_Code" placeholder="20033" />
          </div>
        </div>

        <div className=" flex items-center w-full gap-4 ">
          <div className="grid w-full  items-center gap-1.5">
            <Label className=" ml-1 mb-1 " htmlFor="email">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="dianne.russell@gmail.com"
            />
          </div>

          <div className="grid w-full  items-center gap-1.5">
            <Label className=" ml-1 mb-1 " htmlFor="phone_Number">
              Phone Number
            </Label>
            <Input
              type="number"
              id="phone_Number"
              placeholder="(603) 555-0123"
            />
          </div>
        </div>

        <div>
          <Button className=" rounded-full px-8 bg-Primary ">
            Save Changes
          </Button>
        </div>
      </form>
    </>
  );
}

export default Billing_Addres_form;
