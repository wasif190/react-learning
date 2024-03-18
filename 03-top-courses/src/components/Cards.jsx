import React, { useState } from 'react'
import Card from './Card';

function Cards({ courses, category }) {
    const [likedCourses, setlikedCourses] = useState([]);

    // Arranging all data in a single array
    const getCourses = () => {
        if (category === 'All') {
            let allCourses = [];
            if (courses && typeof courses === 'object') {
                Object.values(courses).forEach(array => array.forEach(courseData => allCourses.push(courseData)));
            }
            return allCourses;
        } else {
            return courses[category];
        }
    }

    return (
        <div className='w-10/12 flex flex-wrap justify-center mx-auto gap-8 my-8'>
            {
                getCourses().map((course) => (
                    <Card
                        key={course.id}
                        course={course}
                        likedCourses={likedCourses}
                        setlikedCourses={setlikedCourses}
                    />
                ))
            }
        </div>
    )
}

export default Cards
