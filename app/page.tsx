"use client";

import { useState } from "react";
import { CatLogo } from "@/components/cat-logo";
import { NavMenu } from "@/components/ui/nav-menu";
import { Button } from "@/components/ui/button";
import { FloatingDecorations } from "@/components/floating-decorations";
import { Twitter } from "lucide-react";
import { PumpFunBanner } from "@/components/pump-fun-banner";

export default function Home() {
  const [meowCount, setMeowCount] = useState(0);

  const playMeow = () => {
    setMeowCount((prev) => prev + 1);
    const audio = new Audio("/meow.mp3");
    audio.play().catch(() => {});
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary to-background px-4 pb-20">
      <FloatingDecorations />
      <PumpFunBanner />
      <div className="mx-auto max-w-4xl">
        <header className="py-12 text-center">
          <CatLogo className="floating mb-8" />
          <h1 className="pixel-text mb-2 text-4xl font-bold">Pink Pixel Cat</h1>
          <p className="pixel-text text-xl text-muted-foreground">PPC</p>
          <div className="mt-4 flex flex-col items-center gap-2">
            <Button variant="secondary" size="sm" className="pixel-corners pixel-text gap-2">
              <Twitter className="h-4 w-4" />
              Share on Twitter
            </Button>
            <a
              href="https://twitter.com/PinkPixelCat"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-text text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              @PinkPixelCat
            </a>
          </div>
        </header>

        <section className="mb-16 text-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={playMeow}
            className="pixel-corners pixel-text group relative"
          >
            Meow! ({meowCount})
            <span className="absolute -right-2 -top-2 h-4 w-4 rotate-45 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="absolute -left-2 -top-2 h-4 w-4 rotate-12 bg-secondary opacity-0 transition-opacity group-hover:opacity-100 delay-75" />
          </Button>
        </section>

        <div className="grid gap-8 md:grid-cols-2">
          <section className="pixel-corners hover-bounce hover-shine bg-card p-6 transition-shadow hover:shadow-lg">
            <h2 className="pixel-text mb-4 text-2xl">About PPC</h2>
            <p className="pixel-body">
              Meet Pink Pixel Cat, the most adorable digital feline to ever pounce into the pixel art universe! With its soft, rosy hues and delightfully retro charm, this tiny kitty is a beacon of joy for anyone lucky enough to spot it. PPC has a playful personality and loves nothing more than hopping across screens, chasing pixelated butterflies, and leaving trails of cuteness wherever it goes. Whether it's brightening up a dull day or adding a touch of whimsy to the web, Pink Pixel Cat is here to make the internet a brighter, fluffier, and undeniably more delightful place. 🐾✨
            </p>
          </section>

          <section className="pixel-corners hover-bounce hover-shine bg-card p-6 transition-shadow hover:shadow-lg">
            <h2 className="pixel-text mb-4 text-2xl">Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
              {['cat1.jpg', 'cat2.jpg', 'cat3.jpg', 'cat4.jpg'].map((image) => (
                <div
                  key={image}
                  className="pixel-corners aspect-square overflow-hidden group"
                >
                  <img
                    src={`/cats/${image}`}
                    alt={`Pink Pixel Cat ${image.replace('.jpg', '')}`}
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="pixel-corners hover-bounce hover-shine bg-card p-6 transition-shadow hover:shadow-lg">
            <h2 className="pixel-text mb-4 text-2xl">Games</h2>
            <p className="pixel-body">
              Coming soon! PPC is preparing some fun pixel art games for you to play.
            </p>
          </section>

          <section className="pixel-corners hover-bounce hover-shine bg-card p-6 transition-shadow hover:shadow-lg">
            <h2 className="pixel-text mb-4 text-2xl">Contact</h2>
            <p className="pixel-body">
              Want to reach out to PPC? Send a digital meow our way!
            </p>
          </section>
        </div>
      </div>

      <NavMenu />
    </main>
  );
}