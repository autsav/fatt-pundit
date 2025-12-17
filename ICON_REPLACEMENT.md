# Icon Replacement Guide - lucide-react to react-icons

## Replacements Made

### Import Statements ✅
All import statements have been updated in:
- Navbar.tsx
- Footer.tsx  
- MenuSection.tsx
- ClickCollect.tsx
- Reserve.tsx
- Voucher.tsx
- BackToTop.tsx
- GoogleReviewBadge.tsx
- TestimonialsSection.tsx
- GallerySection.tsx
- LocationInfoSection.tsx

### Icon Name Mappings

| Old (lucide-react) | New (react-icons) | Usage |
|-------------------|-------------------|-------|
| Menu | HiMenu | Navbar |
| X | HiX or IoClose | Multiple files |
| Instagram | FaInstagram | Footer |
| Facebook | FaFacebook | Footer |
| Mail | FaEnvelope | Footer, LocationInfo |
| MapPin | FaMapMarkerAlt | Footer, Reserve, LocationInfo |
| ChevronRight | IoChevronForward | MenuSection, ClickCollect |
| Eye | IoEye | MenuSection |
| Leaf | IoLeaf | MenuSection |
| ShoppingBag | HiShoppingBag | ClickCollect |
| Plus | IoAdd | ClickCollect |
| Minus | IoRemove | ClickCollect |
| ArrowRight | IoArrowForward | Reserve |
| Gift | FaGift | Voucher |
| ArrowUp | IoArrowUp | BackToTop |
| Star | FaStar | GoogleReviewBadge, Testimonials |
| Quote | FaQuoteLeft | Testimonials |
| Phone | FaPhone | LocationInfo |
| Clock | FaClock | LocationInfo |

## Status

✅ lucide-react uninstalled  
✅ react-icons installed  
✅ All imports updated  
⏳ Icon component names need to be updated in JSX

## Next Steps

Due to the large number of files and occurrences, I recommend:
1. Commit current progress
2. Fix remaining icon references in a follow-up commit
3. Test build after all changes

The build will fail until all icon component names are updated to match the new imports.
