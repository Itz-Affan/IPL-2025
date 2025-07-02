// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const header = document.getElementById('header');
const carouselTrack = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.indicator');

// Carousel Variables
let currentSlide = 0;
const totalSlides = 4;
const slideWidth = 25; // Each slide is 25% of track width

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCarousel();
    initializeAnimations();
    initializeCounters();
    initializeScrollEffects();
    initializeParticles();
});

// Mobile Navigation
function initializeNavigation() {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Reset hamburger
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-link, .footer-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        // If it's a .html page (like Team Insights), let browser handle navigation
        if (href && href.endsWith('.html')) {
            return;
        }
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Carousel Functions
function updateCarousel() {
    const translateX = -currentSlide * slideWidth;
    carouselTrack.style.transform = `translateX(${translateX}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
    
    // Add slide transition effects
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.opacity = '1';
            slide.style.transform = 'scale(1)';
        } else {
            slide.style.opacity = '0.7';
            slide.style.transform = 'scale(0.95)';
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
    addSlideAnimation();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
    addSlideAnimation();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
    addSlideAnimation();
}

function addSlideAnimation() {
    const currentSlideElement = document.querySelectorAll('.carousel-slide')[currentSlide];
    const slideContent = currentSlideElement.querySelector('.slide-content');
    
    // Reset animation
    slideContent.style.animation = 'none';
    slideContent.offsetHeight; // Trigger reflow
    slideContent.style.animation = 'fadeInUp 0.8s ease forwards';
}

function initializeCarousel() {
    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoPlay();
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoPlay();
    });

    // Indicator controls
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
            resetAutoPlay();
        });
    });

    // Auto-play
    startAutoPlay();

    // Pause auto-play on hover
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    carouselWrapper.addEventListener('mouseenter', stopAutoPlay);
    carouselWrapper.addEventListener('mouseleave', startAutoPlay);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            resetAutoPlay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            resetAutoPlay();
        }
    });

    // Touch/swipe support
    initializeTouchControls();
    
    // Initialize carousel
    updateCarousel();
}

// Auto-play functionality
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

// Touch controls for mobile
function initializeTouchControls() {
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    const carouselWrapper = document.querySelector('.carousel-wrapper');

    carouselWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    });

    carouselWrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diffX = touchStartX - touchEndX;
        const diffY = Math.abs(touchStartY - touchEndY);
        
        // Only handle horizontal swipes
        if (Math.abs(diffX) > swipeThreshold && diffY < 100) {
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            resetAutoPlay();
        }
    }
}

// Sticky Header with enhanced effects
function initializeScrollEffects() {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Header effects
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
        
        // Parallax effects
        addParallaxEffects();
        
        // Animate elements on scroll
        animateOnScroll();
    });
}

// Parallax effects
function addParallaxEffects() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.champion-image');
    const particles = document.querySelectorAll('.particle');
    
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    particles.forEach((particle, index) => {
        const speed = 0.1 + (index * 0.05);
        particle.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

// Enhanced scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.overview-card, .award-card, .bottom-team-card, .table-row-animate');
    
    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            setTimeout(() => {
                element.classList.add('loaded');
            }, index * 100);
        }
    });
}

// Counter animations
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    };
    
    // Trigger counters when hero section is visible
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach((counter, index) => {
                    setTimeout(() => {
                        animateCounter(counter);
                    }, index * 200);
                });
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
}

// Particle system
function initializeParticles() {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach(particle => {
        // Random initial position
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation duration
        const duration = 8 + Math.random() * 4;
        particle.style.animationDuration = duration + 's';
        
        // Random delay
        const delay = Math.random() * 8;
        particle.style.animationDelay = delay + 's';
    });
}

// Enhanced animations
function initializeAnimations() {
    // Intersection Observer for better performance
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                
                // Add stagger effect for grid items
                if (entry.target.parentElement.classList.contains('overview-grid') ||
                    entry.target.parentElement.classList.contains('awards-grid')) {
                    const siblings = Array.from(entry.target.parentElement.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.animationDelay = (index * 0.1) + 's';
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.overview-card, .award-card, .bottom-team-card');
    animatedElements.forEach(element => {
        element.classList.add('loading');
        observer.observe(element);
    });
}

// Interactive hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Team logo interactions
    document.querySelectorAll('.table-team-logo, .award-team-logo, .bottom-team-logo').forEach(logo => {
        logo.addEventListener('click', () => {
            logo.style.transform = 'rotate(360deg) scale(1.2)';
            logo.style.transition = 'transform 0.6s ease';
            
            setTimeout(() => {
                logo.style.transform = 'rotate(0deg) scale(1)';
            }, 600);
        });
    });
    
    // Award card interactions
    document.querySelectorAll('.award-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.award-icon');
            icon.style.transform = 'scale(1.2) rotate(10deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.award-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Table row effects
    document.querySelectorAll('.standings-table tr').forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'scale(1.02)';
            row.style.boxShadow = '0 10px 30px rgba(255, 107, 53, 0.2)';
        });
        
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'scale(1)';
            row.style.boxShadow = 'none';
        });
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 4px;
    background: linear-gradient(90deg, #ff6b35, #f7931e, #ffd700);
    z-index: 9999;
    transition: width 0.1s ease;
    box-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// Add dynamic background effects
function createFloatingElements() {
    const container = document.querySelector('.animated-bg');
    
    setInterval(() => {
        const element = document.createElement('div');
        element.className = 'cricket-ball-bg';
        element.style.left = Math.random() * 100 + '%';
        element.style.animationDuration = (4 + Math.random() * 4) + 's';
        
        container.appendChild(element);
        
        // Remove element after animation
        setTimeout(() => {
            element.remove();
        }, 8000);
    }, 3000);
}

// Initialize floating elements
createFloatingElements();

// Add click effects to buttons
document.querySelectorAll('.rainbow-btn, .rainbow-btn-small').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Console message
console.log('🏏 IPL 2025 Recap - Loaded with enhanced animations and effects! 🏆');
console.log('🎨 Features: Gradient animations, particle effects, smooth transitions, and interactive elements');
// Loading Spinner and Page Transitions with Cricket Sound Effects
class LoadingManager {
  constructor() {
    this.loadingOverlay = null
    this.isLoading = false
    this.soundEnabled = true
    this.audioContext = null
    this.sounds = {}
    this.init()
  }

  init() {
    this.createLoadingOverlay()
    this.initAudioSystem()
    this.setupPageTransitions()
    this.handleInitialLoad()
  }

  // Initialize Audio System with Cricket Sound Effects
  async initAudioSystem() {
    try {
      // Create audio context for better browser compatibility
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()

      // Create cricket sound effects using Web Audio API
      this.createCricketSounds()

      // Add sound toggle button
      this.addSoundToggle()

      console.log("🔊 Cricket sound effects initialized!")
    } catch (error) {
      console.log("🔇 Audio not supported, continuing without sound effects")
      this.soundEnabled = false
    }
  }

  createCricketSounds() {
    // Cricket Ball Bounce Sound (using oscillator)
    this.sounds.ballBounce = () => {
      if (!this.soundEnabled || !this.audioContext) return

      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(this.audioContext.destination)

      // Create bounce sound effect
      oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 0.1)

      gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1)

      oscillator.start(this.audioContext.currentTime)
      oscillator.stop(this.audioContext.currentTime + 0.1)
    }

    // Cricket Bat Hit Sound
    this.sounds.batHit = () => {
      if (!this.soundEnabled || !this.audioContext) return

      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()
      const filter = this.audioContext.createBiquadFilter()

      oscillator.connect(filter)
      filter.connect(gainNode)
      gainNode.connect(this.audioContext.destination)

      // Create bat hit sound
      oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(200, this.audioContext.currentTime + 0.05)

      filter.frequency.setValueAtTime(1000, this.audioContext.currentTime)
      filter.Q.setValueAtTime(5, this.audioContext.currentTime)

      gainNode.gain.setValueAtTime(0.15, this.audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2)

      oscillator.start(this.audioContext.currentTime)
      oscillator.stop(this.audioContext.currentTime + 0.2)
    }

    // Crowd Cheer Sound (ambient)
    this.sounds.crowdCheer = () => {
      if (!this.soundEnabled || !this.audioContext) return

      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()
      const filter = this.audioContext.createBiquadFilter()

      oscillator.connect(filter)
      filter.connect(gainNode)
      gainNode.connect(this.audioContext.destination)

      // Create crowd ambience
      oscillator.type = "sawtooth"
      oscillator.frequency.setValueAtTime(150, this.audioContext.currentTime)

      filter.type = "lowpass"
      filter.frequency.setValueAtTime(500, this.audioContext.currentTime)

      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(0.05, this.audioContext.currentTime + 0.5)
      gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 2)

      oscillator.start(this.audioContext.currentTime)
      oscillator.stop(this.audioContext.currentTime + 2)
    }

    // Stadium Whistle Sound
    this.sounds.whistle = () => {
      if (!this.soundEnabled || !this.audioContext) return

      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(this.audioContext.destination)

      oscillator.frequency.setValueAtTime(2000, this.audioContext.currentTime)
      oscillator.frequency.linearRampToValueAtTime(2200, this.audioContext.currentTime + 0.1)
      oscillator.frequency.linearRampToValueAtTime(2000, this.audioContext.currentTime + 0.2)

      gainNode.gain.setValueAtTime(0.08, this.audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3)

      oscillator.start(this.audioContext.currentTime)
      oscillator.stop(this.audioContext.currentTime + 0.3)
    }

    // Success Chime (when loading completes)
    this.sounds.success = () => {
      if (!this.soundEnabled || !this.audioContext) return

      const frequencies = [523.25, 659.25, 783.99] // C, E, G chord

      frequencies.forEach((freq, index) => {
        setTimeout(() => {
          const oscillator = this.audioContext.createOscillator()
          const gainNode = this.audioContext.createGain()

          oscillator.connect(gainNode)
          gainNode.connect(this.audioContext.destination)

          oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime)
          gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime)
          gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5)

          oscillator.start(this.audioContext.currentTime)
          oscillator.stop(this.audioContext.currentTime + 0.5)
        }, index * 100)
      })
    }
  }

  addSoundToggle() {
    const soundToggleHTML = `
      <div class="sound-toggle" id="soundToggle">
        <button class="sound-btn" onclick="loadingManager.toggleSound()">
          <i class="fas fa-volume-up" id="soundIcon"></i>
          <span class="sound-tooltip">Cricket Sound Effects</span>
        </button>
      </div>
    `

    document.body.insertAdjacentHTML("beforeend", soundToggleHTML)
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled
    const soundIcon = document.getElementById("soundIcon")
    const soundBtn = document.querySelector(".sound-btn")

    if (this.soundEnabled) {
      soundIcon.className = "fas fa-volume-up"
      soundBtn.classList.remove("muted")
      this.sounds.success() // Play test sound
      localStorage.setItem("cricketSoundsEnabled", "true")
    } else {
      soundIcon.className = "fas fa-volume-mute"
      soundBtn.classList.add("muted")
      localStorage.setItem("cricketSoundsEnabled", "false")
    }
  }

  createLoadingOverlay() {
    // Create loading overlay HTML with sound indicator
    const loadingHTML = `
      <div class="loading-overlay" id="loadingOverlay">
        <div class="cricket-spinner">
          <div class="cricket-ball" id="cricketBall"></div>
          <div class="spinner-orbit"></div>
        </div>
        <div class="loading-text" id="loadingText">Loading IPL 2025</div>
        <div class="loading-subtext" id="loadingSubtext">Preparing your cricket experience...</div>
        <div class="loading-progress">
          <div class="loading-progress-bar"></div>
        </div>
        <div class="loading-dots">
          <div class="loading-dot"></div>
          <div class="loading-dot"></div>
          <div class="loading-dot"></div>
        </div>
        <div class="sound-indicator" id="soundIndicator">
          <i class="fas fa-volume-up"></i>
          <span>Cricket sounds enabled</span>
        </div>
      </div>
    `

    // Insert at the beginning of body
    document.body.insertAdjacentHTML("afterbegin", loadingHTML)
    this.loadingOverlay = document.getElementById("loadingOverlay")

    // Set up sound preferences from localStorage
    const savedSoundPref = localStorage.getItem("cricketSoundsEnabled")
    if (savedSoundPref === "false") {
      this.soundEnabled = false
    }
  }

  show(text = "Loading...", subtext = "Please wait...") {
    if (this.isLoading) return

    this.isLoading = true
    const loadingText = document.getElementById("loadingText")
    const loadingSubtext = document.getElementById("loadingSubtext")
    const soundIndicator = document.getElementById("soundIndicator")

    if (loadingText) loadingText.textContent = text
    if (loadingSubtext) loadingSubtext.textContent = subtext

    // Update sound indicator
    if (soundIndicator) {
      soundIndicator.style.display = this.soundEnabled ? "flex" : "none"
    }

    this.loadingOverlay.classList.remove("hidden")
    document.body.style.overflow = "hidden"

    // Resume audio context if needed (browser requirement)
    if (this.audioContext && this.audioContext.state === "suspended") {
      this.audioContext.resume()
    }

    // Start cricket sound sequence
    this.startCricketSoundSequence()
  }

  startCricketSoundSequence() {
    if (!this.soundEnabled) return

    // Play initial crowd cheer
    setTimeout(() => this.sounds.crowdCheer(), 200)

    // Set up ball bounce sounds synchronized with animation
    this.ballBounceInterval = setInterval(() => {
      this.sounds.ballBounce()
    }, 1500) // Matches cricket ball animation duration

    // Occasional bat hit sounds
    this.batHitTimeout = setTimeout(() => {
      this.sounds.batHit()

      // Set up recurring bat hits
      this.batHitInterval = setInterval(() => {
        if (Math.random() > 0.7) {
          // 30% chance
          this.sounds.batHit()
        }
      }, 2000)
    }, 3000)

    // Occasional whistle
    this.whistleTimeout = setTimeout(() => {
      this.sounds.whistle()
    }, 5000)
  }

  stopCricketSounds() {
    // Clear all sound intervals and timeouts
    if (this.ballBounceInterval) {
      clearInterval(this.ballBounceInterval)
      this.ballBounceInterval = null
    }

    if (this.batHitInterval) {
      clearInterval(this.batHitInterval)
      this.batHitInterval = null
    }

    if (this.batHitTimeout) {
      clearTimeout(this.batHitTimeout)
      this.batHitTimeout = null
    }

    if (this.whistleTimeout) {
      clearTimeout(this.whistleTimeout)
      this.whistleTimeout = null
    }
  }

  hide() {
    if (!this.isLoading) return

    // Stop cricket sounds
    this.stopCricketSounds()

    // Play success sound
    if (this.soundEnabled) {
      setTimeout(() => this.sounds.success(), 100)
    }

    setTimeout(() => {
      this.loadingOverlay.classList.add("hidden")
      document.body.style.overflow = ""
      this.isLoading = false

      // Trigger page content animation
      this.animatePageContent()
    }, 500)
  }

  animatePageContent() {
    // Add stagger animation to cards
    const cards = document.querySelectorAll(".team-card, .award-card, .stat-card, .news-item")
    cards.forEach((card, index) => {
      card.classList.add("stagger-animation")
      setTimeout(() => {
        card.classList.add("animate")
      }, index * 100)
    })

    // Animate main sections
    const sections = document.querySelectorAll("section")
    sections.forEach((section, index) => {
      section.classList.add("page-transition")
      setTimeout(() => {
        section.classList.add("loaded")
      }, index * 200)
    })
  }

  setupPageTransitions() {
    // Handle all internal links
    document.addEventListener("click", (e) => {
      const link = e.target.closest("a")
      if (!link) return

      const href = link.getAttribute("href")

      // Check if it's an internal link to another page
      if (href && (href.includes(".html") || href.includes("team-insights"))) {
        e.preventDefault()
        this.navigateToPage(href, link)
      }
    })

    // Handle browser back/forward buttons
    window.addEventListener("popstate", (e) => {
      if (e.state && e.state.page) {
        this.loadPage(e.state.page, false)
      }
    })
  }

  navigateToPage(href, linkElement) {
    // Determine loading messages based on destination
    let loadingText = "Loading..."
    let subtext = "Please wait..."

    if (href.includes("team-insights")) {
      loadingText = "Loading Team Insights"
      subtext = "Analyzing team performances..."
    } else if (href.includes("index")) {
      loadingText = "Loading IPL 2025 Recap"
      subtext = "Preparing season highlights..."
    }

    // Show loading spinner with sounds
    this.show(loadingText, subtext)

    // Simulate loading time and navigate
    setTimeout(() => {
      window.location.href = href
    }, 1500)
  }

  handleInitialLoad() {
    // Show loading on initial page load
    window.addEventListener("load", () => {
      // Hide loading after everything is loaded
      setTimeout(() => {
        this.hide()
      }, 1000)
    })

    // Show loading immediately if page is still loading
    if (document.readyState === "loading") {
      this.show("Loading IPL 2025", "Preparing your cricket experience...")
    }
  }

  // Enhanced method with cricket sound effects
  loadWithProgress(steps, onComplete) {
    this.show("Processing...", "Loading data...")

    let currentStep = 0
    const progressBar = document.querySelector(".loading-progress-bar")

    const processStep = () => {
      if (currentStep < steps.length) {
        const step = steps[currentStep]

        // Update loading text
        document.getElementById("loadingText").textContent = step.text || "Processing..."
        document.getElementById("loadingSubtext").textContent = step.subtext || "Please wait..."

        // Play appropriate sound for step
        if (step.sound && this.sounds[step.sound]) {
          this.sounds[step.sound]()
        }

        // Update progress
        if (progressBar) {
          progressBar.style.width = `${((currentStep + 1) / steps.length) * 100}%`
        }

        // Execute step function if provided
        if (step.action) {
          step.action()
        }

        currentStep++
        setTimeout(processStep, step.duration || 500)
      } else {
        // All steps completed
        setTimeout(() => {
          this.hide()
          if (onComplete) onComplete()
        }, 500)
      }
    }

    processStep()
  }
}

// Initialize loading manager
const loadingManager = new LoadingManager()

// Export for global use
window.loadingManager = loadingManager

// Enhanced cricket-themed loading messages with sound cues
const cricketLoadingMessages = [
  {
    text: "Loading IPL 2025",
    subtext: "Preparing the pitch...",
    sound: "crowdCheer",
  },
  {
    text: "Loading Teams",
    subtext: "Gathering the squads...",
    sound: "whistle",
  },
  {
    text: "Loading Stats",
    subtext: "Calculating strike rates...",
    sound: "batHit",
  },
  {
    text: "Loading Highlights",
    subtext: "Replaying the best moments...",
    sound: "ballBounce",
  },
  {
    text: "Almost Ready!",
    subtext: "Final preparations...",
    sound: "success",
  },
]

// Function to show random cricket loading message with sound
function showRandomCricketLoading() {
  const randomMessage = cricketLoadingMessages[Math.floor(Math.random() * cricketLoadingMessages.length)]
  loadingManager.show(randomMessage.text, randomMessage.subtext)

  // Play associated sound
  if (randomMessage.sound && loadingManager.sounds[randomMessage.sound]) {
    setTimeout(() => {
      loadingManager.sounds[randomMessage.sound]()
    }, 300)
  }
}

// Add loading to form submissions with cricket sounds
document.addEventListener("submit", (e) => {
  const form = e.target
  if (form.tagName === "FORM") {
    loadingManager.show("Submitting...", "Processing your request...")
  }
})

// Enhanced image loading with progress sounds
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img")
  let loadedImages = 0

  if (images.length > 0) {
    images.forEach((img) => {
      if (img.complete) {
        loadedImages++
      } else {
        img.addEventListener("load", () => {
          loadedImages++

          // Play ball bounce sound for each loaded image
          if (loadingManager.soundEnabled && loadedImages % 3 === 0) {
            loadingManager.sounds.ballBounce()
          }

          if (loadedImages === images.length) {
            // All images loaded - play success sound
            setTimeout(() => {
              if (loadingManager.isLoading) {
                loadingManager.hide()
              }
            }, 500)
          }
        })
      }
    })
  }
})

// Cricket commentary sound effects for specific actions
const cricketCommentary = {
  teamCardHover: () => {
    if (loadingManager.soundEnabled && Math.random() > 0.8) {
      loadingManager.sounds.ballBounce()
    }
  },

  buttonClick: () => {
    if (loadingManager.soundEnabled) {
      loadingManager.sounds.batHit()
    }
  },

  pageComplete: () => {
    if (loadingManager.soundEnabled) {
      setTimeout(() => loadingManager.sounds.crowdCheer(), 200)
    }
  },
}

// Add event listeners for interactive cricket sounds
document.addEventListener("DOMContentLoaded", () => {
  // Team card hover sounds
  document.querySelectorAll(".team-card").forEach((card) => {
    card.addEventListener("mouseenter", cricketCommentary.teamCardHover)
  })

  // Button click sounds
  document.querySelectorAll("button, .rainbow-btn, .insights-btn").forEach((btn) => {
    btn.addEventListener("click", cricketCommentary.buttonClick)
  })

  // Page completion sound
  setTimeout(cricketCommentary.pageComplete, 2000)
})

console.log("🏏🔊 Loading Manager with Cricket Sound Effects initialized!")
