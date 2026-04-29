import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type MetadataParams = {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string | string[];
};

export function createMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  keywords,
}: MetadataParams = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;

  return {
    metadataBase: new URL(siteConfig.url),

    title: fullTitle,
    description,
    keywords: keywords ?? siteConfig.keywords,

    openGraph: {
      title: fullTitle,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      type: "website",
      images: [image],
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
