---
name: Vytas Car Repairs
description: An owner-run garage's site built as a workshop shadow board, every service a tool hung in its painted outline.
colors:
  board: "#2c5546"
  board-deep: "#1f4034"
  hole: "#142b23"
  paint: "#eef3ee"
  paint-dim: "#c4d3ca"
  steel: "#a9b3b8"
  steel-dark: "#6f7b81"
  peg-steel: "#8d989d"
  grip: "#c8202f"
  grip-hover: "#dd2a3a"
  grip-error: "#a3121f"
  tape: "#161616"
  galv: "#e4e8ea"
  galv-2: "#d3d9dc"
  plate: "#f6f8f9"
  ink: "#15201b"
  ink-2: "#44514b"
  rule: "#b9c3c7"
typography:
  display:
    fontFamily: "Shoulders Stencil, Arial Narrow, sans-serif"
    fontSize: "clamp(4.6rem, 19vw, 15rem)"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 4rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0.01em"
  title:
    fontFamily: "Shoulders, Arial Narrow, sans-serif"
    fontSize: "1.9rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
  action:
    fontFamily: "Shoulders, Arial Narrow, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
  label:
    fontFamily: "Shoulders, Arial Narrow, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.12em"
  lede:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  tape: "2px"
  plate: "3px"
  fitting: "4px"
  tag-eye: "6px"
  tag-tip: "14px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "28px"
  xl: "56px"
  gutter: "clamp(16px, 4vw, 44px)"
  section: "clamp(56px, 9vw, 104px)"
  max: "1200px"
components:
  button-call:
    backgroundColor: "{colors.grip}"
    textColor: "#ffffff"
    typography: "{typography.action}"
    rounded: "{rounded.fitting}"
    padding: "0 16px"
    height: "44px"
  button-call-hover:
    backgroundColor: "{colors.grip-hover}"
  button-submit:
    backgroundColor: "{colors.grip}"
    textColor: "#ffffff"
    typography: "{typography.action}"
    rounded: "{rounded.fitting}"
    padding: "0 26px"
    height: "52px"
  tag-call:
    backgroundColor: "{colors.grip}"
    textColor: "#ffffff"
    padding: "10px 26px 10px 48px"
    height: "68px"
  tag-book:
    backgroundColor: "{colors.paint}"
    textColor: "{colors.board-deep}"
    padding: "10px 26px 10px 48px"
    height: "68px"
  label-tape:
    backgroundColor: "{colors.tape}"
    textColor: "#f4f4f4"
    typography: "{typography.label}"
    rounded: "{rounded.tape}"
    padding: "4px 10px 3px"
  chip-job:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    padding: "4px 10px"
  card-job:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    padding: "clamp(22px, 4vw, 36px)"
  input-field:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "0"
    padding: "10px 2px"
---

# Design System: Vytas Car Repairs

## Overview

**Creative North Star: "The Shadow Board"**

The site is the wall of an orderly, owner-run workshop: a Hammerite machinery-green pegboard with a real hole grid, steel tools with red-dipped handles hanging on pegs, each over its own flat white painted silhouette, and names punched into black embossed label tape. Nothing on the board says "organised" or "trustworthy"; the order of the board says it. Services are tools, actions are tags hung on hooks, the booking form is a job card pinned to the board.

The board is the loud surface and it appears twice: the opening viewport and the booking section. Between them, reading sections sit on pale, cool galvanised grey, quiet enough to read on a phone. The display voice is stencil signwriting; headings are condensed workshop capitals; reading text is a plain, sturdy grotesque. Depth is physical and literal: things that hang cast soft shadows on the board, and nothing else floats.

The world explicitly rejects the category default for garages: dark asphalt photo heroes, hi-vis orange buttons, and a row of equal service cards. Reading grounds are cool grey, never cream.

**Key Characteristics:**
- Green perforated pegboard as the brand ground, used for the hero and the booking section only.
- One-drawing tools: each SVG silhouette serves as the steel tool, its painted outline, and its small icon in the job sheet, re-coloured by custom properties.
- Red is the grip colour and the call colour: every red thing is a handle you take hold of.
- Black label tape names things on the board and nowhere else.
- Placeholders look like placeholders (dashed box), so missing facts are never disguised.

## Colors

A cool, workshop-paint palette: machinery green and galvanised grey grounds, steel neutrals, one hot red for grips and calls.

### Primary
- **Hammerite Board Green** (board): the pegboard ground of the hero and booking sections, and the theme colour. Always carries the hole grid (25px pitch) and a faint top-light gradient; never a flat green panel.
- **Shadowed Board Green** (board-deep): the brand wordmark on the rail, and text on white-painted tags and the call bar's Book button.
- **Peg Hole** (hole): the punched holes of the board grid, nothing else.

