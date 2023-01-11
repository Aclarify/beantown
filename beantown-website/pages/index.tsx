import groq from 'groq';
import client, { graphQLClient } from '../lib/sanity';
import Nav from '../components/organisms/nav';
import Brands from '../components/templates/home/Brands';
import Faq from '../components/templates/home/Faq';
import Footer from '../components/organisms/Footer';
import { gql } from '@apollo/client';
import FooterCta from '../components/templates/home/FooterCta';
import Blogs from '../components/templates/home/Blogs';
import React from 'react';
import ServiceAreas from '../components/templates/home/ServiceAreas';
import Testimonials from '../components/templates/home/Testimonials';
import WhyUs from '../components/templates/home/WhyUs';
import Services from '../components/templates/home/Services';
import HomeHero from '../components/templates/home/HomeHero';
import GET_ABOUT_US from '../lib/graphql/pages/get-about-us.query';
import { RootQuery } from '../typing/gql/graphql';

const GET_HEADER_INFO = gql`
  query {
    allAboutUs {
      name
    }
  }
`;

export async function getStaticProps(context: any) {
  const { data } = await graphQLClient.query({
    query: GET_ABOUT_US,
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
