"use client";

import { useState } from "react";
import { Student } from "@/data/students";

interface AddStudentProps {
    onAdd: (student: Omit<Student, "id">) => void;
}

const DEFAULT_GRADE = "9";
const DEFAULT_AVERAGE = "70";

const AddStudent = ({ onAdd }: AddStudentProps) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [grade, setGrade] = useState(DEFAULT_GRADE);
    const [average, setAverage] = useState(DEFAULT_AVERAGE);

    const handleAdd = () => {
        if (firstName.trim() === "" || lastName.trim() === "") {
            return;
    }
    onAdd({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        grade: Number(grade),
        average: Number(average),
    });
    setFirstName("");
    setLastName("");
    setGrade(DEFAULT_GRADE);
    setAverage(DEFAULT_AVERAGE);
};

const inputClass = "w-full rounded-md border border-grey-300 px-3 py-2 text-sm focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900";

 return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <label className="block text-sm font-medium text-gray-700">First name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`mt-1 ${inputClass}`}/>
        </label>

        <label className="block text-sm font-medium text-gray-700">Last name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={`mt-1 ${inputClass}`}/>
        </label>

        <label className="block text-sm font-medium text-gray-700">Grade
          <input
            type="number"
            min={9}
            max={12}
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className={`mt-1 ${inputClass}`}/>
        </label>

        <label className="block text-sm font-medium text-gray-700">
          Average
          <input
            type="number"
            min={0}
            max={100}
            value={average}
            onChange={(e) => setAverage(e.target.value)}
            className={`mt-1 ${inputClass}`}/>
        </label>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className="mt-4 rounded-md border bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:border-blue-900 hover:bg-white hover:text-blue-900">Add student</button>
    </div>
  );
};

export default AddStudent;
