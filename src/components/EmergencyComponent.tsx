import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  PhoneCall,
  Clock,
  MapPin,
  AlertCircle,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

export default function EmergencyComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Hospital Name
          </Link>
          <nav>
            <Link href="/emergencies" className="ml-4 hover:underline">
              Emergencies
            </Link>
            {/* Add more nav items as needed */}
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-700 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Emergency Services</h1>
            <p className="text-xl mb-8">
              Fast, reliable care when you need it most
            </p>
            <Button className="bg-white text-blue-700 hover:bg-blue-100">
              Call Emergency: 911
            </Button>
          </div>
        </section>

        {/* Emergency List Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
              Current Emergencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Cardiac",
                "Trauma",
                "Stroke",
                "Pediatric",
                "Burns",
                "Respiratory",
              ].map((emergency) => (
                <Card key={emergency} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-blue-600">
                      {emergency} Emergency
                    </CardTitle>
                    <CardDescription>
                      24/7 Specialized Care Available
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our team is equipped to handle {emergency.toLowerCase()}{" "}
                      emergencies with state-of-the-art facilities.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-blue-100 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
              Our Emergency Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <PhoneCall className="w-6 h-6" />,
                  title: "24/7 Emergency Hotline",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Rapid Response Team",
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "GPS-Guided Ambulance",
                },
                {
                  icon: <AlertCircle className="w-6 h-6" />,
                  title: "Critical Care Unit",
                },
                {
                  icon: <HelpCircle className="w-6 h-6" />,
                  title: "Emergency Triage",
                },
                {
                  icon: <ArrowRight className="w-6 h-6" />,
                  title: "Fast-Track Treatment",
                },
              ].map((service) => (
                <Card key={service.title} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-600">
                      {service.icon}
                      <span className="ml-2">{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-800">
              Emergency Contacts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <PhoneCall className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Emergency Hotline
                </h3>
                <p className="text-lg">911</p>
              </div>
              <div>
                <Clock className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  24/7 Availability
                </h3>
                <p>Always open for emergencies</p>
              </div>
              <div>
                <MapPin className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p>123 Hospital Street, City, State 12345</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-blue-100 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What should I do in case of an emergency?",
                  a: "Call 911 immediately or come to our emergency department.",
                },
                {
                  q: "Do I need to bring anything to the emergency room?",
                  a: "If possible, bring your ID, insurance card, and list of current medications.",
                },
                {
                  q: "How long will I have to wait in the emergency room?",
                  a: "Wait times vary based on the severity of your condition and current patient volume.",
                },
                {
                  q: "Can I visit a patient in the emergency room?",
                  a: "Visitation may be limited depending on the patient's condition and current health guidelines.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-blue-600">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-700 text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl mb-8">
              Our emergency team is ready to help you 24/7
            </p>
            <Button className="bg-white text-blue-700 hover:bg-blue-100">
              Contact Emergency Services
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Hospital Name. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
