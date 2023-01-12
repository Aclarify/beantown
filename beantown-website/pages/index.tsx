import groq from 'groq';
import client, { graphQLClient } from '../lib/sanity';
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
import { RootQuery } from '../typing/gql/graphql';
import GET_ABOUT_US_QUERY from '../lib/graphql/pages/get-about-us.query';

export async function getStaticProps(context: any) {
  const { data } = await graphQLClient.query({
    query: GET_ABOUT_US_QUERY,
  });

  return {
    props: {
      aboutUsInfo: data.allAboutUs,
    },
  };
}

export default function Home({
  aboutUsInfo,
}: {
  aboutUsInfo: RootQuery['allAboutUs'];
}) {
  console.log('aboutUsInfo', aboutUsInfo);

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
}
