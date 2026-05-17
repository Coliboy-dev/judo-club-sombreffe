import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";

export default function ShowcasePage() {
  if (process.env.NODE_ENV === "production") notFound();
  return (
    <>
      {/* Typographie */}
      <Section background="white">
        <SectionHeader title="Design System — Typographie" />
        <div className="space-y-6">
          <div>
            <p className="text-xs text-neutral-600 uppercase tracking-widest mb-2">Display Hero</p>
            <p className="font-display text-6xl lg:text-8xl uppercase text-primary leading-none">
              Judo Club
            </p>
          </div>
          <div>
            <p className="text-xs text-neutral-600 uppercase tracking-widest mb-2">Display H1</p>
            <p className="font-display text-4xl lg:text-6xl uppercase text-primary leading-none">
              Arts martiaux
            </p>
          </div>
          <div>
            <p className="text-xs text-neutral-600 uppercase tracking-widest mb-2">Display H2</p>
            <p className="font-display text-3xl lg:text-5xl uppercase text-primary leading-none">
              Province de Namur
            </p>
          </div>
          <div>
            <p className="text-xs text-neutral-600 uppercase tracking-widest mb-2">Body LG</p>
            <p className="text-lg text-neutral-700">
              Club de judo familial pratiqué avec bienveillance dans le respect des valeurs des arts martiaux.
            </p>
          </div>
          <div>
            <p className="text-xs text-neutral-600 uppercase tracking-widest mb-2">Body Base</p>
            <p className="text-base text-neutral-700">
              Ouvert aux enfants dès 5 ans et aux adultes de tous niveaux. Venez nous rejoindre au complexe sportif.
            </p>
          </div>
        </div>
      </Section>

      {/* Couleurs */}
      <Section background="light">
        <SectionHeader title="Couleurs" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { name: "Primary", bg: "bg-primary", text: "text-white" },
            { name: "Primary Light", bg: "bg-primary-light", text: "text-white" },
            { name: "Accent", bg: "bg-accent", text: "text-white" },
            { name: "Accent Light", bg: "bg-accent-light", text: "text-white" },
            { name: "Neutral 50", bg: "bg-neutral-50", text: "text-neutral-900 border border-neutral-200" },
            { name: "Neutral 100", bg: "bg-neutral-100", text: "text-neutral-900" },
            { name: "Neutral 900", bg: "bg-neutral-900", text: "text-white" },
            { name: "Neutral 950", bg: "bg-neutral-950", text: "text-white" },
          ].map(({ name, bg, text }) => (
            <div key={name} className={`${bg} ${text} p-4 text-sm font-medium`}>
              {name}
            </div>
          ))}
        </div>
      </Section>

      {/* Boutons */}
      <Section background="white">
        <SectionHeader title="Boutons" />
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary">Cours d&apos;essai</Button>
          <Button variant="secondary">Voir les cours</Button>
          <Button variant="outline">En savoir plus</Button>
          <Button variant="ghost">Annuler</Button>
          <Button variant="primary" size="sm">Petit</Button>
          <Button variant="primary" size="lg">Grand</Button>
          <Button variant="primary" disabled>Désactivé</Button>
        </div>
      </Section>

      {/* Badges */}
      <Section background="light">
        <SectionHeader title="Badges" />
        <div className="flex flex-wrap gap-3">
          <Badge variant="résultat">Résultat</Badge>
          <Badge variant="événement">Événement</Badge>
          <Badge variant="annonce">Annonce</Badge>
          <Badge variant="stage">Stage</Badge>
          <Badge variant="muted">Neutre</Badge>
        </div>
      </Section>

      {/* Cards */}
      <Section background="white">
        <SectionHeader title="Cards" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} as="article">
              <div className="h-32 bg-primary flex items-center justify-center">
                <span className="font-display text-white text-3xl uppercase">Judo</span>
              </div>
              <CardBody>
                <Badge variant="résultat" className="mb-3">Résultat</Badge>
                <h3 className="font-display text-xl text-primary uppercase mb-2">
                  Titre de l&apos;actualité {i}
                </h3>
                <p className="text-sm text-neutral-600">
                  Extrait de l&apos;actualité. Lorem ipsum court pour illustrer le composant card.
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* Section dark */}
      <Section background="primary">
        <SectionHeader title="Section Primaire" subtitle="Les sections peuvent avoir un fond coloré." light centered />
        <div className="flex justify-center mt-8">
          <Button variant="primary" size="lg">Rejoindre le club</Button>
        </div>
      </Section>

      <Section background="dark">
        <SectionHeader title="Section Sombre" subtitle="Fond neutral-950 pour les sections d'ancrage." light centered />
      </Section>
    </>
  );
}
