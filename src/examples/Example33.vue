<template>
  <div class="space-y-6">
    <!-- Outer Success Banner (Triggered when shadow form submits) -->
    <div v-if="submittedData" id="outer-success-notice" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-900 dark:text-emerald-300 space-y-3 shadow-xs">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <strong class="font-semibold text-emerald-950 dark:text-emerald-200 text-sm">
          Shadow DOM Form Submitted Successfully
        </strong>
      </div>
      <p class="text-slate-600 dark:text-slate-400">
        Outer document received composed submission event from Shadow DOM:
      </p>
      <div class="p-3 bg-white dark:bg-slate-900 rounded-lg border border-emerald-200 dark:border-emerald-800/60 font-mono text-[11px] text-slate-700 dark:text-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div><span class="text-slate-400">Full Name:</span> {{ submittedData.fullName || '(empty)' }}</div>
        <div><span class="text-slate-400">Email:</span> {{ submittedData.email || '(empty)' }}</div>
        <div><span class="text-slate-400">Phone:</span> {{ submittedData.phone || '(empty)' }}</div>
        <div><span class="text-slate-400">Age:</span> {{ submittedData.age || '(empty)' }}</div>
        <div><span class="text-slate-400">Date:</span> {{ submittedData.date || '(empty)' }}</div>
        <div><span class="text-slate-400">Time:</span> {{ submittedData.time || '(empty)' }}</div>
        <div><span class="text-slate-400">Department:</span> {{ submittedData.department || '(none)' }}</div>
        <div><span class="text-slate-400">Skills:</span> {{ submittedData.skills && submittedData.skills.length ? submittedData.skills.join(', ') : '(none)' }}</div>
        <div><span class="text-slate-400">Notifications:</span> {{ submittedData.notifications && submittedData.notifications.length ? submittedData.notifications.join(', ') : 'None' }}</div>
        <div><span class="text-slate-400">Plan:</span> {{ submittedData.subscriptionTier || 'None' }}</div>
      </div>
    </div>

    <!-- Shadow Host Element -->
    <div ref="shadowHostRef" id="shadow-host-33" class="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-xs overflow-hidden"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const shadowHostRef = ref(null);
const submittedData = ref(null);

