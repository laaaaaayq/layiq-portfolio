import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[99999] transition-[background] duration-75 ease-out"
      style={{
        background: `
          radial-gradient(48px circle at ${position.x}px ${position.y}px, rgba(34, 227, 159, 0.55), transparent 70%),
          radial-gradient(320px circle at ${position.x}px ${position.y}px, rgba(34, 227, 159, 0.22), transparent 60%),
          radial-gradient(720px circle at ${position.x}px ${position.y}px, rgba(34, 227, 159, 0.08), transparent 50%)
        `,
      }}
      aria-hidden="true"
    />
  );
}
