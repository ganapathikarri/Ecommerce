# Ecommerce Frontend (React + Vite + Tailwind)

A clean ecommerce storefront ready to connect to your **Spring Boot** backend.

## Run locally
```bash
npm install
npm run dev
```

## Connect to your Spring Boot backend

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Edit `.env`:
   ```
   VITE_API_BASE_URL=http://localhost:8080/api
   VITE_USE_MOCK_API=false
   ```
3. Make sure your Spring Boot controllers expose:
   - `GET /api/products` → `Product[]`
   - `GET /api/products/{id}` → `Product`
   - `GET /api/products/featured` → `Product[]`
   - `POST /api/cart/checkout` → `{ orderId: string }`

   The `Product` JSON shape (see `src/data/products.ts`):
   ```ts
   { id, name, category, brand, price, image, inStock }
   ```
4. Enable CORS in Spring Boot for `http://localhost:5173`.

## Project structure (the parts you'll touch)

```
src/
├── lib/apiClient.ts           # Axios instance + base URL + interceptors
├── services/
│   ├── productService.ts      # Product API calls (swap mock <-> real here)
│   └── cartService.ts         # Cart/checkout API calls
├── hooks/useProducts.ts       # React Query hooks (loading/error/data)
├── data/products.ts           # Dummy data + Product type
├── components/
│   ├── ProductCard.tsx
│   ├── ProductCardSkeleton.tsx  # Loading skeleton
│   ├── Spinner.tsx              # Loading spinner
│   ├── Header.tsx / Footer.tsx / ShopSidebar.tsx
└── pages/
    ├── Index.tsx (Home)
    ├── Shop.tsx
    └── Cart.tsx
```

### How to add a new API
1. Add a method in `src/services/<feature>Service.ts` — keep both a mock branch and the real `apiClient.get(...)` call.
2. Wrap it with a React Query hook in `src/hooks/`.
3. Use the hook in your page; show `<ProductCardSkeleton />` or `<Spinner />` while `isLoading`.

### Easily redesign later
- All colors live as HSL tokens in `src/index.css` — change the palette there and the whole app updates.
- Animations defined in `tailwind.config.ts` (`animate-fade-in`, `animate-scale-in`).
- UI primitives are shadcn components in `src/components/ui/` — restyle freely.
