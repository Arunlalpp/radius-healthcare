import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to the top on route changes, but leaves in-page hash navigation alone. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
