# model.py

def get_recommendation(genre):
    # Placeholder logic
    recommendations = {
        "rock": "Bohemian Rhapsody by Queen",
        "pop": "Blinding Lights by The Weeknd",
        "jazz": "Take Five by Dave Brubeck"
    }
    
    return recommendations.get(genre.lower(), "No recommendation available for this genre.")
