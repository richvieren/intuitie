const WEEKS = [
  {
    number: 1,
    name: "Voorbereiding",
    subtitle: "De Basis Leggen",
    theme: "Elke grote reis begint met voorbereiding. Deze week leg je de essentiële praktijken vast die je door het hele programma zullen dragen: dagelijkse meditatie en je helderziend dagboek.",
    teachings: [
      {
        title: "Wat Is Helderziendheid?",
        body: `<p>Het helderziende pad is het pad van leren hoe je je hoogste mate van creativiteit en liefde in dit leven kunt uitdrukken. Het is het pad van het leven dat ontvankelijk is voor spirituele begeleiding en bewust is van alle energievlakken die we met elkaar delen.</p>
        <p>Psychische ontwikkeling betekent je bewustzijn trainen om te groeien en meer informatie te ontvangen — van anderen, van hogere vlakken, en van het goddelijke. Het is de kunst om je fysieke lichaam te ontwikkelen tot een verfijnde ontvanger van trillingen.</p>
        <p>Als je het helderziende pad bewandelt, kijk je anders naar het leven. Je weet dat je geholpen zult worden bij elke ervaring die je tegenkomt, hoe moeilijk ook. Het is het pad van vertrouwen en geloof.</p>`
      },
      {
        title: "De Basisprincipes",
        body: `<ul class="principle-list">
          <li>Psychische gaven zijn gaven van de ziel.</li>
          <li>We zijn allemaal zielen; daarom hebben we allemaal psychische gaven.</li>
          <li>De ontwikkeling van onze psychische gaven is ons geboorterecht.</li>
          <li>Psychische gaven zijn boodschappen van een goddelijke bron, die ons leiden naar onze hoogste creatieve uitdrukking.</li>
          <li>Het ontwikkelen van psychische gaven is niet zelfzuchtig — ze zijn gunstig voor ons allemaal.</li>
          <li>Psychische gaven brengen licht en genezing aan iedereen om ons heen.</li>
          <li>Het helderziende pad is geboren uit liefde en resulteert in begrip.</li>
          <li>Het helderziende pad is zacht, krachtig en altijd niet-dwingend.</li>
          <li>Het vleit het ego niet — het ondersteunt de ware essentie van de ziel.</li>
          <li>Het beoefenen van psychische gaven is plezierig.</li>
        </ul>`
      },
      {
        title: "Hoe Te Mediteren",
        body: `<p>Meditatie is de hoeksteen van psychische ontwikkeling. Kies een vaste tijd elke dag — 's ochtends of 's avonds. Vind een rustige plek waar je minstens 20 minuten niet gestoord wordt.</p>
        <p>Zit comfortabel, sluit je ogen en focus op je ademhaling. Als er gedachten opkomen, observeer ze zonder oordeel en keer terug naar je adem. Barokmuziek (Bach, Handel, Vivaldi) is bijzonder rustgevend voor de geest als je de voorkeur geeft aan geluid.</p>
        <p>Het doel is niet om specifieke begeleiding te ontvangen — het is om op te laden, te onthouden dat je een spiritueel wezen bent, en je emoties en geest tot rust te brengen. Na een week dagelijks mediteren merk je dat je bewustzijn sterk scherper wordt.</p>`
      }
    ],
    exercises: [
      {
        type: "Dagelijkse Praktijk",
        title: "Ochtendmeditatie",
        body: "Wijd je elke ochtend deze week 20 minuten aan stille meditatie. Gebruik de timer hieronder. Merk daarna op welke gedachten, gevoelens of indrukken er opkwamen.",
        hasTimer: true,
        journalPrompt: "Wat kwam er op tijdens je meditatie? Beelden, gevoelens of indrukken — hoe subtiel ook?"
      },
      {
        type: "Zelfreflectie",
        title: "Jouw Psychische Geschiedenis",
        body: "Verken je relatie met intuïtie. Beantwoord deze vragen zo eerlijk mogelijk — denk niet te lang na.",
        questions: [
          "Wat betekent helderziend zijn voor jou?",
          "Was je moeder intuïtief of helderziend? Je vader?",
          "Kon je thuis openlijk praten over intuïtieve gevoelens?",
          "Schrijf je angsten en negatieve overtuigingen over helderzienden op:",
          "Wat houdt je tegen om je intuïtie te vertrouwen?",
          "Op welke gebieden in je leven zou je psychische vermogens het meest willen toepassen?"
        ]
      },
      {
        type: "Bewustzijnsoefening",
        title: "Helderziendheid Zelfbeoordeling",
        body: "Beoordeel jezelf op deze schaal om te zien hoe psychisch bewust je al bent:",
        hasRating: true,
        ratings: [
          "Ik ben me bewust van hoe anderen zich voelen als ik bij ze ben",
          "Als ik iemand nieuw ontmoet, krijg ik snel accurate indrukken",
          "Ik kan zien wanneer iemand liegt",
          "Ik voel wanneer iemand me manipuleert",
          "Ik neem gemakkelijk beslissingen door naar mijn gevoel te luisteren",
          "Ik heb ervaringen gehad die ik logisch niet kon verklaren",
          "Ik weet soms wie er belt voordat ik opneem",
          "Ik heb accurate voorgevoedens of déjà vu gehad"
        ]
      }
    ],
    progress: [
      "Vandaag minstens 15 minuten gemediteerd",
      "Een aantekening gemaakt in mijn helderziend dagboek",
      "De zelfbeoordeling ingevuld",
      "De vragen over mijn psychische geschiedenis beantwoord",
      "Minstens één intuïtieve impuls opgemerkt vandaag"
    ],
    affirmation: "Ik ben een ziel. Ik sta open voor de begeleiding van mijn Hogere Zelf."
  },
  {
    number: 2,
    name: "Het Pad Vrijmaken",
    subtitle: "Loslaten Wat Je Blokkeert",
    theme: "Als psychische ontwikkeling natuurlijk is, waarom zijn er dan niet meer mensen helderziend? Simpelweg: we zijn geblokkeerd. Deze week identificeren en beginnen we de barrières van ons verleden op te lossen.",
    teachings: [
      {
        title: "Het Religieuze Conditioneringsblok",
        body: `<p>Het meest onbewust doordringende blok uit het verleden is religieuze conditionering. Velen van ons zijn opgevoed met het geloof dat psychische vermogens gevaarlijk, fout of zelfs kwaadaardig zijn. Op zijn meest giftige punt leren we dat het het werk van duisternis is.</p>
        <p>In zijn subtielere vorm leren we dat de autonomie die psychische vermogens verlenen op de een of andere manier immoreel is. Dit creëert diepe schaamte en geheimhouding rond onze meest natuurlijke gaven. Conclusies getrokken als kind dienen je niet noodzakelijk als volwassene, zeker niet als ze gebaseerd zijn op schaamte, schuld of beheersing.</p>
        <p>Intuïtie is de liefdevolle stem van God die in je hart werkt. Een persoon evolueert en rijpt spiritueel om zelfregulerende te worden in plaats van gereguleerd door buitenstaanders.</p>`
      },
      {
        title: "Het Lelijke Eendje Blok",
        body: `<p>Veel psychisch gevoelige mensen voelen zich 'anders' omdat hun gevoelens vaak afwijken van de algemene consensus — en accuraat blijken te zijn. Dit is niet comfortabel voor je, en vaak ook niet voor anderen.</p>
        <p>Totdat je je psychische vermogens accepteert en erkent dat ze in je beste belang zijn, kun je je belast voelen door anders te zijn. Je bent niet zozeer anders als wel meer <em>wakker</em>.</p>
        <p>Helderziend zijn heeft verreikende en diep bevredigende beloningen, maar brengt ook speciale uitdagingen met zich mee. De wereld zit vol dominante en passieve mensen. Maar er is een andere groep — klein maar groeiend — die in balans is. Ze zoeken noch controle noch verzorging. Ze worden geleid door creativiteit, werken met liefde en manipuleren niemand. Helderziend zijn plaatst je in die groep.</p>`
      },
      {
        title: "Blokken in het Heden",
        body: `<p>Naast conditionering uit het verleden zijn er dagelijkse blokken: angst voor wat anderen zullen denken, iedereen proberen te pleasen, je persoonlijke kracht weggeven, en anderen je realiteit laten bepalen.</p>
        <p>Psychische ontwikkeling vereist een toewijding van jouw kant. Wanneer je begint je intuïtie te gebruiken, begin je je persoonlijke kracht te oefenen — en sommige mensen om je heen kunnen hiertegen in verzet komen. Twijfel hoort erbij. Het is de waakhond tegen arrogantie.</p>`
      }
    ],
    exercises: [
      {
        type: "Innerlijk Werk",
        title: "Jouw Blokken Identificeren",
        body: "Reflecteer diep op wat je ervan heeft weerhouden je intuïtieve gaven te vertrouwen. Wees eerlijk en meelevend met jezelf.",
        questions: [
          "Welke religieuze of culturele overtuigingen heb je over helderzienden of intuïtie opgedaan?",
          "Draag je deze overtuigingen nog, of zijn ze geëvolueerd?",
          "Hoe reageren mensen doorgaans als je een intuïtief gevoel deelt?",
          "Wie in je leven ondersteunt je spirituele ontwikkeling? Wie niet?",
          "Ben je ooit gestraft, belachelijk gemaakt of afgewezen voor het 'te gevoelig' zijn?",
          "Wat zou er in je leven veranderen als je je intuïtie volledig zou vertrouwen?"
        ]
      },
      {
        type: "Meditatie",
        title: "De Lichtreiniging",
        body: "Gebruik deze geleide meditatie om oude blokken te beginnen oplossen. Zit rustig en gebruik de timer. Stel je voor dat bij elke inademing warm gouden licht de bovenkant van je hoofd binnenkomt — het oplost elke weerstand, angst of oude conditionering. Bij elke uitademing laat je los wat je spirituele groei niet meer dient.",
        hasTimer: true,
        journalPrompt: "Wat voelde je tijdens de reinigingsmeditatie? Welke beelden of emoties kwamen op? Wat voelde anders?"
      },
      {
        type: "Dagboek",
        title: "Brief aan Je Vroegere Zelf",
        body: "Schrijf een meelevende brief aan de versie van jou die voor het eerst leerde je psychische gaven te verbergen of te wantrouwen. Wat zou je die persoon willen laten weten?",
        journalPrompt: "Lieve jongere ik..."
      }
    ],
    progress: [
      "Mijn belangrijkste psychische blok geïdentificeerd",
      "De reinigingsmeditatie voltooid",
      "Geschreven in mijn helderziend dagboek",
      "Minstens 15 minuten gemediteerd",
      "Een moment opgemerkt waarop ik mijn intuïtie twijfelde"
    ],
    affirmation: "Ik laat alle angst over mijn psychische gaven los. Mijn intuïtie is veilig, liefdevol en betrouwbaar."
  },
  {
    number: 3,
    name: "Losse Eindjes",
    subtitle: "Het Heden Opruimen",
    theme: "Nu we het verleden hebben opgeruimd, kijken we naar waar we ons vandaag bevinden. Chaos en wanorde in onze buitenwereld is een van de meest concrete blokken voor psychische waarneming.",
    teachings: [
      {
        title: "Het Wanordeblok",
        body: `<p>Het meest concrete blok voor iemands intuïtie is een ongeorganiseerd leven. Intuïtie — of psychisch vermogen — is het vermogen om <em>subtiele</em> informatie waar te nemen. Wanneer je fysieke omgeving chaotisch is, is je geest ook chaotisch, en subtiele indrukken kunnen simpelweg niet worden waargenomen door het lawaai heen.</p>
        <p>Denk eraan als proberen een fluistering te horen in een kamer vol geroep. De psychische stem is stil. De stem van angst, verplichting, chaos en afleiding is luid.</p>
        <p>Deze week ruim je op — letterlijk en energetisch. Je zult verrast zijn hoeveel het opruimen van je fysieke ruimte je psychische ontvankelijkheid bevrijdt.</p>`
      },
      {
        title: "Energetische Rommel",
        body: `<p>Naast fysieke rommel is er energetische rommel: onafgemaakte gesprekken, gebroken beloften, onopgeloste conflicten, mensen die je hebt vermeden, taken die je hebt uitgesteld. Elk stuk neemt een klein deel van je bewustzijn in beslag om vast te houden.</p>
        <p>Elk onvoltooid ding kost een klein stukje van je aandacht om bij te houden — zoals te veel browsertabbladen open hebben. Het sluiten van deze lussen maakt enorme hoeveelheden energie vrij voor psychische ontvankelijkheid.</p>`
      }
    ],
    exercises: [
      {
        type: "Fysieke Praktijk",
        title: "Heilige Ruimte Opruimen",
        body: "Kies deze week één kamer of gebied van je huis om diep op te ruimen en te organiseren. Stel tijdens het opruimen de intentie in dat je een heilige ruimte voor je spirituele ontwikkeling creëert. Merk op wat er energetisch anders voelt als het klaar is.",
        questions: [
          "Welke fysieke ruimte in je leven voelt het meest chaotisch of rommelig?",
          "Welk gebied van je huis zou een toegewijde meditatieruimte kunnen worden?",
          "Hoe voelt de energie in de kamer anders na het opruimen?"
        ]
      },
      {
        type: "Innerlijk Werk",
        title: "Onafgemaakte Zaken Voltooien",
        body: "Maak een lijst van onafgemaakte zaken in je leven — gesprekken, beloften, taken, relaties. Kies vervolgens één item uit de lijst om deze week te voltooien.",
        journalPrompt: "Mijn lijst van onafgemaakte zaken:\n\nDegene die ik deze week zal voltooien:\n\nWat het voltooien voor mij betekent:"
      },
      {
        type: "Meditatie",
        title: "Stilte Oefening",
        body: "Deze meditatie richt zich op het cultiveren van de kwaliteit van stilte — de vruchtbare grond van waaruit psychische waarneming groeit. Zit gewoon en word zo stil mogelijk, van binnen en van buiten.",
        hasTimer: true,
        journalPrompt: "Wat kwam er op in de stilte? Welke gedachten bleven de aandacht trekken? Hoe voelde de stilte?"
      }
    ],
    progress: [
      "Een fysieke ruimte opgeruimd en georganiseerd",
      "Mijn lijst van onafgemaakte zaken gemaakt",
      "Minstens één onafgemaakte zaak voltooid",
      "Dagelijkse meditatie volgehouden",
      "Geschreven in helderziend dagboek"
    ],
    affirmation: "Ik creëer orde en vrede in mijn omgeving. Mijn heldere ruimte weerspiegelt mijn heldere geest."
  },
  {
    number: 4,
    name: "Licht Reizen",
    subtitle: "De Kunst van Loslaten",
    theme: "Blokken overwinnen vereist een beslissing. Deze week richten we ons op vergiffenis, acceptatie en het loslaten van de emotionele last die psychische waarneming vertroebelt.",
    teachings: [
      {
        title: "De Muziek Onder Ogen Zien",
        body: `<p>Een leven leven dat psychisch geleid en vrij van illusie is, vereist een toewijding om negatieve, saboterende en spiritueel onvolwassen gevoelens los te laten — gevoelens van willen dat iemand anders voor je zorgt, je valideert of je verantwoordelijkheden draagt.</p>
        <p>Om de muziek te maken, moeten we de muziek onder ogen zien: uiteindelijk moet je accepteren dat jouw welzijn, jouw voortgang in het leven, van <em>jou</em> zal komen. Je moet leren je ware natuur te zien en de innerlijke begeleiding van je Hogere Zelf te omarmen boven het woord en de mening van anderen.</p>`
      },
      {
        title: "Vergeven en Accepteren",
        body: `<p>Vergiffenis is niet het goedkeuren van wat er is gebeurd. Het is het loslaten van de energetische haak die je gebonden houdt aan het verleden. Elke persoon aan wie je wrok koestert, neemt een stuk van je psychische energie in beslag. Vergiffenis geeft die energie aan jou terug.</p>
        <p>Hoe meer je bereid bent de waarheid in jezelf te zien, hoe meer je het in de wereld om je heen zult zien. We zijn allemaal in wezen hetzelfde — op zoek naar liefde en proberen pijn te stoppen. Zie die waarheid, en de waarheid zal je vrij maken.</p>`
      },
      {
        title: "Door Illusie Heen Zien",
        body: `<p>Als je psychisch vermogen wilt ontwikkelen — het geschenk om door illusie heen te zien en de waarheid te zien — moet je ophouden alles vanuit een puur emotioneel standpunt te interpreteren. Niet alles in je leven overkomt je, of is zelfs op jou gericht. Soms ben je slechts een figurant in andermans drama.</p>
        <p>Zoals men zegt: "Het is niet mijn film." In sommige omstandigheden ben je een kleine speler, niet de hoofdrol. In sommige ben je gewoon het publiek.</p>`
      }
    ],
    exercises: [
      {
        type: "Vergeving Oefening",
        title: "De Vergevingslijst",
        body: "Schrijf een lijst van mensen (inclusief jezelf) jegens wie je wrok koestert. Oefen voor elk de intentie van loslaten. Je hoeft het hen niet te vertellen — dit is voor jou.",
        questions: [
          "Jegens wie koester je wrok?",
          "Waarop wacht je voordat je vergeeft?",
          "Hoe beïnvloedt het dragen van deze wrok je dagelijks leven en energie?",
          "Wat zou er voor jou mogelijk worden als je dit volledig losliet?"
        ]
      },
      {
        type: "Visualisatie",
        title: "Licht Reizen Meditatie",
        body: "Stel je in deze meditatie voor dat je een reiziger bent. Je draagt een zware rugzak. Met elke ademhaling verwijder je items uit de rugzak — wrok, zorgen, verwachtingen, oude identiteiten — en leg je ze zachtjes op de grond. Merk op hoe je je voelt als de rugzak lichter wordt.",
        hasTimer: true,
        journalPrompt: "Wat heb je neergelegd in de meditatie? Wat was het moeilijkst los te laten? Wat verraste je?"
      },
      {
        type: "Dagelijkse Praktijk",
        title: "De 'Niet Mijn Film' Oefening",
        body: "Wanneer je je deze week emotioneel reactief voelt op een situatie, pauzeer dan en vraag: 'Is dit mijn film, of ben ik hier slechts een figurant?' Noteer één geval per dag.",
        journalPrompt: "Het 'niet mijn film' moment van vandaag:\n\nWat ik opmerkte toen ik een stap terugzette:\n\nHoe dit mijn reactie veranderde:"
      }
    ],
    progress: [
      "Mijn vergevingslijst geschreven",
      "De Licht Reizen meditatie gedaan",
      "De 'Niet Mijn Film' oefening beoefend",
      "Dagelijkse meditatie",
      "Dagboekvermelding gemaakt"
    ],
    affirmation: "Ik reis licht. Ik laat alles los wat niet van mij is om te dragen. Ik ben vrij."
  },
  {
    number: 5,
    name: "Nieuw Terrein",
    subtitle: "De Energie van Anderen Voelen",
    theme: "Met de basis gelegd en het pad vrijgemaakt, beginnen we nu met het actieve psychische werk — leren bewust te worden van de energievelden van degenen om je heen.",
    teachings: [
      {
        title: "Bewust Worden van Andermans Energie",
        body: `<p>Elk persoon straalt een energieveld uit — een trilling die veel meer informatie communiceert dan woorden alleen. Je hebt dit al je hele leven gevoeld, vaak geïnterpreteerd als een 'gevoel' of 'vibe' over iemand. Deze week maken we dat proces bewust.</p>
        <p>Wanneer je een kamer binnenloopt, pik je onmiddellijk de collectieve energie op. Wanneer iemand tegen je liegt, voel je het voordat je geest het verwerkt. Wanneer een vriend in nood is, ook over een afstand, voel je het. Dit is geen verbeelding — dit is je natuurlijke psychische vermogen aan het werk.</p>`
      },
      {
        title: "Aarding",
        body: `<p>Voordat je met andermans energie werkt, moet je gegrond zijn in je eigen energie. Aarding betekent verbonden zijn met je fysieke lichaam en de aarde — een stabiele 'thuisbasis' hebben van waaruit je psychisch kunt uitreiken.</p>
        <p>Een ongegronde helderziende is als een boot zonder anker — gemakkelijk meegesleurd door de stromen van andermans emoties en gedachtevormen. Wanneer je gegrond bent, kun je andermans energie helder waarnemen zonder er door overweldigd te worden.</p>
        <p>Aardingstechnieken: blootsvoets op aarde lopen, kristallen vasthouden (rookkwarts en zwarte toermalijn zijn bijzonder aardend), wortelgroenten eten, lichaamsbeweging doen en de visualisatie oefenen van wortels die zich vanuit je voeten diep in de aarde uitstrekken.</p>`
      },
      {
        title: "Kristallen en Aardende Materialen",
        body: `<p>Bepaalde fysieke objecten kunnen psychische ontwikkeling ondersteunen door hun vibrationele eigenschappen. Kristallen die psychisch werk ondersteunen zijn: amethist (intuïtie), bergkristal (helderheid en versterking), lapis lazuli (psychisch gezicht) en maansteen (vrouwelijke intuïtie).</p>
        <p>Voor aarding: zwarte toermalijn, rookkwarts, obsidiaan en hematiet zijn bijzonder effectief.</p>
        <p>Je hebt geen kristallen nodig om psychisch te ontwikkelen — maar veel mensen vinden ze nuttige ankers en hulpmiddelen.</p>`
      }
    ],
    exercises: [
      {
        type: "Voelende Oefening",
        title: "Energie Leesoefening",
        body: "Oefen dit met een bereidwillige partner of zelfs een foto. Zit rustig, centreer jezelf en laat jezelf 'voelen in' de energie van de andere persoon. Analyseer niet — merk gewoon op. Welke kleur komt er in je op? Welke sensatie? Welk woord of beeld?",
        questions: [
          "Met een persoon in gedachten: welke kleur of sensatie voel je om hen?",
          "Welke emotie of kwaliteit lijkt van hen uit te stralen?",
          "Voelt de energie warm, koel, uitdijend, samengetrokken, glad of ruw aan?",
          "Wat bleek accuraat na het controleren van je indrukken?"
        ]
      },
      {
        type: "Lichamelijke Praktijk",
        title: "Aarding Meditatie",
        body: "Zit met je voeten plat op de vloer. Sluit je ogen en adem diep. Visualiseer wortels die zich uitstrekken van de zolen van je voeten diep in de aarde — door de vloer, door de fundamenten, diep in de warme, stabiele aarde. Voel jezelf verankerd, veilig, verbonden.",
        hasTimer: true,
        journalPrompt: "Hoe voelde aarding aan? Welke sensaties kwamen op in je lichaam? Voelde je een verschil voor en na?"
      },
      {
        type: "Helderziend Kijken",
        title: "Psychische Schets Oefening",
        body: "Kies een locatie die je nog nooit bezocht hebt. Sluit je ogen 5 minuten en laat indrukken komen — vormen, kleuren, texturen, sensaties. Schets dan hieronder wat je waarnam:",
        hasDrawing: true,
        journalPrompt: "Beschrijf je indrukken van de schets sessie:"
      }
    ],
    progress: [
      "Energie leesoefening beoefend met iemand",
      "De aarding meditatie gedaan",
      "De psychische schets oefening voltooid",
      "Dagelijkse meditatie",
      "Dagboekvermelding"
    ],
    affirmation: "Ik ben gegrond, gecentreerd en volledig aanwezig. Ik voel energie helder en met liefde."
  },
  {
    number: 6,
    name: "Het Weer Controleren",
    subtitle: "Leren Aura's Zien",
    theme: "Het aura is het elektromagnetische energieveld dat elk levend wezen omringt. Deze week leren we deze lichtende velden waar te nemen en te interpreteren die zoveel vertellen over iemands toestand van zijn.",
    teachings: [
      {
        title: "Wat Is Het Aura?",
        body: `<p>Het aura is het energetische lichaam dat het fysieke lichaam omringt en doordringt. Het wordt gegenereerd door de elektrische activiteit van het zenuwstelsel, het emotionele lichaam, het mentale lichaam en het spirituele lichaam die samenwerken.</p>
        <p>Veel mensen door de geschiedenis heen hebben aura's waargenomen — kunstenaars hebben ze afgebeeld als halo's rond heiligen en heilige figuren. Kirlian-fotografie heeft energievelden rond levende organismen vastgelegd.</p>
        <p>Het aura heeft meerdere lagen, die elk overeenkomen met een ander niveau van zijn: de fysiek-etherische laag (het dichtst bij het lichaam), de emotionele laag, de mentale laag en de spirituele lagen daarbuiten.</p>`
      },
      {
        title: "Aura Kleuren Lezen",
        body: `<p>Aura kleuren dragen specifieke betekenissen die je in de loop van de tijd intuïtief leert interpreteren. Enkele algemene associaties:</p>
        <ul class="principle-list">
          <li><strong>Rood:</strong> Vitaliteit, passie, fysieke energie, soms stress of woede</li>
          <li><strong>Oranje:</strong> Creativiteit, enthousiasme, sociale warmte, ambitie</li>
          <li><strong>Geel:</strong> Intellect, helderheid, optimisme, mentale activiteit</li>
          <li><strong>Groen:</strong> Genezing, groei, mededogen, balans</li>
          <li><strong>Blauw:</strong> Communicatie, kalmte, spirituele diepte, waarheid</li>
          <li><strong>Indigo/Violet:</strong> Psychisch vermogen, intuïtie, spirituele gaven</li>
          <li><strong>Wit/Goud:</strong> Hoge spirituele trilling, verlichting</li>
        </ul>`
      },
      {
        title: "Stormachtig Weer",
        body: `<p>Net zoals het weer zonnig, bewolkt of stormachtig kan zijn, zo ook het aura van een persoon. Je kunt leren 'het weer te controleren' voordat je met iemand in contact treedt — hun huidige energetische toestand aanvoelen om te weten hoe je hen het best kunt benaderen.</p>
        <p>Dit gaat niet over oordelen — het gaat over meelevend bewustzijn. Een aura dat donker, troebel of samengetrokken lijkt, geeft doorgaans aan dat iemand pijn heeft, onder stress staat of energetisch uitgeput is.</p>`
      }
    ],
    exercises: [
      {
        type: "Waarnemingsoefening",
        title: "Aura Zien Oefening",
        body: "Kijk naar de rug van je hand tegen een lichtgekleurde muur in zacht (niet fel) licht. Ontspan je blik — laat je ogen licht onscherp worden, alsof je naar een Magic Eye plaatje kijkt. Adem. Wacht. Veel mensen beginnen een subtiele lichtgeving of kleuring rond de hand waar te nemen. Wees geduldig — dit is een nieuwe vaardigheid.",
        questions: [
          "Wat nam je waar rond je hand (als dat zo is)?",
          "Welke kleuren, als die er waren, leken het meest prominent?",
          "Probeer dit met een andere persoon: wat neem je waar rond hun hoofd en schouders?",
          "Hoe voelde de 'zachte blik' anders dan normaal gefocust kijken?"
        ]
      },
      {
        type: "Kleur Lezen",
        title: "Aura Kleur Intuïtie",
        body: "Denk aan drie mensen in je leven. Zonder te analyseren — welke kleur associeer je onmiddellijk met elk van hen? Vertrouw je eerste indruk. Reflecteer dan op wat die kleur kan betekenen over hun energie.",
        journalPrompt: "Persoon 1: _______ — Kleur: _______ — Wat dit suggereert:\n\nPersoon 2: _______ — Kleur: _______ — Wat dit suggereert:\n\nPersoon 3: _______ — Kleur: _______ — Wat dit suggereert:"
      },
      {
        type: "Meditatie",
        title: "Je Eigen Aura Voelen",
        body: "Wrijf je handen krachtig 30 seconden over elkaar, trek ze dan langzaam uit elkaar. Veel mensen voelen een subtiele weerstand, warmte of tintelingen tussen de handpalmen — dit is je eigen bio-elektrische veld. Gebruik de timer voor een meditatie gericht op je eigen energetische aanwezigheid.",
        hasTimer: true,
        journalPrompt: "Wat voelde je tussen je handen? Tijdens de meditatie, wat nam je waar over je eigen energieveld?"
      }
    ],
    progress: [
      "Aura zien oefening beoefend",
      "De aura kleur intuïtie oefening gedaan",
      "Mijn eigen energieveld gevoeld",
      "Dagelijkse meditatie",
      "Dagboekvermelding"
    ],
    affirmation: "Ik zie helder. De lichtende energie van het leven is zichtbaar voor mijn gewekte waarneming."
  },
  {
    number: 7,
    name: "Wielen Uitlijnen",
    subtitle: "Werken met Je Chakra's",
    theme: "De chakra's zijn de energiecentra van het lichaam — draaiende wielen van licht die levensenergie ontvangen, verwerken en doorgeven. Wanneer ze in balans en helder zijn, stroomt psychische waarneming natuurlijk.",
    teachings: [
      {
        title: "De Zeven Chakra's",
        body: `<p>Het woord chakra betekent 'wiel' in het Sanskriet. De grote chakra's zijn draaiende energiewervelingen langs de wervelkolom, van de basis tot de kruin. Elk beheert specifieke fysieke, emotionele en spirituele functies.</p>
        <p>Wanneer je chakra's in balans zijn, stroomt energie vrij door je systeem en is psychische waarneming natuurlijk en helder. Wanneer ze geblokkeerd, overmatig of tekortschietend zijn, worden de overeenkomstige levensgebieden en psychische functies beïnvloed.</p>
        <p>Deze week leer je je eigen chakrasysteem te voelen, te beoordelen en te beginnen balanceren.</p>`
      }
    ],
    exercises: [
      {
        type: "Leren",
        title: "De Zeven Chakra's",
        body: "Verken elk chakra hieronder. Tik of klik om meer te leren:",
        hasChakras: true
      },
      {
        type: "Lichaamsscan",
        title: "Chakra Voelende Meditatie",
        body: "Ga liggen of zit comfortabel. Begin bij de basis van je wervelkolom en beweeg je bewustzijn langzaam omhoog door elk energiecentrum. Breng een paar ademhalingen door bij elk chakra. Merk op: voelt dit gebied open of samengetrokken? Warm of koel? Actief of stil?",
        hasTimer: true,
        journalPrompt: "Door elk chakra beweegend van basis tot kruin — wat merkte je?\n\nWortel:\nSacraal:\nZonneplexus:\nHart:\nKeel:\nDerde Oog:\nKruin:"
      },
      {
        type: "Intuïtieve Beoordeling",
        title: "Chakra Zelfbeoordeling",
        body: "Beoordeel hoe open of geblokkeerd elk van je chakra's nu voelt, op een schaal van 1 (zeer geblokkeerd) tot 10 (wijd open):",
        hasSensitivity: true,
        sensitivityItems: ["Wortelchakra (Veiligheid, aarding)", "Sacraal Chakra (Creativiteit, gevoel)", "Zonneplexus (Persoonlijke kracht)", "Hartchakra (Liefde, mededogen)", "Keelchakra (Expressie, waarheid)", "Derde Oog (Intuïtie, visie)", "Kruinchakra (Spirituele verbinding)"]
      }
    ],
    progress: [
      "Alle zeven chakra's verkend",
      "Chakra voelende meditatie voltooid",
      "Chakra zelfbeoordeling gedaan",
      "Dagelijkse meditatie",
      "Dagboekvermelding"
    ],
    affirmation: "Mijn energiecentra zijn helder, in balans en stralend. Levensenergie stroomt vrij door mij."
  },
  {
    number: 8,
    name: "Jouw Psychische Zintuigen",
    subtitle: "Helderziendheid, Helderhorendheid & Meer",
    theme: "Er zijn duidelijke kanalen waardoor psychische informatie aankomt. Deze week ontdek je welke van jouw psychische zintuigen van nature het sterkst zijn — en begin je ze allemaal te ontwikkelen.",
    teachings: [
      {
        title: "De Psychische Zintuigen",
        body: `<p>Net zoals we vijf fysieke zintuigen hebben, hebben we overeenkomstige psychische zintuigen. De meeste mensen hebben er een of twee die van nature dominant zijn:</p>
        <ul class="principle-list">
          <li><strong>Helderziendheid (Clairvoyance):</strong> Psychische informatie ontvangen als visuele indrukken, beelden of visioenen</li>
          <li><strong>Helderhorendheid (Clairaudience):</strong> Psychische informatie ontvangen als geluiden, woorden of innerlijke stem</li>
          <li><strong>Heldervoelendheid (Clairsentience):</strong> Psychische informatie ontvangen als fysieke of emotionele sensaties in het lichaam</li>
          <li><strong>Helderwetendheid (Claircognizance):</strong> Plotseling iets weten zonder te weten hoe je het weet</li>
          <li><strong>Helderruikendheid (Clairalience):</strong> Psychische informatie ontvangen als geuren zonder fysieke bron</li>
        </ul>`
      },
      {
        title: "Telepathie",
        body: `<p>Telepathie is de directe overdracht van gedachten of gevoelens tussen geesten, zonder gebruik van fysieke zintuigen of taal. Het is misschien de meest voorkomende psychische ervaring — de telefoon gaat juist als je aan iemand dacht, iemands zin afmaken, of de nood van een geliefde op afstand voelen.</p>
        <p>Telepathie werkt het beste tussen mensen met sterke emotionele banden, en in staten van ontspannen, open bewustzijn — niet in staten van analytische concentratie. Liefde is de grootste versterker van telepathische verbinding.</p>`
      },
      {
        title: "Precognitie",
        body: `<p>Precognitie is de psychische waarneming van toekomstige gebeurtenissen. Het kan aankomen als dromen, plotselinge visioenen, een sterk 'gevoel' over wat er zal gebeuren, of een fysiek gevoel in het lichaam.</p>
        <p>Precognitieve informatie is het nuttigst wanneer het je keuzes en voorbereidingen informeert — niet wanneer het angst creëert. De toekomst is een veld van waarschijnlijkheid, geen starre bestemming.</p>`
      }
    ],
    exercises: [
      {
        type: "Zelfontdekking",
        title: "Ontdek Jouw Dominant Psychisch Zintuig",
        body: "Beantwoord deze vragen om te ontdekken hoe psychische informatie het meest natuurlijk bij jou binnenkomt:",
        questions: [
          "Als je aan een goede vriend denkt, zie je dan hun gezicht (helderziendheid), hoor je hun stem (helderhorendheid), of voel je hun aanwezigheid in je lichaam (heldervoelendheid)?",
          "Herinner je je dromen levendig met sterke visuele details?",
          "Weet je dingen vaak 'gewoon' zonder te kunnen uitleggen hoe?",
          "Pik je de emoties van anderen sterk op in je eigen lichaam?",
          "Heb je een innerlijke stem gehoord die je nauwkeurige begeleiding gaf?",
          "Heb je ooit een geur waargenomen die een boodschap of aanwezigheid leek te dragen?"
        ]
      },
      {
        type: "Oefening",
        title: "Telepathie Experiment",
        body: "Met een bereidwillige partner: sluit je ogen, adem, en probeer een eenvoudig beeld, kleur of gevoel naar hen te 'sturen'. Ontvang dan van hen. Noteer wat je stuurde en ontving, vergelijk dan notities.",
        journalPrompt: "Wat ik probeerde te sturen:\n\nWat ik ontving:\n\nWat mijn partner stuurde (ter vergelijking):\n\nNauwkeurigheidsnotities:"
      },
      {
        type: "Droomwerk",
        title: "Droomdagboek",
        body: "Houd je dagboek deze week naast je bed. Op het moment dat je wakker wordt, voordat je opstaat of je telefoon checkt, schrijf alles op wat je van je dromen herinnert. Dromen zijn een primair kanaal voor psychische informatie.",
        journalPrompt: "De droom van afgelopen nacht:\n\nEmotionele toon van de droom:\n\nBeelden of symbolen die opvallen:\n\nKan dit precognitief of symbolisch zijn?"
      }
    ],
    progress: [
      "Mijn dominant psychisch zintuig geïdentificeerd",
      "Een telepathie oefening geprobeerd",
      "Mijn droomdagboek bijgehouden",
      "Dagelijkse meditatie",
      "Dagboekvermelding"
    ],
    affirmation: "Mijn psychische zintuigen zijn open en helder. Ik ontvang goddelijke begeleiding via elk kanaal van mijn wezen."
  },
  {
    number: 9,
    name: "Reisgezelschap",
    subtitle: "Je Geestgidsen Ontmoeten",
    theme: "Je bent niet alleen op deze reis. Deze week openen we ons voor de realiteit van geestgidsen — de wezens van licht die de evolutie van je ziel door je hele leven hebben bijgestaan.",
    teachings: [
      {
        title: "Wat Zijn Geestgidsen?",
        body: `<p>Geestgidsen zijn niet-fysieke wezens — zielen die voorbij het fysieke vlak zijn geëvolueerd — die ons door ons leven bijstaan, beschermen, onderwijzen en liefhebben. Het geloof in helpende geesten is universeel in menselijke culturen en door de gehele opgetekende geschiedenis.</p>
        <p>Je hebt een team van gidsen, elk met een andere functie. Sommige zijn al bij je vanaf je geboorte; anderen sluiten zich bij je aan voor specifieke fasen van je leven.</p>`
      },
      {
        title: "Soorten Gidsen",
        body: `<ul class="principle-list">
          <li><strong>Engelen:</strong> Wezens van zuiver licht en liefde, wier primaire doel bescherming en goddelijke communicatie is</li>
          <li><strong>Hardlopers:</strong> Gidsen die helpen met de praktische en logistieke aspecten van het dagelijkse leven</li>
          <li><strong>Helpers:</strong> Gidsen die emotionele ondersteuning, genezing en koesterende aanwezigheid bieden</li>
          <li><strong>Leraren:</strong> Gidsen die helpen met je spirituele en intellectuele ontwikkeling</li>
          <li><strong>Meesters:</strong> Gidsen op hoog niveau die toezicht houden op de algehele evolutie van je ziel</li>
          <li><strong>Vreugdegidsen:</strong> Misschien het leukst — speelse gidsen die je helpen op te lichten en niet te serieus te nemen</li>
        </ul>`
      },
      {
        title: "Contact Maken",
        body: `<p>Je gidsen communiceren voortdurend met je — via synchroniciteiten, plotselinge inzichten, de woorden van vreemden die rechtstreeks tot je spreken, boeken die van planken vallen, liedjes die op precies het juiste moment opgaan, dromen en de stille innerlijke stem die spreekt wanneer je stil bent.</p>
        <p>Om bewust contact te maken, moet je de verbinding simpelweg uitnodigen. Geef in meditatie duidelijk je intentie aan om contact te maken met je gidsen. Luister dan, voel, kijk. De verbinding komt zelden als een dramatisch visioen — vaker als een subtiele warmte, een gevoel van aanwezigheid of een diepe wetenschap.</p>`
      }
    ],
    exercises: [
      {
        type: "Contact Meditatie",
        title: "Je Gids Ontmoeten",
        body: "Dit is een geleide reis om je primaire geestgids te ontmoeten. Zit comfortabel en gebruik de timer. Stel je in je meditatie een prachtige natuurlijke omgeving voor — een wei, bos of strand. Je weet dat een wezen van pure liefde en wijsheid komt om je te ontmoeten. Laat wat er ook opkomt toe. Forceer niets — ontvang gewoon.",
        hasTimer: true,
        journalPrompt: "Beschrijf wat er opkwam in je gids meditatie:\n\nNam je een aanwezigheid waar? Wat was de kwaliteit of het gevoel ervan?\n\nOntving je beelden, woorden of sensaties?\n\nWelke naam of symbool lijkt bij deze gids te horen?"
      },
      {
        type: "Dagboek",
        title: "Automatisch Schrijven",
        body: "Na jezelf te centreren in meditatie, open je een blanco pagina. Schrijf bovenaan: 'Lieve gidsen, wat willen jullie dat ik vandaag weet?' Schrijf dan zonder te stoppen, te bewerken of te denken — laat wat er ook opkomt door je pen stromen. Minstens 5 minuten zonder je pen op te tillen.",
        journalPrompt: "Lieve gidsen, wat willen jullie dat ik vandaag weet?\n\n[Schrijf minstens 5 minuten zonder te stoppen]"
      },
      {
        type: "Bewustzijnsoefening",
        title: "Begeleiding Herkennen",
        body: "Merk deze week elke synchroniciteit, onverwacht inzicht, 'toeval' en moment van helder weten op. Dit zijn je gidsen die communiceren. Noteer ze hier.",
        questions: [
          "Welke synchroniciteiten merkte je vandaag op?",
          "Zei een vreemde iets dat rechtstreeks tot je leek te spreken?",
          "Ontving je onverwachte inzichten tijdens meditatie of stille momenten?",
          "Voelde je een sterk gevoel van bescherming of begeleiding in een moeilijk moment?"
        ]
      }
    ],
    progress: [
      "De gids ontmoeting meditatie voltooid",
      "Automatisch schrijven geprobeerd",
      "Minstens één synchroniciteit genoteerd",
      "Dagelijkse meditatie",
      "Dagboekvermelding"
    ],
    affirmation: "Ik word omringd door liefdevolle gidsen en engelen. Ik ben nooit alleen op deze reis."
  },
  {
    number: 10,
    name: "Om de Weg Vragen",
    subtitle: "Psychische Lezingen Ontwikkelen",
    theme: "Nu je innerlijke vermogens hebt ontwikkeld, leer je ze in dienst te gebruiken — oefenen met lezingen voor jezelf en anderen met nauwkeurigheid, mededogen en integriteit.",
    teachings: [
      {
        title: "Het Ja-Maar Syndroom",
        body: `<p>Een van de grootste obstakels voor het gebruik van je psychische gaven is de innerlijke criticus — de 'Ja-Maar' stem. 'Ja, ik kreeg die indruk, maar...' 'Ja, ik voelde dat, maar het is waarschijnlijk gewoon mijn verbeelding.' 'Ja, ik wist dat dit zou gebeuren, maar...'</p>
        <p>De Ja-Maar stem is de stem van angst verkleed als praktischheid. Het heeft je op sommige manieren veilig gehouden, maar het heeft je ook klein gehouden. Het helderziende pad vereist dat je je indrukken genoeg begint te vertrouwen om erop te handelen — zachtjes, met onderscheidingsvermogen, maar moedig.</p>`
      },
      {
        title: "Een Lezing Doen",
        body: `<p>Een psychische lezing is simpelweg de kunst om in te stemmen op iemands energie en te delen wat je waarneemt. Er is geen mystieke formule. Je centreert jezelf, stelt de intentie in om te dienen, opent je bewustzijn en rapporteert eerlijk wat je ontvangt.</p>
        <p>De sleutelkwaliteiten van een goede lezing zijn: neutraliteit, mededogen, eerlijkheid en nederigheid. Onthoud altijd: jij bent niet het orakel — jij bent het instrument. De informatie komt door je heen, niet van jou.</p>`
      },
      {
        title: "Inspirerend & Automatisch Schrijven",
        body: `<p>Inspirerend schrijven is de praktijk van zitten in meditatie, verbinding maken met je hogere begeleiding, en dan vrij schrijven. Het verschilt van dagboekschrijven doordat de intentie is te ontvangen — wijsheid toe te laten die voorbij je gewone denkende geest is om door te komen.</p>`
      }
    ],
    exercises: [
      {
        type: "Oefen Lezing",
        title: "Lezing voor Jezelf",
        body: "Zit rustig. Aard jezelf. Focus op een gebied van je leven waar je helderheid of begeleiding zoekt. Vraag niet 'wat moet ik doen' — vraag 'wat moet ik zien of weten over deze situatie?' Schrijf welke indrukken er ook komen, zonder te censureren.",
        questions: [
          "Op welk gebied van mijn leven focus ik voor deze lezing?",
          "Wat voel ik onmiddellijk of neem ik waar over deze situatie?",
          "Wat is de kwaliteit of energie van deze situatie?",
          "Wat voelt het meest belangrijk om op te letten?",
          "Wat is het meest liefdevolle en eerlijkste wat ik over dit kan weten?"
        ]
      },
      {
        type: "Gevorderde Oefening",
        title: "Inspirerend Schrijven",
        body: "Centreer jezelf met 5 minuten meditatie. Schrijf dan bovenaan de pagina: 'Wat is de hoogste waarheid over [een situatie of vraag]?' Schrijf 10 minuten zonder te stoppen. Lees terug wat je schreef en markeer regels die bijzonder resoneren of verrassend zijn.",
        hasTimer: true,
        journalPrompt: "Mijn vraag of focus:\n\n[Schrijf 10 minuten vrij zonder te stoppen of te bewerken]"
      },
      {
        type: "Oefen Lezing",
        title: "Lezing voor een Ander",
        body: "Als je een bereidwillige vriend of partner hebt, bied dan aan een eenvoudige psychische lezing voor hen te doen. Voordat ze je iets vertellen, deel je eerste indrukken: wat je voelt over hun energie, beelden of gevoelens die opkomen, woorden of thema's die relevant lijken. Controleer dan je nauwkeurigheid.",
        journalPrompt: "Persoon gelezen voor (initialen):\n\nMijn eerste indrukken voordat ze iets deelden:\n\nWat ze bevestigden als nauwkeurig:\n\nWat me verraste:\n\nWat ik verder wil ontwikkelen:"
      }
    ],
    progress: [
      "Een lezing voor mezelf gedaan",
      "Inspirerend schrijven oefening voltooid",
      "Een lezing voor iemand anders geprobeerd",
      "Dagelijkse meditatie",
      "Dagboekvermelding"
    ],
    affirmation: "Ik vertrouw wat ik ontvang. Ik ben een helder en liefdevol kanaal voor goddelijke begeleiding."
  },
  {
    number: 11,
    name: "Jouw Kompas Gebruiken",
    subtitle: "Hulpmiddelen voor Waarzeggerij",
    theme: "Door de geschiedenis heen hebben helderzienden fysieke hulpmiddelen gebruikt als focuspunten voor intuïtieve waarneming. Deze week verkennen we deze hulpmiddelen — pendels, kaarten, psychometrie en meer.",
    teachings: [
      {
        title: "Waarom Waarzeggerij Hulpmiddelen Gebruiken?",
        body: `<p>Waarzeggerij hulpmiddelen dienen als brug tussen het bewuste en onderbewuste geest — ze geven je rationele geest iets om op te focussen terwijl je intuïtieve geest het echte werk doet. Het hulpmiddel zelf heeft geen magische kracht; jij wel. Het hulpmiddel is een lens.</p>
        <p>Denk er zo over: je zou kunnen proberen een verre fluistering ongewapend te horen, of je hand bij je oor te houden. De hand maakt het geluid niet — het helpt je het te ontvangen. Waarzeggerij hulpmiddelen zijn de gehoornd hand van de helderziende.</p>`
      },
      {
        title: "De Pendel",
        body: `<p>Een pendel is een van de eenvoudigste en meest effectieve waarzeggerij hulpmiddelen — gewoon een gewicht aan een touw. Het werkt door de subtiele ideomotorische bewegingen van de hand te versterken, die onbewust worden geleid door je onderbewuste en psychische geest.</p>
        <p>Om een pendel te gebruiken: houd het touw lichtjes vast, laat het gewicht vrij hangen, en stel eerst je 'ja' en 'nee' reacties vast door duidelijke vragen met bekende antwoorden te stellen. Gebruik het dan voor begeleiding bij vragen die duidelijke ja/nee of richtingsantwoorden vereisen.</p>`
      },
      {
        title: "Psychometrie",
        body: `<p>Psychometrie is het vermogen om psychische indrukken van fysieke objecten te ontvangen. Elk object houdt de energetische afdruk van degenen die het hebben bezeten of aangeraakt. Door een object met heldere, ontvankelijke intentie vast te houden, kun je op deze opgeslagen energie afstemmen.</p>
        <p>Dit is een krachtige oefening voor het ontwikkelen van heldervoelendheid en helderwetendheid. Het is ook diep bevestigend — er is niets zo krachtig als het vasthouden van het object van een vreemde en nauwkeurig aspecten van hun leven waarnemen die je logischerwijs niet kon hebben geweten.</p>`
      }
    ],
    exercises: [
      {
        type: "Hulpmiddel Oefening",
        title: "Pendel Werk",
        body: "Maak een eenvoudige pendel: elk klein gewicht aan een draad werkt. Stel je ja/nee reacties vast. Besteed dan 15 minuten aan het stellen van echte vragen — noteer de reacties en controleer ze later in de week op nauwkeurigheid.",
        questions: [
          "In welke richting bewoog 'ja' voor jou? 'Nee'?",
          "Welke vragen stelde je?",
          "Welke reacties ontving je?",
          "Wat bleek nauwkeurig toen je later controleerde?"
        ]
      },
      {
        type: "Voelende Oefening",
        title: "Psychometrie Oefening",
        body: "Vraag een vriend je een klein persoonlijk object te geven — een ring, horloge of sleutel — dat je nog nooit hebt gezien. Houd het in beide handen, sluit je ogen, adem, en laat indrukken komen. Probeer niets 'uit te zoeken' — ontvang gewoon. Rapporteer alles, ook al lijkt het willekeurig.",
        journalPrompt: "Object vastgehouden:\n\nOntvangen indrukken (rapporteer alles — kleuren, emoties, beelden, woorden, sensaties):\n\nWat de eigenaar bevestigde:\n\nNauwkeurigheidspercentage en notities:"
      },
      {
        type: "Helderziend Kijken",
        title: "Locatie Helderziend Kijken",
        body: "Kies een locatie die je nog nooit hebt bezocht maar die iemand die je kent goed kent. Vraag hen de locatie in gedachten te houden terwijl jij indrukken ontvangt. Teken of beschrijf wat je voelt — indeling, kleuren, gevoel van de ruimte, opmerkelijke objecten of kenmerken.",
        hasDrawing: true,
        journalPrompt: "Locatie beschrijving indrukken:\n\nWat bevestigd werd als nauwkeurig:\n\nWat me verraste:"
      }
    ],
    progress: [
      "Pendel werk beoefend",
      "Psychometrie met een object gedaan",
      "Locatie helderziend kijken geprobeerd",
      "Dagelijkse meditatie",
      "Dagboekvermelding"
    ],
    affirmation: "Ik gebruik alle hulpmiddelen van waarneming — innerlijk en uiterlijk — met wijsheid, integriteit en liefde."
  },
  {
    number: 12,
    name: "Welkom Thuis",
    subtitle: "Je Gaven Integreren",
    theme: "Je hebt het volledige pad bewandeld. Nu begint de echte reis — niet als een speciale praktijk, maar als een manier van leven. Deze laatste week integreert alles en opent de deur naar wat er hierna komt.",
    teachings: [
      {
        title: "Het Pad Gaat Verder",
        body: `<p>De twaalf weken die je zojuist hebt voltooid zijn geen einde — ze zijn een begin. Je hebt praktijken gevestigd, kanalen geopend en een fundament gebouwd. Nu wordt het helderziende pad simpelweg <em>de manier waarop je leeft</em>.</p>
        <p>Psychische ontwikkeling is geen bestemming; het is een voortdurende ontvouwing. Je zult weken hebben waarop je intuïtie kristalhelder is en weken waarop het gedempt lijkt. Beide zijn onderdeel van het proces. De praktijken die je hebt opgebouwd — meditatie, dagboekschrijven, aarding, werken met gidsen — zijn metgezellen voor het leven.</p>`
      },
      {
        title: "Helderziend Leven",
        body: `<p>Helderziend leven betekent leven met je bewustzijn uitgebreid en je hart open. Het betekent de subtiele indrukken vertrouwen die opkomen. Het betekent handelen op basis van je intuïtie voordat je 'weet waarom.' Het betekent de onzichtbare draden zien die alle dingen en alle mensen verbinden.</p>
        <p>Het betekent ook volledige verantwoordelijkheid nemen voor je gaven — ze gebruiken met integriteit, voor het hoogste goed van allen, nooit voor manipulatie of zelfverheerlijking.</p>`
      },
      {
        title: "Jouw Unieke Gaven",
        body: `<p>Geen twee mensen's psychische uitdrukking is hetzelfde. Je hebt nu ontdekt welke vermogens van nature het sterkst voor je zijn, welke hulpmiddelen resoneren, welke praktijken het meest levend aanvoelen. Eer deze uniciteit.</p>
        <p>Volg wat oplicht. Ontwikkel wat natuurlijk is. Het pad dat je bewandelt is jouw eigen pad.</p>`
      }
    ],
    exercises: [
      {
        type: "Integratie",
        title: "Jouw Psychisch Profiel",
        body: "Terugkijkend op de twaalf weken, beantwoord deze vragen om je unieke psychische gaven te begrijpen en hoe je ze verder wilt ontwikkelen:",
        questions: [
          "Welke week's materiaal resoneerde het diepst met je, en waarom?",
          "Wat is jouw dominant psychisch zintuig (helderziendheid, helderhorendheid, heldervoelendheid, helderwetendheid)?",
          "Welke praktijk voelde het meest natuurlijk en krachtig voor je?",
          "Wat is het meest verrassende dat je over jezelf hebt ontdekt?",
          "Hoe is je relatie met je eigen intuïtie veranderd over deze twaalf weken?",
          "Wat wil je verder ontwikkelen?"
        ]
      },
      {
        type: "Ceremonie",
        title: "Dankbaarheid & Toewijding Ceremonie",
        body: "Creëer een kleine ceremonie om de voltooiing van je reis te markeren en je toewijding aan het helderziende leven te vieren. Steek een kaars aan. Bedank je gidsen. Schrijf een toewijdingsbrief aan je ontwikkelende zelf.",
        journalPrompt: "Lieve ziel,\n\nIk heb twaalf weken van het helderziende pad bewandeld. Wat ik heb ontdekt:\n\nWaar ik dankbaar voor ben:\n\nWat ik voortaan beloof:\n\nMijn toewijding aan het pad:\n\nMet liefde,"
      },
      {
        type: "Meditatie",
        title: "Finale Integratie Meditatie",
        body: "Eén laatste meditatie — maar dit keer zonder agenda, zonder oefening, zonder doel. Zit gewoon in de volheid van wie je nu bent. Bied dankbaarheid. Wees aanwezig. Wees de ziel die je jezelf hebt herinnerd te zijn.",
        hasTimer: true,
        journalPrompt: "In deze laatste meditatie, wat voelde, voelde of wist je? Wat heeft deze reis voor je betekend?"
      }
    ],
    progress: [
      "Psychisch profiel reflectie voltooid",
      "Dankbaarheid ceremonie uitgevoerd",
      "Finale integratie meditatie gedaan",
      "Alle twaalf weken voltooid!",
      "Klaar om het helderziende pad te leven"
    ],
    affirmation: "Ik ben thuis in mijn ziel. Ik bewandel het helderziende pad met vertrouwen, liefde en vreugde."
  }
];

