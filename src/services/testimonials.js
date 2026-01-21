import { db } from '@/lib/firebase'
import { collection, getDocs, query, orderBy, addDoc, serverTimestamp } from 'firebase/firestore'

export const getAllTestimonials = async () => {
    try {
        if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID.includes("your_")) {
            console.warn("Skipping Firestore fetch: Firebase Project ID is not configured.");
            return [];
        }
        const q = query(collection(db, "testimonials"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const testimonials = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate ? doc.data().createdAt.toDate().toISOString() : new Date().toISOString(),
        }))

        return testimonials
    } catch (error) {
        console.error('Error fetching testimonials:', error)
        return []
    }
}

export const addTestimonial = async (testimonialData) => {
    try {
        const docRef = await addDoc(collection(db, "testimonials"), {
            ...testimonialData,
            createdAt: serverTimestamp(),
            stars: Number(testimonialData.stars) || 5, // Ensure stars is a number
            image: testimonialData.image || "https://ui-avatars.com/api/?name=" + encodeURIComponent(testimonialData.name) // Default avatar
        });
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error('Error adding testimonial:', error);
        return { success: false, error: error.message };
    }
}
