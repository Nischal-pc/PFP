#!/usr/bin/env node

/**
 * WCAG Color Contrast Checker
 * Analyzes contrast ratios for all text/background combinations
 */

// OKLch to sRGB conversion
function oklchToSrgb(l, c, h) {
  const hRad = (h * Math.PI) / 180;
  const a = c * Math.cos(hRad);
  const b = c * Math.sin(hRad);

  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.291486578 * b;

  const l3 = l_ * l_ * l_;
  const m3 = m_ * m_ * m_;
  const s3 = s_ * s_ * s_;

  const r = +4.0767245293 * l3 - 3.3072168827 * m3 + 0.2307590544 * s3;
  const g = -1.2681437731 * l3 + 2.6093323231 * m3 - 0.3411419521 * s3;
  const b_ = -0.0041960771 * l3 - 0.7034186147 * m3 + 1.7076147010 * s3;

  // Apply gamma correction
  const toLinear = (c) => {
    return c <= 0.0031308 ? 12.92 * c : (1 + 0.055) * Math.pow(c, 1 / 2.4) - 0.055;
  };

  return [toLinear(r), toLinear(g), toLinear(b_)];
}

// Calculate relative luminance
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calculate contrast ratio
function getContrastRatio(rgb1, rgb2) {
  const lum1 = getLuminance(rgb1[0] * 255, rgb1[1] * 255, rgb1[2] * 255);
  const lum2 = getLuminance(rgb2[0] * 255, rgb2[1] * 255, rgb2[2] * 255);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

// Parse OKLch color
function parseOklch(oklchStr) {
  const match = oklchStr.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/);
  if (!match) return null;
  return [parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3])];
}

// Color definitions from globals.css
const colors = {
  background: { oklch: "oklch(0.985 0.004 250)", type: "bg" },
  foreground: { oklch: "oklch(0.2 0.025 260)", type: "text" },
  card: { oklch: "oklch(0.995 0.002 250)", type: "bg" },
  "card-foreground": {
    oklch: "oklch(0.2 0.025 260)",
    type: "text",
  },
  primary: { oklch: "oklch(0.5 0.205 27)", type: "text/bg" },
  "primary-foreground": {
    oklch: "oklch(0.99 0.01 90)",
    type: "text",
  },
  secondary: { oklch: "oklch(0.18 0.03 260)", type: "text/bg" },
  "secondary-foreground": {
    oklch: "oklch(0.97 0.01 250)",
    type: "text",
  },
  muted: { oklch: "oklch(0.945 0.008 250)", type: "bg" },
  "muted-foreground": {
    oklch: "oklch(0.42 0.025 260)",
    type: "text",
  },
  accent: { oklch: "oklch(0.55 0.09 230)", type: "text/bg" },
  "accent-foreground": {
    oklch: "oklch(0.99 0.01 250)",
    type: "text",
  },
  border: { oklch: "oklch(0.82 0.02 260)", type: "border" },
};

// Calculate all key contrast combinations
const combinations = [
  // Primary text combinations
  {
    name: "foreground on background",
    foreground: "foreground",
    background: "background",
    wcagTarget: "AA-normal",
  },
  {
    name: "muted-foreground on background",
    foreground: "muted-foreground",
    background: "background",
    wcagTarget: "AA-normal",
  },
  {
    name: "foreground on card",
    foreground: "foreground",
    background: "card",
    wcagTarget: "AA-normal",
  },
  {
    name: "muted-foreground on card",
    foreground: "muted-foreground",
    background: "card",
    wcagTarget: "AA-normal",
  },
  {
    name: "muted-foreground on muted",
    foreground: "muted-foreground",
    background: "muted",
    wcagTarget: "AA-normal",
  },
  // Primary button
  {
    name: "primary-foreground on primary",
    foreground: "primary-foreground",
    background: "primary",
    wcagTarget: "AA-normal",
  },
  // Secondary button
  {
    name: "secondary-foreground on secondary",
    foreground: "secondary-foreground",
    background: "secondary",
    wcagTarget: "AA-normal",
  },
  // Accent interactive elements
  {
    name: "accent on background",
    foreground: "accent",
    background: "background",
    wcagTarget: "AA-interactive",
  },
  {
    name: "accent on card",
    foreground: "accent",
    background: "card",
    wcagTarget: "AA-interactive",
  },
  {
    name: "accent-foreground on accent",
    foreground: "accent-foreground",
    background: "accent",
    wcagTarget: "AA-normal",
  },
  // Secondary button on background
  {
    name: "secondary on background",
    foreground: "secondary",
    background: "background",
    wcagTarget: "AA-interactive",
  },
];

