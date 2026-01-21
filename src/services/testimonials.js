import { db } from '@/lib/firebase'
import { ref, push, get, child, serverTimestamp } from 'firebase/database'

export const getAllTestimonials = async () => {
    try {
        if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID.includes("your_")) {
            console.warn("Skipping RTDB fetch: Firebase Project ID is not configured.");
            return [];
        }

        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, `testimonials`));

        if (snapshot.exists()) {
            const data = snapshot.val();
            // Convert object of objects to array of objects
            const testimonials = Object.keys(data).map(key => ({
                id: key,
                ...data[key],
                // Handle timestamp if it exists, otherwise use current date
                createdAt: data[key].createdAt ? new Date(data[key].createdAt).toISOString() : new Date().toISOString()
            }));

            // Sort by createdAt desc (client-side sorting since RTDB sorting is limited)
            return testimonials.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error fetching testimonials:', error)
        return []
    }
}

export const addTestimonial = async (testimonialData) => {
    try {
        // Use 'testimonials' path
        const testimonialsRef = ref(db, 'testimonials');

        // Push creates a new node with a unique ID
        const newRef = await push(testimonialsRef, {
            ...testimonialData,
            createdAt: new Date().toISOString(), // Store as ISO string for easier handling
            stars: Number(testimonialData.stars) || 5,
            image: testimonialData.image || "https://ui-avatars.com/api/?name=" + encodeURIComponent(testimonialData.name)
        });

        return { success: true, id: newRef.key };
    } catch (error) {
        console.error('Error adding testimonial:', error);
        return { success: false, error: error.message };
    }
}
