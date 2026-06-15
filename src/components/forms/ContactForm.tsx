"use client";

import { useState, type FormEvent } from "react";
import type { ApiResponse } from "@/types";
import type { ContactFormData } from "@/types";
import { Button, Input, Textarea } from "@/components/ui";
import { ChevronDown } from "lucide-react";

const initialState: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing",
  "Branding & Logo Design",
  "Cloud Solutions",
  "Consulting",
  "Other",
];

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialState);
  const [selectedService, setSelectedService] = useState<string>("");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    // Validate required fields
    if (!selectedService) {
      setStatus("error");
      setMessage("Please select a service from the dropdown");
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setMessage("Please fill in all required fields");
      return;
    }

    try {
      const formData = {
        ...form,
        subject: selectedService,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json: ApiResponse = await res.json();

      if (!res.ok || !json.success) {
        setStatus("error");
        setMessage(json.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(json.message ?? "Thank you! We will get back to you soon.");
      setForm(initialState);
      setSelectedService("");
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="Full Name"
          name="name"
          placeholder="John Doe"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          required
          className="transition-all duration-200"
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          required
          className="transition-all duration-200"
        />
      </div>

      <Input
        label="Phone Number (Optional)"
        name="phone"
        type="tel"
        placeholder="+1 (555) 000-0000"
        value={form.phone ?? ""}
        onChange={handleChange}
        error={errors.phone}
        className="transition-all duration-200"
      />

      {/* Service Dropdown */}
      <div className="relative">
        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
          Service of Interest <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-3 text-left border border-gray-300 rounded-lg bg-white hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 flex items-center justify-between group"
          >
            <span className={selectedService ? "text-gray-900" : "text-gray-500"}>
              {selectedService || "Select a service"}
            </span>
            <ChevronDown
              size={20}
              className={`text-gray-400 transition-transform duration-300 group-hover:text-blue-600 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => {
                    setSelectedService(service);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 ${
                    selectedService === service ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-700"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <Textarea
        label="Message"
        name="message"
        placeholder="Tell us about your project... What are you looking to achieve?"
        value={form.message}
        onChange={handleChange}
        error={errors.message}
        required
        rows={6}
        className="transition-all duration-200"
      />

      {/* Status Messages */}
      {status === "success" && (
        <div className="rounded-lg bg-green-50 p-4 border border-green-200">
          <p className="text-sm font-medium text-green-800">{message}</p>
        </div>
      )}

      {status === "error" && (
        <div className="rounded-lg bg-red-50 p-4 border border-red-200">
          <p className="text-sm font-medium text-red-800">{message}</p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        We'll respond to your message within 24 hours during business days.
      </p>
    </form>
  );
}
