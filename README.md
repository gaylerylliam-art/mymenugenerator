# MenuCraft Pro Dashboard

A self-contained MenuCraft Pro prototype for restaurant menu generation, including:

- Dashboard, template library, and menu editor
- AI menu assistant via a local Anthropic proxy
- Export center, QR generator, public digital menu, food photo flow, currency settings, admin, and pricing screens

## Run Locally

```powershell
node server.mjs
```

Open:

```text
http://127.0.0.1:4173
```

## Environment

Create a local `.env` file with:

```text
ANTHROPIC_API_KEY=your_key_here
```

`.env` is intentionally ignored and should not be committed.
