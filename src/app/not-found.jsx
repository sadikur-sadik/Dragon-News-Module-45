import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      No Route Here
      <button><Link href="/">Back To Home</Link></button>
    </div>
  );
};

export default NotFound;