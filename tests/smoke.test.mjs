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

assert.match(html, /<main[^>]*class="[^"]*showcase/i, "home page should expose a showcase main area");
assert.match(html, /id="projectGrid"/, "home page should include a project grid target");
assert.match(html, /id="searchInput"/, "home page should include search");
assert.match(html, /id="typeFilters"/, "home page should include type filters");
assert.match(html, /id="featuredProject"/, "home page should include a featured project area");
assert.match(html, /id="releaseRows"/, "home page should include a Steam-style release list");
assert.match(html, /app\.js/, "home page should load app.js");
assert.match(html, /styles\.css/, "home page should load styles.css");

assert.match(css, /\.project-card/, "styles should define project cards");
assert.match(css, /\.steam-nav/, "styles should define Steam-style navigation");
assert.match(css, /\.featured-panel/, "styles should define a featured project panel");
assert.match(css, /\.release-row/, "styles should define release rows");
assert.match(css, /@media\s*\(/, "styles should include responsive media rules");
assert.doesNotMatch(css, /letter-spacing:\s*-[^;]+;/, "styles should not use negative letter spacing");
assert.match(
  css,
  /@media\s*\(max-width:\s*820px\)[\s\S]*\.featured-panel\s*\{[\s\S]*height:\s*auto;/,
  "tablet/mobile layout should let the featured panel grow naturally"
);
assert.match(
  css,
  /@media\s*\(max-width:\s*820px\)[\s\S]*\.featured-side-shots\s*\{[\s\S]*display:\s*none;/,
  "tablet/mobile layout should hide side shots to keep the hero organized"
);
assert.match(
  css,
  /@media\s*\(max-width:\s*560px\)[\s\S]*\.release-row\s*\{[\s\S]*grid-template-columns:\s*86px\s+minmax\(0,\s*1fr\);/,
  "phone release rows should use compact media columns"
);
assert.match(
  css,
  /@media\s*\(max-width:\s*560px\)[\s\S]*\.project-detail\s+\.media-frame\s*\{[\s\S]*min-height:\s*0;/,
  "phone detail media should not force a width larger than the viewport"
);
assert.match(
  css,
  /@media\s*\(max-width:\s*560px\)[\s\S]*html,\s*[\s\S]*body\s*\{[\s\S]*overflow-x:\s*hidden;/,
  "phone layout should prevent horizontal page scrolling"
);
assert.match(
  css,
  /@media\s*\(max-width:\s*560px\)[\s\S]*\.top-bar,\s*[\s\S]*\.steam-nav,\s*[\s\S]*\.showcase\s*\{[\s\S]*width:\s*calc\(100vw\s*-\s*48px\);/,
  "phone layout containers should use a viewport-based calc width"
);
assert.match(
  css,
  /@media\s*\(max-width:\s*560px\)[\s\S]*\.site-nav\s*\{[\s\S]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\);/,
  "phone top navigation should wrap into two safe columns"
);
assert.match(
  css,
  /@media\s*\(max-width:\s*560px\)[\s\S]*\.type-filters\s*\{[\s\S]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\);/,
  "phone type filters should use stable two-column controls"
);
assert.match(
  css,
  /@media\s*\(max-width:\s*560px\)[\s\S]*\.featured-media\s+\.media-badge\s*\{[\s\S]*display:\s*none;/,
  "phone featured media should hide the corner badge to avoid clipping"
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
assert.equal(cardCount, 19, `expected 19 discovered projects, found ${cardCount}`);
