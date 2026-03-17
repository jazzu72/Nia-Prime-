"""
Identity Tokens
Generates ephemeral identity tokens for services.
"""

import secrets

def generate_token():
    return secrets.token_urlsafe(32)
