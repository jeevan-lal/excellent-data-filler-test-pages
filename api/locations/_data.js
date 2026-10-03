export const CASCADING_DATA = {
  states: [
    { id: 'MH', name: 'Maharashtra' },
    { id: 'KA', name: 'Karnataka' },
    { id: 'DL', name: 'Delhi' },
    { id: 'GJ', name: 'Gujarat' },
    { id: 'TN', name: 'Tamil Nadu' }
  ],
  districts: {
    MH: [
      { id: 'MH-PUN', name: 'Pune' },
      { id: 'MH-MUM', name: 'Mumbai City' },
      { id: 'MH-THN', name: 'Thane' },
      { id: 'MH-NAG', name: 'Nagpur' }
    ],
    KA: [
      { id: 'KA-BLR', name: 'Bengaluru Urban' },
      { id: 'KA-MYS', name: 'Mysuru' },
      { id: 'KA-MNG', name: 'Mangaluru' }
    ],
    DL: [
      { id: 'DL-NDL', name: 'New Delhi' },
      { id: 'DL-SDL', name: 'South Delhi' },
      { id: 'DL-CDL', name: 'Central Delhi' }
    ],
    GJ: [
      { id: 'GJ-AHM', name: 'Ahmedabad' },
      { id: 'GJ-SRT', name: 'Surat' },
      { id: 'GJ-VAD', name: 'Vadodara' }
    ],
    TN: [
      { id: 'TN-CHN', name: 'Chennai' },
      { id: 'TN-CBE', name: 'Coimbatore' },
      { id: 'TN-MDU', name: 'Madurai' }
    ]
  },
  blocks: {
    'MH-PUN': [
      { id: 'PUN-HAV', name: 'Haveli' },
      { id: 'PUN-CIT', name: 'Pune City' },
      { id: 'PUN-MUL', name: 'Mulshi' },
      { id: 'PUN-BAR', name: 'Baramati' }
    ],
    'MH-MUM': [
      { id: 'MUM-COL', name: 'Colaba' },
      { id: 'MUM-BYC', name: 'Byculla' },
      { id: 'MUM-DAD', name: 'Dadar' }
    ],
    'KA-BLR': [
      { id: 'BLR-NTH', name: 'Bangalore North' },
      { id: 'BLR-STH', name: 'Bangalore South' },
      { id: 'BLR-EST', name: 'Bangalore East' }
    ],
    'DL-NDL': [
      { id: 'NDL-CP', name: 'Connaught Place' },
      { id: 'NDL-CHA', name: 'Chanakyapuri' }
    ]
  },
  villages: {
    'PUN-HAV': [
      { id: 'VIL-WAK', name: 'Wakad' },
      { id: 'VIL-HIN', name: 'Hinjawadi' },
      { id: 'VIL-HAD', name: 'Hadapsar' },
      { id: 'VIL-KHO', name: 'Khadakwasla' }
    ],
    'PUN-CIT': [
      { id: 'VIL-KOT', name: 'Kothrud' },
      { id: 'VIL-SHI', name: 'Shivajinagar' },
      { id: 'VIL-AUN', name: 'Aundh' },
      { id: 'VIL-BAN', name: 'Baner' }
    ],
    'BLR-STH': [
      { id: 'VIL-KOR', name: 'Koramangala' },
      { id: 'VIL-JAY', name: 'Jayanagar' },
      { id: 'VIL-BTM', name: 'BTM Layout' }
    ],
    'NDL-CP': [
      { id: 'VIL-BAR', name: 'Barakhamba' },
      { id: 'VIL-JAN', name: 'Janpath' }
    ]
  }
};
