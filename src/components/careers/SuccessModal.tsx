"use client";

import { Check } from "lucide-react";
import { useEffect } from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/50 transition-opacity" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden">
          <div className="p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Check className="h-8 w-8 text-green-600" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Application Submitted!
            </h2>

            <p className="mt-3 text-gray-600">
              Thank you for applying. We've received your application and will review it shortly.
              We'll be in touch soon!
            </p>

            <div className="mt-8">
              <button
                onClick={onClose}
                className="w-full rounded-lg bg-green-600 px-6 py-2.5 font-semibold text-white hover:bg-green-700 transition"
              >
                Close
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Auto-closing in 4 seconds...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
