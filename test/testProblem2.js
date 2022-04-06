const test = require ("../problem2.js");

test.readfile ('lipsum.txt', () => {
    test.fileOfUpperCase('lipsum.txt', "./convertToUpperCase.txt", () => {
        test.fileForSentences("./convertToUpperCase.txt", "splitIntoSentences.txt", () => {
            test.fileOfSortedSentences ("splitIntoSentences.txt", "sortFile.txt", () => {
                test.deleteAllCreatedFile ('./test/filenames.txt',)
            })
        })
    })
}) 
