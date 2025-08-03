import { useEffect, useState, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
}

export function useIntersectionObserver<T extends Element>(
  options: IntersectionObserverOptions = {},
  triggerOnce: boolean = true
): [RefObject<T>, boolean] {
  const { threshold = 0.1, rootMargin = '0px', root = null } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);

        // Unobserve after first intersection if triggerOnce is true
        if (triggerOnce && entry.isIntersecting && observerRef.current && element) {
          observerRef.current.unobserve(element);
        }
      },
      { threshold, rootMargin, root }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, root, triggerOnce]);

  return [elementRef, isIntersecting];
}