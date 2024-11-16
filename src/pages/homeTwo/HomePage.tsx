import React from 'react';
import BannerSection from './BannerSection/BannerSection';
import OfferCardSection from '@/components/shared/offerCardListSection/OfferCardSection';

const HomePage = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <OfferCardSection></OfferCardSection>
        </div>
    );
};

export default HomePage;