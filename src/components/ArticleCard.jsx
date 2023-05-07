import Link from 'next/link';
import React from 'react'

export default function ArticleCard({slug="", title, date}) {

  const day = date.toLocaleDateString("en-US", {day: "numeric"});
  const month = date.toLocaleDateString("en-US", {month: "short"});
  return (

    <div className='flex justify-between w-full'>
        <Link href={"/" + slug} className='text-gray-800 text-lg w-5/6 hover:underline hover:text-gray-600'>{title}</Link>
        <p className='text-gray-500 text-md'>{`${month} ${day}`}</p>
    </div>
  )
}
