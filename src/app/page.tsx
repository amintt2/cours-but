'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/Card';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-5xl w-full items-center justify-between">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Welcome to <span className="text-blue-600">Next.js</span> with <span className="text-orange-500">Bun</span>
        </h1>
        <p className="text-xl mb-8 text-center">
          Get started by editing <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        
        <div className="flex flex-col items-center justify-center mb-10">
          <Button
            onClick={() => setCount(count + 1)}
            size="lg"
          >
            Count: {count}
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Documentation</CardTitle>
              <CardDescription>Find in-depth information about Next.js and Bun</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Learn how to use Next.js and Bun together to build fast, modern web applications.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={() => window.open('https://nextjs.org/docs', '_blank')}>
                Next.js Docs
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://bun.sh/docs', '_blank')}
                className="ml-2"
              >
                Bun Docs
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Learn</CardTitle>
              <CardDescription>Learn about Next.js in an interactive course</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Take your Next.js knowledge to the next level with interactive tutorials and examples.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={() => window.open('https://nextjs.org/learn', '_blank')}>
                Learn Next.js
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
