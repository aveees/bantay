import { useEffect, useState } from "react";

export default function AnimatedSprite({
  frames = [],
  alt = "",
  interval = 180,
  className = "",
}) {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    if (!frames.length) return;

    const timer = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, interval);

    return () => clearInterval(timer);
  }, [frames, interval]);

  if (!frames.length) return null;

  return (
    <img
      src={frames[currentFrame]}
      alt={alt}
      className={className}
      draggable="false"
    />
  );
}