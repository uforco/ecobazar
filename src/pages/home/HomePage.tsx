
import React from 'react';
import Slider from './headerSec/Slider';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Category from './TopCategory/Category';
import OfferSection from './offerSection/OfferSection';
import NewestProducts from './newestProducts/NewestProducts';
import Testimonial from './testimonial/Testimonial';

const HomePage = () => {
    return (
        <div  > 
          <Slider></Slider>
          <FeaturedProducts></FeaturedProducts>
          <Category></Category>
          <OfferSection></OfferSection>
          <NewestProducts></NewestProducts>
          <Testimonial></Testimonial>
        </div>
    );
};

export default HomePage;