# react-swiftstacks

A simple, flexible stack layout system for React inspired by SwiftUI. Build complex layouts with clean, declarative
components.

## Installation

```bash
npm install react-swiftstacks
```

or

```bash
yarn add react-swiftstacks
```

## Features

- 🎯 **SwiftUI-inspired API** - Familiar design patterns from SwiftUI
- 📦 **Three Layout Components** - `HStack`, `VStack`, and `ZStack`
- 🎨 **Flexible Styling** - Works with standard CSS, CSS modules, and inline styles
- 📏 **Built-in Spacing Scale** - Consistent spacing tokens out of the box
- 🔧 **Fully Typed** - Written in TypeScript with complete type definitions
- 🪶 **Lightweight** - Minimal bundle size with zero dependencies

## Quick Start

```jsx
import {HStack, VStack, ZStack} from "react-swiftstacks";

function App() {
    return (
        <VStack gap="md" align="center" padding="lg">
            <h1>Welcome</h1>
            <HStack gap="sm">
                <button>Cancel</button>
                <button>Confirm</button>
            </HStack>
        </VStack>
    );
}
```

## Components

### HStack

A horizontal stack that arranges its children in a horizontal line.

### VStack

A vertical stack that arranges its children in a vertical line.

### ZStack

A z-axis stack that overlays its children on top of each other.

## API Reference

All stack components accept standard `div` attributes like `className` and `style`, plus the following props:

### Common Props

- **`gap`**: `SpacingKey | number | string`
    - Controls the space between children. (Not available on `ZStack`)
- **`align`**: `'start' | 'center' | 'end' | 'stretch'`
    - Controls alignment on the **cross-axis** (perpendicular to the stack direction)
    - **In `VStack`**: controls horizontal alignment (left/center/right)
    - **In `HStack`**: controls vertical alignment (top/center/bottom)
    - (`stretch` is the default for `VStack`)
- **`justify`**: `'start' | 'center' | 'end' | 'between' | 'around'`
    - Controls alignment on the **main-axis** (along the stack direction)
    - **In `VStack`**: controls vertical alignment (top/center/bottom)
    - **In `HStack`**: controls horizontal alignment (left/center/right)
- **`textAlign`**: `'left' | 'center' | 'right'`
    - Sets the `text-align` property for the stack, inherited by all children
- **`margin`**: `SpacingKey | number | string`
    - Sets the margin around the component
- **`padding`**: `SpacingKey | number | string`
    - Sets the padding inside the component
- **`flexGrow`**: `boolean`
    - Allows the stack to grow and fill available space (Not available on `ZStack`)

### HStack-Specific Props

- **`wrap`**: `boolean`
    - Allows children to wrap to the next line if they exceed the container width

### ZStack-Specific Props

- **`center`**: `boolean`
    - A shortcut to center all children both horizontally and vertically within the stack

### ⚠️ Important Note on `align` vs `justify`

**These props follow CSS flexbox semantics, not SwiftUI semantics.** This can feel counterintuitive at first:

- `align` → maps to `align-items` (cross-axis)
- `justify` → maps to `justify-content` (main-axis)

**Quick Reference:**

| Component | `align` controls    | `justify` controls  |
|-----------|---------------------|---------------------|
| `VStack`  | Horizontal (x-axis) | Vertical (y-axis)   |
| `HStack`  | Vertical (y-axis)   | Horizontal (x-axis) |

**Why this way?** To maintain consistency with CSS flexbox standards, making it easier to integrate with the broader web
ecosystem. Once you internalize the axis model, it becomes second nature.

## Spacing Scale

The `gap`, `margin`, and `padding` props can accept a spacing key for standardized sizing.

- `xs`: '0.25rem' (4px)
- `sm`: '0.5rem' (8px)
- `md`: '1rem' (16px)
- `lg`: '1.5rem' (24px)
- `xl`: '2rem' (32px)

## Usage Example

```jsx
import {HStack, VStack, ZStack} from "react-swiftstacks";

export const ProfileCard = () => (
    <VStack
        gap="md"
        align="center"     // Centers horizontally (cross-axis in VStack)
        justify="start"    // Aligns to top (main-axis in VStack)
        padding="lg"
        style={{width: "300px", border: "1px solid #ccc", borderRadius: "8px"}}
    >
        <HStack
            justify="between"  // Spreads horizontally (main-axis in HStack)
            align="center"     // Centers vertically (cross-axis in HStack)
            style={{width: "100%"}}
        >
            <span style={{fontWeight: 600}}>John Doe</span>
            <button>Edit</button>
        </HStack>

        <ZStack center style={{width: "150px", height: "150px"}}>
            <img src="/avatar-bg.png" alt="background"/>
            <img
                src="/avatar.png"
                alt="avatar"
                style={{borderRadius: "50%", width: "100px", height: "100px"}}
            />
        </ZStack>

        <VStack textAlign="center" gap="sm">
            <p>Bio: Building cool things with React.</p>
        </VStack>
    </VStack>
);
```

## License

MIT © Ednan Rogério Frizzera Filho
