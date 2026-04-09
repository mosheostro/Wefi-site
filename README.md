# WeFi Deobank Multi-Language Next.js Portal Architecture

This documentation maps out the structural implementation of the MVP portal generated within the `wefi-portal-next` directory.

## 🏗 Component Map & Directory Structure

```text
wefi-portal-next/
├── messages/                       # i18n Dictionary Files
│   ├── en.json                     # English strings
│   ├── de.json                     # German strings
│   ├── he.json                     # Hebrew strings (triggers RTL layout)
│   └── ru.json                     # Russian strings
├── src/
│   ├── app/
│   │   ├── [locale]/               # Next.js App Router dynamic translations
│   │   │   ├── layout.tsx          # Root Layout (Injects RTL, Meta, Sidebar)
│   │   │   ├── page.tsx            # Home / Landing Page
│   │   │   ├── about/            
│   │   │   ├── blog/             
│   │   │   ├── ecosystem/        
│   │   │   ├── knowledge/        
│   │   │   ├── platform/           # The Drag-And-Drop Products dashboard
│   │   │   └── technology/       
│   ├── components/                 # Reusable React UI Modules
│   │   ├── Navigation.tsx          # Sticky Navbar with Language Switcher
│   │   ├── Sidebar.tsx             
│   │   └── Widgets/                # Dashboard specific widgets (WeFi Card, Balance, etc)
│   ├── i18n/                       # `next-intl` configuration layer
│   │   ├── request.ts             
│   │   └── routing.ts             
│   ├── lib/
│   │   └── providers/              # React Context Providers for Data/WebSockets
│   └── middleware.ts               # HTTP Middleware routing users based on Accept-Language
```

## 🔌 API Endpoints & State Models

Expected properties for future integration:

### WebSocket Provider
The platform will utilize a global `<WeChainProvider>` wrapping `layout.tsx`. All widgets draw data using custom hooks (e.g., `useWeChainData`) which map directly to:
- `wss://api.wefi.co/v1/stream/energy` -> Feeds `EnergyGraph.tsx`
- `wss://api.wefi.co/v1/stream/balance` -> Feeds `UnifiedBalance.tsx`

### Widget State Props Interface
Every UI module guarantees fallback accessibility via the following structural signature:
```typescript
interface WidgetProps<T> {
  data: T | null;             // The live payload from WeChain
  isLoading: boolean;         // Triggers skeleton borders
  isError: Error | null;      // Triggers error fallback UI
  isEmpty: boolean;           // Renders empty-state call-to-actions
}
```

## 🎨 Styling & Theming
Tailwind CSS handles the theming constraints:
- **Background**: `bg-[#121212]` (Deep Anthracite)
- **Accents**: `text-[#007AFF]`, `bg-[#007AFF]` (Electric Blue)
- **Glassmorphism**: Achieved via `.backdrop-blur-xl` and `bg-white/5` modifiers.

## 🚀 Running Locally
```bash
cd wefi-portal-next
npm run dev
```
Navigate to `http://localhost:3000`. Use the dropdown in the top right to hot-swap languages and witness RTL geometry shifting for Hebrew (`he`).
