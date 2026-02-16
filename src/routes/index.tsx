import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { BrandLink } from '../components/BrandLink'
import screenshotCamera from '../screenshots/camera.png'
import screenshotFavorites from '../screenshots/facvourites.png'
import heroImage from '../screenshots/hero.jpeg'
import heroImageWebp from '../screenshots/hero.webp'
import screenshotPlayer from '../screenshots/player.png'
import screenshotSettings from '../screenshots/settings.png'
import homeglanceMainVideo from '../video/HomeGlance-www-compressed.mp4'

export const Route = createFileRoute('/')({ component: App })

const detailedFeatures = [
  {
    title: 'Favorites-first menu bar control',
    description:
      'See only the devices that matter to you every day. Reorder favorites and keep your workflow fast.',
  },
  {
    title: 'Real-time state sync',
    description:
      'HomeGlance listens for Home Assistant state updates over WebSocket so statuses stay current.',
  },
  {
    title: 'Rich controls where needed',
    description:
      'Adjust brightness, media volume, and climate targets with controls designed for quick desktop use.',
  },
  {
    title: 'Native security model',
    description:
      'Your long-lived token is stored in macOS Keychain, and HomeGlance connects directly to your Home Assistant instance.',
  },
]

const controlGroups = [
  {
    title: 'Lights, switches, and fans',
    description: 'One-click on/off with brightness support for lights.',
  },
  {
    title: 'Climate and covers',
    description:
      'Set target temperatures and control covers without opening dashboards.',
  },
  {
    title: 'Media players and cameras',
    description:
      'Playback controls, volume adjustment, and camera views in one place.',
  },
  {
    title: 'Locks and scenes',
    description: 'Lock/unlock doors and trigger scenes in seconds.',
  },
]

const setupSteps = [
  {
    title: 'Connect Home Assistant',
    description:
      'Add your Home Assistant URL and long-lived access token in HomeGlance settings.',
  },
  {
    title: 'Pick and order favorites',
    description:
      'Choose the entities you use most and arrange them in the order you want in the menu.',
  },
  {
    title: 'Control everything at a glance',
    description:
      'Use fast menu bar actions and see state changes instantly while you work.',
  },
]

const screenshotSlots = [
  {
    title: 'Connection setup screenshot',
    description:
      'Settings view with URL field, token field, and Test Connection result.',
    image: screenshotSettings,
    alt: 'HomeGlance connection setup screenshot',
  },
  {
    title: 'Favorites management screenshot',
    description:
      'Entity picker with search, filters, and drag-and-drop ordering.',
    image: screenshotFavorites,
    alt: 'HomeGlance favorites management screenshot',
  },
  {
    title: 'Controls in action screenshot',
    description: 'Expanded rows showing climate, media, and camera controls.',
    image: screenshotCamera,
    alt: 'HomeGlance controls panel screenshot',
  },
]

