"use client";
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="h-screen py-[120px] flex flex-col items-center justify-around gap-3-xs bg-dark-primary">
        <h1 className="text-light-light">Something went wrong!</h1>
        <div className="flex flex-col gap-3-xs text-center ">
          <p className="body1 text-lg text-light-light">{error.name}</p>
          <p className="body1 text-md text-light-light">{error.message}</p>
        </div>
        <button onClick={() => reset()} className="link">
          Try again
        </button>
      </body>
    </html>
  );
}
