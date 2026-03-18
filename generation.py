class OutreachAngleGenerator:

    def generate(self, lead):
        business = lead.get("business_name")
        owner = lead.get("owner")
        industry = lead.get("industry")
        location = lead.get("location")
        grants = lead.get("grants", [])

        angle = []

        if owner:
            angle.append(f"{owner}, we reviewed {business} and found opportunities worth exploring.")
        else:
            angle.append(f"We reviewed {business} and found opportunities worth exploring.")

        if industry:
            angle.append(f"Businesses in the {industry} sector are currently eligible for several funding programs.")
        
        if location:
            angle.append(f"{location} has new incentives that align with your profile.")

        if grants:
            angle.append(f"We identified {len(grants)} grants you may qualify for.")

        angle.append("Would you like a quick breakdown?")

        return " ".join(angle)
