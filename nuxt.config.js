export default {
  css: ["@/assets/style.css"],
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto+Slab:300",
      },
    ],
    meta: [{name: "viewport", content: "width=device-width, initial-scale=1"}],
  },
  plugins: [{src: "~plugins/olark.js", ssr: false}],
};
