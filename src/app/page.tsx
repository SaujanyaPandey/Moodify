// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Moodify <span className="text-gray-500">— AI playlists from your mood</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Record a quick selfie, let AI detect your mood, and get the perfect Spotify playlist.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/play"
            className="rounded-2xl border px-6 py-3 text-base font-medium hover:shadow-md transition"
          >
            Capture Mood →
          </Link>

          <a
            href="https://github.com/yourname/moodify"
            className="rounded-2xl px-6 py-3 text-base font-medium underline"
            target="_blank" rel="noreferrer"
          >
            Star the repo
          </a>
        </div>

        <p className="mt-10 text-sm text-gray-500">Day 1 MVP scaffold • Camera coming next</p>
      </section>
    </main>
  );
}