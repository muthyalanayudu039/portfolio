'use client'

import { useState } from 'react'
import { X, Star } from 'lucide-react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'
import { addTestimonial } from '@/services/testimonials'

const AddTestimonialModal = ({ isOpen, onClose, onRefresh }) => {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        feedback: '',
        stars: 5
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    if (!isOpen) return null

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        const result = await addTestimonial(formData)

        if (result.success) {
            onClose()
            setFormData({ name: '', title: '', feedback: '', stars: 5 })
            onRefresh() // Refresh the list
        } else {
            setError(result.error || 'Failed to submit review. Please try again.')
        }
        setLoading(false)
    }

    const handleStarClick = (rating) => {
        setFormData(prev => ({ ...prev, stars: rating }))
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="bg-secondary border-border relative w-full max-w-md rounded-2xl border p-5 sm:p-6 shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[85vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="text-neutral/60 hover:text-neutral absolute top-4 right-4 transition-colors hover:scale-110 active:scale-90 z-10"
                >
                    <X size={24} />
                </button>

                <h2 className="text-neutral mb-2 text-xl sm:text-2xl font-bold mt-2">Add Your Review</h2>
                <p className="text-neutral/60 mb-6 text-sm">Share your experience with our services.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Full Name"
                        id="name"
                        placeholder="e.g. John Doe"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    />

                    <Input
                        label="Your Title / Company"
                        id="title"
                        placeholder="e.g. CEO at TechCorp"
                        value={formData.title}
                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    />

                    <div className="mb-4">
                        <label className="text-neutral mb-2 block text-base font-medium">Rating</label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => handleStarClick(star)}
                                    className="focus:outline-none transition-transform hover:scale-110 active:scale-95 p-1"
                                >
                                    <Star
                                        size={28}
                                        className={star <= formData.stars ? 'fill-tag text-tag' : 'text-neutral/30'}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <Textarea
                        label="Your Feedback"
                        id="feedback"
                        placeholder="What was your experience like?"
                        required
                        rows={4}
                        value={formData.feedback}
                        onChange={(e) => setFormData(prev => ({ ...prev, feedback: e.target.value }))}
                    />

                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                    <div className="pt-2">
                        <Button
                            text={loading ? "Submitting..." : "Submit Review"}
                            disabled={loading}
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTestimonialModal
