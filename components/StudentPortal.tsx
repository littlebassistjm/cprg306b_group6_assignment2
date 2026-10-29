"use client";

import { useState } from "react";
import StatsPanel from "@/components/StatsPanel";
import StudentList from "@/components/StudentList";
import { students, Student } from "@/data/students";

const StudentPortal = () => {
    const [studentList, setStudentList] = useState<Student[]>(students);
    const [searchText, setSearchText] = useState("");

    const filteredStudents = studentList.filter((student) =>
        `${student.firstName} ${student.lastName}`
            .toLowerCase()
            .includes(searchText.toLowerCase())
    );

    const handleRemove = (id: number) => {
        setStudentList(studentList.filter((student) => student.id !== id));
    };

    return (
        <div className="flex flex-col gap-10">
            <section id="overview" className="scroll-mt-20">
                <h2 className="mb-4 text-2xl font-semibold text-blue-900">Overview</h2>
                <StatsPanel students={studentList} />
            </section>

            <section id="students" className="scroll-mt-20">
                <h2 className="mb-4 text-2xl font-semibold text-blue-900">Students</h2>
                <StudentList students={filteredStudents} onRemove={handleRemove} />
            </section>
        </div>
    );
};

export default StudentPortal;