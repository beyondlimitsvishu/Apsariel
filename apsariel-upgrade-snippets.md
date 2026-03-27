# Apsariel Blogger Upgrade

Use these replacements in your current template.

## 1. Replace the whole `<b:skin><![CDATA[ ... ]]></b:skin>` block

```xml
<b:skin><![CDATA[
:root {
--primary-color: #ff4d6d;
--primary-hover: #e03c5d;
--secondary-color: #fff2f4;
--accent-gold: #d4a856;
--accent-peach: #ffe4d4;
--accent-plum: #6a2040;
--text-primary: #1e1523;
--text-secondary: #5d5161;
--text-muted: #8f8392;
--bg-white: rgba(255,255,255,0.86);
--bg-solid: #ffffff;
--bg-light: #fff8fa;
--border-color: rgba(112, 66, 93, 0.12);
--shadow-sm: 0 10px 30px rgba(83, 44, 66, 0.08);
--shadow-md: 0 18px 48px rgba(83, 44, 66, 0.12);
--shadow-lg: 0 28px 80px rgba(83, 44, 66, 0.18);
--font-heading: 'Playfair Display', serif;
--font-body: 'Montserrat', sans-serif;
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;
--spacing-xl: 3rem;
--spacing-2xl: 4.5rem;
--radius-md: 14px;
--radius-lg: 22px;
--radius-xl: 30px;
--container-max: 1240px;
--sidebar-width: 320px;
--gradient-main: linear-gradient(135deg, #fff7f8 0%, #fff4ec 50%, #fffdf7 100%);
--gradient-accent: linear-gradient(135deg, #ff4d6d 0%, #ff8a5b 100%);
--gradient-dark: linear-gradient(135deg, #2a1728 0%, #4e2842 100%);
--gradient-soft: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.75));
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
font-family: var(--font-body);
font-size: 16px;
line-height: 1.7;
color: var(--text-primary);
background:
radial-gradient(circle at top left, rgba(255, 122, 162, 0.14), transparent 28%),
radial-gradient(circle at top right, rgba(255, 208, 170, 0.18), transparent 24%),
linear-gradient(180deg, #fffaf8 0%, #fffdfb 35%, #fff7fb 100%);
overflow-x: hidden;
}
body.menu-open,
body.search-open { overflow: hidden; }
img { max-width: 100%; height: auto; display: block; }
a { text-decoration: none; color: inherit; transition: color 0.3s ease, opacity 0.3s ease, transform 0.3s ease; }
ul { list-style: none; }
h1, h2, h3, h4, h5, h6 {
font-family: var(--font-heading);
font-weight: 700;
line-height: 1.2;
letter-spacing: -0.02em;
}
h1 { font-size: clamp(2.4rem, 5vw, 4.2rem); }
h2 { font-size: clamp(1.9rem, 3vw, 2.8rem); }
h3 { font-size: clamp(1.3rem, 2vw, 1.7rem); }
p { margin-bottom: 1rem; color: var(--text-secondary); }
button, input, textarea { font: inherit; }
button:hover { transform: translateY(-1px); }
button:focus-visible,
a:focus-visible,
input:focus-visible {
outline: 2px solid rgba(255, 77, 109, 0.35);
outline-offset: 3px;
}
.container { width: 100%; max-width: var(--container-max); margin: 0 auto; padding: 0 var(--spacing-md); }
.sr-only {
position: absolute !important;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border: 0;
}
.page-glow {
position: fixed;
inset: 0;
pointer-events: none;
z-index: -1;
background:
radial-gradient(circle at 20% 10%, rgba(255, 98, 135, 0.12), transparent 22%),
radial-gradient(circle at 80% 18%, rgba(255, 180, 92, 0.1), transparent 18%),
radial-gradient(circle at 90% 80%, rgba(255, 122, 162, 0.1), transparent 20%);
}
.progress-bar {
position: fixed;
top: 0;
left: 0;
height: 3px;
width: 0;
z-index: 1200;
background: var(--gradient-accent);
box-shadow: 0 0 20px rgba(255, 77, 109, 0.5);
transition: width 0.12s linear;
}
.main-wrapper {
display: flex;
flex-wrap: wrap;
gap: var(--spacing-xl);
padding: var(--spacing-2xl) 0 var(--spacing-xl);
align-items: flex-start;
}
.content-area { flex: 1; min-width: 0; }
.sidebar-area { width: var(--sidebar-width); flex-shrink: 0; }
.sidebar { position: sticky; top: 110px; }
.site-header {
position: sticky;
top: 0;
z-index: 1000;
backdrop-filter: blur(18px);
background: rgba(255,255,255,0.76);
border-bottom: 1px solid rgba(255,255,255,0.45);
box-shadow: 0 8px 30px rgba(106, 32, 64, 0.08);
}
.header-top {
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem 0;
gap: var(--spacing-md);
}
.site-logo a { display: inline-flex; flex-direction: column; gap: 0.15rem; }
.site-logo h1 {
font-size: clamp(1.8rem, 3vw, 2.4rem);
letter-spacing: 0.08em;
text-transform: uppercase;
}
.site-logo span {
background: var(--gradient-accent);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
}
.site-tagline {
font-size: 0.76rem;
text-transform: uppercase;
color: var(--text-muted);
letter-spacing: 0.28em;
}
.header-actions { display: flex; align-items: center; gap: var(--spacing-sm); }
.header-social { display: flex; align-items: center; gap: 0.5rem; }
.search-toggle, .social-icon, .menu-toggle {
background: rgba(255,255,255,0.82);
border: 1px solid rgba(255,255,255,0.6);
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
box-shadow: var(--shadow-sm);
}
.search-toggle,
.social-icon {
width: 44px;
height: 44px;
border-radius: 50%;
}
.search-toggle:hover,
.social-icon:hover {
background: linear-gradient(135deg, rgba(255,255,255,1), rgba(255,242,244,1));
color: var(--primary-color);
box-shadow: var(--shadow-md);
}
.main-nav { position: relative; }
.nav-menu {
display: flex;
justify-content: center;
gap: clamp(1rem, 2vw, 2.2rem);
padding: 0.2rem 0 1rem;
}
.nav-link {
font-size: 0.82rem;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.16em;
color: var(--text-secondary);
position: relative;
padding-bottom: 0.35rem;
}
.nav-link::before {
content: '';
position: absolute;
left: 50%;
bottom: 0;
width: 0;
height: 2px;
border-radius: 999px;
transform: translateX(-50%);
background: var(--gradient-accent);
transition: width 0.35s ease;
}
.nav-link:hover,
.nav-link:focus-visible { color: var(--accent-plum); }
.nav-link:hover::before,
.nav-link:focus-visible::before { width: 100%; }
.menu-toggle { display: none; flex-direction: column; gap: 5px; width: 44px; height: 44px; border-radius: 16px; padding: 0 10px; }
.menu-toggle span { display: block; width: 100%; height: 2px; background: var(--text-primary); transition: transform 0.3s ease, opacity 0.3s ease; }
.menu-toggle.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.menu-toggle.active span:nth-child(2) { opacity: 0; }
.menu-toggle.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
.disclosure-bar {
background: linear-gradient(90deg, rgba(255, 241, 214, 0.95), rgba(255, 231, 237, 0.95));
padding: 0.9rem 0;
text-align: center;
font-size: 0.85rem;
border-bottom: 1px solid rgba(204, 128, 74, 0.12);
}
.disclosure-bar span { color: #8c4d1a; }
.disclosure-bar a { color: #9e2645; font-weight: 700; }
.magazine-grid { display: grid; gap: var(--spacing-xl); }
.featured-hero {
grid-column: 1 / -1;
display: grid;
grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.9fr);
gap: var(--spacing-lg);
align-items: stretch;
}
.featured-sidebar { display: grid; gap: var(--spacing-lg); align-content: start; }
.featured-main,
.post-card,
.related-card,
.sidebar-widget,
.post-article,
.archive-header {
background: var(--gradient-soft);
border: 1px solid rgba(255,255,255,0.65);
box-shadow: var(--shadow-md);
backdrop-filter: blur(12px);
}
.featured-main {
position: relative;
border-radius: var(--radius-xl);
overflow: hidden;
isolation: isolate;
}
.featured-main::after {
content: '';
position: absolute;
inset: 0;
background: linear-gradient(180deg, rgba(35, 13, 28, 0.02), rgba(35, 13, 28, 0.64));
z-index: 1;
}
.featured-main .post-thumb { height: 560px; }
.featured-main .post-thumb img {
width: 100%;
height: 100%;
object-fit: cover;
transform: scale(1.02);
transition: transform 0.8s ease;
}
.featured-main:hover .post-thumb img { transform: scale(1.07); }
.featured-main .post-overlay {
position: absolute;
left: 0;
right: 0;
bottom: 0;
padding: clamp(1.5rem, 4vw, 3rem);
color: #fff;
z-index: 2;
}
.post-category {
display: inline-flex;
align-items: center;
padding: 0.48rem 1rem;
background: var(--gradient-accent);
color: #fff;
font-size: 0.72rem;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.12em;
border-radius: 999px;
margin-bottom: var(--spacing-sm);
box-shadow: 0 8px 20px rgba(255, 77, 109, 0.25);
}
.featured-main .post-title { font-size: clamp(1.7rem, 4vw, 2.8rem); color: #fff; margin-bottom: 0.6rem; }
.post-meta { display: flex; gap: var(--spacing-md); color: var(--text-muted); font-size: 0.92rem; flex-wrap: wrap; align-items: center; }
.featured-main .post-meta { color: rgba(255,255,255,0.84); }
.posts-grid,
.related-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--spacing-lg); }
.post-card,
.related-card {
border-radius: var(--radius-lg);
overflow: hidden;
transition: transform 0.45s ease, box-shadow 0.45s ease, border-color 0.45s ease;
}
.post-card:hover,
.related-card:hover {
transform: translateY(-10px);
box-shadow: var(--shadow-lg);
}
.post-card .post-thumb,
.related-card .post-thumb,
.product-image,
.post-featured-image { position: relative; overflow: hidden; }
.post-card .post-thumb { aspect-ratio: 4 / 5; }
.post-card .post-thumb::after,
.post-featured-image::after,
.related-card a::after {
content: '';
position: absolute;
inset: 0;
background: linear-gradient(120deg, transparent 25%, rgba(255,255,255,0.25) 48%, transparent 70%);
transform: translateX(-120%);
transition: transform 0.85s ease;
pointer-events: none;
}
.post-card:hover .post-thumb::after,
.post-featured-image:hover::after,
.related-card:hover a::after { transform: translateX(120%); }
.post-card .post-thumb img,
.product-image img,
.related-card img,
.post-featured-image img {
width: 100%;
height: 100%;
object-fit: cover;
transition: transform 0.7s ease, filter 0.7s ease;
}
.post-card:hover .post-thumb img,
.related-card:hover img,
.post-featured-image:hover img,
.product-card:hover .product-image img {
transform: scale(1.06);
filter: saturate(1.08);
}
.post-card .post-content { padding: 1.35rem; }
.post-card .post-title,
.related-card .post-title { font-size: 1.12rem; margin-bottom: 0.55rem; }
.post-card .post-title a:hover,
.related-card .post-title a:hover { color: var(--primary-color); }
.post-excerpt {
font-size: 0.92rem;
color: var(--text-muted);
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
}
.pin-it-button {
position: absolute;
top: 14px;
left: 14px;
width: 42px;
height: 42px;
background: rgba(230, 0, 35, 0.92);
color: #fff;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
opacity: 0;
transform: translateY(10px) scale(0.9);
transition: all 0.28s ease;
cursor: pointer;
z-index: 10;
border: none;
box-shadow: 0 12px 24px rgba(230,0,35,0.22);
}
.post-thumb:hover .pin-it-button,
.post-featured-image:hover .pin-it-button { opacity: 1; transform: translateY(0) scale(1); }
.post-article { border-radius: var(--radius-xl); padding: clamp(1.3rem, 3vw, 2rem); margin-bottom: var(--spacing-xl); }
.post-header { margin-bottom: var(--spacing-lg); }
.post-header .post-category { background: rgba(255, 77, 109, 0.1); color: var(--primary-color); box-shadow: none; }
.post-featured-image { border-radius: var(--radius-lg); overflow: hidden; margin-bottom: var(--spacing-lg); max-height: 650px; }
.affiliate-disclosure {
background: linear-gradient(90deg, rgba(255, 244, 211, 1), rgba(255, 233, 212, 1));
border: 1px solid rgba(245, 158, 11, 0.15);
border-left: 4px solid #f59e0b;
padding: var(--spacing-md);
margin-bottom: var(--spacing-lg);
font-size: 0.9rem;
color: #92400e;
display: flex;
gap: 10px;
align-items: flex-start;
border-radius: var(--radius-md);
}
.post-body { font-size: 1.05rem; line-height: 1.9; color: var(--text-secondary); }
.post-body h2,
.post-body h3 { margin: 2rem 0 1rem; position: relative; padding-bottom: 0.7rem; }
.post-body h2::after,
.post-body h3::after {
content: '';
position: absolute;
left: 0;
bottom: 0;
width: 72px;
height: 3px;
border-radius: 999px;
background: var(--gradient-accent);
}
.post-body a {
color: var(--primary-color);
text-decoration: underline;
text-decoration-thickness: 2px;
text-underline-offset: 3px;
}
.sidebar-widget { border-radius: var(--radius-lg); padding: var(--spacing-lg); margin-bottom: var(--spacing-lg); }
.widget-title {
font-family: var(--font-heading);
font-size: 1.12rem;
margin-bottom: var(--spacing-md);
display: inline-flex;
position: relative;
padding-bottom: 0.5rem;
}
.widget-title::after {
content: '';
position: absolute;
left: 0;
bottom: 0;
width: 100%;
height: 2px;
background: var(--gradient-accent);
border-radius: 999px;
}
.about-widget { text-align: center; }
.about-image {
width: 132px;
height: 132px;
border-radius: 50%;
margin: 0 auto 1rem;
overflow: hidden;
border: 4px solid rgba(255,255,255,0.9);
box-shadow: 0 18px 30px rgba(255, 122, 162, 0.2);
}
.newsletter-widget {
background: linear-gradient(140deg, rgba(255, 244, 247, 0.96), rgba(255, 250, 239, 0.96));
border: 1px solid rgba(255, 77, 109, 0.18);
text-align: center;
position: relative;
overflow: hidden;
}
.newsletter-form input {
width: 100%;
padding: 0.95rem 1rem;
border: 1px solid rgba(112, 66, 93, 0.15);
border-radius: 999px;
margin-bottom: 0.8rem;
background: rgba(255,255,255,0.95);
}
.newsletter-form button {
width: 100%;
padding: 0.95rem 1rem;
background: var(--gradient-accent);
color: #fff;
border: none;
border-radius: 999px;
font-weight: 700;
cursor: pointer;
box-shadow: 0 16px 28px rgba(255, 77, 109, 0.24);
}
.popular-post { display: flex; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--border-color); align-items: center; }
.popular-post:last-child { border: none; }
.popular-post .post-thumb { width: 78px; height: 78px; border-radius: 10px; overflow: hidden; flex-shrink: 0; box-shadow: var(--shadow-sm); }
.popular-post .post-title { font-size: 0.92rem; font-weight: 700; line-height: 1.4; }
.labels-cloud { display: flex; flex-wrap: wrap; gap: 8px; }
.label-tag {
padding: 0.55rem 1rem;
background: rgba(255,255,255,0.78);
border: 1px solid rgba(112, 66, 93, 0.1);
border-radius: 999px;
font-size: 0.8rem;
font-weight: 600;
}
.label-tag:hover {
background: var(--gradient-accent);
color: #fff;
border-color: transparent;
transform: translateY(-2px);
}
.archive-header { padding: 1.4rem 1.6rem; border-radius: var(--radius-lg); margin-bottom: var(--spacing-lg); }
.site-footer {
background: var(--gradient-dark);
color: #fff;
padding: var(--spacing-2xl) 0 var(--spacing-xl);
position: relative;
overflow: hidden;
}
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: var(--spacing-xl); margin-bottom: var(--spacing-xl); position: relative; z-index: 1; }
.footer-logo { font-family: var(--font-heading); font-size: 1.9rem; font-weight: 700; margin-bottom: 1rem; }
.footer-logo span {
background: linear-gradient(135deg, #ff93af 0%, #ffd39d 100%);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
}
.footer-widget h4 { font-size: 0.86rem; text-transform: uppercase; letter-spacing: 0.18em; margin-bottom: 1rem; }
.footer-widget ul li { margin-bottom: 0.7rem; }
.footer-widget ul li a { color: rgba(255,255,255,0.72); }
.footer-widget ul li a:hover { color: #fff; }
.footer-bottom { border-top: 1px solid rgba(255,255,255,0.12); padding-top: var(--spacing-lg); text-align: center; font-size: 0.85rem; color: rgba(255,255,255,0.62); position: relative; z-index: 1; }
.social-share { display: flex; gap: 10px; padding: 20px 0; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); margin: 20px 0; flex-wrap: wrap; align-items: center; }
.social-share span { font-weight: 700; color: var(--text-primary); }
.share-btn {
display: inline-flex;
align-items: center;
justify-content: center;
gap: 6px;
padding: 0.75rem 1.1rem;
border-radius: 999px;
color: #fff;
font-size: 0.82rem;
font-weight: 700;
box-shadow: var(--shadow-sm);
}
.share-btn:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
.share-btn.pinterest { background: #e60023; }
.share-btn.facebook { background: #1877f2; }
.share-btn.twitter { background: #1da1f2; }
.share-btn.whatsapp { background: #25d366; }
.floating-share {
position: fixed;
left: 18px;
top: 50%;
transform: translateY(-50%);
display: flex;
flex-direction: column;
gap: 12px;
z-index: 100;
}
.floating-share .share-btn {
width: 48px;
height: 48px;
padding: 0;
border-radius: 50%;
justify-content: center;
}
.floating-share .share-btn span { display: none; }
.pagination { display: flex; justify-content: center; gap: 12px; margin: var(--spacing-xl) 0; flex-wrap: wrap; }
.pagination a {
padding: 0.82rem 1.3rem;
border: 1px solid rgba(112, 66, 93, 0.14);
border-radius: 999px;
background: rgba(255,255,255,0.86);
box-shadow: var(--shadow-sm);
font-weight: 700;
}
.pagination a:hover { background: var(--gradient-accent); color: #fff; border-color: transparent; }
.back-to-top {
position: fixed;
bottom: 28px;
right: 28px;
width: 54px;
height: 54px;
background: var(--gradient-accent);
color: #fff;
border: none;
border-radius: 50%;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
z-index: 999;
opacity: 0;
visibility: hidden;
transform: translateY(14px);
box-shadow: 0 20px 35px rgba(255, 77, 109, 0.35);
transition: all 0.3s ease;
}
.back-to-top.visible { opacity: 1; visibility: visible; transform: translateY(0); }
.search-overlay {
position: fixed;
inset: 0;
background: rgba(31, 15, 24, 0.72);
backdrop-filter: blur(20px);
z-index: 9999;
display: flex;
align-items: center;
justify-content: center;
padding: 1.5rem;
opacity: 0;
visibility: hidden;
transition: opacity 0.35s ease, visibility 0.35s ease;
}
.search-overlay.active { opacity: 1; visibility: visible; }
.search-container {
position: relative;
width: 100%;
display: flex;
justify-content: center;
transform: translateY(24px) scale(0.97);
transition: transform 0.35s ease;
}
.search-overlay.active .search-container { transform: translateY(0) scale(1); }
.search-form {
display: flex;
background: rgba(255,255,255,0.96);
border-radius: 999px;
padding: 6px;
width: 100%;
max-width: 760px;
box-shadow: var(--shadow-lg);
}
.search-form input {
flex: 1;
border: none;
padding: 1rem 1.2rem 1rem 1.4rem;
font-size: 1rem;
outline: none;
background: transparent;
}
.search-form button {
background: var(--gradient-accent);
color: #fff;
border: none;
padding: 0 1.5rem;
border-radius: 999px;
cursor: pointer;
font-weight: 700;
}
.search-close {
position: absolute;
top: -64px;
right: 0;
color: #fff;
font-size: 30px;
background: rgba(255,255,255,0.08);
backdrop-filter: blur(12px);
border: 1px solid rgba(255,255,255,0.25);
width: 52px;
height: 52px;
border-radius: 50%;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
}
.related-posts { margin-top: var(--spacing-xl); }
.related-posts h3 { margin-bottom: var(--spacing-md); }
.related-card a { display: block; position: relative; overflow: hidden; }
.related-card img { width: 100%; height: 190px; object-fit: cover; }
.related-card .post-title { padding: 0.9rem 1rem 1.1rem; margin: 0; }
.comments-section,
.comments { margin-top: var(--spacing-xl); padding-top: var(--spacing-lg); border-top: 1px solid var(--border-color); }
.comments h4,
.comments h3 { margin-bottom: 1rem; }
.comments textarea,
.comments input[type='text'],
.comments input[type='email'] {
width: 100%;
padding: 0.9rem 1rem;
border: 1px solid var(--border-color);
border-radius: var(--radius-md);
background: rgba(255,255,255,0.9);
margin-bottom: 0.9rem;
}
.comments input[type='submit'] {
padding: 0.9rem 1.2rem;
border: none;
border-radius: 999px;
background: var(--gradient-accent);
color: #fff;
font-weight: 700;
cursor: pointer;
}
.comment { padding: 1rem 0; border-bottom: 1px solid var(--border-color); }
.comment:last-child { border-bottom: none; }
.reveal {
opacity: 0;
transform: translateY(26px);
transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.is-visible {
opacity: 1;
transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
html { scroll-behavior: auto; }
*, *::before, *::after { animation: none !important; transition: none !important; }
}
@media (max-width: 1200px) {
.posts-grid,
.related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.floating-share { display: none; }
}
@media (max-width: 1024px) {
.footer-grid { grid-template-columns: 1fr 1fr; }
.featured-hero { grid-template-columns: 1fr; }
.featured-main .post-thumb { height: 460px; }
}
@media (max-width: 768px) {
.main-wrapper { flex-direction: column; padding-top: var(--spacing-xl); }
.sidebar-area { width: 100%; }
.sidebar { position: static; }
.menu-toggle { display: flex; }
.header-social { display: none; }
.nav-menu {
display: flex;
flex-direction: column;
position: absolute;
top: calc(100% + 10px);
left: 0;
right: 0;
background: rgba(255,255,255,0.97);
padding: 1.2rem;
border-radius: 22px;
box-shadow: var(--shadow-lg);
opacity: 0;
visibility: hidden;
transform: translateY(-8px);
transition: all 0.3s ease;
}
.nav-menu.active { opacity: 1; visibility: visible; transform: translateY(0); }
.posts-grid,
.related-grid,
.footer-grid { grid-template-columns: 1fr; }
.featured-main .post-thumb { height: 360px; }
.search-form { border-radius: 26px; flex-direction: column; padding: 0.85rem; }
.search-form button { min-height: 52px; }
.share-btn { flex: 1 1 calc(50% - 8px); }
}
@media (max-width: 560px) {
.container { padding: 0 1rem; }
.featured-main .post-thumb { height: 300px; }
.post-card .post-content,
.sidebar-widget,
.post-article { padding: 1.1rem; }
.share-btn { flex: 1 1 100%; }
}
]]></b:skin>
```

