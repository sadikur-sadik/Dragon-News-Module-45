import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { getNewsByNewsId } from '@/lib/data';
import RightSide from '@/components/homepage/news/RightSide';

const NewsPage = async ({ params }) => {
  const { id } = await params;
  const response = await getNewsByNewsId(id);
  const newsData = await response.data;

  // Since the API returns an array, we find the specific news object
  const news = newsData.find((n) => n._id === id);

  if (!news) return <div className="p-10 text-center">News not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        
        {/* News Card: 9 spans out of 12 */}
        <div className="col-span-9">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Dragon News</h2>
          
          <article className="bg-white border border-gray-200 rounded-md p-6">
            {/* News Image */}
            <div className="relative w-full aspect-video mb-6">
              <Image
                src={news.image_url}
                alt={news.title}
                fill
                className="object-cover rounded-sm"
                priority
              />
            </div>

            {/* Content Section */}
            <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
              {news.title}
            </h1>

            <div className="text-gray-600 leading-relaxed space-y-4 mb-8">
              {/* Splitting text into paragraphs if possible, or just rendering the block */}
              {news.details}
            </div>

            {/* Navigation Button */}
            <Link 
              href={`/category/${news.category_id}`}
              className="inline-flex items-center gap-2 bg-[#D72050] text-white px-6 py-2.5 rounded-none font-medium hover:bg-[#b51b43] transition-colors"
            >
              <FaArrowLeft size={14} />
              All news in this category
            </Link>
          </article>
        </div>

        {/* Empty Sidebar: 3 spans out of 12 */}
        <div className="col-span-3">
          <RightSide></RightSide>
        </div>

      </div>
    </div>
  );
};

export default NewsPage;