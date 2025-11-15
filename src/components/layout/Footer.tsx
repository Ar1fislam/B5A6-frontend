import { Logo } from "@/assets/icons/Logo";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[var(--card)] text-[var(--muted-foreground)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
            </div>
            <p className="text-sm">
              Effortlessly organize and oversee your finances with confidence.
            </p>
          </div>

          <div>
            <h3 className="text-[var(--foreground)] font-semibold mb-4">
              Platform
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/features"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  Capabilities
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  Protection
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  Subscriptions
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  Enterprise Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[var(--foreground)] font-semibold mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="#"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  Newsroom
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  Customer Care
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  Technical Docs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[var(--foreground)] font-semibold mb-4">
              Organization
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  Open Positions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  Affiliates
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--border)] text-sm text-center">
          <p>
            © {new Date().getFullYear()}All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link
              to="#"
              className="hover:text-[var(--primary)] transition-colors"
            >
              Data Use
            </Link>
            <Link
              to="#"
              className="hover:text-[var(--primary)] transition-colors"
            >
              Service Terms
            </Link>
            <Link
              to="#"
              className="hover:text-[var(--primary)] transition-colors"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
