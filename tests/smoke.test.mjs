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

assert.match(js, /const projects\s*=\s*\[/, "app should define editable project data");
assert.match(js, /tipofmytouge-opening\.mp4/, "featured project should use the local opening video");
assert.match(js, /https:\/\/tipofmytouge\.onrender\.com\//, "tipofmytouge should link to its Render deployment");
assert.match(js, /assets\/screenshots\/BaBarian\.png/, "project data should use captured screenshots");
assert.match(js, /function currentSearchTerm/, "app should read search state from the current input");
assert.match(js, /currentSearchTerm\(\)/, "project filtering should use current input state");
assert.match(js, /function renderFeaturedProject/, "app should render the featured project");
assert.match(js, /function renderReleaseRows/, "app should render Steam-style release rows");
assert.match(js, /function renderProjects/, "app should render projects from data");
assert.match(js, /addEventListener\("input"/, "app should support search input");
assert.match(js, /addEventListener\("click"/, "app should support filter clicks");

const cardCount = (js.match(/title:/g) || []).length;
assert.equal(cardCount, 18, `expected 18 discovered projects, found ${cardCount}`);
