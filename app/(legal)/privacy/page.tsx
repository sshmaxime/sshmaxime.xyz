import Page from "@/components/system/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <Page title="Privacy Policy" subtitle="Read carefully." separator></Page>
  );
}
