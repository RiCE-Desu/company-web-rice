import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold">ArchiWeb</h2>
          <p className="mt-2 text-gray-400">
            Archiweb is an architectural consultant based in Berlin, Germany. We provide
            solutions for your architecture and residential design.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="text-xl cursor-pointer" />
            <FaTwitter className="text-xl cursor-pointer" />
            <FaInstagram className="text-xl cursor-pointer" />
          </div>
        </div>
        
        {/* Articles */}
        <div>
          <h3 className="text-lg font-semibold">Articles</h3>
          <ul className="mt-2 text-gray-400 space-y-2">
            <li>7 Tips for Kids Friendly Interior Design</li>
            <li>Smart Tips for Changing a Room</li>
            <li>Eco-friendly design</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold">Links</h3>
          <ul className="mt-2 text-gray-400 space-y-2">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-lg font-semibold">Location</h3>
          <div>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.5828259180534!2d13.4050!3d52.5200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851b320b07b07%3A0x4248b0c6f3d48a0!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1635315646789!5m2!1sen!2sus"
              width="full"
              height="full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
