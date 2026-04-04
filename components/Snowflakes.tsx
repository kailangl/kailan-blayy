import React, { useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import styles from "../styles/Snowflakes.module.css";

const SNOWFLAKES_COUNT = 50;

const Snowflakes = () => {
  const { isSnowing } = useAppContext();
  const [snowflakes, setSnowflakes] = useState<any[]>([]);

  useEffect(() => {
    if (!isSnowing) {
      setSnowflakes([]);
      return;
    }

    const flakes = Array.from({ length: SNOWFLAKES_COUNT }).map((_, i) => {
      const left = Math.random() * 100;
      const animationDurationFall = Math.random() * 3 + 5; // 5s to 8s
      const animationDurationSway = Math.random() * 3 + 2; // 2s to 5s
      const animationDelay = Math.random() * 5; // 0s to 5s
      const size = Math.random() * 1.5 + 0.5; // 0.5rem to 2rem
      const opacity = Math.random() * 0.6 + 0.4;
      
      // O \uFE0E força o navegador a renderizar o símbolo como texto e não como emoji colorido
      const content = ["❄\uFE0E", "❅\uFE0E", "❆\uFE0E"][Math.floor(Math.random() * 3)];

      return {
        id: i,
        left: `${left}vw`,
        animationDuration: `${animationDurationFall}s, ${animationDurationSway}s`,
        animationDelay: `${animationDelay}s, ${animationDelay}s`,
        fontSize: `${size}rem`,
        opacity,
        content
      };
    });

    setSnowflakes(flakes);
  }, [isSnowing]);

  if (!isSnowing) return null;

  return (
    <div className={styles.snowContainer} aria-hidden="true">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className={styles.snowflake}
          style={{
            left: flake.left,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
            fontSize: flake.fontSize,
            opacity: flake.opacity
          }}
        >
          {flake.content}
        </div>
      ))}
    </div>
  );
};

export default Snowflakes;
