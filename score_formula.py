"""
Score Formula
Central scoring logic for opportunity evaluation.
"""

def compute(data):
    return data.get("growth", 0) * 0.3
