/**
 * All site copy and imagery references, sourced from the live Radius
 * Healthcare website (radiushealth.in). Content is preserved as published;
 * only presentation/structure has changed. Photography is editorial stock
 * imagery (Unsplash) standing in for real clinic photography.
 */

export const pageMeta = {
  home: {
    title: "Radius Health Centre | Multi-Speciality Polyclinic in Vengara, Malappuram",
    description:
      "Radius Health Centre, Vengara — a multi-speciality polyclinic with a hyper-pharmacy, fully automated lab and imaging facilities. Quality, patient-centric healthcare accessible to all. Book an appointment today.",
  },
  privacyPolicy: {
    title: "Privacy Policy | Radius Health Centre",
    description: "How Radius Health Centre collects, uses, and protects information submitted through this website.",
  },
  termsConditions: {
    title: "Terms & Conditions | Radius Health Centre",
    description: "The terms that govern use of the Radius Health Centre website and its appointment request form.",
  },
};

export const nav = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Departments", href: "/#departments" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  eyebrow: "Innovative Patient-Centric Healthcare",
  title: "Empowering Your Health Journey",
  description:
    "Discover exceptional healthcare services designed to prioritize your needs, guided by experienced professionals committed to your well-being.",
  primaryCta: { label: "Book Appointment", href: "/#appointment" },
  secondaryCta: { label: "Explore Services", href: "/#services" },
  image: {
    src: "/images/hero.jpg",
    alt: "Doctor consulting warmly with a patient at Radius Health Centre",
  },
};

export const stats = [
  { label: "Patients Served", value: 1000, suffix: "+" },
  { label: "Qualified Doctors", value: 18, suffix: "" },
  { label: "Departments Available", value: 12, suffix: "" },
];

export const about = {
  eyebrow: "Setting Benchmarks",
  title: "About Us — Delivering Quality Healthcare for All",
  paragraphs: [
    "We are a team of healthcare professionals who aim to set a new benchmark in the delivery of healthcare services at grassroot level. At Radius, our focus is on quality service which is accessible to all.",
    "Our team is well qualified and our infrastructure is well equipped to achieve our goals in the times to come. We started our operations in January 2025 with a multi-speciality polyclinic with a hyper-pharmacy, fully automated lab and imaging facilities at Vengara, Malappuram. We aim to expand our operations to nearby areas in the future.",
  ],
  image: {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&q=80&auto=format&fit=crop",
    alt: "Physician reviewing patient records at Radius Health Centre",
  },
};

export const mission = {
  title: "Mission",
  body: "To provide high quality healthcare services at the community level with a right blend of talent and technology that is affordable and accessible to all. We aim to achieve this by a combination of patient centric approach, innovative solutions and a dedicated professional team thereby improving the health and quality of life of the population we serve.",
};

export const vision = {
  title: "Vision",
  body: "To revolutionize the primary healthcare delivery systems and become a leading provider of healthcare services in the society with excellent quality and patient satisfaction. We envision a healthy future for our people by advancement in healthcare delivery systems as well as by right focus on preventive medicine.",
};

export const values = [
  { title: "Quality" },
  { title: "Ethics & integrity" },
  { title: "Patient centric services" },
  { title: "Accessibility" },
  { title: "Affordability" },
];

export const services = [
  {
    title: "Multi-speciality Clinic",
    description: "Offering patient-focused, multi-disciplinary healthcare for all your needs.",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Casuality & Observation",
    description: "Trusted care, delivered with urgency and compassion.",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Hyper Pharmacy",
    description: "Your health, our priority — fast, reliable, and expert pharmacy support.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Fully Automated Laboratory",
    description: "Advanced technology for accurate diagnostics, every time.",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Digital X-Ray",
    description: "Immediate, professional care powered by advanced technology for peace of mind.",
    image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "ECG",
    description: "State-of-the-art diagnostics tailored to precise and accurate results.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80&auto=format&fit=crop",
  },
];

export const departments = [
  { name: "General OPD & Casualty", image: "/images/departments/observation.jpg" },
  { name: "General Medicine", image: "/images/departments/reception.jpg" },
  { name: "General Surgery", image: "/images/departments/observation.jpg" },
  { name: "Orthopaedics", image: "/images/departments/xray.jpg" },
  { name: "Paediatrics", image: "/images/about-nurse.jpg" },
  { name: "Nephrology", image: "/images/departments/laboratory.jpg" },
  { name: "Gastroenterolgy", image: "/images/departments/pharmacy.jpg" },
  { name: "Cardiology", image: "/images/departments/ecg.webp" },
  { name: "Neurology", image: "/images/departments/staff.jpg" },
  { name: "Urology", image: "/images/departments/laboratory.jpg" },
  { name: "Dermatology & Cosmetology", image: "/images/about-nurse.jpg" },
  { name: "Child Psychology", image: "/images/departments/staff.jpg" },
  { name: "ENT", image: "/images/departments/reception.jpg" },
];

