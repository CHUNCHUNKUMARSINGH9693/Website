import Link from "next/link";
import { Button, Container } from "@/components";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold text-brand-600">404</p>
      <h1 className="mt-2 text-4xl font-bold text-gray-900">Page not found</h1>
      <p className="mt-4 max-w-md text-gray-600">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button href="/" className="mt-8">
        Go home
      </Button>
      <Link href="/contact" className="mt-4 text-sm text-brand-600 hover:underline">
        Contact support
      </Link>
    </Container>
  );
}
