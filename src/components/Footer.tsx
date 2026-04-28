const Footer = () => (
  <footer className="border-t border-border mt-20 bg-secondary/30">
    <div className="container mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
      <div>
        <h4 className="font-semibold mb-3">Flatlogic</h4>
        <p className="text-muted-foreground">Minimal furniture & decor for modern living.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Shop</h4>
        <ul className="space-y-2 text-muted-foreground">
          <li>Furniture</li><li>Lighting</li><li>Decoration</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Support</h4>
        <ul className="space-y-2 text-muted-foreground">
          <li>Contact</li><li>Shipping</li><li>Returns</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Company</h4>
        <ul className="space-y-2 text-muted-foreground">
          <li>About</li><li>Blog</li><li>Careers</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Flatlogic. All rights reserved.
    </div>
  </footer>
);

export default Footer;
