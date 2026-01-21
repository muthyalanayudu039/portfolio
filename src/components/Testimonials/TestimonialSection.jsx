'use client'

import { useState, useEffect } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import TestimonialCard from './TestimonialCard'
import AddTestimonialModal from './AddTestimonialModal'
import { getAllTestimonials } from '@/services/testimonials'
import Button from '../UI/Button'

const TestimonialSection = ({ testimonials: initialTestimonials }) => {
    const [activeCard, setActiveCard] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [testimonials, setTestimonials] = useState(initialTestimonials || [])

    const fetchTestimonials = async () => {
        const updated = await getAllTestimonials()
        setTestimonials(updated)
    }

    // Keep local state in sync if props change
    useEffect(() => {
        if (initialTestimonials) {
            setTestimonials(initialTestimonials)
        }
    }, [initialTestimonials])

    return (
        <section id="testimonials" className="relative pt-10">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <SectionHeading
                    title="// Testimonials"
                    subtitle="Don't just take our word for it - see what actual users of our service have to say about their experience."
                />
                <div className="w-full md:w-auto">
                    <Button
                        text="Add Review"
                        onClick={() => setIsModalOpen(true)}
                        className="bg-accent hover:bg-accent/80 text-secondary whitespace-nowrap rounded-lg px-6 py-2 font-medium transition-all"
                    />
                </div>
            </div>

            {testimonials.length > 0 ? (
                <>
                    <div className="hide-scrollbar my-8 flex gap-8 overflow-x-auto pb-4">
                        {testimonials.map((testimonial, idx) => (
                            <TestimonialCard
                                key={testimonial.id || idx}
                                testimonial={testimonial}
                                handleActiveCard={() => {
                                    setActiveCard(idx)
                                }}
                            />
                        ))}
                    </div>

                    <div className="flex items-center justify-center gap-1 sm:hidden">
                        {testimonials.map((_, idx) => (
                            <div
                                key={idx}
                                className={`${idx === activeCard ? 'bg-accent size-[12px]' : 'size-[10px] bg-white/50'} rounded-full`}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div className="bg-secondary/30 border-border my-8 flex flex-col items-center justify-center rounded-2xl border border-dashed p-12 text-center">
                    <p className="text-neutral/60 mb-4 text-lg">No reviews yet. Be the first to share your experience!</p>
                    <Button
                        text="Write a Review"
                        onClick={() => setIsModalOpen(true)}
                        className="bg-accent hover:bg-accent/80 text-secondary rounded-lg px-8 py-2 font-medium"
                    />
                </div>
            )}

            <AddTestimonialModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onRefresh={fetchTestimonials}
            />
        </section>
    )
}

export default TestimonialSection

