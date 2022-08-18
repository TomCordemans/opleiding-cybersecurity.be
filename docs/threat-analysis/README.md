---
title: Threat Analysis
---

# Threat Analysis

Aangezien netwerkverkeer malware kan bevatten, is er steeds een risico aanwezig. Een volledig gescheiden omgeving is daarom aangewezen. Daarnaast wordt er vaak ook een niet-Microsoft besturingssysteem aanbevolen. Zo verkleinen we de kans op besmetting van het systeem en verspreiding via het netwerk.   

Een mogelijke werkwijze is het gebruik maken van een virtuele machine.  
[Kali Linux](https://www.kali.org/get-kali/#kali-virtual-machines)

## Wireshark tweaken  

Wireshark kan gebruikt worden voor verschillende taken. Als voorbeeld: Troubleshooting, security threats analysis, ... .
We gebruiken dezelfde data (frames) maar we stellen andere vragen. Daarom een specifieke profiel per taak een noodzaak.

Sommigen opteren om zelf hun profiel samen te stellen. Anderen maken gebruik van profielen die beschikbaar gesteld worden door derden.

![OEFENING](./assets/OEFENING.png)
Oefening 8:  
In deze oefening importen we een security profiel in Wireshark. Hierbij maken reeds gebruik van Kali linux virtuele machine.   
[Video - SECURITY_PROFILE.MKV](https://opleiding-cybersecurity.be/SECURITY_PROFILE.mkv)  
[Bestand - SECURITYV5.ZIP](https://opleiding-cybersecurity.be/SecurityV5.zip) 

![OEFENING](./assets/OEFENING.png)
Oefening 9:  
Probeer aan de hand van de verschillende profielen (default versus SecurityV5) de anomalie in een specifiek frame te vinden.  
[Video - CHECK-ICMP.MKV](https://opleiding-cybersecurity.be/CHECK-ICMP.mkv)  
[Bestand - CHECK-ICMP.PCAPng](https://opleiding-cybersecurity.be/CHECK-ICMP.PCAPng) 

## Controle op verdachte bestanden

Eenmaal een bestand uit een captatie wordt gehaald, is het meer dan wenselijk dit bestand te controleren. Hierbij kan men gebruik maken van verschillende websites:   
[VirusTotal](https://www.virustotal.com/gui/home/search)  
[Talos](https://www.talosintelligence.com/talos_file_reputation)   
[URLhaus](https://urlhaus.abuse.ch/browse/)   

Om datalekken te vermijden is het aangewezen om gebruik te maken van een hash. Daarnaast is een hash meestal zeer klein t.o.v. van het originele bestand.

De werkwijze via PowerShell:   
```
C:\Users\Tom\Desktop> Get-ChildItem .\Test.jpg


    Directory: C:\Users\Tom\Desktop


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        27/07/2022     10:55        4458380 Test.jpg


C:\Users\Tom\Desktop> Get-FileHash .\Test.jpg

Algorithm       Hash                                                                   Path
---------       ----                                                                   ----
SHA256          BF46477937C830AEF1203859F55E935C356B79052E57AE6C6D0F5CA2CA05FB89       C:\Users\Tom\Desktop\Test.jpg


C:\Users\Tom\Desktop>
```

De werkwijze via Linux:



