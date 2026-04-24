import { BlogCard } from "./blog-card";
import { MediaImg1, MediaImg2, MediaImg3 } from "@/assets/images";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ComponentLayout from "../component-layout";

const blogs = [
  {
    image: MediaImg1,
    title: "Africa's oceans have become a Graveyard for clothes",
    description:
      "Africa's oceans are becoming a graveyard for fast fashion waste.",
    readTime: "2 mins read",
  },
  {
    image: MediaImg2,
    title: "Africa's oceans have become a Graveyard for clothes",
    description:
      "Africa's oceans are becoming a graveyard for fast fashion waste.",
    readTime: "2 mins read",
  },
  {
    image: MediaImg3,
    title: "Africa's oceans have become a Graveyard for clothes",
    description:
      "Africa's oceans are becoming a graveyard for fast fashion waste.",
    readTime: "2 mins read",
  },
];

export const Blogs = () => {
  return (
    <ComponentLayout className="flex flex-col gap-18 b-16 sm:pb-24 md:pb-32">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={index === 1 ? "lg:-translate-y-10" : ""}
            >
              <BlogCard
                image={blog.image}
                title={blog.title}
                description={blog.description}
                readTime={blog.readTime}
              />
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex gap-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-gray-500"}`}
              />
            ))}
          </div>
          <div className="flex gap-4">
            <button className="p-2">
              <ArrowLeft className="w-8 h-8 text-white" />
            </button>
            <button className="p-2">
              <ArrowRight className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
};
