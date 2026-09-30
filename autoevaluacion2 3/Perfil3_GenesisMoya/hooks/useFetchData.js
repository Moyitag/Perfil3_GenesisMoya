import { useState, useEffect, useCallback } from 'react';

export default function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      const json = await response.json();
      setData(json.results ?? []);
    } catch (e) {
      setError(e.message || 'No se pudo cargar la información');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    load();
  }, [load]);

  return { data, loading, error, reload: load };
}
