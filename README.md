# Tiles Gallery 🧱

A modern, fully responsive tile showcase built with **Next.js App Router**, **BetterAuth**, and **HeroUI+DaisyUI**. Browse a curated collection of ceramic, marble, porcelain, and geometric tiles – search, discover, and manage your profile seamlessly.

---

## 🌍 Live URL  

https://tiles-gallery-pi-five.vercel.app/

---

## 🎯 Purpose  
The Tiles Gallery is designed to let customers explore a wide range of premium tiles, view detailed specifications, and manage their personal profiles. It demonstrates authentication (email/password + Google), private routes, dynamic metadata, theme toggling, and integration of an interactive carousel.

---

## ✨ Key Features

- **🔐 Authentication**  
  Login/Register with email/password or Google (BetterAuth + MongoDB).  
  Secure private routes (`/my-profile`, `/tile/[id]`) via middleware.

- **🏠 Interactive Home Page**  
  Hero banner, marquee announcement, and a Swiper carousel of featured tiles.

- **🖼️ All Tiles Gallery**  
  Search tiles by name using a large search bar. URL query parameters are synced for shareable filtered views.

- **🔍 Tile Details**  
  Private detail page showing large tile image, creator, description, material, dimensions, price, and style tags. Dynamic metadata (SEO) for each tile.

- **👤 User Profile & Update**  
  View logged‑in user data on `/my-profile`. Update name and photo URL via `/my-profile/update` (uses BetterAuth’s `updateUser`).

- **📱 Fully Responsive**  
  Mobile, tablet, and desktop layouts using HeroUI grid system and Swiper breakpoints.

---

## 📦 NPM Packages Used

| Package              | Purpose |
|----------------------|---------|
| `next`               | React framework (App Router) |
| `react` & `react-dom`| UI library |
| `better-auth`        | Authentication (email/password, Google OAuth) |
| `@better-auth/mongo-adapter` | MongoDB adapter for BetterAuth |
| `mongodb`            | Database driver |
| `@heroui/react`      | Main UI component library (HeroUI) |
| `daisyui`            | Additional UI utilities & Tailwind CSS plugin (used alongside HeroUI) |
| `next-themes`        | Theme provider for light/dark mode |
| `swiper`             | Touch slider / carousel for featured tiles |
| `react-fast-marquee` | Scrolling marquee text |
| `react-hook-form`    | Form handling with validation |
| `react-icons`        | Icon set (social, UI) |
| `react-toastify`     | Alternative toast (available but replaced by react-hot-toast) |
| `tailwindcss`        | Utility‑first CSS framework |

---

1. Clone the repo  
   ```bash
   git clone https://github.com/your-username/tiles-gallery.git
   cd tiles-gallery
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Set up environment variables (`.env.local`)  

4. Start the JSON server (for tile data)  
   ```bash
   json-server --watch data/tiles.json --port 5000
   ```

5. Run the Next.js development server  
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

---

## 📄 License

This project is created for educational purposes.