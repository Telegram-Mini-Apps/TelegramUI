import { create } from '@storybook/theming';
import logo from './media/logo.png';

import { addons } from '@storybook/manager-api';

const favicon = document.querySelector('link[rel="icon"]');
if (favicon) {
  favicon.type = 'image/png';
  favicon.href = logo;
}

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: `<img alt="Logo" src="${logo}" width="32px" height="32px"/>`
  }),
  toolbar: {
    zoom: { hidden: true },
  },
});
