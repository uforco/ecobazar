import React from 'react';
import BannerSection from './BannerSection/BannerSection';
import OfferCardSection from '@/components/shared/offerCardListSection/OfferCardSection';
import Testimonial from './testimonial/Testimonial';

const HomePage = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <OfferCardSection></OfferCardSection>
            <Testimonial></Testimonial>
        </div>
    );
};

export default HomePage;