## Changes from the live lesson

- `webpack.config.js` was modified to fix the dev server
- Wrapped the `Route` components in a `Switch` so that a fallback "404" page (I named my component `FourOhFour`) will be rendered for invalid paths
   - `import { Switch } from 'react-router-dom'`
   - All paths were made `exact`
- Moved the Array `students` from `Students` to `App`, then pass down through the `Route` as a prop
   - The `<Route>` now uses a `render` prop instead of the `Component` prop (which return a component with all the combined props from the Router, along with our custom props for `students`) to allow passing of props to the rendered Component
- Renamed the `Student` component (`Student.js`) to `Students` (plural, `Students.js`)
- `Students` now has sub `Route` components within it that will serve different content based on the browser path (wrapped in a `Switch`)
- A new `Student` component was created to handle the sub-view and functionality for a single student within `Students`