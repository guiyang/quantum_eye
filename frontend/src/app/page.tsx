// File: src/app/page.tsx

import HelloFromDjango from './components/HelloFromDjango';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to QuantumEye</h1>
      <HelloFromDjango />
    </div>
  );
}