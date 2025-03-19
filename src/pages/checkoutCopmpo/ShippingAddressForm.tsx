"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import SelectCompo from './SelectCompo';


const ShippingAddressForm = () => {


    return (
      <div className="space-y-8">
        <div className=" flex items-center gap-3 " >
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstName">First name</Label>
                <Input className=" h-[42px] " id="firstName" name="firstName" type="text" placeholder="Your first name" required />
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastName">Last name</Label>
                <Input className=" h-[42px] " id="lastName" name="lastName" type="text" placeholder="Your last name" />
            </div>
        </div>
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="address">Address</Label>
            <Input className=" h-[42px] " id="address" name="address" type="text" placeholder="Address" required />
        </div>
        <SelectCompo/>
        <div className=" flex items-center gap-3 " >
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input className=" h-[42px] " id="email" name="email" placeholder="Email Address" type="email"  />
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input className=" h-[42px] " id="phone" name="phone" placeholder="Phone number" type="text"  />
            </div>
        </div>
      </div>
    );
};

export default ShippingAddressForm;