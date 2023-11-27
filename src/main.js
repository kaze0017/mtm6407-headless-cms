import { createApp } from "vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import App from "./App.vue";
import Page from "./components/Page.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Testimonial from "./components/Testimonial.vue";
import Team from "./components/Team.vue";
import Member from "./components/Member.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

const app = createApp(App);

app.use(StoryblokVue, {
  accessToken: "O1MbUYuZ43BECkFJ34qmEgtt",
  use: [apiPlugin],
  apiOptions: {
    region: "",
  },
});

app.component("Navbar", Navbar);
app.component("Page", Page);
app.component("Hero", Hero);
app.component("About", About);
app.component("Testimonial", Testimonial);
app.component("Team", Team);
app.component("Member", Member);
app.component("Footer", Footer);

app.mount("#app");
