import Head from "next/head";
import styles from "../styles/Home.module.css";

function GarageScene({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 960 540"
      role="img"
      aria-labelledby="garageTitle garageDesc"
    >
      <title id="garageTitle">
        Anime inspired rider cleaning his Honda 350cc inside a neon lit garage
      </title>
      <desc id="garageDesc">
        A twenty-something martial artist with spiky hair wipes down a gleaming
        350cc Honda motorcycle with a microfiber cloth, using a bucket of water
        and a shampoo spray inside a futuristic garage.
      </desc>
      <defs>
        <linearGradient id="garageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1d2a5a" />
          <stop offset="45%" stopColor="#111827" />
          <stop offset="100%" stopColor="#050815" />
        </linearGradient>
        <linearGradient id="floorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0b1120" />
          <stop offset="50%" stopColor="#111c36" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="bikeBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fefefe" />
          <stop offset="50%" stopColor="#d92c2c" />
          <stop offset="100%" stopColor="#931515" />
        </linearGradient>
        <linearGradient id="visorGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3abff8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="lightBeam" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#94a3ff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="shineBurst" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#93c5fd" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bucketGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="60%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </radialGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="960" height="540" fill="url(#garageGradient)" />

      <g opacity="0.6">
        <rect x="40" y="40" width="880" height="20" fill="#1f3a8a" />
        <rect x="40" y="420" width="880" height="12" fill="#1f3a8a" />
        <g fill="#172554">
          <rect x="80" y="90" width="180" height="240" rx="12" />
          <rect x="300" y="112" width="120" height="200" rx="12" />
          <rect x="460" y="76" width="180" height="268" rx="14" />
          <rect x="670" y="128" width="210" height="228" rx="12" />
        </g>
      </g>

      <rect x="0" y="360" width="960" height="180" fill="url(#floorGradient)" />

      <g opacity="0.5">
        <rect x="120" y="60" width="70" height="240" fill="url(#lightBeam)" />
        <rect x="420" y="60" width="70" height="240" fill="url(#lightBeam)" />
        <rect x="720" y="60" width="70" height="240" fill="url(#lightBeam)" />
      </g>

      <g filter="url(#softGlow)">
        <ellipse cx="490" cy="370" rx="310" ry="32" fill="#0c1227" opacity="0.7" />
      </g>

      <g id="motorcycle" transform="translate(210 220)">
        <ellipse cx="170" cy="180" rx="78" ry="75" fill="#0f172a" />
        <ellipse cx="170" cy="180" rx="62" ry="60" fill="#1e293b" stroke="#0ea5e9" strokeWidth="6" />
        <ellipse cx="462" cy="170" rx="80" ry="74" fill="#0f172a" />
        <ellipse cx="462" cy="170" rx="64" ry="60" fill="#1e293b" stroke="#22d3ee" strokeWidth="6" />
        <rect
          x="150"
          y="70"
          width="260"
          height="40"
          rx="20"
          fill="#475569"
          stroke="#bae6fd"
          strokeWidth="4"
        />
        <path
          d="M90 160 C140 60 320 20 440 40 C540 58 560 120 508 166 C486 186 448 202 400 214 L260 240 L154 222 C110 214 80 200 70 178 C64 164 70 146 90 160 Z"
          fill="url(#bikeBody)"
          stroke="#f87171"
          strokeWidth="6"
        />
        <path
          d="M240 206 C260 206 300 202 320 192 C360 172 410 140 452 150 C488 158 516 180 520 210"
          stroke="#fee2e2"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M230 148 C210 110 200 72 210 48 C218 30 240 22 266 26 C292 30 316 46 332 70 L346 92"
          fill="none"
          stroke="#f8fafc"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.3"
        />
        <path
          d="M388 132 L432 92 C448 76 480 78 502 90 L568 128"
          fill="none"
          stroke="#fca5a5"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M128 198 L76 250 C60 266 58 290 74 306 C94 326 128 320 144 298 L192 234"
          fill="#1e293b"
        />
        <path
          d="M142 192 L116 240 C108 256 112 276 126 286 C146 300 176 290 184 268 L210 202"
          fill="#334155"
        />
        <rect x="205" y="78" width="86" height="22" rx="10" fill="#1e293b" />
        <rect x="290" y="60" width="110" height="28" rx="14" fill="#111827" />
        <path
          d="M168 104 C180 70 214 46 250 50 C296 54 332 82 356 120"
          stroke="#fecaca"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M328 110 C340 90 362 78 384 82 C408 86 432 104 438 126"
          stroke="#fcd34d"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M178 120 L174 88 C172 72 184 58 200 62 C212 66 224 80 232 98 L236 110"
          fill="#1e293b"
        />
        <text
          x="290"
          y="204"
          fill="#fefefe"
          fontSize="26"
          fontFamily="Orbitron, 'Segoe UI', sans-serif"
          letterSpacing="4"
        >
          HONDA 350
        </text>
        <g opacity="0.32">
          <circle cx="340" cy="138" r="60" fill="url(#shineBurst)" />
          <circle cx="220" cy="190" r="42" fill="url(#shineBurst)" />
          <circle cx="444" cy="160" r="48" fill="url(#shineBurst)" />
        </g>
        <g fill="#38bdf8" opacity="0.75">
          <ellipse cx="324" cy="214" rx="8" ry="20" transform="rotate(-18 324 214)" />
          <ellipse cx="372" cy="192" rx="6" ry="16" transform="rotate(-28 372 192)" />
          <ellipse cx="412" cy="180" rx="5" ry="14" transform="rotate(-10 412 180)" />
        </g>
      </g>

      <g id="hero" transform="translate(440 170)">
        <path
          d="M0 120 C-30 84 -36 44 -18 12 C0 -20 34 -34 72 -32 C110 -30 144 -12 158 20 C174 58 166 100 138 130"
          fill="#0f172a"
        />
        <path
          d="M20 90 C10 60 14 36 34 22 C58 4 98 8 122 30 C140 46 146 70 138 94 C130 122 102 148 68 148 C44 148 26 122 20 90 Z"
          fill="#facc15"
        />
        <path
          d="M68 68 C50 70 36 80 32 96 C26 118 42 136 68 138 C92 140 112 124 120 100 C126 80 110 66 88 66 C82 66 74 66 68 68 Z"
          fill="#fde68a"
        />
        <path
          d="M30 54 C44 32 76 18 108 24 C134 28 154 46 160 68 C164 84 146 90 132 82 C114 72 94 66 72 68 C52 70 32 68 30 54 Z"
          fill="#f97316"
        />
        <path
          d="M60 34 C76 16 96 4 120 4 C144 4 162 18 164 36 C166 52 154 70 140 70 C122 70 102 48 80 48"
          fill="#0f172a"
        />
        <path
          d="M104 80 C110 92 110 110 104 122 C98 136 84 144 68 144"
          stroke="#fcd34d"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M140 92 C152 82 170 82 182 92 C196 104 198 126 188 140 C178 154 156 156 142 146 C130 138 126 120 130 106"
          fill="#2563eb"
        />
        <path
          d="M158 126 C170 110 190 110 210 118 C230 126 246 142 252 164 C254 172 248 180 240 180 C218 180 194 172 174 160 C160 152 150 142 144 130"
          fill="#1d4ed8"
        />
        <path
          d="M14 118 C-8 124 -26 140 -32 164 C-40 192 -24 212 0 214 C26 216 48 198 64 176 L82 150"
          fill="#1d4ed8"
        />
        <path
          d="M64 178 C58 188 52 204 60 212 C72 224 94 214 102 198 L116 166"
          fill="#2563eb"
        />
        <path
          d="M120 166 C124 176 134 184 144 182 C160 180 180 164 184 148"
          stroke="#bfdbfe"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M178 146 C186 148 198 140 200 130 C202 116 194 100 182 92"
          stroke="#3b82f6"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <g transform="translate(-30 170) rotate(-20)">
          <rect
            x="0"
            y="0"
            width="120"
            height="34"
            rx="16"
            fill="#1d4ed8"
            stroke="#93c5fd"
            strokeWidth="4"
          />
          <rect x="12" y="8" width="96" height="18" rx="9" fill="#bae6fd" />
        </g>
        <g transform="translate(146 160) rotate(-12)">
          <rect
            x="-6"
            y="0"
            width="32"
            height="90"
            rx="14"
            fill="#0ea5e9"
            stroke="#38bdf8"
            strokeWidth="4"
          />
          <rect x="2" y="8" width="16" height="28" rx="6" fill="#bae6fd" />
          <circle cx="10" cy="52" r="10" fill="#38bdf8" />
          <rect x="8" y="62" width="4" height="22" rx="2" fill="#60a5fa" />
        </g>
        <path
          d="M32 152 C18 176 22 210 44 224 C64 236 90 230 110 214 L132 190 L124 172"
          fill="#2563eb"
        />
        <path
          d="M110 166 C120 152 138 142 156 142 C170 142 184 150 190 162 C200 182 186 206 164 214 C144 220 118 214 108 200"
          fill="#1e40af"
        />
        <path
          d="M72 110 C78 120 86 126 96 126 C110 126 120 112 120 98"
          stroke="#0f172a"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M80 94 C88 98 96 98 104 92"
          stroke="#0f172a"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M42 124 L18 146"
          stroke="#3b82f6"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M134 188 C140 194 154 196 162 192"
          stroke="#bfdbfe"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </g>

      <g id="bucket" transform="translate(586 356)">
        <ellipse cx="0" cy="40" rx="60" ry="18" fill="#0369a1" opacity="0.7" />
        <path
          d="M-50 0 H50 C58 0 60 6 60 14 V44 C60 70 32 90 0 90 C-32 90 -60 70 -60 44 V14 C-60 6 -58 0 -50 0 Z"
          fill="url(#bucketGradient)"
          stroke="#0ea5e9"
          strokeWidth="4"
        />
        <path
          d="M-40 -8 C-38 -22 -28 -32 -12 -36 C4 -40 20 -38 32 -28 C40 -20 44 -10 44 0"
          stroke="#bae6fd"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <ellipse cx="0" cy="0" rx="52" ry="12" fill="#e0f2fe" opacity="0.7" />
        <path
          d="M-40 44 C-30 54 -10 60 10 60 C32 60 50 54 58 44"
          stroke="#f8fafc"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>

      <g id="water" opacity="0.5">
        <path
          d="M520 392 C540 372 580 362 618 368 C646 372 672 386 682 402 C692 420 680 442 660 448 C632 456 574 450 538 434 C518 424 504 408 520 392 Z"
          fill="#2563eb"
          opacity="0.4"
        />
        <ellipse cx="524" cy="424" rx="12" ry="4" fill="#38bdf8" opacity="0.6" />
        <ellipse cx="580" cy="420" rx="8" ry="3" fill="#38bdf8" opacity="0.6" />
        <ellipse cx="632" cy="428" rx="10" ry="4" fill="#0ea5e9" opacity="0.5" />
      </g>

      <g id="droplets" opacity="0.75" fill="#86efac">
        <circle cx="492" cy="214" r="4" />
        <circle cx="512" cy="220" r="3" />
        <circle cx="478" cy="196" r="3" />
        <circle cx="434" cy="248" r="4" />
        <circle cx="388" cy="236" r="3" />
        <circle cx="354" cy="228" r="3" />
      </g>

      <g id="mist" opacity="0.25">
        <ellipse cx="400" cy="184" rx="100" ry="34" fill="#60a5fa" />
        <ellipse cx="450" cy="200" rx="120" ry="38" fill="#38bdf8" />
        <ellipse cx="360" cy="194" rx="86" ry="26" fill="#3b82f6" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Neon Garage Detail - Honda 350cc</title>
        <meta
          name="description"
          content="Anime-inspired Dragon Ball Z style rider detailing his gleaming Honda 350cc bike with water, shampoo spray, and a microfiber cloth inside a neon garage."
        />
      </Head>
      <main className={styles.page}>
        <div className={styles.headline}>
          <h1 className={styles.title}>Neon Garage Detail Ritual</h1>
          <p className={styles.subtitle}>
            A Dragon Ball Z inspired rider in his early twenties puts mindful care into his Honda
            350cc, working through water beads, shampoo sparkle, and the soft glide of a microfiber
            cloth beneath neon garage lights.
          </p>
        </div>
        <div className={styles.sceneWrapper}>
          <GarageScene className={styles.scene} />
        </div>
        <p className={styles.credits}>
          Original vector illustration generated in-code for a Vercel-friendly web experience.
        </p>
      </main>
    </>
  );
}
