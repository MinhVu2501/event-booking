# TechConf Website (React + Vite + Tailwind)

Modern, mobile-friendly conference website with pages for Home, Speakers, Schedule, Tickets, About, Contact, and Newsletter. Routing via React Router, styling via Tailwind, and a simulated checkout flow.

## Getting Started

```bash
npm install
npm run dev
```

The dev server prints a local URL. Open it in your browser.

## Editing Content

- Update speakers in `src/data/speakers.js`
- Update sessions in `src/data/sessions.js`
- Update hero details in `src/pages/Home.jsx`
- Customize styles using Tailwind classes in components

## Build

```bash
npm run build
npm run preview
```

## Notes

- Simulated payments in `src/pages/Tickets.jsx` via a mock promise. Replace with Stripe/PayPal links or SDK for real payments.
- Forms (newsletter, contact) are client-side only. Hook up to your backend or a service (e.g., Formspree) as needed.
