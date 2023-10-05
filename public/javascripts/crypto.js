const CryptoJS = require("crypto-js");
require("dotenv").config();

// AES256 암호화
module.exports = {
  encryptAES256: (data) => {
    const secretKey = process.env.CPT_KEY;
    const encryptedData = CryptoJS.AES.encrypt(
      data,
      CryptoJS.enc.Utf8.parse(secretKey),
      {
        iv: CryptoJS.enc.Utf8.parse(process.env.REACT_APP_IV_KEY),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC,
      }
    );
    return encryptedData.toString();
  },

  // AES256 복호화
  decryptAES256: (encryptedData) => {
    const secretKey = process.env.CPT_KEY;
    console.log(secretKey, encryptedData);
    const decryptedData = CryptoJS.AES.decrypt(
      encryptedData,
      CryptoJS.enc.Utf8.parse(secretKey),
      {
        iv: CryptoJS.enc.Utf8.parse(process.env.REACT_APP_IV_KEY),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC,
      }
    );
    return decryptedData.toString(CryptoJS.enc.Utf8);
  },
};
