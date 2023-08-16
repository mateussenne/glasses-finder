import { type NextApiRequest, type NextApiResponse } from "next";
import formidable, { errors as formidableErrors } from "formidable";
import type IncomingForm from "formidable/Formidable";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form: IncomingForm = formidable();
  let files;
  try {
    [files] = await form.parse(req);
    console.log(files);
    return res.status(200).end();
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
}

export default handler;
