import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-32 text-center">
      <p className="text-sm font-medium tracking-wide text-accent uppercase">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Button href="/" className="mt-8">
        Back home
      </Button>
      <Link href="/blog" className="mt-4 text-sm text-muted transition-colors hover:text-foreground">
        Or browse the blog
      </Link>
    </Container>
  );
}
