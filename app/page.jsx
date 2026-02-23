"use client";

import React, { useState, useEffect, use } from "react";
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
  CheckCircle2,
  Headset,
} from "lucide-react";

const App = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
        @import url('https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,400,500,600,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');
        
        .font-clash { font-family: 'Clash Grotesk', sans-serif; }
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace !important; }
        
        .bg-tobacco { background-color: #2D241E; }
        .text-tobacco { color: #2D241E; }
        .bg-bronze { background-color: #B68D40; }
        .text-bronze { color: #B68D40; }
        .bg-parchment { background-color: #FDFBF9; }
        .bg-oak { background-color: #EFE6DD; }
        
        .bento-card {
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .bento-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(45, 36, 30, 0.08);
          border-color: #B68D40;
        }

        .abstract-node {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        .pulse-ring {
          animation: pulse-ring 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); box-shadow: 0 0 0 0 rgba(182, 141, 64, 0.5); }
          70% { transform: scale(1); box-shadow: 0 0 0 30px rgba(182, 141, 64, 0); }
          100% { transform: scale(0.8); box-shadow: 0 0 0 0 rgba(182, 141, 64, 0); }
        }
      `}</style>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#FDFBF9]/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-bronze rounded-xl flex items-center justify-center shadow-lg">
              <Layers className="text-white w-5 h-5" />
            </div>
            <span
              className={`text-2xl font-extrabold tracking-tighter uppercase font-syne ${scrolled ? "text-tobacco" : "text-white"}`}
            >
              Fluence
            </span>
          </div>
          <div
            className={`hidden md:flex gap-8 font-medium text-sm ${scrolled ? "text-stone-600" : "text-stone-300"}`}
          >
            <a href="#features" className="hover:text-bronze transition-colors">
              Platform
            </a>
            <a
              href="#developers"
              className="hover:text-bronze transition-colors"
            >
              Developers
            </a>
            <a
              href="#compliance"
              className="hover:text-bronze transition-colors"
            >
              Company
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <button
              className={`hidden md:block text-sm font-bold uppercase tracking-widest ${scrolled ? "text-tobacco" : "text-white"} hover:text-bronze transition-colors`}
            >
              Sign In
            </button>
            <button className="px-6 py-2.5 bg-bronze text-white rounded-full text-xs font-extrabold uppercase tracking-[0.2em] shadow-lg hover:bg-[#9a7736] transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* SECTION 1: THE HERO */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 bg-tobacco text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Abstract Background / Node Animation */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-[-10%] w-[50vw] h-[50vw] bg-bronze/20 blur-[150px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#EFE6DD]/10 blur-[120px] rounded-full" />

          {/* Animated Nodes */}
          <div className="hidden lg:block absolute top-1/3 right-32 abstract-node">
            <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center pulse-ring">
              <div className="w-16 h-16 bg-bronze rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(182,141,64,0.8)]">
                <Zap className="text-white w-6 h-6" />
              </div>
            </div>
          </div>
          <div
            className="hidden lg:block absolute bottom-1/4 right-1/4 abstract-node"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
                <Globe className="text-bronze w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-300">
                Live on 9 Currencies
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-syne font-extrabold leading-[1.05] tracking-tight uppercase">
              Get Paid <span className="text-bronze italic">Globally.</span>
              <br />
              Pay Anyone,{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px white" }}
              >
                Anywhere.
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-stone-400 font-medium max-w-2xl leading-relaxed">
              The essential infrastructure for instant global payments, FX, and
              liquidity across Africa. Accept payments, manage payouts, and
              scale borders with one API.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="px-8 py-4 bg-bronze text-white rounded-full text-sm font-extrabold uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(182,141,64,0.4)] hover:bg-[#9a7736] hover:scale-105 transition-all flex items-center justify-center gap-3">
                Get Started <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full text-sm font-extrabold uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center">
                Talk to Sales
              </button>
            </div>
          </div>

          {/* Hero Mockup */}
          <div className="lg:col-span-4 relative mt-12 lg:mt-0 reveal">
            <div
              className="bg-[#1A1412] border border-white/10 rounded-[2.5rem] p-6 shadow-2xl relative z-10 abstract-node"
              style={{ animationDuration: "8s" }}
            >
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400">
                  Live Settlement
                </span>
                <Activity className="text-bronze w-4 h-4" />
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] uppercase font-bold text-stone-500 tracking-widest mb-1">
                    Available Balance
                  </div>
                  <div className="text-4xl font-bold font-mono tracking-tight">
                    $142,850.00
                  </div>
                </div>
                <div className="space-y-3 pt-4 border-t border-white/5">
                  {[
                    {
                      id: "FL-091",
                      amount: "+ ₦450,000",
                      status: "Succeeded",
                      color: "#6B705C",
                    },
                    {
                      id: "FL-092",
                      amount: "+ GHS 8,200",
                      status: "Succeeded",
                      color: "#6B705C",
                    },
                    {
                      id: "FL-093",
                      amount: "- KES 15,000",
                      status: "Processing",
                      color: "#A47148",
                    },
                  ].map((tx, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-3 rounded-xl bg-white/5"
                    >
                      <div>
                        <div className="font-mono text-[10px] text-stone-400">
                          {tx.id}
                        </div>
                        <div className="text-xs font-bold mt-1 text-white">
                          {tx.amount}
                        </div>
                      </div>
                      <div
                        className="px-2 py-1 rounded border text-[8px] font-bold uppercase tracking-wider flex items-center gap-1.5"
                        style={{
                          color: tx.color,
                          borderColor: `${tx.color}40`,
                          backgroundColor: `${tx.color}10`,
                        }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: tx.color }}
                        />
                        {tx.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE BENTO GRID */}
      <section id="features" className="py-24 md:py-32 bg-parchment relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 reveal">
            <span className="text-bronze font-bold uppercase tracking-[0.5em] text-xs block mb-4">
              Core Infrastructure
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-extrabold tracking-tighter uppercase leading-none text-tobacco">
              Everything you need.
              <br />
              Nothing you don't.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
            {/* 1. Collections */}
            <div className="bento-card reveal bg-white rounded-[2.5rem] p-8 border border-stone-200 shadow-sm flex flex-col justify-between group">
              <div className="w-14 h-14 bg-oak rounded-2xl flex items-center justify-center text-tobacco mb-8 group-hover:scale-110 transition-transform">
                <Wallet className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                  Collections
                </h3>
                <p className="text-stone-500 font-medium">
                  Accept Bank Transfers, Mobile Money (Momo), Cards, and Crypto
                  effortlessly via one unified integration.
                </p>
              </div>
            </div>

            {/* 2. Fastest Payouts */}
            <div className="bento-card reveal bg-tobacco text-white rounded-[2.5rem] p-8 border border-white/5 shadow-xl flex flex-col justify-between group lg:col-span-2 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-bronze/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative z-10 w-14 h-14 bg-bronze rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7" />
              </div>
              <div className="relative z-10 max-w-lg">
                <h3 className="text-3xl font-bold mb-3 tracking-tight font-syne italic">
                  Fastest Payouts
                </h3>
                <p className="text-stone-400 font-medium text-lg">
                  Instant withdrawals (10-60 seconds) directly to bank accounts
                  or mobile wallets. Liquidity when you actually need it.
                </p>
              </div>
            </div>

            {/* 3. Multi-Currency Wallets */}
            <div className="bento-card reveal bg-white rounded-[2.5rem] p-8 border border-stone-200 shadow-sm flex flex-col justify-between group">
              <div className="w-14 h-14 bg-oak rounded-2xl flex items-center justify-center text-tobacco mb-8 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                  Global Wallets
                </h3>
                <p className="text-stone-500 font-medium">
                  Hold and manage NGN, GHS, KES, UGX, ZAR, and more in a single,
                  consolidated dashboard.
                </p>
              </div>
            </div>

            {/* 4. FX & Treasury */}
            <div className="bento-card reveal bg-white rounded-[2.5rem] p-8 border border-stone-200 shadow-sm flex flex-col justify-between group">
              <div className="w-14 h-14 bg-oak rounded-2xl flex items-center justify-center text-tobacco mb-8 group-hover:scale-110 transition-transform">
                <RefreshCw className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                  FX & Treasury
                </h3>
                <p className="text-stone-500 font-medium">
                  Access highly competitive rates with transparent spreads
                  across 40+ global currencies.
                </p>
              </div>
            </div>

            {/* 5. Payment Links */}
            <div className="bento-card reveal bg-white rounded-[2.5rem] p-8 border border-stone-200 shadow-sm flex flex-col justify-between group">
              <div className="w-14 h-14 bg-oak rounded-2xl flex items-center justify-center text-tobacco mb-8 group-hover:scale-110 transition-transform">
                <LinkIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                  Payment Links
                </h3>
                <p className="text-stone-500 font-medium">
                  No-code checkout links designed for rapid social commerce and
                  invoicing.
                </p>
              </div>
            </div>

            {/* 6. Connected Accounts */}
            <div className="bento-card reveal bg-oak rounded-[2.5rem] p-8 border border-stone-200 flex flex-col justify-between group lg:col-span-3">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between w-full h-full">
                <div className="max-w-xl">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-tobacco mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    <Users className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3 tracking-tight">
                    Connected Accounts
                  </h3>
                  <p className="text-stone-600 font-medium text-lg">
                    Marketplace infrastructure built right in. Route funds,
                    split payments, and manage multi-user environments
                    seamlessly.
                  </p>
                </div>
                <div className="w-full md:w-auto bg-white rounded-2xl p-6 border border-stone-200 shadow-lg flex-1 md:max-w-xs space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center font-bold text-xs">
                      M1
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-stone-200 rounded-full w-full mb-2" />
                      <div className="h-2 bg-emerald-500 rounded-full w-3/4" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center font-bold text-xs">
                      M2
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-stone-200 rounded-full w-full mb-2" />
                      <div className="h-2 bg-emerald-500 rounded-full w-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MERCHANT FEATURES */}
      <section className="py-24 md:py-32 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12 reveal">
              <div>
                <span className="text-bronze font-bold uppercase tracking-[0.5em] text-xs block mb-4">
                  Merchant Experience
                </span>
                <h2 className="text-4xl md:text-5xl font-syne font-extrabold tracking-tighter uppercase leading-none">
                  Built for Operational Logic.
                </h2>
              </div>
              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-oak flex items-center justify-center shrink-0 group-hover:bg-bronze group-hover:text-white transition-colors">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold tracking-tight mb-2">
                      Lifecycle Monitoring
                    </h4>
                    <p className="text-stone-500 font-medium leading-relaxed">
                      Real-time visibility into every transaction stage. From{" "}
                      <span className="font-mono text-xs bg-stone-100 px-1 rounded text-[#A47148]">
                        Processing
                      </span>{" "}
                      to{" "}
                      <span className="font-mono text-xs bg-stone-100 px-1 rounded text-[#6B705C]">
                        Succeeded
                      </span>{" "}
                      or{" "}
                      <span className="font-mono text-xs bg-stone-100 px-1 rounded text-[#7B2C2C]">
                        Refunded
                      </span>
                      .
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-oak flex items-center justify-center shrink-0 group-hover:bg-bronze group-hover:text-white transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold tracking-tight mb-2">
                      Underpayment Handling
                    </h4>
                    <p className="text-stone-500 font-medium leading-relaxed">
                      Dynamic settlement logic to intelligently handle partial
                      payments, reducing manual reconciliation friction.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-oak flex items-center justify-center shrink-0 group-hover:bg-bronze group-hover:text-white transition-colors">
                    <RotateCcw className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold tracking-tight mb-2">
                      Asynchronous Refunds
                    </h4>
                    <p className="text-stone-500 font-medium leading-relaxed">
                      Initiate and track refunds asynchronously via API or
                      dashboard without blocking main operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative reveal">
              <div className="absolute inset-0 bg-bronze/5 blur-[100px] rounded-full" />
              <div className="bg-parchment border border-stone-200 rounded-[3rem] p-8 md:p-12 shadow-2xl relative z-10">
                <div className="flex justify-between items-center mb-8 border-b border-stone-200 pb-6">
                  <span className="font-bold text-lg">Transaction Feed</span>
                  <span className="text-xs font-mono text-stone-400">
                    Updated Just Now
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      t: "Invoice #0992",
                      s: "Succeeded",
                      c: "#6B705C",
                      d: "Today, 14:02",
                    },
                    {
                      t: "API Checkout",
                      s: "Partial",
                      c: "#A47148",
                      d: "Today, 11:45",
                    },
                    {
                      t: "Payment Link",
                      s: "Refunded",
                      c: "#7B2C2C",
                      d: "Yesterday",
                    },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-4 bg-white border border-stone-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center">
                          <Layers className="w-4 h-4 text-stone-400" />
                        </div>
                        <div>
                          <div className="font-bold text-sm">{row.t}</div>
                          <div className="text-[10px] text-stone-400">
                            {row.d}
                          </div>
                        </div>
                      </div>
                      <div
                        className="px-3 py-1 rounded bg-stone-50 border font-mono text-[10px] uppercase font-bold tracking-widest"
                        style={{ color: row.c, borderColor: `${row.c}30` }}
                      >
                        {row.s}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DEVELOPER EXPERIENCE */}
      <section
        id="developers"
        className="py-24 md:py-32 bg-tobacco text-white overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-bronze/10 blur-[200px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 reveal">
              <div>
                <span className="text-bronze font-bold uppercase tracking-[0.5em] text-xs block mb-4">
                  Developer Experience
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-extrabold tracking-tighter uppercase leading-none">
                  Designed for Developers.
                  <br />
                  Built for Reliability.
                </h2>
              </div>
              <p className="text-xl text-stone-400 font-medium leading-relaxed">
                A single, unified API for all African payment rails. We handle
                the complexity of local financial grids so you can focus on
                building your product.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 pt-6">
                <div>
                  <Code className="text-bronze w-6 h-6 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Real-time Webhooks</h4>
                  <p className="text-sm text-stone-400">
                    Instant event notifications for state changes across your
                    integration.
                  </p>
                </div>
                <div>
                  <Terminal className="text-bronze w-6 h-6 mb-4" />
                  <h4 className="font-bold text-lg mb-2">QA Sandbox</h4>
                  <p className="text-sm text-stone-400">
                    A mirrored testing environment to validate flows before
                    hitting production.
                  </p>
                </div>
              </div>
            </div>

            {/* Code Window UI */}
            <div className="reveal">
              <div className="bg-[#1A1412] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
                {/* Editor Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-white/5 bg-black/20">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>

                  {/* Sandbox Toggle */}
                  <div className="flex items-center bg-black/40 rounded-full p-1 border border-white/5">
                    <button
                      onClick={() => setIsLive(false)}
                      className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${!isLive ? "bg-white text-tobacco shadow-sm" : "text-stone-500 hover:text-white"}`}
                    >
                      Sandbox
                    </button>
                    <button
                      onClick={() => setIsLive(true)}
                      className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${isLive ? "bg-bronze text-white shadow-sm" : "text-stone-500 hover:text-white"}`}
                    >
                      Live
                    </button>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="text-stone-400 hover:text-white transition-colors"
                    title="Copy to clipboard"
                  >
                    {isCopied ? (
                      <Check size={16} className="text-emerald-500" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
                {/* Code Block */}
                <div className="p-6 overflow-x-auto text-sm leading-loose">
                  <pre className="font-mono">
                    <code className="text-stone-300">
                      <span className="text-[#B68D40]">curl</span> -X POST
                      https://api.fluence.com/v1/collections \<br />
                      <span className="text-stone-500"> -H</span>{" "}
                      <span className="text-[#EFE6DD]">
                        "Authorization: Bearer {isLive ? "live" : "test"}
                        _sk_8f92j..."
                      </span>{" "}
                      \<br />
                      <span className="text-stone-500"> -H</span>{" "}
                      <span className="text-[#EFE6DD]">
                        "Content-Type: application/json"
                      </span>{" "}
                      \<br />
                      <span className="text-stone-500"> -d</span>{" "}
                      <span className="text-emerald-400">'{"{"}</span>
                      <br />
                      <span className="text-blue-300"> "amount"</span>:{" "}
                      <span className="text-purple-400">50000</span>,<br />
                      <span className="text-blue-300"> "currency"</span>:{" "}
                      <span className="text-[#EFE6DD]">"NGN"</span>,<br />
                      <span className="text-blue-300"> "method"</span>:{" "}
                      <span className="text-[#EFE6DD]">"bank_transfer"</span>,
                      <br />
                      <span className="text-blue-300"> "customer"</span>: {"{"}
                      <br />
                      <span className="text-blue-300"> "email"</span>:{" "}
                      <span className="text-[#EFE6DD]">
                        "merchant@example.com"
                      </span>
                      <br />
                      {"    }"}
                      <br />
                      <span className="text-emerald-400"> {"}"}'</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TRUST & COMPLIANCE */}
      <section
        id="compliance"
        className="py-24 bg-oak border-y border-stone-200"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center reveal">
          <span className="text-bronze font-bold uppercase tracking-[0.5em] text-xs block mb-12">
            Institutional Standards
          </span>
          <div className="grid md:grid-cols-3 gap-12 text-left divide-y md:divide-y-0 md:divide-x divide-stone-300">
            <div className="md:px-8 pt-8 md:pt-0">
              <ShieldCheck className="w-10 h-10 text-bronze mb-6" />
              <h4 className="text-2xl font-bold mb-3 tracking-tight">
                Licensed & Certified
              </h4>
              <p className="text-stone-600 font-medium">
                Bank-grade security. Operating with top-tier licensing and
                PCI-DSS compliance to ensure data integrity.
              </p>
            </div>
            <div className="md:px-8 pt-8 md:pt-0">
              <Activity className="w-10 h-10 text-bronze mb-6" />
              <h4 className="text-2xl font-bold mb-3 tracking-tight">
                99.95% Uptime
              </h4>
              <p className="text-stone-600 font-medium">
                High availability infrastructure with automated failovers.
                Reliability you can build a business on.
              </p>
            </div>
            <div className="md:px-8 pt-8 md:pt-0">
              <Headset className="w-10 h-10 text-bronze mb-6" />
              <h4 className="text-2xl font-bold mb-3 tracking-tight">
                Dedicated Support
              </h4>
              <p className="text-stone-600 font-medium">
                Responsive technical support and dedicated account managers for
                high-volume enterprise merchants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA & LINKS */}
      <footer className="bg-[#1A1412] text-white pt-32 pb-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-bronze/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Massive CTA */}
          <div className="text-center mb-32 reveal">
            <h2 className="text-5xl md:text-7xl font-syne font-extrabold italic uppercase leading-[0.9] tracking-tighter mb-8">
              Ready to simplify
              <br />
              your operations?
            </h2>
            <button className="px-10 py-5 bg-bronze text-white rounded-full text-sm font-extrabold uppercase tracking-[0.2em] shadow-[0_10px_40px_rgba(182,141,64,0.3)] hover:bg-[#9a7736] hover:scale-105 transition-all">
              Open An Account Today
            </button>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 border-t border-white/10 pt-16 reveal">
            <div className="col-span-2 lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-bronze rounded-xl flex items-center justify-center">
                  <Layers className="text-white w-5 h-5" />
                </div>
                <span className="text-2xl font-bold uppercase font-syne tracking-tighter">
                  Fluence
                </span>
              </div>
              <p className="text-stone-500 font-medium max-w-sm">
                The essential infrastructure for global payments, FX, and
                liquidity across Africa.
              </p>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-stone-300">
                Products
              </h4>
              <ul className="space-y-4 text-stone-500 font-medium text-sm">
                <li>
                  <a href="#" className="hover:text-bronze transition-colors">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-bronze transition-colors">
                    Payouts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-bronze transition-colors">
                    Storefront
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-bronze transition-colors">
                    Invoicing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-stone-300">
                Resources
              </h4>
              <ul className="space-y-4 text-stone-500 font-medium text-sm">
                <li>
                  <a href="#" className="hover:text-bronze transition-colors">
                    API Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-bronze transition-colors">
                    Developer Sandbox
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-bronze transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-bronze transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-stone-300">
                Company
              </h4>
              <ul className="space-y-4 text-stone-500 font-medium text-sm">
                <li>
                  <a href="#" className="hover:text-bronze transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-bronze transition-colors">
                    Contact Sales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-bronze transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-bronze transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Offices & Copyright */}
          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono text-stone-500 uppercase tracking-widest reveal">
            <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Dallas
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Lagos
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> London
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Toronto
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
