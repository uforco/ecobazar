"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";



const ShippingAddressForm = () => {


    function onSubmit(values: any) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }


    return (
      <form onSubmit={onSubmit} className="space-y-8">
        <div className=" flex items-center gap-3 " >
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" type="text" required />
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" type="text" />
            </div>
        </div>
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="address">Address</Label>
            <Input id="address" type="text" required />
        </div>

                
              
        <Button type="submit">Submit</Button>
      </form>
    );
};

export default ShippingAddressForm;