import { useEffect, useRef } from "react";

import layiqCharacter from "@/assets/layiq-character-black-shirt.png";

const MAX_EYE_TRAVEL = 6;

export function CharacterPortrait() {
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const portrait = portraitRef.current;
    if (!portrait) return;

    let frame = 0;

    const followPointer = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const bounds = portrait.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height * 0.29;
        const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
        const distance = Math.min(
          MAX_EYE_TRAVEL,
          Math.hypot(event.clientX - centerX, event.clientY - centerY) / 45,
        );

        portrait.style.setProperty("--eye-x", `${Math.cos(angle) * distance}px`);
        portrait.style.setProperty("--eye-y", `${Math.sin(angle) * distance}px`);
      });
    };

    const resetEyes = () => {
      portrait.style.setProperty("--eye-x", "0px");
      portrait.style.setProperty("--eye-y", "0px");
    };

    window.addEventListener("pointermove", followPointer, { passive: true });
    document.documentElement.addEventListener("pointerleave", resetEyes);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", followPointer);
      document.documentElement.removeEventListener("pointerleave", resetEyes);
    };
  }, []);

  return (
    <div ref={portraitRef} className="character-portrait">
      <img
        src={layiqCharacter}
        alt="Illustrated portrait of Layiq M in a black shirt"
        className="relative z-10 w-full object-contain drop-shadow-character"
      />
      <span className="character-eye character-eye-left" aria-hidden="true" />
      <span className="character-eye character-eye-right" aria-hidden="true" />
    </div>
  );
}