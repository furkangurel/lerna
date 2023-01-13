import "../src/styles/tailwind.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
// export const decorators = [
//   (story) => ({
//     components: { story },
//     template: '<div style="padding: 3em; border:1px dashed grey;"><story /></div>',
//   }),
// ];