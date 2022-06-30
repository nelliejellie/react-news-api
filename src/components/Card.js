import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import { formatDistanceToNow } from 'date-fns'
import { parseISO } from 'date-fns/esm'

const Card = ({articles}) => {
  console.log(articles)
  return (
    <section className='grid grid-cols-3 gap-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
      {
        articles.map(article => (
          <section className='ml-8 mt-8 w-4/5 2xl:h-[280px] md:h-[302px] shadow-lg' key={article.url}>
              <p className='pb-3 border-slate-200 border-b-2 text-center font-normal'>{article.title}</p>
              <article className='text-justify font-extralight [font-size:12px;] p-4 text-slate-600'>
                  {article.content}
              </article>
              <div className='flex [font-size:12px;] p-4 justify-between text-slate-600 '>
                  <div><a href={article.url} className='text-[#03009E] underline'>Read full story</a></div>
                  <div className='flex items-center justify-between'>
                      <AiOutlineStar/>
                      <p className='ml-2'>Add to bookmarks</p>                
                  </div>
                  <div>{formatDistanceToNow(parseISO(article.publishedAt.substring(0,10)))} ago</div>
                  <div></div>
              </div>
          </section>
        ))
      }
    </section>
  )
}

export default Card