import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Custom hook to detect scroll direction
export const useScrollDirection = (initialDirection: "up" | "down") => {
  const [scrollDirection, setScrollDirection] =
    useState<string>(initialDirection);

  const location = useLocation();
  const [pathname] = useState(location.pathname);

  useEffect(() => {
    setScrollDirection(initialDirection)
    let lastScrollY = window.scrollY;

    // Scroll event handler
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down"); // Scrolling down
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up"); // Scrolling up
      }

      lastScrollY = currentScrollY;
    };
    // Condition to reset directions when route changes (To prevent hiding the mobileNav)
    if (location.pathname === pathname) setScrollDirection(initialDirection);

    // Listen to scroll event
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, [initialDirection, location, pathname]); // Listen to location 

  return scrollDirection;
};

export default useScrollDirection;
