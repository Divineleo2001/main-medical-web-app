import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Stethoscope, Clipboard, Users, Phone } from 'lucide-react'

export default function OutPatient() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-700 text-white py-12 md:py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Outpatient Services</h1>
            <p className="text-lg md:text-xl mb-8">Quality care without hospital admission</p>
            <Button className="bg-white text-blue-700 hover:bg-blue-100">
              Schedule an Appointment
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-800">Our Outpatient Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Stethoscope className="w-6 h-6" />, title: 'General Consultations' },
                { icon: <Clipboard className="w-6 h-6" />, title: 'Diagnostic Tests' },
                { icon: <Users className="w-6 h-6" />, title: 'Specialist Referrals' },
                { icon: <Calendar className="w-6 h-6" />, title: 'Follow-up Appointments' },
                { icon: <Clock className="w-6 h-6" />, title: 'Same-Day Procedures' },
                { icon: <Phone className="w-6 h-6" />, title: 'Telemedicine Services' },
              ].map((service) => (
                <Card key={service.title} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-600">
                      {service.icon}
                      <span className="ml-2">{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Comprehensive care tailored to your needs.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment Process Section */}
        <section className="bg-blue-100 py-12 md:py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-800">Appointment Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: 1, title: 'Schedule', description: 'Book online or call our appointment line' },
                { step: 2, title: 'Prepare', description: 'Gather medical records and insurance information' },
                { step: 3, title: 'Visit', description: 'Arrive 15 minutes early for your appointment' },
              ].map((step) => (
                <Card key={step.step} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-blue-600">Step {step.step}: {step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Patient Resources Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-800">Patient Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Patient Portal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Access your medical records, test results, and communicate with your healthcare team.</p>
                  <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700">Log In</Button>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Health Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Browse our library of health articles, videos, and interactive tools.</p>
                  <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Insurance & Billing Section */}
        <section className="bg-blue-100 py-12 md:py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-800">Insurance & Billing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Accepted Insurance Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>Medicare</li>
                    <li>Medicaid</li>
                    <li>Blue Cross Blue Shield</li>
                    <li>Aetna</li>
                    <li>UnitedHealthcare</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Billing Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our billing specialists are here to help you understand your medical bills and payment options.</p>
                  <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700">Contact Billing</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-700 text-white py-12 md:py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Schedule Your Visit?</h2>
            <p className="text-lg md:text-xl mb-8">Our outpatient team is here to provide you with excellent care</p>
            <Button className="bg-white text-blue-700 hover:bg-blue-100">
              Book an Appointment
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Hospital Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}