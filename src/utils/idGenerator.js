// @flow
const prefix = 'id__';
let increment = 0;

export default function idGenerator() {
  return `${prefix}${Date.now()}_${increment++}`;
}