function App() {
  return (
    <main className="landing-page">
      <div className="site-wrap">
        <div className="hero-stage">
          <header className="topbar">
            <BrandLink />
            <a href="#updates" className="notify-link">
              Get Notified
            </a>
          </header>

          <section className="hero-block">
            <div className="hero-content">
              <h1 className="hero-title">
                Your smart home favorites, at a glance.
              </h1>
              <p className="hero-copy">
                Instantly control your Home Assistant lights, climate, media,
                and cameras from your Mac menu bar. No browser tabs required.
              </p>
              <form
                id="updates"
                className="hero-form"
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  className="hero-input"
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email"
                />
                <button className="hero-cta" type="submit">
                  Notify Me on Launch
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <p className="coming-copy">Coming soon for macOS 14+</p>
            </div>

            <div className="hero-media">
              <div className="hero-app-frame">
                <picture>
                  <source srcSet={heroImageWebp} type="image/webp" />
                  <img
                    src={heroImage}
                    alt="HomeGlance app interface running on macOS"
                    className="hero-app-image"
                  />
                </picture>
              </div>
            </div>
          </section>
        </div>

        <section
          className="hero-video-block"
          aria-label="HomeGlance demo video"
        >
          <video
            className="hero-demo-video"
            src={homeglanceMainVideo}
            controls
            playsInline
            preload="metadata"
          />
        </section>

        <section id="features" className="feature-block">
          <h2 className="feature-title">Features</h2>
          <div className="feature-grid">
            <article className="feature-copy-card">
              <h3>Designed for speed.</h3>
              <p>
                A favorites-first approach. Pin your daily devices to the menu
                bar for instant access. Drag and drop to reorder based on your
                workflow.
              </p>
            </article>

            <article className="media-placeholder">
              <div className="media-label">Preview</div>
              <div className="media-shot">
                <img
                  src={screenshotFavorites}
                  alt="HomeGlance favorites menu screenshot preview"
                />
              </div>
              <h4 className="media-title">Favorites menu screenshot</h4>
              <p className="media-copy">
                Favorites list with quick access controls and drag-to-order
                flow.
              </p>
            </article>

            <article className="feature-copy-card">
              <h3>Secure & Native.</h3>
              <p>
                Built exclusively for macOS with Swift. Your long-lived access
                token is safely stored in the macOS Keychain, and states update
                in real-time via WebSocket.
              </p>
            </article>

            <article className="feature-combo-card">
              <div className="media-placeholder">
                <div className="media-label">Preview</div>
                <div className="media-shot">
                  <img
                    src={screenshotPlayer}
                    alt="HomeGlance controls screenshot preview"
                  />
                </div>
                <h4 className="media-title">Rich controls screenshot</h4>
                <p className="media-copy">
                  Climate, camera, and media controls presented in a compact
                  panel.
                </p>
              </div>
              <h3>More than just toggles.</h3>
              <p>
                Rich controls for what matters. Adjust thermostat ranges, scrub
                through media, and view live camera streams without opening the
                full Home Assistant dashboard.
              </p>
            </article>
          </div>
        </section>

        <section id="details" className="details-block">
          <div className="section-head">
            <p className="section-kicker">Feature Deep Dive</p>
            <h2 className="details-title">
              Built for real Home Assistant workflows.
            </h2>
            <p className="details-copy">
              HomeGlance is designed to reduce friction when you are on your
              Mac. It combines a minimal menu bar interface with the controls
              you actually use throughout the day.
            </p>
          </div>

          <div className="details-grid">
            {detailedFeatures.map((feature) => (
              <article key={feature.title} className="details-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="controls" className="controls-block controls-split">
          <div className="section-head controls-head">
            <p className="section-kicker">Supported Entities</p>
            <h2 className="details-title">What you can control</h2>
            <p className="details-copy">
              HomeGlance supports the Home Assistant entities most people use
              every day, so quick actions stay quick.
            </p>
          </div>
          <div className="controls-grid">
            {controlGroups.map((group) => (
              <article key={group.title} className="controls-card">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="workflow" className="setup-block setup-band-layout">
          <div className="section-head setup-band">
            <p className="section-kicker">Launch Workflow</p>
            <h2 className="details-title">How HomeGlance works</h2>
            <p className="details-copy">
              Connect once, pick favorites once, then control your home from the
              menu bar every day.
            </p>
          </div>
          <div className="setup-grid setup-grid-compact">
            {setupSteps.map((step, index) => (
              <article key={step.title} className="setup-card">
                <span className="setup-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="screenshots" className="screens-block screens-asymmetric">
          <div className="section-head">
            <p className="section-kicker">Product Screenshots</p>
            <h2 className="details-title">Current app previews</h2>
            <p className="details-copy">
              Latest captures from HomeGlance flows: setup, favorites, and rich
              controls.
            </p>
          </div>
          <div className="screens-grid">
            {screenshotSlots.map((slot, index) => (
              <article
                key={slot.title}
                className={`screens-card screens-card-slot-${index + 1}`}
              >
                <div className="media-label">Screenshot</div>
                <h3>{slot.title}</h3>
                <p>{slot.description}</p>
                <div className="media-shot media-shot-slot">
                  <img src={slot.image} alt={slot.alt} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="site-footer">
          <p>
            © {new Date().getFullYear()} HomeGlance. Not affiliated with Home
            Assistant.
          </p>
          <div className="footer-links">
            <a href="mailto:contact@homeglance.com">Contact</a>
            <span>·</span>
            <Link to="/privacy-policy">Privacy</Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
