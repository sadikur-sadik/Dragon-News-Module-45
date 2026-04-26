export const getCategories = async () => {

  const res = await fetch("https://openapi.programming-hero.com/api/news/categories", { next: { revalidate: 5 } });
  return res.json();
}
export const getNewsByCategoryId = async (ID) => {

  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${ID}`, { next: { revalidate: 5 } });
  return res.json();
}
export const getNewsByNewsId = async (ID) => {

  const res = await fetch(`http://openapi.programming-hero.com/api/news/${ID}`, { next: { revalidate: 5 } });
  return res.json();
}
