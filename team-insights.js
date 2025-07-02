// IPL 2025 Team Data - Updated with Real Data
const iplTeamsData = {
  playoffTeams: [
    {
      name: "Punjab Kings",
      position: "1st",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PBKS.jpg-kMqH6PBeHd9yjthqGAHYSbCJMHSNA5.jpeg",
      matches: 13,
      wins: 9,
      points: 19,
      status: "RUNNER-UP",
      badge: "runner-up-badge",
      cardClass: "runner-up-card",
      teamBadge: "runner-up-team",
      summary:
        "Punjab Kings delivered their best-ever IPL campaign, finishing as league leaders and reaching their maiden final. Their consistent performance throughout the season, combined with strategic team building, finally paid dividends as they broke their playoff drought in spectacular fashion.",
      highlights: [
        "Finished 1st in league stage with 19 points",
        "Won Qualifier 1 to reach maiden IPL final",
        "Best win percentage in franchise history",
        "Strong bowling attack led by pace duo",
        "Excellent home record at Mohali",
      ],
      performances: [
        {
          type: "batting",
          icon: "fas fa-baseball-bat-ball",
          title: "Top Batsman",
          name: "Shikhar Dhawan",
          stats: "580+ runs • Consistent opener",
        },
        {
          type: "bowling",
          icon: "fas fa-bowling-ball",
          title: "Top Bowler",
          name: "Kagiso Rabada",
          stats: "20+ wickets • Death bowling specialist",
        },
        {
          type: "captain",
          icon: "fas fa-crown",
          title: "Leadership",
          name: "Shikhar Dhawan",
          stats: "Tactical brilliance • Team unity",
        },
      ],
      finalNote: {
        icon: "fas fa-heart-broken",
        title: "Final Heartbreak:",
        text: "Lost the final to RCB by just 6 runs in a thrilling encounter, but their journey to the final was nothing short of remarkable.",
      },
    },
    {
      name: "Royal Challengers Bengaluru",
      position: "2nd",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rcb.jpg-TdXvb9kippdDouslTZr029fNYenBFM.jpeg",
      matches: 14,
      wins: 9,
      points: 19,
      status: "CHAMPIONS",
      badge: "champion-badge",
      cardClass: "champion-card",
      teamBadge: "champion-team",
      summary:
        "After 18 seasons of heartbreak, Royal Challengers Bengaluru finally lifted their maiden IPL trophy. Their journey from league stage qualification to championship glory epitomized resilience, team spirit, and the never-give-up attitude that defines RCB.",
      highlights: [
        "Won maiden IPL title after 18 seasons",
        "Thrilling 6-run victory in the final",
        "Virat Kohli's emotional celebration",
        "Strong finish to league campaign",
        "Perfect team balance achieved",
      ],
      performances: [
        {
          type: "batting",
          icon: "fas fa-crown",
          title: "King Kohli",
          name: "Virat Kohli",
          stats: "650+ runs • Final match winner",
        },
        {
          type: "bowling",
          icon: "fas fa-fire",
          title: "Pace Spearhead",
          name: "Mohammed Siraj",
          stats: "18+ wickets • Final spell hero",
        },
        {
          type: "captain",
          icon: "fas fa-medal",
          title: "Captain Cool",
          name: "Faf du Plessis",
          stats: "Leadership • Tactical mastermind",
        },
      ],
      finalNote: {
        icon: "fas fa-trophy",
        title: "Historic Moment:",
        text: "The emotional scenes at the Narendra Modi Stadium as RCB finally broke their title drought will be remembered forever in IPL history.",
        isChampion: true,
      },
    },
    {
      name: "Gujarat Titans",
      position: "3rd",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gujrat%20titans.jpg-IpglHZk2qmm4tTV8Fy4jEC6RGYKSw1.jpeg",
      matches: 14,
      wins: 9,
      points: 18,
      status: "ELIMINATOR",
      badge: "playoff-badge",
      cardClass: "playoff-card",
      teamBadge: "playoff-team",
      summary:
        "Gujarat Titans continued their impressive IPL journey with another strong campaign. Despite falling short in the eliminator, they showcased excellent individual performances and maintained their reputation as a well-balanced, competitive unit.",
      highlights: [
        "Secured playoff berth for 3rd consecutive year",
        "Sai Sudharsan won Orange Cap (759 runs)",
        "Prasidh Krishna claimed Purple Cap (25 wickets)",
        "Highest Net Run Rate (+0.845)",
        "Strong team depth and balance",
      ],
      performances: [
        {
          type: "orange-cap",
          icon: "fas fa-crown",
          title: "Orange Cap",
          name: "Sai Sudharsan",
          stats: "759 runs • Emerging Player Award",
          cardClass: "orange-cap-card",
        },
        {
          type: "purple-cap",
          icon: "fas fa-bowling-ball",
          title: "Purple Cap",
          name: "Prasidh Krishna",
          stats: "25 wickets • 7.2 economy",
          cardClass: "purple-cap-card",
        },
        {
          type: "captain",
          icon: "fas fa-shield-alt",
          title: "Captain",
          name: "Hardik Pandya",
          stats: "All-round contributions",
        },
      ],
      finalNote: {
        icon: "fas fa-star",
        title: "Individual Excellence:",
        text: "GT's season was highlighted by exceptional individual performances, with both Orange and Purple Cap winners from their squad.",
      },
    },
    {
      name: "Mumbai Indians",
      position: "4th",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bIJ53hZwWOUua4iGyrbwiB9qfUblYg.png",
      matches: 14,
      wins: 8,
      points: 16,
      status: "QUALIFIER 2",
      badge: "playoff-badge",
      cardClass: "playoff-card",
      teamBadge: "playoff-team",
      summary:
        "Mumbai Indians' campaign was defined by Suryakumar Yadav's exceptional batting display that earned him the MVP award. Despite falling short in Qualifier 2, MI showed glimpses of their championship pedigree with some outstanding individual performances.",
      highlights: [
        "Suryakumar Yadav won MVP award",
        "Highest Net Run Rate among playoff teams (+1.142)",
        "Reached Qualifier 2",
        "Explosive batting performances",
        "Strong performance at Wankhede",
      ],
      performances: [
        {
          type: "mvp",
          icon: "fas fa-star",
          title: "MVP Winner",
          name: "Suryakumar Yadav",
          stats: "717 runs • 168 Strike Rate",
          cardClass: "mvp-card",
        },
        {
          type: "bowling",
          icon: "fas fa-bowling-ball",
          title: "Pace Attack",
          name: "Jasprit Bumrah",
          stats: "Death bowling specialist",
        },
        {
          type: "captain",
          icon: "fas fa-shield-alt",
          title: "Captain",
          name: "Rohit Sharma",
          stats: "Experienced leadership",
        },
      ],
      finalNote: {
        icon: "fas fa-star",
        title: "MVP Magic:",
        text: "Suryakumar Yadav's 717 runs at a strike rate of 168 made him the standout performer of IPL 2025, earning him the Most Valuable Player award.",
      },
    },
  ],

  middleTeams: [
    {
      name: "Delhi Capitals",
      position: "5th",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/delhi%20capitals.jpg-E9nE5YLlgd9bVNHhJZncBx5QK9qYyj.jpeg",
      matches: 13,
      wins: 7,
      points: 15,
      summary:
        "Delhi Capitals endured another season of what-ifs, finishing just outside the playoff spots. Despite showing promise in patches and having quality players, they couldn't maintain consistency when it mattered most, missing out on playoffs by a narrow margin.",
      highlights: [
        "Positive Net Run Rate (+0.234)",
        "Strong individual performances",
        "Competitive at home venue",
        "Young talent development",
        "Close finishes in several matches",
      ],
    },
    {
      name: "Lucknow Super Giants",
      position: "6th",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lsg.jpg-J1JqaxUebZuLqWFkSHY6aKhUbwWoi4.jpeg",
      matches: 14,
      wins: 6,
      points: 12,
      summary:
        "Lucknow Super Giants had a challenging season, finishing in the bottom half of the table. After their impressive debut seasons, LSG struggled to find the right combination and consistency, leading to a disappointing campaign that fell short of expectations.",
      highlights: [
        "Focus on youth development",
        "Some notable individual performances",
        "Decent home record",
        "Team restructuring for future",
        "Learning experience for young players",
      ],
    },
  ],

  bottomTeams: [
    {
      name: "Sunrisers Hyderabad",
      position: "7th",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/srh.jpg-nLO0EIsI0SuSoUsudBDVLOEp8HKH1D.jpeg",
      points: 13,
      wins: 4,
      summary:
        "SRH showed flashes of brilliance but couldn't maintain consistency. Their bowling attack had moments of excellence, but batting failures cost them crucial matches.",
      highlight: "Occasional explosive performances",
    },
    {
      name: "Kolkata Knight Riders",
      position: "8th",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kkr.jpg-TiOw3jLP1Jcb5YunEtcPMA482JCf7o.jpeg",
      points: 12,
      wins: 5,
      summary:
        "KKR's season was marked by inconsistency and failure to capitalize on good starts. Despite having experienced players, they couldn't find the winning formula.",
      highlight: "Struggled with team combination",
    },
    {
      name: "Rajasthan Royals",
      position: "9th",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rr.jpg-mT5q9nCPbZT31XkdZ5sG8f7eIrPjcv.jpeg",
      points: 8,
      wins: 4,
      summary:
        "RR endured a forgettable season with their lowest points tally in recent years. Poor team balance and lack of match-winners hurt their campaign significantly.",
      highlight: "Significant decline from previous seasons",
    },
    {
      name: "Chennai Super Kings",
      position: "10th",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/csk.jpg-xuMwYqNU1aK2PLSmgriY5Pfd1T4AHp.jpeg",
      points: 8,
      wins: 4,
      summary:
        "CSK's worst-ever IPL campaign saw them finish last. Age caught up with several key players, and the team struggled to adapt to changing dynamics of T20 cricket.",
      highlight: "Historic low for the franchise",
      isWorst: true,
    },
  ],
}

