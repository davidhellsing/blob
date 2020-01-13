import Easing from "./easing";

/*
 * Function that animates a value from 0 - 1
 * Returns an object that has a stop() function
 */

interface Args {
  duration: number;
  easing?: (value: number) => number;
  onFrame?: (value: number) => void;
  onComplete?: () => void;
}

export type AnimationReturnType = {
  stop: () => void;
};

export default ({
  duration = 800,
  easing = Easing.outQuart,
  onFrame,
  onComplete
}: Args) => {
  let stopped = false;
  const returnObject: AnimationReturnType = {
    stop: () => {
      stopped = true;
    }
  };
  const then = Date.now();
  function loop() {
    if (!stopped) {
      const time = Date.now() - then;
      if (time > duration) {
        if (onComplete) {
          onComplete();
        }
      } else if (onFrame) {
        onFrame(easing(time / duration));
        requestAnimationFrame(loop);
      }
    }
  }
  loop();
  return returnObject;
};
