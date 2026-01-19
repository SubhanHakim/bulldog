import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bulldog-black/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-4 md:py-6'}`}>
            <div className="container mx-auto px-6 md:px-24 lg:px-32 flex justify-between items-center relative z-50">
                <div className="text-2xl md:text-3xl font-display font-bold text-white tracking-widest relative z-50">
                    BULLDOG
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#philosophy" className="text-bulldog-muted hover:text-white uppercase text-sm tracking-widest transition-colors font-semibold">Philosophy</a>
                    <a href="#represents" className="text-bulldog-muted hover:text-white uppercase text-sm tracking-widest transition-colors font-semibold">Identity</a>
                    <a href="#token" className="text-bulldog-muted hover:text-white uppercase text-sm tracking-widest transition-colors font-semibold">Token</a>
                    <Button variant="outline" className="text-sm px-6 py-2">Join</Button>
                </div>

                {/* Mobile Menu Button (Hamburger) */}
                <div className="md:hidden relative z-50">
                    <button
                        onClick={toggleMenu}
                        className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-4 h-0.5 bg-bulldog-bronze transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-bulldog-black z-40 flex flex-col items-center justify-center transition-all duration-500 transform ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>

                {/* Background Decor */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-bulldog-bronze/10 via-bulldog-black to-bulldog-black pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                <div className="flex flex-col items-center gap-8 relative z-50">
                    {['Philosophy', 'Identity', 'Token'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase() === 'identity' ? 'represents' : item.toLowerCase()}`}
                            onClick={closeMenu}
                            className="text-4xl font-display font-bold text-white uppercase tracking-widest hover:text-bulldog-bronze transition-colors flex items-center gap-4 group"
                        >
                            <span className="w-0 h-0.5 bg-bulldog-ember transition-all duration-300 group-hover:w-8"></span>
                            {item}
                            <span className="w-0 h-0.5 bg-bulldog-ember transition-all duration-300 group-hover:w-8"></span>
                        </a>
                    ))}

                    <div className="mt-8">
                        <Button onClick={closeMenu} className="w-full text-xl px-12 py-4 shadow-[0_0_20px_rgba(139,90,43,0.3)]">
                            Join The Pack
                        </Button>
                    </div>
                </div>

                {/* Footer Decor in Menu */}
                <div className="absolute bottom-10 left-0 w-full text-center">
                    <p className="text-bulldog-muted text-[10px] uppercase tracking-[0.3em] opacity-50">
                        System Online
                    </p>
                </div>
            </div>
        </nav>
    );
};
