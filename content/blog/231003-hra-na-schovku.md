---
external: false
title: "Hra na schovku"
description: "Jak je důležité u zkracování obsahu trochu přemýšlet."
ogImagePath: "/images/231003-hra-na-schovku-1.webp"
bgColor: "teaser-green"
date: 2023-10-03
---

Loni na podzim jsem se chystal na výlet do Jeseníků. Chtěl jsem si koupit jízdenku na zastávku _Karlova Studánka, rozcestí Hvězda_. Protože jsem progresivní člověk a ne žádný boomer, tak jsem si jízdenku chtěl koupit přes web. Bohužel.

![Appka Arriva - původní verze](/images/231003-hra-na-schovku-1.webp)

Úplně jsem v hlavě viděl ten dialog při vývoji:\
Vývojář 1: _Hele ten text je moc dlouhej, se nám to tam nevleze, co s tím? Mám se zeptat designéra?_\
Vývojář 2: _Ser na to, normálně to zkrať. Dej tam `text-overflow: ellipsis; overflow: hidden;` a pošli to na code review._

Zkrácení delšího obsahu je naprosto v pořádku do té chvíle, dokud nejde o klíčovou informaci pro uživatele. Já bohužel mohl jen hádat, která z těch zastávek je ta moje správná. Prostě jsem vybíral od shora dolů. Vy to buď nezkracujte a dejte to na více řádků (pokud je to důležité) nebo tomu doplňte třeba tooltip (pokud to důležité není a není to čistě mobilní appka).

Překvapivě lépe to funguje na mobilní verzi webu a úplně bezchybně v appce. Takže asi budu opravdu boomer.

![Appka Arriva - opravená verze](/images/231003-hra-na-schovku-2.webp)

P.S. Šlo by samozřejmě zadat rovnou i "Hvězda", ale to by pak byla nuda.
