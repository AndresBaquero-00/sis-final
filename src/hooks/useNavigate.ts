
export const useNavigate = () => {
    return (url: string) => {
        const navigator = document.createElement('a');
        navigator.href = url;
        navigator.click();
    }
}