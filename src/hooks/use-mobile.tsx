import { useState, useEffect } from "react";

export function useIsMobile(query: string) {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    listener(); // Initial check
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}