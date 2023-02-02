import Layout from '@/components/layout';
import List from '@/components/list';
import { NextPage } from 'next'
import emojisData from '@/data/emojis';
import { useState } from 'react';
import CategoryCard from '@/components/categoryCard';


const Home: NextPage = () => {
  const [filterEmojis, setFilterEmojis] = useState(emojisData.slice(0, 30));
  const [deltedFilterEmojis, setDeletedFilterEmojis] = useState(false);
  const [pagination, setPagination] = useState(1);

  function handleFilterBySearch(search:string) {
    if (search.trim().length > 0) {
      setFilterEmojis(
        emojisData.filter((emoji) => emoji.name.toUpperCase().includes(search.toUpperCase().trim()))
      )
    }else{
      setFilterEmojis(emojisData.slice(0,30));
    }
  }

  function handleFilterByCategory(category: string) {
    setDeletedFilterEmojis(true);
    setFilterEmojis(
      emojisData.filter((emoji) => 
        emoji.group.toUpperCase().includes(category.toUpperCase())
      )
    )
  }

  return (
    <Layout>
      <h1 className='text-2xl md:text-5xl font-bold text-gray-600 text-center tracking-wide mb-5'>✨ Bienvenidx a Infomoji ✨</h1>
      <div className='flex justify-center'>
        <input
          className='w-full max-w-xl border border-gray-300 p-3 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-cyan-500 focus:ring-1'
          id='name'
          type="text"
          placeholder='Busca un emoji'
          onChange={(e) => handleFilterBySearch(e.target.value)}
        />
      </div>
      {
        deltedFilterEmojis ?
        <div className='bg-gray-200 text-sm text-gray-900 rounded-md w-max p-1 m-auto'>
          <button className='hover:underline' onClick={() => {setFilterEmojis(emojisData.slice(0,30)); setDeletedFilterEmojis(false)}}>Quitar filtro</button>
        </div>
        :null
      }
      <h2 className='text-xl mb-5 font-bold text-gray-600'>Categorias</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mb-8'>
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="😀"
          group={'Smileys & Emotion'}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="👨🏻"
          group={'People & Body'}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="🐶"
          group={'Animals & Nature'}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="🍔"
          group={'Food & Drink'}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="⚽️"
          group="Activities"
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="🏨"
          group={'Travel & Places'}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="💡"
          group="Objects"
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="⚛️"
          group="Symbols"
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="🚩"
          group="Flags"
        />
      </div>
      <List emojis={filterEmojis} />
      
      <nav aria-label="pagination">
        <ul className='mt-10 flex justify-center text-sm'>
          {
            pagination !== 1 && <li className='bg-gray-200 p-2 w-max text-gray-700 border border-white rounded-md cursor-pointer' onClick={()=>{setFilterEmojis(emojisData.slice(((pagination-1)*30)-30,((pagination-1)*30))); setPagination(pagination-1)}}>Anterior</li>
          }
          <li className='bg-blue-400 text-gray-50 p-2 w-max border border-white rounded-md cursor-pointer' onClick={()=>{setFilterEmojis(emojisData.slice(((pagination)*30)-30,((pagination)*30)));setPagination(pagination)}}>{pagination}</li>
          {
            [...Array(5)].map((item, index)=>{
              return(
                index !== 0 && pagination+index < 154 && <li className='bg-gray-200 p-2 w-max border border-white rounded-md cursor-pointer' key={index} onClick={()=>{setFilterEmojis(emojisData.slice(((pagination+index)*30)-30,((pagination+index)*30)));setPagination(pagination+index)}}>{pagination+index}</li>
              )
            })
          }
          {
            pagination < 153 && <li className='bg-gray-200 p-2 w-max text-gray-700 border border-white rounded-md cursor-pointer' onClick={()=>{setFilterEmojis(emojisData.slice(((pagination+1)*30)-30,((pagination+1)*30))); setPagination(pagination+1)}}>Siguiente</li>
          }
        </ul>
      </nav>
    </Layout>
  )
}
export default Home;