### Secondary
- **Dipped-Handle Red** (grip): tool grips, the Call button, the call tag, the submit button, focus rings, the input caret and focus underline, today's hours. It means "take hold here".
- **Fresh-Dip Red** (grip-hover): hover state of every red control.
- **Deep Fault Red** (grip-error): the underline of an invalid form field.

### Tertiary
- **White Outline Paint** (paint): the painted silhouettes behind each tool, signwritten text on the board, the Book tag and the call bar's Book button.
- **Faded Paint** (paint-dim): secondary text on the board (the name's subline, ledes in the booking section).
- **Tool Steel** (steel) and **Shadowed Steel** (steel-dark): the metal parts of the tools and the job-card pin's rim.
- **Peg Steel** (peg-steel): pegs, hooks and the job-card pin head. Currently a literal value in the stylesheet rather than a custom property.

### Neutral
- **Galvanised Sheet** (galv): the page ground for reading sections.
- **Aluminium Rail** (galv-2): the sticky header rail the board hangs from.
- **Enamel Plate** (plate): the About section band, the job card, and service chips.
- **Workshop Ink** (ink) and **Worn Ink** (ink-2): headings and strong rules; body and secondary text on light grounds.
- **Scribed Rule** (rule): hairline dividers, chip borders, resting input underlines.
- **Label Tape Black** (tape): label tape, the footer, and the mobile call bar.

### Named Rules
**The Grip Rule.** Red appears only where a hand would take hold: grips, call and submit controls, focus, and the one live hours row. It is never a heading colour, background band or decoration.

**The Two Boards Rule.** The green board is a stage, not a theme. It opens the page and returns for booking; every reading section between sits on galvanised grey or enamel plate.

**The Cool Ground Rule.** Light grounds are cool greys (galv, galv-2, plate), never cream or warm off-white.

## Typography

**Display Font:** Big Shoulders Stencil Display 900, self-hosted as "Shoulders Stencil" (with Arial Narrow)
**Heading Font:** Big Shoulders Display 700/800, self-hosted as "Shoulders" (with Arial Narrow)
**Body Font:** Archivo variable (with Helvetica Neue, Arial)

**Character:** Stencil signwriting for the name, as if sprayed through a template onto the board; condensed workshop capitals for everything that labels or commands; a plain, broad grotesque for anything a driver reads.

### Hierarchy
- **Display** (900, clamp(4.6rem, 19vw, 15rem), 0.82, uppercase): the garage name signwritten on the board. One per page. The same face at 1.7rem with 0.04em tracking is the rail and footer wordmark.
- **Headline** (800, clamp(2.4rem, 6vw, 4rem), 0.95, uppercase): section headings.
- **Title** (800, 1.9rem rising to 2.4rem at 900px, 1, uppercase): service names in the job sheet; the job-card heading uses 1.6rem with 0.06em tracking.
- **Action** (700–800, 1.1–1.25rem, 0.08em, uppercase): every button and nav link. The call tag's number is larger (800, 1.7rem, 0.04em).
- **Label** (700, 0.95rem, 0.12em, uppercase): label tape only.
- **Lede** (400, 1.2rem, 1.6): the sentence under a section heading, max 58ch.
- **Body** (400, 1.0625rem, 1.6): reading text, held to 60–62ch.

### Named Rules
**The Signwriter Rule.** The stencil face is for the garage's name only. Headings, labels and buttons use Big Shoulders; reading text uses Archivo.

**The Capitals Are Labels Rule.** Condensed uppercase is for things you name or press. Sentences, ledes and descriptions are sentence case in Archivo.

## Layout

A single centred column (max 1200px, gutter clamp(16px, 4vw, 44px)) runs down the page; full-bleed bands (board, About plate, booking board, footer) carry it. Sections breathe at clamp(56px, 9vw, 104px) vertically; heading blocks sit clamp(32px, 5vw, 56px) above their content. Gaps step through roughly 8, 12–16, 22–28, 32–36 and 56px.

The one layout breakpoint is 900px. Below it the six tools form a 3×2 rack above the name, the header shows only the wordmark and Call, and a fixed call bar (Call + Book) slides up once the opening board has scrolled away. At 900px and above the tools hang in a single row of six, the header gains its nav, the sign becomes a two-column grid (offer left, tags right), and the job sheet becomes three columns (icon, name, description and chips). Minor steps: form fields pair at 560px, the footer becomes three columns at 760px.

Services are a ruled job sheet (2px ink top rule, hairline row rules), not a grid of cards. Tabular facts (hours, garage details) use the same ruled two-column list.

## Elevation & Depth

Depth is literal: objects that hang on the board cast soft, downward shadows onto it; everything on the galvanised reading sections is flat, separated by rules and tone. There is no ambient card elevation anywhere.

### Shadow Vocabulary
- **Hanging tool** (`filter: drop-shadow(2px 4px 3px rgba(0,0,0,0.38))`): a tool at rest on its peg. Lifted: `drop-shadow(6px 14px 8px rgba(0,0,0,0.35))`.
- **Hanging tag** (`box-shadow: 0 6px 12px rgba(0,0,0,0.3)`): the call and book tags. Swung: `0 10px 18px rgba(0,0,0,0.32)`.
- **Pinned card** (`box-shadow: 0 14px 30px rgba(0,0,0,0.35)`): the job card pinned to the booking board.
- **Embossed tape** (`box-shadow: 0 1px 2px rgba(0,0,0,0.35)` with a top-dark, bottom-light text-shadow): label tape's raised letters.

### Named Rules
**The Only Things That Hang Rule.** A shadow means the object hangs on or is pinned to the board. Nothing on a galvanised ground gets a shadow.

## Shapes

Small, machined corners: label tape 2px, enamel plates and chips 3px, buttons, photos and fittings 4px. The one shaped silhouette is the hanging tag: a 6px eye end (with a punched hole and a wire hook above it) and a 14px rounded tip. Inputs have no corners or box at all, only a 2px underline, like ruled lines on a job card. The job card sits at a -0.6deg tilt under a round pin. Tool silhouettes are flat geometric SVG with masked bolt holes and a 6px dilated white outline.

## Components

### Buttons
Blunt, red and in capitals: the grip you take hold of to ring.
- **Shape:** machined corner (4px).
- **Call (rail):** grip red, white Big Shoulders 700 capitals, phone glyph, 44px min height, 16px side padding.
- **Submit:** same treatment at 52px height, 26px padding, 800 weight.
- **Hover / Focus:** fresh-dip red on hover; focus is the global 3px grip-red outline at 3px offset (paint-coloured outline on the board).

### Hanging Tags (signature)
The page's two actions are tags hung on wire hooks above the offer: a red call tag ("Ring the garage" over the number) and a white-painted "Book a repair" tag in board-deep text. Each has a punched eye and a hook drawn above it, swings -2.5deg from its eye on hover with a deepening shadow (0.4s exponential ease-out).

### Tools on the Board (signature)
Six tools hang across the opening board as the service navigation: steel with red-dipped handles over their white painted outlines, each named by label tape beneath and linking to its row in the job sheet. On hover or focus the tool lifts off its peg (-14% up, -7deg) with exponential ease-out (0.5s, cubic-bezier(.16,1,.3,1)), revealing the outline beneath. Reduced motion removes the movement.

### Label Tape
Black embossed strip, white capitals with 0.12em tracking, 2px corners. Names tools on the board.

### Job Sheet and Chips
Each service is a ruled row: a mini board panel (green, 16px hole grid) holding the tool's outline in white paint, the name as a title, a description, and a wrap of chips. Chips are enamel plate with a hairline rule border and 3px corners; they are labels, not controls. A targeted row gets a faint red wash from the left.

### Cards / Containers
- **Job card:** the booking form only. Enamel plate, 3px corners, pinned-card shadow, -0.6deg tilt, a steel pin at top centre, heading over a 2px ink rule.
- **Photo:** 4:3, 4px corners, caption in worn ink below.

### Inputs / Fields
- **Style:** white field, no box, 2px scribed-rule underline, Archivo 1rem, red caret. Labels sit above in Archivo 600.
- **Focus:** underline turns grip red.
- **Error:** underline turns deep fault red after interaction.
- **Car reg:** set in Big Shoulders 800, 1.3rem, 0.12em, uppercase, like a number plate.

### Navigation
- **Header rail:** sticky aluminium rail (galv-2) with a darker bottom edge; stencil wordmark left, Action-style nav links in worn ink (ink on hover) from 900px, red Call right.
- **Mobile call bar:** fixed label-tape-black bar with full-width Call (grip) and Book (paint) buttons, 50px tall, hidden from 900px.

### Placeholder Mark
Any fact the garage has not supplied sits in a dashed 1.5px box in the current text colour, 3px corners, 600 weight. It is the honest stand-in for real content and is replaced, never restyled.

## Do's and Don'ts

### Do:
- **Do** hang every service as a tool on the board, drawn once as an SVG symbol and recoloured through the steel, grip and shade fills.
- **Do** keep the board's hole grid real (25px pitch, punched holes) wherever the green board appears, including the mini panels in the job sheet (16px pitch).
- **Do** reserve grip red for things you take hold of: calls, submit, grips, focus.
- **Do** set reading sections on galvanised grey or enamel plate with hairline rules instead of shadows.
- **Do** mark every unsupplied fact with the dashed placeholder box.
- **Do** keep the lift and swing motions on exponential ease-out (cubic-bezier(.16,1,.3,1)) and drop them under reduced motion.

### Don't:
- **Don't** use a dark asphalt photo hero, hi-vis orange buttons, or a row of equal service cards.
- **Don't** use cream or warm off-white grounds.
- **Don't** set anything but the garage name in the stencil face.
- **Don't** put label tape on galvanised sections; it names things on the board.
- **Don't** give shadows to anything that is not hanging or pinned.
