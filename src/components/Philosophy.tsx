import React from 'react';

export const Philosophy: React.FC = () => {
    return (
        <section id="philosophy" className="py-32 bg-bulldog-black relative overflow-hidden">

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bulldog-bronze/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-bulldog-ash/10 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Massive Background Typography */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[20vw] font-display font-bold text-white/[0.02] leading-none select-none pointer-events-none whitespace-nowrap z-0">
                SILENCE
            </div>

            <div className="container mx-auto px-6 md:px-24 lg:px-32 relative z-10">

                {/* Header Composition */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-20 border-b border-white/10 pb-8 md:pb-12 relative">
                    <div className="absolute -left-4 top-0 w-1 h-20 bg-bulldog-ember hidden md:block"></div>

                    <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white leading-[0.9] md:leading-[0.85] tracking-tight mb-8 md:mb-0 w-full md:w-auto">
                        <span className="block text-stroke-1 text-white/30 text-2xl md:text-4xl lg:text-5xl mb-2 tracking-widest pl-1">THE VOW</span>
                        SILENCE<br />
                        <span className="text-bulldog-bronze">IS LOUDER.</span>
                    </h2>

                    <div className="flex flex-col items-end gap-2 text-right">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 bg-bulldog-ember rounded-full animate-pulse"></span>
                            <span className="text-bulldog-muted font-mono text-xs tracking-widest uppercase">Live Transmission</span>
                        </div>
                        <div className="text-bulldog-muted/40 font-mono text-[10px] uppercase tracking-widest max-w-[150px]">
                            Freq: 0.0001Hz <br />
                            Status: Dormant <br />
                            Threat: Max
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-12 gap-12">

                    {/* Empty Spacer Column */}
                    <div className="hidden md:block md:col-span-4">
                        {/* Decorative Graphic */}
                        <div className="w-full h-full border-l border-white/5 relative opacity-30">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-white to-transparent"></div>
                            <div className="absolute top-10 left-0 w-6 h-[1px] bg-white"></div>
                            <div className="absolute top-12 left-0 w-4 h-[1px] bg-white"></div>
                        </div>
                    </div>

                    {/* Main Text */}
                    <div className="md:col-span-8 space-y-8 relative">
                        {/* Tech Border */}
                        <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block"></div>
                        <div className="absolute -left-8 top-0 w-2 h-2 bg-white hidden md:block"></div>
                        <div className="absolute -left-8 bottom-0 w-2 h-2 bg-bulldog-bronze hidden md:block"></div>

                        <p className="text-2xl md:text-3xl text-white font-medium leading-tight">
                            In a market filled with noise, screaming mascots, and empty promises, <span className="text-bulldog-amber text-white border-b border-bulldog-ember">BULLDOG stands still.</span>
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 text-bulldog-muted text-sm md:text-base leading-relaxed font-light">
                            <p>
                                We do not beg for attention. We command it. Built for those who understand that true value is held, not hyped. This is the embodiment of unyielding strength.
                            </p>
                            <p>
                                A digital asset carved from bedrock. No playful gimmicks. Only raw authority. When the dogs bark, the bull simply watches.
                            </p>
                        </div>

                        <div className="pt-8">
                            <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 text-white font-display uppercase tracking-widest text-sm hover:bg-bulldog-bronze hover:border-bulldog-bronze transition-colors cursor-default">
                        /// End Transmission
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
