


export interface Product {
  id: string;
  slug: string;
  title: string;
  price: number; // in MYR (RM)
  category: string;
  image: string;
  tags: string[];
  description: string;
  specs: {label: string;value: string;}[];
}

const slugify = (s: string) =>
s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const img = (seed: string) =>
`https://picsum.photos/seed/${seed}/600/600`;

interface Raw {
  title: string;
  price: number;
  category: string;
  tags: string[];
}

const raw: Raw[] = [
{ title: 'Tile Hardener Chemical', price: 22000.0, category: 'Hardener Chemical', tags: ['Featured Products', 'Best Selling', "Today's Deal"] },
{ title: 'Fly Ash Bricks Hardener Chemical', price: 21500.0, category: 'Hardener Chemical', tags: ['Featured Products', 'Best Selling', "Today's Deal"] },
{ title: 'High Range Water Reducer', price: 38987.0, category: 'Water Reducer', tags: ['Featured Products', 'Best Selling', "Today's Deal"] },
{ title: 'Concrete Water Reducer', price: 41200.0, category: 'Water Reducer', tags: ['Featured Products', 'Best Selling', "Today's Deal"] },
{ title: 'Superplasticizer In Concrete', price: 38987.0, category: 'Plasticizer', tags: ['Featured Products', 'Best Selling', "Today's Deal"] },
{ title: 'Tile Hardener', price: 27450.0, category: 'Hardener', tags: ['Featured Products', 'Best Selling'] },
{ title: 'Designer Tile Hardener', price: 47800.0, category: 'Hardener', tags: ['Featured Products', 'Best Selling'] },
{ title: 'Pc Base Hardener', price: 17800.0, category: 'Hardener', tags: ['Featured Products', 'Best Selling'] },
{ title: 'Melamine Hardener', price: 19500.0, category: 'Hardener', tags: ['Featured Products', 'Best Selling'] },
{ title: 'Floor Tile Hardener', price: 21500.0, category: 'Hardener', tags: ['Featured Products', 'Best Selling'] },
{ title: 'Chemical Hardener', price: 21900.0, category: 'Hardener Chemical', tags: ['Featured Products', 'Best Selling'] },
{ title: 'Interlock Block Hardener Chemical', price: 29900.0, category: 'Hardener Chemical', tags: ['Featured Products', 'Best Selling'] },
{ title: 'Construction Plasticizer', price: 31550.0, category: 'Plasticizer', tags: ['Best Selling', "Today's Deal"] },
{ title: 'Plasticizer In Concrete', price: 34500.0, category: 'Plasticizer', tags: ['Best Selling', "Today's Deal"] },
{ title: 'Plasticizer Admixture', price: 37600.0, category: 'Plasticizer', tags: ['Best Selling', "Today's Deal"] },
{ title: 'Ecomazapyr 2 SL Herbicide', price: 38987.0, category: 'Ecomazapyr Chemical', tags: ['Best Selling', "Today's Deal"] },
{ title: 'Interlocking Tiles Hardener Chemical', price: 16800.0, category: 'Hardener Chemical', tags: ['Best Selling', "Today's Deal"] },
{ title: 'Silicone Based Hardener Chemical', price: 21600.0, category: 'Hardener Chemical', tags: ['Best Selling', "Today's Deal"] }];


export const PRODUCTS: Product[] = raw.map((r, i) => ({
  id: String(i + 1),
  slug: slugify(r.title),
  title: r.title,
  price: r.price,
  category: r.category,
  image: img(slugify(r.title)),
  tags: r.tags,
  description:
  `${r.title} is a premium-grade industrial ${r.category.toLowerCase()} engineered for demanding construction and infrastructure applications. Formulated to deliver consistent performance, enhanced durability, and reliable results across a wide range of site conditions. Supplied by KJ Consortium Trading with full technical support.`,
  specs: [
  { label: 'Grade', value: 'Industrial / Construction' },
  { label: 'Packaging', value: '25 kg / 200 L drum' },
  { label: 'Form', value: 'Liquid / Powder' },
  { label: 'Shelf Life', value: '12 months' },
  { label: 'Origin', value: 'Malaysia' },
  { label: 'MOQ', value: '1 unit' }]

}));

export const CATEGORIES = [
'Hardener',
'Hardener Chemical',
'Ecomazapyr Chemical',
'Plasticizer',
'Water Reducer'];


export function categoryImage(cat: string) {
  return img('cat-' + slugify(cat));
}

export function productsByCategory(cat: string) {
  return PRODUCTS.filter((p) => p.category === cat);
}

export function categoryCount(cat: string) {
  return productsByCategory(cat).length;
}

export function byTag(tag: string) {
  return PRODUCTS.filter((p) => p.tags.includes(tag));
}

export function findBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}