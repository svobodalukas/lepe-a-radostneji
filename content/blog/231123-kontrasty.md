---
external: false
title: "Kontrasty se přitahují. Někdy."
description: "Jak správně naladit kontrast, aby z toho čtenáři něco měli."
ogImagePath: "/images/231129-kontrasty.webp"
bgColor: "teaser-blue"
date: 2023-11-23
---

Že rád jezdím na kole jsem na sebe propálil už při [ukázce firewallu na Holokolo](/post/231011-neprojdes/). Nyní tu mám cyklistický magazín [MTBS.cz](https://www.mtbs.cz/), kam se občas rád mrknu na recenze nových kol nebo zpravodajství z cyklistických závodů. Mám to štěstí, že můj zrak je víceméně v pořádku, přesto je dobrá výzva rozklíčovat všechny titulky. Zkuste si to sami:

![Kontrast originál](/images/231129-kontrasty.webp)

Jak se vám to četlo?

## Kdo za to může?

Hlavním viníkem je tu mizerný kontrast. Minimální [kontrastní poměr 4.5/1](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) znají všichni už od základní školy kódování či designu. Ten nám tady bohužel nepomůže, protože se proti proměnlivému pozadí nedá korektně vyhodnotit:

![Kontrast check](/images/231129-kontrasty-4.webp)

Rozumím tomu, že máte na webu hezké fotky, tak je chcete použít. Na druhou stranu tam ještě potřebujete nacpat titulky, tak co s tím designér udělá? Prskne tam poloprůhledné pozadí a titulky nasází přes něj.

U designéra na počítači to všechno vypadá perfektně, klient to schválí, kodér nakóduje, programátor nasadí a tak dál. Na konci je pak editor, který začne psát články a vkládat k nim fotky. Bohužel jiné, než měl designér ve své ukázce. A výsledek jste viděli.

## Co s tím?

Nejbezpečnější varianta je vždy vrazit text pod obrázek. Devadesátkové kompresní weby už stejně nejsou v módě a spacing vašemu webu pomůže k lepší čitelnosti a přehlednosti.

![Kontrast úprava](/images/231129-kontrasty-5.webp)

Když už na titulcích v obrázku trváte, tak by v tomto konkrétním případě pomohlo spíše ztmavení pozadí s bílým textem:

![Kontrast úprava](/images/231129-kontrasty-2.webp)

## Poučení pro příště

Vždy si na jakémkoliv designu obsahujícím fotky vyzkoušejte více druhů fotek. Světlé, tmavé, plné detailů či téměř prázdné. Nikdy nebudete mít kontrolu co se tam kdy může objevit, tak je lepší být připraven než překvapen.

![Kontrast test](/images/231129-kontrasty-3.webp)