// Populate Playoff Teams
function populatePlayoffTeams() {
  const playoffSection = document.querySelector("#playoff-teams .container")
  const existingCards = playoffSection.querySelectorAll(".team-card")

  // Remove existing cards except the title
  existingCards.forEach((card) => card.remove())

  iplTeamsData.playoffTeams.forEach((team) => {
    const teamCard = document.createElement("div")
    teamCard.className = `team-card ${team.cardClass}`
    teamCard.setAttribute("data-team", team.name.toLowerCase().replace(/\s+/g, ""))

    const performanceCards = team.performances
      .map(
        (perf) => `
      <div class="performance-card ${perf.cardClass || ""}">
        <div class="performance-icon ${perf.type}">
          <i class="${perf.icon}"></i>
        </div>
        <h5>${perf.title}</h5>
        <p class="player-name">${perf.name}</p>
        <p class="player-stats">${perf.stats}</p>
      </div>
    `,
      )
      .join("")

    const highlightsList = team.highlights
      .map(
        (highlight) => `
      <li><i class="fas fa-trophy"></i> ${highlight}</li>
    `,
      )
      .join("")

    teamCard.innerHTML = `
      <div class="team-header">
        <div class="team-logo-container">
          <img src="${team.logo}" alt="${team.name}" class="team-logo">
          <div class="position-badge ${team.badge}">${team.position}</div>
        </div>
        <div class="team-info">
          <h3 class="team-name">${team.name}</h3>
          <p class="team-subtitle">${team.status === "CHAMPIONS" ? "Champions • Historic Victory" : team.status === "RUNNER-UP" ? "Runners-up • League Leaders" : "Playoff Team • Strong Campaign"}</p>
          <div class="team-stats-quick">
            <span class="stat-quick">${team.matches} Matches</span>
            <span class="stat-quick">${team.wins} Wins</span>
            <span class="stat-quick">${team.points} Points</span>
          </div>
        </div>
        <div class="team-badge ${team.teamBadge}">
          <i class="fas fa-${team.status === "CHAMPIONS" ? "trophy" : "medal"}"></i>
          <span>${team.status}</span>
        </div>
      </div>
      
      <div class="team-content">
        <div class="team-summary">
          <h4><i class="fas fa-${team.status === "CHAMPIONS" ? "trophy" : "chart-line"}"></i> ${team.status === "CHAMPIONS" ? "Historic Achievement" : "Season Summary"}</h4>
          <p>${team.summary}</p>
        </div>
        
        <div class="team-highlights">
          <h4><i class="fas fa-${team.status === "CHAMPIONS" ? "fire" : "star"}"></i> ${team.status === "CHAMPIONS" ? "Championship Highlights" : "Key Highlights"}</h4>
          <ul class="highlights-list">
            ${highlightsList}
          </ul>
        </div>
        
        <div class="team-performances">
          <h4><i class="fas fa-${team.status === "CHAMPIONS" ? "stars" : team.name === "Gujarat Titans" ? "award" : team.name === "Mumbai Indians" ? "trophy" : "users"}"></i> ${team.status === "CHAMPIONS" ? "Championship Heroes" : team.name === "Gujarat Titans" ? "Award Winners" : team.name === "Mumbai Indians" ? "MVP Performance" : "Notable Performances"}</h4>
          <div class="performance-grid">
            ${performanceCards}
          </div>
        </div>
        
        <div class="final-note ${team.finalNote.isChampion ? "champion-note" : ""}">
          <div class="note-icon">
            <i class="${team.finalNote.icon}"></i>
          </div>
          <p><strong>${team.finalNote.title}</strong> ${team.finalNote.text}</p>
        </div>
      </div>
    `

    playoffSection.appendChild(teamCard)
  })
}

