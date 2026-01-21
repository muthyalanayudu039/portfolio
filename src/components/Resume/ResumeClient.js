"use client";

import { useState } from "react";
import {
    Download,
    FileText,
    ArrowRight,
    Lock,
    ShieldCheck,
    Share2,
    FileDown,
    Settings
} from "lucide-react";
import LeadCaptureModal from "./LeadCaptureModal";
import AdminUpload from "./AdminUpload";

export default function ResumeClient() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [showAdmin, setShowAdmin] = useState(false);
    const [resumeUrl, setResumeUrl] = useState("/resume.pdf");

    const onDownloadSuccess = () => {
        setIsUnlocked(true);
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "Muthyala_Nayudu_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center px-6 py-12 font-sans selection:bg-blue-100 selection:text-blue-900">

            <div className="w-full max-w-xl mx-auto space-y-12">

                {/* --- MINIMALIST CARD --- */}
                <div className="mt-20 bg-white border border-zinc-200 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500">

                    <div className="p-8 flex flex-col items-center text-center">

                        {/* Elegant Icon Support */}
                        <div className="mb-8 relative">
                            <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full"></div>
                            <div className="relative p-6 bg-zinc-50 border border-zinc-100 rounded-3xl">
                                <FileText className="text-zinc-900" size={40} strokeWidth={1.5} />
                            </div>
                        </div>

                        <div className="space-y-4 mb-10 w-full">
                            <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight">
                                Curriculum Vitae
                            </h1>
                            <p className="text-zinc-500 text-md leading-relaxed max-w-sm mx-auto">
                                {isUnlocked
                                    ? "Access granted. Your download should start automatically."
                                    : "View and download my professional resume and project portfolio."}
                            </p>
                        </div>

                        <div className="w-full space-y-4">
                            {!isUnlocked ? (
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full cursor-pointer bg-zinc-900 text-white font-semibold py-5 rounded-[1.25rem] flex items-center justify-center gap-3 transition-all hover:bg-zinc-800 active:scale-[0.98] shadow-lg shadow-zinc-200 group"
                                >
                                    <span>Request Access</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            ) : (
                                <a
                                    href={resumeUrl}
                                    download
                                    className="w-full bg-zinc-100 text-zinc-900 font-semibold py-5 rounded-[1.25rem] flex items-center justify-center gap-3 transition-all hover:bg-zinc-200"
                                >
                                    <Download size={18} />
                                    <span>Download PDF</span>
                                </a>
                            )}

                            <button className="w-full cursor-pointer py-4 text-zinc-400 text-sm font-medium flex items-center justify-center gap-2 hover:text-zinc-600 transition-colors">
                                <Share2 size={16} />
                                Share Profile
                            </button>
                        </div>

                        {/* Subtle Stats Row */}
                        <div className="mt-5 flex items-center justify-between w-full pt-10 border-t border-zinc-400">
                            {[
                                { label: "EXP", val: "2+ Years" },
                                { label: "DONE", val: "10+ Projects" },
                                { label: "TYPE", val: "Frontend Developer" }
                            ].map((stat, i) => (
                                <div key={i} className="text-left">
                                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">{stat.label}</p>
                                    <p className="text-zinc-800 text-sm font-bold">{stat.val}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- MINIMALIST FOOTER & ADMIN --- */}
                <div className="flex flex-col items-center gap-8">
                    <div className="flex items-center gap-2 text-zinc-300 text-xs font-semibold uppercase tracking-widest">
                        <ShieldCheck size={14} />
                        <span>Verified Professional Data</span>
                    </div>

                    <div className="w-full flex flex-col items-center gap-4">
                        <button
                            onClick={() => setShowAdmin(!showAdmin)}
                            className="flex items-center gap-2 px-6 py-2 rounded-full border border-zinc-200 text-zinc-400 hover:text-zinc-600 hover:border-zinc-300 transition-all text-[10px] uppercase font-bold tracking-widest bg-white"
                        >
                            <Settings size={12} />
                            <span>Control Panel</span>
                        </button>

                        {showAdmin && (
                            <div className="w-full max-w-md animate-in slide-in-from-top-4 duration-300">
                                <AdminUpload onUploadSuccess={(url) => {
                                    setResumeUrl(url);
                                    setIsUnlocked(true);
                                }} isLight={true} />
                            </div>
                        )}
                    </div>
                </div>

            </div>

            <LeadCaptureModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onDownload={onDownloadSuccess}
                isLight={true}
            />
        </div>
    );
}
