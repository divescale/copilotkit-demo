import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <nav className="bg-black text-white w-64 min-h-screen p-4">
      <div className="mb-6"></div>
      <ul className="space-y-2">
        <li>
          <Link
            href="/fitness"
            className="block py-2 px-4 hover:bg-gray-600 rounded transition-colors"
          >
            Health and Wellness
          </Link>
        </li>
        <li>          
          <Link
            href="/finances"
            className="block py-2 px-4 hover:bg-gray-600 rounded transition-colors"
          >
            Financial Management
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
