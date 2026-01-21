"use client";

import { useState } from "react";
import { Upload, Check, Loader2, AlertCircle, FilePlus, CloudUpload } from "lucide-react";
import { storage } from "@/lib/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function AdminUpload({ onUploadSuccess, isLight }) {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!allowedTypes.includes(selectedFile.type)) {
                setError("PDF or Word only");
                setFile(null);
                return;
            }
            setError("");
            setFile(selectedFile);
            setSuccess(false);
        }
    };

    const handleUpload = () => {
        if (!file) return;

        setUploading(true);
        setError("");

        const storageRef = ref(storage, `resumes/resume_file`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(p);
            },
            (err) => {
                setError("Upload failed.");
                setUploading(false);
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                setUploading(false);
                setSuccess(true);
                setFile(null);
                if (onUploadSuccess) onUploadSuccess(downloadURL);
            }
        );
    };

    return (
        <div className="p-8 bg-white border border-zinc-200 rounded-[2rem] shadow-xl space-y-6">
            <div className="space-y-1">
                <h3 className="text-zinc-900 font-bold text-sm tracking-tight flex items-center gap-2">
                    <CloudUpload size={18} className="text-zinc-400" />
                    Control Dashboard
                </h3>
                <p className="text-[11px] text-zinc-400 font-medium">Update the live resume document.</p>
            </div>

            <label className="relative flex flex-col items-center justify-center gap-4 py-12 border-2 border-dashed border-zinc-100 hover:border-zinc-300 rounded-[1.5rem] cursor-pointer transition-all group bg-zinc-50/50">
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    accept=".pdf,.doc,.docx"
                />
                <div className="p-4 bg-white border border-zinc-100 rounded-2xl group-hover:scale-110 transition-transform shadow-sm">
                    <FilePlus className="text-zinc-400" size={24} />
                </div>
                <div className="text-center px-4">
                    <p className="text-zinc-900 text-sm font-bold truncate max-w-[200px]">
                        {file ? file.name : "Select Document"}
                    </p>
                    <p className="text-zinc-400 text-[10px] uppercase tracking-widest mt-1">
                        PDF / DOCX
                    </p>
                </div>
            </label>

            {error && <p className="text-red-500 text-[10px] text-center font-bold uppercase tracking-widest">{error}</p>}

            {uploading && (
                <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-zinc-900 transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            )}

            <button
                onClick={handleUpload}
                disabled={!file || uploading}
                className="w-full py-4 bg-zinc-900 text-white font-bold rounded-2xl text-[11px] uppercase tracking-widest transition-all hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-zinc-900 shadow-md shadow-zinc-200 flex items-center justify-center gap-3"
            >
                {uploading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
                <span>{success ? "Published Successfully" : "Deploy Asset"}</span>
            </button>
        </div>
    );
}
