const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-blue-900 text-white shadow">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-lg font-bold">New Generation High School</span>
        <ul className="flex gap-4 text-sm">
          <li><a className="hover:underline" href="#overview">Overview</a></li>
          <li><a className="hover:underline" href="#students">Students</a></li>
          <li><a className="hover:underline" href="#add-student">Add a student</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;