const CHAKRAS = [
  { name: "Wortel", location: "Basis van wervelkolom", color: "#e53e3e", sanskrit: "Muladhara", element: "Aarde", governs: "Veiligheid, overleving, aarding, fysieke gezondheid", keywords: "Ik Ben", openWhen: "Je je veilig, gegrond en thuis in je lichaam voelt", blockedWhen: "Angst, financiële zorgen, gezondheidsproblemen, ongegrond gevoel" },
  { name: "Sacraal", location: "Onderbuik", color: "#ed8936", sanskrit: "Svadhisthana", element: "Water", governs: "Creativiteit, seksualiteit, emoties, plezier, stroom", keywords: "Ik Voel", openWhen: "Je creatief, emotioneel vloeiend en comfortabel met plezier bent", blockedWhen: "Stijfheid, creatieve blokkades, emotionele gevoelloosheid, schuldgevoel" },
  { name: "Zonneplexus", location: "Bovenbuik", color: "#ecc94b", sanskrit: "Manipura", element: "Vuur", governs: "Persoonlijke kracht, wil, vertrouwen, transformatie", keywords: "Ik Doe", openWhen: "Je je krachtig, besluitvaardig en doelgericht voelt", blockedWhen: "Laag zelfvertrouwen, machteloosheid, besluiteloosheid" },
  { name: "Hart", location: "Midden van borst", color: "#48bb78", sanskrit: "Anahata", element: "Lucht", governs: "Liefde, mededogen, verbinding, vergiffenis, genezing", keywords: "Ik Bemin", openWhen: "Je vrijelijk liefde geeft en ontvangt, verbonden voelt met al het leven", blockedWhen: "Verdriet, eenzaamheid, moeite met vergeven, angst voor intimiteit" },
  { name: "Keel", location: "Keel", color: "#4299e1", sanskrit: "Vishuddha", element: "Ether", governs: "Communicatie, expressie, waarheid, authenticiteit", keywords: "Ik Spreek", openWhen: "Je jezelf helder, authentiek en creatief uitdrukt", blockedWhen: "Angst om te spreken, oneerlijkheid, moeite met gevoelens uiten" },
  { name: "Derde Oog", location: "Tussen wenkbrauwen", color: "#667eea", sanskrit: "Ajna", element: "Licht", governs: "Intuïtie, psychische waarneming, visie, wijsheid", keywords: "Ik Zie", openWhen: "Je intuïtie sterk is, je innerlijke visie vertrouwt, psychische waarneming helder is", blockedWhen: "Moeite intuïtie te vertrouwen, verwarring, gebrek aan visie, cynisme" },
  { name: "Kruin", location: "Bovenkant hoofd", color: "#9f7aea", sanskrit: "Sahasrara", element: "Bewustzijn", governs: "Goddelijke verbinding, spiritueel bewustzijn, eenheidsbewustzijn", keywords: "Ik Weet", openWhen: "Je verbonden voelt met het goddelijke, één met alle dingen", blockedWhen: "Spirituele ontkoppeling, zinloosheid, geslotenheid" }
];



