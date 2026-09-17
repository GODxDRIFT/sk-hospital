/**
 * S.K MULTI-SPECIALITY HOSPITAL 24×7 - CLIENT APPLICATION LOGIC
 * Location: Shiv Vihar Road, near Bikaner Sweets, Vikas Nagar, Uttam Nagar, Hastsal, Delhi – 110059
 * 24x7 Emergency Helpline / Ambulance: 077039 64716 | WhatsApp: +91 77039 64716
 */

// ==========================================
// 1. HOSPITAL SPECIALIST DOCTORS DATASET
// ==========================================
const DOCTORS_DATA = [
  {
    id: 1,
    name: "Dr. S. K. Sharma",
    qualifications: "MBBS, MD (Internal Medicine)",
    specialty: "General & Internal Medicine",
    subspecialty: "Senior Physician & Diabetologist",
    experience: "18+ Years Experience",
    schedule: "Mon - Sat: 10:00 AM – 02:00 PM & 06:00 PM – 08:00 PM",
    opdFee: "₹300 (Free 7-Day Follow-Up)",
    focus: "Diabetes Mellitus, Hypertension, Dengue, Typhoid, Viral Fevers, Thyroid & Lipid Disorders, Preventive Healthcare.",
    image: "images/hero_bright_consultation.jpg",
    badge: "Senior Consultant"
  },
  {
    id: 2,
    name: "Dr. Ananya Verma",
    qualifications: "MBBS, MS (Obstetrics & Gynaecology), DNB",
    specialty: "Gynaecology & Obstetrics",
    subspecialty: "Senior Obstetrician & Gynaecologist",
    experience: "14+ Years Experience",
    schedule: "Mon - Sat: 11:00 AM – 03:00 PM & 05:00 PM – 07:00 PM",
    opdFee: "₹500 Consultation",
    focus: "High-Risk Pregnancy, Normal & Caesarean (LSCS) Delivery, PCOD/PCOS, Fibroids, Infertility, Laparoscopic Hysterectomy.",
    image: "images/doctor_team.jpg",
    badge: "Maternity Specialist"
  },
  {
    id: 3,
    name: "Dr. Rajesh Aggarwal",
    qualifications: "MBBS, MS (Orthopaedics), M.Ch (Ortho)",
    specialty: "Orthopaedics & Joint Care",
    subspecialty: "Orthopaedic, Joint & Fracture Surgeon",
    experience: "16+ Years Experience",
    schedule: "Mon, Wed, Fri: 04:00 PM – 07:00 PM",
    opdFee: "₹500 Consultation",
    focus: "Fracture Trauma Plaster & Plating/Nailing Surgery, Knee/Hip Arthritis, Sciatica, Slip Disc, Sports Injury, Bone Density.",
    image: "images/hero_hospital.jpg",
    badge: "Joint & Spine Surgeon"
  },
  {
    id: 4,
    name: "Dr. Amit Malhotra",
    qualifications: "MBBS, MS (General Surgery), FMAS",
    specialty: "General & Laparoscopic Surgery",
    subspecialty: "General & Laparoscopic Surgeon",
    experience: "15+ Years Experience",
    schedule: "Daily: 05:00 PM – 08:00 PM & On-Call Emergency",
    opdFee: "₹500 Consultation",
    focus: "Laparoscopic Gallbladder Stone Removal, Laparoscopic Appendix, Hernia Mesh Repair, Laser Piles/Fissure/Fistula, Cyst & Abscess.",
    image: "images/diagnostics_lab.jpg",
    badge: "Laparoscopy Lead"
  },
  {
    id: 5,
    name: "Dr. Neha Gupta",
    qualifications: "MBBS, MD (Paediatrics), DCH",
    specialty: "Paediatrics & Child Health",
    subspecialty: "Paediatrician & Neonatal Specialist",
    experience: "12+ Years Experience",
    schedule: "Daily: 10:00 AM – 01:00 PM & 05:00 PM – 07:30 PM",
    opdFee: "₹400 Consultation",
    focus: "Newborn Care, Complete Child Vaccination Chart, Paediatric Fevers, Jaundice Phototherapy, Growth & Nutrition Tracking.",
    image: "images/hero_bright_consultation.jpg",
    badge: "Child Care Specialist"
  },
  {
    id: 6,
    name: "Dr. R. K. Yadav & Critical Care Team",
    qualifications: "MBBS, FEM (Emergency Medicine & ICU)",
    specialty: "24×7 Emergency & Critical Care ICU",
    subspecialty: "Emergency Medicine & Critical Care Physician",
    experience: "10+ Years Experience",
    schedule: "Available 24×7 Round the Clock (365 Days)",
    opdFee: "₹500 Emergency Triage",
    focus: "Acute Trauma Triage, Cardiac Resuscitation, Poisoning/Bites, Oxygen/Ventilator Support, Intensive ICU Vital Monitoring.",
    image: "images/emergency_icu.jpg",
    badge: "24x7 Emergency Lead"
  }
];

