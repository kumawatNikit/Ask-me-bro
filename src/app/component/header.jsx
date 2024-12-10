'use client';
import { useState } from "react";

 const Header = () => {
  const [blogMenuOpen, setBlogMenuOpen] = useState(false);
  const [questionsMenuOpen, setQuestionsMenuOpen] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#1c3a40] text-white lg:px-16">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div className="items-center">
          <div className="text-2xl font-bold">
            <span>ASK me</span>
          </div>
          <span className="text-sm italic text-[#9c9695]">You Ask. We Answer</span>
        </div>

        <nav className="hidden lg:flex space-x-6">
          <a href="/" className="hover:bg-[#eeecec] hover:text-[#428690] xl:p-3 rounded-md">Home</a>
          <a href="/ask" className="hover:bg-[#eeecec] hover:text-[#428690] xl:p-3 rounded-md">Ask Question</a>
          
          {/* Dropdown for Questions */}
          <div
            className="relative"
            onMouseEnter={() => setQuestionsMenuOpen(true)}
            onMouseLeave={() => setQuestionsMenuOpen(false)}
          >
            <button className="hover:bg-[#eeecec] hover:text-[#428690] xl:p-3 rounded-md">
              Questions ▼
            </button>
            {questionsMenuOpen && (
              <div className="absolute top-12 left-0 bg-[#eeecec] text-gray-800 rounded shadow-lg w-48">
                <a href="/questions/active" className="block px-4 py-2 hover:bg-gray-200">Active Questions</a>
                <a href="/questions/answered" className="block px-4 py-2 hover:bg-gray-200">Answered Questions</a>
                <a href="/questions/archive" className="block px-4 py-2 hover:bg-gray-200">Archive</a>
              </div>
            )}
          </div>

          {/* Dropdown for Pages */}
          <div
            className="relative"
            onMouseEnter={() => setPagesMenuOpen(true)}
            onMouseLeave={() => setPagesMenuOpen(false)}
          >
            <button className="hover:bg-[#eeecec] hover:text-[#428690] xl:p-3 rounded-md">
              Pages ▼
            </button>
            {pagesMenuOpen && (
              <div className="absolute top-12 left-0 bg-[#eeecec] text-gray-800 rounded shadow-lg w-48">
                <a href="/about-us" className="block px-4 py-2 hover:bg-gray-200">About Us</a>
                <a href="/faq" className="block px-4 py-2 hover:bg-gray-200">FAQ</a>
                <a href="/terms" className="block px-4 py-2 hover:bg-gray-200">Terms & Conditions</a>
              </div>
            )}
          </div>

          {/* Dropdown for User */}
          <div
            className="relative"
            onMouseEnter={() => setUserMenuOpen(true)}
            onMouseLeave={() => setUserMenuOpen(false)}
          >
            <button className="hover:bg-[#eeecec] hover:text-[#428690] xl:p-3 rounded-md">
              User ▼
            </button>
            {userMenuOpen && (
              <div className="absolute top-12 left-0 bg-[#eeecec] text-gray-800 rounded shadow-lg w-48">
                <a href="/profile" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
                <a href="/settings" className="block px-4 py-2 hover:bg-gray-200">Settings</a>
                <a href="/logout" className="block px-4 py-2 hover:bg-gray-200">Logout</a>
              </div>
            )}
          </div>

          {/* Dropdown for Blog */}
          <div
            className="relative"
            onMouseEnter={() => setBlogMenuOpen(true)}
            onMouseLeave={() => setBlogMenuOpen(false)}
          >
            <button className="hover:bg-[#eeecec] hover:text-[#428690] xl:p-3 rounded-md">
              Blog ▼
            </button>
            {blogMenuOpen && (
              <div className="absolute top-12 left-0 bg-[#eeecec] text-gray-800 rounded shadow-lg w-48">
                <a href="/blog1" className="block px-4 py-2 hover:bg-gray-200">Blog 1</a>
                <div className="group relative">
                  <a href="/blog2" className="block px-4 py-2 hover:bg-gray-200">
                    Blog 2 ▼
                  </a>
                  <div className="hidden group-hover:block absolute top-0 left-48 bg-[#eeecec] text-gray-800 rounded shadow-lg w-48">
                    <a
                      href="/blog2/right-sidebar"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Right Sidebar
                    </a>
                    <a
                      href="/blog2/left-sidebar"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Left Sidebar
                    </a>
                    <a
                      href="/blog2/full-width"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Full Width
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="/shortcodes" className="hover:bg-[#eeecec] hover:text-[#428690] xl:p-3 rounded-md">Shortcodes</a>
          <a href="/contact-us" className="hover:bg-[#eeecec] hover:text-[#428690] xl:p-3 rounded-md">Contact Us</a>
        </nav>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-gray-700 text-white p-4">
          <a href="/" className="block py-2 hover:bg-[#ff7361] p-3 rounded-md">Home</a>
          <a href="/ask" className="block py-2 hover:bg-[#ff7361] p-3 rounded-md">Ask Question</a>
          <a href="/questions" className="block py-2 hover:bg-[#ff7361] p-3 rounded-md">Questions</a>
          <a href="/user" className="block py-2 hover:bg-[#ff7361] p-3 rounded-md">User</a>
          <div className="py-2">
            <button
              onClick={() => setBlogMenuOpen(!blogMenuOpen)}
              className="w-full text-left hover:bg-[#ff7361] p-3 rounded-md"
            >
              Blog ▼
            </button>
            {blogMenuOpen && (
              <div className="pl-4">
                <a href="/blog1" className="block py-2 hover:text-gray-300">Blog 1</a>
                <a href="/blog2/right-sidebar" className="block py-2 hover:text-gray-300">
                  Blog 2: Right Sidebar
                </a>
              </div>
            )}
          </div>
          <a href="/shortcodes" className="block py-2 hover:bg-[#ff7361] p-3 rounded-md">Shortcodes</a>
          <a href="/contact-us" className="block py-2 hover:bg-[#ff7361] p-3 rounded-md">Contact Us</a>
        </nav>
      )}
    </header>
  );
}
export default Header;