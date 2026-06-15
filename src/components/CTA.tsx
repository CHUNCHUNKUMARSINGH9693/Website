import React from "react";
import Container from "./Container";
import Button from "./Button";

interface CTAProps {
  title?: string;
  description?: string;
  primaryCTA?: string;
}

export default function CTA({
  title = "Ready to start your next project?",
  description = "Join hundreds of successful businesses that have scaled with Blagweb Agency.",
  primaryCTA = "Get Started",
}: CTAProps) {
  return (
    <section className="py-20 bg-blue-600 text-white overflow-hidden relative">
      <Container className="text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">{description}</p>
        <div className="flex justify-center">
          <Button variant="primary" className="bg-white text-blue-600 hover:bg-blue-50 border-none" href="/contact">{primaryCTA}</Button>
        </div>
      </Container>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
    </section>
  );
}