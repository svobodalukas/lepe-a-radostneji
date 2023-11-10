---
external: false
title: "Únikovka s přihlášením"
description: "Asi máte špatné heslo, ale my vám to neřekneme."
ogImagePath: "/images/231108-unikovka.webp"
bgColor: "teaser-yellow"
date: 2023-11-08
---

Dnes tu máme opět ukázku pro milovníky únikových her. Jde o přihlášení do uživatelského účtu jednoho z největších provozovatelů parkovacích domů v Evropě. Ukázka je po zadání emailu a hesla, které bohužel nebyly správné.

![Zkus se přihlásit](/images/231108-unikovka.webp)

Zkuste na obrazovce najít nějakou informaci, že jste netrefili heslo nebo přihlašovací jméno. Pro čtenáře na mobilu tu mám radši detailnější verzi:

![Zkus se přihlásit](/images/231108-unikovka-2.webp)

Tak co, máte? Ne, ten tučný červený text na tři řádky, to není. Nic si z toho nedělejte, já to hledal taky dlouho. Je to ten malý šedý boxík úplně nahoře nad formulářem.

Celkově je to jak z příručky “**Takhle nikdy nedělat validaci formuláře!**”. Tak si to prosvištíme hezky jako ve škole:

- Chybové hlášky prosím vždy **nejblíže** výskytu chyby, v tomto případě ideálně hned pod input s heslem. Dávat ji úplně nahoru mimo kontext formuláře je opravdu mimo mé chápání.

- Červený text a ještě k tomu tučný si nechte opravdu jen na chyby. Pokud jde o něco mimořádného, tak to odlište vzhledem (rámeček, jiné pozadí, info ikonka a podobně).

- Po odeslání formuláře dochází k novému načtení stránky a jste znovu nahoře na stránce. Uživatel tedy možná líp zahlédne chytře umístěnou chybovou hlášku, ale pro změnu ztrácí kontext a znovu musí hledat, kde vlastně byl a co dělal.

- Označení povinných polí v přihlašovacím formuláři mi přijde zbytečnost.

- Stránce by prospělo odlišení barvy textu a aktivních prvků (všechno je stejnou modrou). Některé odkazy jsou podtržené, jiné naopak bez podtržení.

- V té správné chybové hlášce je nějak nezvládnuté dělení slov, ale to beru jako drobný technický bug.
