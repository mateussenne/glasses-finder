import { type NextApiRequest, type NextApiResponse } from "next";
import formidable from "formidable";
import type IncomingForm from "formidable/Formidable";
import fs from "fs";

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

  const base64img = fs.readFileSync(file.filepath, "base64");

  return res.send({ base64img });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
