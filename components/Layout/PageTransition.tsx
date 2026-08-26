"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Preloader from "./Preloader";

const STORAGE_KEY = "bhagya-loaded";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);

  const previousPathRef = useRef(pathname);
  const mountedRef = useRef(false);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem(STORAGE_KEY);

    if (alreadyLoaded === "true") {
      setFirstLoad(false);
      setLoading(false);
    } else {
      setFirstLoad(true);
      setLoading(true);
    }

    mountedRef.current = true;
  }, []);

  useEffect(() => {
    if (!mountedRef.current) return;

    if (pathname === previousPathRef.current) return;

    previousPathRef.current = pathname;

    setFirstLoad(false);
    setLoading(true);
  }, [pathname]);

  const handleComplete = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setLoading(false);
  };

  return (
    <>
      {loading && <Preloader duration={7.5} onComplete={handleComplete} />}

      <main
        className={`transition-opacity duration-1000 ease-out ${
          loading
            ? "pointer-events-none opacity-0"
            : "pointer-events-auto opacity-100"
        }`}
      >
        {children}
      </main>
    </>
  );
}
