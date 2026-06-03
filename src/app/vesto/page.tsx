import Image from "next/image";

export default function VestoPage() {
  return (
    <>
      <HeroSection />
      <HomeFeatureSection />
      <WatchlistFeatureSection />
      <AIResearchFeatureSection />
      <NewsFeatureSection />
      <EarningsFeatureSection />
      <DownloadCTA />
    </>
  );
}

/* ─── 1. HERO ─────────────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-4 pb-0 pt-10 sm:pt-20 sm:px-6 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[#D4F53C]/5 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4F53C]/20 bg-[#D4F53C]/10 px-3 sm:px-4 py-1 sm:py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4F53C]" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#D4F53C]">
              Available on iOS &amp; Android
            </span>
          </div>

          <h1 className="text-[2rem] leading-[1.15] font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            The market, decoded.
          </h1>

          <p className="mx-auto mt-3 sm:mt-6 max-w-xl text-sm sm:text-lg leading-relaxed text-gray-400">
            Real-time market data, AI-generated research reports, smart
            watchlists, and an earnings calendar — everything in a single,
            beautifully designed app.
          </p>

          <div className="mt-5 sm:mt-10 flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <AppStoreButton />
            <PlayStoreButton />
          </div>
        </div>

        {/* Phone fan showcase */}
        <div className="relative mt-8 sm:mt-12 flex items-end justify-center">
          <div className="relative z-10 flex-none hidden sm:block -rotate-[9deg] translate-y-[72px] -mr-7">
            <PhoneMockup
              src="/vesto/screenshots/earnings.png"
              alt="Earnings Calendar"
              className="h-[260px] w-auto opacity-80"
            />
          </div>

          <div className="relative z-20 flex-none -rotate-[4.5deg] translate-y-[15px] sm:translate-y-[30px] -mr-4 sm:-mr-6">
            <PhoneMockup
              src="/vesto/screenshots/watchlist.png"
              alt="Smart Watchlist"
              className="h-[185px] sm:h-[390px] w-auto opacity-90"
            />
          </div>

          <div className="relative z-30 flex-none">
            <PhoneMockup
              src="/vesto/screenshots/home.png"
              alt="Market Dashboard"
              priority
              className="h-[260px] sm:h-[520px] w-auto drop-shadow-[0_40px_80px_rgba(212,245,60,0.15)]"
            />
          </div>

          <div className="relative z-20 flex-none rotate-[4.5deg] translate-y-[15px] sm:translate-y-[30px] -ml-4 sm:-ml-6">
            <PhoneMockup
              src="/vesto/screenshots/ai-research.png"
              alt="AI Research"
              className="h-[185px] sm:h-[390px] w-auto opacity-90"
            />
          </div>

          <div className="relative z-10 flex-none hidden sm:block rotate-[9deg] translate-y-[72px] -ml-7">
            <PhoneMockup
              src="/vesto/screenshots/news.png"
              alt="Market News"
              className="h-[260px] w-auto opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 2. HOME DASHBOARD ──────────────────────────────────────────────────── */

function HomeFeatureSection() {
  return (
    <FeatureSection
      badge="Dashboard"
      badgeAccent
      headline="Your complete market overview, at a glance"
      description="Open the app and immediately see what matters — BTC, VIX, and Gold with live charts, a sector heatmap, and the day's top movers. Everything you need to orient yourself before placing a trade."
      bullets={[
        "Live BTC, VIX, and Gold price cards with mini-charts",
        "Color-coded sector heatmap across 9 sectors",
        "Gainers, losers, and unusual volume in one tap",
      ]}
      screenshot="/vesto/screenshots/home.png"
      screenshotAlt="Vesto Market Dashboard"
      phoneRight
      bg="#0a0a0a"
    />
  );
}

/* ─── 3. WATCHLIST ───────────────────────────────────────────────────────── */

function WatchlistFeatureSection() {
  return (
    <FeatureSection
      badge="Watchlist"
      headline="Track every stock that matters to you"
      description="Build a personal watchlist and get a full technical snapshot for each ticker on a single compact card — no chart needed."
      bullets={[
        "MA 50/200 crossover with trend direction signal",
        "RSI with overbought and oversold alerts",
        "52-week range position and relative volume",
      ]}
      screenshot="/vesto/screenshots/watchlist.png"
      screenshotAlt="Vesto Smart Watchlist"
      phoneRight={false}
      bg="#111111"
    />
  );
}

/* ─── 4. AI RESEARCH ─────────────────────────────────────────────────────── */