// Print results
console.log("=== WCAG Color Contrast Analysis ===\n");
console.log("Legend:");
console.log("  ✓ PASS:   Meets WCAG AA standard");
console.log("  ⚠ WARN:   Close to standard (>3.0)");
console.log("  ✗ FAIL:   Below WCAG AA standard");
console.log(
  "\nWCAG AA Standards:"
);
console.log("  - Normal text: 4.5:1");
console.log("  - Large text (18pt+): 3:1");
console.log("  - Interactive UI: 3:1");
console.log(
  "\n================================================================\n"
);

const results = [];
let failures = [];

combinations.forEach((combo) => {
  const fg = colors[combo.foreground];
  const bg = colors[combo.background];

  if (!fg || !bg) {
    console.error(`Missing color definition: ${combo.foreground} or ${combo.background}`);
    return;
  }

  const fgOklch = parseOklch(fg.oklch);
  const bgOklch = parseOklch(bg.oklch);

  if (!fgOklch || !bgOklch) {
    console.error(`Failed to parse: ${combo.foreground} or ${combo.background}`);
    return;
  }

  const fgRgb = oklchToSrgb(fgOklch[0], fgOklch[1], fgOklch[2]);
  const bgRgb = oklchToSrgb(bgOklch[0], bgOklch[1], bgOklch[2]);
  const ratio = getContrastRatio(fgRgb, bgRgb);

  const target = combo.wcagTarget === "AA-normal" ? 4.5 : 3;
  const status = ratio >= target ? "✓ PASS" : ratio >= 3 ? "⚠ WARN" : "✗ FAIL";

  if (ratio < target) {
    failures.push({
      combination: combo.name,
      ratio: ratio.toFixed(2),
      target: target,
      deficit: (target - ratio).toFixed(2),
    });
  }

  results.push({
    combination: combo.name,
    ratio: ratio.toFixed(2),
    target: target,
    status: status,
  });

  console.log(`${status} | ${combo.name.padEnd(35)} | ${ratio.toFixed(2)}:1 (target: ${target}:1)`);
});

console.log("\n================================================================\n");

if (failures.length > 0) {
  console.log(`⚠ ATTENTION: ${failures.length} combination(s) FAIL WCAG AA standards:\n`);
  failures.forEach((f) => {
    console.log(`  ✗ ${f.combination}`);
    console.log(`    Ratio: ${f.ratio}:1 | Target: ${f.target}:1 | Deficit: -${f.deficit}:1`);
  });
  console.log(
    "\nRECOMMENDATIONS:\n"
  );
  console.log(
    "1. Increase lightness (L value) for foreground colors (make text darker)"
  );
  console.log(
    "2. Decrease lightness for background colors (make backgrounds brighter)"
  );
  console.log("3. Avoid low-contrast secondary text on light backgrounds\n");

  // Specific recommendation for muted-foreground
  console.log("SPECIFIC FIX - muted-foreground:");
  console.log("  Current: oklch(0.42 0.025 260) - TOO LIGHT");
  console.log("  Recommended: oklch(0.38 0.025 260) - DARKER");
  console.log("  Or: oklch(0.36 0.025 260) - EVEN DARKER for extra margin\n");
} else {
  console.log("✓ All color combinations meet WCAG AA standards!");
}

console.log("================================================================\n");
