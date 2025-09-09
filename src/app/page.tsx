import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import AboutFrontix from "@/components/AboutFrontix";
import Platform from "@/components/Platform";
import Benefits from "@/components/Benefits";
import Modules from "@/components/Modules";
import Customers from "@/components/Customers";
import Monitoring from "@/components/Monitoring";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section id="benefits">
        <Benefits />
      </Section>
      <Section id="frontix">
        <AboutFrontix />
      </Section>
      <Section id="platform">
        <Platform />
      </Section>
      <Section id="modules">
        <Modules />
      </Section>
      <Section id="customers-trust">
        <Customers />
      </Section>
      <Section
        id="monitoring"
        fullWidth
        bgColor="bg-primary"
        className="pt-24 pb-36"
      >
        <Monitoring />
      </Section>
      <Section id="faq" className="pt-0 pb-0">
        <FAQ />
      </Section>
      <Section id="contacto">
        <ContactForm />
      </Section>
    </>
  );
}
