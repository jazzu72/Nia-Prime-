class LuxuryAssetRegistry:

    def __init__(self):
        self.assets = []

    def add_asset(self, item):
        """
        item must be a dict containing:
        - brand
        - model
        - reference
        - serial
        - year
        - condition
        - box_papers
        - service_history
        - purchase_price
        - market_price_at_purchase
        - seller
        - authenticity_score
        - condition_score
        - price_score
        - acquisition_date
        - photos
        """
        asset_record = {
            "brand": item.get("brand"),
            "model": item.get("model"),
            "reference": item.get("reference"),
            "serial": item.get("serial"),
            "year": item.get("year"),
            "condition": item.get("condition"),
            "box_papers": item.get("box_papers"),
            "service_history": item.get("service_history"),

            # Financial metadata
            "purchase_price": item.get("purchase_price"),
            "market_price_at_purchase": item.get("market_price_at_purchase"),
            "discount": (
                item.get("market_price_at_purchase", 0)
                - item.get("purchase_price", 0)
            ),

            # Governance metadata
            "seller": item.get("seller"),
            "authenticity_score": item.get("authenticity_score"),
            "condition_score": item.get("condition_score"),
            "price_score": item.get("price_score"),
            "acquisition_date": item.get("acquisition_date"),

            # Performance metadata
            "current_valuation": item.get("market_price_at_purchase"),
            "valuation_history": [
                {
                    "date": item.get("acquisition_date"),
                    "value": item.get("market_price_at_purchase")
                }
            ],

            # Media
            "photos": item.get("photos", [])
        }

        self.assets.append(asset_record)

    def update_valuation(self, serial, new_value, date):
        for asset in self.assets:
            if asset["serial"] == serial:
                asset["current_valuation"] = new_value
                asset["valuation_history"].append({
                    "date": date,
                    "value": new_value
                })
                break

    def list_assets(self):
        return self.assets