let state = {
  started: false, completedWeeks: [], exerciseData: {},
  progressChecks: {}, daysActive: [], firstStart: null
};

// Current user ID — set on login, used by saveProgress
let currentUserId = null;

// Debounced save — prevents hammering Supabase on rapid input
let _saveTimer = null;
function saveState() {
  if (!currentUserId) return;
  clearTimeout(_saveTimer);
  _saveTimer = setTimeout(() => {
    const today = new Date().toDateString();
    if (!state.daysActive.includes(today)) state.daysActive.push(today);
    if (!state.firstStart) state.firstStart = Date.now();
    saveProgress(currentUserId, state);
  }, 500);
}

async function handleSession(session) {
  try {
    currentUserId = session.user.id;
    await upsertProfile(session);

    const saved = await loadProgress(currentUserId);
    if (saved) state = { ...state, ...saved };

    const hasAccess = await checkAccess(session.user);
    if (!hasAccess) {
      showScreen('screen-paywall');
      return;
    }

    showMap();
  } catch (err) {
    console.error('handleSession error:', err);
    initLandingPublic();
    showScreen('screen-landing');
  }
}

async function init() {
  createBlobAnimation();

  const inAuthRedirect = window.location.search.includes('code=') ||
                         window.location.hash.includes('access_token=');

  // Detect ThriveCart post-purchase redirect — auto-send magic link
  const params = new URLSearchParams(window.location.search);
  const tcEmail = params.get('thrivecart[customer][email]');
  const inThriveCartRedirect = !!tcEmail && !inAuthRedirect;

  const loadingTimeout = setTimeout(() => {
    if (document.getElementById('screen-loading').classList.contains('active')) {
      initLandingPublic();
      showScreen('screen-landing');
    }
  }, 6000);

  window.sb.auth.onAuthStateChange(async (event, session) => {
    if (window.location.search.includes('code=') || window.location.hash.includes('access_token=')) {
      history.replaceState(null, '', window.location.pathname);
    }

    if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
      if (session) await handleSession(session);
    } else if (event === 'INITIAL_SESSION') {
      if (session) {
        await handleSession(session);
      } else if (inThriveCartRedirect) {
        // New purchase — clean URL, auto-send magic link, show check-email screen
        history.replaceState(null, '', window.location.pathname);
        await sendMagicLink(tcEmail);
        showScreen('screen-check-email');
      } else if (!inAuthRedirect) {
        initLandingPublic();
        showScreen('screen-landing');
      }
    } else if (event === 'SIGNED_OUT') {
      currentUserId = null;
      initLandingPublic();
      showScreen('screen-landing');
    }
  });
}

