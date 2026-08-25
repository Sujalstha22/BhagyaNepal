"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Preloader from "./Preloader";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);
  const [previousPath, setPreviousPath] = useState(pathname);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("bhagya-loaded");

    if (alreadyLoaded) {
      setFirstLoad(false);
      setLoading(false);
    } else {
      sessionStorage.setItem("bhagya-loaded", "true");
    }
  }, []);

  useEffect(() => {
    if (pathname === previousPath) {
      return;
    }

    setPreviousPath(pathname);
    setFirstLoad(false);
    setLoading(true);
  }, [pathname, previousPath]);

  return (
    <>
      {loading && (
        <Preloader
          duration={firstLoad ? 2.8 : 1.4}
          onComplete={() => setLoading(false)}
        />
      )}

      <div
        className={`transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
