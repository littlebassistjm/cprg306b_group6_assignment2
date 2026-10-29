const school = {
  name: "New Generation High School",
  address: "1234 1 Ave NW, Calgary, AB",
  phone: "(123) 456-7890",
  email: "office@newgenerationhs.com",
};

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-6 text-center text-sm sm:text-base">
        <p className="text-lg font-bold">{school.name}</p>
        <p>{school.address}</p>
        <p>
          Phone: <a className="hover:underline" href={`tel:${school.phone}`}>{school.phone}</a>
        </p>
        <p>
          Email: <a className="hover:underline" href={`mailto:${school.email}`}>{school.email}</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;