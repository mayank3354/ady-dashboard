'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export function TestComponent() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hot reloading test');

  return (
    <div className={cn(
      "p-4 border rounded-lg bg-white shadow-sm",
      "max-w-md mx-auto"
    )}>
      <h3 className="text-lg font-semibold mb-2">{message}</h3>
      <p className="text-gray-600 mb-4">
        This component tests hot reloading functionality.
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Count: {count}
        </button>
        <button
          onClick={() => setMessage('Hot reloading works!')}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Update Message
        </button>
      </div>
    </div>
  );
}
