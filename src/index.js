import { Container, getContainer } from "@cloudflare/containers";

export class GlanceContainer extends Container {
  defaultPort = 8080;
  sleepAfter = "1m";
  envVars = { PORT: "8080" };
}

export default {
  async fetch(request, env) {
    return getContainer(env.GLANCE).fetch(request);
  },
};
