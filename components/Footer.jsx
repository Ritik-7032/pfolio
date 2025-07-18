import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'; 

const Footer = () => {
  return (
    <footer className="w-full  bg-gray-900 text-center py-4 mt-10 border-t border-gray-700">
      <div className="container mx-auto px-4 space-y-2">
        <p>© {new Date().getFullYear()} Ritik Kumar. All rights reserved.</p>

        <div className="flex justify-center items-center gap-2">
          <HiOutlineMail className="text-xl" />
          <a
            href="mailto: singhritk7032@gmail.com"
            className="text-blue-400 hover:underline"
          >
         singhritk7032@gmail.com
          </a>
        </div>

        <div className="flex justify-center items-center gap-2">
          <HiOutlinePhone className="text-xl" />
          <a
            href="tel:+916353356936"
            className="text-blue-400 hover:underline"
          >
            +91 6353356936
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
