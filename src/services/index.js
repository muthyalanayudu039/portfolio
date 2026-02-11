import { projects } from '@/appData'

// Function to get all projects
export const getAllProjects = async () => {
    try {
        // Sort projects by priority
        return [...projects].sort((a, b) => a.priority - b.priority)
    } catch (error) {
        console.error('Error fetching projects:', error)
        return []
    }
}
