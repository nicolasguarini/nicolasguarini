export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };
    
    return date.toLocaleDateString('en-GB', options).replace(/ /g, ' ');
}

export const calculateReadingTime = (contentLength: number): number => {
    const wordsPerMinute = 200;
    const averageWordLength = 5;
    
    const totalWords = contentLength / averageWordLength;
    const readingTime = Math.ceil(totalWords / wordsPerMinute);
    
    return readingTime;
}