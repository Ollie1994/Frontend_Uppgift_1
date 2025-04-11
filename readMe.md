# G - delen

Projeket är en typ av prototyp av ett cv/portfolio som ska visa upp kunskaper kring Css, Html och JS. Cv´t består av en sida för att folk som kolla på det ska få tillgång till all info direkt. Jag valde en väldigt basic html/css layout då jag ville fokusera på att implementera ett fullständigt light/dark mode med JS.
Jag valde att använda grid och flex, först så målade jag upp hela min layout med grid template areas, sedan så använde jag flex på de individuella elemented för att flytta runt elementen initu grid elementen.

## Css

Min design är väldigt basic och fyrkantig då jag ville se till att light/dark mode var fokusen och jag ville få fram en väldigt tydlig kontrast mellan de två och därför valde jag bara 2 standard "färger" (vitt o svart) och sedan teal för (on hover).

## Html

Jag ville se till att all information jag tryckte in var så kortfattad och lättläst som möjligt och att det tydligt framgick vad de var läsaren kollade på.
Jag la till meta data för både description och author, samt fokuserade på att se till att allt i hmtl´n var så semantiskt som jag kunde få det.
Jag la också till kommentarer i Html´n för att göra det tydligt vart ett element börja och sluta.

## JavaScript

L/D modet fick jag insperation från Helena då hon visade upp ett exempel på hur man ändrade färg på ett element med javascript. Efter det så hade jag en väldigt "bra" ide hur jag ville uppnå ett ldM och satt hela helgen och till jag hade fixat det. ldM´t anväder sig av eventliseners "click" och querySelectorAll för att ändra mnellan L o D samt localStorage för att spara "inställningen" så att varje gång sidan laddar in så ligger L elelr D kvar beroende på vilken du valde sist.

# Vg - delen

I denna reflektions del så kommer jag att diskutera och reflektera över det val jag gjort under uppgiftens gång, det utmaningarna jag haft och hur jag överkom eller inte överkom de och de lärdommar jag kan ta med mig till nästa projekt, och tillslut kommer jag prata lite om framtidaförbättringar.

## Val

- De val jag kommar att analysera är följande:

  - Val av LDM och LS som fokus för vg delen
  - Val att använda både Grid och FlexBox
  - Val att inte använda Ai och fokusera på att googla istället

- Jag kommer att ställa frågorna:
  - Vad för val gjordes?
  - Varför gjordes det valet över ett annat?
  - Vad blev konsekvenserna över det valet?
  - Och till slut kommer jag att dela med mig av några personliga reflektioner kring beslutet.

### LDM och LS

- Vad för val gjordes?
  - Jag valde att implementera ett Light och Dark mode med LocalStorage
- Varför gjordes det valet över ett annat?
  - Jag hade sedan tidigare sätt en video från Helena där hon visade hur man använder en knapp för att ändra färgen på ett element. Så jag hade en ide om hur jag skulle fixa LDM och sedan google jag LS och såg att det itne såg så komplicerat ut att implementera. Så eftersom jag hade en tanke kring LDM och LS såg lätt ut så kändes det perfekt att försöka lösa för att uppnå vg.
- Vad blev konsekvenserna över det valet?
  - 8timmar x 3, fredag, lördag och söndag där jag kodade ihop en väldigt överkomplicerad lösning till en LDM. Det positiva blev att jag lärde mig en hel del JS, och kände mig mycket mer bekväm med vanilla JS efter den helgen.
- Och till slut kommer jag att dela med mig av några personliga reflektioner kring beslutet.
  - Då jag kom på efteråt att det fanns ett mycket enklare och smidigare sätt att implementera ett LDM så hade jag aldrig lärt mig så mycket som jag gjorde när jag misslyckades, lyckades, misslyckades, lyckades hela den helgen för att till slut lösa problemet, och eftersom jag är här för att lära mig så ser jag det som en positiv grej även om det är lite irriterande att komma på en 80 raders lösning när 4 rader hade räckt ......

### Grid och FlexBox

- Vad för val gjordes?
  - Jag valde att använda både Grid och FlexBox
- Varför gjordes det valet över ett annat?
  - Jag hade stora problem i början med att få ut en plan för hur min sida skulle se ut, så Helena tipsa om att fokusera på att använda Grid för att få ut layouten på sidan först och sedan trixa med Flexbox för att flytta runt saker inom grid elementen.
- Vad blev konsekvenserna över det valet?
  - Detta hjälpte enormt då det gav mig en start punk och något att fokusera på, vilket ledde till att jag fokuserade allt min energi på layouten, och JavaScripen innan jag la ned tid på design, tror detta ledde till ett mycket mer tids effektivt sätt att arbeta på.
