import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

const courses = [
  { name: "Course 1", courseId: "ABC123", studentPositions: 10 },
  { name: "Course 2", courseId: "XYZ456", studentPositions: 20 },
  { name: "Course 3", courseId: "DEF789", studentPositions: 30 },
];

test("renders the course names in app", () => {
  render(<App courses={courses} />);

  // Check for each course name, loop through the courses array
  courses.forEach((course) => {
    const courseName = screen.getByText(course.name);
    expect(courseName).toBeInTheDocument();
  });
});

test("renders the course IDs in app", () => {
  render(<App courses={courses} />);

  // Check for each course ID, loop through the courses array
  courses.forEach((course) => {
    const courseId = screen.getByText(course.courseId);
    expect(courseId).toBeInTheDocument();
  });
});

test("renders the student positions in app", () => {
  render(<App courses={courses} />);

  // Check for each student position, loop through the courses array
  courses.forEach((course) => {
    const studentPositions = screen.getByText(
      "Student Positions: " + course.studentPositions
    );
    expect(studentPositions).toBeInTheDocument();
  });
});
