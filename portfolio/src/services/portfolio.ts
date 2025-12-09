import { SanityDocument } from "@sanity/client";
import { sanityClient } from "../lib/sanity.client";

const GET_RESUME_QUERY = `*[
    _type == "resume"
]`;

export async function getResume() {
  const resumes = {
    resumes: await sanityClient.fetch<SanityDocument[]>(GET_RESUME_QUERY),
  };
  return resumes;
}
