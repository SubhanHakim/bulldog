import React from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex flex-col pt-28 overflow-hidden bg-bulldog-black">

            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                {/* Subtle noise texture */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

                {/* Ambient Glows */}
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-bulldog-bronze/10 rounded-full blur-[120px] mix-blend-screen"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-bulldog-ember/10 rounded-full blur-[100px] animate-pulse-glow"></div>
            </div>

            <div className="container mx-auto px-6 md:px-24 lg:px-32 flex-grow flex flex-col items-center justify-center relative z-10 gap-12 md:gap-16 pb-20">

                {/* Main Content Split */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full h-full relative">

                    {/* Typography Section */}
                    <div className="w-full md:w-[55%] flex flex-col items-start justify-center relative z-20 pt-10 md:pt-0">
                        <div className="overflow-hidden mb-4 md:mb-6">
                            <span className="inline-block animate-slide-up text-bulldog-bronze font-bold tracking-[0.3em] uppercase text-xs md:text-sm border-b border-bulldog-bronze/50 pb-2">
                                The Alpha Standard
                            </span>
                        </div>

                        <h1 className="flex flex-col font-display font-bold leading-[0.9] md:leading-[0.85] tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]">
                            <span className="text-stroke-2 text-white/10 hover:text-white/30 transition-colors duration-500">PURE</span>
                            <span className="text-white relative lg:-ml-4 z-10">
                                BRUTE
                                {/* Scratch Effect Line */}
                                <span className="absolute top-1/2 left-0 w-full h-[4px] md:h-[6px] bg-bulldog-ember/80 -rotate-2 mix-blend-overlay block"></span>
                            </span>
                            <span className="text-bulldog-bronze lg:ml-2">FORCE</span>
                        </h1>

                        <p className="text-bulldog-muted text-base md:text-xl max-w-md mt-6 md:mt-8 border-l-4 border-bulldog-ember pl-6 py-1 leading-relaxed">
                            Uncompromising dominance. A symbol of resilience and raw power. No memes, just presence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-8 md:pt-10 w-full sm:w-auto">
                            <Button className="w-full sm:w-auto hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(139,90,43,0.3)]">Acquire Token</Button>
                            <Button variant="outline" className="w-full sm:w-auto">Read Manifesto</Button>
                        </div>
                    </div>


                    {/* Visual Section */}
                    <div className="w-full md:w-[45%] flex items-center justify-center relative mt-12 md:mt-0 perspective-1000 order-first md:order-last">

                        {/* THE MONOLITH CONTAINER */}
                        <div className="relative w-full aspect-[3/4] max-w-[350px] md:max-w-[500px] group transition-all duration-700 ease-out hover:scale-[1.02] mx-auto">

                            {/* Glowing Backplate */}
                            <div className="absolute inset-0 bg-gradient-to-b from-bulldog-bronze/20 to-bulldog-ember/20 blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

                            {/* Main Frame - Cut Corners */}
                            <div className="absolute inset-0 border-2 border-bulldog-ash bg-bulldog-black/80 clip-cut-corners z-10 backdrop-blur-sm"></div>

                            {/* Active Border (Bronze) */}
                            <div className="absolute inset-0 border border-bulldog-bronze/50 clip-cut-corners z-20 group-hover:border-bulldog-bronze transition-colors duration-500 box-border"></div>

                            {/* Inner Content Area */}
                            <div className="absolute inset-[6px] clip-cut-corners z-30 overflow-hidden bg-bulldog-charcoal">

                                {/* Background Grid */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>

                                {/* THE BEAST - Image */}
                                <img
                                    src="/hero-bulldog.jpg"
                                    alt="BULLDOG"
                                    className="absolute inset-0 w-full h-full object-cover filter contrast-125 brightness-90 group-hover:contrast-110 transition-all duration-700 ease-in-out scale-110 group-hover:scale-100"
                                />

                                {/* Inner Gradient Overlay (Vignette) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-bulldog-black via-transparent to-bulldog-black/40 mix-blend-multiply pointer-events-none"></div>

                                {/* Bronze Tint Overlay */}
                                <div className="absolute inset-0 bg-bulldog-bronze/10 mix-blend-overlay group-hover:bg-transparent transition-all"></div>

                                {/* Fog Animation */}
                                <div className="absolute inset-0 z-40 animate-fog opacity-60 pointer-events-none mix-blend-soft-light" style={{ width: '200%' }}></div>

                            </div>

                            {/* Decorative Cyber Elements */}

                            {/* Top Label */}
                            <div className="absolute -top-3 left-10 bg-bulldog-black px-4 py-1 border border-bulldog-bronze z-40 text-[10px] tracking-[0.2em] text-bulldog-bronze font-bold uppercase">
                                Subject 01: Alpha
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 w-8 h-8 flex items-start justify-end p-[2px] z-50">
                                <div className="w-2 h-2 bg-bulldog-ember animate-pulse"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 flex items-end justify-start p-[2px] z-50">
                                <div className="w-2 h-2 bg-bulldog-bronze"></div>
                            </div>

                            {/* Vertical Stats */}
                            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 flex flex-col gap-4 z-0 opacity-50">
                                <span className="text-[9px] text-bulldog-muted rotate-90 tracking-widest uppercase">Str: MAX</span>
                                <span className="text-[9px] text-bulldog-muted rotate-90 tracking-widest uppercase">Vol: HIGH</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Ticker / Bar at bottom */}
            <div className="w-full bg-bulldog-charcoal border-t border-white/5 py-4 z-20 overflow-hidden flex items-center mt-auto relative">
                <div className="flex gap-16 animate-marquee whitespace-nowrap">
                    {/* Content Block 1 */}
                    <div className="flex gap-16 items-center text-xs font-display tracking-[0.2em] text-bulldog-muted uppercase">
                        <span>Dominance</span> <span className="text-bulldog-ember">•</span>
                        <span>Power</span> <span className="text-bulldog-ember">•</span>
                        <span>Resilience</span> <span className="text-bulldog-ember">•</span>
                        <span>No Compromise</span> <span className="text-bulldog-ember">•</span>
                        <span>Dominance</span> <span className="text-bulldog-ember">•</span>
                        <span>Power</span> <span className="text-bulldog-ember">•</span>
                        <span>Resilience</span> <span className="text-bulldog-ember">•</span>
                        <span>No Compromise</span> <span className="text-bulldog-ember">•</span>
                    </div>
                    {/* Content Block 2 (Duplicate for seamless loop) */}
                    <div className="flex gap-16 items-center text-xs font-display tracking-[0.2em] text-bulldog-muted uppercase">
                        <span>Dominance</span> <span className="text-bulldog-ember">•</span>
                        <span>Power</span> <span className="text-bulldog-ember">•</span>
                        <span>Resilience</span> <span className="text-bulldog-ember">•</span>
                        <span>No Compromise</span> <span className="text-bulldog-ember">•</span>
                        <span>Dominance</span> <span className="text-bulldog-ember">•</span>
                        <span>Power</span> <span className="text-bulldog-ember">•</span>
                        <span>Resilience</span> <span className="text-bulldog-ember">•</span>
                        <span>No Compromise</span> <span className="text-bulldog-ember">•</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
