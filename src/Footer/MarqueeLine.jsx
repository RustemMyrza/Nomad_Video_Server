import { useEffect, useRef } from "react";

export default function Marquee({ text, speed = 50 }) {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    let animationFrame;
    let x = 0;

    const step = () => {
      x -= 1;
      if (Math.abs(x) >= el.scrollWidth / 2) { // исправлено
        x = 0;
      }
      el.style.transform = `translateX(${x}px)`;
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="w-full h-full overflow-hidden flex items-center justify-center">
      <div className="overflow-hidden whitespace-nowrap w-full py-2">
        <div
          ref={textRef}
          className="inline-block whitespace-nowrap will-change-transform"
          style={{ minWidth: "200%" }}
        >
          <span className="mx-4 text-white text-4xl">{text}</span>
        </div>
      </div>
    </div>
  );
}
