## Installation
1. Clone the repository:
   
   git clone https://github.com/bb-tech/social-posts
2. Navigate to the project directory:
   
    cd social-posts
3. Install dependencies 

    npm install
4. Start the development server on http://localhost:3000:
   
    npm run dev
    
## Description
- Server-Side Rendering for fetching initial data. It is good for SEO and performance especially for news/posts website. 
- Composable for search/filter functionality makes this functionality reusable and easier to test.
- Debounce in search improves performance and reduces unnecessary computations.
    
## Improvements
- I would use pagination and lazy loading if json contains a large amount of data
- Filtering and search on the backend is also a good practice for a wesbite with many posts
- Additionally, I would include tests