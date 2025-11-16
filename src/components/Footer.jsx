const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
        <div>
          © {new Date().getFullYear()} Storyboard Limited • Nairobi, Kenya
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-amber-600">Instagram</a>
          <a href="#" className="hover:text-amber-600">LinkedIn</a>
          <a href="#" className="hover:text-amber-600">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
