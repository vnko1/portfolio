import Link from "next/link";

export default function NotFound() {
  return (
    <section className="col-span-2 flex flex-col items-center justify-center gap-1-xs ">
      <h1>404</h1>
      <p className="body1 text-sm">Could not find requested resource</p>
      <Link className="link" href="/">
        Return Home
      </Link>
    </section>
  );
}
