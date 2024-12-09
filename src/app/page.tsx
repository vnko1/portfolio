"use client";
import { useEffect, useState } from "react";

import {
  Expertise,
  FadeIn,
  Footer,
  Form,
  Hero,
  Loader,
  Navigation,
  Projects,
  Timeline,
} from "@/components";
import { getProfile } from "@/lib/actions";
import { PortfolioType } from "@/types/portfolio.types";

const getSystemTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export default function Home() {
  const [mode, setMode] = useState<string>("light");
  const [profile, setProfile] = useState<null | PortfolioType[]>(null);

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    setMode(getSystemTheme());
  }, []);

  useEffect(() => {
    getProfile().then((data) => setProfile(data));
  }, []);

  if (!profile) return <Loader open />;

  return (
    <div
      className={`main-container ${
        mode === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <Navigation mode={mode} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <main>
          <Hero mode={mode} {...profile[0]} />
          <Expertise mode={mode} {...profile[0]} />
          <Timeline {...profile[0]} />
          <Projects {...profile[0]} />
          <Form />
        </main>
      </FadeIn>
      <Footer contacts={profile[0].contacts} mode={mode} />
    </div>
  );
}
