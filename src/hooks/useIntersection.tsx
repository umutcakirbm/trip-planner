import { RefObject, useEffect } from 'react';

const listenerCallbacks = new WeakMap();

let observer: IntersectionObserver;

function handleIntersections(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    if (listenerCallbacks.has(entry.target)) {
      const cb = listenerCallbacks.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listenerCallbacks.delete(entry.target);
        cb();
      }
    }
  });
}

function getIntersectionObserver() {
  if (observer === undefined) {
    observer = new IntersectionObserver(handleIntersections, {
      rootMargin: '100px',
      threshold: 0.15,
    });
  }
  return observer;
}

export const useIntersection = (elem: RefObject<HTMLElement>, callback: () => void): void => {
  useEffect(() => {
    const target = elem.current as HTMLElement;
    const observer = getIntersectionObserver();
    listenerCallbacks.set(target, callback);
    observer.observe(target);

    return () => {
      listenerCallbacks.delete(target);
      observer.unobserve(target);
    };
  }, []);
};
