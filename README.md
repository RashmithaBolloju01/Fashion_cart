Fashion Cart
Fashion Cart is a modern front-end shopping application designed to provide users with a responsive and intuitive interface for browsing products, adding them to a cart, and managing their selections. Built with React and Vite, it emphasizes clean UI practices, reusable components, and interactive state management, making it an excellent demonstration of scalable front-end development.
Project Overview
This project focuses on implementing a core e-commerce shopping cart flow with features such as product search, category filtering, and cart persistence. The design ensures smooth user interactions and maintains a clear structure that can be extended into a complete e-commerce platform with backend integration.
Features
Search and filter functionality for products by name or category
Cart management with add, remove, and update operations
Persistent cart state using local storage
Disabled checkout button until items are present in the cart
Dark mode toggle for theme flexibility
Responsive user interface for both desktop and mobile devices
Technologies Used
Category	Tools and Libraries
Framework	React (with Vite)
Styling	CSS / Tailwind CSS
State Management	React (useState, useEffect)
Tooling	Vite, ESLint
Project Structure
Fashion_cart/
├── src/
│   ├── components/     # Reusable UI components (Card, Navbar, CartPage, SearchBar)  
│   ├── pages/          # Application pages (Home, About, Contact, Signin)  
│   ├── App.jsx         # Main application entry point  
│   └── main.jsx        # Application bootstrapper  
├── public/             # Static assets  
├── index.html  
└── README.md  
How to Run
Clone the repository:
git clone https://github.com/RashmithaBolloju01/Fashion_cart.git
cd Fashion_cart
Install dependencies:
npm install
Start the development server:
npm run dev
Open in browser: http://localhost:5173
Sample Use Case
A user navigates through Fashion Cart, filters products by category, and adds selected items to the cart. The cart persists across sessions using local storage, and the checkout button becomes active only when items are present, ensuring a guided and reliable shopping experience.
Future Enhancements
Backend integration for product storage and user authentication
Order history and analytics dashboard
Payment gateway integration
Product image zoom and gallery views
Discount codes and promotional offers
License
This project is licensed under the MIT License.
