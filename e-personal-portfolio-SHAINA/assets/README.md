# 📁 Assets Folder Guide

This folder contains all images and media files for Shaina Mariel D. Dioso's portfolio website.

---

## 📸 Required Images

### 1. **Portrait Image** (Hero Section)
- **Filename:** `portrait.jpg` or `portrait.png`
- **Recommended Size:** 800x800px (1:1 ratio)
- **Format:** JPG or PNG
- **Description:** Professional portrait photo displayed in the hero section with circular frame
- **Tips:** 
  - Use a high-quality professional photo
  - Ensure good lighting and clear background
  - Centered composition works best for circular frame

### 2. **About Section Photo**
- **Filename:** `about.jpg` or `about.png`
- **Recommended Size:** 600x800px (3:4 ratio)
- **Format:** JPG or PNG
- **Description:** Another professional photo for the About Me section
- **Tips:**
  - Can be a candid or action shot showing hospitality work
  - Good for showing personality and professionalism

---

## 🎯 Optional Images

### 3. **Experience Photos** (Background or Icons)
- **Folder:** `assets/experience/`
- **Filenames:** 
  - `discovery-samal.jpg` - OJT training venue
  - `el-bonita.jpg` - Event coordination
  - `volunteer.jpg` - Volunteer activities
- **Recommended Size:** 400x300px (4:3 ratio)
- **Format:** JPG or PNG

### 4. **Achievement Certificates**
- **Folder:** `assets/certificates/`
- **Filenames:**
  - `chef-day-2024.jpg`
  - `mice-pitch-2024.jpg`
  - `bake-sale-best-product.jpg`
  - `bake-sale-gross-sales.jpg`
  - `treasurer-certificate.jpg`
  - `eurofete-organizer.jpg`
  - `barista-training.jpg`
- **Recommended Size:** 1200x900px (4:3 ratio)
- **Format:** JPG or PNG
- **Description:** Scanned copies of award certificates and recognitions

### 5. **Gallery/Portfolio Images**
- **Folder:** `assets/gallery/`
- **Description:** Photos from events, banquets, or hospitality work
- **Recommended Size:** 1200x800px (3:2 ratio)
- **Format:** JPG

### 6. **Favicon**
- **Filename:** `favicon.ico` or `favicon.png`
- **Recommended Size:** 32x32px or 64x64px
- **Format:** ICO or PNG
- **Description:** Small icon displayed in browser tab

---

## 🎨 Image Guidelines

### Color Palette Compatibility
Ensure images complement the Aurora Flow color scheme:
- **Primary:** #6BA6FF (Aurora Blue)
- **Secondary:** #FF8BA7 (Soft Coral Pink)
- **Accent:** #F9E4B7 (Pearl Gold)
- **Background:** #FFFDF8 (Soft Ivory White)

### Technical Requirements
- **Resolution:** High resolution (minimum 72 DPI for web, 150 DPI preferred)
- **File Size:** Optimize for web (under 500KB per image)
- **Format:** 
  - JPG for photographs (use quality 80-90%)
  - PNG for images with transparency
  - WebP for modern browsers (optional)

### Image Optimization
Use online tools to compress images without losing quality:
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
- ImageOptim (for Mac users)

---

## 🔧 How to Add Images

### Method 1: Replace Placeholders (Recommended)

1. **For Hero Portrait:**
   - Save your portrait image as `assets/portrait.jpg`
   - Open `index.html`
   - Find the `.portrait-placeholder` div in the Hero section
   - Replace it with:
   ```html
   <img src="assets/portrait.jpg" alt="Shaina Mariel Dioso">
   ```

2. **For About Photo:**
   - Save your photo as `assets/about.jpg`
   - Open `index.html`
   - Find the `.about-portrait-placeholder` div
   - Replace it with:
   ```html
   <img src="assets/about.jpg" alt="Shaina Dioso">
   ```

### Method 2: Update HTML Directly

Open `index.html` and search for placeholder elements, then replace with actual image tags:

```html
<!-- Before -->
<div class="portrait-placeholder">
    <i class="fas fa-user-circle"></i>
    <p>Add portrait image to<br>assets/portrait.jpg</p>
</div>

<!-- After -->
<img src="assets/portrait.jpg" alt="Shaina Mariel Dioso" class="portrait-image">
```

### Method 3: Use CSS Background Images

For decorative backgrounds, you can update the CSS:

```css
.hero {
    background-image: url('../assets/hero-bg.jpg');
    background-size: cover;
    background-position: center;
}
```

---

## 📋 Image Checklist

Use this checklist to track which images you've added:

- [ ] `portrait.jpg` - Hero section portrait
- [ ] `about.jpg` - About section photo
- [ ] `favicon.ico` - Browser tab icon
- [ ] `certificates/` - Achievement certificates (optional)
- [ ] `gallery/` - Event/work photos (optional)
- [ ] `experience/` - Work experience photos (optional)

---

## 🎭 Placeholder Behavior

The website is designed with elegant placeholders that:
- Show icon representations when images are missing
- Display instructions for where to add images
- Maintain layout structure even without images
- Automatically adapt when images are added

**You can launch the website immediately**, and add images gradually!

---

## 🌐 CDN Alternative

If you prefer using external hosting:

1. Upload images to a service like:
   - Imgur (https://imgur.com/)
   - Cloudinary (https://cloudinary.com/)
   - ImgBB (https://imgbb.com/)

2. Use the external URL in HTML:
   ```html
   <img src="https://your-cdn-url.com/portrait.jpg" alt="Shaina Dioso">
   ```

---

## 💡 Pro Tips

1. **Lazy Loading:** Images are set to lazy-load for better performance
2. **Alt Text:** Always add descriptive alt text for accessibility
3. **Responsive:** Images automatically scale on mobile devices
4. **Optimization:** Compress images before uploading to improve load time
5. **Backup:** Keep original high-resolution versions in a separate folder

---

## 📞 Need Help?

If you need assistance with:
- Image editing or optimization
- Choosing the right photos
- Technical implementation

Feel free to update this README with notes or questions!

---

**Created for:** Shaina Mariel D. Dioso  
**Theme:** Aurora Flow  
**Last Updated:** October 2025

