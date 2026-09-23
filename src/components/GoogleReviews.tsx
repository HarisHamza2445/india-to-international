import { Reveal } from "./Reveal";
import { CheckCircleIcon, ExternalLinkIcon, StarIcon } from "./icons";

interface ReviewItem {
  id: string;
  name: string;
  role: string;
  timeAgo: string;
  quote: string;
}

const REVIEWS: ReviewItem[] = [
  {
    id: "sejal",
    name: "Sejal Patnaik",
    role: "NEET PG Candidate",
    timeAgo: "3 weeks ago",
    quote:
      "“I had a really positive experience with Navin sir and Vikas sir. They were patient, understanding, and genuinely supportive throughout the process. Their guidance helped me gain better clarity, understand things from a different perspective, and make more confident decisions. I truly appreciate the time and effort they put into helping me.”",
  },
  {
    id: "arati",
    name: "Arati Mahishale",
    role: "Medical Parent (NEET UG)",
    timeAgo: "4 weeks ago",
    quote:
      "“Highly knowledgeable, approachable, and provides clear guidance throughout the admission process for NEET UG and MBBS. He patiently addresses queries and guides students and parents in making informed decisions. I would highly recommend Naveen Harjwani to NEET aspirants and parents looking for reliable and professional admission guidance.”",
  },
  {
    id: "shiv",
    name: "Shiv Dayal",
    role: "Admission Candidate",
    timeAgo: "3 months ago",
    quote:
      "“Thoroughly researched, personalized report... What impressed me most was that the guidance did not merely provide a list of colleges but also explained admission routes, eligibility, category-wise considerations and realistic backup plans. The step-by-step action plan and realistic assessment of admission prospects were particularly valuable.”",
  },
];

export function GoogleReviews() {
  return (
    <section
      id="reviews"
      className="w-full border-t border-line bg-[#f8fafc] py-14 sm:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        {/* ── Section Header ── */}
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-[720px]">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0062ff]">
                CANDIDATE & PARENT FEEDBACK
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[34px] lg:leading-[1.2]">
                Verified 4.9–Star Google Reviews
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                Authentic experiences from candidates and doctors guided into clinical seats across India.
              </p>
            </div>

            {/* Google Summary Badge */}
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs shrink-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 font-bold text-slate-700 shadow-2xs">
                <svg className="h-6 w-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27A7.18 7.18 0 0 1 4.9 12c0-.79.14-1.57.38-2.27V6.58H1.25A11.96 11.96 0 0 0 0 12c0 1.92.45 3.74 1.25 5.42l4.03-3.15Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
                  />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-extrabold text-slate-900">4.9</span>
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="mt-0.5 text-xs text-slate-500">
                  Based on 158 verified Google reviews
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── 3 Review Cards Grid ── */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <Reveal
              key={review.id}
              delay={index === 0 ? undefined : index === 1 ? "150" : "300"}
              className="h-full"
            >
              <div className="hover-lift flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
                <div>
                  {/* Rating Stars & Time */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400">{review.timeAgo}</span>
                  </div>

                  {/* Review Body */}
                  <p className="mt-4 text-xs italic leading-relaxed text-slate-600 sm:text-[13px]">
                    {review.quote}
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 sm:text-sm">
                      {review.name}
                    </h4>
                    <p className="text-[11px] text-slate-500">{review.role}</p>
                  </div>

                  <div className="flex items-center text-emerald-600">
                    <CheckCircleIcon className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Footer Link ── */}
        <div className="mt-10 text-center">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0062ff] transition hover:text-[#0051d4] hover:underline"
          >
            <span>Read all 158 reviews on Google Maps</span>
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
