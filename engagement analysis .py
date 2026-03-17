"""
Engagement Analyzer
Scores engagement based on likes, shares, and comments.
"""

class EngagementAnalyzer:
    def analyze(self, likes, shares, comments):
        return likes + shares * 2 + comments * 3
