import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Heart, Brain, Bone, Eye, Stethoscope, Baby, Search } from 'lucide-react'

export default function Specialities() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Hospital Name</Link>
          <nav>
            <Link href="/specialities" className="ml-4 hover:underline">Specialities</Link>
            {/* Add more nav items as needed */}
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-700 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Medical Specialities</h1>
            <p className="text-xl mb-8">Comprehensive care across a wide range of medical fields</p>
            <Button className="bg-white text-blue-700 hover:bg-blue-100">
              Find a Specialist
            </Button>
          </div>
        </section>

        {/* Featured Specialities Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Featured Specialities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Heart className="w-6 h-6" />, title: 'Cardiology', description: 'Expert care for heart conditions' },
                { icon: <Brain className="w-6 h-6" />, title: 'Neurology', description: 'Advanced treatment for neurological disorders' },
                { icon: <Bone className="w-6 h-6" />, title: 'Orthopedics', description: 'Specialized care for bones and joints' },
                { icon: <Eye className="w-6 h-6" />, title: 'Ophthalmology', description: 'Comprehensive eye care services' },
                { icon: <Stethoscope className="w-6 h-6" />, title: 'Internal Medicine', description: 'Holistic adult healthcare' },
                { icon: <Baby className="w-6 h-6" />, title: 'Pediatrics', description: 'Dedicated care for children and adolescents' },
              ].map((speciality) => (
                <Card key={speciality.title} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-600">
                      {speciality.icon}
                      <span className="ml-2">{speciality.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{speciality.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Speciality Search Section */}
        <section className="bg-blue-100 py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Find Your Speciality</h2>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search specialities..."
                  className="w-full p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-3 text-blue-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Centers of Excellence Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Centers of Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Cancer Center', description: 'Comprehensive cancer care and cutting-edge treatments' },
                { title: 'Heart and Vascular Institute', description: 'Advanced cardiac and vascular services' },
                { title: 'Neuroscience Center', description: 'Innovative neurological and neurosurgical care' },
                { title: 'Women\'s Health Center', description: 'Specialized care for women at every stage of life' },
              ].map((center) => (
                <Card key={center.title} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-blue-600">{center.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{center.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team of Experts Section */}
        <section className="bg-blue-100 py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-800">Our Team of Experts</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our hospital is home to world-renowned specialists dedicated to providing exceptional patient care.
            </p>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Meet Our Doctors
            </Button>
          </div>
        </section>

        {/* Patient Stories Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Patient Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'John D.', speciality: 'Cardiology', quote: 'The cardiac team saved my life. I\'m forever grateful.' },
                { name: 'Sarah M.', speciality: 'Neurology', quote: 'After my stroke, the neurology department helped me fully recover.' },
                { name: 'Michael R.', speciality: 'Orthopedics', quote: 'Thanks to the orthopedic surgeons, I\'m back to running marathons.' },
              ].map((story) => (
                <Card key={story.name} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-blue-600">{story.name}</CardTitle>
                    <CardDescription>{story.speciality} Patient</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>"{story.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-700 text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Specialized Care?</h2>
            <p className="text-xl mb-8">Our team of experts is ready to provide you with world-class medical care</p>
            <Button className="bg-white text-blue-700 hover:bg-blue-100">
              Schedule a Consultation
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