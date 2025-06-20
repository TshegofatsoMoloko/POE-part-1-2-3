const darkModeToggle = document.getElementById('darkModeToggle');
        const contactBtn = document.getElementById('contactBtn');
        const contactModal = document.getElementById('contactModal');
        const closeModal = document.getElementById('closeModal');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
         // Dark Mode Toggle
         function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            darkModeToggle.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'
            localStorage.setItem('darkMode', isDarkMode);
        }
                // Check for saved dark mode preference
                if (localStorage.getItem('darkMode') === 'true') {
                    document.body.classList.add('dark-mode');
                    darkModeToggle.textContent = '☀️ Light Mode'
                }
                
                // Set up event listener
                darkModeToggle.addEventListener('click', toggleDarkMode)
                // Mobile Menu Toggle
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active')
        })
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active')
            })})
        
            // Update Copyright Year
            document.getElementById('currentYear').textContent = new Date().getFullYear()
            
            // Modal functionality
            contactBtn.addEventListener('click', (e) => {
                e.preventDefault();
                contactModal.style.display = 'block'
            })
            
        
        closeModal.addEventListener('click', () => {
            contactModal.style.display = 'none'
        })
        window.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.style.display = 'none'
            }
        })
        const serviceCards = document.querySelectorAll('.service-card')
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)'
                card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)'
            })
        ;card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)'
                card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'
            })
        })
                // Smooth scroll for navigation links
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function(e) {
                        e.preventDefault()
                        const targetId = this.getAttribute('href');
                        if (targetId !== '#') {
                            document.querySelector(targetId).scrollIntoView({
                                behavior: 'smooth'
                            })
                        } })
                    })
                    document.getElementById('contactForm').addEventListener('submit', function(event) {
                        event.preventDefault()
                        
                        // Form validation
                        const name = document.getElementById('name').value.trim()
                        const email = document.getElementById('email').value.trim()
                        const subject = document.getElementById('subject').value.trim()
                        const message = document.getElementById('message').value.trim()
                        
                        // Email validation
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                        
                        if (!name || !email || !subject || !message) {
                            showError('Please fill in all fields')
                            return
                        }
                        
                        if (!emailRegex.test(email)) {
                            showError('Please enter a valid email address')
                            return;
                        }
                        setTimeout(() => {
                            // Show success message
                            document.getElementById('successMessage').classList.add('active')
                            
                            // Reset form
                            document.getElementById('contactForm').reset()
                            
                            // Hide success message after 3 seconds
                            setTimeout(() => {
                                document.getElementById('successMessage').classList.remove('active')
                            }, 3000)
                        }, 1000);
                    })
                    function showError(message) {
                        const errorElement = document.createElement('div')
                        errorElement.className = 'error-message';
                        errorElement.style.color = '#ff6b6b';
                        errorElement.style.margin = '10px 0'
                        errorElement.style.textAlign = 'center';
                        errorElement.textContent = message;
                        
                        const form = document.getElementById('contactForm')
                        form.insertBefore(errorElement, form.lastElementChild)
                        
                        setTimeout(() => {
                            errorElement.style.opacity = '0';
                            setTimeout(() => errorElement.remove(), 500)
                        }, 3000)
                    }
                    const inputs = document.querySelectorAll('input, textarea')
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.style.transform = 'scale(1.02)'
            })
            input.addEventListener('blur', () => {
                input.style.transform = 'scale(1)'
            })
        })
        document.getElementById('backBtn').addEventListener('click', function(e) {
            e.preventDefault();
            window.history.back();
        });
        // Update copyright year automatically
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        // Image modal functionality
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const processImg = document.getElementById('processImage');
        const closeBtn = document.getElementById('closeModal');
        processImg.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        })
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'
        })
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }
        })
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.style.display === 'flex') {
                modal.style.display = 'none'
                document.body.style.overflow = 'auto'
            }
        })
        const paragraphs = document.querySelectorAll('p, h2, h3, h4');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                } else {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(20px)';
                }
            })
        }, { threshold: 0.1 });
        paragraphs.forEach(p => {
            p.style.opacity = '0';
            p.style.transform = 'translateY(20px)';
            p.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(p);
        })
        const backBtn = document.getElementById('backBtn');
        backBtn.addEventListener('mouseenter', () => {
            backBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
        });
        backBtn.addEventListener('mouseleave', () => {
            backBtn.style.boxShadow = 'none';
        })
        const cards = document.querySelectorAll('.service-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            })
        })

        