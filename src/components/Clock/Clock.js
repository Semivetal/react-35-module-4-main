import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useRef } from "react";
import styles from "./Clock.module.css";

export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  let intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log("Repeat each 1000 ms" + Date.now());
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("Это функция очистки и размонтирования");
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div className={styles.container}>
      <p className={styles.clockface}>
        Current time: {time.toLocaleTimeString()}
      </p>
      <button className={styles.buttonStop} type="button" onClick={stop}>
        Stop
      </button>
    </div>
  );
}
