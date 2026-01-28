# Next.js E-commerce with Payload CMS

A modern e-commerce platform built with Next.js 15, Payload CMS, and shadcn/ui components.

## 🚀 Features

- Next.js 15 with App Router
- Payload CMS for content management
- MongoDB database
- Lexical rich text editor
- shadcn/ui components
- Responsive design
- Modern e-commerce functionality
- Auto-generated TypeScript types for Payload

## ⚙️ Requirements

- **Next.js** >= 15
- **Node.js** >= 16 (Note: Payload generate types may not work properly on LTS Node versions, use Node >= 16)
- **MongoDB** (local or cloud instance)
- **Payload CMS** v3.71.1
- **React** 19.x
- **Tailwind CSS** v4
- Package manager: npm, yarn, pnpm, or bun

## 📁 Project Structure

```
nextjs-ecom/
├── .gitignore
├── components.json           # shadcn/ui configuration
├── eslint.config.mjs
├── next.config.ts          # Next.js config with Payload integration
├── package-lock.json
├── package.json
├── payload-types.ts        # Auto-generated Payload types
├── payload.config.ts       # Payload CMS configuration
├── postcss.config.mjs
├── README.md
├── tsconfig.json
├── app/
│   ├── (app)/              # Main application routes
│   │   ├── (home)/
│   │   │   ├── about/      # About page
│   │   │   ├── cart/       # Shopping cart
│   │   │   ├── contact/    # Contact page
│   │   │   ├── product/    # Product pages
│   │   │   ├── search-filters/ # Search and filtering
│   │   │   ├── footer.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── Navbar-sidebar.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css     # Global styles
│   │   └── layout.tsx
│   ├── (payload)/          # Payload CMS routes
│   │   ├── admin/          # Admin dashboard
│   │   │   ├── [[...segments]]/
│   │   │   └── importMap.js
│   │   ├── api/            # Payload API routes
│   │   ├── custom.scss     # Custom SCSS for Payload
│   │   └── layout.tsx
│   └── my-route/           # Custom API route example
│       └── route.ts
├── collections/            # Payload collections
│   ├── Media.ts            # Media collection with upload capability
│   ├── Users.ts            # User collection with authentication
│   └── categories.ts       # Category collection with hierarchical structure
├── components/             # React components
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── input.tsx
│       ├── progress.tsx
│       ├── scroll-area.tsx
│       ├── sheet.tsx
│       └── textarea.tsx
├── lib/                    # Utility functions
│   └── utils.ts
├── node_modules/
└── public/                 # Static assets
    └── ...
```

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/SyedJazim58/nextjs-ecom.git
   cd nextjs-ecom
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add the following:

   ```env
   DATABASE_URL=your_mongodb_connection_string
   PAYLOAD_SECRET=your_super_secret_key_here
   NEXT_PUBLIC_SERVER_URL=http://localhost:3000
   ```

4. **Generate Payload types** (recommended)

   ```bash
   npm run generate:types
   # or
   yarn generate:types
   # or
   pnpm generate:types
   ```

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Access the application**

   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Admin panel: [http://localhost:3000/admin](http://localhost:3000/admin)

## 🧰 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Lint the codebase
- `npm run generate:types` - Generate Payload types

## 🔌 Payload CMS Integration

This project uses Payload CMS v3.71.1 with:
- MongoDB adapter (`@payloadcms/db-mongodb`)
- Lexical rich text editor (`@payloadcms/richtext-lexical`)
- Automatic type generation with `payload-types.ts`
- Built-in authentication system
- File upload capabilities with Sharp processing
- Hierarchical category system

### Collections
- **Users**: Authentication-enabled user collection
- **Media**: File upload collection with alt text
- **Categories**: Hierarchical category system with parent-child relationships

## 🎨 UI Components

The project uses shadcn/ui components:
- Button
- Card
- Checkbox
- Input
- Progress
- Scroll Area
- Sheet
- Textarea

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🐛 Issues

If you encounter any issues, please open an issue on the GitHub repository.