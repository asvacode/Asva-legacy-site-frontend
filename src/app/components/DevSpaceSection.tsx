import Link from "next/link";

// Only facts the project itself supports: the Cal.com booking page names the
// "asva-development-centre", and time there is booked in slots.
const facts = [
  { term: "Also known as", detail: "ASVA Development Centre" },
  { term: "Booking", detail: "In slots, through an online calendar" },
];

export default function DevSpaceSection() {
  return (
    <section
      id="dev-space"
      aria-labelledby="dev-space-heading"
      className="w-full bg-black px-6 py-6"
    >
      {/* DOM order is the mobile reading order; the grid only rearranges it from md up */}
      <div className="max-w-6xl mx-auto bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-10 md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-x-12">
        <div className="md:col-start-1 md:row-start-1">
          <h2
            id="dev-space-heading"
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Dev Space
          </h2>
          <p className="text-green-400 text-sm font-medium mt-2">
            The ASVA Development Centre
          </p>
          <p className="text-gray-300 mt-5 max-w-prose leading-relaxed">
            Dev Space is ASVA&apos;s development centre. Time there is booked in
            slots, through our online calendar.
          </p>
        </div>

        <dl className="mt-8 pt-6 border-t border-white/10 space-y-5 md:mt-0 md:pt-0 md:border-t-0 md:border-l md:pl-10 md:col-start-2 md:row-start-1 md:row-span-2 md:self-center">
          {facts.map((fact) => (
            <div key={fact.term}>
              <dt className="text-xs font-medium uppercase tracking-wide text-gray-400">
                {fact.term}
              </dt>
              <dd className="text-white mt-1">{fact.detail}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 md:col-start-1 md:row-start-2">
          <Link
            href="/dev-space"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 hover:bg-green-400 text-black font-semibold underline underline-offset-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
          >
            Learn more about Dev Space
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
