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
      <body className="h-screen py-[120px] flex flex-col items-center justify-around gap-3-xs bg-primary-main">
        <main className="flex flex-col items-center max-w-[88%] mx-auto gap-2-xs">
          <h1 className="text-text-secondary">Something went wrong!</h1>
          <div className="flex flex-col gap-3-xs text-center max-w-[1/2] mx-auto">
            <p className="body1 text-lg text-text-secondary">{error.name}</p>
            <p className="body1 text-md text-text-secondary">{error.message}</p>
          </div>
          <button onClick={() => reset()} className="link">
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
