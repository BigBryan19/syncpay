"use client";
import React, { useState, useEffect } from "react";
import {
  Layers,
  ArrowDown,
  Cpu,
  Zap,
  ShieldCheck,
  Database,
  Globe,
  Lock,
  Activity,
  Sparkles,
  Instagram,
  Twitter,
  Image as LucideImage,
} from "lucide-react";

const App = () => {
  const [renderedArtifacts, setRenderedArtifacts] = useState({});
  const [isRendering, setIsRendering] = useState(false);

  const apiKey = ""; // Environment provided API key

  // Scroll Reveal Animation Hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const artifactRegistry = {
    tee: "Ultra-premium studio fashion shot of a minimalist boxy heavyweight organic cotton t-shirt in deep tobacco brown. Small white 'FLUENCE' typography on chest. High contrast lighting, luxury streetwear look.",
    cap: "Extreme close-up of a structured 6-panel tobacco twill baseball cap. Polished bronze 3D embroidery of a minimalist geometric logo. Cinematic lighting.",
    card: "Hyper-realistic matte black obsidian metal credit card with laser-etched bronze minimalist typography. Resting on a dark granite surface with sharp, dramatic edge lighting.",
    ledger:
      "Luxury dark tobacco leather-bound journal. Embossed 'LEDGER' text on the cover. Cream parchment paper edges visible. Top-down aesthetic lighting.",
    tote: "Heavy 24oz off-white canvas tote bag. Reinforced dark tobacco leather handles with bronze hardware. High-end industrial aesthetic.",
    bottle:
      "Sleek matte tobacco brown insulated steel water bottle. Metallic bronze screw-top cap. Sharp studio product photography, dramatic shadows.",
    "social-insta":
      "Avant-garde social media layout. Massive Syne italic font saying 'FLUID' over a deep tobacco background with abstract geometric blueprint lines.",
    "social-x":
      "High-contrast Twitter feed post. Bold white Clash Grotesk typography over a deep bronze background. Minimalist layout with grid lines.",
  };

  const renderAllArtifacts = async () => {
    if (isRendering) return;
    setIsRendering(true);
    const keys = Object.keys(artifactRegistry);
    const newRenders = { ...renderedArtifacts };

    await Promise.all(
      keys.map(async (key) => {
        if (newRenders[key]) return;
        try {
          const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                instances: [{ prompt: artifactRegistry[key] }],
                parameters: { sampleCount: 1 },
              }),
            },
          );
          const data = await response.json();
          if (data.predictions && data.predictions[0]) {
            newRenders[key] =
              `data:image/png;base64,${data.predictions[0].bytesBase64Encoded}`;
          }
        } catch (err) {
          console.error(`Render failed for ${key}`, err);
        }
      }),
    );

    setRenderedArtifacts(newRenders);
    setIsRendering(false);
  };

  return (
    <div className="bg-[#FDFBF9] min-h-screen text-[#2D241E] font-clash selection:bg-[#B68D40] selection:text-white overflow-x-hidden">
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,400,600,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;800&family=JetBrains+Mono:wght@400;700&display=swap');
        
        .font-clash { font-family: 'Clash Grotesk', sans-serif; }
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace !important; }
        
        .reveal {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
        }
        .marquee-content {
          display: inline-block;
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>

      {/* 00. COVER */}
      <section className="min-h-screen flex flex-col justify-between p-8 md:p-16 lg:p-24 relative bg-[#2D241E] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#B68D40] blur-[200px] rounded-full" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#B68D40] rounded-2xl flex items-center justify-center shadow-2xl">
              <Layers className="text-white w-8 h-8" />
            </div>
            <span className="text-3xl font-extrabold tracking-tighter uppercase font-syne">
              Fluence
            </span>
          </div>
          <div className="font-mono text-xs tracking-[0.5em] opacity-40 uppercase">
            Operational Brand Archive v3.2
          </div>
        </div>
        <div className="relative z-10 mt-32 md:mt-auto">
          <h1 className="text-[15vw] lg:text-[12vw] font-syne font-extrabold leading-[0.8] tracking-tighter uppercase mb-12">
            BRAND
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px #B68D40" }}
            >
              BOOK
            </span>
          </h1>
          <div className="flex flex-col lg:flex-row justify-between lg:items-end border-t border-white/10 pt-12 gap-8">
            <p className="text-2xl lg:text-4xl font-medium text-stone-400 italic max-w-3xl leading-snug">
              The comprehensive visual architecture for the next century of
              global liquidity movement.
            </p>
            <div className="flex flex-col items-center gap-4 text-[#B68D40] animate-bounce">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
                Scroll to Explore
              </span>
              <ArrowDown size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* 01. MANIFESTO */}
      <section className="py-32 px-8 md:px-16 lg:px-32 bg-[#1A1412] text-white">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-8 space-y-12 reveal">
            <span className="text-[#B68D40] font-bold uppercase tracking-[0.5em] text-xs">
              01. THE MANIFESTO
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter uppercase">
              The Quiet
              <br />
              <span className="font-syne italic text-stone-600">Roar of</span>
              <br />
              <span className="text-[#B68D40]">Trust.</span>
            </h2>
            <p className="text-2xl md:text-3xl text-stone-400 leading-relaxed font-medium max-w-3xl">
              Fluence represents the intersection of historical safety and
              light-speed innovation. We orchestrate capital across a global
              grid with absolute precision. We don't build tools; we curate
              financial atmospheres.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-center justify-center relative reveal">
            <div className="w-full max-w-md aspect-square border border-white/5 rounded-full flex items-center justify-center p-8">
              <div className="w-full h-full border border-dashed border-[#B68D40]/30 rounded-full animate-spin-slow flex items-center justify-center">
                <Cpu size={80} strokeWidth={0.5} className="text-[#B68D40]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. TYPOGRAPHY */}
      <section className="py-32 bg-[#FDFBF9] text-[#2D241E] border-b border-stone-200">
        <div className="px-8 md:px-16 lg:px-32 reveal mb-24">
          <span className="text-[#B68D40] font-bold uppercase tracking-[0.5em] text-xs">
            02. TYPOGRAPHY
          </span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mt-6">
            Structural Logic.
          </h2>
        </div>

        <div className="space-y-32">
          {/* Clash Grotesk */}
          <div className="px-8 md:px-16 lg:px-32 reveal">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-300 pb-8 mb-12 gap-4">
              <span className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
                Clash Grotesk
              </span>
              <span className="font-mono text-xs opacity-40 uppercase tracking-widest">
                Foundation / Structural Variable
              </span>
            </div>
            <div className="text-[15vw] font-bold leading-[0.8] tracking-tighter uppercase break-words overflow-hidden">
              STABLE
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "2px #2D241E" }}
              >
                ROBUST
              </span>
              <br />
              LIQUID
            </div>
            <p className="mt-12 text-xl md:text-2xl text-stone-500 max-w-4xl leading-relaxed">
              The structural foundation. Geometric, variable, and authoritative.
              Used for interface headers, numerical data, and massive brand
              statements.
            </p>
          </div>

          {/* Syne */}
          <div className="px-8 md:px-16 lg:px-32 reveal">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-300 pb-8 mb-12 gap-4">
              <span className="font-syne text-3xl md:text-5xl font-bold uppercase tracking-tight">
                Syne
              </span>
              <span className="font-mono text-xs opacity-40 uppercase tracking-widest">
                Identity / Distinction
              </span>
            </div>
            <div className="font-syne text-[12vw] font-extrabold italic tracking-tighter text-[#B68D40] uppercase leading-none break-words">
              Flow is Power
            </div>
            <p className="mt-12 text-xl md:text-2xl text-stone-500 max-w-4xl leading-relaxed">
              The distinct identity voice. Avant-garde and stylized. Used
              exclusively for high-impact brand statements, italic highlights,
              and creative titles.
            </p>
          </div>
        </div>
      </section>

      {/* 03. COLOR SYSTEM */}
      <section className="py-32 px-8 md:px-16 lg:px-32 bg-[#2D241E] text-white">
        <div className="reveal mb-24">
          <span className="text-[#B68D40] font-bold uppercase tracking-[0.5em] text-xs">
            03. COLOR SYSTEM
          </span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mt-6">
            Pigment Architecture.
          </h2>
        </div>

        {/* Primary Palette */}
        <div className="space-y-16">
          <h3 className="font-mono text-sm tracking-[0.4em] uppercase opacity-50 border-b border-white/10 pb-6 reveal">
            Core Brand Palette
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Tobacco",
                hex: "#2D241E",
                desc: "Brand Anchor. Professional & deep.",
              },
              {
                name: "Bronze",
                hex: "#B68D40",
                desc: "Kinetic Accent. Guides the eye.",
              },
              {
                name: "Pale Oak",
                hex: "#EFE6DD",
                desc: "Neutral Surface. Light contrast.",
                light: true,
              },
            ].map((item, i) => (
              <div
                key={item.name}
                className={`reveal bg-white/5 border border-white/10 rounded-[3rem] p-10 flex flex-col justify-between group overflow-hidden relative ${item.light ? "text-[#2D241E] bg-[#EFE6DD] border-none" : ""}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative z-10">
                  <h4 className="text-4xl lg:text-5xl font-syne font-bold uppercase italic">
                    {item.name}
                  </h4>
                  <code
                    className={`font-mono text-sm mt-4 block tracking-widest ${item.light ? "opacity-60" : "opacity-40"}`}
                  >
                    {item.hex}
                  </code>
                </div>
                <div className="mt-16 relative z-10">
                  <p
                    className={`text-lg font-medium ${item.light ? "text-stone-600" : "text-stone-400"}`}
                  >
                    {item.desc}
                  </p>
                </div>
                <div
                  className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700"
                  style={{ backgroundColor: item.hex }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Palette */}
        <div className="space-y-16 mt-32">
          <h3 className="font-mono text-sm tracking-[0.4em] uppercase opacity-50 border-b border-white/10 pb-6 reveal">
            Heritage Semantics (Functional)
          </h3>
          <p className="text-2xl text-stone-400 font-medium max-w-3xl reveal">
            Status colors derived from natural pigments to maintain
            institutional warmth across dashboards and interfaces.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: "Muted Sage", h: "#6B705C", s: "SUCCESS / APPROVED" },
              { n: "Burnt Sienna", h: "#A47148", s: "WARNING / PENDING" },
              { n: "Deep Crimson", h: "#7B2C2C", s: "ERROR / FAILED" },
            ].map((item, i) => (
              <div
                key={item.n}
                className="reveal p-10 bg-[#1A1412] border border-white/5 rounded-[3rem] flex flex-col items-center text-center space-y-8"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="w-32 h-32 rounded-[2rem] shadow-2xl"
                  style={{ backgroundColor: item.h }}
                />
                <div>
                  <h5 className="text-3xl font-bold uppercase italic tracking-tighter">
                    {item.n}
                  </h5>
                  <code className="text-stone-500 font-mono text-[10px] block mt-4 tracking-[0.2em] uppercase">
                    {item.h} // {item.s}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. PRINCIPLES & USAGE */}
      <section className="py-32 px-8 md:px-16 lg:px-32 bg-[#FDFBF9] text-[#2D241E]">
        <div className="reveal mb-24">
          <span className="text-[#B68D40] font-bold uppercase tracking-[0.5em] text-xs">
            04. GUIDELINES
          </span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mt-6">
            The Heritage Ethos.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-24">
            <div className="reveal border-t border-stone-200 pt-12">
              <span className="text-[#B68D40] font-mono text-xs tracking-[0.4em]">
                PRINCIPLE 01
              </span>
              <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mt-6 mb-4">
                Negative Space
                <br />
                as Luxury
              </h3>
              <p className="text-xl text-stone-500 leading-relaxed">
                Interface clarity is respect. We use space as a signal of
                institutional wealth. Avoid clutter; if a component feels busy,
                increase padding.
              </p>
            </div>
            <div className="reveal border-t border-stone-200 pt-12">
              <span className="text-[#B68D40] font-mono text-xs tracking-[0.4em]">
                PRINCIPLE 02
              </span>
              <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mt-6 mb-4">
                Geometric
                <br />
                Integrity
              </h3>
              <p className="text-xl text-stone-500 leading-relaxed">
                Exact alignment is a reflection of perfect ledgers. We anchor
                strictly to mathematical logic. No arbitrary placements.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="reveal bg-[#2D241E] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl flex flex-col justify-center text-white h-full min-h-[400px]">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-48 bg-[#B68D40] rounded-l-full shadow-[0_0_40px_rgba(182,141,64,0.6)]" />
              <div className="space-y-12 relative z-10">
                <h4 className="text-3xl font-syne italic font-bold uppercase">
                  The Notch Logic
                </h4>
                <p className="text-stone-400 font-medium">
                  Always utilize the active indicator notch in sidebars. It is
                  our signature signal of operational focus and security.
                </p>
                <div className="space-y-6 opacity-50">
                  <div className="w-full h-4 bg-white/20 rounded-full" />
                  <div className="w-3/4 h-4 bg-white/20 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. ICONOGRAPHY */}
      <section className="py-32 px-8 md:px-16 lg:px-32 bg-[#1A1412] text-white">
        <div className="reveal mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div>
            <span className="text-[#B68D40] font-bold uppercase tracking-[0.5em] text-xs">
              05. ICONOGRAPHY
            </span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mt-6">
              Blueprint Set.
            </h2>
          </div>
          <div className="font-mono text-xs opacity-40 uppercase tracking-widest text-right">
            1.2pt Stroke Weight
            <br />
            Geometric Primitives
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[
            { i: Zap, label: "Velocity" },
            { i: ShieldCheck, label: "Vault" },
            { i: Database, label: "Ledger" },
            { i: Globe, label: "Network" },
            { i: Lock, label: "Secure" },
            { i: Activity, label: "Flow" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="reveal aspect-square bg-white/5 border border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center shadow-2xl transition-all hover:scale-105 hover:border-[#B68D40] group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <item.i
                size={64}
                strokeWidth={1}
                className="text-[#B68D40] transition-all group-hover:stroke-[1.5pt]"
              />
              <span className="mt-8 font-mono text-[10px] uppercase tracking-widest opacity-30 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 06. MERCHANDISE / ARTIFACTS */}
      <section className="py-32 px-8 md:px-16 lg:px-32 bg-[#FDFBF9] text-[#2D241E]">
        <div className="reveal flex flex-col lg:flex-row justify-between lg:items-end gap-12 mb-24 border-b border-stone-200 pb-12">
          <div className="space-y-6">
            <span className="text-[#B68D40] font-bold uppercase tracking-[0.5em] text-xs">
              06. PHYSICAL ARCHIVE
            </span>
            <h2 className="text-6xl md:text-8xl font-syne font-extrabold italic uppercase tracking-tighter leading-none">
              Engineered
              <br />
              Tangibles.
            </h2>
            <p className="max-w-2xl text-2xl text-stone-500 font-medium">
              We do not produce "swag." We engineer artifacts of the Heritage
              brand—physical assets for the global merchant class.
            </p>
          </div>
          <button
            onClick={renderAllArtifacts}
            disabled={isRendering}
            className="px-12 py-8 bg-[#B68D40] text-white font-extrabold rounded-3xl text-sm uppercase tracking-[0.3em] shadow-2xl hover:scale-105 hover:bg-[#9a7736] transition-all flex items-center justify-center gap-4 w-full lg:w-auto disabled:opacity-80 disabled:hover:scale-100 cursor-pointer z-50 border-4 border-[#B68D40]/30"
          >
            {isRendering ? (
              <>
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />{" "}
                Curating...
              </>
            ) : (
              <>
                <Sparkles size={24} /> Render Artifacts
              </>
            )}
          </button>
        </div>

        {/* Artifacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {[
            {
              id: "tee",
              title: "The Fluent Tee",
              desc: "400GSM organic cotton. Boxy heritage fit.",
            },
            {
              id: "cap",
              title: "The Heritage Cap",
              desc: "Structured tobacco twill. 3D bronze embroidery.",
            },
            {
              id: "card",
              title: "Obsidian Card",
              desc: "Laser-etched metal for high-volume merchants.",
              dark: true,
            },
            {
              id: "ledger",
              title: "The Ledger",
              desc: "Heritage stationery for the record-keeper.",
            },
            {
              id: "tote",
              title: "Canvas Tote",
              desc: "Organic canvas with reinforced leather trim.",
            },
            {
              id: "bottle",
              title: "Heritage Vessel",
              desc: "Matte tobacco vacuum steel for daily travel.",
            },
          ].map((item, i) => (
            <div
              key={item.id}
              className="reveal group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`aspect-square rounded-[3rem] overflow-hidden relative flex items-center justify-center mb-8 border border-stone-200 shadow-lg ${item.dark ? "bg-[#2D241E]" : "bg-stone-100"}`}
              >
                {renderedArtifacts[item.id] ? (
                  <img
                    src={renderedArtifacts[item.id]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 animate-in fade-in zoom-in"
                  />
                ) : (
                  <div
                    className={`text-center space-y-4 ${item.dark ? "text-white/10" : "text-stone-300"}`}
                  >
                    <LucideImage
                      size={80}
                      strokeWidth={1}
                      className="mx-auto"
                    />
                    <p className="font-mono text-xs uppercase tracking-[0.5em]">
                      Awaiting Render
                    </p>
                  </div>
                )}
              </div>
              <div className="px-4 border-l-2 border-[#B68D40]">
                <h4 className="text-2xl font-bold uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-stone-500 mt-2 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 07. SOCIAL MEDIA */}
      <section className="py-32 px-8 md:px-16 lg:px-32 bg-[#2D241E] text-white overflow-hidden">
        <div className="reveal mb-24 flex flex-col md:flex-row justify-between md:items-end gap-8 border-b border-white/10 pb-12">
          <div>
            <span className="text-[#B68D40] font-bold uppercase tracking-[0.5em] text-xs">
              07. SOCIAL DISCOURSE
            </span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mt-6">
              Digital Layouts.
            </h2>
          </div>
          <div className="flex flex-col md:items-end gap-4">
            <p className="text-xl text-stone-400 font-medium italic max-w-md md:text-right">
              Typography must be the primary visual signal. Never use generic
              stock imagery.
            </p>
            <button
              onClick={renderAllArtifacts}
              disabled={isRendering}
              className="px-8 py-4 bg-white/10 text-white font-extrabold rounded-xl text-xs uppercase tracking-[0.2em] hover:bg-white/20 transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-80"
            >
              {isRendering ? "Rendering..." : "Render Social Specimens"}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="reveal space-y-8">
            <div className="flex items-center gap-4 text-[#B68D40]">
              <Instagram size={24} />{" "}
              <span className="font-mono text-xs tracking-widest uppercase">
                Instagram Framework
              </span>
            </div>
            <div className="aspect-[4/5] bg-white/5 border border-white/10 rounded-[3rem] p-8 flex items-center justify-center overflow-hidden">
              {renderedArtifacts["social-insta"] ? (
                <img
                  src={renderedArtifacts["social-insta"]}
                  className="w-full h-full object-cover rounded-[2rem] shadow-2xl"
                />
              ) : (
                <span className="font-mono text-stone-600 tracking-[0.4em] uppercase text-sm">
                  Render via Artifacts Button
                </span>
              )}
            </div>
          </div>

          <div className="reveal delay-200 space-y-8 lg:mt-32">
            <div className="flex items-center gap-4 text-[#B68D40]">
              <Twitter size={24} />{" "}
              <span className="font-mono text-xs tracking-widest uppercase">
                X (Twitter) Framework
              </span>
            </div>
            <div className="aspect-square bg-white/5 border border-white/10 rounded-[3rem] p-8 flex items-center justify-center overflow-hidden">
              {renderedArtifacts["social-x"] ? (
                <img
                  src={renderedArtifacts["social-x"]}
                  className="w-full h-full object-cover rounded-[2rem] shadow-2xl"
                />
              ) : (
                <span className="font-mono text-stone-600 tracking-[0.4em] uppercase text-sm">
                  Render via Artifacts Button
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 08. OUTRO */}
      <footer className="py-40 px-8 md:px-16 lg:px-32 bg-[#1A1412] flex flex-col items-center justify-center text-center relative overflow-hidden text-white min-h-[80vh]">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none marquee-container">
          <div className="marquee-content font-syne text-[25vw] font-extrabold uppercase italic leading-none">
            FLUENCE HERITAGE FLUENCE HERITAGE
          </div>
        </div>

        <div className="space-y-16 relative z-10 w-full max-w-4xl mx-auto">
          <h2 className="text-[15vw] md:text-[10vw] font-syne font-extrabold italic uppercase leading-[0.8] tracking-tighter text-[#B68D40] animate-pulse">
            Stay
            <br />
            Fluent.
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-12">
            <button className="px-12 py-6 bg-white text-[#2D241E] font-extrabold rounded-full text-xs md:text-sm uppercase tracking-[0.4em] shadow-2xl hover:scale-105 transition-all">
              Download Assets
            </button>
            <button className="px-12 py-6 bg-white/5 border border-white/10 text-white font-extrabold rounded-full text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-white/10 transition-all">
              Internal Wiki
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 w-full px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-[0.5em] opacity-40">
          <span>© 2024 Fluence Operations Group</span>
          <span>Archive Complete // SECURE</span>
        </div>
      </footer>

      {/* Floating Render Button (Always Visible) */}
      <button
        onClick={renderAllArtifacts}
        disabled={isRendering}
        className="fixed bottom-12 right-12 z-[100] px-8 py-5 bg-[#B68D40] text-white rounded-full shadow-[0_20px_50px_rgba(182,141,64,0.6)] hover:scale-105 hover:bg-[#9a7736] transition-all flex items-center gap-4 font-bold uppercase tracking-[0.2em] text-xs border border-white/20 backdrop-blur-md cursor-pointer disabled:opacity-80 disabled:hover:scale-100"
      >
        {isRendering ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />{" "}
            Generating Images...
          </>
        ) : (
          <>
            <Sparkles size={20} /> Generate Visuals
          </>
        )}
      </button>
    </div>
  );
};

export default App;