function AIResearchFeatureSection() {
  return (
    <FeatureSection
      badge="AI Research"
      badgeAccent
      headline="Institutional-grade research, instantly"
      description="Search any ticker and receive a comprehensive AI-generated report in seconds — the kind of analysis previously reserved for Wall Street analysts."
      bullets={[
        "Business model, competitive moat, and market position",
        "Valuation, financials, and fair value assessment",
        "Risk factors, bear cases, and red flags",
        "Technical setup — chart patterns, RSI, moving averages",
      ]}
      screenshot="/vesto/screenshots/ai-research.png"
      screenshotAlt="Vesto AI Research"
      phoneRight
      bg="#0a0a0a"
    />
  );
}

/* ─── 5. NEWS ────────────────────────────────────────────────────────────── */

function NewsFeatureSection() {
  return (
    <FeatureSection
      badge="News"
      headline="Stay ahead of market-moving events"
      description="Curated, real-time financial news organized into four feeds. Know what's moving the market before it moves your portfolio."
      bullets={[
        "Markets, My Stocks, Earnings, and Economy feeds",
        "Relevant ticker tags on every story",
        "Real-time headlines from Benzinga",
      ]}
      screenshot="/vesto/screenshots/news.png"
      screenshotAlt="Vesto Market News"
      phoneRight={false}
      bg="#111111"
    />
  );
}

/* ─── 6. EARNINGS CALENDAR ───────────────────────────────────────────────── */

function EarningsFeatureSection() {
  return (
    <FeatureSection
      badge="Earnings"
      headline="Never miss an earnings release"
      description="See which companies are reporting today, tomorrow, and over the next 7 days — with EPS estimates and market timing. Earnings season becomes your edge."
      bullets={[
        "Today, tomorrow, and next 7 days views",
        "EPS estimates with analyst consensus",
        "Pre-market and after-market timing",
      ]}
      screenshot="/vesto/screenshots/earnings.png"
      screenshotAlt="Vesto Earnings Calendar"
      phoneRight
      bg="#0a0a0a"
    />
  );
}

/* ─── 7. DOWNLOAD CTA ────────────────────────────────────────────────────── */

