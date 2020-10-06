module.exports = function toReadable(number) {
    let string = number.toString();

    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let scales = ['', 'thousand', 'million', 'billion', 'trillion'];

    if (parseInt(string) === 0) {
        return 'zero';
    } else {

        let start = string.length;
        let end;
        let numbersToArray = [];
        
        while (start > 0) {
            end = start;
            numbersToArray.push(string.slice(start = Math.max(0, start - 3), end));
        }

        let numbersToArrayLength = numbersToArray.length;
        let words = [];
        let word;
        
        for (let i = 0; i < numbersToArrayLength; i++) {

            let partNumbersToArray = parseInt(numbersToArray[i]);

            if (partNumbersToArray) {

                let el = numbersToArray[i].split('').reverse().map(parseFloat);


                if (el[1] === 1) {
                    el[0] += 10;
                }


                if (word = scales[i]) {
                    words.push(word);
                }


                if (word = units[el[0]]) {
                    words.push(word);
                }


                if (word = tens[el[1]]) {
                    words.push(word);
                }

                if (word = units[el[2]]) {
                    words.push(word + ' hundred');
                }

            }

        }

        return words.reverse().join(' ');

    }
}
