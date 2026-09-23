import { useEffect } from "react";

/**
 * Sets the document title and meta description for the current route.
 * Prerendering bakes these in for crawlers when it runs, but this is the
 * source of truth for real browsers (correct tab title on client-side
 * navigation) and a safety net when prerendering isn't available at build
 * time.
 */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const meta = document.querySelector('meta[name="description"]');
    const prevDescription = meta?.getAttribute("content") ?? null;
    meta?.setAttribute("content", description);

    return () => {
      document.title = prevTitle;
      if (prevDescription !== null) meta?.setAttribute("content", prevDescription);
    };
  }, [title, description]);
}