function DownloadCTA() {
  return (
    <section id="download" className="bg-[#0a0a0a] px-4 py-10 sm:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#D4F53C]/15 bg-[#111111] px-6 sm:px-8 py-12 sm:py-16 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[700px] rounded-full bg-[#D4F53C]/5 blur-[100px]"
          />
          <div className="relative">
            <div className="mx-auto mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-[#D4F53C]">
              <span className="text-xl sm:text-2xl font-black text-black">V</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Start investing with clarity
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-lg text-sm sm:text-lg text-gray-400">
              Download Vesto free and get instant access to AI research, live market data, and everything you need to make better decisions.
            </p>
            <div className="mt-6 sm:mt-10 flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
              <AppStoreButton large />
              <PlayStoreButton large />
            </div>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600">
              Free to download · iOS &amp; Android
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SHARED: FEATURE SECTION ────────────────────────────────────────────── */

function FeatureSection({
  badge,
  badgeAccent = false,
  headline,
  description,
  bullets,
  screenshot,
  screenshotAlt,
  phoneRight,
  bg,
}: {
  badge: string;
  badgeAccent?: boolean;
  headline: string;
  description: string;
  bullets: string[];
  screenshot: string;
  screenshotAlt: string;
  phoneRight: boolean;
  bg: string;
}) {
  const textContent = (
    <div>
      <div
        className={`mb-2 sm:mb-4 inline-flex items-center gap-1.5 rounded-full border px-2.5 sm:px-3 py-0.5 sm:py-1 ${
          badgeAccent
            ? "border-[#D4F53C]/20 bg-[#D4F53C]/10"
            : "border-white/10 bg-white/5"
        }`}
      >
        <span
          className={`text-[9px] sm:text-xs font-semibold ${badgeAccent ? "text-[#D4F53C]" : "text-gray-300"}`}
        >
          {badge}
        </span>
      </div>
      <h2 className="text-[0.82rem] leading-snug font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
        {headline}
      </h2>
      <p className="hidden sm:block mt-4 text-base lg:text-lg leading-relaxed text-gray-400">
        {description}
      </p>
      <ul className="mt-2 sm:mt-6 space-y-1.5 sm:space-y-2.5">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-1.5 sm:gap-3 text-[9px] sm:text-sm text-gray-300">
            <span
              className={`mt-0 flex h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full text-[7px] sm:text-xs ${
                badgeAccent
                  ? "bg-[#D4F53C]/20 text-[#D4F53C]"
                  : "bg-white/10 text-white"
              }`}
            >
              ✓
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const phoneContent = (
    <div className={`flex justify-center ${phoneRight ? "lg:justify-end" : "lg:justify-start"}`}>
      <div className="sm:hidden">
        <PhoneMockup src={screenshot} alt={screenshotAlt} className="h-[155px] w-auto" compact />
      </div>
      <div className="hidden sm:block">
        <PhoneMockup
          src={screenshot}
          alt={screenshotAlt}
          className="h-[440px] lg:h-[520px] w-auto drop-shadow-[0_20px_60px_rgba(212,245,60,0.1)]"
        />
      </div>
    </div>
  );

  return (
    <section
      className="overflow-hidden py-8 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: bg }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 items-center gap-4 sm:gap-8 lg:gap-12">
          {phoneRight ? (
            <>
              {textContent}
              {phoneContent}
            </>
          ) : (
            <>
              {phoneContent}
              {textContent}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── SHARED: PHONE MOCKUP ───────────────────────────────────────────────── */

function PhoneMockup({
  src,
  alt,
  priority = false,
  className = "",
  compact = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={`relative ${className}`} style={{ aspectRatio: "9/19.5" }}>
      <div
        className={`absolute inset-0 border-white/10 bg-black shadow-2xl ${
          compact
            ? "rounded-[0.65rem] border-[2px]"
            : "rounded-[0.9rem] sm:rounded-[3rem] border-[2px] sm:border-[3px]"
        }`}
      />
      {!compact && (
        <div className="absolute left-1/2 top-1.5 sm:top-3 z-10 h-3.5 w-14 sm:h-6 sm:w-24 -translate-x-1/2 rounded-full bg-black" />
      )}
      <div
        className={`absolute overflow-hidden ${
          compact
            ? "inset-[2px] rounded-[0.5rem]"
            : "inset-[2px] sm:inset-[3px] rounded-[0.75rem] sm:rounded-[2.8rem]"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 120px, 260px"
          className="object-cover object-top"
          priority={priority}
        />
      </div>
    </div>
  );
}

/* ─── SHARED: STORE BUTTONS ──────────────────────────────────────────────── */

function AppStoreButton({ large = false }: { large?: boolean }) {
  return (
    <a
      href="#"
      className={`group flex items-center gap-2.5 sm:gap-3 rounded-xl border border-white/10 bg-[#1c1c1e] px-4 sm:px-5 transition-all hover:border-white/20 hover:bg-[#2a2a2a] ${large ? "py-3 sm:py-4" : "py-2.5 sm:py-3"}`}
    >
      <svg
        viewBox="0 0 24 24"
        className={`fill-white ${large ? "h-6 w-6 sm:h-7 sm:w-7" : "h-5 w-5 sm:h-6 sm:w-6"}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="text-left">
        <div className={`text-gray-400 ${large ? "text-[10px] sm:text-xs" : "text-[9px] sm:text-[10px]"}`}>
          Download on the
        </div>
        <div className={`font-semibold text-white ${large ? "text-sm sm:text-base" : "text-xs sm:text-sm"}`}>
          App Store
        </div>
      </div>
    </a>
  );
}

function PlayStoreButton({ large = false }: { large?: boolean }) {
  return (
    <a
      href="#"
      className={`group flex items-center gap-2.5 sm:gap-3 rounded-xl border border-white/10 bg-[#1c1c1e] px-4 sm:px-5 transition-all hover:border-white/20 hover:bg-[#2a2a2a] ${large ? "py-3 sm:py-4" : "py-2.5 sm:py-3"}`}
    >
      <svg
        viewBox="0 0 24 24"
        className={`${large ? "h-6 w-6 sm:h-7 sm:w-7" : "h-5 w-5 sm:h-6 sm:w-6"}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.18 23.76a2 2 0 0 1-1-.27 2.1 2.1 0 0 1-1-1.83V2.31a2.1 2.1 0 0 1 1-1.83 2 2 0 0 1 2 0l18 9.72a2.08 2.08 0 0 1 0 3.63l-18 9.72a2 2 0 0 1-1 .21z" fill="#EA4335"/>
        <path d="M2.18 23.22L13.5 12 2.18.78A2.1 2.1 0 0 0 1.18 2.31v19.35a2.1 2.1 0 0 0 1 1.56z" fill="#FBBC04"/>
        <path d="M21.18 10.27L17.5 8.27 13.5 12l4 3.73 3.68-2a2.08 2.08 0 0 0 0-3.46z" fill="#4285F4"/>
        <path d="M2.18.78L13.5 12l4-3.73-13-7a2 2 0 0 0-2.32.51z" fill="#34A853"/>
      </svg>
      <div className="text-left">
        <div className={`text-gray-400 ${large ? "text-[10px] sm:text-xs" : "text-[9px] sm:text-[10px]"}`}>
          Get it on
        </div>
        <div className={`font-semibold text-white ${large ? "text-sm sm:text-base" : "text-xs sm:text-sm"}`}>
          Google Play
        </div>
      </div>
    </a>
  );
}
