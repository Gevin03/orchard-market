import { type FormEvent, useState } from "react";
import { ArrowRight, ChevronDown, Heart, Leaf, Menu, Plus, Search, ShoppingBag, Sparkles, Truck, X } from "lucide-react";
import { toast } from "sonner";

const products = [
  {
    name: "Sunrise Citrus Box",
    detail: "6 hand-picked oranges",
    price: "$14",
    tone: "orange",
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=900&q=85",
    badge: "Best seller",
  },
  {
    name: "Orchard Honeycrisp",
    detail: "Crisp + naturally sweet",
    price: "$8",
    tone: "blush",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=900&q=85",
    badge: "In season",
  },
  {
    name: "Tropical Duo",
    detail: "Mango + passion fruit",
    price: "$16",
    tone: "lime",
    image: "https://images.unsplash.com/photo-1605027990121-cbae9e0642df?auto=format&fit=crop&w=900&q=85",
    badge: "New arrival",
  },
  {
    name: "Berry Morning",
    detail: "Strawberry + blueberry mix",
    price: "$12",
    tone: "berry",
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=900&q=85",
    badge: "Small batch",
  },
];

const navItems = ["Shop", "How it works", "Our growers", "Journal"];

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Orchard Market home">
      <span className="logo-mark"><Leaf size={17} strokeWidth={2.4} /></span>
      <span>orchard <em>market</em></span>
    </a>
  );
}

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [liked, setLiked] = useState<number[]>([]);
  const [email, setEmail] = useState("");

  const addToCart = (name: string) => {
    setCartCount((count) => count + 1);
    toast.success(`${name} added to your basket`, { description: "Freshness is on its way." });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubscribe = (event: FormEvent) => {
    event.preventDefault();
    if (!email.trim()) return;
    toast.success("You're on the list", { description: "Watch your inbox for the next harvest note." });
    setEmail("");
  };

  return (
    <div id="top" className="site-shell">
      <div className="announcement">
        <span>Free delivery on orders over $45</span>
        <span className="announcement-dot">●</span>
        <span>Next harvest: Thursday, 12 Sep</span>
        <button className="announcement-link" onClick={() => scrollTo("how-it-works")}>See how it works <ArrowRight size={14} /></button>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollTo(item === "Shop" ? "shop" : item === "How it works" ? "how-it-works" : "story")}>
                {item}{item === "Shop" && <ChevronDown size={13} />}
              </button>
            ))}
            <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={20} /></button>
          </nav>
          <div className="header-actions">
            <button className="icon-button search-button" aria-label="Search" onClick={() => toast("Search is coming soon", { description: "For now, explore this week's harvest below." })}><Search size={19} /></button>
            <button className="basket-button" aria-label={`Shopping basket with ${cartCount} items`} onClick={() => toast(cartCount ? `${cartCount} item${cartCount === 1 ? "" : "s"} in your basket` : "Your basket is waiting", { description: cartCount ? "Checkout is coming soon." : "Add something delicious to get started." })}>
              <ShoppingBag size={19} />
              <span>Basket</span>
              <b>{cartCount}</b>
            </button>
            <button className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={22} /></button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> Freshly picked, thoughtfully delivered</div>
            <h1>Good fruit.<br /><span>Good mood.</span></h1>
            <p className="hero-description">Seasonal fruit from people who care. Picked at its peak, packed with purpose, and brought to your door.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => scrollTo("shop")}>Shop the harvest <ArrowRight size={18} /></button>
              <button className="text-button" onClick={() => scrollTo("how-it-works")}>Why Orchard Market <ArrowRight size={16} /></button>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true">
                <span>J</span><span>M</span><span>A</span><span>+</span>
              </div>
              <div><strong>Loved by 4,000+ homes</strong><small>★★★★★ <i>this week's reviews</i></small></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="A basket of ripe seasonal fruit">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-image-wrap">
              <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1100&q=88" alt="Colorful fresh fruit in a woven basket" />
              <div className="image-note image-note-top"><Sparkles size={15} /> <span>Picked at peak</span></div>
              <div className="image-note image-note-bottom"><span className="note-dot" /> <span>From our growers</span></div>
            </div>
            <div className="hero-sticker"><span>the<br />fresh<br /><em>stuff</em></span><ArrowRight size={20} /></div>
          </div>
          <div className="scroll-cue"><span>Scroll to explore</span><div className="scroll-line" /></div>
        </section>

        <section className="trust-strip" aria-label="Orchard Market values">
          <div className="trust-item"><span className="trust-icon"><Leaf size={18} /></span><span><strong>Picked weekly</strong><small>At peak ripeness</small></span></div>
          <div className="trust-item"><span className="trust-icon"><Truck size={18} /></span><span><strong>Low-mile delivery</strong><small>Kind to the planet</small></span></div>
          <div className="trust-item"><span className="trust-icon"><Heart size={18} /></span><span><strong>Grower first</strong><small>Fair prices, always</small></span></div>
          <div className="trust-quote">“The best kind of <em>everyday luxury.</em>”</div>
        </section>

        <section id="shop" className="shop-section section-pad">
          <div className="section-heading">
            <div><p className="section-kicker">Straight from the grove</p><h2>This week's <em>good stuff.</em></h2></div>
            <button className="outline-button" onClick={() => toast("Full shop coming soon", { description: "These are a few of our current favorites." })}>Browse all fruit <ArrowRight size={16} /></button>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <article className={`product-card tone-${product.tone}`} key={product.name}>
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} />
                  <span className="product-badge">{product.badge}</span>
                  <button className={liked.includes(index) ? "heart-button is-liked" : "heart-button"} onClick={() => setLiked((items) => items.includes(index) ? items.filter((item) => item !== index) : [...items, index])} aria-label={`Save ${product.name}`}><Heart size={17} fill={liked.includes(index) ? "currentColor" : "none"} /></button>
                </div>
                <div className="product-info"><div><h3>{product.name}</h3><p>{product.detail}</p></div><strong>{product.price}</strong></div>
                <button className="add-button" onClick={() => addToCart(product.name)}><Plus size={16} /> Add to basket</button>
              </article>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="how-section section-pad">
          <div className="how-visual"><img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=85" alt="Farmer holding a basket of freshly picked produce" /><div className="how-stamp">Since<br /><strong>2018</strong><br /><span>small farms<br />big flavor</span></div></div>
          <div className="how-copy"><p className="section-kicker">The Orchard way</p><h2>Fruit should<br /><em>feel like a ritual.</em></h2><p>We work with a small circle of growers who let the seasons set the pace. That means better flavor, fewer food miles, and a box that makes your kitchen feel a little more alive.</p><div className="how-list"><div><span>01</span><div><strong>We follow the season</strong><small>No forced favorites. Only what's beautiful right now.</small></div></div><div><span>02</span><div><strong>We know our growers</strong><small>Real relationships, fair prices, better fruit.</small></div></div><div><span>03</span><div><strong>We deliver the good stuff</strong><small>Picked Monday. At your door by Thursday.</small></div></div></div><button className="text-button" onClick={() => scrollTo("story")}>Meet the people behind the fruit <ArrowRight size={16} /></button></div>
        </section>

        <section id="story" className="story-section section-pad">
          <div className="story-card"><span className="story-kicker">A note from the orchard</span><blockquote>“We don't believe in perfect fruit. We believe in fruit with a story — a little sun, a little weather, and a whole lot of flavor.”</blockquote><div className="story-byline"><span className="signature">Mara + the growers</span><small>Our founding story <ArrowRight size={14} /></small></div></div>
          <div className="story-fruit"><img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=900&q=85" alt="Bananas and tropical fruit on a sunny table" /><span className="fruit-caption">Good things take<br /><em>their sweet time.</em></span></div>
        </section>

        <section className="newsletter-section section-pad">
          <div><p className="section-kicker">A little sunshine, inbox-sized</p><h2>Get the good <em>note.</em></h2><p>Seasonal recipes, grower stories, and first dibs on the best boxes.</p></div>
          <form className="newsletter-form" onSubmit={handleSubscribe}><label htmlFor="email" className="sr-only">Your email address</label><input id="email" type="email" placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} required /><button type="submit" className="primary-button">Sign me up <ArrowRight size={17} /></button><small>By subscribing, you agree to our <u>friendly terms</u>.</small></form>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-top"><Logo /><p>Good fruit for<br /><em>good days.</em></p><div className="footer-links"><div><span>Explore</span><button onClick={() => scrollTo("shop")}>Shop fruit</button><button onClick={() => scrollTo("how-it-works")}>How it works</button><button onClick={() => scrollTo("story")}>Our story</button></div><div><span>Say hello</span><a href="mailto:hello@orchard.market">hello@orchard.market</a><a href="#instagram" onClick={() => toast("Instagram is coming soon")}>@orchard.market</a></div></div></div><div className="footer-bottom"><small>© 2024 Orchard Market Co.</small><small>Made with sunshine + good intentions</small><div><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div></div></footer>
    </div>
  );
}
