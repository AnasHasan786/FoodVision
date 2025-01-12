from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image

app = Flask(__name__)
CORS(app)

# Load your trained model
model = load_model("model.keras")

# Define class names
class_names = [
    "apple_pie", "baby_back_ribs", "baklava", "beef_carpaccio", "beef_tartare", "beet_salad", 
    "beignets", "bibimbap", "bread_pudding", "breakfast_burrito", "bruschetta", "caesar_salad", 
    "cannoli", "caprese_salad", "carrot_cake", "ceviche", "cheese_plate", "cheesecake", 
    "chicken_curry", "chicken_quesadilla", "chicken_wings", "chocolate_cake", "chocolate_mousse", 
    "churros", "clam_chowder", "club_sandwich", "crab_cakes", "creme_brulee", "croque_madame", 
    "cup_cakes", "deviled_eggs", "donuts", "dumplings", "edamame", "eggs_benedict", "escargots", 
    "falafel", "filet_mignon", "fish_and_chips", "foie_gras", "french_fries", "french_onion_soup", 
    "french_toast", "fried_calamari", "fried_rice", "frozen_yogurt", "garlic_bread", "gnocchi", 
    "greek_salad", "grilled_cheese_sandwich", "grilled_salmon", "guacamole", "gyoza", "hamburger", 
    "hot_and_sour_soup", "hot_dog", "huevos_rancheros", "hummus", "ice_cream", "lasagna", "lobster_bisque", 
    "lobster_roll_sandwich", "macaroni_and_cheese", "macarons", "miso_soup", "mussels", "nachos", 
    "omelette", "onion_rings", "oysters", "pad_thai", "paella", "pancakes", "panna_cotta", 
    "peking_duck", "pho", "pizza", "pork_chop", "poutine", "prime_rib", "pulled_pork_sandwich", 
    "ramen", "ravioli", "red_velvet_cake", "risotto", "samosa", "sashimi", "scallops", "seaweed_salad", 
    "shrimp_and_grits", "spaghetti_bolognese", "spaghetti_carbonara", "spring_rolls", "steak", 
    "strawberry_shortcake", "sushi", "tacos", "takoyaki", "tiramisu", "tuna_tartare", "waffles"
]

def preprocess_image(image):
    image = image.resize((224, 224))
    image = np.expand_dims(image, axis=0)
    return image

# Default route for testing
@app.route("/", methods=["GET"])
def home():
    return "Flask server is running! Use the /classify endpoint for predictions.", 200

@app.route("/classify", methods=["POST"])
def classify():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400
    
    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400
    
    try:
        image = Image.open(file.stream)
        processed_image = preprocess_image(image)
        prediction = model.predict(processed_image)
        predicted_index = np.argmax(prediction[0])
        predicted_label = class_names[predicted_index]  

        return jsonify({"label": predicted_label})  
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)
