export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Artificial delay so loading state and title transition are clearly observable
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return res.status(200).json({
    status: 200,
    success: true,
    message: 'Form submitted successfully!',
    endpoint: '/api/example6',
    data: req.body || {},
    timestamp: new Date().toISOString()
  });
}
