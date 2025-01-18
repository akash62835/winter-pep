function groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
        const sorted = str.split('').sort().join('');
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        map.get(sorted).push(str);
    }

    return Array.from(map.values());
}

document.getElementById('anagramBtn').addEventListener('click', () => {
    const input = document.getElementById('anagramInput').value;
    const words = input.split(',').map(word => word.trim());
    const result = groupAnagrams(words);
    document.getElementById('anagramResult').textContent = JSON.stringify(result, null, 2);
});