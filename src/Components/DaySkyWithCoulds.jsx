import React from "react";
import "./DaySkyWithCoulds.css"

const DayScene = () => {
    return (
      <div className="fixed inset-0 top-0 left-0 right-0 bottom-0 -z-1 w-full h-screen bg-sky-300 overflow-hidden">
        {/* Mountains */}
        <div className="absolute bottom-0 w-full h-40 bg-mountain z-10"></div>
  
        {/* Clouds */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`cloud-${i}`}
            className={`cloud cloud-${i % 5}`}
            style={{
              top: `${(i % 5) * 15 + 5}%`,
              left: `${i * -200}px`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
  
        {/* Birds */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`bird-${i}`}
            className="bird"
            style={{
              top: `${10 + (i % 4) * 10}%`,
              left: `${i * -250}px`,
              animationDelay: `${i * 3}s`,
            }}
          />
        ))}
      </div>
    );
  };
  
  export default DayScene;