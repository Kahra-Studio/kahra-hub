"use client";
import { Info } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero01() {
  return (
    <header className="relative">
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-28">
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1.5">
            <Info className="h-3.5 w-3.5" />
            Exciting News! Introducing our latest innovation
          </Badge>
          <h1 className="mx-auto mb-6 max-w-4xl scroll-m-20 text-center text-4xl !leading-tight font-bold tracking-tight [text-wrap:_balance] md:text-5xl lg:text-6xl">
            Get ready to experience a new level of{" "}
            <span className="text-primary">performance</span> and{" "}
            <span className="text-primary">functionality</span>.
          </h1>
          <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed md:text-lg lg:text-xl">
            The time is now for it to be okay to be great. For being a bright
            color. For standing out.
          </p>
          <form action="#" className="mx-auto w-full max-w-lg">
            <div className="flex w-full flex-col items-center gap-3 sm:flex-row">
              <Input
                type="email"
                id="email"
                placeholder="someone@example.com"
                className="h-11 w-full"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full shrink-0 sm:w-auto"
              >
                Get Started
              </Button>
            </div>
          </form>
        </div>
        <div className="relative h-[40vh] w-full overflow-hidden rounded-2xl shadow-2xl sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <img
            src="https://images.unsplash.com/photo-1573588028698-f4759befb09a?auto=format&w=2000&q=85"
            alt="Modern architecture and design"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </header>
  );
}
