/**
 * CalDreams Website JavaScript
 * Handles interactive features and UI enhancements
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // ===================================
    // Mobile Navigation Toggle
    // ===================================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking on a nav link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // ===================================
    // Smooth Scrolling for Anchor Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Resource Tabs Functionality
    // ===================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');

                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Add active class to clicked button and corresponding content
                this.classList.add('active');
                const targetContent = document.getElementById(targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

    // ===================================
    // Donation Amount Selection
    // ===================================
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.getElementById('custom-amount');

    if (amountButtons.length > 0) {
        amountButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();

                // Remove active class from all buttons
                amountButtons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                // Handle custom amount
                const amount = this.getAttribute('data-amount');
                if (amount === 'custom' && customAmountInput) {
                    customAmountInput.focus();
                } else if (customAmountInput) {
                    customAmountInput.value = amount;
                }
            });
        });

        // Handle custom amount input
        if (customAmountInput) {
            customAmountInput.addEventListener('input', function() {
                if (this.value) {
                    amountButtons.forEach(btn => {
                        if (btn.getAttribute('data-amount') === 'custom') {
                            btn.classList.add('active');
                        } else {
                            btn.classList.remove('active');
                        }
                    });
                }
            });
        }
    }

    // ===================================
    // Form Validation and Submission
    // ===================================
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic form validation
            const inputs = this.querySelectorAll('input[required], select[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#dc3545';
                } else {
                    input.style.borderColor = '#dee2e6';
                }
            });

            if (isValid) {
                // Show success message
                showNotification('Thank you! Your submission has been received.', 'success');

                // Reset form
                this.reset();

                // Remove active states from amount buttons if present
                amountButtons.forEach(btn => btn.classList.remove('active'));
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    });

    // ===================================
    // Notification System
    // ===================================
    function showNotification(message, type = 'success') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 2rem;
            background-color: ${type === 'success' ? '#28a745' : '#dc3545'};
            color: white;
            border-radius: 5px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;

        // Add to page
        document.body.appendChild(notification);

        // Remove after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }

    // Add notification animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ===================================
    // Scroll to Top Button
    // ===================================
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #0066cc, #004c99);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        z-index: 999;
    `;

    document.body.appendChild(scrollButton);

    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    // Scroll to top when button is clicked
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
    });

    scrollButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    });

    // ===================================
    // Animate Elements on Scroll
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.program-card, .story-card, .value-card, .team-member, ' +
        '.resource-card, .involvement-card, .opportunity-card, ' +
        '.impact-item, .partnership-card'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // ===================================
    // Counter Animation for Statistics
    // ===================================
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length > 0) {
        const countObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const finalValue = target.textContent;

                    // Extract number from text (handles $, +, %, etc.)
                    const match = finalValue.match(/[\d,]+/);
                    if (match) {
                        const numericValue = parseInt(match[0].replace(/,/g, ''));
                        const prefix = finalValue.split(match[0])[0];
                        const suffix = finalValue.split(match[0])[1];

                        animateCounter(target, numericValue, prefix, suffix);
                        countObserver.unobserve(target);
                    }
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(stat => countObserver.observe(stat));
    }

    function animateCounter(element, target, prefix = '', suffix = '') {
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = prefix + formatNumber(target) + suffix;
                clearInterval(timer);
            } else {
                element.textContent = prefix + formatNumber(Math.floor(current)) + suffix;
            }
        }, stepTime);
    }

    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    // ===================================
    // Email Validation Helper
    // ===================================
    const emailInputs = document.querySelectorAll('input[type="email"]');

    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.style.borderColor = '#dc3545';
                showValidationMessage(this, 'Please enter a valid email address');
            } else {
                this.style.borderColor = '#dee2e6';
                removeValidationMessage(this);
            }
        });
    });

    function showValidationMessage(input, message) {
        removeValidationMessage(input);

        const errorMsg = document.createElement('div');
        errorMsg.className = 'validation-message';
        errorMsg.textContent = message;
        errorMsg.style.cssText = `
            color: #dc3545;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        `;

        input.parentNode.appendChild(errorMsg);
    }

    function removeValidationMessage(input) {
        const existingMsg = input.parentNode.querySelector('.validation-message');
        if (existingMsg) {
            existingMsg.remove();
        }
    }

    // ===================================
    // Active Navigation Link Highlight
    // ===================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // ===================================
    // Console Message
    // ===================================
    console.log('%cCalDreams Website', 'font-size: 20px; font-weight: bold; color: #0066cc;');
    console.log('%cEmpowering California\'s youth from cradle to career', 'font-size: 14px; color: #6c757d;');
    console.log('%cVisit: caldreams.org', 'font-size: 12px; color: #0066cc;');
});

// ===================================
// Additional Utility Functions
// ===================================

/**
 * Debounce function to limit rate of function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
