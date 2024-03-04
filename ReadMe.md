# Telegram UI

## Resources

### [Playground and Storybook](https://tgui.xelene.me/)
### [Figma](https://www.figma.com/file/AwAi6qE11mQllHa1sOROYp/Telegram-Mini-Apps-Library)

## Installation

**npm:**

```sh
npm i @xelene/tgui
```

**yarn:**

```sh
yarn add @xelene/tgui
```

**pnpm:**

```sh
pnpm add @xelene/tgui
```

## Hello World

```jsx static
import '@xelene/tgui/dist/styles.css';

import { AppRoot, Placeholder } from '@xelene/tgui';

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

