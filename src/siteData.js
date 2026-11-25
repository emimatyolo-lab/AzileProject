// ============================================================
//  EDIT THIS FILE to update the website content.
//  Anything marked TODO is a placeholder – confirm with the client.
// ============================================================

export const contact = {
  email: 'info@legalmastery.co.za',
  whatsappNumber: '27XXXXXXXXX', // TODO: international format, no + or spaces e.g. 27821234567
  whatsappDisplay: '+27 XX XXX XXXX', // TODO
  whatsappMessage: 'Hi, I would like to find out more about the School of Legal Mastery.',
  socials: [
    { name: 'Facebook', url: 'https://facebook.com/' }, // TODO
    { name: 'Instagram', url: 'https://instagram.com/' }, // TODO
    { name: 'TikTok', url: 'https://tiktok.com/' }, // TODO
    { name: 'LinkedIn', url: 'https://linkedin.com/' }, // TODO
  ],
}

export const whatsappLink = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`

export const founder = {
  name: 'Azile Mhlophe',
  title: 'Founder & Lead Tutor',
  // TODO: replace with the founder's real bio
  bio: [
    'Azile Mhlophe founded the School of Legal Mastery with one goal: to help law students move from simply getting through their modules to truly understanding the law.',
    'Having walked the LLB journey, Azile understands the pressure of heavy reading lists, tests and exams. The school offers structured, student-focused support that builds confidence and real competence.',
  ],
  vision: 'To build confident, knowledgeable and competent future legal professionals across South Africa.',
  mission: 'To make quality legal education support accessible, practical and results-driven, so that every student we work with can learn, understand and excel.',
}

export const services = [
  { title: 'Module Tutorials', text: 'Structured group sessions that break down complex legal principles into clear, examinable concepts.' },
  { title: 'One-on-One Tutoring', text: 'Personal sessions focused on your specific modules, questions and weak areas.' },
  { title: 'Exam & Test Preparation', text: 'Revision sessions, past-paper practice and exam technique for problem-type and essay questions.' },
  { title: 'Assignment Guidance', text: 'Help with legal research, structuring arguments, referencing and academic writing (no ghost-writing).' },
  { title: 'Case Law Breakdowns', text: 'Simplified summaries of key cases and how to apply them in answers.' },
  { title: 'Study Skills & Mentorship', text: 'Time management, note-making and study plans that carry you all the way to graduation.' },
]

// TODO: confirm the modules offered
export const modules = [
  { area: 'Foundational', items: ['Introduction to Law', 'Legal Interpretation', 'Legal Skills & Research', 'Roman Law / Legal History'] },
  { area: 'Private Law', items: ['Law of Persons & Family Law', 'Law of Contract', 'Law of Delict', 'Law of Property', 'Law of Succession'] },
  { area: 'Public Law', items: ['Constitutional Law', 'Administrative Law', 'Human Rights Law', 'International Law'] },
  { area: 'Criminal & Procedural', items: ['Criminal Law', 'Criminal Procedure', 'Law of Evidence', 'Civil Procedure'] },
  { area: 'Commercial Law', items: ['Commercial Law', 'Company Law', 'Labour Law', 'Insolvency Law'] },
  { area: 'Jurisprudence & Ethics', items: ['Jurisprudence', 'Legal Ethics', 'Customary Law'] },
]

// TODO: confirm all prices with the client
export const monthlyPackages = [
  { name: 'Starter', price: 'R350', period: '/month', features: ['1 module', '4 group tutorials per month', 'Study notes', 'WhatsApp study group'] },
  { name: 'Scholar', price: 'R650', period: '/month', featured: true, features: ['Up to 3 modules', '8 group tutorials per month', 'Study notes & case summaries', 'Exam preparation sessions', 'WhatsApp study group'] },
  { name: 'Mastery', price: 'R1 200', period: '/month', features: ['Up to 5 modules', 'Unlimited group tutorials', '2 one-on-one sessions per month', 'Assignment guidance', 'Priority support'] },
]

export const individualPackages = [
  { name: 'Once-off Tutorial', price: 'R150', unit: 'per session' },
  { name: 'One-on-One Session', price: 'R250', unit: 'per hour' },
  { name: 'Exam Crash Course', price: 'R450', unit: 'per module' },
  { name: 'Assignment Review', price: 'R300', unit: 'per assignment' },
]
