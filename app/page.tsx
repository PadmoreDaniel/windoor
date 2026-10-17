import Image from "next/image";
import CurrentYear from "./current-year";
import {
  ADDRESS_LINES,
  BUSINESS_NAME,
  EMAIL,
  EMAIL_HREF,
  FACEBOOK_URL,
  GOOGLE_REVIEWS_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_DESCRIPTION,
  SITE_URL,
} from "@/lib/site";

const quickServices = [
  "Hinges",
  "Handles",
  "Vents",
  "Locks",
  "Letterboxes",
  "Patio rollers",
  "Glass replacements",
  "Window restrictors",
];

const services = [
  {
    title: "Misty or Foggy Windows",
    image: "/donegal-glass-repairs.jpg",
    width: 739,
    height: 430,
    alt: "Misty double glazed window before and after repair by Windoor Services in Donegal",
    text: ["Repair service, replacing glass or rubber seals where required."],
  },
  {
    title: "Broken Glass Replacement",
    image: "/fb_img_1592324428811.jpg",
    width: 854,
    height: 640,
    alt: "Smashed window glass needing replacement by Windoor Services",
    text: [
      "Broken glass on your windows or doors? We offer a full glass replacement service.",
      "Emergency service also available.",
    ],
  },
  {
    title: "Letterbox Repaired and Replaced",
    image: "/donegal-letterbox-repair.jpg",
    width: 960,
    height: 957,
    alt: "Selection of replacement PVC door letterboxes in silver, black, white and gold",
    text: [
      "If your letterbox is draughty or rattling, Windoor Services can repair it or replace it if necessary.",
    ],
  },
  {
    title: "Lock, Hinge & Handle Repairs",
    image: "/letterkenny-lock-repair.jpg",
    width: 640,
    height: 634,
    position: "center 15%",
    alt: "Locking PVC window handle with key, replaced by Windoor Services in Letterkenny",
    text: [
      "Window handles and locks replaced and repaired.",
      "Faulty or damaged locks or hinges can stop windows and doors sealing tightly, letting in draughts and water. We repair or replace them to reduce leaks, draughts and noise.",
    ],
  },
];

const reviews = [
  {
    url: "https://share.google/RuBKiJxLOILco52JB",
    text: "We had a window smashed by a golf ball, don't ask. A quick call to Windoor and it was sorted within 24 hours. Now that's what I call service. ...",
  },
  {
    url: "https://share.google/7UMPiWccNGl2abOu9",
    text: "Excellent work done by Windoor team, new windows and door fitted, very tidy job, even fitted post box on wall. Arrived on time and worked throughout the day in horrendous weather. Highly recommend.",
  },
  {
    url: "https://share.google/kbCBtkBEzZAI0MVId",
    text: "Highly recommended. Excellent service, and got us out of a tight spot at short notice. Very professional and quality workmanship. Thanks Lawrence.",
  },
];

