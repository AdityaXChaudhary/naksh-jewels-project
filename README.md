# 💎 Naksh Jewels - Luxury E-commerce Platform

**Naksh Jewels** is a premium, full-stack jewelry boutique application designed with an emphasis on high-end aesthetics and seamless user experience. This project demonstrates a complete integration of modern frontend architecture, backend services, and containerized deployment.



---

## ✨ Features

* **Bespoke Visual Identity:** Custom 4K gold-themed branding and high-fidelity typography.
* **Dynamic Cart Management:** Real-time state updates for adding, removing, and adjusting jewelry items.
* **Luxury UI/UX:** Responsive product grid featuring CSS3 animations and specialized hover effects.
* **Sticky Premium Navbar:** Elegant navigation with a live-updating cart badge and integrated brand logo.
* **Dockerized Environment:** Standardized development and production setup using Docker Compose.

---

## 🛠️ Technical Stack

* **Frontend:** React.js (Hooks & Functional Components)
* **Styling:** Custom CSS3 with Google Fonts (Playfair Display & Poppins)
* **Backend:** Node.js / Express API
* **DevOps:** Docker, Docker Compose
* **Version Control:** Git

---

## 🚀 Getting Started

### Prerequisites
* **Docker Desktop** must be installed and running.
* **Git** installed for repository management.

### Installation

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/AdityaXChaudhary/naksh-jewels-project.git](https://github.com/AdityaXChaudhary/naksh-jewels-project.git)
    cd naksh-jewels-project
    ```

2.  **Build and Run with Docker**
    Use the following command to build the images and start the containers:
    ```bash
    docker compose up --build
    ```

3.  **Access the Application**
    Once the build is complete, open your browser to:
    `http://localhost:3000`

---

## 📁 Project Architecture

```text
naksh-jewels-project/
├── frontend/
│   ├── public/
│   │   └── images/          # Logo, Favicon, and Asset storage
│   ├── src/
│   │   ├── components/      # Modular UI components (ProductList, CartPage)
│   │   ├── App.js           # Core state logic and routing
│   │   └── App.css          # Luxury theme and layout styles
├── backend/                 # Server-side API logic
└── docker-compose.yml       # Multi-container orchestration
💎 Future Enhancements
[ ] Integration of secure payment gateways (Stripe/PayPal).

[ ] User authentication and personalized jewelry wishlists.

[ ] AI-driven product recommendations based on browsing history.

👩‍💻 Developed By
Aditya Chaudhary Aspiring Full-Stack Developer



