/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import { useState } from 'react';
import { store } from 'src/app/store';

import HeaderNav from './headerNav';

export default function UserProfile() {
  const [isAdmin, setIsAdmin] = useState(
    store.getState().user.role === 'admin'
  );
  store.subscribe(() => {
    setIsAdmin(store.getState().user.role === 'admin');
  });

  return (
    <div className="px-4 pt-28">
      <HeaderNav />
    </div>
  );
}
