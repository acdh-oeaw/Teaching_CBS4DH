# How the Internet works

## Hostnames and DNS

* What happens when you register a hostname
* Making a DNS query: `host` and `dig`
* Things other than A records: aliases and mail

## Internet addresses

* What are IP addresses?
* Why have we run out of IPv4 addresses?
* IPv6 and its sloooowww adoption
* localhost and private IP addresses

## Network communication

* Computers run programs, which *listen* at *ports*
* Port: a number that tells the computer which program to send the message to
* Restricted ports: 0-1023
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

## Security matters

* Telnet is from the era of the free and open internet
* Free and open to packet sniffers like `tcpdump`, that is!

		sudo tcpdump -A -n -s0 -i en0 port 80
* Secure protocols and SSL

		[winpty] openssl s_client -connect www.somesite:443
		
		GET / HTTP/1.1
		Host: byzantini.st
* What it looks like when you try to packet sniff SSL

## The Hypertext Transfer Protocol (HTTP)

* The components of a URL: protocol, host, port, path(, query, fragment)
* What happens when you run Jupyter?
* Connecting to an HTTP server
* HTTP request verbs
  * HEAD
  * GET
  * POST
  * PUT
  * DELETE
* HTTP headers
* HTTP responses
* How to make an HTTP request in Python