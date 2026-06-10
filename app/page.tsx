export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

        <div className="text-xl font-bold tracking-widest">
          AEC MEDIA
        </div>

        <div className="hidden md:flex gap-8 text-zinc-400">
          <a href="#services" className="hover:text-white transition">
            Services
          </a>

          <a href="#process" className="hover:text-white transition">
            Process
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="max-w-4xl">

          <div className="inline-block mb-6 px-4 py-2 border border-zinc-800 rounded-full text-sm text-zinc-400">
            Dublin Digital Marketing Agency
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Helping Dublin Businesses
            <span className="text-zinc-500">
              {" "}Generate More Leads.
            </span>
          </h1>

          <p className="mt-8 text-xl text-zinc-400 max-w-2xl">
            We help service businesses generate more enquiries through
            SEO, Google Ads and conversion-focused websites.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Free Growth Audit
            </a>

            <a
              href="#services"
              className="border border-zinc-700 px-8 py-4 rounded-full hover:bg-zinc-900 transition"
            >
              Explore Services
            </a>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              SEO
            </h3>

            <p className="text-zinc-400">
              Improve rankings, visibility and lead generation through
              organic search.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Google Ads
            </h3>

            <p className="text-zinc-400">
              Capture high-intent searches and convert them into leads.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Website Optimisation
            </h3>

            <p className="text-zinc-400">
              Turn more visitors into enquiries and customers.
            </p>
          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Our Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <div className="text-5xl font-bold text-zinc-700">
              01
            </div>

            <h3 className="text-xl font-semibold mt-4">
              Audit
            </h3>

            <p className="text-zinc-400 mt-3">
              Review your marketing and identify growth opportunities.
            </p>
          </div>

          <div>
            <div className="text-5xl font-bold text-zinc-700">
              02
            </div>

            <h3 className="text-xl font-semibold mt-4">
              Strategy
            </h3>

            <p className="text-zinc-400 mt-3">
              Build a plan focused on lead generation and ROI.
            </p>
          </div>

          <div>
            <div className="text-5xl font-bold text-zinc-700">
              03
            </div>

            <h3 className="text-xl font-semibold mt-4">
              Launch
            </h3>

            <p className="text-zinc-400 mt-3">
              Implement campaigns, tracking and optimisation.
            </p>
          </div>

          <div>
            <div className="text-5xl font-bold text-zinc-700">
              04
            </div>

            <h3 className="text-xl font-semibold mt-4">
              Scale
            </h3>

            <p className="text-zinc-400 mt-3">
              Improve performance month after month.
            </p>
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-24"
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          About AEC Media
        </h2>

        <p className="text-xl text-zinc-400 leading-relaxed">
          Founded by Antonio Canavan, AEC Media helps Dublin service
          businesses grow through practical, measurable digital marketing.
          We focus on generating qualified leads through SEO, Google Ads
          and high-converting websites.
        </p>

      </section>

      {/* CTA */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-24"
      >

        <div className="bg-white text-black rounded-[40px] p-12">

          <h2 className="text-4xl md:text-5xl font-bold">
            Get Your Free Growth Audit
          </h2>

          <p className="mt-4 text-zinc-600">
            Receive a personalised review of your website, SEO and lead generation opportunities.
          </p>
          <div className="mt-6 text-sm text-zinc-600 space-y-2">
  <div>✓ Website Review</div>
  <div>✓ Local SEO Review</div>
  <div>✓ Google Business Profile Review</div>
  <div>✓ Lead Generation Opportunities</div>
</div>

          <form
  action="https://formspree.io/f/mkoavoep"
  method="POST"
  className="mt-8 space-y-4"
>
  <input
  type="text"
  name="name"
  placeholder="Your Name"
  required
  className="w-full border p-4 rounded-xl"
/>

<input
  type="email"
  name="email"
  placeholder="Email Address"
  required
  className="w-full border p-4 rounded-xl"
/>

<input
  type="text"
  name="business"
  placeholder="Business Name"
  required
  className="w-full border p-4 rounded-xl"
/>

<input
  type="text"
  name="website"
  placeholder="Website URL"
  required
  className="w-full border p-4 rounded-xl"
/>

<select
  name="budget"
  className="w-full border p-4 rounded-xl"
>
  <option value="">Monthly Marketing Budget</option>
  <option value="0-500">€0-500</option>
  <option value="500-1000">€500-1,000</option>
  <option value="1000-3000">€1,000-3,000</option>
  <option value="3000+">€3,000+</option>
</select>

<textarea
  name="challenge"
  placeholder="What's your biggest marketing challenge right now?"
  rows={4}
  className="w-full border p-4 rounded-xl"
/><button
  type="submit"
  className="bg-black text-white px-8 py-4 rounded-xl"
>
  Get My Free Audit
</button>

</form>

</div>

</section>

</main>
  );
}