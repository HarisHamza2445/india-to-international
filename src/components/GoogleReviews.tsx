import { Reveal } from "./Reveal";
import { CheckCircleIcon, StarIcon } from "./icons";

interface ReviewItem {
  id: string;
  name: string;
  role: string;
  quote: string;
}

const REVIEWS: ReviewItem[] = [
  {
    id: "sejal",
    name: "Sejal Patnaik",
    role: "NEET PG Candidate",
    quote:
      "I had a really positive experience with Navin sir and Vikas sir. They were patient, understanding, and genuinely supportive throughout the process. Their guidance helped me gain better clarity and make more confident decisions.",
  },
  {
    id: "arati",
    name: "Arati Mahishale",
    role: "Medical Parent (NEET UG)",
    quote:
      "Highly knowledgeable, approachable, and provides clear guidance throughout the admission process for NEET UG and MBBS. He patiently addresses queries and guides students and parents in making informed decisions.",
  },
  {
    id: "shiv",
    name: "Shiv Dayal",
    role: "Admission Candidate",
    quote:
      "Thoroughly researched, personalized report. The guidance did not merely provide a list of colleges but also explained admission routes, eligibility, category-wise considerations and realistic backup plans.",
  },
];

export function GoogleReviews() {
  return (
    <section id="reviews" className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1424px] px-4 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:items-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-white text-[22px] font-extrabold text-[#4285F4] shadow-xs">
                G
              </span>
              <div>
                <div className="flex items-center justify-center gap-2 lg:justify-start">
                  <span className="text-[28px] font-extrabold leading-none text-ink">4.9</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="mt-1 text-[13px] text-muted">
                  Based on 158+ verified Google reviews by doctors, candidates &amp; parents
                </p>
              </div>
            </div>
            <p className="inline-flex items-center gap-2 text-[13px] font-semibold text-accent">
              <CheckCircleIcon className="h-4 w-4" />
              100% Genuine Candidate Feedback
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <Reveal
              key={review.id}
              delay={index === 0 ? undefined : index === 1 ? "150" : "300"}
              className="h-full"
            >
              <article className="flex h-full flex-col rounded-2xl border border-line bg-[#f8fafc] p-6">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-[14px] leading-relaxed text-muted">
                  “{review.quote}”
                </p>
                <div className="mt-5">
                  <h4 className="text-[14px] font-bold text-ink">{review.name}</h4>
                  <p className="mt-0.5 text-[12px] text-muted">{review.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
