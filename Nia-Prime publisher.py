"""
Social Publisher
Publishes content to social platforms.
"""

import requests

class SocialPublisher:
    def post(self, platform, message):
        print(f"Publishing to {platform}: {message}")
        return requests.post("https://api.socialplatform.com/post", json={"message": message})
