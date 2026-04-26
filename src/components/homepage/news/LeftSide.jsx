import React from 'react';
import Link from 'next/link';
const LeftSide = ({ categories , activeId}) => {
  return (
    <>
      <div className="text-xl border-b pb-4 border-gray-200">All Catergories</div>

      <ul className="flex flex-col gap-4">
      

        {categories.map((category, i) => <li
         key={i} 
         className=
         {`${activeId == category.category_id  && "bg-slate-100" } rounded-md  text-lg mt-5 font-semibold text-center `}>
          <Link className='block p-2' href={`/category/${category.category_id}`}>{category.category_name}</Link></li>)}

      </ul>
    </>
  );
};

export default LeftSide;