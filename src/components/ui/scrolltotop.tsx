import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If navigating to an in-page anchor, let the browser handle it
    if (hash) return;
    // Jump to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
