"use client";

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { ReactLenis } from 'lenis/dist/lenis-react';
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';

export type FrameSequenceStep = {
  from: number;
  to: number;
  color: string;
  num: string;
  total: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  label: string;
};

export type FrameSequenceHeroProps = {
  frameCount: number;
  framePath: (i: number) => string;
  eagerCount?: number;
  scrollHeight?: string;
  brand?: React.ReactNode;
  navLinks?: { label: string; href: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  title: React.ReactNode;
  subtitle?: string;
  steps: FrameSequenceStep[];
  className?: string;
};

const cx = (...c: (string | false | null | undefined)[]) =>
  c.filter(Boolean).join(' ');

const jewelryVideoUrl =
  'https://videos.pexels.com/video-files/3208453/3208453-hd_1920_1080.mp4';

export function FrameSequenceHero({
  frameCount = 1,
  framePath = () => jewelryVideoUrl,
  eagerCount = 1,
  scrollHeight = '600vh',
  brand,
  navLinks = [],
  ctaLabel,
  ctaHref = '#',
  title,
  subtitle,
  steps,
  className,
}: FrameSequenceHeroProps) {
  const spacerRef = useRef<HTMLDivElement | null>(null);
  const cacheRef = useRef<HTMLImageElement[]>(new Array(frameCount));
  const loadedRef = useRef(0);
  const targetFrameRef = useRef(0);
  const displayFrameRef = useRef(0);
  const lastShownRef = useRef(-1);
  const rafActiveRef = useRef(false);

  const [loadPct, setLoadPct] = useState(0);
  const [loaderDone, setLoaderDone] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [subHidden, setSubHidden] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const [progress, setProgress] = useState(0);
  const [stepLocal, setStepLocal] = useState(0);
  const [currentSrc, setCurrentSrc] = useState<string>(() => framePath(0));

  const showFrame = (i: number) => {
    if (i === lastShownRef.current) return;
    setCurrentSrc(framePath(i));
    lastShownRef.current = i;
  };

  const loop = () => {
    if (rafActiveRef.current) return;
    rafActiveRef.current = true;
    const tick = () => {
      const diff = targetFrameRef.current - displayFrameRef.current;
      if (Math.abs(diff) < 0.08) displayFrameRef.current = targetFrameRef.current;
      else displayFrameRef.current += diff * 0.28;
      const idx = Math.max(
        0,
        Math.min(frameCount - 1, Math.round(displayFrameRef.current)),
      );
      if (idx !== lastShownRef.current) showFrame(idx);
      if (displayFrameRef.current !== targetFrameRef.current) {
        requestAnimationFrame(tick);
      } else {
        rafActiveRef.current = false;
      }
    };
    requestAnimationFrame(tick);
  };

  useEffect(() => {
    const eager = Math.min(eagerCount, frameCount);
    const loadOne = (i: number) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = framePath(i);
      const onSettle = () => {
        loadedRef.current += 1;
        const pct = Math.round((loadedRef.current / frameCount) * 100);
        setLoadPct(pct);
        if (loadedRef.current === eager) {
          setLoaderDone(true);
          for (let j = eager; j < frameCount; j++) loadOne(j);
        }
      };
      img.onload = onSettle;
      img.onerror = onSettle;
      cacheRef.current[i] = img;
    };
    for (let i = 0; i < eager; i++) loadOne(i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameCount, eagerCount]);

  const onScroll = () => {
    const spacer = spacerRef.current;
    if (!spacer) return;
    const total = spacer.offsetHeight - window.innerHeight;
    const p = Math.max(0, Math.min(1, window.scrollY / Math.max(1, total)));
    targetFrameRef.current = p * (frameCount - 1);
    loop();
    setProgress(p);
    setNavScrolled(window.scrollY > 4);
    setSubHidden(window.scrollY > 8);

    let idx = -1;
    let local = 0;
    for (let i = 0; i < steps.length; i++) {
      const s = steps[i];
      if (p >= s.from && p < s.to) {
        idx = i;
        local = (p - s.from) / (s.to - s.from);
        break;
      }
    }
    setActiveIdx(idx);
    setStepLocal(Math.max(0, Math.min(1, local)));
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steps, frameCount]);

  return (
    <ReactLenis root>
      <div className={cx('fsh-root', className)}>
        <div aria-hidden className={cx('fsh-loader', loaderDone && 'fsh-loader-done')}>
          <div className="fsh-loader-text">
            {loadPct < 100 ? `Loading · ${loadPct}%` : 'Ready'}
          </div>
          <div className="fsh-loader-track">
            <span className="fsh-loader-fill" style={{ width: `${loadPct}%` }} />
          </div>
        </div>

        <nav className={cx('fsh-nav', navScrolled && 'fsh-nav-scrolled')}>
          <div className="fsh-brand">{brand ?? 'AURVANTA'}</div>
          {navLinks.length > 0 && (
            <div className="fsh-nav-links">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
          )}
          {ctaLabel && (
            <a href={ctaHref} className="fsh-cta">
              {ctaLabel}
            </a>
          )}
        </nav>

        <div className="fsh-stage">
          <div className="fsh-canvas-wrap">
            <video
              key={currentSrc}
              src={currentSrc}
              autoPlay
              muted
              loop
              playsInline
              className="fsh-canvas"
              draggable={false}
            />
          </div>

          <div className="fsh-copy">
            <h1 className="fsh-title">{title}</h1>
            {subtitle && (
              <p className={cx('fsh-sub', subHidden && 'fsh-sub-hidden')}>{subtitle}</p>
            )}
          </div>

          <div className="fsh-cards">
            {steps.map((s, i) => {
              const isActive = activeIdx === i;
              const isPrev = activeIdx >= 0 && i < activeIdx;
              return (
                <article
                  key={i}
                  style={{ ['--c' as any]: s.color }}
                  className={cx('fsh-card', isActive && 'fsh-card-active', isPrev && 'fsh-card-prev')}
                >
                  <div className="fsh-card-inner">
                    <span aria-hidden className="fsh-card-glow" />
                    <div className="fsh-card-head">
                      <span className="fsh-card-num">
                        <strong>{s.num}</strong> / {s.total}
                      </span>
                      <span aria-hidden className="fsh-card-icon">
                        {s.icon ?? '✦'}
                      </span>
                    </div>
                    <h3 className="fsh-card-title">{s.title}</h3>
                    <p className="fsh-card-desc">{s.description}</p>
                    <div className="fsh-card-foot">
                      <div className="fsh-ticks">
                        {steps.map((_, j) => {
                          const done = j < activeIdx;
                          const cur = j === activeIdx;
                          return (
                            <i key={j} className="fsh-tick">
                              <span
                                style={{
                                  transform: `scaleX(${done ? 1 : cur ? stepLocal : 0})`,
                                  transition: done ? 'none' : 'transform 160ms linear',
                                }}
                              />
                            </i>
                          );
                        })}
                      </div>
                      <span className="fsh-card-label">{s.label}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="fsh-progress">
            <span className="fsh-progress-fill" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>

        <div ref={spacerRef} className="fsh-spacer" style={{ height: scrollHeight }} />
      </div>
    </ReactLenis>
  );
}

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ['170%', '100%'],
  );
  const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          'url(https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1600&q=80)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80"
        alt="Jewelry making close-up"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80"
        alt="Luxury jewellery design"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1601821765780-7544d8b7c141?auto=format&fit=crop&w=900&q=80"
        alt="Jewelry stones and tools"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80"
        alt="Jewelry craftsmanship"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({
  className,
  alt,
  src,
  start,
  end,
}: {
  className: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}) => {
  const ref = useRef<HTMLImageElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section id="launch-schedule" className="mx-auto max-w-5xl px-4 py-48 text-white">
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Craft Timeline
      </motion.h1>
      <ScheduleItem title="Signature Line" date="Dec 9th" location="Jaipur" />
      <ScheduleItem title="Custom Bridal" date="Dec 20th" location="Mumbai" />
      <ScheduleItem title="Fine Gold" date="Jan 13th" location="Dubai" />
      <ScheduleItem title="Gemstone Edit" date="Feb 22nd" location="New York" />
      <ScheduleItem title="Bespoke Atelier" date="Mar 1st" location="London" />
      <ScheduleItem title="Limited Release" date="Mar 8th" location="Paris" />
      <ScheduleItem title="Collector Drop" date="Apr 8th" location="Singapore" />
    </section>
  );
};

const ScheduleItem = ({ title, date, location }: { title: string; date: string; location: string }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};

export const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950">
      <Nav />
      <Hero />
      <Schedule />
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <div className="text-3xl mix-blend-difference">A</div>
      <button
        onClick={() => {
          document.getElementById('launch-schedule')?.scrollIntoView({
            behavior: 'smooth',
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        CRAFT SCHEDULE <FiArrowRight />
      </button>
    </nav>
  );
};
