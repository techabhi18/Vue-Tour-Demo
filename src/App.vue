<template>
  <div class="tour-container">
    <h1 class="tour-title">Vue.js 3 + VueTour Integration</h1>
    <p class="tour-description">Follow these steps to integrate VueTour into your Vue.js 3 app and create smooth
      interactive tours.</p>

    <div data-v-step="0" class="tour-card">
      <div class="tour-card-header">
        <h2>Step 1: Install Vue.js 3 (terminal)</h2>
      </div>
      <div class="tour-card-body">
        <p>Ensure Vue.js 3 is installed in your project using Vue CLI or Vite.</p>
        <pre><code>npm install vue</code></pre>
      </div>
    </div>

    <div data-v-step="1" class="tour-card">
      <div class="tour-card-header">
        <h2>Step 2: Install VueTour (terminal)</h2>
      </div>
      <div class="tour-card-body">
        <p>Next, install VueTour to handle the tour steps.</p>
        <pre><code>npm install vue3-tour</code></pre>
      </div>
    </div>

    <div data-v-step="2" class="tour-card">
      <div class="tour-card-header">
        <h2>Step 3: Import VueTour (main.js)</h2>
      </div>
      <div class="tour-card-body">
        <p>Import VueTour and register it in your main component.</p>
        <pre><code>import Vue3Tour from 'vue3-tour';<br>app.use(Vue3Tour);</code></pre>
      </div>
    </div>

    <div data-v-step="3" class="tour-card">
      <div class="tour-card-header">
        <h2>Step 4: Define Tour Steps (App.vue)</h2>
      </div>
      <div class="tour-card-body">
        <p>Define your steps in an array, specifying target elements and content for each step.</p>
        <pre><code>steps: [
  { target: '#step1', content: 'Install Vue.js 3 in your app.' },
  { target: '#step2', content: 'Install VueTour and import it into your project.' }, 
  { target: '#step3', content: 'Define steps and initialize the tour.' }
]</code></pre>
      </div>
    </div>

    <div data-v-step="4" class="tour-card">
      <div class="tour-card-header">
        <h2>Step 5: Add VueTour Component (App.vue)</h2>
      </div>
      <div class="tour-card-body">
        <p>Add the &lt;v-tour&gt; component to trigger the interactive tour.</p>
        <pre><code>&lt;v-tour name="vueTour" :steps="steps"&gt;&lt;/v-tour&gt;</code></pre>
      </div>
    </div>

    <div data-v-step="5" class="tour-card">
      <div class="tour-card-header">
        <h2>Step 6: Start Tour (App.vue)</h2>
      </div>
      <div class="tour-card-body">
        <p>Start the tour automatically when the component is mounted.</p>
        <pre><code>mounted() {
  this.$tours['vueTour'].start();
}</code></pre>
      </div>
    </div>

    <v-tour name="vueTour" :steps="steps"></v-tour>
  </div>
</template>

<script>
export default {
  name: 'vueTour',
  data() {
    return {
      steps: [
        {
          target: '[data-v-step="0"]',
          header: {
            title: 'Install Vue.js 3 (terminal)',
          },
          content: 'Start by installing Vue.js 3 using either Vue CLI or Vite to create your app.'
        },
        {
          target: '[data-v-step="1"]',
          content: 'To integrate VueTour, first install the library via npm: npm install vue3-tour'
        },
        {
          target: '[data-v-step="2"]',
          content: 'Import and use VueTour in your application’s main entry file.'
        },
        {
          target: '[data-v-step="3"]',
          content: 'Define your steps with targets and content in a structured array, then initialize VueTour.'
        },
        {
          target: '[data-v-step="4"]',
          content: 'Finally, include the <v-tour> component in your template to trigger the tour.'
        },
        {
          target: '[data-v-step="5"]',
          content: 'Start the tour automatically when the component is mounted using the mounted lifecycle hook.'
        }
      ]
    }
  },
  mounted() {
    this.$tours['vueTour'].start();
  }
}
</script>

<style scoped></style>
