import React from 'react';
import Banner from '../banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import Merchant from '../Merchant/Merchant';
import Reviews from '../Reviews/Reviews';

const ReviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <FeaturesSection></FeaturesSection>
      <Merchant></Merchant>
      <Reviews ReviewsPromise={ReviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
