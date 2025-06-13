
// Modify Animation section

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
  children,
  distance = 100,
  direction = "vertical",
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  onComplete,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = direction === "horizontal" ? "x" : "y";
    const offset = distance;

    // Initial state before scroll animation
    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
    });

    // Scroll animation
    gsap.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease,
      delay,
      onComplete,
      scrollTrigger: {
        trigger: el,
        start: `top ${100 - threshold * 100}%`,
        toggleActions: "play none none none",
        once: true,
      },
    });

    // Hover animation handlers
    const onMouseEnter = () => {
      gsap.to(el, {
        scale: 1.05,
        duration: 0.3,
        ease: "power1.out",
      });
    };
    const onMouseLeave = () => {
      gsap.to(el, {
        scale: 1,
        duration: 0.3,
        ease: "power1.out",
      });
    };

    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(el);
      el.removeEventListener("mouseenter", onMouseEnter);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [
    distance,
    direction,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    onComplete,
  ]);

  return <div ref={ref}>{children}</div>;
};

export default AnimatedContent;

