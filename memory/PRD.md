# Servis Pro - Product Requirements Document

## Project Overview
**Project Name:** Servis Pro  
**Type:** Boiler Repair Service Website  
**Primary Language:** Russian  
**Secondary Languages:** Uzbek (Latin), Uzbek (Cyrillic)  
**Target Market:** Tashkent, Uzbekistan

## Original Problem Statement
Build a production-ready, high-conversion boiler repair website with:
1. ONE main service page optimized for Google TOP-3 ranking (SEO-first)
2. Aggressive landing-style pricing on ALL services to maximize phone calls and Telegram leads
3. Multi-language support (Russian primary, Uzbek secondary)
4. Dark/Light theme toggle
5. Professional corporate design with dark blue/gray palette
6. 24/7 availability messaging

## User Personas
1. **Homeowner with Broken Boiler (Primary)**
   - Urgent need for repair
   - Seeking trustworthy, fast service
   - Price-conscious but values quality
   - Mobile-first user

2. **Property Manager (Secondary)**
   - Managing multiple properties
   - Needs reliable long-term service partner
   - Interested in maintenance contracts
   - Desktop user

3. **Industrial Facility Manager (Tertiary)**
   - Large-scale boiler systems
   - Requires certified specialists
   - Budget for quality work
   - B2B decision maker

