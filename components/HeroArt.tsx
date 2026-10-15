/** Decorative illustration of a Tel Aviv–style building, used until a real photo is set. */
export default function HeroArt() {
  const floors = [168, 236, 304, 372];
  return (
    <svg viewBox="0 0 480 500" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fbe9df" />
          <stop offset="1" stopColor="#f3ece1" />
        </linearGradient>
      </defs>
      <rect width="480" height="500" fill="url(#hero-sky)" />

      {/* sun + clouds */}
      <circle cx="372" cy="104" r="58" fill="#e0855c" opacity="0.18" />
      <circle cx="372" cy="104" r="36" fill="#e0855c" opacity="0.3" />
      <rect x="44" y="78" width="96" height="20" rx="10" fill="#fff" opacity="0.8" />
      <rect x="84" y="62" width="64" height="20" rx="10" fill="#fff" opacity="0.8" />
      <rect x="300" y="190" width="72" height="16" rx="8" fill="#fff" opacity="0.6" />

      {/* ground */}
      <rect y="440" width="480" height="60" fill="#e8ddcc" />

      {/* side volume */}
      <rect x="336" y="150" width="58" height="290" fill="#ece3d5" />
      {floors.map((y) => (
        <rect key={`s${y}`} x="350" y={y} width="30" height="30" rx="4" fill="#1e4d45" opacity="0.35" />
      ))}

      {/* main body */}
      <rect x="96" y="132" width="250" height="308" rx="6" fill="#fffdf9" />
      <rect x="88" y="122" width="266" height="16" rx="8" fill="#1e4d45" />

      {floors.map((y, i) => (
        <g key={y}>
          <rect x="116" y={y} width="66" height="34" rx="4" fill={i === 1 ? "#f4b892" : "#1e4d45"} opacity={i === 1 ? 1 : 0.85} />
          <rect x="198" y={y} width="20" height="34" rx="4" fill="#1e4d45" opacity="0.6" />
          <rect x="234" y={y} width="92" height="34" rx="4" fill={i === 3 ? "#f4b892" : "#1e4d45"} opacity={i === 3 ? 1 : 0.85} />
          {/* balcony band */}
          <rect x="88" y={y + 42} width="266" height="12" rx="6" fill="#f3ece1" stroke="#e4ddd2" />
          {/* balcony plants */}
          <circle cx="300" cy={y + 38} r="9" fill="#3d7a6c" />
          <circle cx="314" cy={y + 40} r="7" fill="#2f6b5f" />
        </g>
      ))}

      {/* door */}
      <path d="M200 440v-26a20 20 0 0 1 40 0v26z" fill="#b4532b" />
      <circle cx="232" cy="424" r="2.5" fill="#fbe9df" />

      {/* trees */}
      <rect x="50" y="384" width="9" height="58" rx="4" fill="#8a6a4f" />
      <circle cx="54" cy="372" r="28" fill="#2f6b5f" />
      <circle cx="36" cy="392" r="18" fill="#3d7a6c" />
      <circle cx="74" cy="390" r="18" fill="#3d7a6c" />
      <circle cx="418" cy="428" r="18" fill="#3d7a6c" />
      <circle cx="440" cy="432" r="14" fill="#2f6b5f" />
    </svg>
  );
}
