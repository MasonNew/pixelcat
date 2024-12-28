import { cn } from "@/lib/utils";

export function CatLogo({ className }: { className?: string }) {
  return (
    <div className={cn("relative inline-block", className)}>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="blinking"
      >
        {/* Ears */}
        <path d="M16 16h8v-8h8v-8h8v8h8v8h8v8H40v-8h-8v8H24v-8h-8v8h-8v-8h8z" fill="#FFB6C1" />
        {/* Face */}
        <path d="M16 24h32v24H16z" fill="#FFC0CB" />
        {/* Eyes */}
        <path d="M24 32h8v8h-8zm16 0h8v8h-8z" fill="#000" className="blinking" />
        {/* Nose */}
        <path d="M32 40h8v8h-8z" fill="#FFB6C1" />
        {/* Whiskers */}
        <path d="M8 40h8v8H8zm40 0h8v8h-8z" fill="#FFD1DC" />
      </svg>
      <div className="sparkle absolute -right-2 -top-2 h-4 w-4 rotate-45 bg-primary" />
      <div className="sparkle absolute -left-2 -top-2 h-4 w-4 rotate-12 bg-secondary delay-75" />
      <div className="sparkle absolute -bottom-2 -right-2 h-4 w-4 -rotate-45 bg-accent delay-150" />
    </div>
  );
}