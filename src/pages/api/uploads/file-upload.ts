import { type NextApiRequest, type NextApiResponse } from "next";
import formidable, { errors as formidableErrors } from "formidable";
import type IncomingForm from "formidable/Formidable";
import AWS from "aws-sdk";
import fs from "fs";

const s3 = new AWS.S3();
const Bucket = process.env.AWS_S3_BUCKET_NAME;
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form: IncomingForm = formidable();
  return console.log(form);
  try {
    const [files] = await form.parse(req);
    const file = files[0];
    if (!Bucket || file) {
      return res.status(500).end();
    }

    return console.log(file);
    await s3
      .putObject({
        Bucket,
        Key: "hey12.png",
        Body: fs.createReadStream(file),
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
