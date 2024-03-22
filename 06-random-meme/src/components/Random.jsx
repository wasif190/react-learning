import Spinner from './Spinner';
import useGif from '../hooks/useGif';

function Random() {
    const {gif, loading, fetchData} = useGif();

    return (
        <div className='sm:w-[500px] sm:h-[500px] w-[250px] h-[250px] bg-[#ccc] p-5 rounded-md border border-[#555] flex flex-col justify-between items-center'>
            <h1 className='uppercase text-2xl font-semibold'>A Random Gif</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} className='w-[300px] h-[300px] my-5'/>)
            }

            <button
             onClick={() => fetchData()}
             className='bg-[#555] w-10/12 py-2 rounded-md text-white text-lg'
            >
                Generate
            </button>
        </div>
    )
}

export default Random
