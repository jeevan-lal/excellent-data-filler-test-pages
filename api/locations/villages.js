import { CASCADING_DATA } from './_data.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { block, blockId } = req.query || {};
  const targetBlock = block || blockId || '';

  // Brief latency to simulate real network request
  await new Promise((resolve) => setTimeout(resolve, 200));

  let villages = [];
  if (targetBlock) {
    villages = CASCADING_DATA.villages[targetBlock] || [
      { id: `${targetBlock}-VIL1`, name: 'Sector 1' },
      { id: `${targetBlock}-VIL2`, name: 'Sector 2' }
    ];
  }

  return res.status(200).json({
    success: true,
    block: targetBlock,
    data: villages
  });
}
