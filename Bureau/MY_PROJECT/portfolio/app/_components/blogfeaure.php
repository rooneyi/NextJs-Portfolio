<?php
symfony new blog_backend --webapp
cd blog_backend
// src/Entity/BlogPost.php
class BlogPost 
{
    private $id;
    private $title;
    private $content;
    private $slug;
    private $createdAt;
    private $category;
    private $tags;
    private $featuredImage;
}

// src/Entity/Category.php
class Category 
{
    private $id;
    private $name;
    private $description;
}

// src/Entity/Tag.php
class Tag 
{
    private $id;
    private $name;
}

composer require api-platform/core

// app/_components/Blog.tsx
export const Blog = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Blog Posts</Badge>
      <h2 className="text-3xl font-semibold">My Latest Writings</h2>
      
      <div className="grid md:grid-cols-3 gap-4">
        {BLOG_POSTS.map((post) => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>
    </Section>
  );
};

const BlogPostCard = ({ title, excerpt, readTime, category }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <div className="p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{excerpt}</p>
      <div className="flex justify-between mt-2">
        <Badge variant="secondary">{category}</Badge>
        <span className="text-sm text-muted-foreground">{readTime} min read</span>
      </div>
    </div>
  </Card>
);