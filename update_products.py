import os
import re

descriptions = {
    "WHITE SORGHAM SUDAN GRASS": "White Sorgham Sudan Grass is a multi-cut SSG variety designed for fast growth and excellent re-growth, making it a highly productive option for farmers. It is suitable for both green fodder and dry kutti, ensuring flexibility in feeding practices. Due to its juicy and soft fodder quality, animals readily enjoy eating it, which helps improve feed intake. Regular use of White Sorgham Sudan Grass fodder supports healthier animals and contributes to a more profitable dairy farm. 🌱🐄",
    "RED SORGHAM SUDAN GRASS": "Red Sorgham Sudan Grass is a multi-cut SSG variety designed for fast growth and excellent re-growth, making it a highly productive option for farmers. It is suitable for both green fodder and dry kutti, ensuring flexibility in feeding practices. Due to its juicy and soft fodder quality, animals readily enjoy eating it, which helps improve feed intake. Regular use of Red Sorgham Sudan Grass fodder supports healthier animals and contributes to a more profitable dairy farm. 🌱🐄",
    "OATS SEEDS": "Premium quality GANGA DOODH MALAI oats seeds specially selected for animal feed. Rich in energy, fiber, and essential nutrients, they support healthy growth, better digestion, and improved overall livestock performance. Suitable for cattle, horses, sheep, goats, and poultry, these clean and natural oats grains are an excellent choice for daily animal nutrition. 🌾🐄",
    "BARSEEM SEEDS GOLD": "GANGA Premium Berseem seeds designed for reliable field cultivation and high productivity. These seeds ensure strong establishment, uniform crop growth, and excellent fodder yield potential. A trusted choice for farmers aiming for healthy, fast-growing Berseem crops and consistent farm performance. 🌱🚜",
    "PALAK SEEDS": "High-quality GANGA All Green Palak (spinach) seeds suitable for cultivation and seed production. These seeds offer excellent germination, healthy plant growth, and high yield potential. Ideal for farmers and growers looking to produce fresh, nutrient-rich spinach crops with consistent quality. 🌱🌿",
    "CORIANDER SEEDS": "GANGA American Long Standing Coriander seeds suitable for cultivation and seed production. These seeds offer strong germination, uniform plant growth, and high yield potential. Ideal for farmers and growers looking to produce healthy coriander crops with excellent aroma and consistent quality. 🌱🌿",
    "BARSEEM SEEDS": "GANGA Premium Berseem seeds designed for reliable field cultivation and high productivity. These seeds ensure strong establishment, uniform crop growth, and excellent fodder yield potential. A trusted choice for farmers aiming for healthy, fast-growing Berseem crops and consistent farm performance. 🌱🚜",
    "HYBRID BAJRA SEEDS": "High-quality GANGA Hybrid Bajra seeds developed for strong crop performance and high yield. These seeds provide excellent germination, uniform plant growth, and good resistance to varying field conditions. Ideal for farmers looking for reliable pearl millet production with consistent grain quality. 🌾🌱",
    "PEAS SEEDS": "GANGA Peas seeds for successful cultivation and high-yield crops. These seeds offer vigorous growth, uniform plants, and excellent harvest potential. Perfect for farmers and gardeners seeking healthy, productive pea plants with consistent quality. 🌱🟢"
}

html_files = [
    r"C:\Users\narak\Downloads\souce\index.html",
    r"C:\Users\narak\Downloads\souce\services.html",
    r"C:\Users\narak\Downloads\souce\services-2.html"
]

def update_cards(match):
    full_match = match.group(0)
    title = match.group(1).strip()
    
    # Try to find exactly matching description, or fall back to a default if not found (though all should match)
    desc = descriptions.get(title, "High-quality seeds for maximum yield and healthy crops.")
    
    # Construct the new HTML block
    new_html = f"""                        <div class="info">
                            <div class="top">
                                <h4><a href="#">{title}</a></h4>
                            </div>
                            <div class="product-description" style="display: none; margin-top: 15px; font-size: 14px; line-height: 1.6; color: #eee; padding-bottom: 20px;">
                                {desc}
                            </div>
                            <a href="javascript:void(0);" class="btn-angle toggle-description"><i class="fas fa-chevron-down"></i></a>
                        </div>"""
    return new_html

card_pattern = re.compile(r'<div\s+class="info">\s*<div\s+class="top">\s*<h4><a\s+href="#">([^<]+)</a></h4>\s*</div>\s*<a\s+href="#"\s+class="btn-angle"><i\s+class="fas fa-arrow-left"></i></a>\s*</div>', re.DOTALL | re.IGNORECASE)

for filepath in html_files:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content, count = card_pattern.subn(update_cards, content)
        
        if count > 0:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {count} product cards in {os.path.basename(filepath)}")
        else:
            print(f"No matches found in {os.path.basename(filepath)}")
