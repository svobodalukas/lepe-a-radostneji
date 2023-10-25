---
external: false
title: "Najdi 10 rozdílů"
description: "Chcete podat daňové přiznání? Tak si počkejte."
ogImagePath: "/images/231025-dane-1.webp"
bgColor: "teaser-blue"
date: 2023-10-25
---

Pojďme si dneska zahrát klasickou hru na hledání rozdílů. Mezi následujícími dvěma obrázky jich není deset, ale jen jeden:

![Najdi 10 rozdílů - 1](/images/231025-dane-1.webp)
![Najdi 10 rozdílů - 2](/images/231025-dane-2.webp)

Abych trochu odsadil řešení a nepropálil tak pointu hned, tak trochu kontextu pro ty, co s finančním úřadem nemusí komunikovat. Na screenshotech výše je finální obrazovka, odkud odesíláte vaše daňové přiznání, měsíční přiznání k DPH a další písemnosti. Tedy ten klíčový krok, podobně jako třeba odeslání objednávky v eshopu nebo dokončení rezervace.

Pointou je ve výchozím stavu neaktivní tlačítko pro odeslání v pravém horním rohu. Teprve po pěti vteřinách se stane aktivním, což je mimochodem řešeno v kódu poměrně zábavně. Reálně se uživateli přepne neprůhlednost (opacity) z 65% na 100%.

![Podej písemnost](/images/231025-dane.gif)

Pokud pominu logiku tohoto opatření, tak má toto "řešení" několik zásadních problémů.

První z nich je spolehání jen na vizuální změnu mezi disabled/active stavy. Uživatelé s poruchou zraku (což je poměrně velká část populace, nejen "slepí" jak se někdy traduje) potřebují nějaké další vodítko.

Co zkusit disabled stavu odebrat ten červený border?

Co takhle použít úplně jinou barvu (tradiční šedou) namísto opacity? A nešlo by třeba změnit kurzor myši na not-allowed?

A co takhle do titulku **neaktivního** tlačítka (když už mám dvě) dát něco jiného než _"Po stisku dojde (pokud písemnost neobsahuje kritické chyby) k závaznému podání písemnosti - bude odeslána na společné technické zařízení správců daně, odkud bude poté doručena na uvedený úřad k vyřízení."_?

Otázky, samé otázky.

Otázky bude mít uživatel a bude přemýšlet, proč to vlastně nejde odeslat (vlastní zkušenost). Určitě by mu pomohlo, pokud by viděl nějaký loader či timer, který naznačí, že něco na pozadí probíhá a je potřeba ještě chvilku počkat. Třeba takto.

![Podej písemnost - lépe a radostněji](/images/231025-dane-2.gif)

Pokud bychom chtěli být na uživatele, kteří nám chtějí poslat daně, úplně milí, tak jim zkusíme pravidlo čekání na pět vteřin ještě nějak logicky vysvětlit. Pokud jde o ochranu před nechtěným odesláním, pak by například pomohla výzva ke kontrole všech údajů a podobně.

Přístupnost zmíněná výše se samozřejmě netýká jen UI, ale i kódu. Tady by pro změnu pomohlo nedělat složité kejkle v javascriptu a použít nativní HTML elementy. Třeba button s disabled atributem, namísto hide/show dvou submit inputů.

Jak to uzavřít? Finální krok nějakého procesu je kritický nejen z business hlediska. Tedy, aby k dokončení akce opravdu došlo. Také je to ale okamžik, který si budou vaši uživatelé pamatovat a hodnotit vás podle něj ([Peak-End Rule](https://lawsofux.com/peak-end-rule/)).