- Och till slut kommer jag att dela med mig av några personliga reflektioner kring beslutet.
  - Jag har stora problem att jobba med Html och Css då det itne riktigt finns något rätt och fel och det känns aldrig som man kommer någonstans, så när Helena gav mig Grid och FlexBox så fick jag ett mycket mer strukturerat sätt att arbeta på och jag fick också en väg framåt.

### !Ai

- Vad för val gjordes?
  - Jag valde att inte använda Ai under denna uppgift
- Varför gjordes det valet över ett annat?
  - Då jag hade en hel del problem med att implementera LDM och var frestad att använda Ai, så valde jag att inte göra det för att detta är en skol uppgift och målet med uppgiften är att lära sig och visa upp den kunskapen. Ai och lärande hör inte ihop, och därför valde jag istället att använda Google och traggla mig igenom processen istället.
- Vad blev konsekvenserna över det valet?
  - Jag lärde mig en massa mer än ifall jag hade använt Ai, men det tog längre tid och jag överkomplicerade LDM featuren.
- Och till slut kommer jag att dela med mig av några personliga reflektioner kring beslutet.
  - Ai och lärande hör helt enkelt inte ihop. Då man kan använda Ai på ett bra sätt som utvecklare för att snabba på många tråkigt uppgifter så bör man undvika den så mycket som möjligt i när det kommer till uppgifter. Lärande process bör vara "trial and error" om och om igen tills man lyckas, på detta sätt så tvingas man förstå den kod man skriver då man faktiskt har dragit och tagit på koden för att få den att funka.

## Utmaningar

- De utmaningar jag kommer att diskutera är:
  - Framtagandet av LDM/LS
  - Html och Css layout

### LDM och LS

- Det var väldigt svårt att hatta mig fram till en fungerande LDM med LS, hade jag googlat "light dark mode" så hade det gått lite ..... bättre. Det svåra var att förstå alla nya saker som kom med JS, som QuerySelectorAll och hur DOM funkade. Med Google och Helena så lyckades jag ta fram en fungerande funktion även om den är väldigt överkomplicerad och "överkodad".

### Html och Css

- Jag hade väldigt svårt med Html och Css då för mig så känns det som att det inte finns en början, mitt eller slut på processen, man är ju liksom aldrig klar med sida. Det enda som rädda mig var nog att jag hade så många handlednignar med Helena där hon föreslog att jag skulle börja med Grid och måla upp en tydlgi layout innan jag gör något annat, detta hjälpte enormt mycket då det gav mig en tydlgi väg framåt. Jag försökte att lämna all design till slutet av uppgiften då jag kände att föröska blanda in design i mitten hade förvirrat mig och satt stopp för mig. Vet itne riktigt om jag överkom Html och Css men jag tror att i framtiden så har jag en strategi för att traggla mig igenom det.

## Lärdomar

- De lärdomar jag kommer att diskutera är:
  - AI vs Google
  - Det överkomplicerade sättet jag skapa mitt LDM på
  - Grid struktur först

### Ai vs Google

- Jag står fast vid att Google över Ai i 90% av allt när det kommer till lärande processen. Det enda jag tror Ai slår Google på är förmågan att generera saker såsom mockdata och lite annant smått och gott.

### Överkomplicerade LDM

- För att jag ska kunna jobba effektivt med detta i framtiden så behöver jag hålla mig väldigt struklturerad. I framtiden så hade jag kortat ned koden och skapat en css klass för alla element som använder samma "inställningar" och på så sätt slippa ha så mycket duplicerad "kod".

### Grid Struktur

- Fantastiskt, detta hjälpte mig enormt då jag fick en visuell bild på min layout och det blev mycket enklare att göra ändringar och justeringar när allt var uppdelat i ett grid.

## Framtida Förbättringar

- När jag fortsätter utveckla detta i framtiden så kommer jag vilja skriva om en del tex för att göra den mer streamlina och se till att den är mer relevant för utvecklar rollen. Jag hade vilja fixa till Css klasserna så att det inte finns 100 klasser för 100 element särskilt när 50 element anvädner exakt samma saker. Hade också viljat se över min JS kod för att få bort en massa stökig kod och fixa LDM så att den itne är så önödigt lång.
  Jag hade också vilja fixa en snygg bild på mig själ och lägga till. Jag skulle också vilja lägga till lite mer färger så att designar "POPPAR" lite mer, särskilt på projekt biten, då jag det är där jag verkligen visar uopp mian kusnkapr och har möjligheten att imponera rekryterare osv.

Oliwer Karlsson - Java24