// Populate Middle Teams
function populateMiddleTeams() {
  const middleSection = document.querySelector("#middle-teams .container")
  const existingCards = middleSection.querySelectorAll(".team-card")

  existingCards.forEach((card) => card.remove())

  iplTeamsData.middleTeams.forEach((team) => {
    const teamCard = document.createElement("div")
    teamCard.className = "team-card middle-card"
    teamCard.setAttribute("data-team", team.name.toLowerCase().replace(/\s+/g, ""))

    const highlightsList = team.highlights
      .map(
        (highlight) => `
      <li><i class="fas fa-chart-up"></i> ${highlight}</li>
    `,
      )
      .join("")

    teamCard.innerHTML = `
      <div class="team-header">
        <div class="team-logo-container">
          <img src="${team.logo}" alt="${team.name}" class="team-logo">
          <div class="position-badge middle-badge">${team.position}</div>
        </div>
        <div class="team-info">
          <h3 class="team-name">${team.name}</h3>
          <p class="team-subtitle">${team.position === "5th" ? "Near Miss • Playoff Contenders" : "Mid-table Finish • Rebuilding Phase"}</p>
          <div class="team-stats-quick">
            <span class="stat-quick">${team.matches} Matches</span>
            <span class="stat-quick">${team.wins} Wins</span>
            <span class="stat-quick">${team.points} Points</span>
          </div>
        </div>
        <div class="team-badge middle-team">
          <i class="fas fa-chart-line"></i>
          <span>${team.position.toUpperCase()} PLACE</span>
        </div>
      </div>
      
      <div class="team-content">
        <div class="team-summary">
          <h4><i class="fas fa-${team.position === "5th" ? "chart-line" : "tools"}"></i> ${team.position === "5th" ? "So Close, Yet So Far" : "Rebuilding Season"}</h4>
          <p>${team.summary}</p>
        </div>
        
        <div class="team-highlights">
          <h4><i class="fas fa-star"></i> Season Highlights</h4>
          <ul class="highlights-list">
            ${highlightsList}
          </ul>
        </div>
        
        <div class="final-note">
          <div class="note-icon">
            <i class="fas fa-${team.position === "5th" ? "clock" : "seedling"}"></i>
          </div>
          <p><strong>${team.position === "5th" ? "Missed Opportunity:" : "Building for Future:"}</strong> ${team.position === "5th" ? "DC's inability to close out tight matches cost them a playoff berth, highlighting the fine margins in T20 cricket." : "LSG's focus shifted to developing young talent and building a foundation for upcoming seasons."}</p>
        </div>
      </div>
    `

    middleSection.appendChild(teamCard)
  })
}

