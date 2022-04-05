const test = require ('../problem1.js');

function fileCreateAndDelete(path1, data){
    test.createRandomDirectory ('./dirForRandomJSON1', () => {
        test.createJsonFiles(path1, data, () => {
           console.log("file created");
            test.deleteFile(path1, () => {
                console.log("file deleted!")
            })
        })
   }) 
}


fileCreateAndDelete('./dirForRandomJSON1/ra.json', "welcome to callbacks")
