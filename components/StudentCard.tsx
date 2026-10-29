"use client";

import { useState } from "react";
import { Student } from "@/data/students";

interface StudentCardProps {
  student: Student;
  onRemove: (id: number) => void;
}

const HONOUR_ROLL_MIN = 80;

const StudentCard = ({ student, onRemove }: StudentCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const fullName = `${student.firstName} ${student.lastName}`;
  const isHonourRoll = student.average >= HONOUR_ROLL_MIN;

  const handleToggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const handleRemove = () => {
    onRemove(student.id); 
  };

  return (
    <article className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{fullName}</h3>
        <p className="text-sm text-gray-600">Grade {student.grade}</p>
      </div>

      {showDetails && (
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-md bg-gray-200 p-3">
          <p className="text-sm text-gray-800">
            Average: <span className="font-bold">{student.average}</span>
          </p>
          {isHonourRoll && (
            <span className="rounded-full bg-yellow-500 px-2 py-1 text-xs font-medium text-yellow-100">
              Honour roll
            </span>
          )}
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleToggleDetails}
          className="rounded-md border bg-blue-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-white hover:border-blue-900 hover:text-blue-900"
        >
          {showDetails ? "Hide details" : "Show details"}
        </button>
        <button
          type="button"
          onClick={handleRemove}
          className="rounded-md border bg-red-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-white hover:text-red-700 hover:border-red-700"
        >
          Remove
        </button>
      </div>
    </article>
  );
};

export default StudentCard;
