import groq from 'groq';
import Nav from '../components/organisms/nav';
import Brands from '../components/templates/home/brands';
import Faq from '../components/templates/home/faq';
import Footer from '../components/organisms/footer';
import { gql } from '@apollo/client';
import FooterCta from '../components/templates/home/footer-cta-home';
import Blogs from '../components/templates/home/blogs';
import React from 'react';
import ServiceAreas from '../components/templates/home/service-areas';
import Testimonials from '../components/templates/home/testimonials';
import WhyUs from '../components/templates/home/why-us';
import Services from '../components/templates/home/services';
import HomeHero from '../components/templates/home/home-hero';
import { Home } from '../typing/gql/graphql';
import pageQuery from '../lib/graphql/pages/get-home.query';
import WithGlobalContent, {
  generateGetStaticProps,
} from 'components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';

export interface HomePageContentProps {
  allHome: Home[];
}

const getStaticProps = generateGetStaticProps<HomePageContentProps>(
  pageQuery,
  PageNames.HOME
);
export { getStaticProps };

const HomePage: React.FC = () => {
  return (
    <>
      <Nav />
      <HomeHero />
      <Services />
      <WhyUs />
      <Testimonials />
      <ServiceAreas />
      <Blogs />
      <Faq></Faq>
      <Brands />
      <FooterCta />
      <Footer />
    </>
  );
};

export default WithGlobalContent<HomePageContentProps>(HomePage);
