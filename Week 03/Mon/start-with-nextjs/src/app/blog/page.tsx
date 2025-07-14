import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js App Router',
    description:
      'Learn how to build modern web applications with Next.js 13+ App Router and its powerful features.',
    author: 'John Doe',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Development',
    image: '/placeholder.svg?height=200&width=400',
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    description:
      'Exploring upcoming trends and technologies that will shape the future of web development.',
    author: 'Jane Smith',
    date: '2024-01-12',
    readTime: '8 min read',
    category: 'Technology',
    image: '/placeholder.svg?height=200&width=400',
  },
  {
    id: 3,
    title: 'Building Scalable Applications',
    description:
      'Best practices and strategies for building applications that can scale with your business needs.',
    author: 'Mike Johnson',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Architecture',
    image: '/placeholder.svg?height=200&width=400',
  },
  {
    id: 4,
    title: 'UI/UX Design Principles',
    description:
      'Essential design principles every developer should know to create better user experiences.',
    author: 'Sarah Wilson',
    date: '2024-01-08',
    readTime: '7 min read',
    category: 'Design',
    image: '/placeholder.svg?height=200&width=400',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Stay updated with the latest insights, tutorials, and industry news
          from our team of experts.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-12">
        <Card className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Featured post"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <Badge className="mb-2">Featured</Badge>
              <h2 className="text-2xl font-bold mb-3">{blogPosts[0].title}</h2>
              <p className="text-muted-foreground mb-4">
                {blogPosts[0].description}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {blogPosts[0].author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {blogPosts[0].date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {blogPosts[0].readTime}
                </div>
              </div>
              <Button>Read More</Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.slice(1).map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={post.image || '/placeholder.svg'}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-sm text-muted-foreground">
                  {post.readTime}
                </span>
              </div>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              <CardDescription className="line-clamp-3">
                {post.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline">
                Read Article
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Subscribe to Our Newsletter</CardTitle>
            <CardDescription>
              Get the latest blog posts and updates delivered directly to your
              inbox.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-input rounded-md"
              />
              <Button>Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
