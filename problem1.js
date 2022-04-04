const fs = require('fs');
const path = require('path');
module.exports = randomCreateAndDelete;



const createRandomDirectory = (directory) => {
    let createPath = path.join(__dirname, directory);
    fs.mkdir(createPath, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("directory created");
    })
}



function randomCreateAndDelete(path, data) {
    async function createJsonFiles(path, data) {
        console.log(data);
        const callBack = (err) => {
            if (err) {
                console.log(err);
            }
            console.log("file created");
        }


        fs.writeFile('./dirForRandomJSON/ra.json', data, "utf-8", callBack);


        const deleted = await deleteFile('./dirForRandomJSON/ra.json');
        console.log(deleted);
    }




    const deleteFile = (path) => {
        return new Promise(solve => {
            setTimeout(() => fs.unlink(path, function (err) {
                if (err) {
                    console.log(err);
                }
                solve('File deleted!');
            }), 1000);

        });
    }


    //createJsonFiles('./dirForRandomJSON/ra.json' , "hello");
    createJsonFiles(path, data);
}
createRandomDirectory('./dirForRandomJSON');