function createBlobAnimation() {
  // Subtle additional micro-stars
  document.querySelectorAll('.blob').forEach((b, i) => {
    b.style.setProperty('--dur', (18 + i * 5) + 's');
  });
}


// Landing for unauthenticated visitors — shows "Begin de Reis" → auth screen
function initLandingPublic() {
  document.getElementById('landing-new').style.display = 'block';
  document.getElementById('landing-returning').style.display = 'none';
}

function initLanding() {
  const has = state.started || state.completedWeeks.length > 0;
  document.getElementById('landing-new').style.display = has ? 'none' : 'block';
  document.getElementById('landing-returning').style.display = has ? 'block' : 'none';
  if (has) {
    document.getElementById('stat-weeks').textContent = state.completedWeeks.length;
    document.getElementById('stat-exercises').textContent = Object.keys(state.exerciseData).length;
    document.getElementById('stat-days').textContent = state.daysActive.length;
  }
}


function startJourney() { showScreen('screen-auth'); }


function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function showMap() { renderWeekGrid(); showScreen('screen-map'); }

function renderWeekGrid() {
  const grid = document.getElementById('week-grid');
  grid.innerHTML = WEEKS.map((w, i) => {
    const done = state.completedWeeks.includes(w.number);
    const locked = i > 0 && !state.completedWeeks.includes(i) && !done;
    const checks = state.progressChecks[`w${w.number}`] || [];
    const pct = w.progress ? Math.round((checks.length / w.progress.length) * 100) : 0;
    return `<div class="week-card ${done?'completed':''} ${locked?'locked':''}" onclick="${locked?'':`openWeek(${w.number})`}">
      <div class="week-done-mark">✦</div>
      <div class="week-num">Week ${w.number}</div>
      <div class="week-name">${w.name}</div>
      <div class="week-subtitle">${w.subtitle}</div>
      <div class="week-bar"><div class="week-bar-fill" style="width:${pct}%"></div></div>
      ${locked?'<div style="font-size:0.6rem;color:var(--text-muted);margin-top:0.6rem;letter-spacing:0.08em">Voltooi vorige week om te ontgrendelen</div>':''}
    </div>`;
  }).join('');
}

