// pages/index.tsx

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BriefcaseIcon, CodeIcon, GlobeIcon, MailIcon, MapPinIcon, PhoneIcon, UserIcon, BarChartIcon, ShieldIcon, DatabaseIcon, Instagram,
} from "lucide-react";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Lucas Dupetit</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="text-gray-600 hover:text-gray-900">
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold mb-4">
              Consultant IT Digital à Paris
            </h2>
            <p className="text-xl mb-8">
              Transformez votre entreprise avec des solutions numériques
              innovantes
            </p>
            <Button size="lg"><a href="#contact">Contactez-moi</a></Button>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              À propos de moi
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <img
                  src=".\assets\profile.jpg"
                  alt="Lucas Dupetit"
                  className="rounded-full w-64 h-64 object-cover mx-auto"
                />
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-lg mb-4">
                  Bonjour, je suis Lucas Dupetit, consultant IT Digital basé à
                  Paris. Avec 5 ans d'expérience dans le domaine,
                  j'aide les entreprises à naviguer dans le paysage numérique en
                  constante évolution.
                </p>
                <p className="text-lg mb-4">
                  Ma passion est de combiner la technologie et la stratégie pour
                  créer des solutions innovantes qui stimulent la croissance et
                  l'efficacité des entreprises.
                </p>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-gray-600" />
                  <span>Paris, France</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Mes Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GlobeIcon className="w-5 h-5" />
                    Transformation Digitale
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Accompagnement dans la transition numérique de votre
                    entreprise pour améliorer l'efficacité et la compétitivité.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CodeIcon className="w-5 h-5" />
                    Développement de Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Conception et mise en œuvre de solutions logicielles sur
                    mesure pour répondre à vos besoins spécifiques.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BriefcaseIcon className="w-5 h-5" />
                    Conseil Stratégique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Analyse de vos processus et recommandations pour optimiser
                    votre infrastructure IT et vos stratégies numériques.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="projects" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Projets Réalisés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChartIcon className="w-5 h-5" />
                    Optimisation des Processus pour Entreprise Logistique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Client : Société de transport</p>
                  <p className="mb-2">Durée : 6 mois</p>
                  <p>Mise en place d'un système de gestion de flotte en temps réel, réduisant les coûts opérationnels de 25% et améliorant la satisfaction client de 40%.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldIcon className="w-5 h-5" />
                    Renforcement de la Cybersécurité pour Banque Régionale
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Client : Domaine Bancaire</p>
                  <p className="mb-2">Durée : 4 mois</p>
                  <p>Implémentation d'une stratégie de sécurité multicouche, réduisant les incidents de sécurité de 80% et assurant la conformité aux normes bancaires internationales.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DatabaseIcon className="w-5 h-5" />
                    Migration vers le Cloud pour Entreprise de E-commerce
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Client : Commerce en ligne</p>
                  <p className="mb-2">Durée : 3 mois</p>
                  <p>Migration complète de l'infrastructure vers AWS, résultant en une réduction des coûts d'hébergement de 35% et une amélioration des temps de chargement de 60%.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CodeIcon className="w-5 h-5" />
                    Développement d'une Plateforme IoT pour Industrie Manufacturière
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Client : Industrie</p>
                  <p className="mb-2">Durée : 8 mois</p>
                  <p>Création d'une plateforme IoT sur mesure pour la surveillance en temps réel de la production, augmentant l'efficacité de 30% et réduisant les temps d'arrêt de 50%.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Contactez-moi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Informations de contact</CardTitle>
                  <CardDescription>
                    N'hésitez pas à me contacter pour toute question ou demande
                    de consultation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MailIcon className="w-5 h-5 text-gray-600" />
                    <span>dupetit.lucas75@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="w-5 h-5 text-gray-600" />
                    <span>+33 1 23 45 67 89</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5 text-gray-600" />
                    <span>Paris, France</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <Instagram className="w-5 h-5" />
                      <a href="https://www.instagram.com/lc_dpt/" target="_blank">Lucas Dupetit</a>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Envoyez-moi un message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full">
                      Envoyer
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Lucas Dupetit. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
