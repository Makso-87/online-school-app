import aws from "aws-sdk";

const s3 = new aws.S3({
  signatureVersion: "v4",
  accessKeyId: "YCAJEzOdQGjV2h--JmkO6vSsg",
  secretAccessKey: "YCOAPcKl0Bh8IoXOpFa_mcpaI4jQsUJggsU64PBY",
});

export { s3 };
