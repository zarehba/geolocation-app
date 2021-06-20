import { useState, useEffect } from 'react';

export default function useStateWithSessionStorage(storageKey, defaultVal) {
  const [val, setVal] = useState(
    JSON.parse(sessionStorage.getItem(storageKey)) || defaultVal
  );

  useEffect(() => {
    sessionStorage.setItem(storageKey, JSON.stringify(val));
  }, [val, storageKey]);

  return [val, setVal];
}