// Populate Bottom Teams
function populateBottomTeams() {
  const bottomGrid = document.querySelector(".bottom-teams-grid")
  bottomGrid.innerHTML = ""

  iplTeamsData.bottomTeams.forEach((team) => {
    const teamCard = document.createElement("div")
    teamCard.className = `team-card bottom-card ${team.isWorst ? "worst-card" : ""}`
    teamCard.setAttribute("data-team", team.name.toLowerCase().replace(/\s+/g, ""))

    teamCard.innerHTML = `
      <div class="team-header-small">
        <div class="team-logo-container-small">
          <img src="${team.logo}" alt="${team.name}" class="team-logo-small">
          <div class="position-badge-small ${team.isWorst ? "worst-badge" : "bottom-badge"}">${team.position}</div>
        </div>
        <div class="team-info-small">
          <h3 class="team-name-small">${team.name}</h3>
          <p class="team-subtitle-small">${team.isWorst ? "Worst-Ever Season" : team.position === "9th" ? "Underwhelming Campaign" : team.position === "8th" ? "Disappointing Season" : "Mixed Campaign"}</p>
          <div class="team-stats-small">
            <span>${team.points} pts • ${team.wins} wins</span>
          </div>
        </div>
      </div>
      <div class="team-summary-small">
        <p>${team.summary}</p>
        <div class="highlight-small ${team.isWorst ? "worst-highlight" : ""}">
          <i class="fas fa-${team.isWorst ? "exclamation-triangle" : team.position === "9th" ? "arrow-down" : team.position === "8th" ? "question-circle" : "bolt"}"></i>
          <span>${team.highlight}</span>
        </div>
      </div>
    `

    bottomGrid.appendChild(teamCard)
  })
}

