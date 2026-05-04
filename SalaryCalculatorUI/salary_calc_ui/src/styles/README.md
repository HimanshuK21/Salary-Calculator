# Enterprise-Level CSS System for Salary Calculator

## Overview

This comprehensive CSS system provides a professional, enterprise-grade styling solution for the Salary Calculator application. The CSS is organized following a modular, scalable architecture that promotes maintainability, accessibility, and performance.

## Table of Contents

1. [Architecture](#architecture)
2. [File Structure](#file-structure)
3. [Design System](#design-system)
4. [Color Palette](#color-palette)
5. [Typography](#typography)
6. [Components](#components)
7. [Usage Guide](#usage-guide)
8. [Customization](#customization)
9. [Accessibility](#accessibility)
10. [Browser Support](#browser-support)

## Architecture

The CSS system follows these key principles:

- **Modular**: Organized into logical, focused files
- **Scalable**: Easy to extend and maintain
- **DRY**: Uses variables and utility classes
- **Performant**: Optimized for minimal file size
- **Accessible**: WCAG AA compliant with keyboard navigation support
- **Responsive**: Mobile-first, fully responsive design
- **Dark Mode**: Built-in dark mode support

## File Structure

```
styles/
├── index.css              # Main entry point (imports all styles)
├── variables.css          # Design tokens and CSS variables
├── global.css            # Global styles, resets, base elements
├── app.css               # Application container and layout
├── forms.css             # Form fields, inputs, validation
├── toggles.css           # Toggle switches and custom controls
├── cards.css             # Cards, results display, containers
├── utilities.css         # Utility classes (Tailwind-like)
├── animations.css        # Keyframe animations and effects
└── README.md             # This file
```

## Design System

### Color Palette

The system defines a comprehensive color palette with semantic meaning:

#### Primary Colors
- `--primary-900` to `--primary-100`: Primary brand colors (blue family)
- Usage: Interactive elements, highlights, links

#### Status Colors
- **Success** (`--success-*`): Positive actions, confirmations
- **Warning** (`--warning-*`): Caution, notices
- **Error** (`--error-*`): Errors, deletions, critical actions
- **Info** (`--info-*`): Information, help text

#### Neutral Colors
- `--neutral-900` to `--neutral-50`: Gray spectrum
- Usage: Text, backgrounds, borders, dividers

### Typography

#### Font Stack
```css
--font-family-base: System fonts optimized for web
--font-family-mono: Monospace for numbers and codes
```

#### Font Sizes
- `--font-size-xs`: 12px (small labels)
- `--font-size-sm`: 14px (body text, help)
- `--font-size-base`: 16px (default, body)
- `--font-size-lg`: 18px (emphasis)
- `--font-size-xl` to `--font-size-5xl`: Headings

#### Font Weights
- Light: 300
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800

### Spacing System

Based on 4px base unit:
```
--space-1: 4px    --space-8: 32px
--space-2: 8px    --space-10: 40px
--space-3: 12px   --space-12: 48px
--space-4: 16px   --space-16: 64px
--space-5: 20px   --space-20: 80px
--space-6: 24px   --space-24: 96px
```

### Border Radius
```
--radius-xs: 4px      --radius-lg: 16px
--radius-sm: 6px      --radius-xl: 24px
--radius-base: 8px    --radius-2xl: 32px
--radius-md: 12px     --radius-full: 9999px
```

### Shadows
Eight levels of shadows from `--shadow-xs` (subtle) to `--shadow-2xl` (prominent)

### Transitions
- `--transition-fast`: 150ms
- `--transition-base`: 200ms
- `--transition-slow`: 300ms
- `--transition-slower`: 500ms

## Components

### Forms (`forms.css`)

**Input Fields**
```html
<input class="input-field" type="text" placeholder="Enter value">
```

**Form Groups**
```html
<div class="form-group">
  <label class="input-label">Label</label>
  <input class="input-field" type="text">
</div>
```

**Select Dropdowns**
```html
<select class="select-field">
  <option>Option 1</option>
</select>
```

**Input Groups (Combined)**
```html
<div class="input-group">
  <input class="input-group-item" type="number">
  <select class="input-group-item">
    <option>Unit</option>
  </select>
</div>
```

### Toggles (`toggles.css`)

**Custom Toggle Switch**
```html
<label class="toggle-switch">
  <input type="checkbox">
  <span class="toggle-switch-track">
    <span class="toggle-switch-thumb"></span>
  </span>
</label>
```

**Toggle Field (Label + Switch)**
```html
<div class="toggle-field">
  <div class="toggle-field-content">
    <h4 class="toggle-field-title">Tax Slab</h4>
    <p class="toggle-field-description">Select between old and new tax regime</p>
  </div>
  <label class="toggle-switch">
    <input type="checkbox">
    <span class="toggle-switch-track">
      <span class="toggle-switch-thumb"></span>
    </span>
  </label>
</div>
```

### Cards (`cards.css`)

**Basic Card**
```html
<div class="card">
  <div class="card-header">
    <h3>Title</h3>
  </div>
  <div class="card-body">
    Content here
  </div>
</div>
```

**Result Card**
```html
<div class="result-card">
  <div class="result-label">Income Tax</div>
  <div class="result-value">₹45,000</div>
  <div class="result-breakdown">
    <div class="result-breakdown-item">
      <span>Monthly</span>
      <span>₹3,750</span>
    </div>
  </div>
</div>
```

### Buttons (`global.css`)

**Primary Button**
```html
<button>Calculate Salary</button>
```

**Button Variants**
```html
<button class="btn-secondary">Secondary</button>
<button class="btn-success">Success</button>
<button class="btn-warning">Warning</button>
<button class="btn-error">Error</button>
<button class="btn-outline">Outline</button>
<button class="btn-ghost">Ghost</button>
```

**Button Sizes**
```html
<button class="btn-sm">Small</button>
<button>Default</button>
<button class="btn-lg">Large</button>
<button class="btn-block">Full Width</button>
```

### Alerts (`cards.css`)

```html
<div class="alert alert-info">
  <div class="alert-content">
    <div class="alert-title">Note</div>
    <p class="alert-message">This is an informational message</p>
  </div>
</div>
```

## Usage Guide

### 1. Import Styles

**In main.tsx or App.tsx:**
```typescript
import './styles/index.css';
```

### 2. Using Utility Classes

Utility classes provide quick styling without writing CSS:

**Layout**
```html
<div class="flex items-center justify-between gap-4">
  <span>Label</span>
  <button>Action</button>
</div>
```

**Spacing**
```html
<div class="p-6 mt-4 mb-8">Content</div>
```

**Text**
```html
<h1 class="text-3xl font-bold text-center">Title</h1>
<p class="text-sm text-muted">Secondary text</p>
```

**Colors**
```html
<div class="bg-primary text-white p-4">
  Important content
</div>
```

### 3. Creating Custom Components

**Example: Salary Summary Card**
```html
<div class="card card-primary">
  <div class="card-header">
    <h3>Salary Summary</h3>
  </div>
  <div class="card-body">
    <div class="stat-block">
      <div class="stat-label">Annual In-Hand</div>
      <div class="stat-value">₹24,00,000</div>
    </div>
  </div>
</div>
```

## Customization

### Changing Brand Colors

Edit `variables.css`:
```css
:root {
  --primary-600: #your-color;
  --primary-500: #your-lighter-shade;
  /* Update entire primary palette */
}
```

### Adding New Spacing Sizes

```css
:root {
  --space-32: 8rem; /* 128px */
}
```

### Creating New Utility Classes

Add to `utilities.css`:
```css
.my-custom-class {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Modifying Existing Components

Edit the specific component CSS file (e.g., `forms.css` for form elements).

## Accessibility

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Proper focus states with visible outlines
- Tab order follows visual flow

### Screen Readers
- Semantic HTML elements used
- `aria-label` attributes supported
- ARIA landmark regions

### Color Contrast
- All text meets WCAG AA standards (4.5:1 for body text)
- Multiple visual cues (not color-only)

### Motion
- `prefers-reduced-motion` media query support
- Animations can be disabled by user preference

### High Contrast Mode
- `prefers-contrast: more` support
- Enhanced contrast options built-in

## Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome/Edge | ✅ Full | Latest versions |
| Firefox | ✅ Full | Latest versions |
| Safari | ✅ Full | 12.1+ |
| IE 11 | ❌ Not Supported | Use ES5 polyfills if needed |
| Mobile Browsers | ✅ Full | iOS Safari 12+, Chrome Mobile |

### CSS Features Used

- CSS Grid
- CSS Flexbox
- CSS Custom Properties (Variables)
- CSS Media Queries
- CSS Transitions & Animations
- CSS Gradients
- CSS Backdrop Filter
- CSS Aspect Ratio

## Performance Optimizations

1. **Single CSS File Load**: All styles imported in `index.css`
2. **Minimal Repaints**: Hardware-accelerated transforms
3. **Optimized Selectors**: Efficient CSS specificity
4. **Variable System**: Easy theming without recompilation
5. **Utility-First**: Reusable classes reduce file size

## Maintenance

### Adding New Components

1. Create component CSS file in `styles/` folder
2. Import in `index.css`
3. Document component usage in this README

### Updating Design Tokens

1. Modify `variables.css`
2. All components automatically inherit changes
3. No component-specific changes needed

### Responsive Design Updates

Use mobile-first media query breakpoints:
```css
/* Mobile first (default) */
.element {
  property: value;
}

/* Tablet and up */
@media (min-width: 768px) {
  .element {
    property: value;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .element {
    property: value;
  }
}
```

## Examples

### Complete Form Example
```html
<div class="form-group">
  <div class="form-field">
    <label class="input-label input-label-required">Annual CTC</label>
    <div class="input-wrapper">
      <input class="input-field" type="number" placeholder="Enter CTC">
      <span class="input-suffix">Lakhs Rs.</span>
    </div>
  </div>
</div>
```

### Results Display Example
```html
<div class="results-section">
  <div class="results-grid">
    <div class="result-card success">
      <div class="result-label">In-Hand Salary</div>
      <div class="result-value">₹24,00,000</div>
    </div>
    <div class="result-card warning">
      <div class="result-label">Income Tax</div>
      <div class="result-value">₹2,40,000</div>
    </div>
  </div>
</div>
```

## Support & Troubleshooting

### Common Issues

**1. Styles not applying?**
- Ensure `index.css` is imported in main entry point
- Check CSS specificity conflicts
- Verify class names match documentation

**2. Dark mode not working?**
- Ensure browser supports `prefers-color-scheme`
- Check system OS dark mode settings

**3. Print styles looking off?**
- Review `@media print` rules in `index.css`
- Test with print preview before actual printing

## License & Usage

This CSS system is provided for the Salary Calculator application. 

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Maintained By**: Development Team
