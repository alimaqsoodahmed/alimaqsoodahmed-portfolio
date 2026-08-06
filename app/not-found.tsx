export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#07070a] text-white">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-indigo-500">404</h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-400">
          The page you requested does not exist.
        </p>

        <a
          href="/"
          className="inline-block mt-8 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700"
        >
          Go Home
        </a>
      </div>
    </main>
  );
}