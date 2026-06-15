import React from "react";
import Container from "./Container";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      <Container className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <span className="px-4 py-2 bg-blue-50 text-blue-600 text-sm font-bold rounded-full mb-6 inline-block tracking-widest uppercase">
            Blagweb Digital Agency
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Building the Future <br />
            <span className="text-blue-600">Of Digital Experiences</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg">
            We design and develop high-performance websites and applications that help businesses scale.
          </p>
          <div className="flex gap-4">
            <Button href="/contact">Start Project</Button>
            <Button href="/portfolio" variant="outline">View Portfolio</Button>
          </div>
        </div>
        <div className="relative h-[400px] w-full hidden lg:block bg-gray-50 rounded-[3rem] rotate-3 border border-gray-100">
            <div className="absolute inset-0 bg-blue-50/50 rounded-[3rem] -rotate-6 -z-10" />
        </div>
      </Container>
    </section>
  );
}