import React, { useState } from "react";
import './Blogs.css';
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const blogsData = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    thumbnail_url: "https://img.freepik.com/free-photo/top-view-delicious-pizza-with-fresh-cheese_23-2150096953.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "A classic Italian pizza with fresh mozzarella, tomatoes, basil, and a drizzle of olive oil.",
    content: "Margherita pizza is one of the most beloved pizza recipes in the world. It originated from Naples, Italy, and it represents the colors of the Italian flag: red (tomatoes), white (mozzarella), and green (basil). The combination of these ingredients creates a perfect balance of flavors. To make this pizza, start by making a dough base, topping it with a simple tomato sauce, fresh mozzarella, and then bake it in a hot oven until crispy and golden."
  },
  {
    id: 2,
    name: "Veggie Stir Fry",
    thumbnail_url: "https://img.freepik.com/free-photo/stir-fry-chicken-zucchini-sweet-peppers-green-onion_2829-10787.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "A quick and easy stir fry with a mix of colorful vegetables and savory sauces.",
    content: "This veggie stir fry is packed with a variety of vegetables, including bell peppers, carrots, broccoli, and snap peas. The stir fry is cooked in a hot pan with a touch of olive oil and flavored with soy sauce, garlic, and ginger. It's a perfect meal for anyone looking for a light, healthy, and delicious dish that comes together in just 20 minutes. Serve it with rice or noodles for a complete meal."
  },
  {
    id: 3,
    name: "Spaghetti Carbonara",
    thumbnail_url: "https://img.freepik.com/free-photo/tasty-spaghetti-with-cheese-close-up_23-2148517028.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "A rich and creamy pasta dish made with eggs, cheese, pancetta, and pepper.",
    content: "Spaghetti Carbonara is a classic Italian dish that's both creamy and savory. Made with a combination of eggs, Pecorino Romano cheese, and crispy pancetta, it's the ultimate comfort food. The dish is traditionally prepared with spaghetti, though you can use other pasta shapes. The key is to combine the hot pasta with the egg mixture so that the residual heat creates a velvety sauce. Serve with a sprinkle of freshly ground black pepper."
  },
  {
    id: 4,
    name: "Chicken Tikka Masala",
    thumbnail_url: "https://img.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine_2829-6270.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "A flavorful Indian curry made with marinated chicken in a creamy, spiced tomato sauce.",
    content: "Chicken Tikka Masala is a beloved dish in Indian cuisine, known for its rich and aromatic flavors. The chicken is first marinated in yogurt and spices, then grilled or baked before being added to a creamy tomato sauce with a blend of spices such as cumin, coriander, turmeric, and garam masala. The dish is usually served with naan bread or rice, making it the perfect comforting meal. It's both spicy and creamy, with layers of flavor that will leave you craving more."
  },
  {
    id: 5,
    name: "Vegetarian Sushi Rolls",
    thumbnail_url: "https://img.freepik.com/free-photo/sushi-set-with-side-salad_140725-2854.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "Fresh sushi rolls filled with avocado, cucumber, and other vegetables.",
    content: "Vegetarian sushi is a fantastic option for those looking for a healthy, light meal. The rolls are filled with fresh vegetables like avocado, cucumber, and carrots, wrapped in seaweed and rice. You can add a bit of soy sauce or wasabi for flavor. Making sushi at home is surprisingly simple, and it's a fun activity to do with friends or family. Enjoy these rolls as an appetizer or as a light main course."
  },
  {
    id: 6,
    name: "Grilled Steak with Chimichurri Sauce",
    thumbnail_url: "https://img.freepik.com/free-photo/side-view-grilled-beef-steak-with-sauce-wooden-board_140725-10265.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "Juicy grilled steak topped with a tangy and herbaceous chimichurri sauce.",
    content: "A perfectly grilled steak paired with chimichurri sauce is a meal that's both satisfying and flavorful. Chimichurri is an Argentinian sauce made from parsley, garlic, vinegar, and oil, with a touch of heat from red pepper flakes. The steak can be seasoned simply with salt and pepper and grilled to your preferred level of doneness. Once cooked, the steak is topped with the chimichurri sauce for an added layer of freshness and tang. Serve with roasted vegetables or a salad."
  },
  {
    id: 7,
    name: "Shrimp Tacos",
    thumbnail_url: "https://img.freepik.com/free-photo/top-view-tacos-with-shrimps_23-2148629378.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "Delicious shrimp tacos with avocado, salsa, and a creamy lime sauce.",
    content: "Shrimp tacos are a quick and flavorful dish that combines tender shrimp with vibrant toppings. The shrimp is seasoned with spices like cumin, chili powder, and garlic before being sautéed. The tacos are then filled with fresh ingredients like avocado, cabbage, salsa, and a creamy lime sauce. You can use soft corn tortillas or flour tortillas, depending on your preference. It's a perfect dish for a casual dinner or a fun taco night."
  },
  {
    id: 8,
    name: "Chocolate Lava Cake",
    thumbnail_url: "https://img.freepik.com/free-photo/front-view-delicious-chocolate-cake_23-2148549958.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "A rich and indulgent dessert with a gooey molten center.",
    content: "Chocolate lava cake is the ultimate indulgence for chocolate lovers. The cake has a delicate exterior with a molten, gooey chocolate center that flows out when you cut into it. To make this dessert, a simple chocolate batter is baked at a high temperature for just the right amount of time to ensure that the center remains molten while the edges set. Serve with a scoop of vanilla ice cream for the perfect dessert experience."
  },
  {
    id: 9,
    name: "Lemon Meringue Pie",
    thumbnail_url: "https://img.freepik.com/free-photo/bottom-view-cake-with-white-pastry-cream-lemon-slices-round-plate-light-grey-table_140725-103027.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "A sweet and tangy pie topped with fluffy meringue.",
    content: "Lemon meringue pie combines the sweetness of meringue with the tartness of lemon filling. The pie crust is flaky, and the filling is made with fresh lemon juice, eggs, and sugar, giving it a bright, zesty flavor. The meringue is whipped to perfection and browned to a golden hue. It's a classic dessert perfect for any occasion."
  },
  {
    id: 10,
    name: "Beef Wellington",
    thumbnail_url: "https://img.freepik.com/free-photo/grilled-meat-fresh-vegetables-healthy-homemade-plate-generated-by-ai_188544-17921.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "A decadent dish featuring beef tenderloin wrapped in pastry with mushrooms.",
    content: "Beef Wellington is a luxurious dish featuring a perfectly cooked beef tenderloin coated with a mushroom duxelles, then wrapped in puff pastry and baked to golden perfection. It's often served with a rich red wine sauce and makes for an impressive centerpiece for special occasions."
  },
  {
    id: 11,
    name: "Vegetable Paella",
    thumbnail_url: "https://img.freepik.com/free-photo/italian-caponata-with-frying-pan-wooden-table_2829-8085.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "A flavorful Spanish dish made with rice, saffron, and seasonal vegetables.",
    content: "Paella is a traditional Spanish rice dish that originated in Valencia. This vegetable version features a variety of seasonal vegetables such as bell peppers, peas, and artichokes, all cooked with saffron-infused rice. It's a vibrant, aromatic dish that can be enjoyed as a hearty vegetarian meal."
  },
  {
    id: 12,
    name: "Eggplant Parmesan",
    thumbnail_url: "https://img.freepik.com/free-photo/still-life-with-delicious-eggplant_23-2150392335.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "Breaded and fried eggplant slices layered with marinara sauce and cheese.",
    content: "Eggplant Parmesan is a comforting Italian dish made by breading and frying slices of eggplant, then layering them with marinara sauce and cheese. The dish is baked until the cheese is melted and golden, making it the perfect vegetarian main course. Serve with pasta or a salad for a satisfying meal."
  },
  {
    id: 13,
    name: "Fettuccine Alfredo",
    thumbnail_url: "https://img.freepik.com/free-photo/fettuccine-with-chicken-cream-sauce-mint-side-view_141793-3106.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "Creamy pasta with a rich sauce made from butter, cream, and Parmesan.",
    content: "Fettuccine Alfredo is an indulgent pasta dish made by tossing fettuccine noodles with a rich sauce made of butter, heavy cream, and Parmesan cheese. The sauce becomes silky and creamy, coating the noodles in a luxurious, velvety layer. You can add chicken, shrimp, or vegetables for extra flavor. This dish is the epitome of comfort food."
  },
  {
    id: 14,
    name: "Peking Duck",
    thumbnail_url: "https://img.freepik.com/free-photo/top-view-traditional-asian-food-peking-duck-with-cucumbers-sauce-plate_141793-8524.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "A famous Chinese dish known for its crispy skin and tender meat.",
    content: "Peking Duck is a traditional Chinese dish that is famous for its crispy skin and tender meat. The duck is roasted until the skin becomes crisp and golden, then served with thin pancakes, hoisin sauce, and sliced scallions. It's a delicious and elegant dish that's perfect for special occasions."
  },
  {
    id: 15,
    name: "Tom Yum Soup",
    thumbnail_url: "https://img.freepik.com/free-photo/tom-yum-goong-thai-food_1258-203.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "A spicy and sour Thai soup made with shrimp, mushrooms, and herbs.",
    content: "Tom Yum Soup is a flavorful and aromatic Thai soup known for its bold flavors. It features a combination of shrimp, mushrooms, and fresh herbs like lemongrass, lime leaves, and galangal. The broth is both spicy and sour, with a tang from lime juice and heat from chili peppers. It's a perfect dish to warm you up on a chilly day."
  },
  {
    id: 16,
    name: "Lasagna",
    thumbnail_url: "https://img.freepik.com/free-photo/classic-lasagna-with-bolognese-sauce_2829-11250.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "A hearty Italian dish made with layers of pasta, meat sauce, and cheese.",
    content: "Lasagna is a beloved Italian comfort food made with layers of pasta, rich meat sauce, ricotta cheese, and mozzarella. The dish is baked until bubbly and golden, creating a satisfying meal perfect for family gatherings. It can be made with beef, pork, or a vegetarian filling."
  },
  {
    id: 17,
    name: "Fish Tacos",
    thumbnail_url: "https://img.freepik.com/free-photo/appetizing-snacks-with-shrimps_23-2147761604.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "Crispy fish in a taco with cabbage slaw and creamy sauce.",
    content: "Fish tacos are a popular dish in coastal regions, offering a refreshing and flavorful combination. The fish is seasoned, battered, and fried to a crispy texture, then served in soft tortillas with cabbage slaw, avocado, and a creamy sauce. A squeeze of lime adds a zesty finish."
  },
  {
    id: 18,
    name: "Chicken Caesar Salad",
    thumbnail_url: "https://img.freepik.com/free-photo/classic-caesar-salad-with-grated-parmesan_140725-5639.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "A classic salad with grilled chicken, lettuce, croutons, and Caesar dressing.",
    content: "Chicken Caesar Salad is a timeless dish, combining grilled chicken with crisp romaine lettuce, crunchy croutons, and creamy Caesar dressing. Topped with Parmesan cheese, it's a satisfying and flavorful salad that works as both a light meal or a side dish."
  },
  {
    id: 19,
    name: "Lamb Kofta",
    thumbnail_url: "https://img.freepik.com/free-photo/delicious-arabic-fast-food-skewers-close-up_23-2148651120.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "Grilled spiced lamb meatballs served with yogurt sauce.",
    content: "Lamb Kofta is a Middle Eastern dish made of ground lamb mixed with a variety of spices, shaped into meatballs, and grilled until perfectly charred. The kofta is often served with a cooling yogurt sauce and flatbread. It's a savory dish full of bold flavors and ideal for sharing."
  },
  {
    id: 20,
    name: "Mushroom Risotto",
    thumbnail_url: "https://img.freepik.com/free-photo/vegetarian-risotto-with-fresh-mushrooms-parmesan-cheese-generated-by-ai_188544-10223.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "A creamy Italian rice dish with mushrooms and Parmesan.",
    content: "Mushroom Risotto is a rich, creamy rice dish made with Arborio rice and cooked slowly with broth until tender. The mushrooms add an earthy flavor, while the Parmesan cheese gives it a savory depth. It's a comforting dish perfect for a cozy dinner."
  },
  {
    id: 21,
    name: "Falafel",
    thumbnail_url: "https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food_2829-14394.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "Deep-fried balls made of chickpeas and herbs, served with pita and sauce.",
    content: "Falafel is a popular Middle Eastern snack made from ground chickpeas mixed with herbs and spices, then deep-fried into crispy, golden balls. It's often served in pita bread with lettuce, tomatoes, and tahini sauce for a satisfying vegetarian meal."
  },
  {
    id: 22,
    name: "BBQ Ribs",
    thumbnail_url: "https://img.freepik.com/free-photo/top-view-meat-kebab-with-potatoes-grilled-vegetables-with-sauce-board_141793-4077.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "Tender ribs slathered in BBQ sauce, slow-cooked to perfection.",
    content: "BBQ Ribs are a quintessential American dish, known for their smoky flavor and tender texture. The ribs are slow-cooked until the meat falls off the bone, then glazed with a smoky BBQ sauce for a rich, sweet, and tangy finish. They're a great option for a summer cookout."
  },
  {
    id: 23,
    name: "Caprese Salad",
    thumbnail_url: "https://img.freepik.com/free-photo/fresh-italian-salad-antipasto-called-caprese-with-buffalo-mozzarella-sliced-tomatoes-basil-with-olive-oil-ingredients-vegetarian-caprese-salad-italian-food-top-view-rustic-style_1150-44797.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "A simple Italian salad with tomatoes, mozzarella, basil, and olive oil.",
    content: "Caprese Salad is a fresh and light Italian dish made with ripe tomatoes, creamy mozzarella, fresh basil, and a drizzle of olive oil. It's often seasoned with salt and pepper, offering a burst of flavors that's perfect as a side dish or appetizer."
  },
  {
    id: 24,
    name: "Pasta Primavera",
    thumbnail_url: "https://img.freepik.com/free-photo/close-up-yummy-pasta_23-2147778420.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "Pasta with a variety of sautéed vegetables in a light sauce.",
    content: "Pasta Primavera is a colorful dish made with pasta and a variety of sautéed vegetables, such as bell peppers, zucchini, and tomatoes. The dish is typically dressed with olive oil, garlic, and Parmesan, offering a fresh, light flavor that complements the vegetables."
  },
  {
    id: 25,
    name: "Cheese Fondue",
    thumbnail_url: "https://img.freepik.com/free-photo/top-view-raclette-dish-with-ingredients-delicious-food_23-2149514174.jpg?uid=R141348639&ga=GA1.1.1648520866.1732772399&semt=ais_hybrid",
    description: "Melted cheese served with bread, vegetables, and fruits for dipping.",
    content: "Cheese Fondue is a Swiss dish made by melting cheese with wine and seasoning, then serving it in a communal pot. It's perfect for dipping bread, vegetables, or fruits into the creamy cheese. It's a fun and interactive dish that's ideal for gatherings."
  },
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentBlogs, setCurrentBlogs] = useState(blogsData.slice(0, 8));
  const [loadMoreCount, setLoadMoreCount] = useState(1);

  const openModal = (blog) => setSelectedBlog(blog);
  const closeModal = () => setSelectedBlog(null);

  const loadMoreBlogs = () => {
    const nextBlogs = blogsData.slice(loadMoreCount * 8, (loadMoreCount + 1) * 8);
    setCurrentBlogs([...currentBlogs, ...nextBlogs]);
    setLoadMoreCount(loadMoreCount + 1);
  };

  return (
    <div className={`blog-container ${selectedBlog ? "modal-open" : ""}`}>
      <h1 className="blog-title">Our Latest Blogs</h1>
      <div className="blog-grid">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.thumbnail_url} alt={blog.name} className="blog-image" />
            <h2 className="blog-name">{blog.name}</h2>
            <p className="blog-description">{blog.description ? blog.description.substring(0, 100) : "No description available"}...</p>
            <button className="read-more" onClick={() => openModal(blog)}>Read More</button>
          </div>
        ))}
      </div>

      {selectedBlog && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedBlog.name}</h2>
            <img src={selectedBlog.thumbnail_url} alt={selectedBlog.name} className="modal-image" />
            <p>{selectedBlog.content || "No content available"}</p>
            <button className="close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {loadMoreCount < 4 && (
        <button className="load-more" onClick={loadMoreBlogs}>Load More</button>
      )}
    </div>
  );
};

export default Blog;
