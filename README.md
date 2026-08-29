# Glowtique Beauty Hub

GLOWTIQUE — Frontend Build Prompt (for Lovable)

Your Role

Act as a professional full-stack developer with 15+ years of experience, specializing in premium consumer marketplace UI/UX and mobile-first React applications. You are building the frontend for Glowtique — a marketplace connecting customers with Makeup Artists (MUAs) and Beauticians for home/event-based beauty services (weddings, functions, parties, engagements, receptions).

The target audience is overwhelmingly women aged 18–45 — brides, bridesmaids, working professionals, and event-goers. The UI must feel like a premium beauty/lifestyle app (think Sephora, Nykaa, UrbanClap/Urban Company beauty section, or a boutique wedding app) — NOT a generic dashboard-style SaaS product. This is a conversion-focused, visually rich, emotionally engaging product. First impressions must feel "made for me."

Non‑Negotiable Tech Stack

React + Vite (NOT Next.js)

Tailwind CSS ONLY (NOT Bootstrap, NOT Material UI)

React Router v6 for routing

Axios (or fetch) for API calls, with a centralized api/ service layer

Context API or Zustand for global state (auth, cart/booking flow)

react-hook-form + zod/yup for form validation

Mobile-first responsive design is the #1 priority — design for 375px width first, then scale up to tablet (768px) and desktop (1280px+)

Framer Motion for micro-interactions and page/element transitions (subtle, tasteful — not gimmicky)

Lucide-react for icons

date-fns for date/calendar handling

Design Direction ("make it feel different")

Avoid generic SaaS blue-and-white templates entirely. Direction:

Color palette

