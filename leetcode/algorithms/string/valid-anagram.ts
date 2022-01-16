function getAnagramSig(s: string): string {
    return s.split('').sort((a: string,b: string): number => a.charCodeAt(0) - b.charCodeAt(0)).join('');
}
function isAnagram(s: string, t: string): boolean {
    return getAnagramSig(s)===getAnagramSig(t);
};