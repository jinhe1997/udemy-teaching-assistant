import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

// Get __dirname equivalent in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Ensure icons directory exists
const iconsDir = path.resolve(__dirname, 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir);
}

// Convert and save SVG to PNG if needed
import sharp from 'sharp';

const svgPath = path.resolve(__dirname, 'public/icon.svg');
const pngPath = path.resolve(__dirname, 'icons/icon48.png');

async function convertSvgToPng() {
  const svgBuffer = await fs.promises.readFile(svgPath);
  await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toFile(pngPath);
}

// Convert SVG to PNG during build
convertSvgToPng();

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.tsx'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    },
    copyPublicDir: true,
  },
  publicDir: 'public'
});