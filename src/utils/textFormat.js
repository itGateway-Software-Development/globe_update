export const slugToCap = (text) => {
    return text
        .split('-') // Split hyphenated words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(' '); // Join words back
}