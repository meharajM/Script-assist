export const shouldShowOptions = (ev) => {
    const isEnter = ev.key === 'Enter';
    return isEnter && ev.shiftKey
}