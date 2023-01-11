import groq from "groq";
import client, { graphQLClient } from "../lib/sanity";
import Nav from "../components/organisms/nav";
import Brands from "../components/templates/home/brands";
import Faq from "../components/templates/home/faq";
import Footer from "../components/organisms/footer";
import { gql } from "@apollo/client";
import FooterCta from "../components/templates/home/footer-cta-home";
import Blogs from "../components/templates/home/blogs";
import React from "react";
import ServiceAreas from "../components/templates/home/service-areas";
import Testimonials from "../components/templates/home/testimonials";
import WhyUs from "../components/templates/home/why-us";
import Services from "../components/templates/home/services";
import HomeHero from "../components/templates/home/home-hero";

const GET_HEADER_INFO = gql`
  query {
    allAboutUs {
      name
    }
  }
`;

export async function getStaticProps(context: any) {
  const aboutUsInfo = await graphQLClient.query({
    query: GET_HEADER_INFO,
  });

  return {
    props: {
      aboutUsInfo,
    },
  };
}

export default function Home({ aboutUsInfo }: any) {
  console.log("aboutUsInfo", aboutUsInfo);

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