onMounted(() => {
  const host = shadowHostRef.value;
  if (!host) return;

  // Ensure clean state if re-mounting
  if (host.shadowRoot) {
    host.shadowRoot.innerHTML = '';
  }

  const shadowRoot = host.shadowRoot || host.attachShadow({ mode: 'open' });

  // Scoped CSS styles with high contrast light mode and dynamic dark mode support
  const styles = `
    :host {
      display: block;
      font-family: inherit;
      color: #0f172a;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    .shadow-form-wrapper {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      background-color: #ffffff;
      color: #0f172a;
      transition: background-color 0.2s, color 0.2s;
    }
    .shadow-form-wrapper.dark {
      background-color: #0f172a;
      color: #f8fafc;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }
    @media (min-width: 640px) {
      .grid-2 {
        grid-template-columns: 1fr 1fr;
      }
    }
    .field-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    label {
      font-size: 0.6875rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #0f172a;
      display: block;
    }
    .shadow-form-wrapper.dark label {
      color: #e2e8f0;
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    input[type="number"],
    input[type="date"],
    input[type="time"],
    select,
    textarea {
      width: 100%;
      padding: 0.55rem 0.75rem;
      font-size: 0.8125rem;
      border: 1px solid #cbd5e1;
      border-radius: 0.5rem;
      background-color: #ffffff;
      color: #0f172a;
      outline: none;
      transition: border-color 0.15s, box-shadow 0.15s;
      font-family: inherit;
    }
    .shadow-form-wrapper.dark input[type="text"],
    .shadow-form-wrapper.dark input[type="email"],
    .shadow-form-wrapper.dark input[type="tel"],
    .shadow-form-wrapper.dark input[type="number"],
    .shadow-form-wrapper.dark input[type="date"],
    .shadow-form-wrapper.dark input[type="time"],
    .shadow-form-wrapper.dark select,
    .shadow-form-wrapper.dark textarea {
      border-color: #334155;
      background-color: #1e293b;
      color: #f8fafc;
    }
    input:focus,
    select:focus,
    textarea:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 1px #2563eb;
    }
    textarea {
      resize: vertical;
      min-height: 80px;
    }
    .horizontal-options {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1.25rem;
      padding-top: 0.25rem;
    }
    .check-label,
    .radio-label {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8125rem;
      text-transform: none;
      font-weight: 600;
      cursor: pointer;
      color: #1e293b;
    }
    .shadow-form-wrapper.dark .check-label,
    .shadow-form-wrapper.dark .radio-label {
      color: #e2e8f0;
    }
    input[type="checkbox"],
    input[type="radio"] {
      width: 1.05rem;
      height: 1.05rem;
      accent-color: #2563eb;
      cursor: pointer;
    }
    .button-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding-top: 0.5rem;
    }
    .btn-submit {
      background-color: #0a2368;
      color: #ffffff;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.625rem 1.5rem;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      transition: background-color 0.15s;
    }
    .btn-submit:hover {
      background-color: #07194d;
    }
    .shadow-form-wrapper.dark .btn-submit {
      background-color: #2563eb;
    }
    .shadow-form-wrapper.dark .btn-submit:hover {
      background-color: #1d4ed8;
    }
    .btn-reset {
      background-color: #ffffff;
      color: #334155;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.625rem 1.25rem;
      border-radius: 0.5rem;
      border: 1px solid #cbd5e1;
      cursor: pointer;
      transition: background-color 0.15s, color 0.15s;
    }
    .btn-reset:hover {
      background-color: #f1f5f9;
    }
    .shadow-form-wrapper.dark .btn-reset {
      background-color: #1e293b;
      color: #cbd5e1;
      border-color: #334155;
    }
    .shadow-form-wrapper.dark .btn-reset:hover {
      background-color: #334155;
    }
    .shadow-alert {
      padding: 0.875rem 1rem;
      border-radius: 0.75rem;
      font-size: 0.75rem;
      background-color: #ecfdf5;
      border: 1px solid #a7f3d0;
      color: #065f46;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .shadow-form-wrapper.dark .shadow-alert {
      background-color: rgba(6, 78, 59, 0.4);
      border-color: #065f46;
      color: #6ee7b7;
    }
    .shadow-alert svg {
      width: 1rem;
      height: 1rem;
      flex-shrink: 0;
    }
    .hidden {
      display: none !important;
    }
  `;

  // Inner Shadow DOM HTML template
  const template = `
    <style>${styles}</style>
    <div class="shadow-form-wrapper">

      <!-- In-Shadow Success Notice -->
      <div id="shadowSuccessNotice" class="shadow-alert hidden">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span><strong>Shadow Form Submitted!</strong> All form controls processed successfully inside the shadow boundary.</span>
      </div>

      <form id="shadowForm33">
        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          <!-- 1. Text, Email, Tel, Number -->
          <div class="grid-2">
            <div class="field-group">
              <label for="shadowFullName33">Full Name *</label>
              <input id="shadowFullName33" name="fullName" type="text" required placeholder="e.g. Jordan Cole" />
            </div>

            <div class="field-group">
              <label for="shadowEmail33">Email Address *</label>
              <input id="shadowEmail33" name="email" type="email" required placeholder="jordan.cole@example.com" />
            </div>
          </div>

          <div class="grid-2">
            <div class="field-group">
              <label for="shadowPhone33">Phone Number *</label>
              <input id="shadowPhone33" name="phone" type="tel" placeholder="+1 (555) 234-5678" />
            </div>

            <div class="field-group">
              <label for="shadowAge33">Age / Experience (Years)</label>
              <input id="shadowAge33" name="age" type="number" min="1" max="100" placeholder="28" />
            </div>
          </div>

          <!-- 2. Date & Time -->
          <div class="grid-2">
            <div class="field-group">
              <label for="shadowDate33">Appointment / Start Date *</label>
              <input id="shadowDate33" name="date" type="date" required />
            </div>

            <div class="field-group">
              <label for="shadowTime33">Preferred Time</label>
              <input id="shadowTime33" name="time" type="time" />
            </div>
          </div>

          <!-- 3. Single Select & Multi Select -->
          <div class="grid-2">
            <div class="field-group">
              <label for="shadowDepartment33">Department *</label>
              <select id="shadowDepartment33" name="department" required>
                <option value="">-- Choose Department --</option>
                <option value="Engineering">Engineering</option>
                <option value="Product">Product</option>
                <option value="Design">Design</option>
                <option value="Quality Assurance">Quality Assurance</option>
                <option value="Security">Security</option>
              </select>
            </div>

            <div class="field-group">
              <label for="shadowSkills33">Roles / Tech Stack (Multi-Select)</label>
              <select id="shadowSkills33" name="skills" multiple size="3">
                <option value="Frontend">Frontend Development</option>
                <option value="Backend">Backend API & Services</option>
                <option value="DevOps">DevOps & Cloud Infra</option>
                <option value="Testing">Automated Testing</option>
              </select>
            </div>
          </div>

          <!-- 4. Multiple Checkboxes (Horizontal) -->
          <div class="field-group">
            <label>Communication Preferences</label>
            <div class="horizontal-options">
              <label class="check-label">
                <input id="shadowChkEmail33" name="prefEmail" type="checkbox" />
                <span>Email Alerts</span>
              </label>
              <label class="check-label">
                <input id="shadowChkSms33" name="prefSms" type="checkbox" />
                <span>SMS Updates</span>
              </label>
              <label class="check-label">
                <input id="shadowChkPush33" name="prefPush" type="checkbox" />
                <span>Push Notifications</span>
              </label>
            </div>
          </div>

          <!-- 5. Multiple Radios (Horizontal) -->
          <div class="field-group">
            <label>Subscription Tier *</label>
            <div class="horizontal-options">
              <label class="radio-label">
                <input id="shadowRadioBasic33" name="subscriptionTier" type="radio" value="Basic" checked />
                <span>Basic Tier</span>
              </label>
              <label class="radio-label">
                <input id="shadowRadioPro33" name="subscriptionTier" type="radio" value="Pro" />
                <span>Pro Tier</span>
              </label>
              <label class="radio-label">
                <input id="shadowRadioEnterprise33" name="subscriptionTier" type="radio" value="Enterprise" />
                <span>Enterprise Tier</span>
              </label>
            </div>
          </div>

          <!-- 6. Textarea -->
          <div class="field-group">
            <label for="shadowNotes33">Project Description / Bio</label>
            <textarea id="shadowNotes33" name="notes" placeholder="Enter background details, requirements, or automation test notes..."></textarea>
          </div>

          <!-- 7. Action Buttons -->
          <div class="button-row">
            <button id="shadowSubmitBtn33" type="submit" class="btn-submit">
              Submit Shadow Form
            </button>
            <button id="shadowResetBtn33" type="reset" class="btn-reset">
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  `;

  shadowRoot.innerHTML = template;

  const wrapper = shadowRoot.querySelector('.shadow-form-wrapper');

  const updateTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    if (wrapper) {
      wrapper.classList.toggle('dark', isDark);
    }
  };
  updateTheme();

  const themeObserver = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.attributeName === 'class') {
        updateTheme();
      }
    }
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

  onUnmounted(() => {
    themeObserver.disconnect();
  });

  const form = shadowRoot.querySelector('#shadowForm33');
  const alertEl = shadowRoot.querySelector('#shadowSuccessNotice');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Extract skills multi-select values
      const skillsSelect = shadowRoot.querySelector('#shadowSkills33');
      const selectedSkills = skillsSelect
        ? Array.from(skillsSelect.selectedOptions).map((o) => o.value)
        : [];

      // Extract radio
      const selectedRadio = shadowRoot.querySelector('input[name="subscriptionTier"]:checked');

      // Extract checkboxes
      const notifications = [];
      if (shadowRoot.querySelector('#shadowChkEmail33')?.checked) notifications.push('Email');
      if (shadowRoot.querySelector('#shadowChkSms33')?.checked) notifications.push('SMS');
      if (shadowRoot.querySelector('#shadowChkPush33')?.checked) notifications.push('Push');

      const data = {
        fullName: shadowRoot.querySelector('#shadowFullName33')?.value || '',
        email: shadowRoot.querySelector('#shadowEmail33')?.value || '',
        phone: shadowRoot.querySelector('#shadowPhone33')?.value || '',
        age: shadowRoot.querySelector('#shadowAge33')?.value || '',
        date: shadowRoot.querySelector('#shadowDate33')?.value || '',
        time: shadowRoot.querySelector('#shadowTime33')?.value || '',
        department: shadowRoot.querySelector('#shadowDepartment33')?.value || '',
        skills: selectedSkills,
        notifications,
        subscriptionTier: selectedRadio ? selectedRadio.value : '',
        notes: shadowRoot.querySelector('#shadowNotes33')?.value || ''
      };

      // Show inner notice
      if (alertEl) {
        alertEl.classList.remove('hidden');
      }

      // Update Vue outer state
      submittedData.value = data;

      // Dispatch composed custom event through shadow root boundary
      host.dispatchEvent(
        new CustomEvent('shadow-form-submit', {
          bubbles: true,
          composed: true,
          detail: data
        })
      );
    });

    form.addEventListener('reset', () => {
      if (alertEl) {
        alertEl.classList.add('hidden');
      }
      submittedData.value = null;
    });
  }
});
</script>
