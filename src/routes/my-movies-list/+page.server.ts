import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const prerender = true

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.session) {
    throw redirect(303, "/");
  }
  const { data: tableData } = await locals.sb
    .from("movieList")
    .select("title, image, movie_id")
    .eq("id", locals.session.user.id);

  return {
    tableData,
  };
};
