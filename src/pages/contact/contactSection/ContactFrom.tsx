import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Props {}

function ContactFrom(props: Props) {
  const {} = props;

  return (
    <>
      <div className="w-[486px] mb-7 ">
        <h2 className="text-4xl font-semibold mb-4 ">Just Say Hello!</h2>
        <p>
          Do you fancy saying hi to me or you want to get started with your
          project and you need my help? Feel free to contact me.
        </p>
      </div>
      <div>
        <div className=" flex flex-col md:flex-row justify-between items-center gap-5 ">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
        </div>
        <div className="my-5">
          <Input type="text" placeholder="Subjects" />
        </div>
        <div>
          <Textarea
            className=" w-full h-36 resize-none "
            placeholder="Type your message here."
          />
        </div>
        <div className="mt-4">
          <Button type="submit" className=" bg-Primary rounded-full px-8 ">
            Send Message
          </Button>
        </div>
      </div>
    </>
  );
}

export default ContactFrom;
