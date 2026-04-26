import React from 'react';

import LeftSide from "@/components/homepage/news/LeftSide";
import RightSide from "@/components/homepage/news/RightSide";
import NewsCard from '@/components/homepage/news/NewsCard';
import { getCategories,getNewsByCategoryId } from '@/lib/data';



const NewsCategoryPage = async ({ params }) => {

  const { id } = await params;

  const cate = await getCategories();
  const categories = cate.data.news_category;
  const newsData = await getNewsByCategoryId(id)
  const news = newsData.data;



  return (
    <div className="grid grid-cols-12 container mx-auto my-15 gap-2">
      <div className="font-bold  col-span-3">

        <LeftSide categories={categories} activeId={id}></LeftSide>

      </div>
      <div className=" col-span-6 rounded-md border border-gray-200">

      <h3 className='text-xl rounded-t-md bg-gray-200 p-2'>All News</h3>
        <div className='p-3'>{news.map((n,i)=>{return <NewsCard key={i} news={n}>{n.title}</NewsCard>})}</div>
      </div>
      <div className=" col-span-3 ">
        <RightSide />
      </div>
    </div>
  );
};

export default NewsCategoryPage;