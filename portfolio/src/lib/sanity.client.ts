import { createClient } from "@sanity/client";
export const sanityClient = createClient({
  projectId: "jxq3tmc7",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: false,
});
