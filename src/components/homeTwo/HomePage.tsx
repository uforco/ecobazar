import React from 'react';
import BannerSection from './BannerSection/BannerSection';
import OfferCardSection from '@/components/shared/offerCardListSection/OfferCardSection';
// import Testimonial from './testimonial/Testimonial';
import Category from './category/Category';
// import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import dynamic from 'next/dynamic';
const FeaturedProducts = dynamic(()=> import('./FeaturedProducts/FeaturedProducts'))
const Testimonial = dynamic(()=> import('./testimonial/Testimonial'))

const HomePage = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <OfferCardSection></OfferCardSection>
            <Category></Category>
            <FeaturedProducts></FeaturedProducts>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default HomePage;