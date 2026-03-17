"""
Event Store
Immutable store for system events and decisions.
"""

class EventStore:
    def save(self, event):
        print(f"EventStore: Saved event {event}")
