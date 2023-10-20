import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import messages from "./translations.json";

const userLanguage = navigator.language;
// adjust to the language of your guests. default is 'en'
const initialLanguage = userLanguage.startsWith('de') ? 'de' : 'en';

const i18n = createI18n({
    locale: initialLanguage,
    messages
});

const app = createApp(App);

// Install i18n instance to make the whole app i18n-aware
app.use(i18n);

// Mount
app.mount('#app');