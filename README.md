# Course Learning App

A mobile application built with Expo and React Native for online course management and learning.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your mobile device (available on [iOS App Store](https://apps.apple.com/app/apple-store/id982107779) or [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent))

## Installation

1. Clone the repository:

```bash
git clone https://github.com/hd1801/c_explorer
cd c_explorer
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

## Running the App

1. Start the development server:

```bash
npx expo start
```

2. Running on your device:

   - Install the Expo Go app on your mobile device
   - Scan the QR code shown in the terminal with:
     - iOS: Use your device's camera
     - Android: Use the Expo Go app's QR scanner

3. Running on simulators:
   - iOS (requires macOS):
     ```bash
     npx expo start --ios
     ```
   - Android:
     ```bash
     npx expo start --android
     ```

## Development Notes

- The app uses Expo Router for navigation
- User authentication is implemented using a custom provider
- Course data is managed through a centralized state management system

## Project Structure

```
app/
├── (tabs)/           # Tab-based navigation screens
├── course/           # Course-related screens
├── _layout.tsx      # Root layout configuration
├── register.tsx     # Registration screen
src/
├── components/      # Reusable components
├── providers/       # Context providers
├── types/          # TypeScript type definitions
```

## Troubleshooting

If you encounter any issues:

1. Clear the Expo cache:

```bash
npx expo start -c
```

2. Verify your Node.js version:

```bash
node --version
```

3. Make sure all dependencies are properly installed:

```bash
rm -rf node_modules
npm install
```
