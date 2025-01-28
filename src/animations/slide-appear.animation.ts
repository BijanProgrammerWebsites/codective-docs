import { defaultAnimationOptions } from "@site/src/animations/options/default.animation-options";

const keyframes: Keyframe[] = [
  {
    opacity: "0",
    translate: "-100px 0",
  },
  {
    opacity: "1",
    translate: "0",
  },
];

export const slideAppearAnimation = (element: HTMLElement) => {
  element.animate(keyframes, defaultAnimationOptions);
};
