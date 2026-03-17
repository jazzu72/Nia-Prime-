"""
Opportunity Scoring
Implements the weighted scoring model for high-to-medium value opportunities.
"""

def score_opportunity(data):
    score = (
        data["growth"] * 0.3 +
        data["profit"] * 0.25 +
        data["timing"] * 0.25 +
        (100 - data["competition"]) * 0.2
    )
    return round(score, 2)
