"use client";

import { useState } from "react";
import { X, Phone, Download, Loader2, ShieldCheck, Mail } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function LeadCaptureModal({ isOpen, onClose, onDownload, isLight }) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!phone || phone.length < 10) {
      setError("Please enter a valid mobile number.");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "leads"), {
        mobile: phone,
        timestamp: serverTimestamp(),
        type: "resume_download",
      });

      onDownload();
      onClose();
    } catch (err) {
      console.error("Error saving lead:", err);
      setError("Failed to save. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-900/10 backdrop-blur-md animate-in fade-in duration-300">

      <div className="relative w-full max-w-md bg-white border border-zinc-200 rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] animate-in zoom-in-95 duration-300">

        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-zinc-400 hover:text-zinc-900 transition-colors p-2 hover:bg-zinc-50 rounded-xl"
          >
            <X size={18} />
          </button>

          <div className="space-y-8 flex flex-col items-center">

            <div className="flex flex-col items-center gap-4 text-center">
              <div className="p-5 bg-zinc-50 border border-zinc-100 rounded-3xl">
                <Phone className="text-zinc-900" size={32} strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">Access Request</h2>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-[240px]">
                  Please provide your mobile number to unlock the resume download.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-900 transition-colors">
                  <Phone size={18} />
                </div>
                <input
                  type="tel"
                  placeholder="Your mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-[1.25rem] py-5 pl-14 pr-4 text-zinc-900 placeholder-zinc-300 focus:outline-none focus:border-zinc-300 focus:bg-white transition-all text-sm font-medium"
                  required
                />
              </div>

              {error && (
                <p className="text-red-500 text-xs font-medium text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-zinc-900 text-white font-bold py-5 rounded-[1.25rem] transition-all flex items-center justify-center gap-3 hover:bg-zinc-800 active:scale-[0.98] shadow-lg shadow-zinc-200"
              >
                {loading ? (
                  <Loader2 size={24} className="animate-spin" />
                ) : (
                  <>
                    <span>Confirm & Download</span>
                    <Download size={18} />
                  </>
                )}
              </button>
            </form>

            <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-bold uppercase tracking-widest pt-2">
              <ShieldCheck size={12} />
              <span>Encrypted & Confidential</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
