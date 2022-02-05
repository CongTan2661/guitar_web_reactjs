const multer = require("multer");
const upLoadImgMainAndList = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/images`);
    },
    filename: function (req, file, cb) {
      cb(null, `${file.originalname}`);
    },
  });

  const upload = multer({
    storage,
  });
  return upload.fields([
    {
      name: "productMain",
      maxCount: 1,
    },
    {
      name: "productList",
      maxCount: 5,
    },
  ]);
};

module.exports = {
  upLoadImgMainAndList,
};
