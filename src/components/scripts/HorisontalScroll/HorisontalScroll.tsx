import React, { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode;
  className?: string;
}

const HorizontalScroll: React.FC<Props> = ({ children, className }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className={className} ref={scrollRef}>
      {children}
    </div>
  );
};

export default HorizontalScroll;