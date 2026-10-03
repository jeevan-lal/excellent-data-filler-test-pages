import { CASCADING_DATA } from './_data.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { type, state, district, block } = req.query || {};

  await new Promise((resolve) => setTimeout(resolve, 200));

  if (type === 'states' || !type) {
    return res.status(200).json({ success: true, data: CASCADING_DATA.states });
  }

  if (type === 'districts') {
    return res.status(200).json({
      success: true,
      data: state ? (CASCADING_DATA.districts[state] || []) : []
    });
  }

  if (type === 'blocks') {
    const blocks = district ? (CASCADING_DATA.blocks[district] || [
      { id: `${district}-BLK1`, name: 'Central Block' },
      { id: `${district}-BLK2`, name: 'North Block' }
    ]) : [];
    return res.status(200).json({ success: true, data: blocks });
  }

  if (type === 'villages') {
    const villages = block ? (CASCADING_DATA.villages[block] || [
      { id: `${block}-VIL1`, name: 'Sector 1' },
      { id: `${block}-VIL2`, name: 'Sector 2' }
    ]) : [];
    return res.status(200).json({ success: true, data: villages });
  }

  return res.status(400).json({ success: false, error: 'Unknown location type' });
}
