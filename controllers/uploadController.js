const AWS = require("aws-sdk");
const { v4: uuid } = require("uuid");

const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
});

class Controller {
  static async getSignedUrl(req, res, next) {
    try {
      const { type, extension } = req.body;
      const key = `${type}/${uuid()}.${extension}`;
      const uploadUrl = await s3.getSignedUrl("putObject", {
        Bucket: process.env.S3_BUCKETNAME,
        Key: key,
        Expires: +process.env.SIGNED_URL_EXPIRE,
        ACL: "public-read",
        ContentType: "application/json",
      });

      res.status(200).json({
        uploadUrl,
        objectUrl: `https://${process.env.S3_ENDPOINT}/${key}`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
