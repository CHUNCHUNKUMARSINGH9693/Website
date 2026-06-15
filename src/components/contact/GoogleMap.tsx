"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GoogleMap() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="Find Us on the Map"
          subtitle="Visit our office or take a virtual tour"
          centered
        />

        <div className="mt-12 overflow-hidden rounded-2xl shadow-xl">
          <div className="relative w-full overflow-hidden bg-gray-200" style={{ paddingBottom: "56.25%" }}>
            {/* Interactive Google Map */}
            <iframe
              title="Blagweb Agency Location"
              className="absolute inset-0 h-full w-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.7411574339446!2d84.72544122346899!3d26.43254487167266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399177c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2s61%2C%20Block%20Road%2C%20Jamunia%2C%20Narkatiaganj%2C%20Bihar%20845455!5e0!3m2!1sen!2sin!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Map Instructions */}
        <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
          <p className="text-center text-sm text-blue-900">
            📍 Located in Narkatiaganj, Bihar | Easily accessible from major highways | 
            Free parking available
          </p>
        </div>
      </Container>
    </section>
  );
}
