// api/check.js
// Vercel Serverless Function — Google Safe Browsing proxy

export default async function handler(req, res) {
  // CORS header'larini qo'shish
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // OPTIONS so'rovi (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Faqat POST qabul qilamiz
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'URL kerak' });
    }

    // API kalit Vercel sozlamalaridan olinadi (kod'da yo'q!)
    const API_KEY = process.env.GOOGLE_SAFE_BROWSING_KEY;

    if (!API_KEY) {
      return res.status(500).json({ error: 'API kalit sozlanmagan' });
    }

    // Google Safe Browsing API ga so'rov
    const googleUrl = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${API_KEY}`;

    const payload = {
      client: {
        clientId: 'ishonchlink',
        clientVersion: '1.0.0'
      },
      threatInfo: {
        threatTypes: [
          'MALWARE',
          'SOCIAL_ENGINEERING',
          'UNWANTED_SOFTWARE',
          'POTENTIALLY_HARMFUL_APPLICATION'
        ],
        platformTypes: ['ANY_PLATFORM'],
        threatEntryTypes: ['URL'],
        threatEntries: [{ url: url }]
      }
    };

    const response = await fetch(googleUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    // Natijani qaytaramiz
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({
      error: 'Server xatosi',
      message: error.message
    });
  }
}
