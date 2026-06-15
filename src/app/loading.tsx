import { Container } from "@/components";

export default function Loading() {
  return (
    <Container className="flex min-h-[40vh] items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-10 w-10 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600"
          role="status"
          aria-label="Loading"
        />
        <p className="text-sm text-gray-600">Loading...</p>
      </div>
    </Container>
  );
}
