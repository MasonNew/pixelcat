"use client";

import { Heart, Star } from "lucide-react";
import { createSeededRandom } from "@/lib/random";

const random = createSeededRandom(42); // Fixed seed for consistent values

const DECORATIONS = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  type: i % 2 === 0 ? "heart" : "star",
  delay: `${i * 0.5}s`,
  left: `${Math.floor(random() * 100)}%`,
  scale: (0.5 + random() * 0.5).toFixed(3),
}));

export function FloatingDecorations() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {DECORATIONS.map((decoration) => (
        <div
          key={decoration.id}
          className="absolute animate-float"
          style={{
            left: decoration.left,
            animationDelay: decoration.delay,
            transform: `scale(${decoration.scale})`,
          }}
        >
          {decoration.type === "heart" ? (
            <Heart className="h-6 w-6 text-accent" />
          ) : (
            <Star className="h-6 w-6 text-secondary" />
          )}
        </div>
      ))}
    </div>
  );
}