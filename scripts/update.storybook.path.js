const path = require('path');
const fs = require('fs');

// eslint-disable-next-line import/no-extraneous-dependencies
const glob = require('glob');

const STORYBOOK_LOCATION = '.storybook';

const content = glob
  .sync(`${path.join(__dirname, '../src')}/**/*.stories.js`)
  .map(
    p =>
      `require("${path
        .relative(path.join(__dirname, '../', STORYBOOK_LOCATION), path.resolve(p))
        .replace(/\\/g, '/')}");`,
  )
  .join('\n');

fs.writeFileSync(path.join(__dirname, `../${STORYBOOK_LOCATION}/extraStories.js`), content);
