import { type NextApiRequest, type NextApiResponse } from "next";
import formidable from "formidable";
import type IncomingForm from "formidable/Formidable";
import fs from "fs";
import sharp from "sharp";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form: IncomingForm = formidable({});
  const parsedForm = await form.parse(req);

  // Verify if file is present from parsedForm
  if (!parsedForm[1].file) {
    console.log("No form file provided");
    return res.status(500).end();
  }
  const file = parsedForm[1].file[0];

  if (!file) {
    console.log("No file loaded");
    return res.status(500).end();
  }

  const resizedPath = file.filepath + "_resized";
  try {
    await sharp(file.filepath).resize(300).toFile(resizedPath);
    const base64img = fs.readFileSync(resizedPath, "base64");
    return res.send({ base64img });
  } catch {
    (error: string) => {
      return console.log(error);
    };
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
