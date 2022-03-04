const { v4: uuidv4 } = require("uuid");

const params = (fileName) => {
  const myFile = fileName.originalname.split(".");
  const fileType = myFile[myFile.length - 1];

  const imageParams = {
    Bucket: config.bucket, //"user-images-082438e6-1f16-47b0-b1f0-90604e6c1493",
    Key: `${uuidv4()}.${fileType}`,
    Body: fileName.buffer,
    ACL: "public-read", // allow read access to this file
  };

  return imageParams;
};

module.exports = params;