// Initialize all data population
function initializeTeamInsights() {
  populatePlayoffTeams()
  populateMiddleTeams()
  populateBottomTeams()

  // Add loading animations
  const cards = document.querySelectorAll(".team-card")
  cards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "all 0.6s ease"

    setTimeout(() => {
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    }, index * 100)
  })
}

// Smooth scrolling for navigation
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetElement.offsetTop - headerHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

// Counter animation for hero stats
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))
    let current = 0
    const increment = target / 50

    const timer = setInterval(() => {
      current += increment
      counter.textContent = Math.floor(current)

      if (current >= target) {
        counter.textContent = target
        clearInterval(timer)
      }
    }, 30)
  })
}

// Initialize everything when DOM loads
document.addEventListener("DOMContentLoaded", () => {
  initializeTeamInsights()
  initSmoothScrolling()

  // Animate counters when hero section is visible
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters()
        heroObserver.unobserve(entry.target)
      }
    })
  })

  const heroSection = document.querySelector(".hero")
  if (heroSection) {
    heroObserver.observe(heroSection)
  }

  console.log("🏏 IPL 2025 Team Insights - All data populated successfully!")
})

// Add scroll effects
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Mobile navigation
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })

  // Close menu when clicking nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
    })
  })
}

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active")
  }
})
// Close menu when pressing Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active")
  }
}) 
// Add event listener for window resize to handle mobile menu
window.addEventListener("resize", () => {       
  if (window.innerWidth > 768) {
    navMenu.classList.remove("active")
  }
});
