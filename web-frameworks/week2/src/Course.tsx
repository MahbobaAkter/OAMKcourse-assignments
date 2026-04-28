
type CourseProps = {
  name: string;
  courseId: string;
  studentPositions: number;
};

function Course({ name, courseId, studentPositions }: CourseProps) {
  return (
    <div
      className="course"
      style={{
        padding: "24px  0",
        margin: "10px  0",
        textAlign: "center",
        border: "1px solid gray",
        width: "100%",
        backgroundColor: "#fff",
        color: "#000",
        display: "block",
      }}
    >
      <h2>{name}</h2>
      <p>{courseId}</p>
      <p>Student Positions: {studentPositions}</p>
    </div>
  );
}

export default Course;