export const appointmentDepartments = [
  "General OPD & Casuality",
  "General Medicine",
  "General Surgery",
  "Orthopaedics",
  "Paediatrics",
  "Nephrology",
  "Gastroenterolgy",
  "Cardiology",
  "Neurology",
  "Urology",
  "ENT",
  "Dermatology & Cosmetology",
  "Psychology",
  "Child Psychology",
];

export const whyRadius = {
  eyebrow: "Why Radius",
  title: "Why Patients Choose Radius",
  description:
    "A patient-friendly environment built around care, technology and accessibility — explore what sets your experience at Radius apart.",
};

export const whyRadiusPoints = [
  {
    title: "Patient-First Care",
    description: "Every visit is built around a patient-centric approach — your needs guide how we deliver care.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=700&q=80&auto=format&fit=crop",
  },
  {
    title: "Experienced Professionals",
    description: "A dedicated, well-qualified team of doctors across 12+ departments committed to your well-being.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&q=80&auto=format&fit=crop",
  },
  {
    title: "Modern Infrastructure",
    description: "Our multi-speciality polyclinic is equipped with the facilities needed to deliver quality care.",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=700&q=80&auto=format&fit=crop",
  },
  {
    title: "Advanced Diagnostics",
    description: "A fully automated laboratory plus digital X-ray and ECG for fast, accurate results.",
    image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=700&q=80&auto=format&fit=crop",
  },
  {
    title: "Integrated Services",
    description: "Consultation, pharmacy, lab and imaging — under one roof, right blend of talent and technology.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=700&q=80&auto=format&fit=crop",
  },
  {
    title: "Accessible & Affordable",
    description: "Quality healthcare at the community level, priced and positioned to be accessible to all.",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=700&q=80&auto=format&fit=crop",
  },
];

export const testimonials = [
  {
    quote:
      "One of the best clinics I've visited. I went there for a consultation with a pediatrician. The staff was polite, and the whole process was smooth and well-organized.",
    name: "Favas M",
    avatar: "/images/testimonials/favas-m.jpg",
  },
  {
    quote: "Highly professional team with a caring attitude. The clinic has top notch medical equipment and well-organised staff.",
    name: "Ansaf PV",
    avatar: "/images/testimonials/ansaf-pv.jpg",
  },
  {
    quote: "Very good facilities with modern equipments",
    name: "Farhana Anoob",
    avatar: "/images/testimonials/farhana-anoob.jpg",
  },
];

export const contact = {
  name: "Radius Health Centre",
  addressLines: ["Kacheripadi, Vengara", "Kerala 676304"],
  phones: [
    { label: "Reception", value: "0494 293 2664" },
    { label: "Clinic", value: "75588 52664" },
    { label: "Clinic", value: "75598 52664" },
    { label: "Pharmacy", value: "75618 52664" },
    { label: "Lab", value: "75928 52664" },
  ],
  email: "radiuspolyclinic@gmail.com",
  mapEmbedUrl:
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&q=Radius%20Health%20Centre%20Vengara%2C%20Kacheripadi%2C%20Vengara%2C%20Kerala%20676304&zoom=15&maptype=roadmap",
  instagram: "https://www.instagram.com/radius_health_centre_/?hl=en",
};

export const instagramPosts: { image: string; alt: string; href?: string }[] = [
  { image: "/images/instagram/post-1.jpg", alt: "Advanced ultrasound scanning now available at Radius Health Centre" },
  { image: "/images/instagram/post-2.jpg", alt: "World Alzheimer's Day: know the signs earlier" },
  { image: "/images/instagram/post-3.jpg", alt: "Paediatrics: understanding why babies cry" },
  { image: "/images/instagram/post-4.jpg", alt: "Nephrology awareness: what tears in the eye can signal" },
  { image: "/images/instagram/post-5.jpg", alt: "Urology awareness: drinking water and kidney stones" },
  { image: "/images/instagram/post-6.jpg", alt: "ENT awareness: steam inhalation and sinusitis" },
  { image: "/images/instagram/post-7.jpg", alt: "Awareness post on red rashes and tomato fever in children" },
  { image: "/images/instagram/post-8.jpg", alt: "Independence Day greetings from the Radius Health Centre team" },
];

export const footer = {
  description:
    "A multi-speciality polyclinic with a hyper-pharmacy, fully automated lab and imaging facilities — bringing quality, patient-centric healthcare to the community.",
  servicesLinks: ["Multi-speciality Clinic", "Pharmacy", "Fully automated laboratory", "Digital X-ray & ECG"],
  copyright: "Copyright © Radius Healthcare. All rights reserved.",
};
