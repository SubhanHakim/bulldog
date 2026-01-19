import React from 'react';

const traits = [
    {
        id: "01",
        title: "Dominance",
        desc: "We do not compete. We set the pace. Pure market presence without compromise.",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22H22L12 2Z" fill="currentColor" />
            </svg>
        )
    },
    {
        id: "02",
        title: "Resilience",
        desc: "Built to withstand volatility. Unshakeable foundation. A fortress of value.",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" fill="currentColor" />
            </svg>
        )
    },
    {
        id: "03",
        title: "Authority",
        desc: "Serious meme assets. No jokes, just results. Command respect on every block.",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="currentColor" />
            </svg>
        )
    },
    {
        id: "04",
        title: "Integrity",
        desc: "Transparent code. Immutable trust. Rigorously secured for the long hold.",
        icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7V12C2 17 6 21 12 22C18 21 22 17 22 12V7L12 2Z" fill="currentColor" />
            </svg>
        )
    }
];

export const Represents: React.FC = () => {
    return (
        <section id="represents" className="py-32 bg-bulldog-black relative">

            {/* Background Grid Lines */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/5"></div>
                <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-white/5"></div>
            </div>

            <div className="container mx-auto px-6 md:px-24 lg:px-32 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-white/10 pb-8">
                    <div className="w-full md:w-auto">
                        <span className="block text-bulldog-ember text-sm font-mono tracking-widest mb-4">/// CORE_VALUES</span>
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase leading-none">
                            THE<br />CODE
                        </h2>
                    </div>
                    <div className="text-left md:text-right mt-8 md:mt-0 w-full md:w-auto">
                        <p className="text-bulldog-muted max-w-xs text-sm leading-relaxed">
                            The four pillars defining the new standard of crypto brutality.
                        </p>
                    </div>
                </div>

                {/* Diagonal Cards Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {traits.map((trait, index) => (
                        <div
                            key={index}
                            className={`
                    group relative bg-bulldog-charcoal border border-white/5 p-8 md:p-12 hover:bg-bulldog-ash transition-all duration-500 overflow-hidden
                    ${index % 2 !== 0 ? 'md:translate-y-16' : ''}
                `}
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-bulldog-bronze/10 blur-[50px] rounded-full group-hover:bg-bulldog-bronze/20 transition-all duration-500"></div>

                            {/* Index Number */}
                            <div className="absolute top-0 right-0 p-6 text-4xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors pointer-events-none select-none">
                                {trait.id}
                            </div>

                            {/* Icon */}
                            <div className="w-12 h-12 mb-8 text-bulldog-bronze group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                                {trait.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase group-hover:tracking-wider transition-all duration-300">
                                {trait.title}
                            </h3>

                            <div className="w-8 h-1 bg-bulldog-ember mb-6 group-hover:w-16 transition-all duration-300"></div>

                            <p className="text-bulldog-muted text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                                {trait.desc}
                            </p>

                            {/* Corner Accent */}
                            <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[20px] border-l-[20px] border-b-bulldog-bronze border-l-transparent group-hover:border-l-bulldog-bronze transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
