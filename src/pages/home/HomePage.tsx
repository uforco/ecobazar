
import React from 'react';
import Slider from './headerSec/Slider';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Category from './TopCategory/Category';
import OfferSection from './offerSection/OfferSection';

const HomePage = () => {
    return (
        <div  > 
          <Slider></Slider>
          <FeaturedProducts></FeaturedProducts>
          <Category></Category>
          <OfferSection></OfferSection>
        </div>
    );
};

export default HomePage;