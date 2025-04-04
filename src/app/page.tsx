'use client';

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to <span className="text-blue-600">Next.js</span>
        </h1>
        <p className="text-xl mb-8">
          Get started by editing <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        
        <div className="flex flex-col items-center justify-center">
          <button
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            onClick={() => setCount(count + 1)}
          >
            Count: {count}
          </button>
          
          <div className="mt-8 grid grid-cols-2 gap-6">
            <a 
              href="https://nextjs.org/docs" 
              className="p-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl font-semibold mb-2">Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
            
            <a 
              href="https://nextjs.org/learn" 
              className="p-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl font-semibold mb-2">Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
