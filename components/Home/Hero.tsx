"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5ed] text-[#111111]">
      {/* ================= HEADER ================= */}
      <header className="relative z-50 flex items-center justify-between px-6 py-7 md:px-12 lg:px-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-sans text-[20px] tracking-[-0.04em] md:text-[21px]"
        >
          <span className="font-semibold">SNAP</span>
          <span className="font-normal">SOUND</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 font-serif text-[12px] md:flex lg:gap-10 lg:text-[13px]">
          <Link
            href="/"
            className="underline underline-offset-4 decoration-[0.5px]"
          >
            Home
          </Link>

          <Link href="/about" className="transition-opacity hover:opacity-50">
            About
          </Link>

          <Link href="/process" className="transition-opacity hover:opacity-50">
            Process
          </Link>

          <Link
            href="/portfolio"
            className="transition-opacity hover:opacity-50"
          >
            Portfolio
          </Link>

          <Link href="/contact" className="transition-opacity hover:opacity-50">
            Contact
          </Link>
        </nav>

        {/* Mobile menu */}
        <button className="flex h-9 w-9 items-center justify-center md:hidden">
          <span className="relative block h-[14px] w-[20px]">
            <span className="absolute left-0 top-0 h-px w-full bg-black" />
            <span className="absolute left-0 top-1/2 h-px w-full bg-black" />
            <span className="absolute bottom-0 left-0 h-px w-full bg-black" />
          </span>
        </button>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[calc(100vh-80px)]">
        {/* Hero copy */}
        <div
          className="
            relative z-20
            mx-auto
            w-full
            max-w-[1150px]
            px-6
            pt-14
            md:pt-16
            lg:pt-12
          "
        >
          <div className="ml-auto max-w-[555px] lg:mr-[12%]">
            <h1
              className="
                font-serif
                text-[42px]
                leading-[0.96]
                tracking-[-0.045em]
                md:text-[52px]
                lg:text-[57px]
              "
            >
              Let sound transport you
              <br />
              to any place, anywhere.
            </h1>

            <p
              className="
                mt-6
                max-w-[400px]
                font-serif
                text-[14px]
                leading-[1.45]
                tracking-[-0.01em]
                md:text-[15px]
              "
            >
              A sound studio working with independent filmmakers
              <br className="hidden md:block" />
              driven by creativity and the art of storytelling.
            </p>

            <Link
              href="/portfolio"
              className="
                mt-7
                inline-flex
                items-center
                rounded-full
                bg-[#171717]
                px-5
                py-[10px]
                font-sans
                text-[12px]
                font-medium
                text-white
                transition-transform
                duration-300
                hover:scale-105
              "
            >
              Portfolio
            </Link>
          </div>
        </div>

        {/* ================= ILLUSTRATION ================= */}
        <div
          className="
            absolute
            bottom-[-30px]
            left-1/2
            z-10
            w-[1050px]
            -translate-x-1/2
            md:bottom-[-50px]
            md:w-[1200px]
            lg:bottom-[-80px]
            lg:w-[1350px]
            xl:w-[1500px]
          "
        >
          <HeroLandscape />
        </div>

        {/* Decorative continuation at bottom */}
        <div className="absolute bottom-[-120px] left-[-5%] h-[190px] w-[110%] rounded-[50%] bg-[#f5f5ed]" />
      </section>
    </main>
  );
}

