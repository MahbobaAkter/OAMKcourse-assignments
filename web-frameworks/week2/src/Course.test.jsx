import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Course from "./Course";

const courses = [
  { name: "Course 1", courseId: "ABC123", studentPositions: 10 },
  { name: "Course 2", courseId: "XYZ456", studentPositions: 20 },
  { name: "Course 3", courseId: "DEF789", studentPositions: 30 },
];

test("Test that Course components renders all props correctly", () => {
  render(
    <Course name={"Test Course"} courseId={"123456789"} studentPositions={50} />
  );
  // Test that name is rendered
  const courseName = screen.getByText("Test Course");
  expect(courseName).toBeInTheDocument();

  // Test that courseId is rendered
  const courseId = screen.getByText("123456789");
  expect(courseId).toBeInTheDocument();

  // Test that studentPositions is rendered
  const studentPositions = screen.getByText("Student Positions: 50");
  expect(studentPositions).toBeInTheDocument();
});
