from flask import Flask, request, jsonify
from model import get_recommendation

app = Flask(__name__)

@app.route('/recommend', methods=['GET'])
def recommend():
    genre = request.args.get('genre')
    if not genre:
        return jsonify({"error": "Genre not provided"}), 400
    
    # Get the recommendation from the model
    recommendation = get_recommendation(genre)
    return jsonify({"recommendation": recommendation})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)  # Running on port 5001
