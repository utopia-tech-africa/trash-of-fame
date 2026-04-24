"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BlogCard } from "./blog-card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ComponentLayout from "../component-layout";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";

const SCROLL_EDGE_THRESHOLD = 10;

export interface BlogItem {
  _id?: string;
  image?: StaticImageData;
  title: string;
  description?: string;
  excerpt?: string;
  readTime?: string;
  externalUrl?: string;
  video?: string;
}

interface BlogsProps {
  blogs?: BlogItem[];
}

export const Blogs = ({ blogs = [] }: BlogsProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const totalSlides = blogs.length;

  const updateScrollArrows = useCallback(() => {
    const container = scrollContainerRef.current;
    const cards = cardRefsRef.current;
    if (!container || !cards.length) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setCanScrollLeft(scrollLeft > SCROLL_EDGE_THRESHOLD);
    setCanScrollRight(
      scrollLeft < scrollWidth - clientWidth - SCROLL_EDGE_THRESHOLD,
    );

    if (scrollLeft >= scrollWidth - clientWidth - SCROLL_EDGE_THRESHOLD) {
      setActiveIndex(cards.length - 1);
      return;
    }

    const containerPaddingLeft =
      parseFloat(getComputedStyle(container).paddingLeft) || 0;
    const cardWidth = cards[0]?.offsetWidth || 1;
    const gap = 24;
    const rawIndex = (scrollLeft + containerPaddingLeft) / (cardWidth + gap);
    const index = Math.round(rawIndex);

    setActiveIndex(Math.min(index, cards.length - 1));
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollContainerRef.current;
    const cards = cardRefsRef.current;
    if (!container || !cards[index]) return;

    const cardWidth = cards[0]?.offsetWidth || 1;
    const gap = 24;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const targetScroll = Math.min(index * (cardWidth + gap), maxScroll);

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    setActiveIndex(index);
  }, []);

  const goPrev = useCallback(() => {
    if (!canScrollLeft || activeIndex <= 0) return;
    scrollToIndex(activeIndex - 1);
  }, [activeIndex, canScrollLeft, scrollToIndex]);

  const goNext = useCallback(() => {
    if (!canScrollRight || activeIndex >= totalSlides - 1) return;
    scrollToIndex(activeIndex + 1);
  }, [activeIndex, canScrollRight, totalSlides, scrollToIndex]);

  useEffect(() => {
    updateScrollArrows();
    const el = scrollContainerRef.current;
    if (!el) return;

    const ro = new ResizeObserver(updateScrollArrows);
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateScrollArrows]);

  const canGoPrev = canScrollLeft;
  const canGoNext = canScrollRight;

  if (!blogs || blogs.length === 0) return null;

  return (
    <ComponentLayout
      id="media"
      className="flex flex-col gap-18 pb-16 sm:pb-24 md:pb-32 overflow-hidden"
    >
      <div className="flex flex-col gap-2 items-center justify-center text-center max-w-2xl mx-auto">
        <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] text-[#fff8f1] uppercase">
          get updated on the movement
        </h2>
        <p className="font-normal text-[18px] text-[#fff8f1] leading-[1.2]">
          The latest media and articles for public awareness focus on social
          impact, storytelling, and information dissemination.
        </p>
      </div>

      <div className="flex flex-col gap-8 w-full">
        <div className="-mx-4 md:-mx-10 lg:-mx-20 overflow-hidden">
          <div
            ref={scrollContainerRef}
            onScroll={updateScrollArrows}
            className="flex gap-6 overflow-x-auto overflow-y-hidden px-4 md:px-10 lg:px-20 pb-6 pt-10 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ msOverflowStyle: "none" }}
          >
            {blogs.map((blog, index) => {
              return (
                <div
                  key={blog._id || index}
                  ref={(el) => {
                    cardRefsRef.current[index] = el;
                  }}
                  className={cn(
                    "min-w-[320px] md:min-w-90 lg:min-w-[424px] w-[320px] md:w-90 lg:w-[424px] shrink-0 flex transition-transform duration-500",
                  )}
                >
                  <BlogCard
                    image={blog.image}
                    title={blog.title}
                    description={blog.excerpt || blog.description}
                    readTime={blog.readTime || "2 mins read"}
                    isPushedUp={
                      index === activeIndex && index !== blogs.length - 1
                    }
                    externalUrl={blog.externalUrl}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6 gap-6 md:gap-0 px-4 md:px-10 lg:px-20">
            <div className="flex md:flex-none justify-center items-center gap-2">
              {blogs.map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "bg-white scale-120"
                      : "bg-gray-500 hover:bg-gray-400",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                />
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                disabled={!canGoPrev}
                aria-disabled={!canGoPrev}
                className="p-2 text-white cursor-pointer transition disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40 hover:bg-neutral-800 rounded-full"
                aria-label="Previous slide"
              >
                <FaArrowLeft className="size-8 text-white hover:opacity-80 cursor-pointer" />
              </button>

              <button
                type="button"
                onClick={goNext}
                disabled={!canGoNext}
                aria-disabled={!canGoNext}
                className="p-2 text-white cursor-pointer transition disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40 hover:bg-neutral-800 rounded-full"
                aria-label="Next slide"
              >
                <FaArrowRight className="size-8 text-white hover:opacity-80 cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
};
