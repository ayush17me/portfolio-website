export default function Footer() {
  return (
    <footer className="bg-surface-container-low py-10 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 max-w-7xl mx-auto gap-6">
        <span className="font-headline font-bold text-xl text-on-surface tracking-tighter uppercase">
          Ayush Mishra
        </span>
        <p className="font-label text-[10px] uppercase tracking-widest text-outline text-center">
          © {new Date().getFullYear()} PORTFOLIO - BUILT WITH ❤️ BY AYUSH MISHRA
        </p>
        <div className="flex gap-6 md:gap-8">
          <a
            href="https://www.linkedin.com/in/ayush-mishra-117435324"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-xs uppercase tracking-widest text-outline hover:text-primary transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ayush17me"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-xs uppercase tracking-widest text-outline hover:text-primary transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href="mailto:ayush771mishra@gmail.com"
            className="font-label text-xs uppercase tracking-widest text-outline hover:text-primary transition-all duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
