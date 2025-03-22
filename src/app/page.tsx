import dynamic from 'next/dynamic'
// import PopupAds from "@/components/shared/popupAds/PopupAds";
// import HomePage from "@/pages/home/HomePage";
import HomePage from "@/components/homeTwo/HomePage";
const PopupAds = dynamic(()=> import('@/components/shared/popupAds/PopupAds') )


export default function Home() {
  return (
    <div>
      <PopupAds></PopupAds>
      {/* <HomePage></HomePage>  */}
      <HomePage />
    </div>
  );
}
