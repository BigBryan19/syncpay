"use client";

import React, { useState, useEffect } from "react";
import {
  Globe,
  Zap,
  Wallet,
  RefreshCw,
  Link as LinkIcon,
  Users,
  Activity,
  RotateCcw,
  ShieldCheck,
  Code,
  Copy,
  Check,
  Terminal,
  MapPin,
  ArrowRight,
  Layers,
  ArrowUpRight,
  Headset,
  CheckCircle2,
  FileSpreadsheet,
} from "lucide-react";

const App = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const codeSnippet = `curl -X POST https://api.fluence.com/v1/collections \\
  -H "Authorization: Bearer ${isLive ? "live" : "test"}_sk_8f92j..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 50000,
    "currency": "NGN",
    "method": "bank_transfer",
    "customer": {
      "email": "merchant@example.com"
    }
  }'`;

  return (
    <div className="bg-[#FDFBF9] min-h-screen text-[#2D241E] font-clash selection:bg-[#B68D40] selection:text-white overflow-x-hidden">
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=clash-grotesk@300,400,500,600,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');
        
        .font-clash { font-family: 'Clash Grotesk', sans-serif; }
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace !important; }
        
        /* Editorial Fine Grid Background */
        .bg-grid-pattern {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
        }
        
        .bg-grid-pattern-dark {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }

        .reveal-up {
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
          transform: translateY(40px);
        }
        
        @keyframes revealUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .editorial-card {
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }
        .editorial-card:hover {
          background-color: #EFE6DD;
          border-color: #2D241E;
        }
        .editorial-card.dark:hover {
          background-color: #B68D40;
          border-color: #B68D40;
        }
      `}</style>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? "bg-[#FDFBF9] border-stone-200 py-4" : "bg-transparent border-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div
              className={`w-8 h-8 flex items-center justify-center ${scrolled ? "bg-tobacco text-white" : "bg-white text-tobacco"} rounded`}
            >
              <Layers size={18} strokeWidth={2.5} />
            </div>
            <span
              className={`text-xl font-bold tracking-widest uppercase ${scrolled ? "text-tobacco" : "text-white"}`}
            >
              Fluence
            </span>
          </div>

          <div
            className={`hidden md:flex gap-10 font-semibold text-xs tracking-widest uppercase ${scrolled ? "text-stone-500" : "text-stone-400"}`}
          >
            <a
              href="#infrastructure"
              className={`hover:${scrolled ? "text-tobacco" : "text-white"} transition-colors`}
            >
              Infrastructure
            </a>
            <a
              href="#extracts"
              className={`hover:${scrolled ? "text-tobacco" : "text-white"} transition-colors`}
            >
              Extracts
            </a>
            <a
              href="#developers"
              className={`hover:${scrolled ? "text-tobacco" : "text-white"} transition-colors`}
            >
              Developers
            </a>
            <a
              href="#compliance"
              className={`hover:${scrolled ? "text-tobacco" : "text-white"} transition-colors`}
            >
              Trust
            </a>
          </div>

          <div className="flex gap-6 items-center">
            <button
              className={`hidden md:block text-xs font-bold uppercase tracking-widest ${scrolled ? "text-tobacco" : "text-white"} hover:opacity-70 transition-opacity`}
            >
              Log In
            </button>
            <button
              className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all ${scrolled ? "bg-tobacco text-white hover:bg-bronze" : "bg-white text-tobacco hover:bg-bronze hover:text-white"}`}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 bg-[#2D241E] text-[#FDFBF9] bg-grid-pattern-dark min-h-screen flex items-center border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-10 reveal-up">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#B68D40] rounded-none" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#B68D40]">
                Operational Across 9 Currencies
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.9] tracking-tighter uppercase">
              Get Paid <br />
              <span className="font-syne italic text-[#B68D40] font-normal tracking-tight">
                Globally.
              </span>
              <br />
              Pay Anyone, <br />
              Anywhere.
            </h1>

            <p className="text-xl md:text-2xl text-stone-400 font-medium max-w-xl leading-snug">
              The essential infrastructure for instant global payments, FX, and
              liquidity across Africa. Accept payments, manage payouts, and
              scale borders with one API.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-5 bg-[#B68D40] text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-tobacco transition-colors flex items-center justify-between gap-4">
                Initialize Account <ArrowRight size={18} />
              </button>
              <button className="px-8 py-5 bg-transparent border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:border-white transition-colors">
                Explore Docs
              </button>
            </div>
          </div>

          {/* Image & Data Mockup Combination */}
          <div
            className="lg:col-span-5 relative mt-12 lg:mt-0 reveal-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                alt="Editorial Architecture"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-[#1A1412]/50 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col">
                <div className="bg-[#1A1412]/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                  <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
                      Live Settlement Node
                    </span>
                    <div className="flex gap-2">
                      <div className="w-1.5 h-1.5 bg-stone-700 rounded-full" />
                      <div className="w-1.5 h-1.5 bg-[#B68D40] rounded-full animate-pulse" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="font-mono text-[10px] text-stone-500 tracking-widest mb-1 uppercase">
                        Ledger Balance
                      </div>
                      <div className="text-4xl font-bold tracking-tighter font-mono">
                        $142,850.00
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        {
                          id: "TRX-091A",
                          val: "+ ₦450,000",
                          stat: "SETTLED",
                          c: "#6B705C",
                        },
                        {
                          id: "TRX-093C",
                          val: "- KES 15,000",
                          stat: "PENDING",
                          c: "#A47148",
                        },
                      ].map((row, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center bg-white/5 p-3 rounded-lg"
                        >
                          <div className="font-mono text-[10px] text-stone-400">
                            {row.id}
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="font-mono text-xs text-white">
                              {row.val}
                            </div>
                            <div
                              className="font-mono text-[8px] uppercase tracking-widest"
                              style={{ color: row.c }}
                            >
                              {row.stat}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INFRASTRUCTURE (Editorial Grid) */}
      <section
        id="infrastructure"
        className="py-24 md:py-40 bg-[#FDFBF9] bg-grid-pattern border-b border-stone-200"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 reveal-up flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-stone-300 pb-12">
            <div>
              <span className="text-[#B68D40] font-bold uppercase tracking-[0.4em] text-xs block mb-6">
                Core Infrastructure
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none text-tobacco">
                Engineered <br />
                <span className="text-stone-400">Capabilities.</span>
              </h2>
            </div>
            <p className="max-w-xs text-stone-500 font-medium">
              Modular financial primitives. Build exact payment flows without
              unnecessary bloat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-stone-200">
            {/* 1. Collections */}
            <div className="editorial-card border-r border-b border-stone-200 p-10 reveal-up group flex flex-col justify-between min-h-[320px]">
              <div className="mb-12">
                <Wallet
                  className="w-8 h-8 text-stone-300 group-hover:text-tobacco transition-colors"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">
                  Collections
                </h3>
                <p className="text-stone-500 leading-relaxed text-sm">
                  Accept Bank Transfers, Mobile Money (Momo), Cards, and Crypto
                  effortlessly via one unified integration.
                </p>
              </div>
            </div>

            {/* 2. Payouts (Dark Accent Card) */}
            <div
              className="editorial-card dark bg-[#2D241E] text-white border-r border-b border-[#2D241E] p-10 reveal-up group flex flex-col justify-between min-h-[320px] relative overflow-hidden"
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="mb-12 relative z-10">
                <Zap
                  className="w-8 h-8 text-[#B68D40] group-hover:text-white transition-colors"
                  strokeWidth={1.5}
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">
                  Fastest Payouts
                </h3>
                <p className="text-stone-400 leading-relaxed text-sm group-hover:text-white/80">
                  Instant withdrawals (10-60 seconds) directly to bank accounts
                  or mobile wallets. Liquidity on demand.
                </p>
              </div>
            </div>

            {/* 3. Global Wallets */}
            <div
              className="editorial-card border-r border-b border-stone-200 p-10 reveal-up group flex flex-col justify-between min-h-[320px]"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="mb-12">
                <Globe
                  className="w-8 h-8 text-stone-300 group-hover:text-tobacco transition-colors"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">
                  Global Wallets
                </h3>
                <p className="text-stone-500 leading-relaxed text-sm">
                  Hold and manage NGN, GHS, KES, UGX, ZAR, and more in a single,
                  consolidated dashboard.
                </p>
              </div>
            </div>

            {/* 4. FX & Treasury */}
            <div className="editorial-card border-r border-b border-stone-200 p-10 reveal-up group flex flex-col justify-between min-h-[320px]">
              <div className="mb-12">
                <RefreshCw
                  className="w-8 h-8 text-stone-300 group-hover:text-tobacco transition-colors"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">
                  FX & Treasury
                </h3>
                <p className="text-stone-500 leading-relaxed text-sm">
                  Access highly competitive rates with transparent spreads
                  across 40+ global currencies.
                </p>
              </div>
            </div>

            {/* 5. Payment Links */}
            <div
              className="editorial-card border-r border-b border-stone-200 p-10 reveal-up group flex flex-col justify-between min-h-[320px]"
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="mb-12">
                <LinkIcon
                  className="w-8 h-8 text-stone-300 group-hover:text-tobacco transition-colors"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">
                  Payment Links
                </h3>
                <p className="text-stone-500 leading-relaxed text-sm">
                  No-code checkout links designed for rapid social commerce and
                  invoicing.
                </p>
              </div>
            </div>

            {/* 6. Connected Accounts */}
            <div
              className="editorial-card bg-[#EFE6DD] border-r border-b border-stone-200 p-10 reveal-up group flex flex-col justify-between min-h-[320px]"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="mb-12">
                <Users className="w-8 h-8 text-[#2D241E]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">
                  Connected Accounts
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm">
                  Marketplace infrastructure built right in. Route funds, split
                  payments, and manage multi-user environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MERCHANT LOGIC (Austere & Clean) */}
      <section className="py-24 md:py-40 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-16 reveal-up">
              <div>
                <span className="text-[#B68D40] font-bold uppercase tracking-[0.4em] text-xs block mb-6">
                  User Experience
                </span>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
                  Operational <br />
                  Logic.
                </h2>
              </div>

              <div className="space-y-0 border-t border-stone-200">
                {/* Feature Row 1 */}
                <div className="py-8 border-b border-stone-200 group flex flex-col md:flex-row gap-6 md:gap-12 md:items-start">
                  <span className="font-mono text-xs tracking-widest text-stone-400 mt-1 w-12">
                    01
                  </span>
                  <div>
                    <h4 className="text-xl font-bold tracking-tight uppercase mb-3 group-hover:text-[#B68D40] transition-colors">
                      Lifecycle Monitoring
                    </h4>
                    <p className="text-stone-500 text-sm leading-relaxed max-w-md">
                      Real-time visibility into every transaction stage. From{" "}
                      <span className="font-mono text-[10px] bg-stone-100 px-1 py-0.5 border border-stone-200 text-[#A47148]">
                        Processing
                      </span>{" "}
                      to{" "}
                      <span className="font-mono text-[10px] bg-stone-100 px-1 py-0.5 border border-stone-200 text-[#6B705C]">
                        Succeeded
                      </span>{" "}
                      or{" "}
                      <span className="font-mono text-[10px] bg-stone-100 px-1 py-0.5 border border-stone-200 text-[#7B2C2C]">
                        Refunded
                      </span>
                      .
                    </p>
                  </div>
                </div>
                {/* Feature Row 2 */}
                <div className="py-8 border-b border-stone-200 group flex flex-col md:flex-row gap-6 md:gap-12 md:items-start">
                  <span className="font-mono text-xs tracking-widest text-stone-400 mt-1 w-12">
                    02
                  </span>
                  <div>
                    <h4 className="text-xl font-bold tracking-tight uppercase mb-3 group-hover:text-[#B68D40] transition-colors">
                      Underpayment Handling
                    </h4>
                    <p className="text-stone-500 text-sm leading-relaxed max-w-md">
                      Dynamic settlement logic to intelligently manage partial
                      payments, eliminating manual reconciliation friction.
                    </p>
                  </div>
                </div>
                {/* Feature Row 3 */}
                <div className="py-8 border-b border-stone-200 group flex flex-col md:flex-row gap-6 md:gap-12 md:items-start">
                  <span className="font-mono text-xs tracking-widest text-stone-400 mt-1 w-12">
                    03
                  </span>
                  <div>
                    <h4 className="text-xl font-bold tracking-tight uppercase mb-3 group-hover:text-[#B68D40] transition-colors">
                      Asynchronous Refunds
                    </h4>
                    <p className="text-stone-500 text-sm leading-relaxed max-w-md">
                      Initiate and track refunds asynchronously via API or
                      dashboard without blocking main operational flows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-up flex items-center justify-center bg-[#EFE6DD] p-8 md:p-16 border border-stone-200">
              <div className="bg-white border border-stone-200 p-8 w-full max-w-md shadow-2xl">
                <div className="flex justify-between items-center mb-8 border-b border-stone-100 pb-4">
                  <span className="font-bold text-sm uppercase tracking-widest">
                    Live Feed
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-300"></div>
                  </div>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      t: "API Checkout",
                      s: "Partial",
                      c: "#A47148",
                      a: "$450.00",
                    },
                    {
                      t: "Invoice #0992",
                      s: "Succeeded",
                      c: "#6B705C",
                      a: "$1,200.00",
                    },
                    {
                      t: "Payment Link",
                      s: "Refunded",
                      c: "#7B2C2C",
                      a: "$89.99",
                    },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center group cursor-pointer"
                    >
                      <div>
                        <div className="font-bold text-sm group-hover:text-[#B68D40] transition-colors">
                          {row.t}
                        </div>
                        <div
                          className="font-mono text-[10px] text-stone-400 mt-1"
                          style={{ color: row.c }}
                        >
                          {row.s}
                        </div>
                      </div>
                      <div className="font-mono text-sm font-bold">{row.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3.5: EXTRACTS & REPORTING */}
      <section
        id="extracts"
        className="py-24 md:py-40 bg-[#1A1412] text-white border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Visual Editorial Image */}
            <div className="relative reveal-up order-2 lg:order-1">
              <div className="aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/10 relative shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#1A1412]/40 to-transparent z-10 opacity-80"></div>
                <img
                  src="https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=1000&q=80"
                  alt="Data Extracts Texture"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale"
                />
                <div className="absolute bottom-12 left-10 right-10 z-20">
                  <div className="flex items-center gap-3 mb-4">
                    <FileSpreadsheet className="text-[#B68D40] w-6 h-6" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#B68D40]">
                      MT940 / CSV / JSON
                    </span>
                  </div>
                  <h3 className="text-3xl font-syne font-bold leading-tight italic">
                    Automated Ledger
                    <br />
                    Reconciliation
                  </h3>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-12 reveal-up order-1 lg:order-2">
              <div>
                <span className="text-[#B68D40] font-bold uppercase tracking-[0.4em] text-xs block mb-6">
                  Data & Reporting
                </span>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase leading-none">
                  Financial <br />
                  <span className="font-syne italic font-normal text-stone-400">
                    Extracts.
                  </span>
                </h2>
              </div>
              <p className="text-xl text-stone-400 font-medium leading-relaxed max-w-lg">
                Generate, schedule, and route comprehensive financial extracts.
                We ensure perfect symmetry between your operational ledgers and
                your ultimate bank accounts.
              </p>

              <div className="space-y-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-5 group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#B68D40] transition-colors">
                    <CheckCircle2 className="text-[#B68D40] w-5 h-5 shrink-0" />
                  </div>
                  <p className="font-medium text-stone-300">
                    Customizable data schemas.
                  </p>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#B68D40] transition-colors">
                    <CheckCircle2 className="text-[#B68D40] w-5 h-5 shrink-0" />
                  </div>
                  <p className="font-medium text-stone-300">
                    Automated end-of-day (EOD) scheduling.
                  </p>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#B68D40] transition-colors">
                    <CheckCircle2 className="text-[#B68D40] w-5 h-5 shrink-0" />
                  </div>
                  <p className="font-medium text-stone-300">
                    Multi-currency aggregate roll-ups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DEVELOPER EXPERIENCE (Sharp & Brutalist) */}
      <section
        id="developers"
        className="py-24 md:py-40 bg-[#2D241E] text-white border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Code Window UI */}
            <div className="reveal-up order-2 lg:order-1">
              <div className="bg-[#1A1412] border border-white/10 flex flex-col font-mono text-sm shadow-2xl">
                {/* Editor Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-white/5">
                  <div className="text-[10px] uppercase tracking-widest text-stone-400">
                    POST /v1/collections
                  </div>

                  {/* Sandbox Toggle */}
                  <div className="flex items-center bg-black/40 p-1 border border-white/5">
                    <button
                      onClick={() => setIsLive(false)}
                      className={`px-4 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors ${!isLive ? "bg-white text-tobacco" : "text-stone-500 hover:text-white"}`}
                    >
                      Test
                    </button>
                    <button
                      onClick={() => setIsLive(true)}
                      className={`px-4 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors ${isLive ? "bg-[#B68D40] text-white" : "text-stone-500 hover:text-white"}`}
                    >
                      Live
                    </button>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="text-stone-400 hover:text-white transition-colors"
                    title="Copy code"
                  >
                    {isCopied ? (
                      <span className="text-[#B68D40] text-xs">Copied</span>
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
                {/* Code Block */}
                <div className="p-8 overflow-x-auto leading-loose text-stone-300">
                  <pre>
                    <code>
                      <span className="text-[#B68D40]">curl</span> -X POST
                      https://api.fluence.com/v1/collections \<br />
                      <span className="text-stone-500"> -H</span>{" "}
                      "Authorization: Bearer {isLive ? "live" : "test"}
                      _sk_8f92j..." \<br />
                      <span className="text-stone-500"> -H</span> "Content-Type:
                      application/json" \<br />
                      <span className="text-stone-500"> -d</span> '{"{"}
                      <br />
                      <span className="text-stone-400"> "amount"</span>: 50000,
                      <br />
                      <span className="text-stone-400"> "currency"</span>:
                      "NGN",
                      <br />
                      <span className="text-stone-400"> "method"</span>:
                      "bank_transfer",
                      <br />
                      <span className="text-stone-400"> "customer"</span>: {"{"}
                      <br />
                      <span className="text-stone-400"> "email"</span>:
                      "merchant@example.com"
                      <br />
                      {"    }"}
                      <br />
                      {"}"}'
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="space-y-12 reveal-up order-1 lg:order-2">
              <div>
                <span className="text-[#B68D40] font-bold uppercase tracking-[0.4em] text-xs block mb-6">
                  Developer Experience
                </span>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
                  Heavy
                  <br />
                  Lifting.
                </h2>
              </div>
              <p className="text-xl text-stone-400 leading-relaxed font-medium">
                A single, unified API for all African payment rails. We absorb
                the complexity of disparate local financial networks so you can
                focus entirely on your core product architecture.
              </p>

              <div className="border-t border-white/10 pt-8 space-y-8">
                <div className="flex gap-6">
                  <Code
                    className="text-stone-500 w-6 h-6 shrink-0"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h4 className="font-bold text-lg uppercase tracking-tight mb-2">
                      Real-time Webhooks
                    </h4>
                    <p className="text-sm text-stone-400 leading-relaxed">
                      Instant event notifications for state changes across your
                      entire integration lifecycle.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Terminal
                    className="text-stone-500 w-6 h-6 shrink-0"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h4 className="font-bold text-lg uppercase tracking-tight mb-2">
                      QA Sandbox Environment
                    </h4>
                    <p className="text-sm text-stone-400 leading-relaxed">
                      A completely mirrored testing grid to validate flows
                      before hitting production deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TRUST & COMPLIANCE */}
      <section id="compliance" className="py-32 bg-[#B68D40] text-[#1A1412]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center reveal-up">
          <span className="font-bold uppercase tracking-[0.5em] text-xs block mb-16 opacity-60">
            Institutional Standards
          </span>

          <div className="grid md:grid-cols-3 gap-12 text-left border-y border-[#1A1412]/20 divide-y md:divide-y-0 md:divide-x divide-[#1A1412]/20">
            <div className="py-12 md:px-8 md:py-16">
              <ShieldCheck
                className="w-8 h-8 mb-8 opacity-80"
                strokeWidth={1.5}
              />
              <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">
                Licensed & Certified
              </h4>
              <p className="font-medium opacity-80 text-sm leading-relaxed">
                Operating with top-tier licensing and strict PCI-DSS compliance
                to ensure absolute data integrity.
              </p>
            </div>
            <div className="py-12 md:px-8 md:py-16">
              <Activity className="w-8 h-8 mb-8 opacity-80" strokeWidth={1.5} />
              <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">
                99.95% Uptime
              </h4>
              <p className="font-medium opacity-80 text-sm leading-relaxed">
                High availability infrastructure with automated failovers.
                Engineering reliability you can build a business on.
              </p>
            </div>
            <div className="py-12 md:px-8 md:py-16">
              <Headset className="w-8 h-8 mb-8 opacity-80" strokeWidth={1.5} />
              <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">
                Dedicated Support
              </h4>
              <p className="font-medium opacity-80 text-sm leading-relaxed">
                Highly responsive technical support teams and dedicated account
                managers for high-volume enterprise merchants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA & LINKS */}
      <footer className="bg-[#1A1412] text-white pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Huge CTA */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-end border-b border-white/10 pb-24 mb-24 reveal-up gap-12">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tighter max-w-3xl">
              Deploy
              <br />
              <span className="text-[#B68D40]">Liquidity.</span>
            </h2>
            <button className="px-10 py-6 bg-white text-[#1A1412] text-sm font-bold uppercase tracking-widest hover:bg-[#B68D40] hover:text-white transition-colors flex items-center justify-center gap-4 w-full lg:w-auto">
              Open An Account <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 reveal-up">
            <div className="col-span-2 lg:col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white text-[#1A1412] flex items-center justify-center">
                  <Layers size={16} strokeWidth={2.5} />
                </div>
                <span className="text-xl font-bold uppercase tracking-widest">
                  Fluence
                </span>
              </div>
              <p className="text-stone-500 text-sm max-w-xs leading-relaxed">
                The essential infrastructure for global payments, FX, and
                liquidity across Africa.
              </p>
            </div>

            <div>
              <h4 className="font-mono uppercase tracking-[0.2em] text-xs mb-8 text-stone-300">
                Products
              </h4>
              <ul className="space-y-5 text-stone-500 text-sm font-medium">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Payouts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Storefront
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Invoicing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono uppercase tracking-[0.2em] text-xs mb-8 text-stone-300">
                Resources
              </h4>
              <ul className="space-y-5 text-stone-500 text-sm font-medium">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sandbox
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono uppercase tracking-[0.2em] text-xs mb-8 text-stone-300">
                Company
              </h4>
              <ul className="space-y-5 text-stone-500 text-sm font-medium">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Sales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Offices & Copyright */}
          <div className="mt-32 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-[10px] font-mono text-stone-500 uppercase tracking-[0.2em] reveal-up">
            <div className="flex flex-wrap gap-8">
              <span className="flex items-center gap-2">
                <MapPin size={12} /> Dallas
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={12} /> Lagos
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={12} /> London
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={12} /> Toronto
              </span>
            </div>
            <div>© 2026 Fluence Operations</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
