# Excellent Data Filler - Test Pages

A comprehensive form test suite and validation test bench designed for validating browser automation extensions, form fill runners, and auto-entry workflows (such as [Excellent Data Filler](https://docs.edfiller.in/)).

Repository: [https://github.com/jeevan-lal/excellent-data-filler-test-pages](https://github.com/jeevan-lal/excellent-data-filler-test-pages)  
Live Site: [https://excellent-filler-test-pages.vercel.app/](https://excellent-filler-test-pages.vercel.app/)  
Documentation: [https://docs.edfiller.in/](https://docs.edfiller.in/)

---

## Overview

Automated form-filling extensions often encounter diverse real-world patterns such as synchronous page reloads, alert dialogs, instant submissions without reloads, delayed form loading, generated reference IDs, cascading dropdowns, dual forms, multi-page flows, file uploads, and embedded frames.

This repository provides a standardized, responsive test bench containing 42 real-world scenarios across 7 categories to test, benchmark, and ensure the reliability of browser automation and data entry workflows.

---

## Test Scenarios Matrix

| ID | Title | Category | Mechanism |
| :--- | :--- | :--- | :--- |
| Example 1A | Small and Simple Form | Reload & Direct | Sync Submit |
| Example 1B | Comprehensive Form Controls | Reload & Direct | Standard Form |
| Example 1 | Success in Site (Post Reload) | Reload & Direct | Flash Banner |
| Example 2 | Success in Alert Dialog (Post Reload) | Reload & Direct | Alert Dialog |
| Example 3 | Success on Another Page | Reload & Direct | Page Redirect |
| Example 4 | Modal Form + In-Page Success | Modals & Alerts | Overlay Close |
| Example 5 | Modal Form + Alert Dialog | Modals & Alerts | Modal Alert |
| Example 6 | Instant API Form (No Page Reload) | AJAX & SPA | Instant Submit |
| Example 7 | Success in Site + Error in Alert | AJAX & SPA | Notice + Alert |
| Example 8 | Delayed Form + In-Page Success | AJAX & SPA | Delayed Form |
| Example 9 | Success with Generated Record ID | Reload & Direct | Generated ID |
| Example 10 | Dual Success & Error Summary | Reload & Direct | Summary Status |
| Example 10-1 | In-Page Success + Warning Alert | Multi-Form & Multi-URL | Notice + Alert |
| Example 11 | 4-Tier Cascading Dropdowns | Cascading | 4 Selects |
| Example 12-13 | Two Forms Across Different URLs | Multi-Form & Multi-URL | 2-Step Flow |
| Example 14 | Delayed Success After Redirect | AJAX & SPA | Background Verification |
| Example 15 | Single & Batch File Uploads | File Upload | File Attachment |
| Example 16 | Two Sibling Forms on Same URL | Multi-Form & Multi-URL | Search & Reveal |
| Example 17 | Form Reload with Table Append | Reload & Direct | Table Append |
| Example 18 | Form Inside Embedded Frame | Embedded Frames | Embedded Frame |
| Example 18-1 | Embedded Frame Loads On Demand | Embedded Frames | On-Demand Frame |
| Example 19 | Two Embedded Frames on Single Page | Embedded Frames | Dual Frames |
| Example 20 | Mixed States & Dynamic Controls | AJAX & SPA | Mixed Controls |
| Example 21 | Silent Search with Delayed Table Update | AJAX & SPA | Silent Table Update |
| Example 22 | Dynamic Radios & Checkboxes (No Value/Name/ID) | AJAX & SPA | Dynamic Anonymous Inputs |
| Example 23 | Multi-Select Triggered Dynamic Table Rows | AJAX & SPA | Multi-Select to Rows |
| Example 24 | Email Submit with Dynamic File Download | AJAX & SPA | Dynamic File Download |
| Example 25 | Multi-Type Tabular Data Benchmark (Scraper Sandbox) | AJAX & SPA | Diverse Table Archetypes |
| Example 26 | Beneficiary Registry Table with Reload Edit Flow | Reload & Direct | Query Param Reload |
| Example 27 | Beneficiary Table with Inline Form Controls | AJAX & SPA | Multi-Control Grid |
| Example 28 | Beneficiary Table with Conditional Edit vs Deleted State | Reload & Direct | Conditional Edit Action |
| Example 29 | Master Header Form with Dynamic Multi-Control Table | AJAX & SPA | Multi-Control Table Grid |
| Example 30 | Pre-populated Multi-Control Tabular Form Grid | AJAX & SPA | Pre-populated Table Grid |
| Example 31 | Single-Row Entry Table with Accumulator Grid | AJAX & SPA | Entry Row to Table Accumulator |
| Example 32 | Memory Exhaustion Crash (Aw, Snap! Out of Memory) | AJAX & SPA | Heap Exhaustion Loop |
| Example 33 | Shadow DOM Encapsulated Form (Full Controls) | AJAX & SPA | Open Shadow Root |
| Example 34 | Public Video Player (Manual Controls) | AJAX & SPA | HTML5 Video Player |
| Example 35 | Inline onclick Attribute Event Handlers & Overrides | AJAX & SPA | Inline onclick Handlers |
| Example 36 | Conditional Sections with Input & Dynamic Tabular Fields | AJAX & SPA | Conditional Tables |
| Example 37 | Multi-URL Email List Flow with Reload Validation | Multi-Form & Multi-URL | Multi-URL Reload Flow |
| Example 38 | Realtime Search Student Registry with Animated Row Deletion | AJAX & SPA | Realtime Search & Dynamic DOM |
| Example 39 | Student Registry Table with In-Place Deleted State | AJAX & SPA | In-Place State Transition |

## License

This project is open-source and available under the MIT License.
