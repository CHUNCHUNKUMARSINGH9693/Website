import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-blue-900 py-20 lg:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[25%] -left-[10%] w-[50%] h-[150%] rounded-full bg-blue-800/50 blur-3xl" />
        <div className="absolute top-[20%] right-[5%] w-[30%] h-[80%] rounded-full bg-blue-600/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Let&apos;s Build Something Amazing Together
        </h2>
        <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
          Ready to turn your ideas into reality? Partner with Blagweb Agency and create digital solutions that drive results.
        </p>
        <div className="mt-10 flex justify-center">
          <Button 
            href="/contact" 
            size="lg" 
            className="bg-red-600 text-white hover:bg-red-700 shadow-xl shadow-blue-900/20 text-lg px-8 py-4 font-bold"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
