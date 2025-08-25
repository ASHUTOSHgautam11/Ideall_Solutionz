import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function GetInTouch() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Partnership inquiry submitted");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-primary">Partner With Us</h1>
        <p className="text-xl text-muted-foreground">
          Connect with our international trade specialists for comprehensive procurement solutions and global sourcing expertise.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Start Your Procurement Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Business Email</Label>
                <Input id="email" type="email" placeholder="john.doe@company.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Your Company Ltd." required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Position/Title</Label>
                <Input id="position" placeholder="Procurement Manager" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country/Region</Label>
                <Input id="country" placeholder="Singapore" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessType">Business Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="distributor">Distributor/Importer</SelectItem>
                    <SelectItem value="retailer">Retailer</SelectItem>
                    <SelectItem value="contractor">Contractor/Installer</SelectItem>
                    <SelectItem value="designer">Interior Designer</SelectItem>
                    <SelectItem value="developer">Property Developer</SelectItem>
                    <SelectItem value="manufacturer">Manufacturer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests">Procurement Categories of Interest</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Primary category of interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="floorings">Floorings</SelectItem>
                    <SelectItem value="furniture">Furniture</SelectItem>
                    <SelectItem value="fabrics">Fabrics</SelectItem>
                    <SelectItem value="fashion-walls">Fashion Walls</SelectItem>
                    <SelectItem value="multiple">Multiple Categories</SelectItem>
                    <SelectItem value="consultation">Procurement Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="volume">Expected Order Volume</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Estimated procurement volume" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sample">Sample Orders</SelectItem>
                    <SelectItem value="small">Small Volume (< $50K USD)</SelectItem>
                    <SelectItem value="medium">Medium Volume ($50K - $200K USD)</SelectItem>
                    <SelectItem value="large">Large Volume ($200K+ USD)</SelectItem>
                    <SelectItem value="ongoing">Ongoing Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details & Requirements</Label>
                <Textarea 
                  id="message" 
                  placeholder="Please describe your procurement needs, target markets, quality requirements, timeline, and any specific challenges you're facing in international sourcing..."
                  className="min-h-32"
                  required 
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Partnership Inquiry
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Global Trade Headquarters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-1 text-primary">Singapore Operations</h4>
                <p className="text-muted-foreground">
                  Ideall Solutionz Singapore PTE LTD<br />
                  [Business Address]<br />
                  Singapore [Postal Code]<br />
                  <span className="text-xs">(Trade & Operations Hub)</span>
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-primary">Business Development</h4>
                <p className="text-muted-foreground">+65 XXXX-XXXX</p>
              </div>
              <div>
                <h4 className="mb-1 text-primary">Trade Inquiries</h4>
                <p className="text-muted-foreground">trade@ideallsolutionz.com.sg</p>
              </div>
              <div>
                <h4 className="mb-1 text-primary">Partnership Development</h4>
                <p className="text-muted-foreground">partnerships@ideallsolutionz.com.sg</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Business Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-muted-foreground">8:30 AM - 6:00 PM SGT</span>
                </div>
                <div className="flex justify-between">
                  <span>Regional Support</span>
                  <span className="text-muted-foreground">24/7 Coverage</span>
                </div>
                <div className="text-xs text-muted-foreground mt-3">
                  <p>Our global network ensures round-the-clock support for urgent trade matters across all time zones.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">What to Expect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium">Initial Consultation</p>
                  <p className="text-xs text-muted-foreground">Comprehensive assessment of your procurement needs and requirements</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium">Supplier Matching</p>
                  <p className="text-xs text-muted-foreground">Identification of best-fit manufacturers from our verified network</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium">Proposal Development</p>
                  <p className="text-xs text-muted-foreground">Detailed sourcing strategy and partnership framework</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-muted rounded-xl p-6">
        <div className="text-center mb-6">
          <h3 className="text-primary mb-2">Global Trade Network</h3>
          <p className="text-sm text-muted-foreground">
            Our international trade organization serves partners worldwide through our comprehensive 
            network of verified manufacturers, logistics providers, and quality assurance partners.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="text-primary mb-2">Partner Benefits</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Access to verified supplier network</li>
              <li>• Comprehensive quality assurance</li>
              <li>• Trade facilitation expertise</li>
              <li>• Competitive pricing through volume</li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary mb-2">Response Timeline</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Initial response: Within 24 hours</li>
              <li>• Consultation call: Within 48 hours</li>
              <li>• Proposal development: 3-5 business days</li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary mb-2">Regional Coverage</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Asia-Pacific sourcing hub</li>
              <li>• European manufacturer network</li>
              <li>• North American partnerships</li>
              <li>• Global logistics coordination</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}