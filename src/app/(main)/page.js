import LeftSide from "@/components/homepage/news/LeftSide";
import RightSide from "@/components/homepage/RightSide";
const getCategories = async () => {

  const res = await fetch("https://openapi.programming-hero.com/api/news/categories",{next:{revalidate:5}});
  return res.json();
}

export default async function Home() {
  const cate = await getCategories();
  const categories = cate.data.news_category;
  // console.log(categories)

 
  
  return (
   <div className="grid grid-cols-12 container mx-auto my-15 gap-2">
    <div className="font-bold  col-span-3">
      
      <LeftSide categories={categories} activeId={null}></LeftSide>

    </div>
    <div className="font-bold text-3xl col-span-6 bg-purple-100">All News</div>
    <div className=" col-span-3 ">
      <RightSide/>
    </div>
   </div>
  );
}
