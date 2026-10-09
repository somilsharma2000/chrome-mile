export default function RouteLine() {
  return (
    <div aria-hidden className="relative mx-auto mt-4 max-w-6xl px-4 sm:px-6">
      <div className="relative flex h-10 items-center">
        <span className="absolute left-0 hidden pr-3 text-[10px] uppercase tracking-widest2 text-bone-muted sm:block">
          The yatra
        </span>
        <svg
          className="h-6 w-full overflow-visible"
          viewBox="0 0 1200 24"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 12 H1200"
            stroke="#3A3A42"
            strokeWidth="1"
            strokeDasharray="10 14"
          />
          <path
            d="M0 12 H1200"
            stroke="#9A9AA2"
            strokeWidth="1"
            strokeDasharray="2 24"
            opacity="0.5"
          />
          <circle r="4" fill="#D6402B">
            <animateMotion
              dur="10s"
              repeatCount="indefinite"
              path="M0 12 H1200"
            />
          </circle>
        </svg>
        <span className="absolute right-0 hidden pl-3 text-[10px] uppercase tracking-widest2 text-bone-muted sm:block">
          26 Jan 2027
        </span>
      </div>
    </div>
  );
}
