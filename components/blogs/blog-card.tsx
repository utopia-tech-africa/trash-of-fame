import Image, { StaticImageData } from "next/image";

interface BlogCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  readTime: string;
}

export const BlogCard = ({
  image,
  title,
  description,
  readTime,
}: BlogCardProps) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[424px]">
      <div className="h-[253px] md:h-[328px] relative w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-6 text-white">
        <div className="flex flex-col gap-3">
          <h3 className="text-[24px] font-medium leading-[1.2] uppercase">
            {title}
          </h3>
          <p className="text-[rgba(255,255,255,0.6)] leading-[1.2] w-full">
            {description}
          </p>
        </div>
        <p className="text-[rgba(255,255,255,0.6)] leading-[1.2]">{readTime}</p>
      </div>
    </div>
  );
};
