"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import Link from "next/link";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/config";

const schema = z.object({
  nom: z.string().min(2, "Votre nom doit contenir au moins 2 caractères"),
  email: z.email("Adresse email invalide"),
  telephone: z.string().optional(),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caractères"),
  coursEssai: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  showTrialCheckbox?: boolean;
}

export function ContactForm({ showTrialCheckbox = true }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData: FormData) => {
    setSendError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setSendError(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle size={48} className="text-accent" aria-hidden="true" />
        <h3 className="font-display text-3xl text-primary uppercase">
          Message envoyé !
        </h3>
        <p className="text-neutral-700 max-w-sm">
          Merci pour votre message. {siteConfig.contactPersonName} vous répondra dans les meilleurs délais.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Formulaire de contact"
      className="space-y-5"
    >
      {/* Nom */}
      <div>
        <label htmlFor="nom" className="block text-sm font-semibold text-neutral-900 mb-1.5">
          Nom complet <span aria-label="champ obligatoire" className="text-accent">*</span>
        </label>
        <input
          id="nom"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-describedby={errors.nom ? "nom-error" : undefined}
          {...register("nom")}
          className={cn(
            "w-full px-4 py-3 border text-neutral-900 bg-white placeholder:text-neutral-400",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors",
            errors.nom ? "border-accent" : "border-neutral-300"
          )}
          placeholder="Jean Dupont"
        />
        {errors.nom && (
          <p id="nom-error" role="alert" className="mt-1.5 text-xs text-accent font-medium">
            {errors.nom.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-1.5">
          Adresse email <span aria-label="champ obligatoire" className="text-accent">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-required="true"
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
          className={cn(
            "w-full px-4 py-3 border text-neutral-900 bg-white placeholder:text-neutral-400",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors",
            errors.email ? "border-accent" : "border-neutral-300"
          )}
          placeholder="jean.dupont@email.com"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1.5 text-xs text-accent font-medium">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Téléphone */}
      <div>
        <label htmlFor="telephone" className="block text-sm font-semibold text-neutral-900 mb-1.5">
          Téléphone <span className="text-neutral-400 font-normal">(optionnel)</span>
        </label>
        <input
          id="telephone"
          type="tel"
          autoComplete="tel"
          {...register("telephone")}
          className="w-full px-4 py-3 border border-neutral-300 text-neutral-900 bg-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          placeholder="+32 400 00 00 00"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-1.5">
          Message <span aria-label="champ obligatoire" className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
          className={cn(
            "w-full px-4 py-3 border text-neutral-900 bg-white placeholder:text-neutral-400 resize-y",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors",
            errors.message ? "border-accent" : "border-neutral-300"
          )}
          placeholder="Bonjour, je souhaite avoir des informations sur..."
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-xs text-accent font-medium">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Cours d'essai */}
      {showTrialCheckbox && (
        <div className="flex items-start gap-3">
          <input
            id="coursEssai"
            type="checkbox"
            {...register("coursEssai")}
            className="mt-0.5 w-4 h-4 accent-accent cursor-pointer"
          />
          <label htmlFor="coursEssai" className="text-sm text-neutral-700 cursor-pointer leading-snug">
            Je suis intéressé(e) par un cours d&apos;essai gratuit
          </label>
        </div>
      )}

      {sendError && (
        <p role="alert" className="text-sm text-accent font-medium">
          Une erreur est survenue. Veuillez réessayer ou nous contacter directement via Facebook.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto gap-2"
      >
        <Send size={16} aria-hidden="true" />
        {isSubmitting ? "Envoi en cours…" : "Envoyer le message"}
      </Button>

      <p className="text-xs text-neutral-500 leading-relaxed">
        <span className="text-accent">*</span>{" "}Champs obligatoires. En envoyant ce formulaire, vous acceptez que vos
        informations soient utilisées pour répondre à votre demande.{" "}
        <Link
          href="/confidentialite"
          className="underline hover:text-accent transition-colors"
        >
          Politique de confidentialité
        </Link>
        .
      </p>
    </form>
  );
}
