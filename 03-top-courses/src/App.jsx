import React, { useEffect, useState } from 'react';
import { filterData, apiUrl } from './data';
import Filter from './components/Filter';
import { toast } from 'react-toastify';
import Cards from './components/Cards';
import Spinner from './components/Spinner';

function App() {
  const [category, setCategory] = useState(filterData[0].title);
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      let output = await response.json();
      setCourses(output.data);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='min-h-screen'>
      <header className='text-center py-5 text-3xl font-bold text-blue-800 border-b border-[#ccc]'>
        <h1>Top Courses</h1>
      </header>

      <section>
        <div>
          <Filter
            category={category}
            setCategory={setCategory}
            filterData={filterData}
          />
        </div>
        <div>
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </section>
    </div>
  )
}

export default App
