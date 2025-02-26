import { Mail, Phone, BookOpen, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Support() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-bold text-center mb-8">Need Help? We're Here for You</h1>
      <p className="text-xl text-center mb-12">
        Whether you have a quick question about Glynac.Ai or require in-depth technical support, our friendly team is
        ready to assist you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <HelpCircle className="w-7 h-7 mr-2" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">Find quick answers to common questions about our services and platform.</p>
            <a href="/faq">
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">View FAQs</Button>
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <BookOpen className="w-7 h-7 mr-2" />
              Documentation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">Access detailed guides and technical documentation for Glynac.Ai.</p>
            <a href="/resources/docs">
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">Read Docs</Button>
            </a>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-3xl">Contact Support</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center text-lg">
              <Mail className="w-7 h-7 mr-4" />
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:support@glynac.com" className="text-blue-600 hover:underline">
                  support@glynac.com
                </a>
              </div>
            </div>
            <div className="flex items-center text-lg">
              <Phone className="w-7 h-7 mr-4" />
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:+14072501040" className="text-blue-600 hover:underline">
                  +1 (407) 250-10-40
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <a href="mailto:support@glynac.com">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Get Immediate Support</Button>
        </a>
      </div>
    </div>
  );
}

export default Support;
