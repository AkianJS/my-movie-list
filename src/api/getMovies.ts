import { PRIVATE_API_KEY } from "$env/static/private";
const API = "https://api.themoviedb.org/3";

export default async function getMovies(url:string) {
  try {
    const result = await fetch(API + url, {
      headers: {
        Authorization: `Bearer ${PRIVATE_API_KEY}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    const data = await result.json();

    return data;
  } catch (error) {
    return null;
  }
}
