"""
EndpointRotator
Rotates API endpoints as part of the moving-target defense system.
"""

import secrets

class EndpointRotator:
    def generate(self):
        return f"api-{secrets.token_hex(4)}.houseofjazzu.com"
