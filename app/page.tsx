import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO — mirrors Supliful hero */}
      <section className="px-4 py-16 md:px-6 md:py-24 bg-[#eef7f5]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Support Your Body Daily With Tahitian Noni Juice
            </h1>

            <p className="mt-6 text-lg">
              A plant-based wellness drink trusted worldwide for immune,
              digestive, and daily vitality support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://partner.co/en-us/shop/product/tahitian-noni"
                className="bg-green-600 text-white px-6 py-3 rounded"
              >
                Tips for better well-being
              </a>

              <a
                href="https://chat.whatsapp.com/CJ2CmmrXNxUAYV6MgjxSVV"
                className="border border-green-600 text-green-600 px-6 py-3 rounded"
              >
                Talk to a Brand Partner
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-600">
              Used by families across multiple countries
            </p>
          </div>

          {/* Right hero image */}
          <div className="relative w-full h-[340px]">
            <Image
              src="/images/pdp-product-image-global-tnj-original-4-desktop.jpg"
              alt="Tahitian Noni Juice hero product"
              fill
              className="object-contain"
              priority
            />
          </div>

        </div>
      </section>

      {/* SECONDARY PRODUCT VISUAL — mirrors Supliful mid visual */}
      <section className="px-4 py-16 md:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="relative w-full h-[300px]">
            <Image
              src="/images/ptr-home-wellness-edit-desktop-1.jpg"
              alt="Tahitian Noni Juice bottle"
              fill
              className="object-contain"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              Daily Wellness Without Complication
            </h2>
            <p className="mt-4 text-gray-700">
              Tahitian Noni Juice fits easily into your day.
              No pills. No complex stacks. Just consistency.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS — icon-style structure */}
      <section className="px-4 py-16 md:px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center">
          How It Works
        </h2>

        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <p className="font-semibold">Drink Daily</p>
            <p className="mt-2 text-sm text-gray-600">At least 2 fl oz (60 mL) daily</p>
          </div>

          <div>
            <p className="font-semibold">Stay Consistent</p>
            <p className="mt-2 text-sm text-gray-600">Results build over time</p>
          </div>

          <div>
            <p className="font-semibold">Support Balance</p>
            <p className="mt-2 text-sm text-gray-600">Immune & digestion</p>
          </div>

          <div>
            <p className="font-semibold">Share If You Want</p>
            <p className="mt-2 text-sm text-gray-600">Optional income</p>
          </div>

        </div>
      </section>

      {/* PRODUCT GRID — mirrors Supliful product chooser */}
      <section className="px-4 py-16 md:px-6">
        <h2 className="text-3xl font-bold text-center">
          Choose Your Option
        </h2>

        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded shadow text-center">
            <Image
              src="/images/2 Bottles of TNJ.jpg"
              alt="Single bottle"
              width={180}
              height={180}
              className="mx-auto mb-4"
            />
            <p className="font-semibold">Two Bottles</p>
            <a
              href="https://v1.partner.co/s/NDI4MTM2ZjQw"
              className="mt-4 inline-block text-green-600"
            >
              Buy now
            </a>
          </div>

          <div className="bg-white p-8 rounded shadow border-2 border-green-600 text-center">
            <Image
              src="/images/2.Case of TNJ.png"
              alt="Case of Tahitian Noni Juice"
              width={180}
              height={180}
              className="mx-auto mb-4"
            />
            <p className="font-semibold">Case of TNJ</p>
            <a
              href="https://v1.partner.co/s/NjZjZWVmYWE3"
              className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded"
            >
              Buy a Case
            </a>
          </div>

          <div className="bg-white p-8 rounded shadow text-center">
            <Image
              src="/images/Chat with us on Whatsapp.png"
              alt="Case of Tahitian Noni Juice"
              width={180}
              height={180}  
              className="mx-auto mb-4"
              />
            <p className="font-semibold">Need Guidance?</p>
            <a
              href="https://chat.whatsapp.com/CJ2CmmrXNxUAYV6MgjxSVV"
              className="mt-4 inline-block text-green-600"
            >
              Join WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* LIFESTYLE / TRUST — mirrors Supliful About section */}
      <section className="px-4 py-16 md:px-6 bg-[#eef7f5]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-2xl font-bold">
              Trusted by Wellness Communities
            </h3>
            <p className="mt-4 text-gray-700">
              Tahitian Noni Juice has been used for generations
              and fits modern wellness routines worldwide.
            </p>
          </div>

          <div className="relative w-full h-[280px]">
            <Image
              src="/images/Trusted by welness communities.png"
              alt="Wellness lifestyle"
              fill
              className="object-cover rounded-lg"
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
