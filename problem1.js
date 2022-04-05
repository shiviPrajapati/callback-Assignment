const fs = require('fs');
const path = require('path');




// const createRandomDirectory = (directory, callback) => {
//     let createPath = path.join(__dirname, directory);
//     fs.mkdir(createPath, function (err) {
//         if (err) {
//             console.log(err);
//         }
//         console.log("directory created");
//         callback('./dirForRandomJSON/ra.json', "hello", deleteFile)
//     })
// }




// const createJsonFiles = (path, data, callBack) => {
//     fs.writeFile('./dirForRandomJSON/ra.json', data, "utf-8", function (err) {
//         if (err) {
//             console.log(err);
//         }
//         console.log("file created");
//         console.log("file data: ", data);
//         callBack('./dirForRandomJSON/ra.json');
//     });
// }




// function deleteFile(path) {
//     fs.unlink(path, function (err) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log('File deleted!');
//         }
//     })

// };


// createRandomDirectory('./dirForRandomJSON', createJsonFiles);






const createRandomDirectory = (directory, callback) => {
    let createPath = path.join(__dirname, directory);
    fs.mkdir(createPath, callback )
    console.log("directory created");
}




const createJsonFiles = (path, data, callBack) => {
    fs.writeFile(path, data, 'utf-8', callBack);
    console.log("file data: ", data);
}




function deleteFile(path, callBack) {
    fs.unlink(path,callBack);
};

module.exports = {createRandomDirectory, createJsonFiles, deleteFile};



