const vocals = ['a', 'e', 'i', 'o', 'u'];
module.exports = {
	isVowel: function(charToTest) {
		return vocals.indexOf(charToTest) >= 0;
	},
};