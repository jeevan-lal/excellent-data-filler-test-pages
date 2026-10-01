# Excellent Data Filler - Test Pages

A comprehensive form test suite and validation test bench designed for validating browser automation extensions, form fill runners, and auto-entry workflows (such as [Excellent Data Filler](https://docs.edfiller.in/)).

Repository: [https://github.com/jeevan-lal/excellent-data-filler-test-pages](https://github.com/jeevan-lal/excellent-data-filler-test-pages)  
Documentation: [https://docs.edfiller.in/](https://docs.edfiller.in/)

---

## Overview

Automated form-filling extensions often struggle with real-world website edge cases such as synchronous page reloads, native modal alerts, asynchronous AJAX DOM mutations, delayed DOM injection, token extraction, cascading selects, sibling forms, multi-page flows, file uploads, and encapsulated iframes.

This repository provides a standardized, responsive test bench containing 22 real-world scenarios across 7 categories to test, benchmark, and ensure the reliability of browser automation and data entry workflows.

---

## Test Scenarios Matrix

| ID | Title | Category | Mechanism |
| :--- | :--- | :--- | :--- |
| Example 1A | Small and Simple Form | Reload & Direct | Sync Submit |
| Example 1B | Comprehensive Form Controls | Reload & Direct | Standard Form |
| Example 1 | Success in Site (Post Reload) | Reload & Direct | Flash Banner |
| Example 2 | Success in Alert Dialog (Post Reload) | Reload & Direct | window.alert() |
| Example 3 | Success on Another Page | Reload & Direct | 302 Redirect |
| Example 4 | Modal Form + In-Page Success | Modals & Alerts | Overlay Close |
| Example 5 | Modal Form + Alert Dialog | Modals & Alerts | Modal Alert |
| Example 6 | AJAX Form (No Page Reload) | AJAX & SPA | Async Fetch |
| Example 7 | Success in Site + Error in Alert | AJAX & SPA | Split Flow |
| Example 8 | Delayed Form + AJAX Success | AJAX & SPA | 2500ms Delay |
| Example 9 | Success with Generated Record ID | Reload & Direct | Token Extraction |
| Example 10 | Dual Success & Error Summary | Reload & Direct | Batch Feedback |
| Example 10-1 | DOM Success + Warning Alert | Multi-Form & Multi-URL | Dual Trigger |
| Example 11 | 4-Tier Cascading Dropdowns | Cascading | 4 Selects |
| Example 12-13 | Two Forms Across Different URLs | Multi-Form & Multi-URL | 2-Step Flow |
| Example 14 | Delayed Success After Redirect | AJAX & SPA | 3s Poller |
| Example 15 | Single & Batch File Uploads | File Upload | Blob Dispatch |
| Example 16 | Two Sibling Forms on Same URL | Multi-Form & Multi-URL | Scoped Selectors |
| Example 17 | Form Filled, No Visual Feedback | AJAX & SPA | Silent Response |
| Example 18 | Form Inside Single iframe | iFrames | Frame Context |
| Example 18-1 | iframe Mounts After Delay | iFrames | 1800ms Delay |
| Example 19 | Two iframes on Single Page | iFrames | Multi-Context |

## License

This project is open-source and available under the MIT License.
