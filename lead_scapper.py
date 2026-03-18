import requests
from bs4 import BeautifulSoup
from datetime import datetime

class LeadScraper:

    def scrape(self, url):
        response = requests.get(url)
        soup = BeautifulSoup(response.text, "html.parser")

        leads = []

        # Example pattern: each business is inside a <div class="business-card">
        for card in soup.select(".business-card"):
            business_name = card.select_one(".business-name")
            owner = card.select_one(".owner")
            email = card.select_one("a[href^='mailto:']")
            industry = card.select_one(".industry")
            location = card.select_one(".location")
            website = card.select_one("a[href^='http']")

            leads.append({
                "business_name": business_name.text.strip() if business_name else None,
                "owner": owner.text.strip() if owner else None,
                "email": email.get("href").replace("mailto:", "") if email else None,
                "industry": industry.text.strip() if industry else None,
                "location": location.text.strip() if location else None,
                "website": website.get("href") if website else None,
                "source_url": url,
                "scraped_at": datetime.utcnow().isoformat()
            })

        return leads
