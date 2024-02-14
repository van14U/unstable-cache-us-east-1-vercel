export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        SSR Examples (us-east-1)
      </div>
      <p>Cache Tests Far (150ms simulated latency)</p>
      <div className="flex flex-col px-4">
        <a className="text-blue-600" href="/far/unstable-cache">unstable_cache</a>
        <a className="text-blue-600" href="/far/unstable-cache/streaming">unstable_cache + streaming</a>
        <a className="text-blue-600" href="/far/unstable-cache/streaming-edge">unstable_cache + streaming (vercel edge runtime)</a>
      </div>
      <p>Cache Tests Close (25ms simulated lantency)</p>
      <div className="flex flex-col px-4">
        <a className="text-blue-600" href="/close/unstable-cache">unstable_cache</a>
        <a className="text-blue-600" href="/close/unstable-cache/streaming">unstable_cache + streaming</a>
        <a className="text-blue-600" href="/close/unstable-cache/streaming-edge">unstable_cache + streaming (vercel edge runtime)</a>
      </div>
    </main>
  );
}
