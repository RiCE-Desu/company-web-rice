const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">ArchiWeb</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-gray-600">Home</li>
            <li className="hover:text-gray-600">Projects</li>
            <li className="hover:text-gray-600">About</li>
            <li className="hover:text-gray-600">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
