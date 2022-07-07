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

