import {  FaDollarSign, FaBookOpen } from "react-icons/fa";

const Course = ({course}) => {
    console.log(course);
    return (
        <div className="max-w-[312px] p-4 flex flex-col justify-between h-[402px] bg-white rounded-xl text-[#1c1b1b99]">
            <img className="w-[280px] h-[144px] rounded-lg" src={course.image_url} alt="" />
            <h3 className="text-lg font-semibold text-black">{course.course_name}</h3>
            <p className="text-sm min-h-[72px]">{course.description}</p>
            <div className="flex justify-between">
                <p className=""><FaDollarSign className="inline-block" /> Price: {course.price}</p>
                <p className=""><FaBookOpen className="inline-block "/> Credit: {course.credit_hours}hr</p>
            </div>
            <button className="bg-[#2F80ED] text-white text-center h-[40px] rounded-lg font-semibold">Select</button>
        </div>
    );
};

export default Course;