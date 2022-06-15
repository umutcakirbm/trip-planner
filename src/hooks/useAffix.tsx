import { RefObject, useEffect } from 'react';

export const useAffix = (elem: RefObject<HTMLElement>, affixClassName: string): void => {
  useEffect(() => {
    const target = elem.current as HTMLElement;
    const parentEl = target.parentElement as HTMLElement;
    const position = target.offsetHeight;
    const listener = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop >= position) {
        target.classList.add(affixClassName);
        parentEl.style.paddingTop = `${target.clientHeight}px`;
        parentEl.style.height = 'auto';
      } else {
        target.classList.remove(affixClassName);
        parentEl.style.paddingTop = '';
        parentEl.style.height = '';
      }
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);
};