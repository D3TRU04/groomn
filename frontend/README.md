# Groomn - Haircut & Outfit Inspiration App

A React Native mobile app that helps users discover and book haircuts and outfit combinations based on their style preferences.

## Features

- Browse trending haircuts and outfit combinations
- Upload selfies for personalized haircut recommendations
- Upload body photos for outfit recommendations
- Book appointments with nearby stylists
- Save favorite looks
- Manage bookings and preferences

## Tech Stack

- React Native + Expo
- TypeScript
- Supabase (Auth, Database, Storage)
- NativeWind (Tailwind CSS for React Native)
- Zustand (State Management)
- React Navigation
- Stripe (Payments)
- Mapbox (Location Services)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Studio (for Android development)

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/groomn.git
cd groomn
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
STRIPE_PUBLISHABLE_KEY=your_stripe_key
MAPBOX_ACCESS_TOKEN=your_mapbox_token
```

4. Start the development server:
```bash
npm start
```

5. Run on iOS or Android:
```bash
# For iOS
npm run ios

# For Android
npm run android
```

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── screens/        # Screen components
  ├── navigation/     # Navigation configuration
  ├── services/       # API and external service integrations
  ├── store/         # Zustand store
  ├── types/         # TypeScript type definitions
  ├── utils/         # Utility functions
  ├── hooks/         # Custom React hooks
  └── constants/     # App constants and configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.