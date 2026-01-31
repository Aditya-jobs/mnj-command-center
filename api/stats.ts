export default async function handler(req: any, res: any) {
  try {
    const GAS_URL = process.env.GAS_URL;
    const MNJ_KEY = process.env.MNJ_KEY;

    if (!GAS_URL || !MNJ_KEY) {
      return res.status(500).json({ success: false, error: "Missing env vars" });
    }

    const url = `${GAS_URL}?action=stats&key=${encodeURIComponent(MNJ_KEY)}`;

    const r = await fetch(url);
    const data = await r.json();

    return res.status(200).json(data);
  } catch (err: any) {
    return res.status(500).json({ success: false, error: String(err?.message || err) });
  }
}
