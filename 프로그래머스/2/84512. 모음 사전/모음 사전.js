function solution(word) {
    const vowelArr = ['A', 'E', 'I', 'O', 'U'];
    const dictionary = [];
    
    function generateWord(current) {
        if (current.length === 5) {
            return;
        }
        
        for (let i = 0; i < vowelArr.length; i++) {
            const newWord = current + vowelArr[i];
            dictionary.push(newWord);  
            generateWord(newWord);   
        }
    }
    
    generateWord('');
    
    dictionary.sort();

    return dictionary.indexOf(word) + 1;
}
