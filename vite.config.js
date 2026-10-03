import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

import { CASCADING_DATA } from './src/data/cascadingLocations.js';

function apiDevServerPlugin() {
  return {
    name: 'api-dev-server-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const parsedUrl = new URL(req.url, 'http://localhost');
        const pathname = parsedUrl.pathname;
        const query = parsedUrl.searchParams;

        if (pathname.startsWith('/api/locations')) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          res.setHeader('Content-Type', 'application/json');

          if (req.method === 'OPTIONS') {
            res.statusCode = 200;
            res.end();
            return;
          }

          setTimeout(() => {
            res.statusCode = 200;
            if (pathname === '/api/locations/states' || (pathname === '/api/locations' && query.get('type') === 'states')) {
              res.end(JSON.stringify({ success: true, data: CASCADING_DATA.states }));
            } else if (pathname === '/api/locations/districts' || (pathname === '/api/locations' && query.get('type') === 'districts')) {
              const state = query.get('state') || query.get('stateId') || '';
              res.end(JSON.stringify({ success: true, state, data: CASCADING_DATA.districts[state] || [] }));
            } else if (pathname === '/api/locations/blocks' || (pathname === '/api/locations' && query.get('type') === 'blocks')) {
              const district = query.get('district') || query.get('districtId') || '';
              const blocks = CASCADING_DATA.blocks[district] || (district ? [
                { id: `${district}-BLK1`, name: 'Central Block' },
                { id: `${district}-BLK2`, name: 'North Block' }
              ] : []);
              res.end(JSON.stringify({ success: true, district, data: blocks }));
            } else if (pathname === '/api/locations/villages' || (pathname === '/api/locations' && query.get('type') === 'villages')) {
              const block = query.get('block') || query.get('blockId') || '';
              const villages = CASCADING_DATA.villages[block] || (block ? [
                { id: `${block}-VIL1`, name: 'Sector 1' },
                { id: `${block}-VIL2`, name: 'Sector 2' }
              ] : []);
              res.end(JSON.stringify({ success: true, block, data: villages }));
            } else {
              res.end(JSON.stringify({ success: true, data: CASCADING_DATA.states }));
            }
          }, 200);
          return;
        }

        const url = req.url ? req.url.split('?')[0] : '';
        if ((url === '/api/example6' || url === '/api/tasks' || url === '/api/submit') && (req.method === 'POST' || req.method === 'GET' || req.method === 'OPTIONS')) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

          if (req.method === 'OPTIONS') {
            res.statusCode = 200;
            res.end();
            return;
          }

          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            let parsedBody = {};
            try {
              if (body) parsedBody = JSON.parse(body);
            } catch (e) {
              parsedBody = { raw: body };
            }

            // Simulate network latency so loading state and title transitions are observable
            setTimeout(() => {
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(
                JSON.stringify({
                  status: 200,
                  success: true,
                  message: 'Form submitted successfully!',
                  endpoint: '/api/example6',
                  data: parsedBody,
                  timestamp: new Date().toISOString()
                })
              );
            }, 1000);
          });
          return;
        }
        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    apiDevServerPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/favicon.ico', 'icons/180x180.png', 'icons/192x192.png', 'icons/512x512.png'],
      manifest: {
        name: 'Excellent Data Filler Test Suite',
        short_name: 'ED Filler Tests',
        description: 'Form Runner and Extension Validation Matrix',
        theme_color: '#0a2368',
        background_color: '#f8fafd',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icons/192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/icons/512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/example\/.*\.xlsx$/, /^\/api\/.*$/]
      }
    })
  ]
});