function openWeek(n) {
  const week = WEEKS.find(w => w.number === n);
  document.getElementById('week-content').innerHTML = renderWeekContent(week);
  showScreen('screen-week');
  initWeekInteractions(week);
}

function renderWeekContent(week) {
  const checks = state.progressChecks[`w${week.number}`] || [];
  return `
    <div class="week-nav">
      <button class="btn btn-ghost" onclick="showMap()">← Alle Weken</button>
      <div class="week-counter">Week ${week.number} van 12</div>
    </div>
    <div class="week-hero">
      <div class="hero-eyebrow">Intuïtie · Week ${week.number}</div>
      <div class="hero-title">${week.name}</div>
      <div class="hero-theme">${week.theme}</div>
      <div class="hero-rule"></div>
    </div>
    <div class="affirmation">
      <div class="affirmation-text">${week.affirmation}</div>
      <div class="affirmation-label">Affirmatie van Deze Week</div>
    </div>
    <div class="tabs">
      <button class="tab active" onclick="switchTab(event,'tab-learn')">Lessen</button>
      <button class="tab" onclick="switchTab(event,'tab-practice')">Oefeningen</button>
      <button class="tab" onclick="switchTab(event,'tab-progress')">Voortgang</button>
    </div>
    <div class="tab-content active" id="tab-learn">
      ${week.teachings.map((t,i) => `
        <div class="teaching-block">
          <div class="teaching-label">${t.title}</div>
          <div class="teaching-body">${t.body}</div>
        </div>
        ${i < week.teachings.length-1 ? '<div class="divider-ornament">✦ ✦ ✦</div>' : ''}
      `).join('')}
    </div>
    <div class="tab-content" id="tab-practice">
      ${week.exercises.map((ex,ei) => renderExercise(ex, week.number, ei)).join('')}
    </div>
    <div class="tab-content" id="tab-progress">
      <div class="teaching-label" style="margin-bottom:1.2rem">Dagelijkse Checklist</div>
      <div class="progress-list">
        ${week.progress.map((item, pi) => {
          const done = checks.includes(pi);
          return `<div class="progress-item ${done?'is-done':''}">
            <div class="progress-text">${item}</div>
            <div class="check ${done?'done':''}" onclick="toggleCheck(${week.number},${pi},this)">${done?'✦':''}</div>
          </div>`;
        }).join('')}
      </div>
      <div class="complete-section">
        ${state.completedWeeks.includes(week.number)
          ? '<div class="complete-badge">✦ &nbsp; Week Voltooid &nbsp; ✦</div>'
          : `<button class="btn btn-primary" onclick="completeWeek(${week.number})">Deze Week Voltooien</button>
             <p style="font-size:0.75rem;color:var(--text-muted);margin-top:1rem;font-family:'Inknut Antiqua', serif;font-style:italic">Markeer als voltooid wanneer je alle checklistitems hebt doorgewerkt.</p>`
        }
      </div>
    </div>
    <div class="bottom-nav">
      ${week.number > 1 ? `<button class="btn btn-ghost" onclick="openWeek(${week.number-1})">← Week ${week.number-1}</button>` : '<div></div>'}
      ${week.number < 12 ? `<button class="btn btn-ghost" onclick="openWeek(${week.number+1})">Week ${week.number+1} →</button>` : '<div></div>'}
    </div>`;
}