Primary: Deep Plum / Wine (#6B2140 or similar) — headers, primary CTAs

Secondary/Accent: Rose Gold / Blush (#E8B4B8, #F4C2C2) — highlights, badges, hover states

Warm neutral background: Ivory/Cream (#FFF8F3) instead of stark white

Gold accent for premium touches (verified badges, ratings, "featured artist" tags): (#C9A227)

Deep charcoal for body text (#2B2B2B), never pure black

Typography

Headings: an elegant serif or display font (e.g., "Playfair Display", "Cormorant Garamond") for hero sections, artist names, section titles — gives a boutique/editorial feel

Body/UI text: a clean modern sans-serif (e.g., "Inter", "Poppins") for readability and app-like usability

Generous letter-spacing on small caps labels (e.g., "TOP RATED", "VERIFIED ARTIST")

Visual language

Soft rounded corners (16–24px) on cards, buttons, inputs — nothing sharp/corporate

Soft, warm-toned shadows (not harsh gray) — cards should feel like they're "glowing" slightly

Circular/organic image crops for artist profile photos mixed with rounded-rectangle portfolio grids

Subtle gradient overlays (plum-to-transparent) on hero images for text legibility

Star ratings styled in gold, not default yellow

Use high-quality placeholder imagery (beauty/makeup/bridal themed) via placeholder services — instruct Lovable to use elegant beauty-industry stock-style placeholder images, not generic gray boxes

Verified-artist badge: small gold checkmark badge, prominent but not gaudy

Empty states, loaders, and skeletons should match the aesthetic (soft pink shimmer skeletons, not gray)

Motion

Smooth fade/slide-in on scroll for portfolio galleries and artist cards

Gentle scale-up on card hover/tap (1.02–1.03x)

Smooth bottom-sheet style modals on mobile (not jarring center popups)

Mobile-First Requirements (Critical)

Bottom tab navigation on mobile for logged-in customers and artists (Home/Search, Bookings, Messages/Notifications, Profile)

Sticky "Book Now" CTA bar on artist profile pages when scrolling on mobile

Thumb-friendly tap targets (min 44px)

Swipeable portfolio image carousels on mobile

Collapsible filter drawer (bottom sheet) for search/browse on mobile instead of a sidebar

All forms (booking, registration) must be single-column, step-by-step (wizard style) on mobile

Test breakpoints: 375px, 414px, 768px, 1024px, 1440px

Information Architecture / Pages

Public / Marketing

Landing Page — Hero (search bar: "Find your perfect makeup artist" with location + service type + date), how it works (3-step), featured/top-rated artists carousel, category tiles (Bridal, Party, Engagement, HD Makeup, Hair Styling, Mehendi, etc.), testimonials, CTA to become an artist, footer

Browse/Search Artists — Filters (location/city, service category, price range, rating, availability date, verified only), sort (rating, price, popularity, nearest), grid of artist cards (photo, name, rating, starting price, city, verified badge, top service tags), map-view toggle (optional)

Artist Public Profile — Cover/banner, profile photo, name, bio, rating + review count, verified badge, location/travel radius, portfolio gallery (grid + lightbox), services & packages list with pricing, availability calendar preview, reviews section, sticky "Book Now" CTA

Service/Package Detail Modal or Section — Description, duration, price, what's included, add-ons

Booking Flow (multi-step):

Step 1: Select service/package

Step 2: Select date & time (from artist's live availability calendar)

Step 3: Enter service location (home/venue address, pin on map)

Step 4: Review summary + pay ₹200 prebooking/token amount (via Razorpay/Stripe checkout component)

Step 5: Confirmation screen with booking ID and next steps

Auth — Register/Login (customer & artist, separate flows), OTP verification (mobile), forgot password, role selection screen after signup

Customer Dashboard

Overview (upcoming bookings, quick stats)

My Bookings (upcoming, past, cancelled — with status badges)

Booking Detail page (artist info, service, date, location, payment status, chat/contact artist, cancel/reschedule, leave review after completion)

Payment History

My Reviews

Profile & Settings (edit profile, addresses, notification preferences)

Artist Dashboard

Overview (today's bookings, earnings summary, pending requests, profile completion %)

Profile Management (bio, photos, city, travel radius, verification status/upload documents)

Portfolio Manager (upload/reorder/delete images via Cloudinary, categorize by service type)

Services & Packages Manager (CRUD: name, description, price, duration, category)

Availability Calendar (set working days/hours, block dates, manage slots)

Bookings Manager (pending/confirmed/completed/cancelled, accept/reject requests, mark complete)

Customers list (past customers, repeat customer tags)

Reviews (view + respond to reviews)

Earnings & Wallet (total earnings, pending payouts, ₹100-per-booking credited amount tracking, withdrawal requests, transaction history)

Notifications

Admin Panel

Dashboard (platform stats: total users, artists, bookings, revenue, commission earned)

Artist Verification Queue (review submitted documents, approve/reject with notes)

User Management (customers + artists, suspend/activate accounts)

Booking Management (all bookings, filter by status, dispute handling)

Payments & Commissions (view all transactions, prebooking fees, commission ledger, payout approvals to artists)

Reviews Moderation (flag/remove inappropriate reviews)

Service Category Management (manage master list of service categories)

Platform Settings (commission %, prebooking fee amount, banners/featured artists)

API Integration Contract (must match backend exactly)

Build the frontend against these endpoint groups (backend prompt implements these exactly — same names/shapes):

/api/auth/register              POST
/api/auth/login                 POST
/api/auth/verify-otp            POST
/api/auth/refresh-token         POST
/api/auth/logout                POST

/api/users/me                   GET, PUT
/api/users/me/addresses         GET, POST, PUT, DELETE

/api/artists                    GET (search/filter/list)
/api/artists/:id                GET (public profile)
/api/artists/me                 GET, PUT (own profile, artist-only)
/api/artists/me/verification    POST (submit docs)

/api/portfolio                  GET, POST (artist-only, Cloudinary upload)
/api/portfolio/:id               DELETE, PUT

/api/services                    GET, POST (artist-only), PUT, DELETE
/api/services/categories          GET (master list)

/api/availability                GET, POST, PUT (artist calendar)
/api/availability/:artistId/slots GET (public — for booking flow)

/api/bookings                    POST (create booking + trigger payment)
/api/bookings/me                 GET (role-aware: customer's or artist's bookings)
/api/bookings/:id                GET, PUT (status update: confirm/reject/complete/cancel)

/api/payments/create-order       POST (initiate ₹200 prebooking payment)
/api/payments/verify              POST (verify payment gateway callback)
/api/payments/history              GET

/api/wallet/me                    GET (artist earnings/wallet balance)
/api/wallet/withdraw               POST

/api/reviews                       POST, GET (by artist or by booking)

/api/admin/artists/verification    GET, PUT
/api/admin/users                    GET, PUT
/api/admin/bookings                  GET
/api/admin/payments                  GET
/api/admin/commissions                GET, PUT (settings)
/api/admin/reviews                    GET, DELETE


Use a typed API client (src/api/*.js) with one file per resource, and centralize auth token handling via Axios interceptors (attach JWT, handle 401 refresh/logout).

Folder Structure (expected)

src/
  api/            -> axios instances + per-resource API functions
  components/      -> shared UI (Button, Card, Badge, Modal, BottomSheet, StarRating, etc.)
  features/
    auth/
    customer/
    artist/
    admin/
    booking/
    search/
  layouts/          -> CustomerLayout, ArtistDashboardLayout, AdminLayout, PublicLayout
  hooks/
  context/ or store/
  pages/
  utils/
  assets/


Deliverable Expectations

Build this as a production-grade, fully responsive, visually distinctive React + Vite + Tailwind application with realistic mock data initially (structured to match the API contract above 1:1), so it can be wired to the real backend with minimal changes. Prioritize the Landing Page, Search/Browse, Artist Profile, and Booking Flow first — these are the primary conversion pages — then build out the three dashboards.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ede6a7bd-7cf6-465f-b038-b474d1b82a67).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
