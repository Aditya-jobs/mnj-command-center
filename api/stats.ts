export default async function handler(req: any, res: any) {
  try {
    const url =
      "https://script.google.com/macros/s/AKfycbweSIGtdsPRPBchCCMC31Bv_LDgrLTBpjafrLwbPTsemRRwBFrOnJgXtr-RmLCzIgPC/exec?action=stats&key=MNJ_SUPER_SECRET_123456789";

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({
      success: false,
      error: err.message || "Server error",
    });
  }
}
