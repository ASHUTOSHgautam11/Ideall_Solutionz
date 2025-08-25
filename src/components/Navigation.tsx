import { Button } from "./ui/button";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'history', label: 'Our Story' },
    { id: 'products', label: 'Trade Categories' },
    { id: 'contact', label: 'Partner With Us' }
  ];

  return (
    <nav className="border-b bg-background sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="h-12 w-12 bg-primary/10 rounded-lg mr-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-primary rounded"></div>
            </div>
            <div className="hidden sm:block">
              <h2 className="text-primary">Ideall Solutionz</h2>
              <p className="text-xs text-muted-foreground">International Trade Solutions</p>
            </div>
          </div>
          <div className="flex space-x-1">
            {pages.map((page) => (
              <Button
                key={page.id}
                variant={currentPage === page.id ? "default" : "ghost"}
                onClick={() => onPageChange(page.id)}
                className="px-4"
              >
                {page.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}