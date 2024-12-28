import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Heart, Home, Image, Gamepad2, Mail } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: Heart, label: "About" },
  { icon: Image, label: "Gallery" },
  { icon: Gamepad2, label: "Games" },
  { icon: Mail, label: "Contact" },
];

export function NavMenu() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-card pixel-corners p-2 shadow-lg backdrop-blur-sm">
      <ul className="flex gap-2">
        {navItems.map((item) => (
          <li key={item.label}>
            <Button
              variant="ghost"
              size="icon"
              className="group relative h-12 w-12 rounded-none hover:bg-primary"
            >
              <item.icon className="h-6 w-6" />
              <span className="pixel-text absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-primary px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
                {item.label}
              </span>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}