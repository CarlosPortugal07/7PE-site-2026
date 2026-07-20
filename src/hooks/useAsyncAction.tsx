import { useState } from 'react';
import { Loader2 } from 'lucide-react';

type Options = {
  /** Simulated async work duration in ms before resolving. */
  duration?: number;
  /** Probability of failure (0-1) for demo purposes. */
  failRate?: number;
};

/**
 * Wraps an async CTA handler with loading + success/error feedback.
 * Returns the loading flag, a click handler, and the last error.
 */
export function useAsyncAction({ duration = 1400, failRate = 0 }: Options = {}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const run = async <T,>(task?: () => Promise<T> | T): Promise<T | undefined> => {
    setLoading(true);
    setError(null);
    try {
      const result = await new Promise<T | undefined>((resolve, reject) => {
        window.setTimeout(() => {
          if (failRate > 0 && Math.random() < failRate) {
            reject(new Error('Não foi possível concluir agora. Tente novamente.'));
          } else {
            resolve(task ? Promise.resolve(task()) : undefined);
          }
        }, duration);
      });
      return result;
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Erro inesperado';
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, run };
}

/** Spinner button content helper. */
export function LoadingLabel({
  loading,
  idle,
}: {
  loading: boolean;
  idle: string;
}) {
  return (
    <>
      {loading ? (
        <Loader2 size={18} className="animate-spin" />
      ) : null}
      {loading ? 'Enviando...' : idle}
    </>
  );
}
