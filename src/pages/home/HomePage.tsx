
import React from 'react';
import Slider from './headerSec/Slider';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Category from './TopCategory/Category';

const HomePage = () => {
    return (
        <div  > 
          <Slider></Slider>
          <FeaturedProducts></FeaturedProducts>
          <Category></Category>
        </div>
    );
};

export default HomePage;