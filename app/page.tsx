"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Bug, Sparkles, Zap } from "lucide-react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fix AI Code - We Fix Your AI-Generated Code Fast</title>
        <meta
          name="description"
          content="Fix AI code errors fast. We debug and repair your AI-generated projects from ChatGPT, Copilot, or any AI tool. Let AI write — we fix."
        />
        <meta
          name="keywords"
          content="fix ai code, debug ai project, ai bug fix, ai coding help, code repair"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="min-h-screen bg-slate-950 text-white">
        {/* HERO SECTION */}
        <section className="text-center py-28 bg-gradient-to-b from-slate-900 to-slate-950">
          <motion.h1
            className="text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Fix Your <span className="text-blue-500">AI-Generated Code</span> in
            Minutes
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Got buggy code from ChatGPT, Copilot, Claude or xAI? We debug and
            make your AI-generated projects run smoothly — fast.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 rounded-2xl shadow-lg shadow-blue-500/20">
              Fix My AI Code Now
            </Button>
          </motion.div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Bug size={36} />,
              title: "AI Bug Fixing",
              desc: "We fix bugs and broken logic in AI-generated code from any language or framework.",
            },
            {
              icon: <Sparkles size={36} />,
              title: "Optimization",
              desc: "We refactor messy AI code into clean, production-ready solutions.",
            },
            {
              icon: <Zap size={36} />,
              title: "Fast Delivery",
              desc: "Get your project fixed and running within hours, not days.",
            },
          ].map((f, i) => (
            <Card key={i} className="bg-slate-900 border-slate-800">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto text-blue-500">{f.icon}</div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 bg-slate-900 px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Submit Your Bug",
                desc: "Upload your AI-generated code or describe the issue.",
              },
              {
                step: "2",
                title: "We Debug It",
                desc: "Our devs analyze, fix, and test your code.",
              },
              {
                step: "3",
                title: "You Get It Running",
                desc: "Receive clean, working code with explanation.",
              },
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="text-blue-500 text-5xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Developers Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Minh Tran",
                text: "My React app from ChatGPT wouldn’t even start. FixAICode solved it in 3 hours!",
              },
              {
                name: "Anna Nguyen",
                text: "Amazing! They explained exactly what was wrong with my AI script and made it clean.",
              },
            ].map((t, i) => (
              <Card key={i} className="bg-slate-900 border-slate-800 text-left">
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4 italic">“{t.text}”</p>
                  <p className="text-blue-400 font-semibold">— {t.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section className="py-24 bg-slate-900 text-center">
          <h2 className="text-3xl font-bold mb-10">Simple Pricing</h2>
          <Card className="bg-slate-800 border-slate-700 max-w-md mx-auto">
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold mb-4">Bug Fix Package</h3>
              <p className="text-5xl font-bold mb-4">$29</p>
              <p className="text-gray-400 mb-6">Per issue or small project</p>
              <ul className="space-y-3 mb-6 text-left text-gray-300">
                {[
                  "Fix any AI-generated code bug",
                  "Get a clean working solution",
                  "Quick turnaround (within hours)",
                  "Developer feedback included",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="text-blue-500" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg rounded-xl">
                Get Started
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-10 text-center">FAQ</h2>
          <div className="space-y-6">
            {[
              {
                q: "What kind of code can you fix?",
                a: "We handle any AI-generated code from ChatGPT, Copilot, Claude, etc. — Python, JavaScript, React, Node.js, etc.",
              },
              {
                q: "How fast will I get results?",
                a: "Most fixes are completed within 2–6 hours depending on project complexity.",
              },
              {
                q: "Is my code safe?",
                a: "Yes. We treat your code confidentially and never share it with anyone.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-semibold text-xl mb-2">{item.q}</h3>
                <p className="text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 border-t border-slate-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} FixAICode — All rights reserved.
        </footer>
      </main>
    </>
  );
}
