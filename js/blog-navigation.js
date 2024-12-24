async function populateBlogNavigation() {
    try {
      // Fetch blog metadata
      const response = await fetch('/public/blogData.json');
      const blogPosts = await response.json();
  
      // Get current URL and find the current blog post
      const currentURL = window.location.pathname; // e.g., "/pages/blog/posts/acne-and-breakouts.html"
      const currentBlogIndex = blogPosts.findIndex(blog => blog.url === currentURL);
  
      if (currentBlogIndex === -1) {
        console.error('Current blog not found in metadata.');
        return;
      }
  
      // Get previous and next blog posts
      const prevBlog = blogPosts[currentBlogIndex - 1] || null;
      const nextBlog = blogPosts[currentBlogIndex + 1] || null;
  
      // Populate Previous Post link
      const prevLink = document.getElementById('prev-post');
      if (prevBlog) {
        prevLink.href = prevBlog.url;
        prevLink.querySelector('.blog-nav-title').textContent = prevBlog.title;
      } else {
        prevLink.style.display = 'none'; // Hide if no previous post
      }
  
      // Populate Next Post link
      const nextLink = document.getElementById('next-post');
      if (nextBlog) {
        nextLink.href = nextBlog.url;
        nextLink.querySelector('.blog-nav-title').textContent = nextBlog.title;
      } else {
        nextLink.style.display = 'none'; // Hide if no next post
      }
    } catch (error) {
      console.error('Error populating blog navigation:', error);
    }
  }
  
  // Call the function when the page loads
  document.addEventListener('DOMContentLoaded', populateBlogNavigation);
  