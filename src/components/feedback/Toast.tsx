import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type ToastType = 'success' | 'error' | 'info';

type Toast = {
  id: number;
  type: ToastType;
  title: string;
  message?: string;
};

type ToastContextValue = {
  notify: (toast: Omit<Toast, 'id'>) => void;
  success: (title: string, message?: string) => void;
  error: (title: string, message?: string) => void;
  info: (title: string, message?: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const config: Record<ToastType, { icon: typeof CheckCircle; accent: string; ring: string }> = {
  success: {
    icon: CheckCircle,
    accent: 'text-mint-600',
    ring: 'border-mint-200 bg-mint-50',
  },
  error: {
    icon: AlertCircle,
    accent: 'text-red-600',
    ring: 'border-red-200 bg-red-50',
  },
  info: {
    icon: Info,
    accent: 'text-navy-600',
    ring: 'border-navy-200 bg-navy-50',
  },
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const notify = useCallback(
    (toast: Omit<Toast, 'id'>) => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [...prev, { ...toast, id }]);
      window.setTimeout(() => dismiss(id), 5000);
    },
    [dismiss],
  );

  const value = useMemo<ToastContextValue>(
    () => ({
      notify,
      success: (title, message) => notify({ type: 'success', title, message }),
      error: (title, message) => notify({ type: 'error', title, message }),
      info: (title, message) => notify({ type: 'info', title, message }),
    }),
    [notify],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed top-4 right-4 z-[100] flex flex-col gap-3 w-[min(360px,calc(100vw-2rem))]">
        <AnimatePresence>
          {toasts.map((toast) => {
            const cfg = config[toast.type];
            const Icon = cfg.icon;
            return (
              <motion.div
                key={toast.id}
                layout
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 40, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-start gap-3 p-4 pr-10 rounded-xl border shadow-[0_12px_32px_rgba(16,35,63,0.12)] ${cfg.ring}`}
              >
                <Icon size={20} className={`shrink-0 mt-0.5 ${cfg.accent}`} />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-navy">{toast.title}</p>
                  {toast.message && (
                    <p className="text-muted text-[0.85rem] mt-1 leading-relaxed">
                      {toast.message}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => dismiss(toast.id)}
                  aria-label="Fechar"
                  className="absolute top-2 right-2 w-7 h-7 rounded-lg flex items-center justify-center text-muted hover:text-navy hover:bg-white/60 transition-colors cursor-pointer"
                >
                  <X size={14} />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
