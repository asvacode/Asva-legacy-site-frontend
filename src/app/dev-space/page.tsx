import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MainNavbar from "../components/MainNavbar";

export const metadata: Metadata = {
  title: "Dev Space | ASVA",
  description:
    "Dev Space is the ASVA Development Centre. Time there is booked in slots, through an online calendar.",
};

// Each item traces to the codebase: the Cal.com booking page and the
// "Book your slot" step shown to new members after sign-up.
const confirmed = [
  { term: "Name", detail: "ASVA Development Centre" },
  { term: "Part of", detail: "ASVA, the ABUAD Salt Valley Association" },
  { term: "Booking", detail: "In slots, through an online calendar" },
  {
    term: "New members",
    detail: "Invited to book a slot once their account is created",
  },
];

// Not published anywhere in the project yet. Move an item into `confirmed`
// once ASVA has agreed the detail.
const toBeAdded = [
  "Where it is",
  "Opening hours",
  "Equipment and facilities",
  "Who can book",
  "Whether booking costs anything, and how much",
];

export default function DevSpacePage() {
  return (
    <>
      <MainNavbar />
      <main className="min-h-screen bg-black text-white px-6 pt-28 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back to home
          </Link>

          {/* Header */}
          <header className="mt-8">
            <h1 className="text-4xl md:text-6xl font-extrabold">Dev Space</h1>
            <p className="text-green-400 font-medium mt-3">
              The ASVA Development Centre
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-6 max-w-prose">
              Dev Space is ASVA&apos;s development centre. Time there is booked
              in slots, through our online calendar. This page sets out what has
              been confirmed so far, and what will be added as it is agreed.
            </p>
          </header>

          {/* What is confirmed, and what is not yet */}
          <div className="mt-14 md:grid md:grid-cols-2 md:gap-6">
            <section
              aria-labelledby="confirmed-heading"
              className="bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8"
            >
              <h2 id="confirmed-heading" className="text-xl font-bold">
                What is confirmed
              </h2>
              <dl className="mt-6 space-y-5">
                {confirmed.map((item) => (
                  <div key={item.term}>
                    <dt className="text-xs font-medium uppercase tracking-wide text-gray-400">
                      {item.term}
                    </dt>
                    <dd className="text-white mt-1">{item.detail}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Dashed edge: a space still being filled in */}
            <section
              aria-labelledby="to-be-added-heading"
              className="mt-6 md:mt-0 border border-dashed border-white/25 rounded-2xl p-6 sm:p-8"
            >
              <h2 id="to-be-added-heading" className="text-xl font-bold">
                Details we will add here
              </h2>
              <ul className="mt-6 space-y-3 text-gray-300">
                {toBeAdded.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="text-gray-500">
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-400 leading-relaxed mt-6">
                Until then, ask us through the{" "}
                <Link
                  href="/contact"
                  className="text-green-400 underline underline-offset-4 hover:text-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                >
                  contact page
                </Link>{" "}
                or at asvaabuad@gmail.com.
              </p>
            </section>
          </div>

          {/* Context from ASVA's own published history (journey page) */}
          <section aria-labelledby="context-heading" className="mt-16">
            <h2 id="context-heading" className="text-2xl md:text-3xl font-bold">
              Where it sits in ASVA
            </h2>
            <p className="text-gray-300 leading-relaxed mt-4 max-w-prose">
              ASVA was founded on 10 March 2016 as a student-led innovation
              community at Afe Babalola University. Its record includes DEVCON,
              NVIDIA Machine Learning Training, the ASVA Film Making Initiative
              and Portfolio Design and Animation Training. Dev Space is part of
              that association.
            </p>
            <Link
              href="/journey"
              className="inline-block mt-4 text-green-400 underline underline-offset-4 hover:text-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
            >
              Read ASVA&apos;s full journey
            </Link>
          </section>

          {/* Next step */}
          <section
            aria-labelledby="join-heading"
            className="mt-16 pt-10 border-t border-white/10"
          >
            <h2 id="join-heading" className="text-2xl md:text-3xl font-bold">
              Join ASVA
            </h2>
            <p className="text-gray-300 leading-relaxed mt-4 max-w-prose">
              New members are invited to book a Dev Space slot once their account
              is created.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/join"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 hover:bg-green-400 text-black font-semibold underline underline-offset-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
              >
                Join ASVA
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/"
                className="text-gray-300 underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
              >
                Back to home
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
