export async function getUserData(id: number): Promise<{ name: string, email: string }> {

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate potential errors
    if (id === 10) {
        throw new Error('User not found')
    }

    return {
        name: `User ${id}`,
        email: `user${id}@example.com`
    };
}