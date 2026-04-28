import './App.css'
import CourseList from "./CourseList";

type CourseType = {
  name: string;
  courseId: string;
  studentPositions: number;
};

type AppProps = {
  courses: CourseType[];
};

function App({ courses }: AppProps) {

  return (
    
      <div>
        <h1>Course List</h1>
        <CourseList courses={courses} />
        </div>
    
  );
}

export default App
