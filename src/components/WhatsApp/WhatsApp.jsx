"use client";
import { useState, useEffect } from "react";
import { PhoneCall, MessageCircle, X, Send, Briefcase } from "lucide-react";

const WhatsAppButtons = ({ requireFormBeforeAction = (action) => action() }) => {
  const [open, setOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "919515090119";
  const portfolioMessage = encodeURIComponent(
    "Hi Muthyala! I just saw your portfolio and I'm interested in working with you. Can we discuss a project?"
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${portfolioMessage}`;

  return (
    <div className="fixed bottom-10 right-6 z-50 flex flex-col items-end gap-3 font-sans">

      {/* Tooltip Prompt */}
      {showPrompt && !open && (
        <div className="bg-secondary border-border text-neutral absolute bottom-16 right-0 mb-2 w-48 rounded-2xl border px-4 py-3 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="text-sm font-medium">Hello! 👋 Need a developer? Chat with me!</p>
          <div className="bg-secondary border-r-border border-b-border absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-r border-b"></div>
          <button
            onClick={() => setShowPrompt(false)}
            className="absolute -top-2 -right-2 bg-secondary border-border rounded-full border p-0.5 text-neutral/60 hover:text-neutral transition-colors"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Action Buttons Menu */}
      <div className={`flex flex-col gap-3 transition-all duration-300 ${open ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90 pointer-events-none'}`}>

        {/* Quote Request */}
        <button
          onClick={() => {
            setOpen(false);
            requireFormBeforeAction(() => {
              window.open(whatsappLink + encodeURIComponent(" I'd like to get a quote for a project."), "_blank");
            });
          }}
          className="bg-secondary border-border text-neutral hover:bg-accent hover:text-secondary group flex items-center gap-3 rounded-2xl border px-5 py-3 shadow-xl transition-all duration-300"
        >
          <div className="bg-accent/10 group-hover:bg-secondary/20 rounded-lg p-2 transition-colors">
            <Briefcase className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold">Get a Quote</span>
        </button>

        {/* Direct Chat */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white hover:bg-[#128C7E] group flex items-center gap-3 rounded-2xl px-5 py-3 shadow-xl transition-all duration-300"
        >
          <div className="bg-white/20 rounded-lg p-2">
            <Send className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold">Direct Chat</span>
        </a>

        {/* Call Button */}
        <button
          onClick={() =>
            requireFormBeforeAction(() => {
              window.location.href = `tel:+${phoneNumber}`;
            })
          }
          className="bg-secondary border-border text-neutral hover:bg-accent hover:text-secondary group flex items-center gap-3 rounded-2xl border px-5 py-3 shadow-xl transition-all duration-300"
        >
          <div className="bg-accent/10 group-hover:bg-secondary/20 rounded-lg p-2 transition-colors">
            <PhoneCall className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold">Schedule a Call</span>
        </button>
      </div>

      {/* Main Floating Button */}
      <button
        onClick={() => {
          setOpen(!open);
          setShowPrompt(false);
        }}
        className={`relative flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-all duration-500 ease-spring ${open ? "bg-secondary border-border border rotate-180" : "bg-[#25D366] hover:scale-110 active:scale-95"
          }`}
        aria-label="Contact Options"
      >
        {open ? (
          <X className="text-neutral h-7 w-7" />
        ) : (
          <>
            <MessageCircle className="h-8 w-8 text-white" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-white/20"></span>
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButtons;

