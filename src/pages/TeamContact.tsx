import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, MapPin, Phone, Mail as MailIcon } from "lucide-react";
import TeamMemberCard from "../components/shared/TeamMemberCard";

export default function TeamContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const teamMembers = [
    {
      name: "Dustin Conger",
      role: "Systems Integration Lead",
      email: "dc22627@georgiasouthern.edu"
    },
    {
      name: "Owen Warrington",
      role: "Data & UI Lead",
      email: "ow01446@georgiasouthern.edu"
    },
    {
      name: "Samuel Holder",
      role: "Hardware & Sensor Systems Lead",
      email: "sh31183@georgiasouthern.edu"
    },
    {
      name: "Jarred Waters",
      role: "Software & Firmware Lead",
      email: "jw48679@georgiasouthern.edu"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0E3A5D] mb-4">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the engineers behind the renter-friendly leak detector
          </p>
        </div>

        {/* Team Members */}
        <section className="mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                email={member.email}
              />
            ))}
          </div>
        </section>

        {/* Department & Advisor */}
        <section className="mb-20">
          <Card className="p-8 bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Department</h2>
                <p className="text-gray-200 leading-relaxed">
                  <strong>Allen E. Paulson College of Engineering and Computing</strong><br />
                  Department of Electrical & Computer Engineering<br />
                  Georgia Southern University<br />
                  Statesboro, GA 30458
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Faculty Advisor</h2>
                <p className="text-gray-200 leading-relaxed">
                  <strong>Dr. [Advisor Name]</strong><br />
                  Associate Professor<br />
                  Department of Electrical & Computer Engineering<br />
                  <a href="mailto:advisor@georgiasouthern.edu" className="text-white underline hover:text-gray-200">
                    advisor@georgiasouthern.edu
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#0E3A5D] mb-8 text-center">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-[#0E3A5D] mb-2">Location</h3>
              <p className="text-sm text-gray-600">
                Georgia Southern University<br />
                Statesboro, GA 30458
              </p>
            </Card>

            <Card className="p-6 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center mx-auto mb-4">
                <MailIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-[#0E3A5D] mb-2">Email</h3>
              <p className="text-sm text-gray-600">
                leakdetector@georgiasouthern.edu
              </p>
            </Card>

            <Card className="p-6 text-center border-2 border-gray-200 hover:border-[#2CB1A1] transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E3A5D] to-[#2CB1A1] flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-[#0E3A5D] mb-2">Phone</h3>
              <p className="text-sm text-gray-600">
                (912) 478-5000
              </p>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <Card className="p-8 max-w-3xl mx-auto border-2 border-[#2CB1A1]">
            <h2 className="text-2xl font-bold text-[#0E3A5D] mb-6 text-center">
              Send Us a Message
            </h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-800 text-center">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="mt-1 h-32"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-[#2CB1A1] hover:bg-[#2CB1A1]/90 text-white py-6 text-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </section>

        {/* Acknowledgments */}
        <section className="mt-20">
          <Card className="p-8 bg-gray-50 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#0E3A5D] mb-4 text-center">
              Acknowledgments
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              We would like to thank the faculty and staff of the Allen E. Paulson College of 
              Engineering and Computing for their guidance and support throughout this project. 
              Special thanks to our advisor for their mentorship and technical expertise, and 
              to Georgia Southern University for providing the resources necessary to bring 
              this project to fruition.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
}