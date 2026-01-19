import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-bulldog-black pt-32 pb-12 border-t border-white/5 relative overflow-hidden">

            {/* Giant Watermark */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/3 text-[25vw] font-display font-bold text-white/[0.02] pointer-events-none select-none leading-none z-0">
                BDOG
            </div>

            <div className="container mx-auto px-6 md:px-24 lg:px-32 relative z-10 flex flex-col items-center">

                {/* Top Section: Logo & Links */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 md:gap-12 mb-16 md:mb-24">

                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="text-3xl md:text-4xl font-display font-bold text-white tracking-wider mb-2">
                            BULLDOG
                        </div>
                        <div className="text-bulldog-muted text-[10px] md:text-xs uppercase tracking-[0.3em]">
                            The Last Stand
                        </div>
                    </div>

                    {/* Navigation / Socials */}
                    <div className="flex flex-col sm:flex-row gap-6 md:gap-12 text-center sm:text-left">
                        {['Twitter / X', 'Telegram', 'Dextools', 'Etherscan'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="group relative text-sm font-bold uppercase tracking-widest text-bulldog-muted hover:text-white transition-colors"
                            >
                                {item}
                                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-bulldog-ember group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Disclaimer Block */}
                <div className="w-full border-t border-white/5 pt-12 text-center md:text-left">
                    <div className="grid md:grid-cols-2 gap-8 items-end">

                        {/* Legal Text */}
                        <div className="space-y-4">
                            <h4 className="text-white/30 text-xs font-bold uppercase tracking-widest mb-4">
                        // Legal Disclaimer
                            </h4>
                            <p className="text-bulldog-muted/40 text-[10px] leading-relaxed max-w-lg uppercase">
                                $BULLDOG is a meme coin with no intrinsic value or expectation of financial return.
                                There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
                                Do not risk money you cannot afford to lose.
                            </p>
                        </div>

                        {/* Copyright & Meta */}
                        <div className="flex flex-col items-center md:items-end gap-2 text-[10px] text-bulldog-muted/30 uppercase tracking-widest font-mono">
                            <span>System Status: Operational</span>
                            <span>© {new Date().getFullYear()} Bulldog Protocol</span>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
};