function renderExercise(ex, weekNum, idx) {
  const key = `w${weekNum}_ex${idx}`;
  let extras = '';

  if (ex.hasTimer) extras += `
    <div class="timer-wrap">
      <div class="timer-label-top">Meditatie Timer</div>
      <div class="timer-ring-wrap">
        <svg class="timer-svg" width="150" height="150" viewBox="0 0 150 150">
          <defs><linearGradient id="tg${idx}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4B3CA1"/><stop offset="100%" stop-color="#322779"/>
          </linearGradient></defs>
          <circle class="timer-track" cx="75" cy="75" r="65"/>
          <circle class="timer-progress" id="prog${idx}" cx="75" cy="75" r="65"
            stroke="url(#tg${idx})" stroke-dasharray="${2*Math.PI*65}" stroke-dashoffset="0"/>
        </svg>
        <div class="timer-display" id="tlabel${idx}">—</div>
      </div>
      <div class="timer-controls">
        <select class="timer-select" id="tdur${idx}">
          <option value="300">5 min</option><option value="600">10 min</option>
          <option value="1200" selected>20 min</option><option value="1800">30 min</option>
        </select>
        <button class="btn btn-primary" style="padding:0.6rem 1.4rem;font-size:0.65rem" onclick="startTimer(${idx})">Beginnen</button>
        <button class="btn btn-ghost" style="padding:0.6rem 1.2rem" onclick="stopTimer(${idx})">Stoppen</button>
      </div>
    </div>`;

  if (ex.hasChakras) extras += `
    <div class="chakra-grid">${CHAKRAS.map((c,ci) => `
      <div class="chakra-card" onclick="showChakraDetail(${ci})">
        <div class="chakra-dot" style="background:${c.color};box-shadow:0 0 10px ${c.color}66"></div>
        <div class="chakra-name">${c.name}</div>
        <div class="chakra-loc">${c.location}</div>
      </div>`).join('')}</div>
    <div class="chakra-detail" id="chakra-detail"></div>`;

  if (ex.hasDrawing) extras += `
    <div class="canvas-wrap">
      <canvas id="rv-canvas" width="400" height="260"></canvas>
      <div class="canvas-tools">
        <span style="font-size:0.58rem;color:var(--text-muted);letter-spacing:0.2em">KLEUR</span>
        ${['#322779','#7B61E1','#322779','#9A8AE7','#48bb78','#fc8181','#1e1550'].map(c =>
          `<div class="swatch" style="background:${c}" onclick="setDrawColor('${c}',this)"></div>`).join('')}
        <div class="swatch" style="background:rgba(200,190,232,0.3);border:1px solid rgba(50,39,121,0.2)" onclick="setDrawColor('rgba(200,190,232,0.3)',this)" title="Gum"></div>
        <button class="btn btn-ghost" style="padding:0.4rem 1rem;font-size:0.6rem" onclick="clearCanvas()">Wissen</button>
      </div>
    </div>`;

  if (ex.hasSensitivity && ex.sensitivityItems) {
    extras += ex.sensitivityItems.map((item, si) => `
      <div class="sens-item">
        <div class="sens-label">${item}</div>
        <input type="range" class="sens-slider" min="1" max="10" value="5"
          oninput="this.parentElement.querySelector('.sens-val').textContent=this.value"
          onchange="saveSlider('${key}_s${si}',this.value)">
        <div class="sens-row">
          <span>Geblokkeerd</span>
          <span style="color:#322779">Huidig: <span class="sens-val">5</span></span>
          <span>Wijd Open</span>
        </div>
      </div>`).join('');
  }

  if (ex.hasRating && ex.ratings) {
    extras += ex.ratings.map((item, ri) => `
      <div style="margin-bottom:1rem">
        <div style="font-family:'Inknut Antiqua', serif;font-size:0.95rem;color:var(--text-mid);margin-bottom:0.3rem">${item}</div>
        <div class="rating-row">
          ${[1,2,3,4,5].map(n => `<span class="rating-star" onclick="setRating('${key}_r${ri}',${n},this.parentElement)">★</span>`).join('')}
          <span class="rating-hint">Zelden → Vaak</span>
        </div>
      </div>`).join('');
  }

  const questions = ex.questions ? ex.questions.map((q, qi) => `
    <div class="question-item">
      <div class="question-text">${q}</div>
      <textarea class="journal-area" style="min-height:70px" placeholder="Jouw reflectie..."
        onblur="saveResponse('${key}_q${qi}',this.value)">${state.exerciseData[`${key}_q${qi}`]||''}</textarea>
    </div>`).join('') : '';

  const journal = ex.journalPrompt ? `
    <div class="journal-label">Dagboek Notitie</div>
    <textarea class="journal-area" placeholder="${ex.journalPrompt}"
      onblur="saveResponse('${key}_j',this.value)">${state.exerciseData[`${key}_j`]||''}</textarea>
    <div class="save-row">
      <span class="saved-flash" id="sf_${key}">✦ Opgeslagen</span>
      <button class="btn btn-ghost" style="padding:0.5rem 1.2rem;font-size:0.6rem" onclick="manualSave('${key}_j',this)">Opslaan</button>
    </div>` : '';

  return `<div class="exercise-card">
    <div class="exercise-type">${ex.type}</div>
    <div class="exercise-title">${ex.title}</div>
    <div class="exercise-body">${ex.body}</div>
    ${extras}${questions}${journal}
  </div>`;
}

