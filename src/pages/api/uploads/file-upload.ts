import { type NextApiRequest, type NextApiResponse } from "next";
import formidable from "formidable";
import type IncomingForm from "formidable/Formidable";
import AWS from "aws-sdk";
import fs from "fs";

const s3 = new AWS.S3();
const Bucket = process.env.AWS_S3_BUCKET_NAME;
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form: IncomingForm = formidable({});
  const parsedForm = await form.parse(req);

  // Verify if file is present from parsedForm
  if (!Bucket || !parsedForm[1].file) {
    console.log("No bucket or form files provided");
    return res.status(500).end();
  }
  const file = parsedForm[1].file[0];

  if (!file) {
    console.log("No file provided");
    return res.status(500).end();
  }

  try {
    await s3
      .putObject({
        Bucket,
        Key: file?.originalFilename ?? "test.jpg",
        Body: fs.createReadStream(file?.filepath),
        ContentType: "image/jpeg",
      })
      .promise();
    return res.status(200).end();
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
