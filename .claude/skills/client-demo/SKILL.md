---
name: client-demo
description: "Build, audit, test, polish, and prepare web project for client demonstration while clearly distinguishing real, mocked, incomplete, and production-ready functionality."
argument-hint: "[optional: focus area or specific feature]"
license: MIT
metadata:
  author: claude
  version: "1.0.0"
---

# Client Demo Skill

Reusable standard workflow for taking a web project from its current state to a polished, convincing, client-ready DEMO.

## Invocation

```
/client-demo
```

Optionally pass a focus area:
```
/client-demo hero section and contact form
```

## Workflow

Execute these phases IN ORDER. Do not skip phases.

---

### PHASE 1 — INSPECT

FIRST: inspect current project. Do NOT start coding.

Determine:
- Repository structure (files, folders, config)
- Framework and programming language
- Frontend architecture (SPA, MPA, static, SSR)
- Backend (if any)
- Database (if any)
- APIs (if any)
- Authentication (if any)
- Existing pages, components, functionality
- Configuration files
- Environment variables
- Deployment configuration
- Package manager and dependencies

Output: Simple project summary before proceeding.

---

### PHASE 2 — UNDERSTAND THE PRODUCT

From existing code, determine:
- What product is
- What problem it solves
- Target users / audience
- User roles (admin, guest, customer, etc.)
- Main workflows
- Main features
- Main pages / screens
- Business logic
- Existing requirements
- Missing requirements

Classify each as:
- **FACT** — directly confirmed by code
- **INFERRED** — reasonably inferred from code/UI
- **UNKNOWN** — needs confirmation from user

If major assumptions are unclear, ask me before building.

---

### PHASE 3 — DEFINE DEMO SCOPE

Goal is NOT to build entire production product. Goal is to create strongest realistic DEMO.

Determine:
- **MUST HAVE** — features required to demonstrate core value
- **SHOULD HAVE** — features that significantly improve demo
- **NICE TO HAVE** — optional polish
- **OUT OF DEMO SCOPE** — things that should not consume time

Primary user journey MUST work from beginning to end.
Avoid dead ends.
Present scope to me for confirmation if complex.

---

### PHASE 4 — BUILD

Implement agreed demo scope using existing project architecture.

Rules:
- Prefer extending existing functionality over rebuilding
- Build or improve: pages, navigation, components, forms, interactions, user flows, states, demo data, loading/empty/error states, responsive layouts, mobile experience
- Demo should feel like real product
- Avoid unnecessary production complexity when it does not improve demo
- Keep mock data realistic — never use real personal information or credentials
- Structure mocked functionality so it can later be replaced with real APIs

---

### PHASE 5 — UI/UX POLISH

Review product like professional product designer:
- Visual hierarchy
- Typography (font size, weight, line height)
- Spacing and padding consistency
- Color usage and contrast
- Buttons (states: default, hover, active, disabled)
- Forms (labels, placeholders, validation messages, focus states)
- Cards, tables, lists
- Navigation (active states, mobile hamburger)
- Consistency across all pages
- Loading states
- Empty states
- Error states
- Responsive behavior (mobile, tablet, desktop)
- Accessibility (contrast, alt text, keyboard nav)
- Overall visual quality and professionalism

Fix reasonable visual issues.

---

### PHASE 6 — FUNCTIONAL QA

Test ALL main user journeys end-to-end:
- Navigation between pages
- Button clicks
- Form submissions and validation
- User interactions (hover, click, scroll)
- Data flow
- API calls (if any)
- Authentication flows (if any)
- Loading and error states
- Mobile responsive behavior
- Dark/light mode (if applicable)

If bug is clearly within demo scope, fix it.
After fixing, retest affected flow.

---

### PHASE 7 — TECHNICAL REVIEW

Check for:
- Build errors
- Console errors (check browser preview console)
- Broken imports or references
- Broken routes or links
- Broken API calls
- Missing environment variables
- Incorrect configuration
- Obvious performance problems
- Obvious error-handling gaps

Do NOT perform unnecessary large refactors.
Goal is stable demo, not perfect codebase.

---

### PHASE 8 — SECURITY REVIEW

Check for:
- Exposed API keys or tokens in frontend code
- Hardcoded passwords or credentials
- Client-side secrets
- Sensitive data visible in UI or console
- Dangerous configuration
- Admin credentials in source code (flag it)

If secret found: report location and severity. NEVER print actual secret value.

---

### PHASE 9 — CLIENT EXPERIENCE REVIEW

Pretend you are seeing product for first time as the client:
- Is it immediately clear what product does?
- Is the value proposition obvious?
- Is main workflow easy to understand?
- Does it look professional?
- Are there unfinished-looking areas?
- Are there confusing interactions?
- Are there broken buttons or dead ends?
- Does demo tell a convincing story?

Fix reasonable problems that negatively affect client experience.

---

### PHASE 10 — DEMO VS PRODUCTION ANALYSIS

Create clear distinction:

| Feature | Status | Demo Ready? | Production Ready? | What's Missing? |

Classify every feature as:
- **DEMO READY** — safe to show client
- **DEMO LIMITATIONS** — looks/works in demo but is mocked/simplified
- **PRODUCTION READY** — implemented for real users
- **NOT PRODUCTION RE.** — needs significant work

Remember: DEMO READY ≠ PRODUCTION READY

---

### PHASE 11 — FINAL AUDIT

Produce final audit:

```
CLIENT DEMO FINAL REPORT
========================

## What Was Built / Improved
- [list]

## Main Features
- [list]

## Main Demo Flow
- [step by step]

## What Is Real
- [list]

## What Is Mocked
- [list with explanation]

## What Is Incomplete
- [list]

## What Is Missing
- [list]

## Known Issues
- [list with severity]

## Security Concerns
- [list or "None found"]

## DEMO READINESS: X/100
[explanation]

## PRODUCTION READINESS: X/100
[explanation]
```

---

### PHASE 12 — CLIENT HANDOVER

Prepare client-facing information in simple business language:
- Project overview
- Main features delivered
- Main user journey
- What was delivered vs what was not
- Demo limitations (honest, but framed positively)
- Known limitations
- Recommended next steps
- Future improvement suggestions

---

### PHASE 13 — DEPLOYMENT CHECKLIST

Remind me of deployment steps if relevant:
- Is project pushed to Git?
- Is it deployed somewhere?
- Does it have a shareable URL?
- What should I send to client?
- What credentials/access should I prepare?
- What screenshots should I capture?

---

## SAFETY RULES

### Changes ARE allowed when:
- Building or improving demo functionality
- Fixing bugs within demo scope
- Polishing UI/UX
- Adding mock data for demo purposes

### Changes are NOT allowed when:
- Deleting working functionality without strong reason
- Rewriting entire project unnecessarily
- Exposing secrets
- Committing or pushing (unless explicitly requested)
- Deploying (unless explicitly requested)
- Inventing business requirements
- Fundamentally altering product direction

### ALWAYS ask me first when:
- Major business decision is unclear
- Change could fundamentally alter the product
- You are unsure about demo scope boundaries
- Something looks like it should be removed but might be important

---

## OUTPUT FORMAT

Always finish with a summary I can review:

```
CLIENT DEMO FINAL REPORT
========================
Demo Readiness: X/100
Production Readiness: X/100

WHAT WORKS: [list]
WHAT IS MOCKED: [list]
WHAT IS MISSING: [list]
WHAT TO TELL CLIENT: [key points]
WHAT NOT TO PROMISE: [warnings]
TOP 5 THINGS TO DO BEFORE PRESENTING: [checklist]
```
