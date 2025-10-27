# CalDreams - Nonprofit Education Website

A modern, responsive website for CalDreams, a nonprofit organization dedicated to empowering California's youth from cradle to career through comprehensive educational support programs.

## Overview

CalDreams is inspired by successful education nonprofits like Oakland Promise, focusing on providing cradle-to-career support for students and families. The website showcases our programs, impact, and opportunities for community involvement.

## Features

### Pages
- **Home**: Hero section, mission statement, program overview, impact statistics, and success stories
- **About Us**: Organization mission, vision, values, team, and partners
- **Programs**: Detailed information about four core programs:
  - Early Start (Ages 0-5)
  - K-12 Success (Grades K-12)
  - College Pathways (High School & College)
  - Career Launch (College & Young Professionals)
- **Resources**: Tabbed resources for students, families, educators, and partners
- **Get Involved**: Donation forms, volunteer opportunities, partnership info, and program applications

### Design Features
- Fully responsive design (mobile, tablet, desktop)
- Modern gradient color scheme
- Interactive navigation with mobile hamburger menu
- Animated statistics counters
- Smooth scrolling
- Tab-based content organization
- Form validation
- Scroll-to-top button
- Animated elements on scroll

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with CSS variables, flexbox, and grid
- **JavaScript**: Vanilla JS for interactivity (no dependencies)
- **Font Awesome 6.4.0**: Icon library (via CDN)

## File Structure

```
CalDreams/
├── index.html              # Homepage
├── about.html              # About Us page
├── programs.html           # Programs page
├── resources.html          # Resources page
├── get-involved.html       # Get Involved page
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── script.js          # JavaScript functionality
├── images/                 # Image assets directory
│   └── README.md          # Image requirements guide
└── README.md              # This file
```

## Setup & Installation

1. Clone or download this repository
2. No build process required - pure HTML/CSS/JS
3. Open `index.html` in a web browser
4. For production, upload all files to your web hosting

## Customization

### Colors
The website uses CSS variables for easy color customization. Edit the `:root` section in `css/styles.css`:

```css
:root {
    --primary-color: #0066cc;      /* Main brand color */
    --secondary-color: #ff6b35;    /* Accent color */
    --accent-color: #ffa500;       /* Highlights */
    /* ... more variables */
}
```

### Content
- Update HTML files to change text content, statistics, and links
- Modify contact information in footer sections
- Replace placeholder links with actual URLs

### Images
- Add images to the `images/` directory
- See `images/README.md` for required image specifications
- Update image paths in HTML files as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features & Functionality

### Navigation
- Sticky header with smooth scroll
- Mobile-responsive hamburger menu
- Active page highlighting

### Forms
- Donation form with preset amounts
- Program application form
- Newsletter signup
- Client-side validation
- Success/error notifications

### Interactive Elements
- Tab switching (Resources page)
- Animated statistics counters
- Scroll animations
- Smooth scrolling to anchor links
- Scroll-to-top button

### Responsive Design
- Mobile-first approach
- Breakpoints at 480px, 768px, and 968px
- Flexible grid layouts
- Touch-friendly buttons and navigation

## Performance

- Minimal external dependencies (only Font Awesome via CDN)
- Optimized CSS with efficient selectors
- Vanilla JavaScript (no heavy frameworks)
- Fast load times
- Semantic HTML for SEO

## Accessibility

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance
- Responsive font sizing

## Future Enhancements

Potential improvements for future versions:
- [ ] CMS integration (WordPress, Strapi, etc.)
- [ ] Backend form submission handling
- [ ] Payment gateway integration for donations
- [ ] Blog/news section
- [ ] Event calendar
- [ ] Photo gallery
- [ ] Video testimonials
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced analytics integration

## Credits

- **Design Inspiration**: Oakland Promise (oaklandpromise.org)
- **Icons**: Font Awesome
- **Fonts**: System fonts (Segoe UI, etc.)

## License

This website template is created for CalDreams nonprofit organization.

## Contact

For questions or support:
- Email: info@caldreams.org
- Phone: (555) 123-4567
- Address: 123 Education Way, California, CA 94000

---

**CalDreams** - Empowering California's youth from cradle to career through education, support, and opportunity.