## 2. Add these two lines right after `<body>`

```html
<div class='page-glow'/>
<div class='progress-bar' id='scroll-progress'/>
```

## 3. Replace your current bottom `<script>...</script>` with this

```html
<script>
//<![CDATA[
document.addEventListener('DOMContentLoaded', function() {
var body = document.body;
var menuToggle = document.getElementById('menu-toggle');
var navMenu = document.getElementById('nav-menu');
var searchToggle = document.getElementById('search-toggle');
var searchOverlay = document.getElementById('search-overlay');
var searchClose = document.getElementById('search-close');
var backToTop = document.getElementById('back-to-top');
var progressBar = document.getElementById('scroll-progress');

document.querySelectorAll('.post-card, .featured-main, .sidebar-widget, .post-article, .archive-header').forEach(function(el) {
el.classList.add('reveal');
});

function updateProgress() {
if(!progressBar) return;
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
var docHeight = document.documentElement.scrollHeight - window.innerHeight;
var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
progressBar.style.width = progress + '%';
}

function closeMenu() {
if(navMenu) navMenu.classList.remove('active');
if(menuToggle) menuToggle.classList.remove('active');
body.classList.remove('menu-open');
}

function openSearch() {
if(searchOverlay) {
searchOverlay.classList.add('active');
body.classList.add('search-open');
}
}

function closeSearch() {
if(searchOverlay) {
searchOverlay.classList.remove('active');
body.classList.remove('search-open');
}
}

if(menuToggle && navMenu) {
menuToggle.addEventListener('click', function() {
var isOpen = navMenu.classList.toggle('active');
menuToggle.classList.toggle('active', isOpen);
body.classList.toggle('menu-open', isOpen && window.innerWidth <= 768);
});
document.querySelectorAll('.nav-menu a').forEach(function(link) {
link.addEventListener('click', closeMenu);
});
}

if(searchToggle) searchToggle.addEventListener('click', openSearch);
if(searchClose) searchClose.addEventListener('click', closeSearch);
if(searchOverlay) {
searchOverlay.addEventListener('click', function(event) {
if(event.target === searchOverlay) closeSearch();
});
}

document.addEventListener('keydown', function(event) {
if(event.key === 'Escape') {
closeSearch();
closeMenu();
}
});

window.addEventListener('scroll', function() {
if(backToTop) backToTop.classList.toggle('visible', window.pageYOffset > 360);
updateProgress();
});

if(backToTop) {
backToTop.addEventListener('click', function() {
window.scrollTo({ top: 0, behavior: 'smooth' });
});
}

window.pinThis = function(btn) {
var container = btn.closest('.post-thumb, .post-featured-image');
var img = container ? container.querySelector('img') : null;
if(img) {
var url = encodeURIComponent(window.location.href);
var media = encodeURIComponent(img.src);
var desc = encodeURIComponent(document.title);
window.open('https://pinterest.com/pin/create/button/?url=' + url + '&media=' + media + '&description=' + desc, 'Pinterest', 'width=750,height=550');
}
};

var floatShare = document.getElementById('floating-share');
if(floatShare && document.querySelector('.post-article')) {
var url = window.location.href;
var mediaEl = document.querySelector('.post-featured-image img');
var media = mediaEl ? mediaEl.src : '';
var pinterestBtn = floatShare.querySelector('.pinterest');
var facebookBtn = floatShare.querySelector('.facebook');
if(pinterestBtn) pinterestBtn.href = 'https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(url) + '&media=' + encodeURIComponent(media) + '&description=' + encodeURIComponent(document.title);
if(facebookBtn) facebookBtn.href = 'https://facebook.com/sharer.php?u=' + encodeURIComponent(url);
} else if(floatShare) {
floatShare.style.display = 'none';
}

var relatedContainer = document.getElementById('related-grid');
if(relatedContainer && document.querySelector('.post-article')) {
var currentLabels = [];
var labelElements = document.querySelectorAll('.post-header .post-category');
if(labelElements.length) currentLabels.push(labelElements[0].innerText);
if(currentLabels.length) {
var feedUrl = '/feeds/posts/default/-/' + encodeURIComponent(currentLabels[0]) + '?alt=json&max-results=4';
fetch(feedUrl).then(function(response) {
return response.json();
}).then(function(data) {
var items = data.feed && data.feed.entry ? data.feed.entry : [];
var currentUrl = window.location.href;
var html = '';
items.forEach(function(item) {
var title = item.title.$t;
var alternateLink = item.link.find(function(l) { return l.rel === 'alternate'; });
var link = alternateLink ? alternateLink.href : '';
if(!link || link === currentUrl) return;
var img = item.media$thumbnail ? item.media$thumbnail.url.replace('/s72-c/', '/s600/') : '';
html += '<div class="related-card reveal is-visible"><a href="' + link + '">';
if(img) html += '<img src="' + img + '" alt="' + title.replace(/"/g, '&quot;') + '"/>';
else html += '<img src="https://via.placeholder.com/600x380/fce3e8/6a2040?text=Apsariel" alt="' + title.replace(/"/g, '&quot;') + '"/>';
html += '<div class="post-title">' + title + '</div></a></div>';
});
relatedContainer.innerHTML = html || '<p>No related posts found.</p>';
}).catch(function() {
relatedContainer.innerHTML = '<p>Could not load related posts.</p>';
});
}
}

var yearSpan = document.getElementById('copyright-year');
if(yearSpan) yearSpan.textContent = new Date().getFullYear();

var revealElements = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window && revealElements.length) {
var observer = new IntersectionObserver(function(entries) {
entries.forEach(function(entry) {
if(entry.isIntersecting) {
entry.target.classList.add('is-visible');
observer.unobserve(entry.target);
}
});
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealElements.forEach(function(el) { observer.observe(el); });
} else {
revealElements.forEach(function(el) { el.classList.add('is-visible'); });
}

updateProgress();
});
//]]>
</script>
```

## 4. Small optional HTML upgrades

Add `class='reveal'` to:

- `featured-main`
- every `post-card`
- every `sidebar-widget`
- `post-article`
- `archive-header`

This makes the scroll animations cleaner.
