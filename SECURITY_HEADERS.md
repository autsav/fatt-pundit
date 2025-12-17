# Security Headers for Production Deployment
# Add these headers to your web server configuration (Nginx, Apache, etc.)

# Prevent clickjacking attacks
X-Frame-Options: SAMEORIGIN

# Enable XSS protection
X-XSS-Protection: 1; mode=block

# Prevent MIME type sniffing
X-Content-Type-Options: nosniff

# Referrer Policy
Referrer-Policy: strict-origin-when-cross-origin

# Content Security Policy (adjust as needed)
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.opentable.co.uk https://maps.google.com https://www.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; frame-src https://www.opentable.co.uk https://maps.google.com https://www.google.com; connect-src 'self';

# Permissions Policy (formerly Feature Policy)
Permissions-Policy: geolocation=(), microphone=(), camera=()

# Strict Transport Security (HTTPS only)
Strict-Transport-Security: max-age=31536000; includeSubDomains

# For Netlify deployment, create a _headers file in public folder with:
/*
  X-Frame-Options: SAMEORIGIN
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
