import React from "react";
// import Slider from "./headerSec/Slider";
// import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
// import Category from "./TopCategory/Category";
// import NewestProducts from "./newestProducts/NewestProducts";
// import Testimonial from "./testimonial/Testimonial";
import FollowUs from "./followUs/FollowUs";
import OfferCardSection from "@/components/shared/offerCardListSection/OfferCardSection";
import dynamic from "next/dynamic";
const FeaturedProducts = dynamic(()=> import('./FeaturedProducts/FeaturedProducts'));
const Slider = dynamic(()=> import('./headerSec/Slider'));
const NewestProducts = dynamic(()=> import('./newestProducts/NewestProducts'));
const Testimonial = dynamic(()=> import('./testimonial/Testimonial'));
const Category = dynamic(()=> import('./TopCategory/Category'));

const HomePage = () => {
  return (
    <div>
      <Slider></Slider>
      <FeaturedProducts></FeaturedProducts>
      <Category></Category>
      <OfferCardSection></OfferCardSection>
      <NewestProducts></NewestProducts>
      <Testimonial></Testimonial>
      <FollowUs></FollowUs>
    </div>
  );
};

export default HomePage;
