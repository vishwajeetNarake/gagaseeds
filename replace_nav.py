import os
import glob
import re

directory = r"C:\Users\narak\Downloads\souce"
html_files = glob.glob(os.path.join(directory, "*.html"))

original_logo = "assets/img/gaga-seeds-logo.png"
new_logo = "assets/img/Gemini_Generated_Image_9hl8uj9hl8uj9hl8 (1).png"

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # 1. Replace Logo
    new_content = content.replace(original_logo, new_logo)

    # 2. Modify Navbar classes
    def repl_nav(match):
        attributes = match.group(1)
        # Check if it has class attr
        if 'class="' in attributes:
            def repl_class(m):
                cls_content = m.group(1)
                # Remove dark
                cls_content = re.sub(r'\bdark\b', '', cls_content)
                # Remove glass-nav
                cls_content = re.sub(r'\bglass-nav\b', '', cls_content)
                # Add bg-white if not present
                if 'bg-white' not in cls_content:
                    cls_content += ' bg-white'
                # Clean up spaces
                cls_content = re.sub(r'\s+', ' ', cls_content).strip()
                return f'class="{cls_content}"'
            
            attributes = re.sub(r'class="([^"]*)"', repl_class, attributes)
        return f'<nav {attributes}>'
        
    new_content = re.sub(r'<nav\s+([^>]+)>', repl_nav, new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {os.path.basename(filepath)}")
