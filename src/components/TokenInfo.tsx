import React, { useState } from 'react';
import { Button } from './ui/Button';

export const TokenInfo: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const contractAddress = "Comming Soon"; // Placeholder

    const handleCopy = () => {
        navigator.clipboard.writeText("Comming Soon");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="token" className="py-32 bg-bulldog-charcoal relative overflow-hidden border-y border-white/5">

            {/* Background Noise/Texture */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

            {/* Giant decorative text */}
            <div className="absolute right-0 bottom-0 text-[15rem] leading-none font-display font-bold text-white/[0.02] select-none pointer-events-none truncate -mr-20 -mb-20">
                DATA
            </div>

            <div className="container mx-auto px-8 md:px-24 lg:px-32 relative z-10">

                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left Column: Header & Context */}
                    <div className="lg:w-1/3 space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-4">
                                <div className="w-2 h-2 bg-bulldog-ember animate-pulse"></div>
                                <span className="text-bulldog-muted font-mono text-xs tracking-widest uppercase">/ Secure Connection</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-display font-bold text-white uppercase leading-[0.9]">
                                TOKEN<br />
                                <span className="text-bulldog-bronze">METRICS</span>
                            </h2>
                        </div>

                        <p className="text-bulldog-muted text-sm leading-relaxed border-l-2 border-white/10 pl-6">
                            Optimized for absolute fairness. No team allocation. No presale.
                            Contract ownership renounced. The liquidity is locked in the bedrock.
                        </p>

                        <div className="pt-4">
                            <div className="p-1 border border-dashed border-white/20 inline-block">
                                <div className="bg-bulldog-black px-6 py-4">
                                    <span className="block text-[10px] uppercase tracking-widest text-bulldog-muted mb-1">Contract Address</span>
                                    <div className="flex items-center gap-4">
                                        <code className="text-bulldog-gold font-mono text-lg">{contractAddress}</code>
                                        <button
                                            onClick={handleCopy}
                                            className="text-white/50 hover:text-white transition-colors relative group"
                                        >
                                            {copied ? (
                                                <span className="text-bulldog-ember font-bold text-xs uppercase">COPIED</span>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: The Data Grid */}
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">

                            {/* Stat Card 1: Supply */}
                            <div className="bg-bulldog-black p-6 md:p-8 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-6 h-6 text-bulldog-bronze" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2v20M2 12h20" /></svg>
                                </div>
                                <span className="block text-xs font-mono text-bulldog-muted tracking-widest mb-2">MAX SUPPLY</span>
                                <div className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white group-hover:text-stroke-1 transition-all">1B</div>
                                <div className="w-full bg-white/5 h-1 mt-6">
                                    <div className="bg-bulldog-bronze h-full w-full"></div>
                                </div>
                            </div>

                            {/* Stat Card 2: Tax */}
                            <div className="bg-bulldog-black p-6 md:p-8 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-6 h-6 text-bulldog-bronze" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="10" /></svg>
                                </div>
                                <span className="block text-xs font-mono text-bulldog-muted tracking-widest mb-2">TAX (BUY/SELL)</span>
                                <div className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white group-hover:text-stroke-1 transition-all">0<span className="text-2xl md:text-3xl align-top opacity-50">%</span></div>
                                <div className="w-full bg-white/5 h-1 mt-6">
                                    <div className="bg-gray-500 h-full w-0"></div>
                                </div>
                            </div>

                            {/* Stat Card 3: Liquidity */}
                            <div className="bg-bulldog-black p-6 md:p-8 md:col-span-2 group relative overflow-hidden">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                    <div>
                                        <span className="block text-xs font-mono text-bulldog-muted tracking-widest mb-2">LIQUIDITY STATUS</span>
                                        <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white flex flex-wrap items-center gap-2 md:gap-4">
                                            LOCKED
                                            <span className="text-base md:text-2xl px-3 py-1 bg-bulldog-ember/20 text-bulldog-ember border border-bulldog-ember/30 rounded-sm">
                                                FOREVER
                                            </span>
                                        </div>
                                    </div>
                                    <Button variant="outline" className="shrink-0">
                                        Verify Lock
                                    </Button>
                                </div>
                                {/* Striped Background Pattern on Hover */}
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)_100%)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
