import Page from "@/components/system/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms Of Service",
};

export default function TermsOfService() {
  return (
    <Page title="Privacy Policy" subtitle="Read carefully." separator></Page>
  );
}
