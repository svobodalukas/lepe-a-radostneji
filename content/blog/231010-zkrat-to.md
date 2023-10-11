---
external: false
title: "Zkrať to"
description: "Opět o zkracování a k tomu ještě trocha moudra o edge casech"
ogImagePath: "/images/231010-hn-zkratka-teaser.webp"
bgColor: "teaser-blue"
date: 2023-10-10
---

Minule [Arriva zkracovala](/post/231003-hra-na-schovku) až moc, tady se na to naopak zapomnělo. Trefit křížek modalu s nabídkou audio verze článku je hra jen pro bystré čtenáře.

![Hospodářské noviny a jejich modal](/images/231010-hn-zkratka.webp)

Při návrhu komponenty je důležité myslet i na edge case varianty. Zrovna modal je v tomhle směru minové pole.

Jaká bude maximální délka titulku? Bude možné skrolovat obsahem modalu pokud bude větší než výška viewportu? Co mobil v landscape módu? Jak bude naopak vypadat varianta s extrémně krátkým obsahem? Bude mít modal vždy titulek nebo jen někdy? Jak to bude vypadat na telefonu tvojí babičky s prehistorickým rozlišením? Bude to celé přístupné pro všechny uživatele? I pro ty co používají jen klávesnici?

Tohle všechno je dobré si vyjasnit už ve fázi návrhu, ne implementace.

Tip na konec: pokud vytváříte appku s mezinárodním dosahem, tak vždy myslete na to, že jednotlivé jazyky mají různě dlouhá slova. Němčina nebo francouzština dokážou překvapit a může být někdy problém je nacpat do zamýšlených pozic. Do změny směru layoutu pro arabské nebo asijské mutace radši dneska zabrušovat nebudem.

Ve Figmě si to nyní můžete třeba otestovat pomocí nových [Variables](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma).