## Core Technical Stack
- **Frontend:** React 19, React Router, Tailwind CSS, Shadcn/UI components
- **Backend:** FastAPI (Python) - *Planned for future phase*
- **Database:** MongoDB - *Planned for future phase*
- **Styling:** Corporate dark theme (dark blue #1e3a8a, blue #3b82f6, light blue #60a5fa)
- **State Management:** React Context (Theme, Language)
- **Form Integration:** Mock Telegram integration (ready for bot token)

## What's Been Implemented (Phase 1 - MVP)

### ✅ Completed Features (Date: 2025-12-10)

#### 1. Core Infrastructure
- [x] React app setup with routing
- [x] Theme system (Dark/Light toggle)
- [x] Multi-language support (Russian, Uzbek Latin)
- [x] Responsive design (mobile, tablet, desktop)
- [x] Corporate dark color palette

#### 2. Navigation & Layout
- [x] Fixed navbar with logo, menu, phone, social links
- [x] Services dropdown with all 14 services
- [x] Language selector (RU/UZ)
- [x] Theme toggle button
- [x] Professional footer with Abror credit link
- [x] Auto-scrolling brand carousel (20 brands)

#### 3. Homepage Components
- [x] Hero section with CTA buttons
- [x] Features section (3 key benefits)
- [x] Services grid (6 services preview)
- [x] CTA section with contact form
- [x] Portfolio section (4 work examples)
- [x] Testimonials section (3 reviews)
- [x] Blog preview section (3 articles)
- [x] FAQ section (5 questions)

#### 4. Main SEO Service Page: "Ремонт газового котла"
- [x] 2200+ words of SEO-optimized content
- [x] Aggressive landing-style pricing section (4 pricing tiers)
- [x] Trust badges and conversion triggers
- [x] Detailed service process (6 steps)
- [x] Advantages grid (6 key benefits)
- [x] Competitor comparison table
- [x] 12 detailed FAQ questions
- [x] Sidebar with sticky contact form
- [x] Related services section
- [x] SEO-friendly URL structure

#### 5. Pricing Strategy (Landing-Style)
- [x] Transparent pricing with "от" (from) pricing
- [x] Conversion triggers:
  - "Цена ниже среднерыночной"
  - "Без скрытых платежей"
  - "Оплата после диагностики"
  - "Гарантия на работы"
- [x] Featured pricing card (most popular)
- [x] Trust badges with icons

#### 6. Mock Data Structure
- [x] 14 services with pricing
- [x] 20 boiler brands
- [x] 4 portfolio items
- [x] 3 blog posts
- [x] 3 testimonials
- [x] 5 general FAQs

#### 7. Contact Form
- [x] Mock Telegram integration
- [x] Form validation
- [x] Success/error toast notifications
- [x] Easy replacement path for real bot token
- [x] Target channel: https://t.me/+fAsBPF2rU18zZDky

## Architecture & Data Flow

### Frontend Structure
```
/app/frontend/src/
├── components/
│   ├── Navbar.js (navigation with dropdown)
│   ├── Footer.js (footer with Abror credit)
│   ├── BrandCarousel.js (auto-scrolling brands)
│   └── ContactForm.js (Telegram mock integration)
├── pages/
│   ├── HomePage.js (main landing page)
│   └── ServicePage.js (service detail + SEO page)
├── context/
│   ├── ThemeContext.js (dark/light theme)
│   └── LanguageContext.js (multi-language)
├── data/
│   └── mockData.js (all mock data)
└── App.js (main router)
```

### Mock Data vs Backend Integration Path
**Current State:** All data is mocked in `/app/frontend/src/data/mockData.js`

**Future Backend Integration:**
1. Replace mock data with API calls to FastAPI backend
2. Implement Telegram bot for form submissions
3. Add MongoDB for storing:
   - Service requests
   - Blog posts
   - Portfolio items
   - Customer testimonials
4. Admin panel for content management

## SEO Implementation

### Main SEO Target: "Ремонт газового котла"
**URL:** `/services/remont-gazovogo-kotla`

**SEO Elements:**
- H1: "Ремонт газового котла в Ташкенте: Профессиональный Ремонт с Гарантией"
- 2200+ words of high-quality content
- LSI keywords: Ташкент, Узбекистан, газовый котёл, ремонт, мастер
- Regional targeting: Tashkent-specific content
- Commercial intent keywords
- FAQ schema-ready structure
- Internal linking to related services

**Content Structure:**
1. Hero with strong value proposition
2. Aggressive pricing section (conversion-optimized)
3. Main content sections:
   - Why professional repair is needed
   - Common boiler problems (detailed)
   - Signs your boiler needs repair
   - Professional repair process (6 steps)
   - Why choose Servis Pro (6 advantages)
   - Competitor comparison table
   - Safety information
   - Preventive maintenance
   - 12 detailed FAQ answers

## Pricing Strategy

### Psychological Pricing Elements
- Entry-level pricing to attract clicks
- "от" (from) pricing to show starting price
- Featured "Популярно" badge on main option
- Trust indicators below pricing
- Competitive comparison messaging

### Price Points (in UZS)
- Diagnostics: от 99 000 сум (free with repair)
- Basic Repair: от 199 000 сум ⭐ Featured
- Emergency Call: от 149 000 сум
- Major Overhaul: от 499 000 сум

### Conversion Triggers
✅ Цена ниже среднерыночной  
✅ Без скрытых платежей  
✅ Оплата после диагностики  
✅ Скидка при обращении сегодня  
✅ Гарантия на выполненные работы

## Telegram Integration (Mock)

### Current Implementation
- Mock form submission with console logging
- Ready for bot token replacement
- Target channel: https://t.me/+fAsBPF2rU18zZDky

### Integration Path
```javascript
// TODO: Replace with actual implementation
const telegramToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;

const sendToTelegram = async (formData) => {
  const message = `Новая заявка:\nИмя: ${formData.name}\nТелефон: ${formData.phone}`;
  
  await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  });
};
```

## Prioritized Backlog

### P0 (Must Have - Next Phase)
- [ ] Implement real Telegram bot integration
- [ ] Add remaining service pages (13 services)
- [ ] Create About page with company info
- [ ] Build Portfolio page with all work examples
- [ ] Develop Blog system with article pages
- [ ] Add Contact page with form and map

### P1 (Should Have - Phase 3)
- [ ] Backend API development (FastAPI)
- [ ] MongoDB integration for data persistence
- [ ] Admin panel for content management
- [ ] Analytics integration (Google Analytics)
- [ ] SEO meta tags for all pages
- [ ] Structured data (JSON-LD) for rich snippets
- [ ] Image optimization and lazy loading
- [ ] Performance optimization

### P2 (Nice to Have - Future)
- [ ] Online booking system with calendar
- [ ] Real-time chat support
- [ ] Payment integration
- [ ] Customer dashboard
- [ ] Service history tracking
- [ ] Automated email/SMS notifications
- [ ] Multilingual blog content
- [ ] Service area map with coverage zones
- [ ] Video content integration
- [ ] Customer reviews integration

## Design System

### Color Palette
```css
Primary: #1e3a8a (dark blue)
Secondary: #3b82f6 (blue)
Accent: #60a5fa (light blue)
Dark BG: #0a0f1e
Dark Card: #111827
Text Primary: #f9fafb
Text Secondary: #d1d5db
Border: #374151
Success: #10b981
Warning: #f59e0b
Error: #ef4444
```

### Typography
- Font: System fonts (San Francisco, Segoe UI, Roboto)
- Hero: 48px bold
- H2: 36px bold
- H3: 24px bold
- Body: 17px regular
- Button: 16px semibold

### Components
- Buttons: 8px border-radius, 52px min-height
- Cards: 12px border-radius, subtle border
- Inputs: 8px border-radius, focus states
- Shadows: Subtle with blue tint for hover

## Next Action Items

### Immediate (This Session)
1. ✅ Complete MVP frontend with homepage
2. ✅ Build main SEO service page
3. ✅ Implement theme and language switching
4. ✅ Add mock Telegram integration
5. ✅ Take screenshots and verify design

### Next Session
1. Obtain Telegram Bot Token from user
2. Implement real Telegram integration
3. Create remaining 13 service pages
4. Build About, Blog, Portfolio, Contact pages
5. Add meta tags and SEO optimization
6. Test form submissions end-to-end

### Future Phases
1. **Backend Development:**
   - Setup FastAPI endpoints
   - MongoDB schema design
   - API documentation
   - Authentication (if needed)

2. **Testing & QA:**
   - Cross-browser testing
   - Mobile responsiveness testing
   - Form validation testing
   - SEO audit

3. **Launch & Marketing:**
   - Domain setup
   - Google Search Console
   - Analytics tracking
   - Content marketing plan

## Success Metrics (Future)

### Conversion Goals
- Phone calls: Primary conversion
- Telegram messages: Secondary conversion
- Form submissions: Tertiary conversion

### SEO Goals
- Google TOP-3 for "ремонт газового котла ташкент"
- Organic traffic: 1000+ visitors/month (3 months)
- Average position < 5 for target keywords

### User Experience
- Page load time < 3 seconds
- Mobile usability score > 90
- Bounce rate < 50%
- Time on site > 2 minutes

## Technical Notes

### Environment Variables Needed
```
# Frontend (.env)
REACT_APP_BACKEND_URL=<backend_url>
REACT_APP_TELEGRAM_BOT_TOKEN=<telegram_bot_token>
REACT_APP_TELEGRAM_CHAT_ID=<telegram_chat_id>

# Backend (.env) - Future
MONGO_URL=<mongodb_connection_string>
DB_NAME=servis_pro
```

### Deployment Checklist (Future)
- [ ] Environment variables configured
- [ ] Frontend build optimization
- [ ] Backend API secured
- [ ] Database backups setup
- [ ] SSL certificate installed
- [ ] Analytics tracking active
- [ ] Error monitoring (Sentry)

---

**Last Updated:** 2025-12-10 (Phase 4 - Brand Navigation & Structure Update)  
**Status:** Phase 4 Complete - Brand Modal & 35 Brand Pages  
**Next Milestone:** Backend Integration & Telegram Bot Setup

## Phase 4 - Brand Navigation & Structure (2025-12-10)

### ✅ Brand Carousel REMOVED
- [x] Removed BrandCarousel component completely
- [x] No auto-scroll or horizontal swipe behavior
- [x] Clean mobile UX without carousel

### ✅ Brand Modal Implemented
- [x] Full-screen modal/drawer on mobile (slides up from bottom)
- [x] Centered modal on desktop
- [x] Responsive grid: 2 columns (mobile), 3 columns (tablet), 4 columns (desktop)
- [x] Large tap areas for brand cards
- [x] Close button clearly visible
- [x] Multilingual title/subtitle

### ✅ Navbar Updated
- [x] "Котлы" / "Brendlar" / "Брендлар" menu item added
- [x] Flame icon next to brand label
- [x] Works in both desktop navbar and mobile menu
- [x] Opens brand modal on click

### ✅ 35 Brand Pages Created
All brands have dedicated pages at /brands/{slug}:
- Vaillant, Viessmann, Baxi, Navien, Ferroli
- Immergas, De Dietrich, Lamborghini, Samsung, Bugatti
- Neta, Zevlar, Royal Thermo, Expert, Monix
- Minorka, Fondital, Sandal, Chaffoteaux, Ariston
- Climate, Victory, Airfel, Akfa, Atlantic
- Baymak, Rulls, Kiturami, Unit, Everel
- Thermona, E.C.A, Vitech, Bosch, Orbek

### ✅ Brand Page Content Structure (Each Brand)
- [x] H1: "Ремонт котлов {Brand} в Ташкенте"
- [x] Brand overview (history, reliability, popularity)
- [x] Supported boiler types and models
- [x] Common problems section
- [x] Services provided
- [x] Pricing block (landing-style)
- [x] Image gallery
- [x] FAQ (8 questions)
- [x] Strong CTA section

### ✅ Full Multilingual Support
- [x] Russian (RU) - default
- [x] Uzbek Latin (UZ)
- [x] Uzbek Cyrillic (ЎЗ)
- [x] All brand page content translates correctly
- [x] No layout breaks with Cyrillic text
- [x] Language persists across navigation

## Phase 3 - Mobile-First Refactor (2025-12-10)

### ✅ Critical Mobile UX Fixes
- [x] **Complete Mobile-First CSS Architecture** - All styles now follow mobile-first methodology
- [x] **Hero Section Optimization** - Reduced image height (120px on 320px) to ensure CTAs above fold
- [x] **Navbar Fixed** - 60px compact height on mobile with proper hamburger menu
- [x] **Mobile Menu Working** - Full-screen overlay with language switcher, nav links, services
- [x] **Brand Carousel Optimized** - Compact padding and smaller text on mobile

### ✅ Viewport Testing Results (All Passed)
- [x] **320px viewport** - CTAs visible above fold, layout clean
- [x] **360px viewport** - CTAs visible above fold, layout clean
- [x] **375px viewport** - CTAs visible above fold, layout clean
- [x] **414px viewport** - CTAs visible above fold, layout clean

### ✅ Language Switching Verified
- [x] **Russian (RU)** - Works correctly
- [x] **Uzbek Latin (UZ)** - Works correctly
- [x] **Uzbek Cyrillic (ЎЗ)** - Works correctly without breaking layout

### ✅ Mobile-Specific Improvements
- [x] Reduced padding/margins throughout for mobile
- [x] Smaller font sizes with progressive enhancement
- [x] Touch-friendly button sizes (min 40-42px)
- [x] Full-width CTAs on mobile
- [x] Optimized hero image height with max-height constraints
- [x] Responsive breakpoints: 320px, 360px, 768px, 1024px

## Phase 2 Improvements (2025-12-10)

### ✅ Design & Visual Enhancements
- [x] **Premium Services Section** - Completely redesigned with large images, icons, descriptions, and CTAs
- [x] **Brand Carousel Position** - Moved directly under navbar (before hero section)
- [x] **Clickable Brand Links** - All brands in carousel now link to dedicated pages
- [x] **Work Process Section** - New visual section with large image and step-by-step process
- [x] **Service Images** - Added 15+ professional images across all 14 services
- [x] **Visual Density Increased** - More images, less empty space, premium look

### ✅ Brand Pages System
- [x] Created BrandPage component with full layouts
- [x] 20+ brand pages (Baxi, Navien, Ariston, Bosch, Ferroli, Viessmann, etc.)
- [x] Each brand page includes:
  - Brand history and description
  - Popular models
  - Common problems
  - Services offered
  - Image galleries (3+ images per brand)
  - Contact forms
  - Related services
- [x] SEO-friendly URLs: `/brands/baxi`, `/brands/navien`, etc.
- [x] Detailed content for top 6 brands (Baxi, Navien, Ariston, Bosch, Ferroli, Viessmann)

### ✅ Enhanced Components
- [x] Service cards now include:
  - Large service images
  - Icon overlays
  - Visible CTA buttons
  - Price displays
  - Hover effects
- [x] Brand carousel with hover states and smooth animation
- [x] Responsive design for all new sections
