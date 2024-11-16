import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { TiStar } from "react-icons/ti";

const TestimonialClientReviweCard = ({className: classname}: {className?: string}) => {
    return (
      <div className=" flex justify-center  w-full mb-10 ">
        <div className={`${classname} overflow-hidden shadow-gray-300/40 shadow-xl p-6 rounded-lg cursor-pointer bg-white `} >
          <div>
              <Image src={"/images/home/testimonial/dulbequt.png"} width={30} height={30} alt={""}></Image>
          </div>
          <p className=" text-left my-3 text-sm " >Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
          <div className=" flex justify-between items-center " >
              <div className=" flex items-center gap-2 " >
                  <Avatar className=" w-14 h-14 " >
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className=" text-left " >
                      <CardTitle className=" text-base font-medium " > Robert Fox </CardTitle>
                      <p className=" text-sm text-gray-500 " >Customer</p>
                  </div>
              </div>
              <div>
                  <CardDescription className=" flex items-center " >
                      <TiStar className=" size-7 text-warning " ></TiStar>
                      <TiStar className=" size-7 text-warning " ></TiStar>
                      <TiStar className=" size-7 text-warning " ></TiStar>
                      <TiStar className=" size-7 text-gray-300 " ></TiStar>
                      <TiStar className=" size-7 text-gray-300 " ></TiStar>
                  </CardDescription>
              </div>
          </div>
        </div>
      </div>
    );
  };

  export default TestimonialClientReviweCard