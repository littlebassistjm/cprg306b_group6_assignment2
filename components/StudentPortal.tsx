"use client";

/*
File Name: StudentPortal.tsx
Authors: Jose Mari Christian Hilario, Hajira Farooq
Date: October 30, 2026
Description: Stores a list of students and the search text using state.
Adding, removing, searching, and clearing students is all handled by this component.
Passes data & functions to other components when needed to.
Displays Overview, Students, and Add a Student sections.
*/


import { useState } from "react";
import StatsPanel from "@/components/StatsPanel";
import StudentList from "@/components/StudentList";
import SearchBox from "@/components/SearchBox";
import AddStudent from "@/components/AddStudent";
import { students, Student } from "@/data/students";

const StudentPortal = () => {
  const [studentList, setStudentList] = useState<Student[]>(students);
  const [searchText, setSearchText] = useState("");

  const filteredStudents = studentList.filter((student) =>
    `${student.firstName} ${student.lastName}`
      .toLowerCase()
      .includes(searchText.trim().toLowerCase())
  );

  const handleRemove = (id: number) => {
    setStudentList(studentList.filter((student) => student.id !== id));
  };

  const handleAddStudent = (newStudent: Omit<Student, "id">) => {
    const nextId =
      studentList.reduce((max, student) => Math.max(max, student.id), 0) + 1;
    setStudentList([...studentList, { id: nextId, ...newStudent }]);
  };

  const handleClearAll = () => {
    setStudentList([]);
  };

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-8">
      <section id="overview" className="scroll-mt-20">
        <h2 className="mb-4 text-2xl font-bold text-blue-900">Overview</h2>
        <StatsPanel students={studentList}/>
      </section>

      <section id="students" className="scroll-mt-20">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold text-blue-900">Students</h2>
          <button
            type="button"
            onClick={handleClearAll}
            className="rounded-md border bg-gray-700 px-3 py-1.5 text-sm font-medium text-white hover:border-red-700 hover:bg-white hover:text-red-700">Clear all</button>
        </div>
        <div className="mb-4">
          <SearchBox searchText={searchText} onSearchChange={setSearchText} />
        </div>
        <StudentList students={filteredStudents} onRemove={handleRemove} />
      </section>

      <section id="add-student" className="scroll-mt-20">
        <h2 className="mb-4 text-2xl font-bold text-blue-900">Add a student</h2>
        <AddStudent onAdd={handleAddStudent} />
      </section>
    </div>
  );
};

export default StudentPortal;
