// app/play/page.tsx
export default function PlayPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold">Capture Your Mood</h1>
        <p className="mt-3 text-gray-600">
          Tomorrow we’ll add the camera + AI detection. For now, this is your play space.
        </p>
        <a href="/" className="mt-8 inline-block underline">
          ← Back to Home
        </a>
      </section>
    </main>
  );
}