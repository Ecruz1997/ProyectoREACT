import { useEffect, useState, useRef } from "react";

export function useAsync<T>(asyncFn: () => Promise<T>, deps: any[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const abortRef = useRef<AbortController>();

  useEffect(() => {
    abortRef.current = new AbortController();
    setTimeout(() => {
      setLoading(true);
      setError(null);
    }, 0);

    asyncFn()
      .then(res => {
        if (!abortRef.current?.signal.aborted) setData(res);
      })
      .catch(err => {
        if (!abortRef.current?.signal.aborted) setError(err);
      })
      .finally(() => {
        if (!abortRef.current?.signal.aborted) setLoading(false);
      });

    return () => abortRef.current?.abort();
    // eslint-disable-next-line
  }, deps);

  return { data, loading, error };
}
