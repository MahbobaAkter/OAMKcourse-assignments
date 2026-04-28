
import Course from "./Course";

type CourseType = {
  name: string;
  courseId: string;
  studentPositions: number;
};

type CourseListProps = {
  courses: CourseType[];
};

function CourseList({ courses }: CourseListProps) {
  return (
    <div>
      {courses.map((course) => (
        <Course
          key={course.courseId}
          name={course.name}
          courseId={course.courseId}
          studentPositions={course.studentPositions}
        />
      ))}
    </div>
  );
}

export default CourseList;
