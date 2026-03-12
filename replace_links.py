with open('services.html', 'r', encoding='utf-8') as f:
    html = f.read()
html = html.replace('<a href="services-details.html">', '<a href="javascript:void(0);">')
with open('services.html', 'w', encoding='utf-8') as f:
    f.write(html)
