function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

document.getElementById('substringBtn').addEventListener('click', () => {
    const input = document.getElementById('substringInput').value;
    const result = lengthOfLongestSubstring(input);
    document.getElementById('substringResult').textContent = `Longest substring length: ${result}`;
});