import Image from "next/image";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import Link from "next/link";
// This is a Server Component by default in the 'app' directory
const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8 shadow-sm">
      {/* Author Header */}
      <div className="flex justify-between items-center bg-gray-50 p-4 border-b">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src={author?.img}
              alt={author?.name || "Author"}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-sm text-gray-800">{author?.name}</p>
            <p className="text-xs text-gray-500">
              {author?.published_date ? author.published_date.split(" ")[0] : "No date"}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-400">
          <FaRegBookmark className="cursor-pointer hover:text-gray-600 transition-colors" />
          <FaShareAlt className="cursor-pointer hover:text-gray-600 transition-colors" />
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900 mb-4 leading-snug hover:text-blue-600 cursor-pointer">
          {title}
        </h2>

        {/* Optimized Image Container */}
        <div className="relative w-full aspect-video mb-5">
          <Image
            src={image_url}
            alt={title}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={news.others_info?.is_todays_pick} // Load faster if it's a top pick
          />
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">
          {details.length > 280 ? (
            <>
              {details.slice(0, 280)}...{" "}
              <button className="text-orange-500 font-bold hover:underline ml-1">
                <Link href={`/news/${news._id}`}>Read More</Link>
              </button>
            </>
          ) : (
            details
          )}
        </p>

        <div className="mt-6 pt-4 border-t flex justify-between items-center">
          {/* Rating Section */}
          <div className="flex items-center gap-2">
            <div className="flex text-orange-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.round(rating?.number) ? "text-orange-400" : "text-gray-200"} />
              ))}
            </div>
            <span className="font-semibold text-gray-700">{rating?.number}</span>
          </div>

          {/* Views Section */}
          <div className="flex items-center gap-2 text-gray-500 font-medium">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;