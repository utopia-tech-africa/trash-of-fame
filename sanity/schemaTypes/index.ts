import { type SchemaTypeDefinition } from "sanity";
import { blog } from "./blog";
import { blockContent } from "./blog-content";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, blockContent],
};
