import type { Metadata } from "next"
import "./recycling.css"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "Certified Recycling and Disposal",
  description:
    "Certified recycling and disposal services for California auto dealerships, including airbags, batteries, gas tanks, pretensioners, and e-waste.",
  alternates: {
    canonical: "/recycling",
  },
}

export default function RecyclingPage() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="recycling-hero">
        <div className="recycling-hero-background">
          <div className="leaf-pattern leaf-1"></div>
          <div className="leaf-pattern leaf-2"></div>
          <div className="leaf-pattern leaf-3"></div>
          <div className="circular-orbit orbit-1"></div>
          <div className="circular-orbit orbit-2"></div>
          <div className="circular-orbit orbit-3"></div>
        </div>
        <div className="recycling-hero-content">
          <div className="hero-badge-recycle">
            <span className="recycle-icon">&#9851;&#65039;</span>
            <span>SQHUW Trained Recycling Handler</span>
          </div>
          <h1 className="recycling-hero-title">
            Keep Your Dealership
            <span className="title-accent-green"> Compliant &amp; Clean</span>
          </h1>
          <p className="recycling-hero-description">
            Auto dealerships generate hazardous waste every day&mdash;airbags, batteries, gas tanks,
            and more. As a Small Quantity Handler of Universal Waste (SQHUW) with fully trained employees, we handle it
            all so you can focus on selling cars, not managing compliance.
          </p>
          <div className="hero-impact-stats">
            <div className="impact-stat">
              <div className="impact-number">SQHUW</div>
              <div className="impact-label">Trained Handler</div>
            </div>
            <div className="impact-arrow">&rarr;</div>
            <div className="impact-stat">
              <div className="impact-number">Zero</div>
              <div className="impact-label">Landfill Waste</div>
            </div>
            <div className="impact-arrow">&rarr;</div>
            <div className="impact-stat">
              <div className="impact-number">1 Call</div>
              <div className="impact-label">Clears Your Lot</div>
            </div>
          </div>
        </div>
      </section>
      {/* The Challenge Section */}
      <section className="problem-section">
        <div className="section-container-recycle">
          <div className="two-column-layout">
            <div className="content-left">
              <span className="section-badge-recycle danger">The Dealership Risk</span>
              <h2 className="section-title-recycle">
                Hazardous Waste Your Dealership Generates Every Day
              </h2>
              <p className="section-text-recycle">
                Undeployed airbags contain explosive gas generators. Li-ion batteries can ignite.
                Gas tanks hold flammable residue. Seat belt pretensioners carry live pyrotechnic
                charges. Improper handling or disposal puts your dealer license, your staff, and
                your business at serious risk.
              </p>
              <div className="danger-list">
                <div className="danger-item">
                  <span className="danger-icon">&#9888;&#65039;</span>
                  <div>
                    <h4>Airbag &amp; Pretensioner Hazards</h4>
                    <p>Undeployed airbags and seat belt pretensioners contain live explosive
                    charges. A properly trained SQHUW handler can legally transport and dispose of them for you.</p>
                  </div>
                </div>
                <div className="danger-item">
                  <span className="danger-icon">&#9878;&#65039;</span>
                  <div>
                    <h4>Regulatory Liability</h4>
                    <p>Federal and state regulations require documented chain of custody for
                    universal waste. Violations can result in heavy fines and jeopardize your dealer license.</p>
                  </div>
                </div>
                <div className="danger-item">
                  <span className="danger-icon">&#128267;</span>
                  <div>
                    <h4>Battery Fire Risk</h4>
                    <p>Damaged or end-of-life Li-ion and lead acid batteries pose serious fire
                    and chemical hazards. They require specialized handling&mdash;not a standard dumpster.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-right">
              <div className="hazard-visualization">
                <div className="hazard-circle pulse-1">
                  <span className="hazard-label">Airbags</span>
                </div>
                <div className="hazard-circle pulse-2">
                  <span className="hazard-label">Batteries</span>
                </div>
                <div className="hazard-circle pulse-3">
                  <span className="hazard-label">Gas Tanks</span>
                </div>
                <div className="hazard-center">
                  <span className="hazard-text">Auto Hazmat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Process Section */}
      <section className="process-section">
        <div className="section-container-recycle">
          <div className="section-header-center">
            <span className="section-badge-recycle success">Simple &amp; Hassle-Free</span>
            <h2 className="section-title-recycle">Our Dealership Pickup Process</h2>
            <p className="section-description-recycle">
              We come to you, handle all the heavy lifting and paperwork, and leave
              your service team with zero disruption and full compliance documentation.
            </p>
          </div>
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-number">01</div>
              <div className="timeline-icon">&#128222;</div>
              <h3 className="timeline-title">Schedule a Pickup</h3>
              <p className="timeline-description">
                Call or email to book. We confirm a time that works around your service
                department&apos;s schedule&mdash;no disruption, no surprise visits.
              </p>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="timeline-number">02</div>
              <div className="timeline-icon">&#128666;</div>
              <h3 className="timeline-title">We Come to You</h3>
              <p className="timeline-description">
                Our certified technicians arrive at your lot, assess all materials, and handle
                every step of packaging and labeling. You don&apos;t lift a finger.
              </p>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="timeline-number">03</div>
              <div className="timeline-icon">&#9881;&#65039;</div>
              <h3 className="timeline-title">Certified Processing</h3>
              <p className="timeline-description">
                Every item goes to a licensed facility. Airbag inflators are neutralized,
                batteries are reclaimed, tanks are drained and processed&mdash;all by the book.
              </p>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="timeline-number">04</div>
              <div className="timeline-icon">&#128203;</div>
              <h3 className="timeline-title">Documentation Delivered</h3>
              <p className="timeline-description">
                Receive your certificates of recycling and disposal manifests&mdash;the paperwork
                that proves compliance if you&apos;re ever audited or inspected.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* What We Accept Section */}
      <section className="accept-section">
        <div className="section-container-recycle">
          <div className="section-header-center">
            <span className="section-badge-recycle">Materials Accepted</span>
            <h2 className="section-title-recycle">Everything Your Dealership Needs to Offload</h2>
          </div>
          <div className="materials-grid">
            <div className="material-card">
              <div className="material-icon">&#128165;</div>
              <h3 className="material-name">Airbags</h3>
              <ul className="material-list">
                <li>Deployed (post-collision)</li>
                <li>Undeployed (recalled or aged-out)</li>
                <li>Driver, passenger &amp; side curtain</li>
                <li>All makes and models</li>
              </ul>
            </div>
            <div className="material-card">
              <div className="material-icon">&#128267;</div>
              <h3 className="material-name">Batteries</h3>
              <ul className="material-list">
                <li>Lead acid (12V starter batteries)</li>
                <li>Lithium-ion (Li-ion) packs</li>
                <li>Nickel-metal hydride (NiMH)</li>
                <li>EV &amp; hybrid battery modules</li>
              </ul>
            </div>
            <div className="material-card">
              <div className="material-icon">&#9981;</div>
              <h3 className="material-name">Gas Tanks</h3>
              <ul className="material-list">
                <li>Wet tanks (with residual fuel)</li>
                <li>Dry tanks</li>
                <li>All sizes and materials</li>
                <li>Motorcycle &amp; powersport tanks</li>
              </ul>
            </div>
            <div className="material-card">
              <div className="material-icon">&#128295;</div>
              <h3 className="material-name">Other Parts &amp; E-Waste</h3>
              <ul className="material-list">
                <li>Seat belt pretensioners</li>
                <li>Miscellaneous auto parts</li>
                <li>Computers &amp; diagnostic equipment</li>
                <li>General electronic waste</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="section-container-recycle">
          <div className="benefits-layout">
            <div className="benefits-content">
              <span className="section-badge-recycle accent">Why Dealers Choose Us</span>
              <h2 className="section-title-recycle">Built for Auto Dealerships</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-icon-wrap"><span className="benefit-icon">&#10003;</span></div>
                  <div>
                    <h4 className="benefit-title">SQHUW Trained</h4>
                    <p className="benefit-text">Our employees carry proper SQHUW training&mdash;not just a recycler, the right recycler</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon-wrap"><span className="benefit-icon">&#10003;</span></div>
                  <div>
                    <h4 className="benefit-title">Zero Dealer Liability</h4>
                    <p className="benefit-text">Liability transfers to us at pickup. Your legal exposure ends at your curb</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon-wrap"><span className="benefit-icon">&#10003;</span></div>
                  <div>
                    <h4 className="benefit-title">Shop-Friendly Scheduling</h4>
                    <p className="benefit-text">We work around your service lane&mdash;no disruption to your team or customers</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon-wrap"><span className="benefit-icon">&#10003;</span></div>
                  <div>
                    <h4 className="benefit-title">Audit-Ready Docs</h4>
                    <p className="benefit-text">Every pickup includes a disposal manifest and recycling certificate ready for any inspector</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon-wrap"><span className="benefit-icon">&#10003;</span></div>
                  <div>
                    <h4 className="benefit-title">One Call, All Waste</h4>
                    <p className="benefit-text">Airbags, batteries, tanks, pretensioners, e-waste&mdash;one pickup covers everything on your lot</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon-wrap"><span className="benefit-icon">&#10003;</span></div>
                  <div>
                    <h4 className="benefit-title">No Minimums</h4>
                    <p className="benefit-text">Two airbags or a full lot cleanout&mdash;we&apos;ll come to you regardless of quantity</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="circular-economy-visual">
              <div className="economy-circle">
                <div className="economy-segment segment-1"><span>Collect</span></div>
                <div className="economy-segment segment-2"><span>Process</span></div>
                <div className="economy-segment segment-3"><span>Reclaim</span></div>
                <div className="economy-segment segment-4"><span>Comply</span></div>
                <div className="economy-center">
                  <span className="economy-text">Zero<br/>Liability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="recycle-cta-section">
        <div className="recycle-cta-content">
          <h2 className="recycle-cta-title">Ready to Clear Your Lot?</h2>
          <p className="recycle-cta-description">
            Don&apos;t let hazardous auto waste pile up or put your dealership at risk.
            One call schedules a full pickup&mdash;we handle everything from airbags to
            batteries to gas tanks, and hand you the paperwork when we&apos;re done.
          </p>
          <div className="recycle-cta-buttons">
            <a href="mailto:Info@luminslighting.com" className="btn btn-primary">
              Schedule a Pickup
              <span className="btn-arrow">&rarr;</span>
            </a>
            <a href="tel:714-296-6341" className="btn btn-outline-light">
              Call: (714) 296-6341
            </a>
          </div>
          <div className="cta-guarantee">
            <span className="guarantee-badge">&#127942;</span>
            <span>SQHUW Trained &bull; Fully Insured &bull; 100% Compliant</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
