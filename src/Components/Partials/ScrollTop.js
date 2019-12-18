import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll to page top on React Router page navigation

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}