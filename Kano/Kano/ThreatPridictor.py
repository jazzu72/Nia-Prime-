"""
Threat Predictor
Forecasts threat probability based on traffic patterns.
"""

class ThreatPredictor:
    def analyze(self, traffic):
        return "High threat" if traffic > 900 else "Normal"
