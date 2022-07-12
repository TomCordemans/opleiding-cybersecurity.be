---
title: Basisbegrippen
---

# Basisbegrippen

In de inleiding werd vermeld dat een network protocol analyzer netwerkverkeer kan capteren, analyseren en visualiseren. Het capteren en analyseren van netwerkverkeer zijn echter twee onafhankelijke taken.

## Het capteren van netwerkverkeer

### Hoe en waar capteren?

Bij het capteren van netwerkverkeer wordt een kopie genomen van alle netwerkverkeer die zich verplaatst over een bepaalde verbinding. De belangrijkste vereisten zijn de accuraatheid en de de volledigheid van de captatie. Daarnaast mag het capteren geen invloed hebben op het netwerk.

Standaard verwerkt een netwerkkaart enkel specifieke frames.
- Het destinatie MAC-adres is gelijk aan het eigen MAC-adres van de netwerkkaart.
- Het destinatie MAC-adres is gelijk aan het broadcast MAC-adres (FF:FF:FF:FF:FF:FF).
- Het destinatie MAC-adres is gelijk aan een specifiek multicast adres waarvan de netwerkkaart lid is.

Alle andere frames worden standaard genegeerd. Dit is uiteraard geen gewenst situatie bij het capteren van netwerkverkeer.
We willen namelijk alle frames capteren ongeacht het destinatie MAC-adres.

Wanneer een netwerkkaart in "promiscuous mode" werkt, wordt het destinatie MAC-adres genegeerd en worden alle frame verwerkt ongeacht het destinatie MAC-adres. Deze mode is uiteraard cruciaal bij het capteren van netwerkverkeer.

Applicaties zoals TCPdump en Wireshark plaatsen de netwerkkaart standaard in "promiscuous mode".
Ter info: Dit is de reden waarom tijdens de installatie van Wireshark op een Microsoft besturingssysteem een extra stuurprogramma (Npcap) wordt geïnstalleerd.

![NPCAP](./assets/NPCAP.png)

Om accurater te meten kan men ook IPv4 en IPv6 uitschakelen op de netwerkkaart. Zo capteert men geen netwerkverkeer van het captatietoestel zelf.

![NOIP](./assets/NOIP.png)

Als we ons captatietoestel aansluiten op een switch, kunnen we onmogelijk al het netwerkverkeer capteren. De reden hiervoor is vrij simpel. Een switch filtert namelijk het netwerkverkeer op basis van het destinatie MAC-adres. 

![SWITCH](./assets/SWITCH.png)

Mogelijke werkwijzen bij het capteren:

1. Op het toestel zelf

Hierbij hebben we nog 2 opties:

- Het toestel beschikt over een eigen capteerfunctie. Als voorbeeld een screenshot van Fortinet firewall.


![FORTIGATE](./assets/FORTIGATE.png)


- Men kan een network protocol analyzer installeren op het toestel. Denk bijvoorbeeld aan een kritische server of een specifieke client computer.


![ONDEVICE](./assets/ONDEVICE.png) 


2. Via een port mirror

Sommige toestellen (switches, ...) hebben de optie om het netwerkverkeer van een bepaalde netwerkpoort te dupliceren.
Als voorbeeld een configuratie die wordt gebruikt bij een Cisco Catalyst 2960 switch.

`Switch(config)# monitor session 1 source interface gigabitethernet0/1`

`Switch(config)# monitor session 1 destination interface gigabitethernet0/2 encapsulation replicate`

![PORTMIRROR](./assets/PORTMIRROR.png) 


3. Via een tap

Men kan ook opteren om tap te plaatsen in het netwerk.
Let op: Bij het plaatsen van een tap veroorzaakt men kort een onderbreking van de netwerkfunctionaliteit!

Hieronder een foto van de hardware en de weergave van de opstelling.

![TAP](./assets/TAP.png) 










