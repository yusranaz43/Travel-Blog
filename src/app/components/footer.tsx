import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"; // For social media icons

export default function Footer() {
  return (
    <footer className="w-full bg-sky-800 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 sm:gap-y-20 gap-x-6 text-white">
          {/* Footer Section 1: About */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              I'm Yusra Naz, a passionate travel blogger sharing my experiences and tips for fellow travelers. Join me as I explore the world!
            </p>
          </div>

          {/* Footer Section 2: Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-400">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400">About</a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-blue-400">Blogs</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">Contact</a>
              </li>
            </ul>
          </div>

          {/* Footer Section 3: Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-300 text-sm">
              Email: <a href="mailto:yusramairaj43@gmail.com" className="hover:text-blue-400">yusranaz@example.com</a>
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Phone: <a href="tel:+923492086351" className="hover:text-blue-400">+92 3000 2002020</a>
            </p>
          </div>

          {/* Footer Section 4: Social Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Me</h2>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 text-2xl transition-colors duration-300">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600 text-2xl transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-800 text-2xl transition-colors duration-300">
                <FaLinkedin />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-2xl transition-colors duration-300">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-gray-400 mt-10">
          <p>&copy; 2025 Yusra Naz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

