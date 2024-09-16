"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { NavigationBar } from "../NavigationBar";
import MedicalInitialHeader from "../ui/MedicalInitialHeader";
import Image from "next/image";
import { images } from "@/constants";
import NavigationBarClient from "./NavigationBarClient";

export function MedicalInstituteLanding() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically send the form data to your server
    setFormSubmitted(true);
  };

  return (
    <div className="">
      {/* Navigation Bar */}
      {/* <nav className="flex justify-around fixed top-0 w-full bg-gray-100 z-10">
        <NavigationBarClient />
      </nav> */}

     <MedicalInitialHeader />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 h-screen md:py-24">
        {/* <MedicalInitialHeader /> */}
        {/* <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">Welcome to Our Medical Institute</h1>
          <p className="text-xl text-center mb-8 opacity-90">Providing exceptional healthcare with compassion and expertise</p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Book Appointment</Button>
            <Button variant="outline" className="border-primary-foreground bg-black text-primary-foreground hover:bg-primary-foreground hover:text-primary">Learn More</Button>
          </div>
        </div> */}
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "General Medicine",
                description:
                  "Comprehensive care for a wide range of health issues.",
              },
              {
                title: "Specialized Treatments",
                description: "Advanced care for specific medical conditions.",
              },
              {
                title: "Preventive Care",
                description:
                  "Proactive health management and disease prevention.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-4">
              At MedInstitute, we are committed to delivering high-quality
              healthcare services to our community. With a team of experienced
              professionals and state-of-the-art facilities, we strive to
              provide personalized care tailored to each patient's needs.
            </p>
            <p>
              Our mission is to improve the health and well-being of our
              patients through compassionate care, innovative treatments, and
              continuous medical advancements.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Questionnaire */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            We Value Your Feedback
          </h2>
          {formSubmitted ? (
            <div className="text-center text-green-600 text-xl bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
              Thank you for your feedback! We appreciate your input.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6"
            >
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2">
                  How satisfied were you with our service?
                </Label>
                <RadioGroup defaultValue="satisfied">
                  {[
                    "Very Satisfied",
                    "Satisfied",
                    "Neutral",
                    "Dissatisfied",
                    "Very Dissatisfied",
                  ].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={option.toLowerCase().replace(" ", "-")}
                        id={option.toLowerCase().replace(" ", "-")}
                      />
                      <Label htmlFor={option.toLowerCase().replace(" ", "-")}>
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div>
                <Label
                  htmlFor="experience"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Please describe your experience
                </Label>
                <Textarea
                  id="experience"
                  placeholder="Tell us about your visit..."
                  className="w-full"
                />
              </div>
              <div>
                <Label
                  htmlFor="improvements"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  How can we improve our services?
                </Label>
                <Textarea
                  id="improvements"
                  placeholder="Your suggestions are valuable to us..."
                  className="w-full"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2">
                  Would you recommend our institute to others?
                </Label>
                <RadioGroup defaultValue="yes">
                  {["Yes", "No", "Maybe"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={option.toLowerCase()}
                        id={`recommend-${option.toLowerCase()}`}
                      />
                      <Label htmlFor={`recommend-${option.toLowerCase()}`}>
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Submit Feedback
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
