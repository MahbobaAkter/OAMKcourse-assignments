import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CourseList from "./CourseList";

const courses = [
  { name: "Course 4", courseId: "ZZZ444", studentPositions: 100 },
  { name: "Course 5", courseId: "XXX555", studentPositions: 200 },
  { name: "Course 6", courseId: "YYY666", studentPositions: 300 },
];

test("renders the course names in app", () => {
  render(<CourseList courses={courses} />);

  // Check for each course name, loop through the courses array
  courses.forEach((course) => {
    const courseName = screen.getByText(course.name);
    expect(courseName).toBeInTheDocument();
  });
});

test("renders the course IDs in app", () => {
  render(<CourseList courses={courses} />);

  // Check for each course ID, loop through the courses array
  courses.forEach((course) => {
    const courseId = screen.getByText(course.courseId);
    expect(courseId).toBeInTheDocument();
  });
});

test("renders the student positions in app", () => {
  render(<CourseList courses={courses} />);

  // Check for each student position, loop through the courses array
  courses.forEach((course) => {
    const studentPositions = screen.getByText(
      "Student Positions: " + course.studentPositions
    );
    expect(studentPositions).toBeInTheDocument();
  });
});
