export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <svg
            className="w-12 h-12 text-brand-primary animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
            />
            <path
              className="opacity-75"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2a10 10 0 0 1 10 10"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-6 h-6 rounded-full bg-brand-primary/20 animate-pulse" />
          </span>
        </div>
        <p className="text-body-md text-text-secondary">Đang tải...</p>
      </div>
    </div>
  );
}