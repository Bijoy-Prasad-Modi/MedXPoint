import app from "./app.js";
import { v2 as cloudinary} from "cloudinary";

//cloudinary being configured
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  api_key: process.env.CLOUDINARY_API_KEY,
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});


// Debugging to Verify Cloudinary configuration
//console.log("Cloudinary Config:", cloudinary.config());

export default cloudinary;

// app.use((err, req, res, next) => {
//   res.status(500).json({
//     success: false,
//     message: err.message || "Internal Server Error",
//   });
// });
