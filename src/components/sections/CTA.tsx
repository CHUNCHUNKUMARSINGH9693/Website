import { Button } from "@/components/ui/Button";

interface CTAProps {
  title?: string;
  subtitle?: string;
}

export function CTA({ title = "Ready to start your project?", subtitle = "Let's build something amazing together." }: CTAProps) {
  return (
    <section className="bg-blue-900 py-16 text-center text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
        <p className="mt-4 text-xl text-blue-100">{subtitle}</p>
        <div className="mt-8 flex justify-center">
          <Button href="/contact" size="lg" className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 font-bold text-lg">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
