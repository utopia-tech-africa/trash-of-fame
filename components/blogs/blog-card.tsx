import Image, { StaticImageData } from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  image?: StaticImageData;
  title: string;
  source?: string;
  description?: string;
  readTime: string;
  isPushedUp?: boolean;
  externalUrl?: string;
}

export const BlogCard = ({
  image,
  title,
  source,
  description,
  readTime,
  isPushedUp,
  externalUrl,
}: BlogCardProps) => {
  const Wrapper = externalUrl ? "a" : "div";

  return (
    <Wrapper
      href={externalUrl || undefined}
      target={externalUrl ? "_blank" : undefined}
      className="flex flex-col h-full gap-6 w-[320px] md:w-90 lg:w-[424px]"
    >
      <div
        className={cn(
          "h-[253px] md:h-[328px] relative w-full shrink-0 transition-transform duration-500",
          isPushedUp ? "lg:-translate-y-10" : "",
        )}
      >
        <Image
          src={image ? urlFor(image).url() : ""}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 gap-6 text-white">
        <div className="flex flex-col gap-3">
          <h3 className="text-[24px] font-medium leading-[1.2] uppercase line-clamp-3">
            {title}
          </h3>

          {description && (
            <p className="text-[rgba(255,255,255,0.6)] leading-[1.2] w-full line-clamp-4">
              {description}
            </p>
          )}
        </div>

        <div className="mt-auto flex justify-between">
          <p className="text-[rgba(255,255,255,0.6)] leading-[1.2]">
            {readTime} mins read
          </p>
          <p className="text-[rgba(255,255,255,0.6)] leading-[1.2]">{source}</p>
        </div>
      </div>
    </Wrapper>
  );
};
