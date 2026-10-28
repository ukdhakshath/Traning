
const fs = require("node:fs");
const assert = require("node:assert/strict");

const html = fs.readFileSync("index.html", "utf8");

console.log("Running website tests...\n");

// Test 1: HTML file exists and contains content
assert.ok(html.length > 0, "HTML file must not be empty");
console.log("PASS: HTML file exists");

// Test 2: Page has a title
assert.match(html, /<title>.*<\/title>/i, "Page must have a title");
console.log("PASS: Page title exists");

// Test 3: Page has a heading
assert.match(html, /<h1\b[^>]*>.*<\/h1>/is, "Page must have an h1 heading");
console.log("PASS: Main heading exists");

// Test 4: Page has a viewport meta tag
assert.match(
  html,
  /<meta\b[^>]*name=["']viewport["']/i,
  "Viewport meta tag is required"
);
console.log("PASS: Responsive viewport exists");

// Test 5: Page has a button
assert.match(html, /<button\b/i, "Page must contain a button");
console.log("PASS: Button exists");

console.log("\nAll website tests passed!");