// ==========================================
// 2. BLOG ARTICLES DATASET
// ==========================================
const BLOG_ARTICLES = [
  {
    id: 1,
    title: "Understanding Viral Fever, Dengue & Monsoon Illnesses: When to Visit OPD vs 24x7 Emergency",
    author: "Dr. S. K. Sharma (MD Medicine)",
    date: "September 15, 2026",
    tag: "Internal Medicine",
    image: "images/blog_fever_dengue.jpg",
    excerpt: "Learn how to differentiate common viral fever from Dengue, warning signs of low platelets, fluid management, and when immediate ICU or hospital admission is needed.",
    content: `
      <h3>Understanding Dengue, Typhoid & Seasonal Viral Fevers</h3>
      <p>During seasonal shifts and monsoon periods in Delhi NCR, viral fevers, Dengue, Malaria, and Typhoid cases increase significantly. Early clinical evaluation ensures timely recovery without complications.</p>
      
      <h4>Key Symptoms of Dengue to Watch:</h4>
      <ul>
        <li>High fever with severe retro-orbital (behind the eye) headache</li>
        <li>Severe muscle and joint pain ('breakbone fever')</li>
        <li>Nausea, vomiting, and loss of appetite</li>
        <li>Skin rashes and pinpoint red spots (petechiae)</li>
      </ul>

      <h4>When to Seek 24x7 Emergency Care:</h4>
      <p>If the patient exhibits persistent vomiting, abdominal pain, bleeding gums/nose, extreme lethargy, or if platelets drop below 50,000/μL, visit S.K Multi-Speciality Hospital Emergency immediately. Our 24x7 pathology lab provides rapid CBC, Dengue NS1 & IgM reports within 45 minutes.</p>
    `
  },
  {
    id: 2,
    title: "Normal Delivery vs C-Section: Essential Antenatal Care & Nutrition Guide",
    author: "Dr. Ananya Verma (MS Gynaecology)",
    date: "September 10, 2026",
    tag: "Maternity & Gynaecology",
    image: "images/blog_maternity_delivery.jpg",
    excerpt: "Comprehensive guide to trimester-wise antenatal care, nutritional requirements, exercise for normal delivery, and safe C-section protocols in modern modular OT.",
    content: `
      <h3>Your Comprehensive Pregnancy & Delivery Guide</h3>
      <p>At S.K Multi-Speciality Hospital, we champion natural birth whenever medically favorable while offering state-of-the-art modular OT support for emergency or planned Caesarean sections.</p>
      
      <h4>Essential Antenatal Checkups:</h4>
      <ul>
        <li><strong>First Trimester:</strong> Baseline ultrasound, CBC, Thyroid, Blood Sugar, and folic acid supplementation.</li>
        <li><strong>Second Trimester:</strong> Level-II Anomaly scan, Quadruple marker, Iron and Calcium optimization.</li>
        <li><strong>Third Trimester:</strong> Growth scans, Doppler studies, NST monitoring, and birth plan alignment.</li>
      </ul>

      <h4>Our Maternity Facilities:</h4>
      <p>We provide private deluxe labour rooms, continuous fetal monitoring, 24x7 Gynaecologist and Paediatrician presence, and phototherapy setup for newborn jaundice.</p>
    `
  },
  {
    id: 3,
    title: "Managing Knee Pain, Arthritis & Bone Health: Early Signs You Shouldn't Ignore",
    author: "Dr. Rajesh Aggarwal (MS Ortho)",
    date: "September 05, 2026",
    tag: "Orthopaedics",
    image: "images/blog_ortho_knee_joint.jpg",
    excerpt: "Practical insights on preventing osteoarthritis, joint preservation techniques, calcium/Vitamin D3 management, and modern minimally invasive orthopaedic care.",
    content: `
      <h3>Protecting Your Joints and Bone Density</h3>
      <p>Chronic knee stiffness, morning joint pain, and cracking sounds are early signs of osteoarthritis. Timely intervention can prevent joint deterioration and restore mobility.</p>
      
      <h4>Preventive Bone Care:</h4>
      <ul>
        <li>Maintain a healthy BMI to reduce mechanical load on weight-bearing knee joints.</li>
        <li>Regular quadriceps strengthening exercises and low-impact walking.</li>
        <li>Periodic Vitamin D3 and Calcium screening (available in our ₹1,499 Health Package).</li>
        <li>Consult our Orthopaedic OPD for viscosupplementation, PRP injections, or fracture trauma management.</li>
      </ul>
    `
  },
  {
    id: 4,
    title: "Why Laparoscopic Keyhole Surgery is Safer & Faster: Gallstones, Appendix & Hernia",
    author: "Dr. Amit Malhotra (MS, FMAS)",
    date: "August 28, 2026",
    tag: "Laparoscopic Surgery",
    image: "images/hero_hospital.jpg",
    excerpt: "Discover why laparoscopic surgery offers minimal pain, tiny 5mm incisions, almost zero blood loss, and discharge within 24 to 48 hours for gallstones, appendix, and hernia.",
    content: `
      <h3>Advantages of Modern Laparoscopic Keyhole Surgery</h3>
      <p>With high-definition camera towers and precision micro-instruments, laparoscopic procedures have replaced large open incisions, enabling patients to return to work within days.</p>
      
      <h4>Common Procedures Performed:</h4>
      <ul>
        <li>Laparoscopic Cholecystectomy (Gallbladder Stone Removal)</li>
        <li>Laparoscopic Appendectomy (Inflamed Appendix Removal)</li>
        <li>Laparoscopic Inguinal & Umbilical Hernia Mesh Repair</li>
        <li>Minimally Invasive Laser Surgery for Piles, Fissures & Fistula</li>
      </ul>
    `
  },
  {
    id: 5,
    title: "How to Claim Cashless Treatment Under Ayushman Bharat (PM-JAY) & Private TPAs",
    author: "Hospital TPA & Mediclaim Desk",
    date: "August 20, 2026",
    tag: "Insurance & Cashless",
    image: "images/diagnostics_lab.jpg",
    excerpt: "Step-by-step walkthrough of cashless mediclaim authorization, Ayushman Bharat PM-JAY Golden Card admissions, and emergency TPA approvals at S.K Hospital.",
    content: `
      <h3>Cashless Mediclaim & Ayushman Bharat Guidance</h3>
      <p>S.K Multi-Speciality Hospital works with 30+ leading insurance companies and TPAs to ensure you receive quality healthcare without financial stress.</p>
      
      <h4>Documents Required at Admission:</h4>
      <ul>
        <li>Valid Health Insurance Card or Policy Schedule Copy</li>
        <li>Patient's Aadhaar Card & PAN Card (or Proposer's ID)</li>
        <li>Treating Doctor's Consultation Prescription & Diagnostic Reports</li>
        <li>Ayushman Bharat PM-JAY Golden Card for eligible beneficiaries</li>
      </ul>
      <p>Our dedicated TPA desk operates daily from 8:00 AM to 10:00 PM (and 24x7 for emergencies) to facilitate pre-authorization and query resolution.</p>
    `
  },
  {
    id: 6,
    title: "Complete Child Vaccination Chart (0 to 5 Years) & Newborn Care Tips",
    author: "Dr. Neha Gupta (MD Paediatrics)",
    date: "August 12, 2026",
    tag: "Paediatrics",
    image: "images/doctor_team.jpg",
    excerpt: "Essential pediatric immunization schedule from birth to 5 years, fever management post-vaccination, and newborn developmental milestones.",
    content: `
      <h3>Complete Child Immunization Schedule</h3>
      <p>Timely vaccination protects infants from severe infectious diseases including Hepatitis B, Polio, Rotavirus, Pneumococcal pneumonia, MMR, and Typhoid.</p>
      
      <h4>Key Vaccine Milestones:</h4>
      <ul>
        <li><strong>At Birth:</strong> BCG, Oral Polio Vaccine (OPV), Hepatitis B</li>
        <li><strong>6, 10, 14 Weeks:</strong> Pentavalent (DTP+HepB+Hib), IPV, Rotavirus, PCV</li>
        <li><strong>9 to 12 Months:</strong> MR / MMR, Typhoid Conjugate Vaccine, Vitamin A</li>
        <li><strong>15 to 18 Months:</strong> MMR Booster, DTP Booster 1, Varicella</li>
      </ul>
      <p>All vaccines are stored under strict temperature-controlled cold-chain protocols in our in-house pharmacy.</p>
    `
  }
];

