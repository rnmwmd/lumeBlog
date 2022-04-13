import lume from "lume/mod.ts";

const site = lume({
  src: "./source",
  dest: "./public",
  location: new URL("https://www.jaxgoods.com"),
  prettyUrls: true,
  server: {
    port: 666,
    page404: "./404.html",
    open: true,
  },
});

site.copy("static");

export default site;
