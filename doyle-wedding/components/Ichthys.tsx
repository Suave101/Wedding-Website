export default function IchthysIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 24"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ichthys symbol"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id="etch" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence baseFrequency="0.9" numOctaves="1" seed="3" result="t" />
          <feDisplacementMap in="SourceGraphic" in2="t" scale="1.2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      {/* two arcs that form the ichthys (fish) shape */}
      <path
        d="M1.5 12 C6.5 7 20 7 26.5 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#etch)"
        opacity="0.98"
      />
      <path
        d="M1.5 12 C6.5 17 20 17 26.5 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#etch)"
        opacity="0.98"
      />
      {/* subtle inner highlight to mimic carved surface */}
      <path
        d="M5 11.7 C8 9.5 18 9.5 23 11.7"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="0.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.75"
      />
    </svg>
  );
}
