"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function VerixaAiLandingPage() {
  const [selectedPlan, setSelectedPlan] = useState("Growth");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");

  const handlePlanSelect = (planName) => {
    setSelectedPlan(planName);

    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async () => {
    if (!email || !link) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          link,
          plan: selectedPlan,
        }),
      });

      if (res.ok) {
        alert("Request submitted! Check your email.");
        setEmail("");
        setLink("");
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data?.error || "Something went wrong.");
      }
    } catch (error) {
      alert("Something went wrong.");
    }
  };

  const services = [
    {
      title: "Chatbot Risk Audit",
      desc: "Find hallucinations, unsafe replies, and trust-breaking mistakes before users do.",
    },
    {
      title: "LLM Evaluation",
      desc: "Measure truthfulness, consistency, refusal behavior, and reliability across real prompts.",
    },
    {
      title: "AI Agent Testing",
      desc: "Stress-test tools, instructions, and edge cases to uncover risky agent behavior.",
    },
  ];

  const testimonials = [
    {
      name: "Aarav Mehta",
      location: "Bengaluru, India",
      text: "Verixa AI helped us catch hallucinations we completely missed during internal testing. The report was clear and actionable.",
    },
    {
      name: "Emily Carter",
      location: "Austin, Texas",
      text: "We used Verixa before launch and found risky prompt behaviors early. It saved us from shipping a weak experience.",
    },
    {
      name: "Rohit Sharma",
      location: "Hyderabad, India",
      text: "The audit gave us exactly what we needed — clear risk visibility, fast turnaround, and real examples of failures.",
    },
    {
      name: "Daniel Kim",
      location: "Seoul, South Korea",
      text: "The prompt injection findings were especially valuable. Verixa made our AI product feel much safer before release.",
    },
    {
      name: "Sophia Martinez",
      location: "Barcelona, Spain",
      text: "Simple process, strong report, and very founder-friendly. It felt like a real product risk review, not generic feedback.",
    },
    {
      name: "Nikhil Verma",
      location: "Pune, India",
      text: "The results were easy to understand and helped our team prioritize the biggest AI reliability issues first.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070b1b] text-white">
      <div className="border-b border-white/10 bg-white py-2 text-center text-sm font-medium text-black">
        Limited free audits this week • First 10 startups get a free AI risk scan
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b1b]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 text-lg font-bold text-white">
              V
            </div>
            <div>
              <div className="text-lg font-semibold text-white">Verixa AI</div>
              <div className="text-xs text-white/60">
                AI risk and hallucination detection
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Early Access
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-sm font-medium text-white"
          >
            Get Free Scan
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
              Detect hallucinations. Uncover risky AI behavior.
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">
              See what your AI
              <br />
              <span className="bg-gradient-to-r from-white via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                gets wrong before users do.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Verixa AI helps startups and product teams detect hallucinations,
              prompt injection failures, unsafe behavior, and trust-breaking
              mistakes in chatbots, LLMs, and AI agents.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 font-semibold text-white"
              >
                Get Free AI Risk Scan
              </a>
              <a
                href="#pricing"
                className="rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-white"
              >
                View Early Access
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["50+", "AI systems tested"],
                ["120+", "Hallucinations found"],
                ["24h", "Fastest turnaround"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="text-2xl font-semibold text-white">
                    {value}
                  </div>
                  <div className="mt-1 text-sm text-white/60">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
          >
            <div className="rounded-[24px] border border-white/10 bg-[#08111f] p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-sm text-white/50">Live audit snapshot</div>
                  <div className="text-xl font-semibold text-white">
                    Support Agent Audit
                  </div>
                </div>
                <div className="rounded-full border border-red-300/20 bg-red-400/10 px-3 py-1 text-xs text-red-200">
                  High risk
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-4">
                  <p className="font-semibold text-cyan-200">
                    Hallucination detected
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Generated a refund policy that does not exist in official
                    documentation.
                  </p>
                </div>

                <div className="rounded-2xl border border-violet-300/20 bg-violet-400/10 p-4">
                  <p className="font-semibold text-violet-200">
                    Prompt injection risk
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    The agent revealed internal instructions after a malicious
                    prompt chain.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <p className="font-semibold text-white">Recommendation</p>
                  <p className="mt-1 text-sm text-white/70">
                    Improve grounding, restrict tool outputs, and strengthen
                    refusal policies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16"
      >
        <h2 className="text-center text-3xl font-semibold text-white">
          What We Do
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 leading-7 text-white/70">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="pricing"
        className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16"
      >
        <h2 className="text-center text-3xl font-semibold text-white">
          Early Access Plans
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-center text-white/60">
          We’re onboarding a limited number of startups with priority AI audits
          and early access to our upcoming monitoring system.
        </p>

        <div className="mt-4 text-center text-sm text-cyan-300">
          ⚡ Early users get priority audits and direct support
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold text-white">Starter</h3>
            <p className="mt-2 text-4xl font-bold text-white">$29</p>

            <p className="mt-2 text-sm text-white/60">
              For early-stage startups testing AI features
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/75">
              <li>• 1 audit (manual + expert review)</li>
              <li>• 10–15 test prompts</li>
              <li>• Hallucination detection</li>
              <li>• Basic risk analysis</li>
              <li>• 24–48h delivery</li>
            </ul>

            <button
              type="button"
              onClick={() => handlePlanSelect("Starter")}
              className="mt-6 block w-full rounded-xl border border-white/15 bg-white/[0.04] py-3 text-center font-semibold text-white hover:bg-white/[0.08]"
            >
              Get Free Audit
            </button>
          </div>

          <div className="rounded-[28px] border border-cyan-300/30 bg-gradient-to-b from-cyan-400/10 to-violet-500/10 p-6">
            <div className="mb-3 inline-block rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
              🔥 Most Popular
            </div>

            <h3 className="text-xl font-semibold text-white">Growth</h3>
            <p className="mt-2 text-4xl font-bold text-white">$99</p>

            <p className="mt-2 text-sm text-white/60">
              For teams preparing AI systems for production
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/75">
              <li>• Full audit (manual + advanced testing)</li>
              <li>• 50+ test scenarios</li>
              <li>• Hallucination + injection testing</li>
              <li>• Risk scoring + recommendations</li>
              <li>• Detailed PDF report</li>
              <li>• Priority turnaround</li>
            </ul>

            <button
              type="button"
              onClick={() => handlePlanSelect("Growth")}
              className="mt-6 block w-full rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 py-3 text-center font-semibold text-white"
            >
              Request Audit
            </button>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold text-white">Enterprise</h3>
            <p className="mt-2 text-4xl font-bold text-white">Custom</p>

            <p className="mt-2 text-sm text-white/60">
              For production systems and ongoing monitoring
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/75">
              <li>• Custom test coverage</li>
              <li>• Advanced red teaming</li>
              <li>• Continuous evaluation (coming soon)</li>
              <li>• Priority support</li>
              <li>• Custom reporting</li>
            </ul>

            <button
              type="button"
              onClick={() => handlePlanSelect("Enterprise")}
              className="mt-6 block w-full rounded-xl border border-white/15 bg-white/[0.04] py-3 text-center font-semibold text-white hover:bg-white/[0.08]"
            >
              Contact Us
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-white/50">
          🚀 Early access users will get discounted pricing when automation
          features are launched
        </p>
      </section>

      <section className="mx-auto max-w-6xl overflow-hidden px-6 py-16">
        <h2 className="text-center text-3xl font-semibold text-white">
          What Early Users Say
        </h2>
        <p className="mt-3 text-center text-white/60">
          Trusted by founders and product teams building AI features.
        </p>

        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#070b1b] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#070b1b] to-transparent" />

          <div className="flex w-max animate-testimonial-marquee gap-6">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="w-[340px] shrink-0 rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
              >
                <p className="text-sm leading-7 text-white/75">“{item.text}”</p>

                <div className="mt-6">
                  <div className="text-sm font-semibold text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-white/50">{item.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 mx-auto max-w-3xl px-6 py-16"
      >
        <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 text-center">
          <h2 className="text-3xl font-semibold text-white">
            {selectedPlan === "Starter" &&
              "Request Starter Early Access Audit"}
            {selectedPlan === "Growth" &&
              "Request Growth Early Access Audit"}
            {selectedPlan === "Enterprise" &&
              "Request Enterprise Consultation"}
          </h2>

          <p className="mt-3 text-white/60">
            {selectedPlan === "Starter" &&
              "You’re requesting the Starter plan for an early-stage AI audit."}
            {selectedPlan === "Growth" &&
              "You’re requesting the Growth plan for deeper testing and production-focused evaluation."}
            {selectedPlan === "Enterprise" &&
              "You’re requesting Enterprise onboarding for custom coverage and ongoing evaluation."}
          </p>

          <div className="mb-6 mt-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
            Selected Plan: {selectedPlan}
          </div>

          <div className="space-y-4">
            <input
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0a1323] p-3 text-white outline-none"
            />
            <input
              placeholder="Your AI product link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0a1323] p-3 text-white outline-none"
            />
            <button
              onClick={handleSubmit}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 p-3 font-semibold text-white"
            >
              Request Free Scan
            </button>
          </div>
        </div>
      </section>

      <footer className="mt-20 border-t border-white/10 bg-[#050814]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 text-sm font-bold text-white shadow-[0_0_24px_rgba(34,211,238,0.18)]">
                  V
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">
                    Verixa AI
                  </div>
                  <div className="text-xs text-white/50">
                    AI risk and hallucination detection
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
                We detect hallucinations, unsafe outputs, prompt injection
                failures, and risky AI agent behavior before your users do.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#contact"
                  className="rounded-lg border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-400/20"
                >
                  Request Free Scan
                </a>
                <a
                  href="#pricing"
                  className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:text-white"
                >
                  View Pricing
                </a>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Pages</div>
              <div className="mt-5 space-y-3 text-sm text-white/60">
                <div>
                  <a href="#services" className="transition hover:text-white">
                    Services
                  </a>
                </div>
                <div>
                  <a href="#pricing" className="transition hover:text-white">
                    Early Access
                  </a>
                </div>
                <div>
                  <a href="#contact" className="transition hover:text-white">
                    Contact
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Contact</div>
              <div className="mt-5 space-y-3 text-sm text-white/60">
                <div>hello@verixa.ai</div>
                <div>Fast AI risk audits</div>
                <div>24–48 hour turnaround</div>
              </div>
            </div>
          </div>

          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

          <div className="mt-6 flex flex-col gap-3 text-center text-sm text-white/45 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Verixa AI. All rights reserved.</div>
            <div className="flex items-center justify-center gap-5">
              <a href="#" className="transition hover:text-white">
                Privacy
              </a>
              <a href="#" className="transition hover:text-white">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}