import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';
interface SheetForm {
  name: string;
  phone: string;
  email: string;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).send({ message: 'only post requests' });

  const body = req.body as SheetForm;

  try {
    const auth = new GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: 'A1:C1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[body.name, body.email, body.phone]],
      },
    });

    return res.status(200).json({
      data: response.data,
    });
  } catch (e: any) {
    return res
      .status(500)
      .send({ message: e.message ?? 'something went wrong' });
  }
}
