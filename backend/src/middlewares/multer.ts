import multer from "multer";

// let storage = multer.diskStorage({
//   destination: function (request, file, callback) {
//     callback(null, "uploads");
//   },
//   filename: function (request, file, callback) {
//     let extension = file.originalname.substring(
//       file.originalname.lastIndexOf(".")
//     );
//     callback(null, file.fieldname + "-" + Date.now() + extension);
//   },
// });
let storage = multer.memoryStorage();

export const upload = multer({ storage: storage });
