"use client";

export function PumpFunBanner() {
  return (
    <div className="fixed left-4 top-4 z-50 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm">
      <img
        src="/cats/pump.fun logo.png"
        alt="Pump.fun Logo"
        className="h-6 w-6"
      />
      <span className="pixel-text text-sm">Live on Pump.fun</span>
    </div>
  );
}