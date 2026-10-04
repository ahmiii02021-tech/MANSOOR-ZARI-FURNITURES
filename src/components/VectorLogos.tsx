import React from 'react';

interface VectorLogoProps {
  type: 'monogram-armchair' | 'minimal-geometric' | 'mughal-arch';
  theme?: 'dark' | 'light' | 'maroon';
  showTagline?: boolean;
  className?: string;
  size?: number;
}

export const VectorLogo: React.FC<VectorLogoProps> = ({
  type,
  theme = 'dark',
  showTagline = true,
  className = '',
  size = 320,
}) => {
  // Theme styling helpers
  const isDark = theme === 'dark';
  const isMaroon = theme === 'maroon';
  const bgFill = isMaroon ? '#3B0D15' : isDark ? '#062B1E' : '#FFFFFF';
  const primaryGold = '#D4AF37';
  const lightGold = '#F7E2A9';
  const darkEmerald = '#062B1E';
  const textColor = isDark || isMaroon ? '#FBF8F2' : '#1C1E21';
  const goldStroke = primaryGold;

  if (type === 'monogram-armchair') {
    return (
      <svg
        viewBox="0 0 500 500"
        width={size}
        height={size}
        className={`select-none ${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradMZ" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#AA8222" />
            <stop offset="100%" stopColor="#FDF0CD" />
          </linearGradient>
          <linearGradient id="emeraldBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#083827" />
            <stop offset="50%" stopColor="#041B13" />
            <stop offset="100%" stopColor="#020E0A" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Background (if not transparent) */}
        <rect width="500" height="500" rx="24" fill={isDark ? 'url(#emeraldBg)' : bgFill} />

        {/* Intricate Zari Embroidery Circular Border */}
        <circle cx="250" cy="205" r="145" fill="none" stroke="url(#goldGradMZ)" strokeWidth="1.8" opacity="0.6" />
        <circle cx="250" cy="205" r="139" fill="none" stroke="url(#goldGradMZ)" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
        <circle cx="250" cy="205" r="151" fill="none" stroke="url(#goldGradMZ)" strokeWidth="1.2" strokeDasharray="1 5" opacity="0.7" />

        {/* Ornamental Zari Filigree Corners */}
        <g stroke="url(#goldGradMZ)" fill="none" strokeWidth="1.4" opacity="0.75">
          {/* Top Left */}
          <path d="M 140 95 Q 165 95 165 70 Q 165 95 190 95" />
          {/* Top Right */}
          <path d="M 310 95 Q 335 95 335 70 Q 335 95 360 95" />
          {/* Bottom Left */}
          <path d="M 140 315 Q 165 315 165 340 Q 165 315 190 315" />
          {/* Bottom Right */}
          <path d="M 310 315 Q 335 315 335 340 Q 335 315 360 315" />
        </g>

        {/* Stylized Royal Armchair Throne Silhouette */}
        <g stroke="url(#goldGradMZ)" fill="none" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
          {/* High Carved Crown Crest */}
          <path d="M 215 125 C 235 110, 265 110, 285 125 C 295 118, 305 126, 300 138 C 295 150, 290 170, 290 200 L 210 200 C 210 170, 205 150, 200 138 C 195 126, 205 118, 215 125 Z" fill={isDark ? '#0B3324' : '#F6F0E4'} fillOpacity="0.4" />
          {/* Crown Jewel Finial */}
          <circle cx="250" cy="112" r="4.5" fill="url(#goldGradMZ)" />
          {/* Diamond Tufting in Backrest */}
          <path d="M 235 145 L 250 162 L 265 145 L 250 130 Z" strokeWidth="1.2" opacity="0.7" />
          <path d="M 250 162 L 265 178 L 250 195 L 235 178 Z" strokeWidth="1.2" opacity="0.7" />
          <circle cx="250" cy="162" r="2" fill="url(#goldGradMZ)" />
          
          {/* Plush Armrests */}
          <path d="M 200 185 C 180 185, 178 215, 198 222 L 210 222" strokeWidth="3" />
          <path d="M 300 185 C 320 185, 322 215, 302 222 L 290 222" strokeWidth="3" />

          {/* Deep Velvet Seat Cushion */}
          <path d="M 195 220 Q 250 228 305 220 L 300 240 Q 250 248 200 240 Z" fill="url(#goldGradMZ)" fillOpacity="0.25" strokeWidth="2.5" />

          {/* Carved Cabriole Chair Legs */}
          <path d="M 205 240 C 198 255, 192 270, 202 285" strokeWidth="3.2" />
          <path d="M 295 240 C 302 255, 308 270, 298 285" strokeWidth="3.2" />
          <path d="M 225 242 L 222 275" strokeWidth="2.2" opacity="0.6" />
          <path d="M 275 242 L 278 275" strokeWidth="2.2" opacity="0.6" />
        </g>

        {/* Monogram 'M' and 'Z' Interlocking Motif */}
        <g fill="url(#goldGradMZ)" fontFamily="Cinzel, serif" fontWeight="700">
          <text
            x="222"
            y="235"
            fontSize="78"
            textAnchor="middle"
            filter="url(#softGlow)"
            letterSpacing="-2"
          >
            M
          </text>
          <text
            x="278"
            y="235"
            fontSize="78"
            textAnchor="middle"
            filter="url(#softGlow)"
            letterSpacing="-2"
          >
            Z
          </text>
        </g>

        {/* Brand Wordmark */}
        <g textAnchor="middle" fill="url(#goldGradMZ)">
          <text
            x="250"
            y="395"
            fontFamily="Cinzel, serif"
            fontSize="25"
            fontWeight="800"
            letterSpacing="5"
          >
            MANSOOR ZARI
          </text>
          <text
            x="250"
            y="422"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontSize="12.5"
            fontWeight="600"
            fill={textColor}
            letterSpacing="9"
            opacity="0.9"
          >
            FURNITURES
          </text>

          {showTagline && (
            <>
              {/* Divider filigree */}
              <path d="M 180 442 L 235 442 M 265 442 L 320 442" stroke="url(#goldGradMZ)" strokeWidth="1" opacity="0.5" />
              <polygon points="250,439 253,442 250,445 247,442" fill="url(#goldGradMZ)" />
              <text
                x="250"
                y="464"
                fontFamily="Cormorant Garamond, serif"
                fontStyle="italic"
                fontSize="14.5"
                fill={primaryGold}
                letterSpacing="3"
              >
                Ghar Ko Banayein Mahal • Est. 1989
              </text>
            </>
          )}
        </g>
      </svg>
    );
  }

  if (type === 'minimal-geometric') {
    return (
      <svg
        viewBox="0 0 500 500"
        width={size}
        height={size}
        className={`select-none ${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="warmGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9D776" />
            <stop offset="100%" stopColor="#C9932B" />
          </linearGradient>
        </defs>

        {/* Clean Minimal Background */}
        <rect width="500" height="500" rx="20" fill={isDark ? '#14171A' : '#FAFAF8'} />

        {/* Single-Line Geometric "M" formed from sofa & chair lines */}
        <g stroke="url(#warmGoldGrad)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Left Chair Leg rising up into left sofa armrest */}
          <path d="M 125 285 L 140 215 C 140 185, 165 170, 195 170 L 225 170" />
          {/* Central dip forming inner M and sofa seat crease */}
          <path d="M 225 170 L 250 235 L 275 170" />
          {/* Right sofa backline curving down into right chair leg */}
          <path d="M 275 170 L 305 170 C 335 170, 360 185, 360 215 L 375 285" />
          {/* Horizontal seat cushion balance bar */}
          <path d="M 155 235 L 345 235" strokeWidth="4.5" stroke="#EAE6DF" strokeOpacity={isDark ? '0.4' : '0.7'} />
          {/* Center tapered leg support */}
          <path d="M 250 235 L 250 280" strokeWidth="5" />
        </g>

        {/* Modern Minimalist Wordmark */}
        <g textAnchor="middle">
          <text
            x="250"
            y="370"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontSize="22"
            fontWeight="700"
            fill={isDark ? '#FFFFFF' : '#1C1E21'}
            letterSpacing="7"
          >
            MANSOOR ZARI
          </text>
          <text
            x="250"
            y="398"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontSize="12"
            fontWeight="500"
            fill="url(#warmGoldGrad)"
            letterSpacing="11"
          >
            FURNITURES
          </text>

          {showTagline && (
            <text
              x="250"
              y="442"
              fontFamily="Plus Jakarta Sans, sans-serif"
              fontSize="12.5"
              fontWeight="400"
              fill={isDark ? '#9CA3AF' : '#6B7280'}
              letterSpacing="6"
            >
              CRAFTED COMFORT
            </text>
          )}
        </g>
      </svg>
    );
  }

  // type === 'mughal-arch'
  return (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      className={`select-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="maroonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A101D" />
          <stop offset="60%" stopColor="#300912" />
          <stop offset="100%" stopColor="#1B0408" />
        </linearGradient>
        <linearGradient id="mughalGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9C7715" />
        </linearGradient>
      </defs>

      <rect width="500" height="500" rx="20" fill="url(#maroonGrad)" />

      {/* Mughal Cusped Mehrab Arch Silhouette */}
      <g stroke="url(#mughalGold)" fill="none" strokeWidth="2.5">
        {/* Outer Arch Border */}
        <path
          d="M 140 310 L 140 185 C 140 160, 160 145, 185 145 C 195 130, 220 115, 250 85 C 280 115, 305 130, 315 145 C 340 145, 360 160, 360 185 L 360 310 Z"
          strokeWidth="3.2"
        />
        {/* Inner Arch Foil */}
        <path
          d="M 152 305 L 152 190 C 152 170, 170 158, 192 158 C 202 145, 225 130, 250 102 C 275 130, 298 145, 308 158 C 330 158, 348 170, 348 190 L 348 305"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />

        {/* Jali Pattern Background inside Arch */}
        <g stroke="url(#mughalGold)" strokeWidth="0.8" opacity="0.3">
          <line x1="170" y1="170" x2="330" y2="170" />
          <line x1="170" y1="200" x2="330" y2="200" />
          <line x1="170" y1="230" x2="330" y2="230" />
          <line x1="170" y1="260" x2="330" y2="260" />
          <line x1="200" y1="140" x2="200" y2="290" />
          <line x1="250" y1="110" x2="250" y2="290" />
          <line x1="300" y1="140" x2="300" y2="290" />
          {/* Diamond Jali insets */}
          <polygon points="250,155 260,170 250,185 240,170" />
          <polygon points="250,215 260,230 250,245 240,230" />
          <polygon points="200,185 210,200 200,215 190,200" />
          <polygon points="300,185 310,200 300,215 290,200" />
        </g>

        {/* Carved Royal Throne Chair Inside Mehrab */}
        <g stroke="url(#mughalGold)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Throne Crest */}
          <path d="M 220 180 Q 250 165 280 180 L 275 225 L 225 225 Z" fill="#D4AF37" fillOpacity="0.2" />
          <circle cx="250" cy="195" r="8" strokeWidth="1.5" />
          {/* Royal Arms */}
          <path d="M 215 215 C 200 215, 200 235, 215 238 L 285 238 C 300 235, 300 215, 285 215" />
          {/* Throne Seat & Base */}
          <path d="M 210 238 L 290 238 L 285 255 L 215 255 Z" fill="#D4AF37" fillOpacity="0.35" />
          {/* Turned Mughal Pillars Legs */}
          <path d="M 222 255 L 220 285" strokeWidth="3.2" />
          <path d="M 278 255 L 280 285" strokeWidth="3.2" />
          <circle cx="221" cy="270" r="3" fill="#D4AF37" />
          <circle cx="279" cy="270" r="3" fill="#D4AF37" />
        </g>
      </g>

      {/* Mughal Calligraphic English & Urdu Wordmark */}
      <g textAnchor="middle">
        <text
          x="250"
          y="350"
          fontFamily="Noto Nastaliq Urdu, serif"
          fontSize="24"
          fontWeight="700"
          fill="url(#mughalGold)"
        >
          منصور زری فرنیچرز
        </text>
        <text
          x="250"
          y="386"
          fontFamily="Cinzel, serif"
          fontSize="20"
          fontWeight="800"
          fill="#FFE082"
          letterSpacing="4"
        >
          MANSOOR ZARI
        </text>
        <text
          x="250"
          y="410"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontSize="11.5"
          fontWeight="600"
          fill="#F7E2A9"
          letterSpacing="8"
          opacity="0.85"
        >
          ROYAL HERITAGE FURNITURES
        </text>

        {showTagline && (
          <text
            x="250"
            y="450"
            fontFamily="Cormorant Garamond, serif"
            fontStyle="italic"
            fontSize="15"
            fill="#D4AF37"
            letterSpacing="2"
          >
            Mughal Grandeur • Pure Sheesham Wood
          </text>
        )}
      </g>
    </svg>
  );
};
