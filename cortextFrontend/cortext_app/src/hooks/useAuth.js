import { useState, useEffect } from 'react';

export function useAuth() {
  // You might need to ping a backend endpoint like /api/check-auth/
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch('/api/check-auth/', { credentials: 'include' })
      .then(res => setIsLoggedIn(res.ok))
      .catch(() => setIsLoggedIn(false));
  }, []);

  return { isLoggedIn };
}
