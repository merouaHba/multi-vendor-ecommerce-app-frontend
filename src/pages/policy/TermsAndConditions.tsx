import{ ReactNode, useState } from "react";
import { ChevronDown, ChevronUp, Printer, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
type Section = {
      id: string,
      title: string,
  content:ReactNode
     }
const TermsAndConditions = () => {
  const [expandedSections, setExpandedSections] = useState<Section | null>(null);

  const sections = [
    {
      id: "overview",
      title: "Overview",
      content:
        "Welcome to our multivendor marketplace. By accessing and using this website, you agree to comply with these terms and conditions.",
    },
    {
      id: "account",
      title: "Account Registration",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Users must be at least 18 years old</li>
          <li>Vendors must provide valid business information</li>
          <li>Accounts must maintain accurate, current information</li>
          <li>Passwords must be kept confidential</li>
        </ul>
      ),
    },
    {
      id: "vendor",
      title: "Vendor Obligations",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Maintain accurate product listings</li>
          <li>Honor listed prices and availability</li>
          <li>Process orders within stated timeframes</li>
          <li>Comply with all applicable laws and regulations</li>
          <li>Maintain quality standards</li>
        </ul>
      ),
    },
    {
      id: "conduct",
      title: "User Conduct",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide accurate information</li>
          <li>Use the platform legally and responsibly</li>
          <li>No unauthorized access attempts</li>
          <li>No interference with site functionality</li>
          <li>No harmful or malicious activities</li>
        </ul>
      ),
    },
    {
      id: "ip",
      title: "Intellectual Property",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>All site content is protected by copyright</li>
          <li>Vendors retain rights to their content</li>
          <li>Limited license granted for platform use</li>
          <li>No unauthorized reproduction</li>
        </ul>
      ),
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Website provided "as is"</li>
          <li>No guarantee of uninterrupted service</li>
          <li>Not liable for third-party content</li>
          <li>Limited liability for damages</li>
        </ul>
      ),
    },
    {
      id: "termination",
      title: "Termination",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Account termination for violations</li>
          <li>Right to suspend accounts</li>
          <li>Effect on pending transactions</li>
          <li>Data retention policy</li>
        </ul>
      ),
    },
  ];

  const toggleSection = (sectionId:string) => {
    
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Terms & Conditions</h1>
          <p className="text-gray-600">Last updated: October 29, 2024</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Printer className="w-4 h-4" />
            Print
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Download PDF
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="p-6">
          <p className="text-gray-600">
            Please read these terms and conditions carefully before using our
            marketplace. By accessing or using our platform, you agree to be
            bound by these terms.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {sections.map((section) => (
          <Card key={section.id} className="overflow-hidden">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-xl font-semibold text-left">
                {section.title}
              </h2>
              {expandedSections[section.id] as Section ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {expandedSections[section.id] && (
              <CardContent className="p-4 pt-0">
                <div className="prose max-w-none">{section.content}</div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      <footer className="mt-8 text-center text-gray-600 text-sm">
        <p>If you have any questions about these terms, please contact us.</p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
