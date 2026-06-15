"use client";

import { useState } from "react";
import { Container } from "@/components";
import { CareersHero } from "@/components/careers/CareersHero";
import { JobApplicationForm } from "@/components/careers/JobApplicationForm";
import { SuccessModal } from "@/components/careers/SuccessModal";
import { jobs } from "@/lib/data/jobs";
import type { Job } from "@/lib/data/jobs";

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
  };

  const handleCloseForm = () => {
    setSelectedJob(null);
  };

  const handleFormSuccess = () => {
    setSelectedJob(null);
    setShowSuccess(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <>
      <CareersHero />

      <section className="bg-brand-50 py-16">
        <Container>
          <div id="open-positions" className="mx-auto mt-16 max-w-6xl">
            <div className="mb-10 space-y-3 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Now hiring</p>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Open Positions</h2>
              <p className="mx-auto max-w-2xl text-base text-gray-600">
                Browse our current openings and email us to apply. We welcome driven, creative people who
                want to grow with Blagweb Agency.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {jobs.map((job) => (
                <article
                  key={job.id}
                  className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
                        {job.department}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold text-gray-900">{job.title}</h3>
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                      {job.type}
                    </span>
                  </div>

                  <div className="mt-5 space-y-4 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold text-gray-900">Location:</span> {job.location}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900">Experience:</span> {job.experience}
                    </p>
                    <p>{job.description}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="inline-flex items-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
                    >
                      Apply Now
                    </button>
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      Job ID {job.id}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Job Application Form Modal */}
      {selectedJob && (
        <JobApplicationForm
          job={selectedJob}
          isOpen={!!selectedJob}
          onClose={handleCloseForm}
          onSuccess={handleFormSuccess}
        />
      )}

      {/* Success Modal */}
      <SuccessModal isOpen={showSuccess} onClose={handleCloseSuccess} />
    </>
  );
}

