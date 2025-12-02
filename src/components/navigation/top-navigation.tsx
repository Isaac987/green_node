import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Bell, Github, Globe, Heart, Sun } from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function TopNavigation() {
  return (
    <header className="h-16 flex justify-between items-center px-4 md:px-8">
      <Link className="text-2xl font-medium" href="/">
        <span className="text-primary">Green</span>Node
      </Link>
      <div className="flex items-center gap-2">
        <Button>
          <Heart />
          <span className="hidden sm:block">Support</span>
        </Button>
        <Button variant="secondary">
          <Globe />
          <span className="hidden md:block">Documentation</span>
          <span className="hidden sm:block md:hidden">Docs</span>
        </Button>
        <Button className="hidden sm:inline-flex" variant="secondary" size="icon" asChild>
          <Link href="https://github.com/Isaac987/green_node" target="_blank">
            <Github />
          </Link>
        </Button>
        <ButtonGroup aria-label="theme and alerts">
          <ThemeToggle />
          <Button variant="outline" size="icon" aria-label="show alerts">
            <Bell />
          </Button>
        </ButtonGroup>
      </div>
    </header>
  );
}
