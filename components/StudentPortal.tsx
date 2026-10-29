import StatsPanel from "@/components/StatsPanel";
import { students } from "@/data/students";


const StudentPortal = () => {
    return (
        <div>
            <section id="overview" className="scroll-mt-20">
                <h2 className="mb-4 text-2xl font-semibold text-blue-900">Overview</h2>
                <StatsPanel students={students} />
            </section>
        </div>
    );
};

export default StudentPortal;