import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="px-4 py-16 md:px-6 md:py-24 bg-[#eef7f5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Health Is an Investment, Not a Last-Minute Decision
            </h1>

            <p className="mt-6 text-lg">
              Most people only pay attention to their health when something goes wrong.
              By then, the cost is higher — financially, emotionally, and physically.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://partner.co/en-us/shop/product/tahitian-noni"
                className="bg-green-600 text-white px-6 py-3 rounded"
              >
                Start investing in your health today
              </a>

              <a
                href="https://chat.whatsapp.com/DMyIoIUx6CnKbH0WEBOKW7"
                className="border border-green-600 text-green-600 px-6 py-3 rounded"
              >
                Read real stories from everyday people
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-600">
              Your Health Is an Investment, Not an Emergency Expense
            </p>
          </div>

          <div className="relative w-full h-[340px] rounded-lg overflow-hidden">
            <video
              src="https://7pflqsdt4w7xnalr.public.blob.vercel-storage.com/hero-video.mp4"
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
      <section className="px-4 py-16 md:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="relative w-full h-[300px]">
            <Image
              src="/images/hospital-health.png"
              alt="Prevent hosptial visits"
              fill
              className="object-contain"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              Prevention Is Better and Cheaper Than Cure
            </h2>

            <p className="mt-4 text-gray-700">
              You already know this. But most people still wait.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
              <li>Hospital visits cost more than daily care</li>
              <li>Medication drains income over time</li>
              <li>Emergency treatment creates emotional stress</li>
            </ul>

            <p className="mt-4 text-gray-700">
              Preventive habits reduce long-term damage before it becomes expensive to fix.

              What would your finances look like if sickness was rare, not routine?
            </p>
          </div>

        </div>
      </section>

      {/* HOSPITAL AWARENESS */}
      <section className="px-4 py-16 md:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
            <video
              src="/images/hospital-awareness.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              Hospitals were built to treat sickness, not manage daily health
            </h2>

            <p className="mt-4 text-gray-700">
              Doctors are overwhelmed.
              Facilities are stretched thin.
              Waiting times grow longer every year.
            </p>

            <p className="mt-4 text-gray-700">
              This is not about blaming doctors.
              It is about reality.
            </p>

            <p className="mt-4 text-gray-700">
              One doctor sees hundreds of patients
              Most cases are lifestyle-related
              Many visits could be prevented
            </p>

            <p className="mt-4 text-gray-700">
              When you care for your body daily, hospitals become a last resort, not a frequent stop.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-4 py-16 md:px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center">
          No extremes. No perfection. Just consistency.
        </h2>

        <p className="mt-4 text-gray-700 text-center">
          You do not need complex systems.
          You need workable habits.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {[
            { img: "routine-1.png", title: "Drink Daily", desc: "Hydration supports energy" },
            { img: "routine-3.png", title: "Eat With Awareness", desc: "No restriction, just balance" },
            { img: "routine-4.png", title: "Rest & Recover", desc: "Sleep supports immunity" },
            { img: "routine-2.png", title: "Move Gently", desc: "Movement supports circulation" },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="relative w-full h-[220px] rounded-lg overflow-hidden mb-4">
                <Image
                  src={`/images/${item.img}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="font-semibold">{item.title}</p>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}

        </div>

        <p className="mt-6 text-gray-700 text-center">
          Small actions done daily outperform big actions done once.

          What simple habit could you start today and keep for years?
        </p>
      </section>

      {/* INSURANCE */}
      <section className="px-4 py-16 md:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="relative w-full h-[300px]">
            <Image
              src="/images/hospital-health.png"
              alt="Prevent hosptial visits"
              fill
              className="object-contain"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              Insurance helps. Prevention protects.
            </h2>

            <p className="mt-4 text-gray-700">
              Insurance does not stop illness.
              It only helps you pay after damage is done.
            </p>

            <p className="mt-4 text-gray-700">
              Preventive health reduces:
            </p>

            <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
              <li>Doctor visits</li>
              <li>Prescriptions</li>
              <li>Emergency expenses</li>
              <li>Time lost to sickness</li>
            </ul>

            <p className="mt-4 text-gray-700">
              People who invest early spend less later.
              That is not theory. It is lived experience.
            </p>
          </div>

        </div>
      </section>

      {/* BODY AWARENESS */}
      <section className="px-4 py-16 md:px-6 bg-[#eef7f5]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-2xl font-bold">
              Your body speaks. Most people ignore it.
            </h3>

            <p className="mt-4 text-gray-700">
              Fatigue is a message.
              Poor digestion is a message.
              Frequent sickness is a message.
            </p>

            <p className="mt-4 text-gray-700">
              When you learn your body’s patterns, you act earlier.
            </p>

            <p className="mt-4 text-gray-700">
              You rest before burnout
              You support immunity before breakdown
              You adjust habits before crisis

              Time lost to sickness
            </p>
          </div>

          <div className="relative w-full h-[280px] rounded-lg overflow-hidden">
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
      <section className="px-4 py-16 md:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="relative w-full h-[300px]">
            <Image
              src="/images/health-testimonials.png"
              alt="Prevent hosptial visits"
              fill
              className="object-contain"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              We are sharing our stories with you
            </h2>

            <p className="mt-4 text-gray-700">
              Not experts on a stage.
              Not influencers chasing trends.
            </p>

            <p className="mt-4 text-gray-700">
              Everyday people choosing:

              Better routines
              Smarter habits
              Long-term thinking
            </p>

            <p className="mt-4 text-gray-700">
              Health created space for wealth.
              Clarity created better decisions.
              Consistency created stability.
            </p>
          </div>

        </div>
      </section>

      {/* FINAL HERO */}
      <section className="px-4 py-16 md:px-6 md:py-24 bg-[#eef7f5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Health Creates Options
            </h1>

            <p className="mt-6 text-lg">
              A healthier body gives you more time.
              More energy gives you more options.
              More options create a wealthier life.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://partner.co/en-us/shop/product/tahitian-noni"
                className="bg-green-600 text-white px-6 py-3 rounded"
              >
                Start with one small change today
              </a>

              <a
                href="https://chat.whatsapp.com/DMyIoIUx6CnKbH0WEBOKW7"
                className="border border-green-600 text-green-600 px-6 py-3 rounded"
              >
                Talk to someone who has walked this path
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-600">
              Your Health Is an Investment, Not an Emergency Expense
            </p>
          </div>

          <div className="relative w-full h-[340px]">
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
        href="https://chat.whatsapp.com/CJ2CmmrXNxUAYV6MgjxSVV"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg text-sm"
      >
        Chat on WhatsApp
      </a>

    </main>
  );
}
