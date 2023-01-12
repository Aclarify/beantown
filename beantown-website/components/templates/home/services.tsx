import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import React, { useContext } from 'react';
import ServiceCard from '../../molecules/service-card';

export default function Services() {
  const { pageContent } =
    useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
  const homeData = pageContent?.allHome[0];
  console.log('homeData', homeData);
  return (
    <section id="services" className="pt-12">
      <div className="border space-y-5">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <ServiceCard />
      </div>
    </section>
  );
}
