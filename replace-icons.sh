#!/bin/bash

# Script to replace all lucide-react icon names with react-icons equivalents

# Navbar.tsx
sed -i '' 's/<Menu /<HiMenu /g' src/components/Layout/Navbar.tsx
sed -i '' 's/<X /<HiX /g' src/components/Layout/Navbar.tsx

# Footer.tsx
sed -i '' 's/<Instagram /<FaInstagram /g' src/components/Layout/Footer.tsx
sed -i '' 's/<Facebook /<FaFacebook /g' src/components/Layout/Footer.tsx
sed -i '' 's/<Mail /<FaEnvelope /g' src/components/Layout/Footer.tsx
sed -i '' 's/<MapPin /<FaMapMarkerAlt /g' src/components/Layout/Footer.tsx

# MenuSection.tsx
sed -i '' 's/<ChevronRight /<IoChevronForward /g' src/components/Sections/MenuSection.tsx
sed -i '' 's/<Eye /<IoEye /g' src/components/Sections/MenuSection.tsx
sed -i '' 's/<X /<IoClose /g' src/components/Sections/MenuSection.tsx
sed -i '' 's/<Leaf /<IoLeaf /g' src/components/Sections/MenuSection.tsx

# ClickCollect.tsx
sed -i '' 's/<ShoppingBag /<HiShoppingBag /g' src/pages/ClickCollect.tsx
sed -i '' 's/<X /<IoClose /g' src/pages/ClickCollect.tsx
sed -i '' 's/<Plus /<IoAdd /g' src/pages/ClickCollect.tsx
sed -i '' 's/<Minus /<IoRemove /g' src/pages/ClickCollect.tsx
sed -i '' 's/<ChevronRight /<IoChevronForward /g' src/pages/ClickCollect.tsx

# Reserve.tsx
sed -i '' 's/<MapPin /<FaMapMarkerAlt /g' src/pages/Reserve.tsx
sed -i '' 's/<ArrowRight /<IoArrowForward /g' src/pages/Reserve.tsx

# Voucher.tsx
sed -i '' 's/<Gift /<FaGift /g' src/pages/Voucher.tsx

# BackToTop.tsx
sed -i '' 's/<ArrowUp /<IoArrowUp /g' src/components/UI/BackToTop.tsx

# GoogleReviewBadge.tsx
sed -i '' 's/<Star /<FaStar /g' src/components/UI/GoogleReviewBadge.tsx
sed -i '' 's/<X /<IoClose /g' src/components/UI/GoogleReviewBadge.tsx

# TestimonialsSection.tsx
sed -i '' 's/<Star /<FaStar /g' src/components/Sections/TestimonialsSection.tsx
sed -i '' 's/<Quote /<FaQuoteLeft /g' src/components/Sections/TestimonialsSection.tsx

# GallerySection.tsx
sed -i '' 's/<X /<IoClose /g' src/components/Sections/GallerySection.tsx

# LocationInfoSection.tsx
sed -i '' 's/<MapPin /<FaMapMarkerAlt /g' src/components/Sections/LocationInfoSection.tsx
sed -i '' 's/<Phone /<FaPhone /g' src/components/Sections/LocationInfoSection.tsx
sed -i '' 's/<Mail /<FaEnvelope /g' src/components/Sections/LocationInfoSection.tsx
sed -i '' 's/<Clock /<FaClock /g' src/components/Sections/LocationInfoSection.tsx

echo "Icon replacement complete!"
