# How the Internet works

## History of the Internet

- Today’s Internet traces its beginning back to the early 1960s.
- Back then the telephone network was the world’s dominant communication network.
- Three research groups around the world, each unaware of the others’ work, began inventing packet switching networks: MIT (1961), Rand Institute (1964), National Physical Laboratory in England (1965).
- The work of these research groups came together, when they went on to lead the computer science program at the Advanced Research Projects Agency (ARPA), which was the first packet-switched computer network and a direct ancestor of today’s public Internet.
- In 1969, the ARPANET was installed at UCLA, Stanford Research Institute (SRI), UC Santa Barbara, and the University of Utah. Internet was four nodes large by the end of 1969.

![](images/arpanet.jpg)

Robert E. Kahn, one of the inventors of the technolgy behind Internet, explains how computers are interconnected in a packet-switching network: https://youtu.be/fVhwOaCwkb0?t=174

## Basis of the Internet Communication: Packet switching

- In a network application, end systems exchange messages with each other.
- Messages can contain anything the application designer wants, such as an email message, a JPEG image, or an MP3 audio file.
- The sender breaks long messages into smaller chunks of data known as packets.
- Between sender and receiver, each packet travels through communication links and packet switches.

![](images/Packet_Switching.gif)

What is the difference between packet-switched and circuit-switched networks?
- In circuit-switched networks, the resources needed along a path between the end systems are reserved for the duration of the communication session. Traditional telephone networks are examples of circuit-switched networks.
- In packet-switched networks, these resources are not reserved; a session’s messages use the resources on demand. 

## World Wide Web
In 1980, Tim Berners-Lee, an English independent contractor at the European Organization for Nuclear Research (CERN) in Switzerland, built ENQUIRE, as a personal database of people and software models, but also as a way to play with hypertext; each new page of information in ENQUIRE had to be linked to a page.

By 1990, Berners-Lee had built all the tools necessary for a working Web: the HyperText Transfer Protocol (HTTP) 0.9, the HyperText Markup Language (HTML), the first Web browser (named WorldWideWeb, which was also a Web editor), the first HTTP server software (later known as CERN httpd), the first web server (http://info.cern.ch), and the first Web pages that described the project itself.

First webpage ever: http://info.cern.ch/hypertext/WWW/TheProject.html

## Protocols

A protocol defines the format and the order of messages exchanged between two or more communicating entities, as well as the actions taken using that message.

- All activity in the Internet that involves multiple remote entities is governed by a protocol.
- What happens when you make a request to a Web server? 
  - you type the URL of a Web page into your Web browser.
  - Your computer sends a connection request message to the Web server and waits for a reply.
  - The Web server receives your connection request message and returns a connection reply message.
  - Knowing that it is now OK to request the Web document, your computer sends the name of the Web page it wants to fetch from that Web server in a GET message.
  - Finally, the Web server returns the Web page (file) to your computer.

## Internet addresses

* What are IP addresses?
* Why have we run out of IPv4 addresses?
* IPv6 and its sloooowww adoption
* localhost and private IP addresses

![](images/ip-headers.jpg)

## Network communication

* Computers run programs, which *listen* at *ports*
* Port: a number that tells the computer which program to send the message to
* Restricted ports: 0-1023 https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers
* Registered ports: everything in /etc/services
* Once you learn enough Python, you too can write a program that listens at a port!

## Network protocols

* This is how computer programs talk to each other
* Much like shells, programs have their own language that they expect
* Example! Talking to a mail server

		HELO digitalbyzantinist.org
		MAIL FROM:<mickey@digitalbyzantinist.org>
		RCPT TO:<aurum@well.com>
		DATA
		From: "Mickey Mouse" <mickey@digitalbyzantinist.org>
		To: Tara <aurum@well.com>
		Date: Wed, 12 Jul 2017 20:42:01 -0500
		Subject: my message

		Hello Tara! It's your old friend Mickey. Squeak.
		.
		QUIT

* Why might mail get caught in a spam filter?

## The Hypertext Transfer Protocol (HTTP)

* The components of a URL: protocol, host, port, path (protocol://host:port/path?query)
* Connecting to an HTTP server
* HTTP request verbs
  * HEAD
  * GET
  * POST
  * PUT
  * DELETE
* HTTP headers
* HTTP responses

**List of HTTP Status Codes:** https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

## Application Layer in Computer Networks

- Applications utilize / build on the physical infrastructure and transport protocols.
- Messaging, web browsing, video streaming, cloud computing etc. applications all use such internet protocols.
- On the client end, the human user views and interacts with the transmitted data using control devices: https://www.youtube.com/watch?v=VScVgXM7lQQ&list=PLCGFadV4FqU2yAqCzKaxnKKXgnJBUrKTE&index=1

## References
The content of this course summarizes the relevant sections from the network technolgies textbook "Computer Networking: A Top-Down Approach" by James F. Kurose,  Keith W. Ross.

https://commons.wikimedia.org/wiki/File:Packet_Switching.gif by Oddbodz [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)]

https://www.cisco.com/en/US/technologies/tk648/tk872/technologies_white_paper0900aecd8054d37d.html
