# For the javascript code

-use performance.now() for sub-millisecond precision. I distinguish HTTP errors (server responded with error status) from network errors (no response at all) because they need different handling — retry logic for 5xx, user feedback for 4xx, exponential backoff for network failures. I also include a timeout via AbortController for production robustness.

# for my css code
Mobile-First Layout + CSS Technique
-I build mobile-first because it's progressive enhancement — the base styles serve the constrained viewport, and media queries add complexity as space allows. This prevents desktop-first bloat where you override your own overrides.

-I rely on clamp() for fluid typography and spacing. Instead of managing 3-4 breakpoints for font sizes, I use