function switchTab(e, id) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');
  document.getElementById(id).classList.add('active');
}

function toggleCheck(wn, pi, el) {
  const key = `w${wn}`;
  if (!state.progressChecks[key]) state.progressChecks[key] = [];
  const arr = state.progressChecks[key];
  const i = arr.indexOf(pi);
  const item = el.closest('.progress-item');
  if (i === -1) {
    arr.push(pi);
    el.classList.add('done'); el.textContent = '✦';
    if (item) item.classList.add('is-done');
  } else {
    arr.splice(i,1);
    el.classList.remove('done'); el.textContent = '';
    if (item) item.classList.remove('is-done');
  }
  saveState();
}

function completeWeek(n) {
  if (!state.completedWeeks.includes(n)) {
    state.completedWeeks.push(n); saveState();
    showToast('✦  Week ' + n + ' voltooid — het pad gaat verder');
    setTimeout(() => {
      if (n < 12) { if (confirm('Klaar om Week ' + (n+1) + ' te openen?')) openWeek(n+1); else showMap(); }
      else { showToast('✦  Je hebt het volledige Intuïtie programma voltooid ✦'); showMap(); }
    }, 1600);
  }
}

function saveResponse(k, v) { state.exerciseData[k] = v; saveState(); }

function manualSave(key, btn) {
  const ta = btn.parentElement.previousElementSibling;
  if (ta) saveResponse(key, ta.value);
  const fl = document.getElementById('sf_' + key.replace(/_j$/, ''));
  if (fl) { fl.style.opacity = 1; setTimeout(() => fl.style.opacity = 0, 2000); }
  showToast('Opgeslagen ✦');
}

