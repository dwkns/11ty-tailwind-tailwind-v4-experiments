import { execSync } from 'child_process'

export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/css/styles.css');
  eleventyConfig.addWatchTarget("src/css/styles.css");
  eleventyConfig.on("eleventy.after", ({ directories: { output: o } }) => {
    execSync(
      `npx @tailwindcss/cli -i ${o}css/styles.css -o ${o}css/styles.css`
    );
  });
};

export const config = {
  dir: {
    input: "src",
    output: "dist"
  },
};