import React from 'react';

function Filter({ category, setCategory, filterData }) {
  return (
    <div className='w-10/12 gap-5 py-5 justify-center mx-auto items-center flex-wrap flex'>
      {
        filterData.map((data) => (
            <button
                key={data.id}
                onClick={() => setCategory(data.title)}
                className={`py-1.5 px-4 border border-[#acacac] bg-[#efefef] rounded 
                 ${category === data.title ? 'bg-[#e2e2e2]' : 'bg-[#efefef] border-transparent'}`
                }
            >
                {data.title}
            </button>
        ))
      }
    </div>
  )
}

export default Filter
