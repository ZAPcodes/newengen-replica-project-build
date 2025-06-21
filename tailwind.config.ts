import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					dark: '#0F0F0F',
					medium: '#1a1a1a',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					cyan: '#00FFC6',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					blue: '#12C2E9',
					rust: '#FF6B35',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Neo-Mint Tech color scheme with proper contrast
				'neo-mint': '#00FFC6',
				'dark-bg': '#0F0F0F',
				'accent-blue': '#12C2E9',
				'white-clean': '#F9FAFB',
				'muted-gray': '#A3A3A3',
				'light-blue': '#E0F7FF',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 198, 0.3)' },
					'50%': { boxShadow: '0 0 40px rgba(0, 255, 198, 0.6)' }
				},
				'neo-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(0, 255, 198, 0.4)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(0, 255, 198, 0.8)',
						transform: 'scale(1.02)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'neo-pulse': 'neo-pulse 3s ease-in-out infinite'
			},
			fontFamily: {
				'tech': ['Space Grotesk', 'sans-serif'],
				'code': ['JetBrains Mono', 'monospace']
			},
			backgroundImage: {
				'gradient-neo': 'linear-gradient(135deg, #00FFC6 0%, #12C2E9 100%)',
				'gradient-dark': 'linear-gradient(135deg, #0F0F0F 0%, #1a1a1a 100%)',
				'gradient-accent': 'linear-gradient(135deg, #12C2E9 0%, #00FFC6 100%)'
			},
			boxShadow: {
				'neo-glow': '0 0 30px rgba(0, 255, 198, 0.3)',
				'neo-glow-lg': '0 0 50px rgba(0, 255, 198, 0.5)',
				'accent-glow': '0 0 30px rgba(18, 194, 233, 0.3)',
				'accent-glow-lg': '0 0 50px rgba(18, 194, 233, 0.5)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;