  // const fs = require("fs")



// fs.readFile("sample.txt", "utf8", (err, data) => {
//     if (!err) {
//         console.log(data); // file content
//     }
// });
// const mv = require("mv")


// mv(oldPath, newPath, 
//             {mkdirp: false, clobber: false}, (err) => {
//     if (err) {
//         throw err;
//     }
// });
var fs = require('fs-extra');
var folders = fs.readdirSync('./photos');
const fileArray = []
// folders.forEach(folder => {

fs.readdir('./photos', (err, folder) => {
    if (err) {
      throw err;
    }
    folder.forEach(folder => {
      fs.readdir(`./photos/${folder}`, (err, photo) => {
        if (err) {
          throw err;
        }
        photo.forEach(el=>{
          console.log(folder,el)
        })
    })
  })
});





    // let files = fs.readdirSync(`./photos/${folder}`)
    //     files.forEach(photo => {
    //         fs.move(`./photos/${folder}/${photo}`, `./photos//${folder}/photo${count}.jpg`, function (err) {
    //             if (err) return console.error(err)
    //             console.log("success!")
    //            }); count -= 1