// ==========================================
// 3. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderDoctorsGrid();
  initHeaderScroll();
  initTestimonialSlider();
  initSearchOverlay();
  initFacilityFilters();
  initNewsTabs();
  initSmoothScroll();
});

// ==========================================
// 4. FACILITY REAL-TIME FILTERING
// ==========================================
function initFacilityFilters() {
  const filterBtns = document.querySelectorAll('.facility-filters .filter-btn');
  const facilityHero = document.querySelector('.facility-hero-card');
  const subCards = document.querySelectorAll('.facility-sub-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      if (facilityHero) {
        const heroCat = facilityHero.getAttribute('data-category');
        if (filter === 'all' || heroCat === filter) {
          facilityHero.style.display = 'flex';
        } else {
          facilityHero.style.display = 'none';
        }
      }

      subCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (filter === 'all' || cardCat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ==========================================
// 4B. NEWS TABS & DYNAMIC ARTICLE LOADER
// ==========================================
function initNewsTabs() {
  const tabs = document.querySelectorAll('.news-filter-tabs .news-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.length > 1 && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

// ==========================================
// 5. HEADER SCROLL & MOBILE DRAWER
// ==========================================
function initHeaderScroll() {
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  const mobileBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const closeBtn = document.getElementById('closeDrawerBtn');

  if (mobileBtn && drawer && backdrop) {
    mobileBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    const closeMenu = () => {
      drawer.classList.remove('open');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    };

    closeBtn?.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);
  }
}

function closeMobileDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  drawer?.classList.remove('open');
  backdrop?.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// 6. DOCTORS GRID & FILTERING
// ==========================================
function renderDoctorsGrid(specialtyFilter = 'all') {
  const container = document.getElementById('doctorList');
  const homepageGrid = document.getElementById('doctorsHomeGrid');
  
  const filtered = specialtyFilter === 'all' 
    ? DOCTORS_DATA 
    : DOCTORS_DATA.filter(doc => doc.specialty.toLowerCase().includes(specialtyFilter.toLowerCase()) || doc.subspecialty.toLowerCase().includes(specialtyFilter.toLowerCase()));

  const generateDoctorCardHtml = (doc) => `
    <div class="doctor-profile-card">
      <div class="doc-card-header">
        <div class="doc-avatar-wrap">
          <img src="${doc.image}" alt="${doc.name}" class="doc-avatar-img">
          <span class="doc-badge-pill">${doc.badge}</span>
        </div>
        <div class="doc-main-meta">
          <h4 class="doc-name">${doc.name}</h4>
          <div class="doc-qual">${doc.qualifications}</div>
          <div class="doc-subspecialty"><i class="fa-solid fa-stethoscope"></i> ${doc.subspecialty}</div>
          <div class="doc-exp"><i class="fa-solid fa-award"></i> ${doc.experience}</div>
        </div>
      </div>
      <div class="doc-card-body">
        <div class="doc-schedule-box">
          <div class="sched-label"><i class="fa-regular fa-clock"></i> OPD Schedule:</div>
          <div class="sched-val">${doc.schedule}</div>
        </div>
        <div class="doc-fee-box">
          <div class="fee-label">Consultation Fee:</div>
          <div class="fee-val">${doc.opdFee}</div>
        </div>
        <p class="doc-focus-text"><strong>Key Focus:</strong> ${doc.focus}</p>
      </div>
      <div class="doc-card-actions">
        <button class="btn-book-doctor" onclick="openBookingModal('${doc.name}', '${doc.specialty}')">
          <i class="fa-regular fa-calendar-check"></i> Book OPD Slot
        </button>
        <a href="https://wa.me/917703964716?text=${encodeURIComponent(`Hello SK Hospital, I want to book an appointment with ${doc.name} (${doc.specialty}). Please share available slot.`)}" target="_blank" class="btn-wa-doctor" title="Chat on WhatsApp">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>
  `;

  if (container) {
    container.innerHTML = filtered.length 
      ? filtered.map(generateDoctorCardHtml).join('') 
      : `<div class="p-4 text-center text-muted">No specialists found matching your search. Please try another department.</div>`;
  }

  if (homepageGrid) {
    homepageGrid.innerHTML = filtered.map(generateDoctorCardHtml).join('');
  }
}

function filterDoctors() {
  const select = document.getElementById('docSpecialtyFilter');
  const val = select ? select.value : 'all';
  renderDoctorsGrid(val);
}

// ==========================================
// 7. TESTIMONIAL SLIDER
// ==========================================
let currentTestiIndex = 0;
function initTestimonialSlider() {
  const slides = document.querySelectorAll('.testi-slide');
  const dots = document.querySelectorAll('#testiDots .t-dot');
  if (!slides.length) return;

  window.setTestiSlide = function(index) {
    currentTestiIndex = index;
    slides.forEach((s, i) => s.classList.toggle('active', i === currentTestiIndex));
    dots.forEach((d, i) => d.classList.toggle('active', i === currentTestiIndex));
  };

  setInterval(() => {
    let next = (currentTestiIndex + 1) % slides.length;
    window.setTestiSlide(next);
  }, 7000);
}

// ==========================================
// 8. GLOBAL SEARCH OVERLAY
// ==========================================
function initSearchOverlay() {
  const toggleBtn = document.getElementById('searchToggleBtn');
  const overlay = document.getElementById('searchOverlay');
  const closeBtn = document.getElementById('closeSearchBtn');
  const input = document.getElementById('globalSearchInput');

  if (toggleBtn && overlay && closeBtn) {
    toggleBtn.addEventListener('click', () => {
      overlay.classList.toggle('active');
      if (overlay.classList.contains('active')) {
        input?.focus();
      }
    });

    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  }

  input?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (q.length > 2) {
      handleGlobalSearch(q);
    }
  });
}

function handleQuickSearch(keyword) {
  const overlay = document.getElementById('searchOverlay');
  overlay?.classList.remove('active');

  if (keyword.includes('Checkup') || keyword.includes('1499') || keyword.includes('Package')) {
    scrollToSection('packages');
  } else if (keyword.includes('Emergency') || keyword.includes('ICU')) {
    openEmergencyModal();
  } else if (keyword.includes('Doctor') || keyword.includes('Sharma') || keyword.includes('Verma')) {
    openDoctorModal();
  } else {
    scrollToSection('departments');
  }
}

function handleGlobalSearch(q) {
  if (q.includes('doctor') || q.includes('sharma') || q.includes('dr')) {
    openDoctorModal();
  }
}

// ==========================================
// 9. MODALS CONTROLLER & POPUPS
// ==========================================

// Doctor Search Modal
function openDoctorModal(specialty = 'all') {
  const modal = document.getElementById('doctorModal');
  if (!modal) return;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  
  const select = document.getElementById('docSpecialtyFilter');
  if (select && specialty !== 'all') {
    select.value = specialty;
  }
  renderDoctorsGrid(specialty);
}

function closeDoctorModal() {
  const modal = document.getElementById('doctorModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
}

// Appointment Booking Modal
function openBookingModal(doctorName = '', department = '') {
  closeDoctorModal();
  const modal = document.getElementById('appointmentBookingModal');
  if (!modal) return;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  const docSelect = document.getElementById('appDocSelect');
  if (docSelect && doctorName) {
    for (let i = 0; i < docSelect.options.length; i++) {
      if (docSelect.options[i].text.includes(doctorName)) {
        docSelect.selectedIndex = i;
        break;
      }
    }
  }
}

function closeBookingModal() {
  const modal = document.getElementById('appointmentBookingModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
}

function handleAppointmentSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('appNameInput')?.value || '';
  const phone = document.getElementById('appPhoneInput')?.value || '';
  const doctor = document.getElementById('appDocSelect')?.value || 'Any Available Specialist';
  const date = document.getElementById('appDateInput')?.value || 'Earliest Available';
  const notes = document.getElementById('appNotesInput')?.value || 'General Consultation';

  const msg = `*New Appointment Request - S.K Hospital 24x7*\n\n` +
    `👤 *Patient Name:* ${name}\n` +
    `📞 *Phone Number:* ${phone}\n` +
    `👨‍⚕️ *Doctor/Speciality:* ${doctor}\n` +
    `📅 *Preferred Date:* ${date}\n` +
    `📝 *Symptoms/Notes:* ${notes}\n\n` +
    `_Please confirm my consultation slot._`;

  const waUrl = `https://wa.me/917703964716?text=${encodeURIComponent(msg)}`;
  
  alert(`Thank you, ${name}! Your appointment request has been recorded. Redirecting to our WhatsApp Desk (+91 77039 64716) for instant slot confirmation...`);
  window.open(waUrl, '_blank');
  closeBookingModal();
}

// Package Modal
function showPackageModal(pkgName = 'Comprehensive Health Checkup') {
  const modal = document.getElementById('packageModal');
  const title = document.getElementById('pkgModalTitle');
  if (title) title.innerText = pkgName;
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function openHealthCheckModal() {
  showPackageModal('Comprehensive Health Checkup Package (₹1,499)');
}

function closePackageModal() {
  const modal = document.getElementById('packageModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
}

// Facility Modal
function openFacilityModal(title, loc, services) {
  const modal = document.getElementById('facilityModal');
  const t = document.getElementById('facModalTitle');
  const l = document.getElementById('facModalLoc');
  const s = document.getElementById('facModalServices');
  if (t) t.innerText = title;
  if (l) l.innerText = loc;
  if (s) s.innerText = services;
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeFacilityModal() {
  const modal = document.getElementById('facilityModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
}

// CareCard / Cashless Modal
function openCareCardModal() {
  const modal = document.getElementById('careCardModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeCareCardModal() {
  const modal = document.getElementById('careCardModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
}

function handleCareCardSubmit(e) {
  e.preventDefault();
  alert('Thank you! Your cashless mediclaim inquiry has been received. Our TPA desk will contact you shortly.');
  closeCareCardModal();
}

// News / Blog Modal
function openNewsModal(id) {
  openBlogModal(id);
}

// Video Modal
function openVideoModal() {
  const modal = document.getElementById('videoModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
}

function confirmPackageBooking() {
  const name = document.getElementById('pkgPatientName')?.value;
  const phone = document.getElementById('pkgPatientPhone')?.value;
  const date = document.getElementById('pkgDateInput')?.value;

  if (!name || !phone) {
    alert('Please provide your name and mobile number.');
    return;
  }

  const msg = `*Comprehensive Health Checkup Booking (₹1,499)*\n\n` +
    `👤 *Patient Name:* ${name}\n` +
    `📞 *Mobile:* ${phone}\n` +
    `📅 *Preferred Date:* ${date}\n` +
    `🏥 *Package Includes:* CBC 24 parameters, Blood Sugar Fasting, HbA1c, LFT, KFT, Lipid Profile, Urine Routine, 12-Lead ECG & Doctor Review.`;

  window.open(`https://wa.me/917703964716?text=${encodeURIComponent(msg)}`, '_blank');
  closePackageModal();
}

// Emergency SOS Modal
function openEmergencyModal() {
  const modal = document.getElementById('emergencyModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeEmergencyModal() {
  const modal = document.getElementById('emergencyModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
}

// Request Callback Modal
function openCallbackModal() {
  const modal = document.getElementById('callbackModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeCallbackModal() {
  const modal = document.getElementById('callbackModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
}

function handleCallbackSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('cbNameInput')?.value;
  const phone = document.getElementById('cbPhoneInput')?.value;
  const query = document.getElementById('cbQueryInput')?.value;

  const msg = `*Callback Request - S.K Multi-Speciality Hospital*\n\n` +
    `👤 *Name:* ${name}\n` +
    `📞 *Phone:* ${phone}\n` +
    `❓ *Query Details:* ${query}`;

  alert(`Thank you, ${name}. Our help desk will call you shortly on ${phone}.`);
  window.open(`https://wa.me/917703964716?text=${encodeURIComponent(msg)}`, '_blank');
  closeCallbackModal();
}

// Blog Reader Modal
function openBlogModal(blogId) {
  const blog = BLOG_ARTICLES.find(b => b.id === Number(blogId));
  if (!blog) return;

  const modal = document.getElementById('blogReaderModal');
  const title = document.getElementById('blogModalTitle');
  const meta = document.getElementById('blogModalMeta');
  const img = document.getElementById('blogModalImg');
  const body = document.getElementById('blogModalBody');

  if (title) title.innerText = blog.title;
  if (meta) meta.innerHTML = `<span><i class="fa-solid fa-user-doctor"></i> ${blog.author}</span> • <span><i class="fa-regular fa-calendar"></i> ${blog.date}</span> • <span class="badge-tag">${blog.tag}</span>`;
  if (img) img.src = blog.image;
  if (body) body.innerHTML = blog.content;

  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeBlogModal() {
  const modal = document.getElementById('blogReaderModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
}

// Live Chat / Concierge Modal
function openChatModal() {
  const modal = document.getElementById('chatModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeChatModal() {
  const modal = document.getElementById('chatModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
}

function sendQuickChatMessage(txt) {
  const chatMessages = document.getElementById('chatMessages');
  if (!chatMessages) return;

  // Add user message
  const userDiv = document.createElement('div');
  userDiv.className = 'chat-msg user';
  userDiv.innerHTML = `<div class="msg-bubble">${txt}</div>`;
  chatMessages.appendChild(userDiv);

  // Bot response after short delay
  setTimeout(() => {
    let botReply = "Thank you for reaching out to S.K Multi-Speciality Hospital 24×7. ";
    if (txt.includes('doctor') || txt.includes('appointment')) {
      botReply += "Our senior doctors are available for OPD consultations (9 AM - 9 PM) with General OPD at ₹300 (Free 7-Day follow up). Would you like to book now?";
    } else if (txt.includes('Package') || txt.includes('Health')) {
      botReply += "Our Comprehensive Health Checkup Package is available at ₹1,499 including CBC, HbA1c, LFT, KFT, Lipid Profile, Urine Routine & 12-Lead ECG. 24x7 Lab testing is open.";
    } else if (txt.includes('Insurance') || txt.includes('Ayushman')) {
      botReply += "We offer cashless treatment with 30+ TPAs & Star Health, HDFC ERGO, Care Health, ICICI Lombard, plus Ayushman Bharat PM-JAY desk assistance.";
    } else {
      botReply += "For instant direct assistance, please call our 24x7 emergency desk at 077039 64716 or chat with us on WhatsApp.";
    }

    const botDiv = document.createElement('div');
    botDiv.className = 'chat-msg bot';
    botDiv.innerHTML = `<div class="msg-bubble">${botReply}<br><br><a href="https://wa.me/917703964716" target="_blank" style="color: #008f99; font-weight:700;"><i class="fa-brands fa-whatsapp"></i> Chat with Duty Coordinator on WhatsApp</a></div>`;
    chatMessages.appendChild(botDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 400);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleChatKeyPress(e) {
  if (e.key === 'Enter') {
    sendUserMessage();
  }
}

function sendUserMessage() {
  const input = document.getElementById('chatInput');
  const txt = input?.value.trim();
  if (!txt) return;

  sendQuickChatMessage(txt);
  input.value = '';
}

// ==========================================
// 10. SCROLL HELPERS & UTILITIES
// ==========================================
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close modals when clicking backdrop
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.style.display = 'none';
    document.body.style.overflow = '';
  }
});

// Sticky header elevation shadow on scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('siteHeader');
  if (header) {
    if (window.scrollY > 15) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}, { passive: true });
