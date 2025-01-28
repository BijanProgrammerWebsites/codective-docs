import { defaultAnimationOptions } from "@site/src/animations/options/default.animation-options";

export const keyframes: Keyframe[] = [
  {
    opacity: "1",
    translate: "0",
  },
  {
    opacity: "0",
    translate: "100px 0",
  },
];

export const slideExitAnimation = (element: HTMLElement, index: number, onComplete: VoidFunction) => {
  const animation = element.animate(keyframes, defaultAnimationOptions);
  animation.finished.finally(onComplete);
};
