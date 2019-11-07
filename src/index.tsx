// Импорт 'react-app-polyfill/ie11' для  поддержки ie 11 в create react app 3
// Этот импорт должен идти первым в index.tsx
// (https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md#internet-explorer-11)
import 'react-app-polyfill/ie11';
// Полифилл для старых браузеров
// https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md#polyfilling-other-language-features
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import 'src/index.css';
import App from 'src/components/App';

ReactDOM.render(<App />, document.getElementById('root'));
