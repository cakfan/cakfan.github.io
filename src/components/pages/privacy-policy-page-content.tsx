import Link from "next/link";

const thirdPartyServices = [
  {
    name: "Google AdMob",
    purpose: "Advertising",
    url: "https://policies.google.com/privacy",
  },
  {
    name: "Google Play Services",
    purpose: "Core functionality",
    url: "https://policies.google.com/privacy",
  },
];

export default function PrivacyPolicyPageContent() {
  return (
    <section className="section-padding">
      <div className="container-section max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-teal tracking-widest uppercase mb-3">
          Legal
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-balance">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Last updated: August 22, 2026
        </p>

        <div className="space-y-6 text-base lg:text-lg text-muted-foreground leading-[1.75] text-pretty">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4">
            1. Introduction
          </h2>
          <p>
            This Privacy Policy describes how Taufan Fatahillah (&quot;Developer&quot;)
            collects, uses, and protects data when you use applications published
            under this developer account on Google Play Store.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4">
            2. Data We Collect
          </h2>
          <div>
            <h3 className="font-medium text-foreground">User preferences</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>App settings, selections, and configurations</li>
              <li>Stored locally on device only</li>
              <li>Not transmitted to any server</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-foreground">App data</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Content displayed within the app is sourced from publicly
                available data
              </li>
              <li>No personal information is collected through these requests</li>
              <li>Cached locally on device for offline access</li>
            </ul>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4">
            3. Advertising
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Apps may contain advertisements served by Google AdMob</li>
            <li>
              AdMob may collect: device information, advertising identifier,
              app usage data
            </li>
            <li>
              Subject to the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground transition-colors"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              User consent obtained via Google UMP SDK (User Messaging Platform)
              before personalized ads are served
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4">
            4. Third-Party Services
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm lg:text-base border-collapse">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-2 pr-4 font-medium text-foreground">Service</th>
                  <th className="py-2 pr-4 font-medium text-foreground">Purpose</th>
                  <th className="py-2 font-medium text-foreground">Privacy Policy</th>
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
            5. Data Storage &amp; Security
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>All user data stored locally on device</li>
            <li>No data transmitted to developer&apos;s servers</li>
            <li>No user accounts or login required</li>
            <li>No personal information collected</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4">
            6. Children&apos;s Privacy
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>App is not directed to children under 13</li>
            <li>Does not knowingly collect personal information from children</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4">
            7. Changes to This Policy
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Policy may be updated from time to time</li>
            <li>Changes posted on this page with updated date</li>
            <li>Continued use constitutes acceptance of changes</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4">
            8. Contact
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
