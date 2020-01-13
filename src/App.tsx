import React, { useRef, useEffect } from "react";
import { interpolatePath } from "d3-interpolate-path";
import blobs from "blobs";
import animate, { AnimationReturnType } from "./utils/animate";
import easing from "./utils/easing";

const rand = (start: number = 0, end: number = 1) =>
  start + Math.random() * (end - start);

const generateD = () => {
  const editableSvg = blobs.editable({
    size: 600,
    complexity: rand(0.3, 0.4),
    contrast: rand(0.5, 0.8),
    guides: false,
    seed: Math.random().toString(),
    color: "#000"
  });
  return editableSvg.children[0].children[0].attributes.d;
};

const App: React.FC = () => {
  const path = useRef(null);
  let d = generateD();
  let animation: null | AnimationReturnType = null;
  const createAnimation = (
    duration: number,
    easing: any,
    onComplete: any
  ) => () => {
    const nextD = generateD();
    const pathInterpolator = interpolatePath(d, nextD);
    if (animation) {
      animation.stop();
    }
    animation = animate({
      duration,
      easing,
      onFrame: (n: number) => {
        d = pathInterpolator(n);
        // @ts-ignore
        path.current.setAttribute("d", pathInterpolator(n));
      },
      onComplete: onComplete
    });
  };
  const slowAnimate = createAnimation(6000, easing.inOutQuad, () =>
    slowAnimate()
  );
  const onSvgClick = createAnimation(2000, easing.outElastic, () =>
    slowAnimate()
  );
  useEffect(slowAnimate);
  return (
    <div className="App">
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path ref={path} d={d} fill="#FFB4BC" onClick={onSvgClick} />
      </svg>
    </div>
  );
};

export default App;
