const fs = require("fs");



// function readfile (file, callback) {
//     fs.readFile(file, function (err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         callback("./convertToUpperCase.txt", data, fileForSentences)
//     })
// }

// function fileOfUpperCase (file, data, callback) {
//     fs.writeFile(file, data.toString().toUpperCase(), function (err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log("The uppercase file was saved!");
//         fileNames = "convertToUpperCase.txt\n"
//         fs.writeFile('./test/filenames.txt', fileNames.toString(), function (err) {
//             if (err) {
//                 console.log(err);
//             }
//             console.log("uppercase file name saved");
//             callback ("splitIntoSentences.txt", data, fileOfSortedSentences)
//         });
//     })
// }

// function fileForSentences(file, data1, callback) {
//     data1 = data1.toString().toLowerCase();
//     data1 = data1.split(".").join("\n");
//     fs.writeFile(file, data1, function (err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log("The split file was saved!");
//         fileNames = "splitIntoSentences.txt\n";
//         fs.appendFile('./test/filenames.txt', fileNames.toString(), function (err) {
//             if (err) console.log(err);
//             console.log("split Data is appended to file successfully.")
//             callback("sortFile.txt", data1, deleteAllCreatedFile)
//         });
//     });
// }

// function fileOfSortedSentences(file, data, callback) {
//     function sortString(str) {
//         let arr = str.split('\n');
//         let sorted = arr.sort();
//         return sorted.join('\n');
//     }
//     fs.writeFile(file, sortString(data.toString()), function (err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log("The sort file was saved!");
//         // });
//         fileNames = "sortFile.txt\n";
//         fs.appendFile('./test/filenames.txt', fileNames.toString(), function (err) {
//             if (err) console.log(err);
//             console.log("sortfile name is appended to file successfully.")
//             callback('./test/filenames.txt')
//         })
//     })
// }

// function deleteAllCreatedFile (file) {
//     fs.readFile(file, function (err, data) {
//         if (err) {
//             console.log(err);
//         }
//         fileNamesArray = function (str) {
//             return str.trim().split("\n");
//         };
//         let fileNameAre = fileNamesArray(data.toString());
//         fileNameAre.forEach((deleteFile) => {
//             fs.unlink(deleteFile, function (err) {
//                 if (err) console.log(err);
//                 console.log("file deleted");
//             })
//         });
//     });
// }
// 
//  readfile('lipsum.txt', fileOfUpperCase);









function readfile (file, callback) {
    fs.readFile(file, callback)
        console.log('read main file')
    
}


function fileOfUpperCase(fileRead, fileWrite, callback) {
    fs.readFile(fileRead, function (err, data) {
        if (err) {
            return console.error(err);
        }
        let upperData = data.toString().toUpperCase()
        fs.writeFile(fileWrite, upperData, callback)
        console.log("The uppercase file was saved!");
        fileNames = "convertToUpperCase.txt\n"
        fs.writeFile('./test/filenames.txt', fileNames.toString(), function (err) {
            if (err) {
                console.log(err);
            }
            console.log("uppercase file name saved.");
        });
    })
}


function fileForSentences(fileRead, fileWrite, callback) {
    fs.readFile(fileRead, function (err, data) {
        if (err) {
            return console.error(err);
        }
        data = data.toString().toLowerCase();
        data = data.split(".").join("\n");
        fs.writeFile(fileWrite, data, callback)
        console.log("The split file was saved!");
        fileNames = "splitIntoSentences.txt\n";
        fs.appendFile('./test/filenames.txt', fileNames.toString(), function (err) {
            if (err) console.log(err);
            console.log("split file name saved.")
        });
    })
}


function fileOfSortedSentences(fileRead, fileWrite, callback) {
    fs.readFile(fileRead, function (err, data) {
        if (err) {
            return console.error(err);
        }
        str = data.toString()
        function sortString(str) {
            let arr = str.split('\n');
            let sorted = arr.sort();
            return sorted.join('\n');
        }
        fs.writeFile(fileWrite, sortString(str), callback)
        console.log("The sort file was saved!");
        fileNames = "sortFile.txt\n";
        fs.appendFile('./test/filenames.txt', fileNames.toString(), function (err) {
            if (err) console.log(err);
            console.log("sort file name saved.")
        })
    })
}


function deleteAllCreatedFile (file) {
    fs.readFile(file, function (err, data) {
        if (err) {
            console.log(err);
        }
        fileNamesArray = function (str) {
            return str.trim().split("\n");
        };
        let fileNameAre = fileNamesArray(data.toString());
        fileNameAre.forEach((deleteFile) => {
            fs.unlink(deleteFile, function (err) {
                if (err) console.log(err);
                console.log("file deleted");
            })
        });
    });
}


module.exports = {readfile, fileOfUpperCase, fileForSentences, fileOfSortedSentences, deleteAllCreatedFile}
