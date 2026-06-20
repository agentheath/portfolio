---
layout: post
title: "The Remarkable Influence of Bob Taylor: The Man Behind Modern Computing Part 2 of 4"
date: 2026-06-11
tags: [computing-history, bob-taylor, arpanet]
---

**SUMMARY:** In part two of this four-part series, I shine a light on one of the unheralded heroes of the computer age: Robert Taylor. Although he is unknown to many, his innovations have changed our lives in innumerable ways.

![Bob Taylor]({{ "/assets/img/blog/bob-taylor-part-2/bob-taylor.png" | relative_url }})

This is part two in the four-part series on the remarkable influence of Bob Taylor. If you haven't already, check out [part one]({{ "/2026/06/10/bob-taylor-modern-computing-part-1.html" | relative_url }}).

## ARPAnet

In 1966, after his boss and mentor, J.C.R. Licklider, left the government to accept a research position at IBM, Taylor became the Director of the Information Processing Techniques Office (IPTO) at ARPA. His office in the Pentagon had a terminal connected to the timesharing network at MIT, another terminal connected to the Berkeley Timesharing System, and a third to connect to the System Development Corporation's network in Santa Monica, CA. Taylor noticed that each network was developing its own active community of users and programs, but the networks were, in effect, computing islands -- isolated from one another and completely self-contained.

Furthermore, as a psychologist rather than a computer scientist, Taylor found it intolerable that he had to use three separate terminals to connect to these networks -- each with its own esoteric commands and syntax requirements. He wanted to build a network to bridge all of these timesharing "islands" together. Taylor convinced his superiors in the Pentagon to fund his networking project by transferring $1 million from a ballistic missile project.

At a pivotal meeting in 1967 to enlist the support of the researchers who actually used the computers Taylor was attempting to network, most of the participants resisted the idea, fearing it would slow down and sidetrack their research. In 1968, Taylor and Licklider published a paper entitled "The Computer as a Communication Device." It began with the prophetic statement: "In a few years, men will be able to communicate more effectively through a machine than face to face."

A key early insight was that it would be inefficient for this network to be centrally controlled and administered. Rather, each site that would connect to the network would utilize a dedicated computer called an *Interface Message Processor* (IMP) which would handle the routing of data around the network and the translation of data from one type of computer to another.

The actual data would be broken up into little chunks called *packets*. Each packet would have a payload -- its data -- and a header, which would tell the IMPs where the packet was being sent. The modern Internet still relies on this same system, only today we call these devices *routers*.

By 1969 it was sufficiently clear that the ARPAnet project would work and grow from there. Also, the change in administration with the election of Nixon left ARPA with less funding than before, so Taylor decided to move on.

![A map of the ARPAnet in 1974]({{ "/assets/img/blog/bob-taylor-part-2/arpanet-map-1974.png" | relative_url }})

*(A map of the ARPAnet in 1974)*

The ARPAnet, of course, did keep growing: by 1970 it had reached the East Coast. In 1975 there were 57 ARPAnet-connected sites. By 1981 it was 213. Today, it is, of course, known as the Internet, and there are between 15 billion and 50 billion devices connected to it at any time.
