import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

// Langues to use
import common_pt from "./translations/pt/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        pt: {
            common: common_pt               // 'common' is our custom namespace
        },
        en: {
            common: common_en
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
registerServiceWorker();
