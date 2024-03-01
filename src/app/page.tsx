'use client'
import dynamic from 'next/dynamic';
import * as React from 'react';

const Example = dynamic(() => import('../component/Example'), {
  ssr: false,
});

export default function Home() {

  return (
    <div>
      <Example/>
    </div>
  );
}
