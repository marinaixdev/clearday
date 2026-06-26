/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background:                  '#f9f9f9',
        'surface-dim':               '#dadada',
        'surface-bright':            '#f9f9f9',
        'surface-container-lowest':  '#ffffff',
        'surface-container-low':     '#f3f3f3',
        'surface-container':         '#eeeeee',
        'surface-container-high':    '#e8e8e8',
        'surface-container-highest': '#e2e2e2',
        'on-surface':                '#1a1c1c',
        'on-surface-variant':        '#444748',
        outline:                     '#747878',
        'outline-variant':           '#c4c7c7',
        secondary:                   '#5e5e5e',
        'secondary-container':       '#e3e2e2',
        primary:                     '#0F6E56',
        'on-primary':                '#ffffff',
        'primary-container':         '#E1F5EE',
        'on-primary-container':      '#085041',
        error:                       '#ba1a1a',
        'error-container':           '#ffdad6',
        'on-error-container':        '#93000a',
        'priority-low':              '#22C55E',
        'priority-medium':           '#F59E0B',
        'priority-high':             '#EF4444',
      },

      spacing: {
        xs:  '8px',
        sm:  '12px',
        md:  '16px',
        lg:  '24px',
        xl:  '32px',
        xxl: '48px',
      },

      borderRadius: {
        sm:      '4px',
        DEFAULT: '8px',
        md:      '12px',
        lg:      '16px',
        xl:      '24px',
        full:    '9999px',
      },

      fontSize: {
        'headline-md': ['20px', {
          lineHeight:    '28px',
          letterSpacing: '-0.01em',
          fontWeight:    '500',
        }],
        'body-md': ['14px', {
          lineHeight: '1.6',
          fontWeight: '400',
        }],
        'label-sm': ['12px', {
          lineHeight:    '16px',
          letterSpacing: '0.02em',
          fontWeight:    '400',
        }],
        'label-sm-bold': ['12px', {
          lineHeight:    '16px',
          letterSpacing: '0.02em',
          fontWeight:    '600',
        }],
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },

      boxShadow: {
        'level-2': '0px 4px 12px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
};