function HeroLandscape() {
  return (
    <svg
      viewBox="0 0 1400 700"
      className="h-auto w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
          M0 350
          C100 310 170 340 250 320
          C350 295 430 340 510 310
          C600 275 680 280 760 305
          C850 330 900 285 1010 295
          C1120 305 1200 330 1400 300
          L1400 700
          L0 700
          Z
        "
        fill="#d7e0b4"
      />
      <path
        d="
          M660 335
          C710 265 750 220 825 215
          C900 210 940 265 970 310
          C1010 245 1045 160 1120 140
          C1210 116 1280 170 1400 145
          L1400 440
          L660 440
          Z
        "
        fill="#d5e5e4"
      />

      {/* Mountain outline */}
      <path
        d="
          M660 335
          C710 265 750 220 825 215
          C900 210 940 265 970 310
          C1010 245 1045 160 1120 140
          C1210 116 1280 170 1400 145
        "
        stroke="#ffffff"
        strokeWidth="3"
        opacity=".7"
      />

      {/* -------------------------------------------------
          Large white sound / mountain shape
      ------------------------------------------------- */}

      <path
        d="
          M535 420
          C570 350 580 275 660 235
          C730 200 825 205 875 250
          C925 295 925 370 965 425
          C900 455 820 470 720 460
          C640 452 575 455 535 420
          Z
        "
        fill="#fbfbf8"
      />

      {/* Organic contour lines */}
      <path
        d="
          M585 400
          C615 330 625 280 690 250
          C745 225 825 235 865 270
          C895 300 900 345 920 395
        "
        stroke="#e5e5df"
        strokeWidth="2"
      />

      <path
        d="
          M610 415
          C640 350 650 300 705 270
          C760 245 820 255 850 285
          C875 310 880 350 900 390
        "
        stroke="#e7e7e1"
        strokeWidth="2"
      />

      <path
        d="
          M640 425
          C665 370 680 320 720 295
          C765 270 815 280 840 305
          C860 325 865 355 880 385
        "
        stroke="#e7e7e1"
        strokeWidth="2"
      />

      <path
        d="
          M675 430
          C695 380 705 345 735 320
          C765 298 805 300 830 320
          C845 335 850 360 860 380
        "
        stroke="#e7e7e1"
        strokeWidth="2"
      />

      {/* -------------------------------------------------
          Black foreground hill
      ------------------------------------------------- */}

      <path
        d="
          M0 430
          C90 390 130 445 205 425
          C300 400 330 390 410 420
          C490 450 520 445 595 405
          C675 360 730 395 790 425
          C850 455 910 450 985 410
          C1070 365 1150 390 1215 410
          C1280 430 1340 410 1400 395
          L1400 545
          L0 545
          Z
        "
        fill="#171717"
      />

      {/* Foreground contour lines */}
      <path
        d="
          M0 455
          C110 420 165 470 270 445
          C365 420 425 460 510 450
          C610 440 650 400 735 430
          C825 462 885 470 980 430
          C1080 390 1170 430 1260 430
          C1320 430 1360 420 1400 415
        "
        stroke="#303030"
        strokeWidth="2"
      />

      <path
        d="
          M0 475
          C120 445 170 490 280 465
          C390 440 450 480 540 470
          C630 460 675 425 750 450
          C850 480 905 490 1000 450
          C1100 410 1190 450 1270 450
          C1330 450 1370 440 1400 435
        "
        stroke="#303030"
        strokeWidth="2"
      />

      {/* -------------------------------------------------
          Campfire
      ------------------------------------------------- */}

      <g transform="translate(770 365)">
        {/* logs */}
        <path
          d="M-25 28 L18 12"
          stroke="#171717"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M-20 10 L23 30"
          stroke="#171717"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* fire */}
        <path
          d="
            M0 28
            C-15 15 -12 3 -3 -7
            C-1 4 7 7 8 -4
            C20 9 18 19 7 28
            Z
          "
          fill="#f4ad19"
        />

        <path
          d="
            M4 25
            C-3 15 2 8 8 2
            C14 11 13 18 4 25
            Z
          "
          fill="#ffe66b"
        />
      </g>

      {/* -------------------------------------------------
          Person sitting near fire
      ------------------------------------------------- */}

      <g transform="translate(825 300)" fill="#171717">
        {/* head */}
        <circle cx="35" cy="22" r="12" />

        {/* body */}
        <path
          d="
            M29 34
            C39 30 51 35 55 47
            L65 82
            L44 87
            L31 60
            L25 88
            L8 88
            L17 50
            C19 41 22 37 29 34
            Z
          "
        />

        {/* arm */}
        <path
          d="
            M46 42
            C62 48 72 53 86 62
            L82 69
            C67 62 58 57 45 53
            Z
          "
        />

        {/* legs */}
        <path
          d="
            M45 78
            C65 82 81 91 93 99
            L88 105
            C70 97 54 93 37 91
            Z
          "
        />
      </g>

      {/* -------------------------------------------------
          Tree
      ------------------------------------------------- */}

      <g transform="translate(410 275)">
        {/* trunk */}
        <path
          d="
            M45 155
            C50 120 48 95 43 65
            M45 100
            C28 87 20 72 16 54
            M46 85
            C65 70 72 53 75 37
            M43 120
            C27 113 13 103 4 91
            M48 110
            C65 98 77 85 84 69
          "
          stroke="#171717"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* branches */}
        <path
          d="M40 65 C20 55 7 43 0 30"
          stroke="#171717"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* sparse leaves */}
        <g fill="#171717">
          <circle cx="2" cy="27" r="5" />
          <circle cx="16" cy="52" r="5" />
          <circle cx="75" cy="36" r="5" />
          <circle cx="84" cy="68" r="5" />
          <circle cx="4" cy="90" r="5" />
        </g>
      </g>

      {/* -------------------------------------------------
          Yellow dotted hill
      ------------------------------------------------- */}

      <path
        d="
          M920 455
          C990 400 1050 395 1120 415
          C1190 435 1260 420 1400 400
          L1400 530
          L930 530
          Z
        "
        fill="#f1b800"
      />

      {/* Dot pattern */}
      <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
        <circle cx="3" cy="3" r="2" fill="#171717" />
      </pattern>

      <path
        d="
          M920 455
          C990 400 1050 395 1120 415
          C1190 435 1260 420 1400 400
          L1400 530
          L930 530
          Z
        "
        fill="url(#dots)"
        opacity=".7"
      />

      {/* -------------------------------------------------
          Pale blue foreground
      ------------------------------------------------- */}

      <path
        d="
          M0 510
          C120 500 190 545 285 535
          C380 525 440 500 530 520
          C620 540 690 560 780 540
          C900 510 1000 535 1090 560
          C1200 590 1300 550 1400 540
          L1400 700
          L0 700
          Z
        "
        fill="#c4dedb"
      />

      {/* -------------------------------------------------
          White flowing foreground
      ------------------------------------------------- */}

      <path
        d="
          M350 550
          C500 520 600 545 710 570
          C820 595 930 575 1030 555
          C1150 530 1270 555 1400 585
          L1400 700
          L370 700
          C330 650 320 600 350 550
          Z
        "
        fill="#faf9f4"
      />

      {/* flowing sound lines */}
      <g stroke="#dfb94e" strokeWidth="2" opacity=".65">
        <path d="M400 585 C560 550 670 600 800 610 C950 620 1100 565 1380 610" />
        <path d="M390 600 C550 570 680 615 810 625 C960 635 1110 580 1390 625" />
        <path d="M380 615 C540 590 690 630 820 640 C970 650 1120 595 1400 640" />
        <path d="M375 630 C530 610 700 645 830 655 C980 665 1140 610 1400 655" />
        <path d="M380 645 C530 630 710 660 840 670 C990 680 1160 625 1400 670" />
      </g>

      {/* -------------------------------------------------
          Abstract plants
      ------------------------------------------------- */}

      {/* Yellow plant */}
      <g transform="translate(165 480)">
        <path
          d="M20 115 C25 75 25 40 20 0"
          stroke="#e9a900"
          strokeWidth="7"
          strokeLinecap="round"
        />

        <path d="M20 78 C0 68 -5 55 5 45 C17 49 22 60 20 78Z" fill="#e9a900" />

        <path
          d="M22 65 C42 53 52 40 47 29 C33 33 24 45 22 65Z"
          fill="#e9a900"
        />

        <path d="M20 45 C2 35 -3 22 5 12 C18 17 22 28 20 45Z" fill="#e9a900" />

        <path d="M22 37 C39 28 45 17 40 8 C28 12 23 21 22 37Z" fill="#e9a900" />
      </g>

      {/* Blue plant */}
      <g transform="translate(880 515)">
        <path
          d="M50 170 C45 115 48 70 55 0"
          stroke="#91c4bd"
          strokeWidth="12"
          strokeLinecap="round"
        />

        <path
          d="M52 130 C10 125 -10 105 0 80 C30 80 48 96 52 130Z"
          fill="#91c4bd"
        />

        <path
          d="M51 110 C80 90 100 68 92 42 C68 48 55 69 51 110Z"
          fill="#91c4bd"
        />

        <path d="M50 75 C15 68 5 50 14 30 C38 34 50 48 50 75Z" fill="#91c4bd" />

        <path d="M54 58 C78 43 88 24 80 5 C61 10 54 29 54 58Z" fill="#91c4bd" />
      </g>

      {/* Pink plant */}
      <g transform="translate(1080 475)">
        <path
          d="M65 220 C65 145 62 85 70 20"
          stroke="#e7a4ac"
          strokeWidth="14"
          strokeLinecap="round"
        />

        <path
          d="M67 170 C30 165 5 143 10 115 C43 116 62 133 67 170Z"
          fill="#e7a4ac"
        />

        <path
          d="M67 150 C103 132 122 107 115 82 C86 88 70 110 67 150Z"
          fill="#e7a4ac"
        />

        <path
          d="M67 100 C35 95 20 76 26 55 C51 59 65 73 67 100Z"
          fill="#e7a4ac"
        />

        <path
          d="M70 82 C95 67 106 48 100 30 C80 34 71 52 70 82Z"
          fill="#e7a4ac"
        />
      </g>

      {/* -------------------------------------------------
          Birds
      ------------------------------------------------- */}

      <g stroke="#171717" strokeWidth="4" strokeLinecap="round">
        <path d="M900 185 C908 177 916 177 923 185 C930 177 938 177 946 185" />
        <path d="M940 210 C948 202 956 202 963 210 C970 202 978 202 986 210" />
        <path d="M990 190 C998 182 1006 182 1013 190 C1020 182 1028 182 1036 190" />
        <path d="M1040 160 C1048 152 1056 152 1063 160 C1070 152 1078 152 1086 160" />
        <path d="M1090 205 C1098 197 1106 197 1113 205 C1120 197 1128 197 1136 205" />
        <path d="M1140 175 C1148 167 1156 167 1163 175 C1170 167 1178 167 1186 175" />
      </g>

      {/* -------------------------------------------------
          Small floating leaves
      ------------------------------------------------- */}

      <g fill="#e5a800">
        <ellipse
          cx="170"
          cy="340"
          rx="8"
          ry="4"
          transform="rotate(35 170 340)"
        />
        <ellipse
          cx="205"
          cy="315"
          rx="8"
          ry="4"
          transform="rotate(-30 205 315)"
        />
        <ellipse
          cx="245"
          cy="350"
          rx="8"
          ry="4"
          transform="rotate(25 245 350)"
        />
        <ellipse
          cx="290"
          cy="320"
          rx="8"
          ry="4"
          transform="rotate(-25 290 320)"
        />
      </g>
    </svg>
  );
}
