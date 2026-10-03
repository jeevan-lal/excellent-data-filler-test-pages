import { CASCADING_DATA } from './_data.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { district, districtId } = req.query || {};
  const targetDistrict = district || districtId || '';

  // Brief latency to simulate real network request
  await new Promise((resolve) => setTimeout(resolve, 200));

  let blocks = [];
  if (targetDistrict) {
    blocks = CASCADING_DATA.blocks[targetDistrict] || [
      { id: `${targetDistrict}-BLK1`, name: 'Central Block' },
      { id: `${targetDistrict}-BLK2`, name: 'North Block' }
    ];
  }

  return res.status(200).json({
    success: true,
    district: targetDistrict,
    data: blocks
  });
}
