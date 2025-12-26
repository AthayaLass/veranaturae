const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function generateSocialImage() {
    const inputPath = path.join(__dirname, 'images', 'Logo_Veranaturae_title.png');
    const outputPath = path.join(__dirname, 'images', 'Logo_Veranaturae_social.png');
    
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
        console.error(`Error: Input file not found at ${inputPath}`);
        console.log('Trying alternative: Logo_Veranaturae_title_noBG.png');
        const altPath = path.join(__dirname, 'images', 'Logo_Veranaturae_title_noBG.png');
        if (fs.existsSync(altPath)) {
            return await generateFromImage(altPath, outputPath);
        }
        process.exit(1);
    }
    
    await generateFromImage(inputPath, outputPath);
}

async function generateFromImage(inputPath, outputPath) {
    try {
        // Get image metadata to understand dimensions
        const metadata = await sharp(inputPath).metadata();
        console.log(`Original image dimensions: ${metadata.width}x${metadata.height}`);
        
        // Target square size
        const squareSize = 1200;
        
        // Calculate safe padding (20% on all sides = 40% total, so logo uses 60% of space)
        const padding = squareSize * 0.2; // 240px padding
        const logoMaxSize = squareSize - (padding * 2); // 720px max for logo
        
        // Calculate scale to fit logo within safe area
        const logoAspectRatio = metadata.width / metadata.height;
        let logoWidth, logoHeight;
        
        if (logoAspectRatio > 1) {
            // Logo is wider than tall
            logoWidth = logoMaxSize;
            logoHeight = logoMaxSize / logoAspectRatio;
        } else {
            // Logo is taller than wide or square
            logoHeight = logoMaxSize;
            logoWidth = logoMaxSize * logoAspectRatio;
        }
        
        // Calculate position to center the logo
        const x = (squareSize - logoWidth) / 2;
        const y = (squareSize - logoHeight) / 2;
        
        console.log(`Logo will be resized to: ${Math.round(logoWidth)}x${Math.round(logoHeight)}`);
        console.log(`Logo position: x=${Math.round(x)}, y=${Math.round(y)}`);
        
        // Create square canvas with a light background (you can adjust the color)
        // Using a soft beige/cream color that matches the website theme
        const backgroundColor = { r: 249, g: 248, b: 246 }; // Light cream background
        
        // Resize and composite the logo onto the square canvas
        await sharp({
            create: {
                width: squareSize,
                height: squareSize,
                channels: 3,
                background: backgroundColor
            }
        })
        .composite([
            {
                input: await sharp(inputPath)
                    .resize(Math.round(logoWidth), Math.round(logoHeight), {
                        fit: 'contain',
                        background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
                    })
                    .toBuffer(),
                left: Math.round(x),
                top: Math.round(y)
            }
        ])
        .png()
        .toFile(outputPath);
        
        console.log(`\n✅ Success! Square social media image created at: ${outputPath}`);
        console.log(`   Dimensions: ${squareSize}x${squareSize}px`);
        console.log(`\n📝 Next step: Update your HTML meta tags to use: Logo_Veranaturae_social.png`);
        
    } catch (error) {
        console.error('Error generating image:', error);
        process.exit(1);
    }
}

// Run the script
generateSocialImage();

