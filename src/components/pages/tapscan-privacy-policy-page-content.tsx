import Link from "next/link";

const thirdPartyServices = [
  {
    name: "Google Play services and ML Kit",
    purpose: "On-device document scanning and text recognition",
    url: "https://policies.google.com/privacy",
  },
  {
    name: "Google Play Billing",
    purpose: "Processing the one-time TapScan Pro purchase",
    url: "https://policies.google.com/privacy",
  },
  {
    name: "Google AdMob",
    purpose: "Advertising in the free version",
    url: "https://policies.google.com/privacy",
  },
  {
    name: "Google Drive",
    purpose: "Optional user-selected export destination",
    url: "https://policies.google.com/privacy",
  },
];

export default function TapScanPrivacyPolicyPageContent() {
  return (
    <section className="section-padding">
      <div className="container-section max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-teal tracking-widest uppercase mb-3">
          Legal
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-balance">
          TapScan Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Last updated: November 3, 2026
        </p>

        <div className="space-y-6 text-base lg:text-lg text-muted-foreground leading-[1.75] text-pretty">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4">
            1. Introduction
          </h2>
          <p>
            This Privacy Policy describes how Taufan Fatahillah
            (&quot;Developer&quot;) handles data when you use TapScan
            (&quot;the app&quot;), an Android PDF document scanner published on
            Google Play Store.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4">
            2. Data We Collect
          </h2>
          <p>
            TapScan does not require an account and does not send your documents
            to the Developer. The app does not include third-party analytics or
            crash-reporting SDKs.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Scanned images, generated PDFs, thumbnails, and extracted OCR text
              are stored locally on your device.
            </li>
            <li>
              App preferences, such as your selected view mode and batch-scan
              setting, are stored locally on your device.
            </li>
            <li>
              Pro entitlement status is cached locally so the app can confirm
              your purchase when you reopen it.
            </li>
            <li>
              The Developer does not operate a server and does not receive your
              document content, OCR text, or personal information.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4">
            3. Camera and Document Processing
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              The camera is used only when you start a scan, through the document
              scanner provided by Google Play services.
            </li>
            <li>
              Document detection, image processing, and OCR run on your device.
              Your document images and recognized text are not sent to the
              Developer.
            </li>
            <li>
              Google may collect usage and diagnostic data while providing these
              services, as described in the Google Privacy Policy.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4">
            4. Sharing and Exports
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              TapScan shares or exports files only when you choose to do so
              through the Android share sheet or the system file picker.
            </li>
            <li>
              If you export to Google Drive or another provider, that provider
              receives the file you selected and handles it under its own privacy
              policy.
            </li>
            <li>
              TapScan does not access your Google Drive account directly and does
              not store credentials for third-party storage services.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4">
            5. Purchases
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              TapScan Pro is a one-time purchase processed by Google Play Billing.
            </li>
            <li>
              Google handles payment information. The Developer does not receive
              your card number or full billing details.
            </li>
            <li>
              The app queries Google Play for your purchase status and stores the
              result locally.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4">
            6. Advertising
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              The free version of TapScan may display a single banner ad on the
              Home screen, served by Google AdMob. Pro users do not see ads.
            </li>
            <li>
              AdMob may collect device information, your advertising identifier,
              and app usage data to serve and measure ads.
            </li>
            <li>
              Where required, consent for personalized advertising is requested
              through Google&apos;s User Messaging Platform before personalized
              ads are shown.
            </li>
            <li>
              Ad processing is subject to the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground transition-colors"
              >
                Google Privacy Policy
              </a>
              .
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4">
            7. Third-Party Services
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm lg:text-base border-collapse">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-2 pr-4 font-medium text-foreground">
                    Service
                  </th>
                  <th className="py-2 pr-4 font-medium text-foreground">
                    Purpose
                  </th>
                  <th className="py-2 font-medium text-foreground">
                    Privacy Policy
                  </th>
                </tr>
              </thead>
              <tbody>
                {thirdPartyServices.map((service) => (
                  <tr key={service.name} className="border-b last:border-0">
                    <td className="py-2 pr-4">{service.name}</td>
                    <td className="py-2 pr-4">{service.purpose}</td>
                    <td className="py-2">
                      <a
                        href={service.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-foreground transition-colors"
                      >
                        Link
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4">
            8. Data Storage and Retention
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Documents and app data remain on your device until you delete them
              in the app or uninstall TapScan.
            </li>
            <li>
              The Developer has no server-side copy of your documents and cannot
              access or delete them for you.
            </li>
            <li>
              If you have Android backup enabled, your device may include app data
              in its backup according to your device and Google account settings.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4">
            9. Children&apos;s Privacy
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>TapScan is not directed to children under 13.</li>
            <li>
              The Developer does not knowingly collect personal information from
              children.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4">
            10. Changes to This Policy
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>This policy may be updated from time to time.</li>
            <li>Changes are posted on this page with an updated date.</li>
            <li>
              Continued use of TapScan after a change constitutes acceptance of
              the updated policy.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4">
            11. Contact
          </h2>
          <p>
            If you have any questions about this Privacy Policy, contact us at{" "}
            <a
              href="mailto:cs.jabirdev@gmail.com"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              cs.jabirdev@gmail.com
            </a>
            .
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
