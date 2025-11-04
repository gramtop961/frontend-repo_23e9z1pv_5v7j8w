import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Doraemon Landing. Built with love and a pinch of futurism.</p>
        <nav className="flex items-center gap-4 text-sm">
          <a className="text-slate-600 hover:text-slate-900" href="#home">Home</a>
          <a className="text-slate-600 hover:text-slate-900" href="#features">Features</a>
          <a className="text-slate-600 hover:text-slate-900" href="#gadgets">Gadgets</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
