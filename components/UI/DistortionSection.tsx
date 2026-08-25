"use client";

import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface DissolveHeroProps {
  imageUrl: string;
  noiseUrl?: string;
  beforeTitle?: string;
  beforeSubtitle?: string;
  afterTitle?: string;
  afterSubtitle?: string;
}

export default function DissolvingHeroSection({
  imageUrl,
  noiseUrl,
}: DissolveHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftTreeRef = useRef<HTMLDivElement>(null);
  const rightTreeRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  useEffect(() => {
    // Check for WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
      }
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  useGSAP(
    () => {
      if (!canvasRef.current || !containerRef.current || !hasWebGL) return;

      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current,
          alpha: true,
          antialias: true,
        });
      } catch (e) {
        console.error("WebGL Renderer creation failed:", e);
        setHasWebGL(false);
        return;
      }

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
      camera.position.z = 1;

      renderer.setSize(window.innerWidth, window.innerHeight * 1.3);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const textureLoader = new THREE.TextureLoader();
      const imageTexture = textureLoader.load(imageUrl, (tex) => {
        material.uniforms.uImageResolution.value.set(
          tex.image.width,
          tex.image.height,
        );
        // Refresh ScrollTrigger once image dimensions are known
        ScrollTrigger.refresh();
      });

      const vertexShader = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `;

      const fragmentShader = `
        uniform sampler2D uTexture;
        uniform float uProgress;
        uniform vec2 uResolution;
        uniform vec2 uImageResolution;
        uniform float uSpread;
        uniform sampler2D uNoise;
        uniform bool uUseNoiseTexture;
        
        varying vec2 vUv;
        
        float Hash(vec2 p) {
          vec3 p2 = vec3(p.xy, 1.0);
          return fract(sin(dot(p2, vec3(37.1, 61.7, 12.4))) * 3758.5453123);
        }

        float noise(in vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f *= f * (3.0 - 2.0 * f);
          return mix(
            mix(Hash(i + vec2(0.0, 0.0)), Hash(i + vec2(1.0, 0.0)), f.x),
            mix(Hash(i + vec2(0.0, 1.0)), Hash(i + vec2(1.0, 1.0)), f.x),
            f.y    
          );
        }

        float fbm(vec2 p) {
          float v = 0.0;
          v += noise(p * 1.0) * 0.5;
          v += noise(p * 2.0) * 0.25;
          v += noise(p * 4.0) * 0.125;
          return v;
        }

        void main() {
          vec2 uv = vUv;
          float aspect = uResolution.x / uResolution.y;
          float imageAspect = uImageResolution.x / uImageResolution.y;
          vec2 centeredUv = (uv - 0.5) * vec2(aspect, 1.0);

          vec2 ratio = vec2(
            min(aspect / imageAspect, 1.0),
            min(imageAspect / aspect, 1.0)
          );
          vec2 correctedUv = uv * ratio + (1.0 - ratio) * 0.5;

          vec4 imageColor = texture2D(uTexture, correctedUv);
          
          float dissolveEdge = uv.y - (uProgress * 1.2);
          
          // Use aspect-corrected coordinates for noise to prevent stretching on mobile
          vec2 noiseUv = uv * vec2(aspect, 1.0);
          
          float noiseValue;
          if (uUseNoiseTexture) {
            noiseValue = texture2D(uNoise, correctedUv).r;
          } else {
            noiseValue = fbm(noiseUv * 8.0);
          }
          
          float d = dissolveEdge + noiseValue + uSpread;
          
          float pixelSize = 2.0 / uResolution.y;
          float alpha = smoothstep(-pixelSize, pixelSize, d);
          
          gl_FragColor = vec4(imageColor.rgb, alpha * imageColor.a);
        }
      `;

      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTexture: { value: imageTexture },
          uProgress: { value: 0.0 },
          uResolution: {
            value: new THREE.Vector2(
              window.innerWidth,
              window.innerHeight * 1.3,
            ),
          },
          uImageResolution: { value: new THREE.Vector2(1, 1) },
          uSpread: { value: 0.5 },
          uNoise: { value: noiseUrl ? textureLoader.load(noiseUrl) : null },
          uUseNoiseTexture: { value: !!noiseUrl },
        },
        vertexShader,
        fragmentShader,
        transparent: true,
        side: THREE.DoubleSide,
      });

      const geometry = new THREE.PlaneGeometry(2.2, 2.2);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 53%",
          end: "bottom top",
          scrub: 1.5,
          // pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(
        material.uniforms.uProgress,
        {
          value: 2.2,
          duration: 1,
          ease: "none",
        },
        0,
      );

      tl.to(
        mesh.position,
        {
          y: -0.1,
          ease: "none",
        },
        0,
      );

      tl.to(
        leftTreeRef.current,
        {
          y: -400,
          ease: "none",
        },
        0.3,
      );

      tl.to(
        rightTreeRef.current,
        {
          y: -600,
          ease: "none",
        },
        0.3,
      );

      let animationFrameId: number;
      const animate = () => {
        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };
      // Initial render call to prevent blank canvas
      renderer.render(scene, camera);
      animate();

      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight * 1.3;
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        if (material.uniforms.uResolution) {
          material.uniforms.uResolution.value.set(width, height);
        }
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      // Critical: Refresh ScrollTrigger after a short delay to ensure the page layout is stable
      // This solves the issue where navigation from other pages breaks the ScrollTrigger positions
      const timeoutId = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      // Return cleanup
      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", handleResize);
        geometry.dispose();
        material.dispose();
        imageTexture.dispose();
        renderer.dispose();
        clearTimeout(timeoutId);
      };
    },
    {
      scope: containerRef,
      dependencies: [imageUrl, noiseUrl, pathname, hasWebGL],
    },
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-transparent z-10"
    >
      {hasWebGL ? (
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-[130vh] pointer-events-none"
        />
      ) : (
        <div className="absolute top-0 left-0 w-full h-[130vh] pointer-events-none">
          <Image
            src={imageUrl}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* <div
        ref={leftTreeRef}
        className="absolute left-0 -bottom-[80%] md:-bottom-[60%] xl:-bottom-[80%] w-[60vw] md:w-[50vw] xl:w-[35vw] h-full z-20"
      >
        <Image
          src="/images/left-tree-1.webp"
          alt="left tree"
          fill
          className="object-cover object-right"
        />
      </div>
      <div
        ref={rightTreeRef}
        className="absolute right-0 -bottom-[80%] md:-bottom-[60%] xl:-bottom-[80%] w-[10vw] md:w-[20vw] xl:w-[25vw] h-full z-20"
      >
        <Image
          src="/images/branch.webp"
          alt="right tree"
          fill
          className="object-cover object-left"
        />
      </div> */}

      {/* Before Dissolve Content */}
      {/* <motion.div
        ref={contentRef}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{
          duration: 2.8,
          delay: 0.8,
          ease: "easeInOut",
        }}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none text-white"
      ></motion.div> */}

      {/* <motion.div
        initial={{ left: "-30vw" }}
        animate={{ left: "130vw" }}
        transition={{
          duration: 4.5,
          ease: "easeInOut",
        }}
        className="absolute size-[25vw] xl:size-[15vw] top-1/2 -translate-y-1/2 z-40"
      >
        <Image
          src="/images/parrot-1.webp"
          alt="bird flying"
          fill
          className="object-contain"
        />
      </motion.div> */}
      {/* <motion.div
        initial={{ left: "-30vw", top: "50vh" }}
        animate={{ left: "130vw", top: "20vh" }}
        transition={{
          duration: 4.5,
          delay: 0.2,
          ease: "easeInOut",
        }}
        className="absolute size-[30vw] xl:size-[20vw] z-40 top-[45%] -translate-y-1/2 -rotate-20"
      ></motion.div>
      <motion.div
        initial={{ left: "-30vw", top: "50vh" }}
        animate={{ left: "130vw", top: "80vh" }}
        transition={{
          duration: 4,
          delay: 0.3,
          ease: "easeInOut",
        }}
        className="absolute size-[20vw] xl:size-[10vw] z-40 top-[60%] -translate-y-1/2 rotate-10"
      ></motion.div> */}
    </div>
  );
}
