export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Slack Summaries
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop drowning in{" "}
          <span className="text-[#58a6ff]">long Slack threads</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Slack Thread Digest AI automatically summarizes lengthy discussions,
          surfaces key decisions, and extracts action items — so your team stays
          aligned without reading every message.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">
          Cancel anytime. Works with any Slack workspace.
        </p>

        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            {
              icon: "⚡",
              title: "Auto-triggered summaries",
              desc: "Summaries fire automatically when a thread exceeds your message threshold."
            },
            {
              icon: "🎯",
              title: "Decisions & action items",
              desc: "OpenAI extracts what was decided and who owns next steps."
            },
            {
              icon: "📬",
              title: "Delivered in Slack",
              desc: "Summaries post directly to the thread or a dedicated digest channel."
            }
          ].map((f) => (
            <div
              key={f.title}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-5"
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">
            Pro
          </p>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Slack workspaces",
              "AI summaries via OpenAI GPT-4o",
              "Key decisions & action item extraction",
              "Configurable thread length threshold",
              "Dashboard + Slack delivery",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Subscribe Now
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to Slack?",
              a: "You install the app via Slack OAuth. It requests read access to channels you choose and posts summaries back using a bot token — no message data is stored."
            },
            {
              q: "When does a summary get generated?",
              a: "By default, a summary is triggered when a thread reaches 20 replies. You can adjust this threshold per channel from your dashboard."
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes, cancel anytime from your Lemon Squeezy customer portal. Access continues until the end of your billing period."
            }
          ].map((item) => (
            <div
              key={item.q}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-5"
            >
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Slack Thread Digest AI. All rights reserved.
      </footer>
    </main>
  );
}
