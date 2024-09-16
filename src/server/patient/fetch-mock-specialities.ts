"use server"

export const fetchMockSpecialities = async () => {
    // This is where you'd implement your actual data fetching logic
    // For now, we'll return mock data
    return Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        name: `Specialty ${i + 1}`,
        href: `/specialties/${i + 1}`,
    }))
}