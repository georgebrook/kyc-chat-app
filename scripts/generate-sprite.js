import svgSprite from 'svg-sprite';
import { readdirSync, readFileSync, writeFileSync, watch } from 'fs';
import { join } from 'path';

const iconsDir = 'assets/icons';
const outputPath = 'public/icon-sprite.svg';

const config = {
  mode: {
    symbol: {
      sprite: 'icons-sprite.svg',
    },
  },
};

// Function to build and regenerate the sprite
function buildSprite() {
  const spriter = new svgSprite(config);

  readdirSync(iconsDir).forEach((file) => {
    if (file.endsWith('.svg')) {
      const filePath = join(iconsDir, file);

      const svgContent = readFileSync(filePath, 'utf-8');

      if (!svgContent.trim()) {
        console.log(`Skipping empty SVG file: ${file}`);
        return;
      }

      spriter.add(filePath, null, readFileSync(filePath, 'utf-8'));
    }
  });

  spriter.compile((error, result) => {
    if (error) {
      console.error('Error compiling sprite:', error);
      return;
    }

    const spriteContent = result.symbol.sprite.contents.toString();
    writeFileSync(outputPath, spriteContent);
    console.log('SVG sprite generated at:', outputPath);
  });
}

// Watch for changes in the icons directory
watch(iconsDir, { recursive: true }, (eventType, filename) => {
  if (filename && filename.endsWith('.svg')) {
    console.log(`Change detected: ${filename}`);
    buildSprite();
  }
});

// Initial sprite generation
buildSprite();
