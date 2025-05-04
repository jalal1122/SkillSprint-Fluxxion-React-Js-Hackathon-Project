import React from "react";
import "./StarryBackground.css"; 

const StarryBackground = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 -z-1 w-full h-full bg-[#0f172a] overflow-hidden">
      {Array.from({ length: 200 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
