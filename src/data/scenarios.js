export const CATEGORIES = [
  { id: 'all', label: 'All', count: 22 },
  { id: 'reload-direct', label: 'Reload & Direct', count: 7 },
  { id: 'ajax-spa', label: 'AJAX & SPA', count: 5 },
  { id: 'modals-alerts', label: 'Modals & Alerts', count: 2 },
  { id: 'cascading', label: 'Cascading', count: 1 },
  { id: 'multi-form-url', label: 'Multi-Form & Multi-URL', count: 3 },
  { id: 'file-upload', label: 'File Upload', count: 1 },
  { id: 'iframes', label: 'iFrames', count: 3 }
];

export const SCENARIOS = [
  {
    id: '1A',
    displayId: 'Example 1A',
    title: 'Small and Simple Form',
    category: 'reload-direct',
    tag: 'Starter',
    tagVariant: 'gray',
    description: 'Minimal baseline form featuring 3 standard inputs: First Name, Email, and Submit.',
    mechanism: 'Sync Submit',
    path: '/scenarios/1A'
  },
  {
    id: '1B',
    displayId: 'Example 1B',
    title: 'Comprehensive Form Controls',
    category: 'reload-direct',
    tag: 'Full Controls',
    tagVariant: 'sky',
    description: 'Multi-type controls suite featuring text, date, single select, multiple select, textarea, checkboxes, and radio buttons.',
    mechanism: 'Standard Form',
    path: '/scenarios/1B'
  },
  {
    id: '1',
    displayId: 'Example 1',
    title: 'Success in Site (Post Reload)',
    category: 'reload-direct',
    tag: 'Page Reload',
    tagVariant: 'gray',
    description: 'Page executes standard HTTP reload; success notification appears in top flash DOM container.',
    mechanism: 'Flash Banner',
    path: '/scenarios/1'
  },
  {
    id: '2',
    displayId: 'Example 2',
    title: 'Success in Alert Dialog (Post Reload)',
    category: 'reload-direct',
    tag: 'Native Alert',
    tagVariant: 'amber',
    description: 'Synchronous reload immediately prompts a native window.alert() confirmation box.',
    mechanism: 'window.alert()',
    path: '/scenarios/2'
  },
  {
    id: '3',
    displayId: 'Example 3',
    title: 'Success on Another Page',
    category: 'reload-direct',
    tag: 'Redirect',
    tagVariant: 'gray',
    description: 'Dispatches payload and performs an HTTP redirect to a separate confirmation landing URL.',
    mechanism: '302 Redirect',
    path: '/scenarios/3'
  },
  {
    id: '4',
    displayId: 'Example 4',
    title: 'Modal Form + In-Page Success',
    category: 'modals-alerts',
    tag: 'Modal Popup',
    tagVariant: 'gray',
    description: 'Form is nested inside a popup layer. Modal closes on submit and displays inline toast notice.',
    mechanism: 'Overlay Close',
    path: '/scenarios/4'
  },
  {
    id: '5',
    displayId: 'Example 5',
    title: 'Modal Form + Alert Dialog',
    category: 'modals-alerts',
    tag: 'Modal + Alert',
    tagVariant: 'amber',
    description: 'Form inside popup triggers native browser popup dialog after submission button is clicked.',
    mechanism: 'Modal Alert',
    path: '/scenarios/5'
  },
  {
    id: '6',
    displayId: 'Example 6',
    title: 'AJAX Form (No Page Reload)',
    category: 'ajax-spa',
    tag: 'AJAX / SPA',
    tagVariant: 'emerald',
    description: 'Standard SPA single-page flow. Form calls API asynchronously and shows inline green banner.',
    mechanism: 'Async Fetch',
    path: '/scenarios/6'
  },
  {
    id: '7',
    displayId: 'Example 7',
    title: 'Success in Site + Error in Alert',
    category: 'ajax-spa',
    tag: 'Mixed Handlers',
    tagVariant: 'gray',
    description: 'Valid posts render in-page notice; validation errors trigger native popup alert without reloading.',
    mechanism: 'Split Flow',
    path: '/scenarios/7'
  },
  {
    id: '8',
    displayId: 'Example 8',
    title: 'Delayed Form + AJAX Success',
    category: 'ajax-spa',
    tag: 'Delayed Mount',
    tagVariant: 'purple',
    description: 'Form markup is injected after an intentional 2500ms delay to test polling and observer injection.',
    mechanism: '2500ms Delay',
    path: '/scenarios/8'
  },
  {
    id: '9',
    displayId: 'Example 9',
    title: 'Success with Generated Record ID',
    category: 'reload-direct',
    tag: 'Record ID',
    tagVariant: 'gray',
    description: 'Reload outputs dynamic record identifier (e.g. REC-1049) to be recorded back into the workbook.',
    mechanism: 'Token Extraction',
    path: '/scenarios/9'
  },
  {
    id: '10',
    displayId: 'Example 10',
    title: 'Dual Success & Error Summary',
    category: 'reload-direct',
    tag: 'Summary Panel',
    tagVariant: 'gray',
    description: 'Post-reload layout renders stacked composite block with partially saved records and validation logs.',
    mechanism: 'Batch Feedback',
    path: '/scenarios/10'
  },
  {
    id: '10-1',
    displayId: 'Example 10-1',
    title: 'DOM Success + Warning Alert',
    category: 'multi-form-url',
    tag: 'Hybrid Alert',
    tagVariant: 'amber',
    description: 'Displays a saved record container while simultaneously launching a non-fatal warning alert dialog.',
    mechanism: 'Dual Trigger',
    path: '/scenarios/10-1'
  },
  {
    id: '11',
    displayId: 'Example 11',
    title: '4-Tier Cascading Dropdowns',
    category: 'cascading',
    tag: 'Cascading',
    tagVariant: 'sky',
    description: 'State -> District -> Block -> Village. Each tier fetches options asynchronously before enabling the next.',
    mechanism: '4 Selects',
    path: '/scenarios/11'
  },
  {
    id: '12-13',
    displayId: 'Example 12-13',
    title: 'Two Forms Across Different URLs',
    category: 'multi-form-url',
    tag: 'Multi-URL',
    tagVariant: 'gray',
    description: 'Multi-stage form flow where Part 1 executes on one route and continues automatically on the second route.',
    mechanism: '2-Step Flow',
    path: '/scenarios/12'
  },
  {
    id: '14',
    displayId: 'Example 14',
    title: 'Delayed Success After Redirect',
    category: 'ajax-spa',
    tag: 'Polling Wait',
    tagVariant: 'purple',
    description: 'Redirect arrives at destination, but completion message requires 3000ms background polling delay.',
    mechanism: '3s Poller',
    path: '/scenarios/14'
  },
  {
    id: '15',
    displayId: 'Example 15',
    title: 'Single & Batch File Uploads',
    category: 'file-upload',
    tag: 'File Upload',
    tagVariant: 'emerald',
    description: 'Form has input[type="file"] with single and multiple attributes. Tests DataTransfer file injection.',
    mechanism: 'Blob Dispatch',
    path: '/scenarios/15'
  },
  {
    id: '16',
    displayId: 'Example 16',
    title: 'Two Sibling Forms on Same URL',
    category: 'multi-form-url',
    tag: 'Dual Forms',
    tagVariant: 'gray',
    description: 'Two separate forms side by side (e.g. Sender vs Recipient). Tests explicit parent-scope targeting.',
    mechanism: 'Scoped Selectors',
    path: '/scenarios/16'
  },
  {
    id: '17',
    displayId: 'Example 17',
    title: 'Form Filled, No Visual Feedback',
    category: 'ajax-spa',
    tag: 'Edge Case',
    tagVariant: 'gray',
    description: 'Submits payload without producing any DOM message or alert. Validates runner timeout graceful exit.',
    mechanism: 'Silent Response',
    path: '/scenarios/17'
  },
  {
    id: '18',
    displayId: 'Example 18',
    title: 'Form Inside Single iframe',
    category: 'iframes',
    tag: 'Single iFrame',
    tagVariant: 'gray',
    description: 'Target form is encapsulated inside an iframe. Tests content-script injection across all frames.',
    mechanism: 'Frame Context',
    path: '/scenarios/18'
  },
  {
    id: '18-1',
    displayId: 'Example 18-1',
    title: 'iframe Mounts After Delay',
    category: 'iframes',
    tag: 'Delayed iFrame',
    tagVariant: 'purple',
    description: 'iframe DOM node is added dynamically 1800ms after load. Assesses frame wait stability.',
    mechanism: '1800ms Delay',
    path: '/scenarios/18-1'
  },
  {
    id: '19',
    displayId: 'Example 19',
    title: 'Two iframes on Single Page',
    category: 'iframes',
    tag: 'Dual iFrames',
    tagVariant: 'gray',
    description: 'Page contains two distinct iframe frames simultaneously. Validates multiple frame indexing.',
    mechanism: 'Multi-Context',
    path: '/scenarios/19'
  }
];
