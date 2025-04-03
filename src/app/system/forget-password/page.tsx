'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { forgetpassword } from '@/utils/forgetpasswordActions';
import { useRouter } from 'next/navigation';


// const Geolocation = (): Promise<GeolocationPosition> => {
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
// };




const Page = () => {
    const [longinLoad, setLonginLoad] = React.useState<boolean>(false)
    const route = useRouter()




    const forgetpasswordHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const fromData = new FormData(event.target as HTMLFormElement)
        const email = fromData.get('email') as string
        if(!email){
           return alert("check your email")
        }
        const userAgent = await getDeviceAndBrowserInfo();
        try {
            // const position = await Geolocation(); // Wait for location to be fetched
            // const { latitude, longitude } = position.coords;
            // console.log("Latitude:", latitude);
            // console.log("Longitude:", longitude);

            const data = {
                email,
                userAgent
            }
            setLonginLoad(true)
            const token = await forgetpassword(data)
            if(token?.error){
                alert(token?.error)
                setLonginLoad(false)
                return
            }
            console.log(token)
            setLonginLoad(false)
            alert(token?.mail)
            route.push('/system/login')
        } catch (error) {
            if ((error as GeolocationPositionError).code === GeolocationPositionError.PERMISSION_DENIED) {
                alert("You denied location access. Please enable it in your browser settings.");
            } else {
                alert("An error occurred: " + (error instanceof Error ? error.message : "Unknown error"));
            }
        }
        
    }


    return (
        <div className=" h-96 flex justify-center items-center " >
            <div className=" w-72 lg:w-2/6 ">
                <form onSubmit={forgetpasswordHandler} className=" flex justify-between items-center h-10 border rounded-full focus:border-Primary ">
                    <Input
                        className=" rounded-full z-10 bg-white h-full border-none "
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                    />
                    <Button disabled={longinLoad} type="submit" className=" rounded-full z-30 -ml-10 h-full bg-Primary px-8 py-[20px] ">
                        {
                        !longinLoad?
                        'Send' :
                        <span className=' w-4 h-4 border-gray-100/50 animate-spin border-t-gray-100 border-l-gray-100 rounded-full border-2 ' ></span>
                        }
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Page;







const getDeviceAndBrowserInfo = async () => {
    const userAgent = navigator.userAgent;
  
    // 🌐 Detect Browser
    let browser = "Unknown Browser";
    if (/chrome/i.test(userAgent) && !/edg/i.test(userAgent) && !/opr/i.test(userAgent)) {
      browser = "Google Chrome";
    } else if (/safari/i.test(userAgent) && !/chrome/i.test(userAgent)) {
      browser = "Safari";
    } else if (/firefox/i.test(userAgent)) {
      browser = "Mozilla Firefox";
    } else if (/opr|opera/i.test(userAgent)) {
      browser = "Opera";
    } else if (/edg/i.test(userAgent)) {
      browser = "Microsoft Edge";
    } else if (/msie|trident/i.test(userAgent)) {
      browser = "Internet Explorer";
    }
  
    // 📱 Detect Device Type
    let deviceType = "Desktop";
    if (/mobile/i.test(userAgent)) {
      deviceType = "Mobile";
    } else if (/tablet/i.test(userAgent) || /ipad/i.test(userAgent)) {
      deviceType = "Tablet";
    }
  
    // 🖥 Detect OS
    let os = "Unknown OS";
    if (/win/i.test(userAgent)) {
      os = "Windows";
    } else if (/mac/i.test(userAgent)) {
      os = "macOS";
    } else if (/linux/i.test(userAgent)) {
      os = "Linux";
    } else if (/android/i.test(userAgent)) {
      os = "Android";
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      os = "iOS";
    }
  
    return { browser, deviceType, os };
  };