const areas = ["Letterkenny", "Donegal", "Ballybofey", "Buncrana", "Fanad", "Gweedore"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/windoor_logo.jpg`,
  image: `${SITE_URL}/g-1-slider_i-1_processed.jpg`,
  description: SITE_DESCRIPTION,
  telephone: "+353868979922",
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mondooey",
    addressLocality: "Manorcunningham",
    addressRegion: "Co. Donegal",
    postalCode: "F92 DC66",
    addressCountry: "IE",
  },
  areaServed: [...areas, "County Donegal"].map((name) => ({ "@type": "Place", name })),
  sameAs: [FACEBOOK_URL],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "17:30",
    },
  ],
};

function PhoneIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
      />
    </svg>
  );
}

// Only allow the address to wrap after the "@", never mid-word.
function EmailText() {
  const [user, domain] = EMAIL.split("@");
  return (
    <span>
      {user}@<wbr />
      {domain}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="logo" aria-label={`${BUSINESS_NAME} home`}>
            <Image
              src="/windoor_logo.jpg"
              alt="Windoor Repairs & Services logo"
              width={1181}
              height={276}
              loading="eager"
            />
          </a>
          <nav className="header-nav" aria-label="Main">
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#hours">Opening Hours</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-contact">
            <a className="header-phone" href={PHONE_HREF}>
              <PhoneIcon />
              {PHONE_DISPLAY}
            </a>
            <a className="header-email" href={EMAIL_HREF}>
              {EMAIL}
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero" aria-labelledby="hero-heading">
          <div className="container hero-grid">
            <div>
              <h1 id="hero-heading">Domestic, Industrial, Commercial Repairs and Replacements</h1>
              <p className="hero-lead">
                PVC window and door repairs in Letterkenny and all of Co. Donegal, with{" "}
                <strong className="highlight">over 20 years experience</strong>.
              </p>
              <p className="tick-heading">We repair and replace:</p>
              <ul className="tick-list">
                {quickServices.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="emergency">
                Emergency call out service available covering Letterkenny and all of Co. Donegal.
              </p>
            </div>

            <aside className="quote-box" aria-labelledby="quote-heading">
              <h2 id="quote-heading">Get a Free Quote</h2>
              <p>Ring us today for a free, no obligation quote.</p>
              <div className="btn-stack">
                <a className="btn btn-call btn-big" href={PHONE_HREF}>
                  <PhoneIcon />
                  {PHONE_DISPLAY}
                </a>
                <a className="btn btn-outline" href={EMAIL_HREF}>
                  <MailIcon />
                  Email Us
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section id="services" className="section" aria-labelledby="services-heading">
          <div className="container">
            <h2 id="services-heading" className="section-title">
              Our Services
            </h2>
            <div className="services-grid">
              {services.map((s) => (
                <article key={s.title} className="card">
                  <div className="card-img">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      width={s.width}
                      height={s.height}
                      style={s.position ? { objectPosition: s.position } : undefined}
                    />
                  </div>
                  <h3>{s.title}</h3>
                  <div className="card-text">
                    {s.text.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="services-cta">
              <p>Not sure what you need? Just give us a ring.</p>
              <a className="btn btn-call" href={PHONE_HREF}>
                <PhoneIcon />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        <section className="section about" aria-labelledby="about-heading">
          <div className="container">
            <h2 id="about-heading">PVC Windows &amp; Doors Repairs</h2>
            <div className="about-text">
              <p>
                Windoor Services are specialists in the repair and maintenance of PVC windows and
                doors in domestic, industrial and commercial properties in {areas.join(", ")}, in
                fact all of Co. Donegal.
              </p>
              <p>
                We offer a fast and effective PVC window or door repair or adjustment. Having
                serviced both domestic and commercial premises for over 20 years, our experience
                makes for a reliable, quick and guaranteed service.
              </p>
              <p>
                Our services include the provision of new parts for PVC windows such as handles,
                hinges, vents, locks, letterboxes, patio rollers, glass replacements, window
                replacements and also the maintenance and repair of window problems.
              </p>
              <p>
                So, whether you require repairs or any of the other services we offer, get in touch
                today. You won&rsquo;t be disappointed by our high standard of workmanship and
                affordability.
              </p>
            </div>
            <Image
              className="about-banner"
              src="/g-1-slider_i-1_processed.jpg"
              alt="Repair and service of all windows and doors: hinges, handles, vents, locks, letterboxes, patio rollers, glass replacements and window restrictors. Over 20 years experience."
              width={1920}
              height={765}
            />
          </div>
        </section>

        <section id="reviews" className="section reviews" aria-labelledby="reviews-heading">
          <div className="container">
            <h2 id="reviews-heading" className="section-title">
              What Our Customers Say
            </h2>
            <p className="section-intro">Rated 5 stars by our customers on Google.</p>
            <div className="reviews-grid">
              {reviews.map((r) => (
                <figure key={r.url} className="review-card">
                  <div className="review-head">
                    <span className="stars" role="img" aria-label="5 out of 5 stars">
                      ★★★★★
                    </span>
                    <span>Google Review</span>
                  </div>
                  <blockquote cite={r.url}>
                    <p>&ldquo;{r.text}&rdquo;</p>
                  </blockquote>
                  <figcaption>
                    <a href={r.url} target="_blank" rel="noopener noreferrer">
                      Read review
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="reviews-cta">
              <p>Happy with our work? We would really appreciate a review.</p>
              <div className="btn-row">
                <a className="btn btn-call" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                  Give a review
                </a>
                <a className="btn btn-ghost" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                  Read all our reviews
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section" aria-labelledby="contact-heading">
          <div className="container">
            <h2 id="contact-heading" className="section-title">
              Contact Us
            </h2>
            <div className="info-grid">
              <div className="info-card">
                <h3>Phone &amp; Email</h3>
                <div className="btn-stack">
                  <a className="btn btn-call" href={PHONE_HREF}>
                    <PhoneIcon />
                    {PHONE_DISPLAY}
                  </a>
                  <a className="btn btn-primary btn-email" href={EMAIL_HREF}>
                    <MailIcon />
                    <EmailText />
                  </a>
                </div>
              </div>

              <div id="hours" className="info-card">
                <h3>Opening Hours</h3>
                <dl className="hours-list">
                  <div>
                    <dt>Monday – Saturday</dt>
                    <dd>9:30am – 5:30pm</dd>
                  </div>
                  <div>
                    <dt>Sunday</dt>
                    <dd>Closed</dd>
                  </div>
                </dl>
              </div>

              <div className="info-card">
                <h3>Address</h3>
                <address>
                  {ADDRESS_LINES.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </address>
                <a className="btn btn-primary btn-block" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  <PinIcon />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="footer-name">{BUSINESS_NAME}</p>
          <div className="footer-contact">
            <a href={PHONE_HREF}>
              <PhoneIcon />
              {PHONE_DISPLAY}
            </a>
            <a href={EMAIL_HREF}>
              <MailIcon />
              <EmailText />
            </a>
          </div>
          <p>{ADDRESS_LINES.join(", ")}</p>
          <p className="footer-links">
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              Give a review
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              Find us on Facebook
            </a>
          </p>
          <p className="copyright">
            &copy; <CurrentYear fallback={new Date().getFullYear()} /> {BUSINESS_NAME}. All rights
            reserved.
          </p>
        </div>
      </footer>

      <div className="fab-group">
        <a className="fab fab-email" href={EMAIL_HREF} aria-label={`Email ${EMAIL}`}>
          <MailIcon />
        </a>
        <a className="fab fab-call" href={PHONE_HREF} aria-label={`Call ${PHONE_DISPLAY}`}>
          <PhoneIcon />
        </a>
      </div>
    </>
  );
}
