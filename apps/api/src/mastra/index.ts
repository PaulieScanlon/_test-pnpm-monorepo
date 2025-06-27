import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
// import { VercelDeployer } from "@mastra/deployer-vercel";
import { weatherAgent } from "./agents/weather-agent";

export const mastra = new Mastra({
  agents: { weatherAgent },
  logger: new PinoLogger({
    name: "Mastra",
    level: "info"
  })
  // deployer: new VercelDeployer()
});
