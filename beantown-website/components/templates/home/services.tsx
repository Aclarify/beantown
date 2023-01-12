import React from "react";
import ServiceCard from "../../molecules/service-card";

export default function Services() {
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
