
export const removeKeysFromObject = (words, blacklist) => {	
	const result = {}
	for(const wordKey in words) {
		const wordInfo = words[wordKey]
		
		if(blacklist.indexOf(wordKey) !== -1) {
			continue
		} else {
			result[wordKey] = wordInfo
		}
	}
	return result
}