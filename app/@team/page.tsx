import { wait } from '@/lib/utils';
import React from 'react';

export default async function Team() {
  await wait(5000);

  return (
    <div className="h-64 flex-1 rounded-2xl bg-pink-800 p-10 text-white">
      <h2 className="text-xl font-semibold">Team</h2>
    </div>
  );
}
