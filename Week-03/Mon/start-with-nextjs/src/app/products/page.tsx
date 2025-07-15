import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Heart, Filter } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 124,
    category: 'Electronics',
    image: '/placeholder.svg?height=300&width=300',
    badge: 'Best Seller',
    description:
      'High-quality wireless headphones with noise cancellation and premium sound quality.',
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    price: 199.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 89,
    category: 'Wearables',
    image: '/placeholder.svg?height=300&width=300',
    badge: 'New',
    description:
      'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring.',
  },
  {
    id: 3,
    name: 'Ergonomic Office Chair',
    price: 449.99,
    originalPrice: 599.99,
    rating: 4.9,
    reviews: 67,
    category: 'Furniture',
    image: '/placeholder.svg?height=300&width=300',
    badge: 'Sale',
    description:
      'Comfortable ergonomic chair designed for long hours of productive work.',
  },
  {
    id: 4,
    name: 'Portable Bluetooth Speaker',
    price: 79.99,
    originalPrice: null,
    rating: 4.4,
    reviews: 156,
    category: 'Electronics',
    image: '/placeholder.svg?height=300&width=300',
    badge: null,
    description:
      'Compact speaker with powerful sound and long-lasting battery life.',
  },
  {
    id: 5,
    name: 'Professional Camera Lens',
    price: 899.99,
    originalPrice: 1099.99,
    rating: 4.7,
    reviews: 43,
    category: 'Photography',
    image: '/placeholder.svg?height=300&width=300',
    badge: 'Professional',
    description:
      'High-performance lens for professional photography and videography.',
  },
  {
    id: 6,
    name: 'Gaming Mechanical Keyboard',
    price: 159.99,
    originalPrice: null,
    rating: 4.5,
    reviews: 201,
    category: 'Gaming',
    image: '/placeholder.svg?height=300&width=300',
    badge: 'Gaming',
    description:
      'Mechanical keyboard with RGB lighting and customizable keys for gaming.',
  },
];

const categories = [
  'All',
  'Electronics',
  'Wearables',
  'Furniture',
  'Photography',
  'Gaming',
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Products</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our carefully curated selection of premium products designed
          to enhance your lifestyle.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card
            key={product.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <img
                src={product.image || '/placeholder.svg'}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              {product.badge && (
                <Badge
                  className="absolute top-2 left-2"
                  variant={
                    product.badge === 'Sale'
                      ? 'destructive'
                      : product.badge === 'New'
                      ? 'default'
                      : 'secondary'
                  }
                >
                  {product.badge}
                </Badge>
              )}
              <Button
                size="icon"
                variant="outline"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="line-clamp-2 text-lg">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 mt-1">
                    {product.description}
                  </CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium ml-1">
                    {product.rating}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <Badge variant="outline">{product.category}</Badge>
              </div>
              <Button className="w-full">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Products
        </Button>
      </div>

      {/* Features */}
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Free Shipping</CardTitle>
            <CardDescription>Free shipping on orders over $100</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <CardTitle>30-Day Returns</CardTitle>
            <CardDescription>
              Easy returns within 30 days of purchase
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <CardTitle>24/7 Support</CardTitle>
            <CardDescription>
              Customer support available around the clock
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
