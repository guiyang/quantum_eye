// File: src/app/components/HelloFromDjango.tsx

'use client';  // This is important for client-side components in App Router

import React, { useState, useEffect } from 'react';

const HelloFromDjango: React.FC = () => {
  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    fetch('/api/hello/')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => setMessage(`Error: ${error.message}`));
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-2">Message from Django:</h2>
      <p className="text-lg">{message}</p>
    </div>
  );
};

export default HelloFromDjango;