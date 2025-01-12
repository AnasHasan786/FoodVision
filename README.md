# 🌟🍟🌭 Food Vision Website🍔🍕🍜

Welcome to the Food Vision Website!

This interactive web application lets users classify food images, explore recipes, and read food-related blogs — all in one place. Powered by deep learning and featuring a sleek user-friendly interface, the project brings together technology and food like never before.

<br>

## 📚 Table of Contents
- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Components](#-components)
- [Results](#-results)
- [Project Demo](#-project-demo)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [Acknowledgments](#-acknowledgments)

<br>

## 🔍 About the Project
The Food Vision Website is more than a food classifier — it's a fully functional website with multiple interactive components:

- **🍴 Classifier:** Upload food images and get instant predictions powered by a deep learning model.
- **🧑‍🍳 Recipes:** Find recipes for popular dishes.
- **📰 Blogs:** Discover food-related articles and tips.
- **📖 Menu:** Browse a curated list of dishes.

Built using React for the frontend and Flask for the backend, the website integrates cutting-edge deep learning with modern web development tools for an intuitive user experience.

<br>

## ✨ Features

- **🌐 Multi-Component Website:** Includes Home, Menu, About, Classifier, Recipes, and Blogs.
- **📂 Food Classification:** Upload an image to classify it into one of the trained food categories.
- **🚀 Fast and Accurate:** Leverages EfficientNetB0 for quick and accurate predictions.
- **🧑‍🍳 Recipe Suggestions:** Links to recipes for the classified food items.
- **📊 Blogs:** Read articles about food, nutrition, and cooking tips.
- **📱 Responsive Design:** Fully responsive UI, accessible across devices.

<br>

## 🛠️ Tech Stack

### Frontend
- **⚛️ React:** Component-based architecture.
- **⚡ Vite:** Lightning-fast build and development tool.
- **🎨 CSS:** For responsive and beautiful styling.

### Backend
- **🐍 Flask:** Lightweight Python web framework.
- **🤖 TensorFlow:** Used for training and deploying the food classification model.

<br>

## ⚙️ Installation

Follow these steps to set up the project locally:

### Backend Setup

#### 1. Clone the repository:

```
git clone https://github.com/AnasHasan786/FoodVision.git
```

#### 2. Navigate to the backend folder:

```
cd flask_backend
```

#### 3. Install Python dependencies:

```
pip install -r requirements.txt
```

#### 4. Run the Flask server:

```
python app.py
```

<br>

### Frontend Setup

#### 1.Navigate to the frontend folder:

```
cd frontend
```

#### 2. Install Node.js dependencies:

```
npm install
```

#### 3. Start the development server:

```
npm run dev
```

The frontend will be live at http://localhost:5173, and the backend will run on http://127.0.0.1:5000.

<br>

## 🚀 Usage

1. Open the application in your browser.
2. Use the Classifier component to upload food images and see predictions.
3. Explore the Menu, read Blogs, and try out delicious Recipes.

<br>

## 🌟 Components

- **🏠 Home:** Landing page with an introduction to the website.
- **🍽️ Menu:** Browse a list of popular dishes.
- **📄 About:** Learn more about the project and its goals.
- **🖼️ Classifier:** Upload an image and get instant predictions with confidence scores.
- **📖 Recipes:** Find recipes for the classified food items.
- **📰 Blogs:** Explore articles on food, nutrition, and cooking tips.

<br>

## 📊 Results

The Food Vision project achieved impressive results using state-of-the-art pre-trained models. Below are the evaluation metrics for the models tested:

### **Performance Summary**

| Model             | Top-1 Accuracy | Comments                                                   |
|--------------------|----------------|-----------------------------------------------------------|
| **EfficientNetB0** | **80.05%**     | Best performance after fine-tuning, with balanced speed and accuracy. |
| **EfficientNetB4** | 77.14%         | Slightly lower accuracy but capable of handling larger datasets.        |

<br>

## 🎥 Project Demo

[![Watch the Video](https://vumbnail.com/1046105565.jpg)](https://vimeo.com/1046105565)

<br>

## 🎯 Future Enhancements

- Add nutrition information for each classified food item.
- Implement multi-food classification for images containing multiple dishes.
- Allow users to save predictions for future reference.
- Add user accounts for a personalized experience.

<br>

## 🤝 Contributing

Contributions are welcome! To contribute:

### 1. Fork the repository.
### 2. Create a new branch:

```
git checkout -b feature/your-feature-name
```

### 3. Commit your changes:

```
git commit -m "Added a new feature"
```

### 4. Push the branch and open a pull request.

<br>

## 🙏 Acknowledgments

- **TensorFlow/Keras:** For providing tools for model training and deployment.
- **React & Flask Communities:** For their awesome frameworks.
- **Food101 Dataset:** For making the dataset available for academic use.
