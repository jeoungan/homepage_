import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

async function read(path) {
  return readFile(new URL(`../${path}`, import.meta.url), "utf8");
}

const [html, css, js] = await Promise.all([
  read("index.html"),
  read("styles.css"),
  read("app.js")
]);

assert.match(html, /<main[^>]*class="[^"]*archive-shell/i, "home page should expose an editorial archive main area");
assert.match(html, /id="projectGrid"/, "home page should include a project grid target");
assert.match(html, /id="searchInput"/, "home page should include search");
assert.match(html, /id="typeFilters"/, "home page should include type filters");
assert.match(html, /id="featuredProject"/, "home page should include a featured project area");
assert.match(html, /id="releaseRows"/, "home page should include a project index list");
assert.match(html, /class="archive-aside"/, "home page should include a persistent archive identity panel");
assert.match(html, /app\.js/, "home page should load app.js");
assert.match(html, /styles\.css/, "home page should load styles.css");

assert.match(css, /\.project-card/, "styles should define project cards");
assert.match(css, /\.archive-aside/, "styles should define an editorial archive side panel");
assert.match(css, /\.featured-panel/, "styles should define a featured project panel");
assert.match(css, /\.release-row/, "styles should define project index rows");
assert.match(css, /--cobalt:/, "styles should define the archive accent color");
assert.match(css, /@media\s*\(/, "styles should include responsive media rules");
assert.doesNotMatch(css, /letter-spacing:\s*-[^;]+;/, "styles should not use negative letter spacing");
assert.match(
  css,
  /@media\s*\(max-width:\s*720px\)[\s\S]*\.featured-panel\s*\{[\s\S]*display:\s*block;/,
  "tablet/mobile layout should stack the selected project panel"
);
assert.match(
  css,
  /@media\s*\(max-width:\s*720px\)[\s\S]*\.archive-aside\s*\{[\s\S]*position:\s*relative;/,
  "tablet/mobile layout should release the sticky archive panel"
);
assert.match(
  css,
  /@media\s*\(max-width:\s*440px\)[\s\S]*\.release-row\s*\{[\s\S]*grid-template-columns:\s*52px\s+minmax\(0,\s*1fr\);/,
  "phone project index rows should use compact media columns"
);
assert.match(
  css,
  /@media\s*\(max-width:\s*720px\)[\s\S]*\.project-detail\s+\.media-frame\s*\{[\s\S]*min-height:\s*0;/,
  "phone detail media should not force a width larger than the viewport"
);
assert.match(
  css,
  /body\s*\{[\s\S]*overflow-x:\s*hidden;/,
  "layout should prevent horizontal page scrolling"
);
assert.match(
  css,
  /@media\s*\(max-width:\s*440px\)[\s\S]*\.top-bar,\s*[\s\S]*\.archive-shell,\s*[\s\S]*\.project-detail-shell\s*\{[\s\S]*width:\s*calc\(100%\s*-\s*30px\);/,
  "phone layout containers should use a viewport-based calc width"
);
assert.match(
  css,
  /@media\s*\(max-width:\s*440px\)[\s\S]*\.project-grid\s*\{[\s\S]*grid-template-columns:\s*1fr;/,
  "phone archive should render a single readable project column"
);

assert.match(js, /const projects\s*=\s*\[/, "app should define editable project data");
assert.match(js, /tipofmytouge-opening\.mp4/, "featured project should use the local opening video");
assert.match(js, /https:\/\/tipofmytouge\.onrender\.com\//, "tipofmytouge should link to its Render deployment");
assert.match(
  js,
  /https:\/\/jeoungan\.github\.io\/over_the_rainbow\//,
  "over_the_rainbow should link to its GitHub Pages deployment"
);
assert.match(js, /assets\/screenshots\/BaBarian\.png/, "project data should use captured screenshots");
assert.match(
  js,
  /assets\/screenshots\/over_the_rainbow\.png/,
  "over_the_rainbow should use its captured screenshot"
);
assert.match(js, /function currentSearchTerm/, "app should read search state from the current input");
assert.match(js, /currentSearchTerm\(\)/, "project filtering should use current input state");
assert.match(js, /function renderFeaturedProject/, "app should render the featured project");
assert.match(js, /function renderReleaseRows/, "app should render Steam-style release rows");
assert.match(js, /function renderProjects/, "app should render projects from data");
assert.match(js, /addEventListener\("input"/, "app should support search input");
assert.match(js, /addEventListener\("click"/, "app should support filter clicks");

const cardCount = (js.match(/title:/g) || []).length;
assert.equal(cardCount, 22, `expected 22 discovered projects, found ${cardCount}`);
