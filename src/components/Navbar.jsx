const Navbar = () => {
  return (
    <nav className=" flex items-center h-[45px] overflow-hidden gap-3 bg-gray-200 text-gray-500">
      <section className="w-[70px] sm:w-[100px]">
        <h1 className="text-center font-bold text-2xl">LOGO</h1>
      </section>
      <section className="flex-1">
        <h2 className="text-center font-semibold text-xl sm:text-2xl">
          Image Fetching App
        </h2>
      </section>
    </nav>
  );
};

export default Navbar;
