import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import AboutFrontix from "@/components/AboutFrontix";
import Platform from "@/components/Platform";
import Benefits from "@/components/Benefits";
import Modules from "@/components/Modules";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section id="beneficios">
        <Benefits />
      </Section>
      <Section id="frontix">
        <AboutFrontix />
      </Section>
      <Section id="plataforma">
        <Platform />
      </Section>
      <Section id="modulos">
        <Modules />
      </Section>
      <Section title="Preguntas frecuentes">
        <FAQ />
      </Section>
      <Section id="contacto" title="Solicitar asesoramiento">
        <ContactForm />
      </Section>
    </>
  );
}
