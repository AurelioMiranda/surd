// components/BuyNow.js
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function BuyNow() {
  const pathname = usePathname();

  return (
    <>
      {pathname !== '/payment' && (
        <div className="buyNow">
          <Link href="/payment">Compre já</Link>
        </div>
      )}
    </>
  );
}
