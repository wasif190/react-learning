import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const Tag = () => {
  const [tag, setTag] = useState("Dog");
  const {gif, loading, fetchData} = useGif(tag);

  return (
    <div className='sm:w-[500px] w-[250px] h-[250px] mb-[100px] min-h-min sm:h-[500px] bg-[#ccc] p-5 rounded-md border border-[#555] flex flex-col justify-between items-center'>
        <h1 className='uppercase text-2xl font-semibold'>Random Gif</h1>

        {
            loading ? (<Spinner/>) : (<img src={gif} className='w-[300px] h-[300px]'/>)
        }

        <div className="flex flex-col w-10/12 items-center gap-3 mt-3 sm:mt-0">
            <input 
                type="text" 
                placeholder="Enter meme"
                className="text-center rounded-md py-2 border border-[#a0a0a0] outline-none w-full"
                onChange={(e) => setTag(e.target.value)}
            />
            <button
                onClick={() => fetchData()}
                className='bg-[#555] w-full py-2 rounded-md text-white text-lg'
            >
                Generate
            </button>
        </div>
    </div>
  );
};

export default Tag;
