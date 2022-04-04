module.exports = workWithAsync;

const fs = require("fs");

function workWithAsync(file) {

    fs.readFile(file, function (err, data) {
        if (err) {
            return console.error(err);
        }




        let fileNames = ""
        fs.writeFile("./convertToUpperCase.txt", data.toString().toUpperCase(), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");

            fileNames = "convertToUpperCase.txt\n";
            fs.writeFile('./test/filenames.txt', fileNames.toString(), function (err) {
                if (err) {
                    console.log(err);
                }
                console.log("file name saved");
            });




            fs.readFile('convertToUpperCase.txt', function (err, data) {
                if (err) {
                    return console.error(err);
                }
                let data1 = data.toString().toLowerCase();
                data1 = data1.split(".").join("\n");

                fs.writeFile("splitIntoSentences.txt", data1, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("The file was saved!");

                    fileNames = "splitIntoSentences.txt\n";
                    fs.appendFile('./test/filenames.txt', fileNames.toString(), function (err) {
                        if (err) console.log(err);
                        console.log("Data is appended to file successfully.")
                    });
                });



                fs.readFile('splitIntoSentences.txt', function (err, data) {
                    if (err) {
                        return console.error(err);
                    }

                    function sortString(str) {
                        let arr = str.split('\n');
                        let sorted = arr.sort();
                        return sorted.join('\n');
                    }

                    fs.writeFile("sortFile.txt", sortString(data.toString()), function (err) {
                        if (err) {
                            return console.log(err);
                        }
                        console.log("The file was saved!");
                    });

                    fileNames = "sortFile.txt\n";
                    fs.appendFile('./test/filenames.txt', fileNames.toString(), function (err) {
                        if (err) console.log(err);
                        console.log("Data is appended to file successfully.")
                    })

                    fs.readFile('./test/filenames.txt', function (err, data) {
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
                });
            });
        });
    });
}

