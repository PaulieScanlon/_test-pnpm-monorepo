import { createTool } from "@mastra/core/tools";
export const helloWorld = createTool({
    id: "inner-tool",
    description: "A tool that returns hello world",
    execute: async () => "packages/utils/inner-tool/helloWorld!"
});
