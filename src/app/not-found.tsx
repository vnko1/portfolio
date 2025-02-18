import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center gap-1-xs ">
      <h1>404</h1>
      <p className="body1 text-sm text-light-primary dark:text-dark-primary">
        Could not find requested resource
      </p>
      <Link className="link" href="/">
        Return Home
      </Link>
    </section>
  );
}
