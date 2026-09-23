import { useEffect, useState } from "react";
import { RadiusMark } from "./RadiusLogo";
import { useReducedMotion } from "../hooks/useReducedMotion";

const MIN_VISIBLE_MS = 450;
const MAX_WAIT_MS = 3000;
const FADE_MS = 400;

/**
 * Brief branded loading state shown while fonts/critical assets finish
 * loading, then fades out — never held for a fixed duration. A minimum
 * visible time avoids an ugly flash on fast connections; a max wait caps
 * how long we'll ever block on `load` in case it's slow to fire.
 */
export function Preloader() {
  const reducedMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const start = Date.now();

    function finish() {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
      window.setTimeout(() => setReady(true), remaining);
    }

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    const maxWaitTimer = window.setTimeout(() => setReady(true), MAX_WAIT_MS);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(maxWaitTimer);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const unmountTimer = window.setTimeout(() => setMounted(false), FADE_MS);
    return () => window.clearTimeout(unmountTimer);
  }, [ready]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-100 flex items-center justify-center bg-paper transition-opacity ${
        ready ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <RadiusMark className={`h-14 w-14 ${reducedMotion ? "" : "animate-pulse"}`} />
    </div>
  );
}
