# vite-template-redux

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

## List the most important questions to clarify the specification

Should the UI scale to mobile devices, if so, in which order should the columns stack?
How often should the message list update? (Will we need websockets or can we do simple api polling?).
Who is the contact displayed to the right?

## Give short constructive feedback to the UX prototype including suggestions for improvements

Overall I like the layout and it will look and feel like other email clients.
The UI is displaying alot of information if all the columns are full. Should the user be able to expand and collapse the Agents column?
The prototype does not show how an opened email is shown in the list. I assume normal font text for read messages, while unread messages are in bold text?

## Goals

- Easy migration from Create React App or Vite
- As beginner friendly as Create React App
- Optimized performance compared to Create React App
- Customizable without ejecting

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
