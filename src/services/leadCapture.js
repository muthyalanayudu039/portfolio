import { db } from '@/lib/firebase'
import { ref, push } from 'firebase/database'

export const saveLead = async (phone) => {
    try {
        const leadsRef = ref(db, 'leads');
        const newRef = await push(leadsRef, {
            mobile: phone,
            timestamp: new Date().toISOString(),
            type: "resume_download",
        });
        return { success: true, id: newRef.key };
    } catch (error) {
        console.error('Error saving lead:', error);
        return { success: false, error: error.message };
    }
}
