import dynamic from 'next/dynamic'
// import PopupAds from "@/components/shared/popupAds/PopupAds";
// import HomePage from "@/pages/home/HomePage";
import HomePage from "@/pages/homeTwo/HomePage";
const PopupAds = dynamic(()=> import('@/components/shared/popupAds/PopupAds') )
import Testimonial from './about/testimonial/Testimonial';


export default function Home() {
  return (
    <div>
      {/* <PopupAds></PopupAds> */}
      {/* <HomePage></HomePage>  */}
      <HomePage />

      {/* <Testimonial></Testimonial> */}


    </div>
  );
}
