import { useEffect, useState } from 'react';
import Course from '../Course/Course';
import PropTypes from 'prop-types';

const Courses = ({handleSelect}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("courses.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    // console.log(courses);
    return (
        <div className="grid grid-cols-3 gap-6 mt-8 mb-56">
            {courses.map((course,idx) =>
            <Course handleSelect={handleSelect} course = {course} key={`cardNo${idx}`}></Course>
            )}
        </div>
    );
};
Courses.propTypes = {
    handleSelect: PropTypes.func
  };

export default Courses;