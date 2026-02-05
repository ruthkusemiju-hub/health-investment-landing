import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

      {/* HERO */}
      <section className="px-6 py-20 md:px-8 md:py-28 bg-gradient-to-br from-[#f0fdf9] via-[#f0fdfa] to-[#ecfdf5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="subheading">Proactive Wellness</span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] text-gray-900">
              Invest in Your Health <span className="text-gradient">Before</span> It Becomes Urgent
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              This page is about daily health habits and personal responsibility.
              <br/>
              No products. No financial offers. No medical advice.
              <br/>
              Reactive care is the most expensive kind—money, energy, and focus disappear fast.
              <br/>
              A calm, daily protocol keeps you ahead of crisis and frees you to pursue bigger goals.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://partner.co/en-us/shop/product/tahitian-noni"
                className="btn-primary"
              >
                Build daily health stability
              </a>

              <a
                href="https://chat.whatsapp.com/DMyIoIUx6CnKbH0WEBOKW7"
                className="btn-secondary"
              >
                Read real stories
              </a>
            </div>

            <p className="mt-8 text-sm text-gray-500 flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Consistent care compounds the same way any other asset does.
            </p>
          </div>

          <div className="relative w-full h-[380px] media-container shadow-2xl">
            <video
              src="https://7pflqsdt4w7xnalr.public.blob.vercel-storage.com/Hero%20Video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* PREVENTION */}
      <section className="px-6 py-20 md:px-8 md:py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="relative w-full h-[320px]">
            <Image
              src="/images/hospital-health.png"
              alt="Prevent hosptial visits"
              fill
              className="object-contain"
            />
          </div>

          <div>
            <span className="subheading">Personal Protection</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Prevention Protects Both Body and Balance Sheet
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              When you delay, manageable issues become urgent—and urgent care always carries a premium.
            </p>

            <ul className="mt-6 styled-list text-gray-600">
              <li>One hospital stay can undo years of steady progress.</li>
              <li>Medication plans quietly erode monthly cash flow.</li>
              <li>Emergency care taxes your family emotionally and logistically.</li>
            </ul>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Build protective routines now so "health" does not become your largest surprise expense.
              Imagine the breathing room if sickness was rare instead of routine.
            </p>
          </div>

        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto"></div>

      {/* HOSPITAL AWARENESS */}
      <section className="px-6 py-20 md:px-8 md:py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="subheading">System Reality</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Hospitals resolve crises. They are not designed to manage daily health.
            </h2>

            <div className="mt-6 space-y-3 text-gray-600">
              <p className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">●</span>
                Doctors are operating at capacity.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">●</span>
                Facilities are stretched by preventable cases.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">●</span>
                Queue times creep upward every quarter.
              </p>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">
              The system is doing its best. Reality still requires personal responsibility.
            </p>

            <ul className="mt-6 check-list text-gray-600">
              <li>One physician often manages hundreds of patients a week.</li>
              <li>Most visits are tied to lifestyle, not rare disease.</li>
              <li>Many appointments could disappear with proactive routines.</li>
            </ul>

            <p className="mt-6 text-gray-700 font-medium">
              Daily maintenance keeps hospitals in their intended role—a safety net, not a second home.
            </p>
          </div>

          <div className="relative w-full h-[380px] media-container">
            <video
              src="https://7pflqsdt4w7xnalr.public.blob.vercel-storage.com/Hospitals%20were%20built%20to%20treat%20sickness.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-20 md:px-8 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="subheading">Daily Protocol</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Consistency Outperforms Intensity Every Time
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Forget elaborate protocols. The basics, executed daily, build resilient health.
          </p>
        </div>

        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            { img: "routine-1.png", title: "Hydrate With Intention", desc: "Clean water stabilizes focus and mood." },
            { img: "routine-3.png", title: "Nourish On Purpose", desc: "Balanced meals keep blood sugar and cravings in check." },
            { img: "routine-4.png", title: "Protect Recovery", desc: "Quality sleep repairs immune, cognitive, and metabolic systems." },
            { img: "routine-2.png", title: "Move Strategically", desc: "Steady movement circulates nutrients and clears stress hormones." },
          ].map((item) => (
            <div key={item.title} className="card-elevated text-center group">
              <div className="relative w-full h-[200px] rounded-lg overflow-hidden mb-5">
                <Image
                  src={`/images/${item.img}`}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}

        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            Modest habits, repeated relentlessly, outperform heroic bursts every time.
          </p>

          <p className="mt-4 text-gray-700 font-medium">
            Choose one habit you could keep for the next decade and anchor it today.
          </p>
        </div>
      </section>

      {/* INSURANCE */}
      <section className="px-6 py-20 md:px-8 md:py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="relative w-full h-[320px]">
            <Image
              src="/images/health-costs.png"
              alt="Prevent hosptial costs"
              fill
              className="object-contain"
            />
          </div>

          <div>
            <span className="subheading">Health Risk Reduction</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Insurance reimburses. Prevention reduces risk.
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Coverage is valuable, but it does not eliminate downtime, discomfort, or disruption.
            </p>

            <p className="mt-5 text-gray-600">
              Proactive health dramatically cuts:
            </p>

            <ul className="mt-4 check-list text-gray-600">
              <li>Doctor visits</li>
              <li>Prescriptions</li>
              <li>Emergency expenses</li>
              <li>Time lost to sickness</li>
            </ul>

            <p className="mt-6 text-gray-700 font-medium leading-relaxed">
              Early investors in wellness don't just feel better—they protect income, flexibility, and peace of mind.
            </p>
          </div>

        </div>
      </section>

      {/* BODY AWARENESS */}
      <section className="px-6 py-20 md:px-8 md:py-24 bg-gradient-to-br from-[#f0fdf9] via-[#f0fdfa] to-[#ecfdf5]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="subheading">Body Intelligence</span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Your body gives advance notice. Modern life teaches us to mute it.
            </h3>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <span className="text-xl">⚡</span>
                <p className="text-gray-600">Persistent fatigue signals recovery debt.</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <span className="text-xl">🔄</span>
                <p className="text-gray-600">Digestive issues warn of imbalance.</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <span className="text-xl">🛡️</span>
                <p className="text-gray-600">Recurring colds highlight immune exhaustion.</p>
              </div>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">
              When you understand your patterns, you intervene early.
            </p>

            <ul className="mt-5 styled-list text-gray-600">
              <li>You schedule rest before burnout.</li>
              <li>You fortify immunity before breakdown.</li>
              <li>You adjust routines before a crisis forms.</li>
            </ul>

            <p className="mt-6 text-gray-900 font-semibold">
              Awareness in motion is the most reliable healthcare plan available.
            </p>
          </div>

          <div className="relative w-full h-[320px] media-container">
            <Image
              src="/images/body-awareness.png"
              alt="Wellness lifestyle"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* STORIES */}
      <section className="px-6 py-20 md:px-8 md:py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="relative w-full h-[320px]">
            <Image
              src="/images/health-testimonials.png"
              alt="Prevent hosptial visits"
              fill
              className="object-contain"
            />
          </div>

          <div>
            <span className="subheading">Community Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Real families. Real routines. Practical outcomes.
            </h2>

            <p className="mt-5 text-gray-600">These are not celebrity wellness gurus.</p>
            <p className="mt-2 text-gray-600">They are neighbors who needed reliable habits that fit real life.</p>

            <p className="mt-6 text-gray-700 font-medium">Each story has the same foundation:</p>
            <ul className="mt-4 styled-list text-gray-600">
              <li>Purposeful routines.</li>
              <li>Data-informed lifestyle tweaks.</li>
              <li>Decisions made with the long view in mind.</li>
            </ul>

            <div className="mt-6 p-5 bg-gray-50 rounded-xl border-l-4 border-emerald-500">
              <p className="text-gray-700 font-medium">The result?</p>
              <p className="mt-2 text-gray-600">More capacity for wealth-building work. Sharper judgment when opportunities appear. Stability that holds up even when life accelerates.</p>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL HERO */}
      <section className="px-6 py-20 md:px-8 md:py-28 bg-gradient-to-br from-[#f0fdf9] via-[#ecfdf5] to-[#d1fae5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="subheading">Take Action</span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight">
              Health is the foundation for <span className="text-gradient">every other option</span> you want.
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              The sooner you stabilize your body, the faster you can scale relationships, wealth, and work.
            </p>

            <ul className="mt-6 check-list text-gray-700 text-lg">
              <li>A resilient body extends your runway.</li>
              <li>Steady energy unlocks better strategy.</li>
              <li>Options multiply when you are not negotiating with fatigue.</li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://partner.co/en-us/shop/product/tahitian-noni"
                className="btn-primary"
              >
                Start with one small change today
              </a>

              <a
                href="https://chat.whatsapp.com/DMyIoIUx6CnKbH0WEBOKW7"
                className="btn-secondary"
              >
                Learn from people who practice preventive health
              </a>
            </div>

            <p className="mt-8 text-sm text-gray-500 flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              The most successful plans start before the alarm bells ring.
            </p>
          </div>

          <div className="relative w-full h-[380px]">
            <Image
              src="/images/health-community.png"
              alt="A Healthy community"
              fill
              className="object-contain"
              priority
            />
          </div>

        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://chat.whatsapp.com/DMyIoIUx6CnKbH0WEBOKW7"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float fixed bottom-6 right-6 z-50"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Chat with us
      </a>

    </main>
  );
}
