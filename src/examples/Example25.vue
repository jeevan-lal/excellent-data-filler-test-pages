<template>
  <div class="space-y-8">
    <!-- Quick Jump Navigation Pills -->
    <div class="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
      <div class="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
        <svg class="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        Table Archetypes Index
      </div>
      <div class="flex flex-wrap gap-2">
        <a href="#sec-horizontal-headings" class="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors">
          1. Horizontal Headings
        </a>
        <a href="#sec-vertical-headings" class="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors">
          2. Vertical Headings
        </a>
        <a href="#sec-rowspan-spanned" class="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors">
          3. Rowspan Spanned
        </a>
        <a href="#sec-no-headers" class="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors">
          4. No Headers (Raw)
        </a>
        <a href="#sec-form-elements" class="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors">
          5. Form Elements
        </a>
        <a href="#sec-with-images" class="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors">
          6. Images &amp; Catalog
        </a>
      </div>
    </div>

    <!-- ========================================================================= -->
    <!-- 1. HORIZONTAL HEADINGS TABLE                                              -->
    <!-- ========================================================================= -->
    <section id="sec-horizontal-headings" class="space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300">
              Type 1
            </span>
            <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">
              Horizontal Headings Table
            </h3>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Standard horizontal layout featuring column headers in &lt;thead&gt; and regular &lt;tr&gt; / &lt;td&gt; row records in &lt;tbody&gt;.
          </p>
        </div>
      </div>

      <div class="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-xs">
        <table id="table-horizontal-headings" data-table-type="horizontal-headings" class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200">ID</th>
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200">Full Name</th>
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200">Email Address</th>
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200">Department</th>
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200">Role Title</th>
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200">Office</th>
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200">Status</th>
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200 text-right">Compensation</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            <tr v-for="emp in horizontalData" :key="emp.id" class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
              <td class="py-2.5 px-3.5 font-mono text-slate-500 dark:text-slate-400">{{ emp.id }}</td>
              <td class="py-2.5 px-3.5 font-medium text-slate-900 dark:text-slate-100">{{ emp.name }}</td>
              <td class="py-2.5 px-3.5 font-mono text-slate-600 dark:text-slate-300">{{ emp.email }}</td>
              <td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300">{{ emp.dept }}</td>
              <td class="py-2.5 px-3.5 text-slate-600 dark:text-slate-400">{{ emp.role }}</td>
              <td class="py-2.5 px-3.5 text-slate-600 dark:text-slate-400">{{ emp.office }}</td>
              <td class="py-2.5 px-3.5">
                <span :class="getStatusBadge(emp.status)">
                  {{ emp.status }}
                </span>
              </td>
              <td class="py-2.5 px-3.5 text-right font-mono text-slate-800 dark:text-slate-200">{{ emp.salary }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 2. VERTICAL HEADINGS TABLE                                                -->
    <!-- ========================================================================= -->
    <section id="sec-vertical-headings" class="space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-300">
              Type 2
            </span>
            <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">
              Vertical Headings Table (Transposed / Key-Value)
            </h3>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Headers run vertically along the first column using &lt;th scope="row"&gt;, comparing multi-column infrastructure specifications.
          </p>
        </div>
      </div>

      <div class="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-xs">
        <table id="table-vertical-headings" data-table-type="vertical-headings" class="w-full text-left border-collapse text-xs">
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            <tr class="bg-slate-50/70 dark:bg-slate-800/50">
              <th scope="row" class="py-2.5 px-3.5 font-bold text-slate-700 dark:text-slate-200 w-44 bg-slate-100/70 dark:bg-slate-800/80 border-r border-slate-200 dark:border-slate-700">
                Server Node Name
              </th>
              <td class="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100">node-alpha-prd01</td>
              <td class="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100">node-beta-stg01</td>
              <td class="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100">node-gamma-dev01</td>
            </tr>
            <tr>
              <th scope="row" class="py-2.5 px-3.5 font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 border-r border-slate-200 dark:border-slate-700">
                Deployment Stage
              </th>
              <td class="py-2.5 px-3.5">
                <span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">
                  Production
                </span>
              </td>
              <td class="py-2.5 px-3.5">
                <span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300">
                  Staging
                </span>
              </td>
              <td class="py-2.5 px-3.5">
                <span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                  Development
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row" class="py-2.5 px-3.5 font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 border-r border-slate-200 dark:border-slate-700">
                Primary IPv4 Address
              </th>
              <td class="py-2.5 px-3.5 font-mono text-slate-700 dark:text-slate-300">192.168.10.42</td>
              <td class="py-2.5 px-3.5 font-mono text-slate-700 dark:text-slate-300">192.168.10.88</td>
              <td class="py-2.5 px-3.5 font-mono text-slate-700 dark:text-slate-300">10.0.1.15</td>
            </tr>
            <tr>
              <th scope="row" class="py-2.5 px-3.5 font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 border-r border-slate-200 dark:border-slate-700">
                CPU Configuration
              </th>
              <td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300">64 vCPU (AMD EPYC 9654)</td>
              <td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300">32 vCPU (Intel Xeon 8480+)</td>
              <td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300">16 vCPU (Shared Virtual)</td>
            </tr>
            <tr>
              <th scope="row" class="py-2.5 px-3.5 font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 border-r border-slate-200 dark:border-slate-700">
                Memory Capacity
              </th>
              <td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300 font-mono">256 GB ECC DDR5</td>
              <td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300 font-mono">128 GB ECC DDR4</td>
              <td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300 font-mono">64 GB DDR4</td>
            </tr>
            <tr>
              <th scope="row" class="py-2.5 px-3.5 font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 border-r border-slate-200 dark:border-slate-700">
                Operating System
              </th>
              <td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300">Debian 12 Bookworm (Linux 6.1)</td>
              <td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300">Ubuntu 24.04 LTS (Linux 6.8)</td>
              <td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300">Alpine Linux 3.20 (musl)</td>
            </tr>
            <tr>
              <th scope="row" class="py-2.5 px-3.5 font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 border-r border-slate-200 dark:border-slate-700">
                Uptime Commitment
              </th>
              <td class="py-2.5 px-3.5 font-mono text-emerald-600 dark:text-emerald-400 font-semibold">99.99% Guaranteed</td>
              <td class="py-2.5 px-3.5 font-mono text-slate-700 dark:text-slate-300">99.90% SLA</td>
              <td class="py-2.5 px-3.5 font-mono text-slate-700 dark:text-slate-300">99.50% Best Effort</td>
            </tr>
            <tr>
              <th scope="row" class="py-2.5 px-3.5 font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 border-r border-slate-200 dark:border-slate-700">
                Monthly Operating Cost
              </th>
              <td class="py-2.5 px-3.5 font-mono font-bold text-slate-900 dark:text-slate-100">$1,480.00 / mo</td>
              <td class="py-2.5 px-3.5 font-mono font-bold text-slate-900 dark:text-slate-100">$740.00 / mo</td>
              <td class="py-2.5 px-3.5 font-mono font-bold text-slate-900 dark:text-slate-100">$320.00 / mo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 3. HORIZONTAL TABLE WITH ROWSPAN                                          -->
    <!-- ========================================================================= -->
    <section id="sec-rowspan-spanned" class="space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300">
              Type 3
            </span>
            <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">
              Horizontal Table with Rowspan (Multi-Row Merged Cells)
            </h3>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Complex table testing cell normalization across multiple rows via &lt;td rowspan="3"&gt; and grouped header &lt;th colspan="3"&gt;.
          </p>
        </div>
      </div>

      <div class="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-xs">
        <table id="table-rowspan-spanned" data-table-type="rowspan-spanned" class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
              <th scope="col" rowspan="2" class="py-2.5 px-3.5 font-semibold text-slate-700 dark:text-slate-200 border-r border-slate-200 dark:border-slate-700">
                Global Region
              </th>
              <th scope="col" rowspan="2" class="py-2.5 px-3.5 font-semibold text-slate-700 dark:text-slate-200 border-r border-slate-200 dark:border-slate-700">
                Operating Branch
              </th>
              <th scope="col" rowspan="2" class="py-2.5 px-3.5 font-semibold text-slate-700 dark:text-slate-200 border-r border-slate-200 dark:border-slate-700">
                Regional Director
              </th>
              <th scope="col" colspan="3" class="py-2 px-3 font-semibold text-slate-700 dark:text-slate-200 text-center border-b border-r border-slate-200 dark:border-slate-700">
                Quarterly Revenue Performance (USD Thousands)
              </th>
              <th scope="col" rowspan="2" class="py-2.5 px-3.5 font-semibold text-slate-700 dark:text-slate-200 text-center">
                Annual Target
              </th>
            </tr>
            <tr class="bg-slate-100/60 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700">
              <th scope="col" class="py-2 px-3 font-medium text-slate-600 dark:text-slate-300 text-right">Q1</th>
              <th scope="col" class="py-2 px-3 font-medium text-slate-600 dark:text-slate-300 text-right">Q2</th>
              <th scope="col" class="py-2 px-3 font-medium text-slate-600 dark:text-slate-300 text-right border-r border-slate-200 dark:border-slate-700">Q3</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            <!-- Region: North America (rowspan 3) -->
            <tr>
              <td rowspan="3" class="py-3 px-3.5 font-bold text-slate-900 dark:text-slate-100 align-top bg-slate-50/50 dark:bg-slate-800/30 border-r border-slate-200 dark:border-slate-700">
                North America
              </td>
              <td class="py-2.5 px-3.5 font-medium text-slate-800 dark:text-slate-200 border-r border-slate-100 dark:border-slate-800">New York HQ</td>
              <td class="py-2.5 px-3.5 text-slate-600 dark:text-slate-400 border-r border-slate-100 dark:border-slate-800">Sarah Jenkins</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200">$840k</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200">$920k</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200 border-r border-slate-100 dark:border-slate-800">$1,050k</td>
              <td class="py-2.5 px-3.5 text-center">
                <span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">
                  Exceeded
                </span>
              </td>
            </tr>
            <tr>
              <td class="py-2.5 px-3.5 font-medium text-slate-800 dark:text-slate-200 border-r border-slate-100 dark:border-slate-800">Chicago Hub</td>
              <td class="py-2.5 px-3.5 text-slate-600 dark:text-slate-400 border-r border-slate-100 dark:border-slate-800">Michael Chang</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200">$510k</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200">$540k</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200 border-r border-slate-100 dark:border-slate-800">$590k</td>
              <td class="py-2.5 px-3.5 text-center">
                <span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300">
                  On Target
                </span>
              </td>
            </tr>
            <tr>
              <td class="py-2.5 px-3.5 font-medium text-slate-800 dark:text-slate-200 border-r border-slate-100 dark:border-slate-800">San Francisco Branch</td>
              <td class="py-2.5 px-3.5 text-slate-600 dark:text-slate-400 border-r border-slate-100 dark:border-slate-800">Elena Rostova</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200">$720k</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200">$780k</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200 border-r border-slate-100 dark:border-slate-800">$830k</td>
              <td class="py-2.5 px-3.5 text-center">
                <span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">
                  Exceeded
                </span>
              </td>
            </tr>

            <!-- Region: Europe (rowspan 2) -->
            <tr>
              <td rowspan="2" class="py-3 px-3.5 font-bold text-slate-900 dark:text-slate-100 align-top bg-slate-50/50 dark:bg-slate-800/30 border-r border-slate-200 dark:border-slate-700">
                Europe
              </td>
              <td class="py-2.5 px-3.5 font-medium text-slate-800 dark:text-slate-200 border-r border-slate-100 dark:border-slate-800">London Center</td>
              <td class="py-2.5 px-3.5 text-slate-600 dark:text-slate-400 border-r border-slate-100 dark:border-slate-800">David Miller</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200">$620k</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200">$680k</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200 border-r border-slate-100 dark:border-slate-800">$710k</td>
              <td class="py-2.5 px-3.5 text-center">
                <span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300">
                  On Target
                </span>
              </td>
            </tr>
            <tr>
              <td class="py-2.5 px-3.5 font-medium text-slate-800 dark:text-slate-200 border-r border-slate-100 dark:border-slate-800">Berlin Tech Hub</td>
              <td class="py-2.5 px-3.5 text-slate-600 dark:text-slate-400 border-r border-slate-100 dark:border-slate-800">Anja Schmidt</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200">$480k</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200">$510k</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200 border-r border-slate-100 dark:border-slate-800">$560k</td>
              <td class="py-2.5 px-3.5 text-center">
                <span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300">
                  On Target
                </span>
              </td>
            </tr>

            <!-- Region: Asia Pacific (rowspan 2) -->
            <tr>
              <td rowspan="2" class="py-3 px-3.5 font-bold text-slate-900 dark:text-slate-100 align-top bg-slate-50/50 dark:bg-slate-800/30 border-r border-slate-200 dark:border-slate-700">
                Asia Pacific
              </td>
              <td class="py-2.5 px-3.5 font-medium text-slate-800 dark:text-slate-200 border-r border-slate-100 dark:border-slate-800">Tokyo Office</td>
              <td class="py-2.5 px-3.5 text-slate-600 dark:text-slate-400 border-r border-slate-100 dark:border-slate-800">Kenji Sato</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200">$690k</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200">$740k</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200 border-r border-slate-100 dark:border-slate-800">$810k</td>
              <td class="py-2.5 px-3.5 text-center">
                <span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">
                  Exceeded
                </span>
              </td>
            </tr>
            <tr>
              <td class="py-2.5 px-3.5 font-medium text-slate-800 dark:text-slate-200 border-r border-slate-100 dark:border-slate-800">Singapore Hub</td>
              <td class="py-2.5 px-3.5 text-slate-600 dark:text-slate-400 border-r border-slate-100 dark:border-slate-800">Priya Sharma</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200">$580k</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200">$610k</td>
              <td class="py-2.5 px-3 font-mono text-right text-slate-800 dark:text-slate-200 border-r border-slate-100 dark:border-slate-800">$670k</td>
              <td class="py-2.5 px-3.5 text-center">
                <span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300">
                  On Target
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 4. TABLE DATA WITH NO HEADER                                              -->
    <!-- ========================================================================= -->
    <section id="sec-no-headers" class="space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">
              Type 4
            </span>
            <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">
              Table Data with No Header (Raw &lt;tbody&gt; Only)
            </h3>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Contains pure data rows without any &lt;thead&gt;, &lt;th&gt;, or column captions. Scrapers must infer columns by cell position and content type.
          </p>
        </div>
      </div>

      <div class="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-xs">
        <!-- Strictly NO thead, NO th elements -->
        <table id="table-no-headers" data-table-type="no-headers" class="w-full text-left border-collapse text-xs">
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            <tr v-for="log in rawLogs" :key="log.code" class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
              <td class="py-2.5 px-3.5 font-mono text-slate-500 dark:text-slate-400">{{ log.code }}</td>
              <td class="py-2.5 px-3.5 font-mono text-slate-700 dark:text-slate-300">{{ log.timestamp }}</td>
              <td class="py-2.5 px-3.5 font-mono text-slate-600 dark:text-slate-400">{{ log.ip }}</td>
              <td class="py-2.5 px-3.5 font-mono font-semibold text-slate-800 dark:text-slate-200">{{ log.method }}</td>
              <td class="py-2.5 px-3.5 font-mono text-slate-700 dark:text-slate-300">{{ log.endpoint }}</td>
              <td class="py-2.5 px-3.5">
                <span class="font-mono font-semibold text-emerald-600 dark:text-emerald-400">{{ log.status }}</span>
              </td>
              <td class="py-2.5 px-3.5 text-right font-mono text-slate-600 dark:text-slate-400">{{ log.size }}</td>
              <td class="py-2.5 px-3.5 text-right font-mono text-slate-500 dark:text-slate-400">{{ log.latency }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 5. TABLE WITH FORM ELEMENTS                                               -->
    <!-- ========================================================================= -->
    <section id="sec-form-elements" class="space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-300">
              Type 5
            </span>
            <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">
              Table with Form Elements (Interactive Inputs &amp; Controls)
            </h3>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Cells contain active inputs (checkboxes, text fields, numbers, selects, radio buttons, and action buttons). Scrapers must read input values rather than static text.
          </p>
        </div>
      </div>

      <div class="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-xs">
        <table id="table-form-elements" data-table-type="form-elements" class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
              <th scope="col" class="py-3 px-3 text-center w-12">
                <span class="sr-only">Select Checkbox</span>
                <input type="checkbox" id="chk-header-all" @change="toggleAllFormRows" :checked="isAllSelected" class="rounded text-blue-600 focus:ring-1 focus:ring-blue-500 border-slate-300 dark:border-slate-600" />
              </th>
              <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200">SKU / Code</th>
              <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200">Item Label &amp; Note</th>
              <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 w-28">Quantity</th>
              <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 w-36">Dispatch Priority</th>
              <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200">Route Channel</th>
              <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 text-center w-24">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            <tr v-for="(row, idx) in formRows" :key="row.id" class="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
              <!-- Checkbox -->
              <td class="py-2.5 px-3 text-center">
                <input :id="'chk-row-' + row.id" type="checkbox" v-model="row.selected" class="rounded text-blue-600 focus:ring-1 focus:ring-blue-500 border-slate-300 dark:border-slate-600" />
              </td>

              <!-- SKU Code -->
              <td class="py-2.5 px-3 font-mono font-medium text-slate-800 dark:text-slate-200">
                {{ row.sku }}
              </td>

              <!-- Text Input -->
              <td class="py-2.5 px-3">
                <input :id="'input-title-' + row.id" :name="'item_title_' + row.id" v-model="row.title" type="text" class="w-full px-2.5 py-1 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </td>

              <!-- Number Input -->
              <td class="py-2.5 px-3">
                <input :id="'input-qty-' + row.id" :name="'item_qty_' + row.id" v-model.number="row.qty" type="number" min="1" max="999" class="w-20 px-2.5 py-1 text-xs font-mono bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </td>

              <!-- Select Dropdown -->
              <td class="py-2.5 px-3">
                <select :id="'select-pri-' + row.id" :name="'item_priority_' + row.id" v-model="row.priority" class="w-full px-2 py-1 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-600">
                  <option value="Normal">Normal</option>
                  <option value="High">High</option>
                  <option value="Urgent">Urgent</option>
                  <option value="Critical">Critical</option>
                </select>
              </td>

              <!-- Radio Button Channel -->
              <td class="py-2.5 px-3">
                <div class="flex items-center gap-3">
                  <label class="inline-flex items-center gap-1 cursor-pointer text-slate-700 dark:text-slate-300">
                    <input type="radio" :name="'channel_' + row.id" value="Air" v-model="row.channel" class="text-blue-600 focus:ring-1 focus:ring-blue-500 border-slate-300 dark:border-slate-600" />
                    <span>Air</span>
                  </label>
                  <label class="inline-flex items-center gap-1 cursor-pointer text-slate-700 dark:text-slate-300">
                    <input type="radio" :name="'channel_' + row.id" value="Ground" v-model="row.channel" class="text-blue-600 focus:ring-1 focus:ring-blue-500 border-slate-300 dark:border-slate-600" />
                    <span>Ground</span>
                  </label>
                </div>
              </td>

              <!-- Action Button -->
              <td class="py-2.5 px-3 text-center">
                <button type="button" @click="handleRowSave(row)" :id="'btn-save-row-' + row.id" class="px-2.5 py-1 text-[11px] font-semibold rounded bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white transition-colors cursor-pointer">
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Live State Indicator for Form Elements -->
      <div v-if="lastSavedRow" class="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-lg text-xs text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
        <span>Saved row #{{ lastSavedRow.id }} ({{ lastSavedRow.sku }}): Title="{{ lastSavedRow.title }}", Qty={{ lastSavedRow.qty }}, Priority={{ lastSavedRow.priority }}, Route={{ lastSavedRow.channel }}.</span>
        <span class="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">Validated</span>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 6. TABLE WITH IMAGES & MEDIA                                              -->
    <!-- ========================================================================= -->
    <section id="sec-with-images" class="space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-sky-100 dark:bg-sky-900/60 text-sky-800 dark:text-sky-300">
              Type 6
            </span>
            <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">
              Table with Images &amp; Media (E-Commerce &amp; Product Catalog)
            </h3>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Features &lt;img&gt; elements with explicit src, alt, and dimensions alongside product specifications, pricing, inventory badges, and links.
          </p>
        </div>
      </div>

      <div class="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-xs">
        <table id="table-with-images" data-table-type="with-images" class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200 w-16">Media</th>
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200">Product Model &amp; SKU</th>
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200">Category Tag</th>
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200">Stock Availability</th>
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200 text-right">Unit Price</th>
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200">Form Factor</th>
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200 text-center w-28">Specification</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            <tr v-for="item in imageProducts" :key="item.sku" class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
              <!-- Media Image Column with explicit src and alt -->
              <td class="py-2.5 px-3.5">
                <img :src="item.imageSrc" :alt="item.imageAlt" width="48" height="48" class="w-12 h-12 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 object-contain p-1 shrink-0" loading="lazy" />
              </td>

              <!-- Title & SKU -->
              <td class="py-2.5 px-3.5">
                <div class="font-semibold text-slate-900 dark:text-slate-100">{{ item.name }}</div>
                <div class="font-mono text-[11px] text-slate-400 dark:text-slate-500">SKU: {{ item.sku }}</div>
              </td>

              <!-- Category -->
              <td class="py-2.5 px-3.5">
                <span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {{ item.category }}
                </span>
              </td>

              <!-- Stock Availability Badge -->
              <td class="py-2.5 px-3.5">
                <span :class="getStockBadge(item.stockStatus)">
                  {{ item.stockStatus }} ({{ item.stockCount }})
                </span>
              </td>

              <!-- Price -->
              <td class="py-2.5 px-3.5 text-right font-mono font-bold text-slate-900 dark:text-slate-100">
                {{ item.price }}
              </td>

              <!-- Form Factor -->
              <td class="py-2.5 px-3.5 text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                {{ item.formFactor }}
              </td>

              <!-- Action Link -->
              <td class="py-2.5 px-3.5 text-center">
                <a :href="'#spec-' + item.sku" class="inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold underline text-[11px]">
                  View Datasheet
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// -------------------------------------------------------------
// 1. Horizontal Headings Table Dataset
// -------------------------------------------------------------
const horizontalData = [
  { id: 'EMP-1001', name: 'Jonathan Vance', email: 'j.vance@acmecorp.internal', dept: 'Engineering', role: 'Staff Infrastructure Architect', office: 'Seattle, WA', status: 'Active', salary: '$184,000' },
  { id: 'EMP-1002', name: 'Alina Kova', email: 'a.kova@acmecorp.internal', dept: 'Product Design', role: 'Lead Design Systems Engineer', office: 'San Francisco, CA', status: 'Active', salary: '$162,000' },
  { id: 'EMP-1003', name: 'Marcus Sterling', email: 'm.sterling@acmecorp.internal', dept: 'Data Science', role: 'Senior Machine Learning Scientist', office: 'New York, NY', status: 'Active', salary: '$176,500' },
];

function getStatusBadge(status) {
  if (status === 'Active') {
    return 'px-2 py-0.5 text-[10px] font-semibold rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300';
  }
  if (status === 'On Leave') {
    return 'px-2 py-0.5 text-[10px] font-semibold rounded bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300';
  }
  return 'px-2 py-0.5 text-[10px] font-semibold rounded bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-300';
}

// -------------------------------------------------------------
// 4. Raw Log Table Data (No Headers)
// -------------------------------------------------------------
const rawLogs = [
  { code: 'LOG-7701', timestamp: '2026-10-02T18:14:02Z', ip: '198.51.100.45', method: 'GET', endpoint: '/api/v2/telemetry/stream', status: '200 OK', size: '1,482 B', latency: '24 ms' },
  { code: 'LOG-7702', timestamp: '2026-10-02T18:14:15Z', ip: '203.0.113.19', method: 'POST', endpoint: '/api/v2/auth/oauth/token', status: '201 Created', size: '894 B', latency: '52 ms' },
  { code: 'LOG-7703', timestamp: '2026-10-02T18:14:38Z', ip: '198.51.100.82', method: 'GET', endpoint: '/api/v2/customers/query?limit=50', status: '200 OK', size: '18,400 B', latency: '88 ms' },
  { code: 'LOG-7704', timestamp: '2026-10-02T18:15:01Z', ip: '192.0.2.114', method: 'PUT', endpoint: '/api/v2/inventory/sku-8812', status: '200 OK', size: '612 B', latency: '39 ms' },
];

// -------------------------------------------------------------
// 5. Form Elements Table
// -------------------------------------------------------------
const formRows = ref([
  { id: 1, selected: true, sku: 'SKU-MOD-401', title: 'High-Density Rackmount Rail Kit', qty: 4, priority: 'High', channel: 'Air' },
  { id: 2, selected: false, sku: 'SKU-MOD-402', title: '100GbE QSFP28 Direct Attach Copper Cable', qty: 12, priority: 'Urgent', channel: 'Air' },
  { id: 3, selected: true, sku: 'SKU-MOD-403', title: 'Redundant 1200W Titanium Power Supply', qty: 2, priority: 'Normal', channel: 'Ground' },
]);

const isAllSelected = computed(() => {
  return formRows.value.length > 0 && formRows.value.every(r => r.selected);
});

function toggleAllFormRows(e) {
  const checked = e.target.checked;
  formRows.value.forEach(r => {
    r.selected = checked;
  });
}

const lastSavedRow = ref(null);

function handleRowSave(row) {
  lastSavedRow.value = { ...row };
}

// -------------------------------------------------------------
// 6. Image & Media Product Catalog Table
// -------------------------------------------------------------
// Crisp SVG Data URIs representing high-tech devices (no external network dependencies)
const svgServerBlade = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="8" fill="%230f172a"/><rect x="8" y="12" width="32" height="6" rx="2" fill="%2338bdf8"/><circle cx="12" cy="15" r="1.5" fill="%23ffffff"/><circle cx="17" cy="15" r="1.5" fill="%2322c55e"/><rect x="8" y="21" width="32" height="6" rx="2" fill="%2338bdf8"/><circle cx="12" cy="24" r="1.5" fill="%23ffffff"/><circle cx="17" cy="24" r="1.5" fill="%2322c55e"/><rect x="8" y="30" width="32" height="6" rx="2" fill="%2338bdf8"/><circle cx="12" cy="33" r="1.5" fill="%23ffffff"/><circle cx="17" cy="33" r="1.5" fill="%2322c55e"/></svg>';

const svgSwitchRouter = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="8" fill="%231e1b4b"/><rect x="6" y="16" width="36" height="16" rx="3" fill="%234338ca" stroke="%23818cf8" stroke-width="2"/><line x1="12" y1="24" x2="16" y2="24" stroke="%2322c55e" stroke-width="2" stroke-linecap="round"/><line x1="20" y1="24" x2="24" y2="24" stroke="%2322c55e" stroke-width="2" stroke-linecap="round"/><line x1="28" y1="24" x2="32" y2="24" stroke="%2322c55e" stroke-width="2" stroke-linecap="round"/><circle cx="36" cy="24" r="1.5" fill="%2338bdf8"/></svg>';

const svgGatewayNode = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="8" fill="%23064e3b"/><circle cx="24" cy="24" r="14" fill="%23047857" stroke="%2334d399" stroke-width="2"/><path d="M18 24h12M24 18v12" stroke="%23ffffff" stroke-width="2.5" stroke-linecap="round"/><circle cx="24" cy="24" r="3" fill="%23a7f3d0"/></svg>';

const svgOpticTransceiver = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="8" fill="%237c2d12"/><rect x="10" y="14" width="28" height="20" rx="3" fill="%23c2410c" stroke="%23fb923c" stroke-width="2"/><circle cx="18" cy="24" r="3" fill="%23fed7aa"/><circle cx="30" cy="24" r="3" fill="%23fed7aa"/></svg>';

const svgSensorTerminal = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="8" fill="%23172554"/><path d="M24 8l14 8v16l-14 8-14-8V16l14-8z" fill="%231d4ed8" stroke="%2360a5fa" stroke-width="2"/><circle cx="24" cy="24" r="4" fill="%2393c5fd"/></svg>';

const imageProducts = [
  {
    sku: 'HW-SRV-901',
    name: 'Enterprise Blade Compute Chassis X8',
    category: 'Compute & Cloud',
    stockStatus: 'In Stock',
    stockCount: 148,
    price: '$4,890.00',
    formFactor: '1U Rackmount',
    imageSrc: svgServerBlade,
    imageAlt: 'Product Media: Enterprise Blade Compute Chassis X8'
  },
  {
    sku: 'HW-SWT-602',
    name: '32-Port 100GbE Spine Core Switch',
    category: 'Networking',
    stockStatus: 'In Stock',
    stockCount: 64,
    price: '$3,250.00',
    formFactor: '1U Fixed Managed',
    imageSrc: svgSwitchRouter,
    imageAlt: 'Product Media: 32-Port 100GbE Spine Core Switch'
  },
  {
    sku: 'HW-GTW-403',
    name: 'Industrial Edge IoT Gateway Pro',
    category: 'IoT & Telemetry',
    stockStatus: 'Low Stock',
    stockCount: 9,
    price: '$890.00',
    formFactor: 'DIN-Rail Mount',
    imageSrc: svgGatewayNode,
    imageAlt: 'Product Media: Industrial Edge IoT Gateway Pro'
  },
  {
    sku: 'HW-OPT-104',
    name: '100GBASE-SR4 MPO Optical Transceiver',
    category: 'Optical Cabling',
    stockStatus: 'In Stock',
    stockCount: 310,
    price: '$210.00',
    formFactor: 'QSFP28 Pluggable',
    imageSrc: svgOpticTransceiver,
    imageAlt: 'Product Media: 100GBASE-SR4 MPO Optical Transceiver'
  },
  {
    sku: 'HW-SNS-205',
    name: 'Environmental Thermal & Moisture Monitor',
    category: 'Sensors & Security',
    stockStatus: 'Pre-Order',
    stockCount: 0,
    price: '$340.00',
    formFactor: 'Wall Mountable',
    imageSrc: svgSensorTerminal,
    imageAlt: 'Product Media: Environmental Thermal & Moisture Monitor'
  }
];

function getStockBadge(status) {
  if (status === 'In Stock') {
    return 'px-2 py-0.5 text-[10px] font-semibold rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300';
  }
  if (status === 'Low Stock') {
    return 'px-2 py-0.5 text-[10px] font-semibold rounded bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300';
  }
  return 'px-2 py-0.5 text-[10px] font-semibold rounded bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-300';
}
</script>
