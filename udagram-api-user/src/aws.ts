import AWS = require("aws-sdk");
import { config } from "./config/config";

// Configure AWS
const credentials = new AWS.SharedIniFileCredentials({
  profile: config.aws_profile,
});
console.log("BEFORE==============");
console.log(`credentials.aws_access_key_id=${credentials.accessKeyId}`);
console.log(`credentials.secretAccessKey=${credentials.secretAccessKey}`);
console.log("==============");
if (credentials.accessKeyId === undefined) {
  credentials.accessKeyId = process.env.AWS_ACCESS_KEY_ID;
}
if (credentials.secretAccessKey === undefined) {
  credentials.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
}
console.log("AFTER==============");
console.log(`AWS_ACCESS_KEY_ID=${process.env.AWS_ACCESS_KEY_ID}`);
console.log(`AWS_SECRET_ACCESS_KEY=${process.env.AWS_SECRET_ACCESS_KEY}`);
console.log(`credentials.aws_access_key_id=${credentials.accessKeyId}`);
console.log(`credentials.secretAccessKey=${credentials.secretAccessKey}`);
console.log("==============");
AWS.config.credentials = credentials;

export const s3 = new AWS.S3({
  signatureVersion: "v4",
  region: config.aws_region,
  params: { Bucket: config.aws_media_bucket },
});

// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl("getObject", {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl("putObject", {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}
