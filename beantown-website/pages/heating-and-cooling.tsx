import React from 'react';
import Image from 'next/image';
import Nav from '../components/organisms/nav';
import Brands from '../components/templates/home/brands1';
import Faq from '../components/templates/home/faq1';
import Footer from '../components/organisms/footer1';
import Blogs from '../components/templates/home/blogs1';
import HeatingCoolingPageHero from '../components/templates/heating-and-cooling/heating-cooling-hero';
import MassSave from '../components/templates/heating-and-cooling/heating-cooling-mass-save';
import FooterCtaHeatingCooling from '../components/templates/heating-and-cooling/heating-cooling-footer-cta';
import HeatingCoolingServiceCard from '../components/templates/heating-and-cooling/heating-cooling-service-cards';
import HeatingCoolingProductsCards from '../components/templates/heating-and-cooling/heating-cooling-product-cards';

export default function CoolingandHeating() {
  return (
    <>
      <Nav />
      <HeatingCoolingPageHero />
      <HeatingCoolingServiceCard />
      <HeatingCoolingProductsCards />
      <MassSave />
      <FooterCtaHeatingCooling />
      <Brands />
      <Blogs />
      <Faq />
      <Footer />
    </>
  );
}
