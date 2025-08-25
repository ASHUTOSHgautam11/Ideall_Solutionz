export function OurHistory() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-primary">Our Story</h1>
        <p className="text-xl text-muted-foreground">
          Building bridges in international trade for premium interior solutions
        </p>
      </div>
      
      <div className="space-y-16">
        {/* Company Foundation */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-primary">Founded on Trade Expertise</h2>
            <p className="text-muted-foreground">
              Ideall Solutionz Singapore PTE LTD was established as an international trade organization 
              with a mission to bridge the gap between global manufacturers and discerning clients seeking 
              premium interior solutions. Our founders recognized the complexity of international procurement 
              and the need for specialized expertise in navigating global supply chains.
            </p>
            <p className="text-muted-foreground">
              From our base in Singapore—a strategic hub for Asian and global trade—we leverage our 
              position to access the finest manufacturers across key production markets while providing 
              comprehensive trade facilitation services to our partners worldwide.
            </p>
          </div>
          <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <p className="text-muted-foreground text-sm">Global Trade Network</p>
            </div>
          </div>
        </div>

        {/* Evolution Phase */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-muted rounded-lg h-64 flex items-center justify-center md:order-1">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-accent rounded-full"></div>
              </div>
              <p className="text-muted-foreground text-sm">Quality Assurance Systems</p>
            </div>
          </div>
          <div className="space-y-4 md:order-2">
            <h2 className="text-primary">Expanding Our Capabilities</h2>
            <p className="text-muted-foreground">
              As our reputation for reliability and quality grew, we expanded our focus across four key 
              categories: Floorings, Furniture, Fabrics, and Fashion Walls. This diversification allowed 
              us to serve as a comprehensive procurement partner for interior design projects of any scale.
            </p>
            <p className="text-muted-foreground">
              We developed sophisticated quality assurance protocols, established partnerships with 
              leading manufacturers worldwide, and built a team of trade specialists with deep expertise 
              in international commerce, logistics, and quality control.
            </p>
          </div>
        </div>

        {/* Modern Era */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-primary">Leading International Trade Solutions</h2>
            <p className="text-muted-foreground">
              Today, Ideall Solutionz stands as a trusted partner in international trade, known for our 
              unwavering commitment to quality, transparency, and reliability. Our comprehensive approach 
              to procurement combines market intelligence, rigorous quality control, and expert trade 
              facilitation.
            </p>
            <p className="text-muted-foreground">
              Operating from Singapore, we maintain strategic relationships with manufacturers across 
              Asia, Europe, and North America, while serving clients globally through our network of 
              trade partners and logistics providers. Our "Our Sourcing, Your Strength" philosophy 
              reflects our commitment to being the procurement backbone for our partners' success.
            </p>
          </div>
          <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-secondary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-secondary rounded-full"></div>
              </div>
              <p className="text-muted-foreground text-sm">Global Partnership Network</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="space-y-8">
        <div className="bg-primary/5 rounded-xl p-8 text-center">
          <h3 className="text-primary mb-4">Our Mission</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            To be the world's most trusted international trade partner for premium interior solutions, 
            combining global sourcing expertise with uncompromising quality standards to deliver 
            exceptional value to our partners worldwide.
          </p>
        </div>

        <div className="bg-muted rounded-xl p-8">
          <h3 className="text-center text-primary mb-8">Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-accent rounded-full"></div>
              </div>
              <h4 className="mb-2 text-primary">Excellence</h4>
              <p className="text-xs text-muted-foreground">
                Uncompromising standards in every aspect of our trade operations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-accent rounded-full"></div>
              </div>
              <h4 className="mb-2 text-primary">Integrity</h4>
              <p className="text-xs text-muted-foreground">
                Transparent and ethical business practices in all our partnerships
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-accent rounded-full"></div>
              </div>
              <h4 className="mb-2 text-primary">Innovation</h4>
              <p className="text-xs text-muted-foreground">
                Continuously evolving our processes and expanding our capabilities
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-accent rounded-full"></div>
              </div>
              <h4 className="mb-2 text-primary">Partnership</h4>
              <p className="text-xs text-muted-foreground">
                Building long-term relationships based on mutual success
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}