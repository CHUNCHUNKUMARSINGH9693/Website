"use client";

import { useState } from "react";
import { X, Upload, File } from "lucide-react";
import type { Job } from "@/lib/data/jobs";

interface JobApplicationFormProps {
  job: Job;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function JobApplicationForm({
  job,
  isOpen,
  onClose,
  onSuccess,
}: JobApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resume, setResume] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setResume(file);
    } else if (file) {
      alert("Please select a PDF file");
      e.target.value = "";
    }
  };

  const handleRemoveResume = () => {
    setResume(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would typically send data to your backend
      console.log("Application submitted:", {
        ...formData,
        resume: resume?.name,
        jobId: job.id,
        jobTitle: job.title,
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        message: "",
      });
      setResume(null);

      onSuccess();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
        <div className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Apply for {job.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Department: <span className="font-semibold">{job.department}</span> •{" "}
                <span className="font-semibold">{job.type}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20 transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20 transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20 transition"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Years of Experience <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="experience"
                    name="experience"
                    type="text"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20 transition"
                    placeholder="e.g., 3-5 years"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Cover Letter / Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20 transition resize-none"
                  placeholder="Tell us why you're interested in this position..."
                />
              </div>

              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-semibold text-gray-700 mb-3"
                >
                  Upload Resume (PDF) <span className="text-red-500">*</span>
                </label>
                
                {!resume ? (
                  <div className="relative">
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      required={!resume}
                      className="hidden"
                    />
                    <label
                      htmlFor="resume"
                      className="flex items-center justify-center gap-3 rounded-lg border-2 border-dashed border-gray-300 px-6 py-8 cursor-pointer hover:border-brand-600 hover:bg-brand-50 transition"
                    >
                      <Upload className="h-5 w-5 text-gray-400" />
                      <div className="text-center">
                        <p className="font-semibold text-gray-700">Click to upload your resume</p>
                        <p className="text-sm text-gray-500">or drag and drop</p>
                        <p className="text-xs text-gray-400 mt-1">PDF files only (Max 10MB)</p>
                      </div>
                    </label>
                  </div>
                ) : (
                  <div className="flex items-center justify-between rounded-lg border border-green-200 bg-green-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                        <File className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{resume.name}</p>
                        <p className="text-sm text-gray-600">
                          {(resume.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveResume}
                      className="rounded-lg p-2 hover:bg-white transition text-gray-500 hover:text-red-600"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="rounded-lg border border-gray-300 px-6 py-2.5 font-semibold text-gray-700 hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !resume}
                  className="rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
