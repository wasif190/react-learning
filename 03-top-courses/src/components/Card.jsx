import React from 'react';
import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

function Card({ likedCourses, setlikedCourses, course}) {
    function likeHandler() {
      if (likedCourses.includes(course.id)) {
        setlikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
        toast.warning('Liked Removed')
      }
      else {
        if (likedCourses.length === 0) {
            setlikedCourses([course.id]);
        }
        else {
            setlikedCourses((prev) => [...prev, course.id]);
        }
        toast.success('Liked Successfuly')
      }
    }
    return (
        <main className='w-[350px] rounded overflow-hidden bg-[#3f3f3f]'>
            <section className='relative'>
                <img src={course.image.url}/>
                <div className='absolute right-2 bottom-[-12px] w-[35px] h-[35px] bg-white rounded-full flex justify-center items-center'>
                    <button onClick={likeHandler}>
                        {
                        likedCourses.includes(course.id) ? 
                            (<FcLike className='text-[1.7rem]'/>) : 
                            (<FcLikePlaceholder className='text-[1.7rem]'/>)
                        }
                    </button>
                </div>
            </section>

            <section className='py-4 px-3 text-[#fff]'>
                <p className='text-xl font-semibold'>{course.title}</p>
                <p className='text-[.95rem] text-[#ccc] mt-2'>
                {
                    course.description.length > 100 ? (course.description.substr(0, 150) + '...') : (course.description)
                }
                </p>
            </section>
        </main>
    )
}

export default Card
