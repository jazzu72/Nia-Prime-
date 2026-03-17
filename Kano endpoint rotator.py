"""
Endpoint Rotator
Implements moving-target defense by rotating API endpoints.
"""

import secrets

class EndpointRotator:
    def generate(self):
        return f"api-{secrets.token_hex(4)}.houseofjazzu.com"
