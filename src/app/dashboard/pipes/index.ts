
export const buildRoute = (route: string) => {
    return `/merchant/dashboard${ route }`;
}

export const cutText = (text: string, maxCharacters: number = 20) => {
    return text.length <= maxCharacters ? text:text.substring(0, maxCharacters).concat('...');
}