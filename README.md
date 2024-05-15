# Telegram UI

## Overview

Telegram UI kit equips you with a variety of pre-designed components and tools to help you quickly develop high-quality Telegram applications. Whether you're aiming to create custom client apps, integrate Telegram functionality, or develop unique bots, this toolkit is your go-to resource.

## Features

- **Cross-Platform Design Consistency:** Use built-in support for iOS’s Human Interface Guidelines and Android’s Material Design to maintain a uniform look and functionality across both platforms.
- **Pre-designed UI Components:** Access a variety of ready-to-use UI components inspired by Telegram’s interface, designed for easy integration and customization.
- **Responsive Design:** Create apps that look and work great on any device, using flexible layouts and media queries to ensure optimal display and functionality.
- **Telegram Color Scheme Support:** Apply Telegram’s native color schemes to your apps for consistent branding and a familiar user experience.

## 🖥 Environment Support

- Modern browsers
- Server-side Rendering
- [All known](https://telegram.org/apps) Telegram clients

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Ios |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| \>= 79 | \>= 78 | \>= 73 | \>= 12.0 | \>= 12.0                                                                                                                                                                                                        |


## Resources

- **Example Mini App:** Typescript version — https://github.com/Telegram-Mini-Apps/TGUI-Example
- **Playground and Storybook:** Experiment with components and visualize changes in real-time at [Playground and Storybook](https://tgui.xelene.me/).
- **Figma Resources:** Design and prototype with ease using our comprehensive Figma files available at [Figma](https://figma.com/community/file/1348989725141777736/).

## Installation

```sh
npm i @telegram-apps/telegram-ui
```

```sh
yarn add @telegram-apps/telegram-ui
```

```sh
pnpm add @telegram-apps/telegram-ui
```

## Usage

```jsx static
import '@telegram-apps/telegram-ui/dist/styles.css';

import { AppRoot, Placeholder } from '@telegram-apps/telegram-ui';

const App = () => (
  <AppRoot>
    <Placeholder
      header="Title"
      description="Description"
    >
      <img
        alt="Telegram sticker"
        src="https://xelene.me/telegram.gif"
        style={{ display: 'block', width: '144px', height: '144px' }}
      />
    </Placeholder>
  </AppRoot>
);

export default App;
```

## 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

<a href="https://next.ossinsight.io/widgets/official/compose-recent-active-contributors?limit=30&repo_id=738096149" target="_blank" style="display: block" align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://next.ossinsight.io/widgets/official/compose-recent-active-contributors/thumbnail.png?limit=30&repo_id=738096149&image_size=auto&color_scheme=dark" width="655" height="auto">
    <img alt="Active Contributors of Telegram-Mini-Apps/TelegramUI - Last 28 days" src="https://next.ossinsight.io/widgets/official/compose-recent-active-contributors/thumbnail.png?limit=30&repo_id=738096149&image_size=auto&color_scheme=light" width="655" height="auto">
  </picture>
</a>

Contributions are welcome! To contribute, fork the repository, make your changes, and submit a pull request. We look forward to your innovative [ideas](https://github.com/Telegram-Mini-Apps/TelegramUI/pulls) and improvements.

## License
This Telegram UI Kit is available under the [MIT License](https://opensource.org/license/mit). Use it freely in both personal and commercial projects.

The library was skillfully crafted by [mainsmirnov](https://github.com/mainsmirnov), with the generous sponsorship of [TON Foundation](https://github.com/ton-society/grants-and-bounties/issues/364).
