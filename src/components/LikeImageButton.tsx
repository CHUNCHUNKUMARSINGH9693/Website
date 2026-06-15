"use client";

import { useState } from "react";

interface LikeImageButtonProps {
  initialCount?: number;
}

export function LikeImageButton({ initialCount = 0 }: LikeImageButtonProps) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(initialCount);

  const toggleLike = () => {
    setLiked((prev) => {
      const next = !prev;
      setCount((current) => Math.max(0, current + (next ? 1 : -1)));
      return next;
    });
  };

  return (
    <button
      type="button"
      onClick={toggleLike}
      aria-pressed={liked}
      className="inline-flex items-center rounded-full border border-white/10 bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm shadow-slate-900/5 backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
    >
      <span className={`mr-2 text-lg ${liked ? "text-red-600" : "text-slate-500"}`}>
        {liked ? "❤️" : "🤍"}
      </span>
      <span>{count} Like{count === 1 ? "" : "s"}</span>
    </button>
  );
}
