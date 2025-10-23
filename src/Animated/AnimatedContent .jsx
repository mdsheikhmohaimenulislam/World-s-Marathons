import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
  children,
  distance = 100,
  direction = "vertical", // "horizontal" or "vertical"
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1, // When to start animation (0.1 = 90% viewport height)
  delay = 0,
  onComplete,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = direction === "horizontal" ? "x" : "y";

    // Set initial state
    gsap.set(el, {
      [axis]: distance,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
    });

    // Animate when scrolled into view
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
        start: `top bottom`, // More reliable than percentage
        toggleActions: "play none none none",
        once: true,
      },
    });

    // Optional hover animation
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
      ScrollTrigger.killTweensOf(el);
      gsap.killTweensOf(el);
      ScrollTrigger.getAll().forEach((t) => t.kill());
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

  return (
    <div ref={ref} className="will-change-transform">
      {children}
    </div>
  );
};

export default AnimatedContent;
