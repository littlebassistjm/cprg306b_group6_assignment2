import { Student } from "@/data/students";

interface StatsPanelProps {
  students: Student[];
}

const StatsPanel = ({ students }: StatsPanelProps) => {
  // Derived values – recalculated on every render
  const total = students.length;
  const honourRoll = students.filter((s) => s.average >= 80).length;
  const graduating = students.filter((s) => s.grade === 12).length;

  const stats = [
    { label: "Students", value: total },
    { label: "Honour roll", value: honourRoll },
    { label: "Graduating", value: graduating },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-lg bg-white p-4 text-center shadow">
          <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
          <p className="text-sm text-slate-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsPanel;