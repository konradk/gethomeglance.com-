import { Link, createFileRoute } from '@tanstack/react-router'
import { BrandLink } from '../components/BrandLink'

export const Route = createFileRoute('/privacy-policy')({
  head: () => ({
    meta: [
      {
        title: 'Privacy Policy | HomeGlance for Home Assistant',
      },
      {
        name: 'description',
        content:
          'Privacy Policy for HomeGlance for Home Assistant, including data handling, retention, and contact details.',
      },
    ],
  }),
  component: PrivacyPolicyPage,
})

const LAST_UPDATED = 'February 16, 2026'

function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <div className="site-wrap legal-wrap">
        <header className="topbar legal-topbar">
          <BrandLink />
          <Link to="/" className="notify-link legal-back-link">
            Back to Home
          </Link>
        </header>

        <article className="legal-card">
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy explains how HomeGlance for Home Assistant
            (&quot;HomeGlance&quot;, &quot;we&quot;, &quot;our&quot;) handles
            information when you use our macOS app and website.
          </p>
          <p className="legal-meta">Last updated: {LAST_UPDATED}</p>

          <section className="legal-section">
            <h2>1. Information We Handle</h2>
            <p>
              HomeGlance is designed to work directly with your Home Assistant
              instance. Most app data stays on your device.
            </p>
            <ul className="legal-list">
              <li>
                <strong>Connection data:</strong> Home Assistant URL and a
                long-lived access token that you provide.
              </li>
              <li>
                <strong>App settings:</strong> Favorites, ordering, and display
                preferences saved locally on your Mac.
              </li>
              <li>
                <strong>Home state data:</strong> Device states and control
                responses received from your Home Assistant instance while you
                use the app.
              </li>
              <li>
                <strong>Support communications:</strong> If you contact us, we
                receive the information you include in your message.
              </li>
              <li>
                <strong>No in-app account:</strong> HomeGlance does not require
                account registration to use core app functionality.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Information</h2>
            <ul className="legal-list">
              <li>Connect the app to your Home Assistant instance.</li>
              <li>Display real-time status and enable controls you request.</li>
              <li>Store your configuration so the app works as expected.</li>
              <li>Respond to support requests and improve reliability.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Data Sharing and Tracking</h2>
            <ul className="legal-list">
              <li>
                We do not sell personal data and we do not use third-party ad
                SDKs.
              </li>
              <li>
                We do not track you across third-party apps or websites for
                advertising.
              </li>
              <li>
                App control data is exchanged between your Mac and your Home
                Assistant server.
              </li>
              <li>
                We may disclose information only when required by law or legal
                process.
              </li>
              <li>
                If we use service providers to process personal information on
                our behalf (for example, email support), they must protect that
                information under confidentiality and security obligations.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Security</h2>
            <ul className="legal-list">
              <li>
                Home Assistant access tokens are stored in macOS Keychain.
              </li>
              <li>
                Sensitive values are redacted in optional debug logs.
              </li>
              <li>
                Network security also depends on your Home Assistant deployment
                and URL configuration.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Data Retention and Deletion</h2>
            <ul className="legal-list">
              <li>
                App settings remain on your device until you change or remove
                them.
              </li>
              <li>
                Using the in-app &quot;Remove Connection&quot; option clears
                connection data and favorites from the app.
              </li>
              <li>
                You can revoke consent for app data processing by removing your
                connection or uninstalling the app.
              </li>
              <li>
                If you contact support, we retain communication records only as
                needed to respond and meet legal obligations.
              </li>
              <li>
                You can request deletion of support communication records by
                emailing us at contact@homeglance.com.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Children&apos;s Privacy</h2>
            <p>
              HomeGlance is not directed to children under 13, and we do not
              knowingly collect personal information from children.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Your Rights</h2>
            <p>
              Depending on your location, you may have rights to request access,
              correction, deletion, or restriction of personal information. You
              can contact us to submit a request.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Apple App Store Privacy Disclosures</h2>
            <p>
              For App Store privacy labeling, HomeGlance is designed so that app
              usage data is not collected by us for third-party advertising or
              cross-app/web tracking. If that changes, we will update this policy
              and App Store privacy information.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make
              material changes, we will update the date at the top of this page.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Contact</h2>
            <p>
              For privacy questions, contact us at{' '}
              <a href="mailto:contact@homeglance.com">
                contact@homeglance.com
              </a>
              .
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