function setRating(key, val, container) {
  state.exerciseData[key] = val; saveState();
  container.querySelectorAll('.rating-star').forEach((s,i) => s.classList.toggle('active', i < val));
}

function saveSlider(k, v) { state.exerciseData[k] = v; saveState(); }

const timers = {};
function startTimer(idx) {
  if (timers[idx]) clearInterval(timers[idx]);
  const dur = parseInt(document.getElementById(`tdur${idx}`)?.value || 1200);
  let rem = dur;
  const circ = 2 * Math.PI * 65;
  const progEl = document.getElementById(`prog${idx}`);
  const labEl = document.getElementById(`tlabel${idx}`);
  const tick = () => {
    const m = Math.floor(rem/60), s = rem%60;
    if (labEl) labEl.textContent = `${m}:${s.toString().padStart(2,'0')}`;
    if (progEl) progEl.style.strokeDashoffset = circ*(1-rem/dur);
    if (rem <= 0) { clearInterval(timers[idx]); showToast('✦  Meditatie voltooid'); return; }
    rem--;
  };
  tick(); timers[idx] = setInterval(tick, 1000);
}

function stopTimer(idx) {
  if (timers[idx]) { clearInterval(timers[idx]); delete timers[idx]; }
  const l = document.getElementById(`tlabel${idx}`); if (l) l.textContent = '—';
  const p = document.getElementById(`prog${idx}`); if (p) p.style.strokeDashoffset = 0;
}

let drawColor = '#322779', drawing = false, lastX = 0, lastY = 0;
function setDrawColor(c, el) {
  drawColor = c;
  document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}
function clearCanvas() {
  const cv = document.getElementById('rv-canvas');
  if (cv) cv.getContext('2d').clearRect(0,0,cv.width,cv.height);
}
function initWeekInteractions() {
  setTimeout(() => {
    const cv = document.getElementById('rv-canvas');
    if (!cv) return;
    const ctx = cv.getContext('2d');
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    const pos = e => {
      const r = cv.getBoundingClientRect();
      const t = e.touches ? e.touches[0] : e;
      return [(t.clientX-r.left)*(cv.width/r.width),(t.clientY-r.top)*(cv.height/r.height)];
    };
    cv.addEventListener('mousedown', e => { drawing=true; [lastX,lastY]=pos(e); });
    cv.addEventListener('touchstart', e => { e.preventDefault(); drawing=true; [lastX,lastY]=pos(e); }, {passive:false});
    const draw = e => {
      if (!drawing) return;
      if (e.touches) e.preventDefault();
      const [x,y] = pos(e);
      ctx.beginPath(); ctx.strokeStyle=drawColor; ctx.lineWidth=2.5;
      ctx.moveTo(lastX,lastY); ctx.lineTo(x,y); ctx.stroke();
      [lastX,lastY]=[x,y];
    };
    cv.addEventListener('mousemove', draw);
    cv.addEventListener('touchmove', draw, {passive:false});
    ['mouseup','mouseleave','touchend'].forEach(ev => cv.addEventListener(ev, () => drawing=false));
  }, 100);
}

function showChakraDetail(idx) {
  const c = CHAKRAS[idx];
  const d = document.getElementById('chakra-detail');
  if (!d) return;
  d.innerHTML = `
    <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.2rem">
      <div style="width:40px;height:40px;border-radius:50%;background:${c.color};box-shadow:0 0 16px ${c.color}88;flex-shrink:0"></div>
      <div>
        <div style="font-family:'Inknut Antiqua', serif;font-size:1.05rem;color:var(--shadow)">${c.name} Chakra</div>
        <div style="font-size:0.65rem;color:var(--text-muted);letter-spacing:0.08em">${c.sanskrit} · ${c.location}</div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:0.8rem">
      <div><div style="font-size:0.55rem;letter-spacing:0.2em;text-transform:uppercase;color:#322779;margin-bottom:0.2rem">Element</div><div style="font-family:'Inknut Antiqua', serif;font-size:0.95rem;color:var(--text-mid)">${c.element}</div></div>
      <div><div style="font-size:0.55rem;letter-spacing:0.2em;text-transform:uppercase;color:#322779;margin-bottom:0.2rem">Sleutelwoord</div><div style="font-family:'Inknut Antiqua', serif;font-size:0.95rem;color:var(--text-mid)">${c.keywords}</div></div>
    </div>
    <div style="margin-bottom:0.7rem"><div style="font-size:0.55rem;letter-spacing:0.2em;text-transform:uppercase;color:#322779;margin-bottom:0.2rem">Beheert</div><div style="font-family:'Inknut Antiqua', serif;font-size:0.9rem;color:var(--text-mid)">${c.governs}</div></div>
    <div style="margin-bottom:0.7rem"><div style="font-size:0.55rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--deep);opacity:0.6;margin-bottom:0.2rem">Open Als</div><div style="font-family:'Inknut Antiqua', serif;font-style:italic;font-size:0.9rem;color:var(--text-soft)">${c.openWhen}</div></div>
    <div><div style="font-size:0.55rem;letter-spacing:0.2em;text-transform:uppercase;color:#322779;margin-bottom:0.2rem">Geblokkeerd Als</div><div style="font-family:'Inknut Antiqua', serif;font-style:italic;font-size:0.9rem;color:var(--text-soft)">${c.blockedWhen}</div></div>`;
  d.classList.add('show');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}


// ===== AUTH SCREEN =====

async function submitAuthForm(e) {
  if (e) e.preventDefault();
  const emailInput = document.getElementById('auth-email');
  const errorEl = document.getElementById('auth-error');
  const email = emailInput.value.trim();

  if (!email || !email.includes('@')) {
    errorEl.textContent = 'Voer een geldig e-mailadres in.';
    return;
  }

  errorEl.textContent = '';
  const submitBtn = document.getElementById('auth-submit');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Verzenden...';

  const { error } = await sendMagicLink(email);

  if (error) {
    errorEl.textContent = error.message || error.status || JSON.stringify(error);
    submitBtn.disabled = false;
    submitBtn.textContent = 'Stuur Mij een Link';
    return;
  }

  showScreen('screen-check-email');
}

function showAuthScreen() {
  document.getElementById('auth-email').value = '';
  document.getElementById('auth-error').textContent = '';
  const submitBtn = document.getElementById('auth-submit');
  if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Stuur Mij een Link'; }
  showScreen('screen-auth');
}

// ===== PAYWALL SCREEN =====

function goToCheckout() {
  window.location.href = 'https://aeon.thrivecart.com/intuitie/';
}

// ===== RESET (async version) =====

async function resetProgress() {
  if (!confirm('Dit wist al je voortgang. Weet je het zeker?')) return;
  state = { started: false, completedWeeks: [], exerciseData: {}, progressChecks: {}, daysActive: [], firstStart: null };
  if (currentUserId) await saveProgress(currentUserId, state);
  showScreen('screen-landing');
  initLanding();
}

init();
