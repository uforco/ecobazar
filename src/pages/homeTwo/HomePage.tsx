import React from 'react';
import BannerSection from './BannerSection/BannerSection';
import OfferCardSection from '@/components/shared/offerCardListSection/OfferCardSection';
import Testimonial from './testimonial/Testimonial';
import Category from './category/Category';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';

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