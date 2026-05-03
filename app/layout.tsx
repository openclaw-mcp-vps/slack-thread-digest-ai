import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Thread Digest AI — AI Summaries of Long Slack Threads",
  description:
    "Automatically generate concise summaries of lengthy Slack thread discussions with key decisions and action items. Built for engineering managers and team leads."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="bcf4aa0e-8fae-4c96-90fe-9e28213f9536"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
