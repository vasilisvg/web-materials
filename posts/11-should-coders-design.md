---
episode: 11
title:
  - Should coders design?
description: We gush over Nils Binder, the unicorn.
audio: /sound/WM011-should-designers-code.mp3
audiolength: 48874522 #mandatory, size in bytes! No idea how to do this in Eleventy )-:
duration: 00:40:43 #mandatory, duration in hh:mm:ss
date: 2021-10-05 #yyyy-mm-dd
# You can add (multiple) urls to stylesheets with 'csslinks'. (Use spaces, not tabs here)
csslinks:
  - /css/episode11.css
head: <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">

# If you want to add a block of preformatted code to the head you can use 'head'
# Beware: use spaces, not tabs.
#head: <link rel="stylesheet" href="https://fonts.typotheque.com/WF-023273-011643.css">
# If you want to add a block of preformatted code to the end of the document you can use 'foot'
# Beware: use spaces, not tabs.

foot: <script src="/js/e11.js"></script>
layout: layouts/episode11.njk
intro: In this episode we discuss design intention, micro decisions, whether coders stand to benefit from learning design, and how every designer should be more like Nils Binder.

shownotes:
  - <a href="#why-does-this-page-look-like-this%3F">About this episode's art direction</a>
  - <a href="https://xyce.bandcamp.com/">Music, as always, by xyce</a>
---

<section class="episode-transcript fixed">

## Transcript

<p class="closed-caption">Intro music by <a href="https://xyce.bandcamp.com/">xyce</a></p>

<section id="script" class="script">

<p data-time="0:05"><b>Espen:</b> :</b>
We spoke about stuff that led into a discussion about process. And I said, you know, we need to have a whole episode or, or a series of episodes on process. Before we get there, I want to ask a question that's kind of flipped on his head. And instead of saying should designers code I want to ask should coders design? This has been on our list of potential topics since the beginning. And it interests me because, you know, there is this there is a gap between what designers hand off and what coders implement. And obviously, the solution is for someone in the middle to just do a brilliant job at both. But until that time, we need to somehow communicate and bridge that gap. And I personally, I know, I would love coders that were, you know, front end fanatics, and I would just fix my design and make it better for the web rather than copying my mistakes from the Figma files.
</p>

<p data-time="1:09"><b>Vasilis:</b>
Agreed there. Yeah, I think you do design anyway. Right? If you make something that that people have to work with, it is design. And yeah, I think you have to be able, even as a developer to understand that it has to look good, and it has to work well. And it has to feel right. Right?
</p>

<p data-time="1:41"><b>Espen:</b>
Yeah, yeah, exactly. And also, I think, I, of course, of course, you could be you can make sort of design systemy files where you, you go in as the designer, and you fill in, you know, here's the 10, button styles, and all of typography and all the elements, here's a little hover states, here's, here's everything you need to make this into a website. Part of me feels like that only gets you so far. Because once you're in the browser, stuff happens. And you know, it's responsive. And it's, you know, interaction didn't work as it does, maybe you thought it might in in Figma, there's always tweaks to be made. But also, it's, it's, it's the short of having this master document, which is exhaustive, I feel like a lot of these decisions should be made when you're sketching in code, rather than in Figma. Because Figma isn't, you know, based on the same technology, so there's, there's limits to what you can actually do there. But at the same time, the processes that I encounter it, this is completely void. In fact, in most cases, the Figma file or Illustrator, whatever it might be, is treated as a specification. And if it's not there, well, we don't even think about it.
</p>

<p data-time="3:02"><b>Vasilis:</b>
So I usually tell my students to, so the visual design students, I tell them what they should think about. And these are things that are not in Figma, or not a Photoshop, not an illustrator. So think about transitions, think about interaction, think about what happens between the responsive designs that you've made. So right, if you made a small screen in a large screen, what happens in between there, these are important design decisions. And if you don't make them, the developer will make them. And you cannot count on this developer to be a good designer, right. And if you left it up to the design, to the developer, it will probably break or be very ugly or not work at all. And then I tell developers, developers students, well, you have to design these things, because designers don't think about everything. So you have to think about everything, you make the final product. So make the final product, don't come up with a sketch. Right? If it if something's missing, either come up with the excellent solution or go back to the designer and ask them how to do it.
</p>

<p data-time="4:28"><b>Espen:</b>
Yeah, and I think you're onto something there if if something is missing or incomplete, and you make a decision on how to solve that particular thing you are designing whether you think you're designer or not. If you choose to not do anything with it, and the links don't have a hover state. Well, you made a design decision right there. Yeah. How, what was it like when you because you worked on the sort of development side of these big products back in the day, what was the process like for you guys, and to what extent were you involved with with design because you strike me as a fairly opinionated developer, really.
</p>

<p data-time="5:07"><b>Vasilis:</b>
So the, the process was somebody would make wireframes, then the wireframes would get sent to a visual designer. And they will do some sort of a colouring by numbers exercise, just filling in the layouts, that the we use to call them interaction designers, were made but it wasn't really interaction design was more of a layout design, putting stuff on places. Yeah. And then in Photoshop, they would just make it pretty. And then they would send it over to me, and I would have to make it work. And it was it was really a separated process. So the visual designer was not involved in the, in the making of the wireframes. And I was not involved in both the wireframes and the Photoshop. So what happened a lot was that they came up with ideas that were not possible to make. We discussed that. In the end, that was good. I mean, if they only make things that were possible to make, we would still have a web that looked like IE6. Right things that were possible with IE6, thanks to the fact that the designers came up with stuff that we were not able to make. We nowadays have border radius, and we have gradients and all that stuff.
</p>

<p data-time="6:59"><b>Espen:</b>
Yeah.
</p>

<p data-time="7:17"><b>Vasilis:</b>
So in a way I was wrong back then. But but they did forget a lot of things. So there were never any hover states or focus states or other states. There was always, but that was the trend back then, a lack of contrast.
</p>

<p data-time="7:19"><b>Espen:</b>
Yeah.
</p>

<p data-time="7:19"><b>Vasilis:</b>
And there was never real content. So the the headlines, for instance, if there were more than one article, the headlines would always fit. Right, perfectly. Yeah, perfect content. So these were, I think these are things that are still not solved. I mean, these and so the designers I worked with, they would spend lots and lots of time on I would call the polishing a button. So they would have a button and they will just keep on polishing it until it really shines. Right? Beautiful button. But it's only the default state. So they would forget that a button is an interactive thing. So there's no hover state. There's no idea of how should it work when you hover over it, should there be a transition? or shouldn't there be a transition, which is possible as well? And if there's transition, what are the details of the transition? So there's lots of detail in what it looks like. So basically, these designers were making images, and they were not making interactive stuff. And I think this is a problem because we leave that over to developers. So write it out, right? And it's still the same thing. So back then it was my job as front end developer to fix this.
</p>

<p data-time="9:36"><b>Espen:</b>
And how did you?
</p>

<p data-time="9:36"><b>Vasilis:</b>
Well, that depended if there was time left, but there was no, there was never really much time left because the designers had spent so much time polishing their buttons that there was not much time anymore to make them work.
</p>

<p data-time="9:45"><b>Espen:</b>
No time for hover states.
</p>

<p data-time="9:46"><b>Vasilis:</b>
Nope. So yeah, yeah. And yeah.
</p>

<p data-time="9:47"><b>Espen:</b>
I feel like nowadays, if if I work with developers and you know I often forget about overstates or I don't even I think I will sort it out later You know, there's there's certainly if I look at my own process, there's room for improvement. But also don't mind you know, a conversation about Oh, hey, you made this this news article blog thing? What, what's what's, what should be hoverable here? What should happen? Okay, well, we'll just change the opacity and we'll make the thing underline you know, these are decisions that are easy to make quickly on the fly and can be solved in a conversation with responsive design.
</p>

<p data-time="10:50"><b>Vasilis:</b>
A short in the communication line between the designer  and the developer then, so it should be easier for them to reach you.
</p>

<p data-time="10:50"><b>Espen:</b>
Yes, and yeah, yeah. This episode should be sponsored by Slack, which is, I really like slack for this sort of stuff. Way more than email. You know, it's just also way more than text messages or signal or something like this. For me, perfect for this sort of stuff. But there's stuff that you can't just solve with three comments in Slack, which is what happens to this layout between those two breakpoints, like you mentioned earlier on as well. Which then begs the question, how do we as a as a, as a designer, how do you even begin to design a complete scale from mobile 320 pixels to desktop 1600 pixels? You know, there's no, you don't have the budget for the whole thing, right? So maybe you decide just the smallest and the biggest, and then you have this massive gap in the middle, maybe you decide, you know, you do the small or medium and large, and then you're left with two smaller gaps. But ultimately, there has to be design inputs in the implementation process.
</p>

<p data-time="10:53"><b>Vasilis:</b>
Yeah, so that's, I've been thinking about this a lot. Because the first time I created a responsive website, the very, very, very first responsive website that I created, I created that for the sales team of the design agency that I was working for back then. And so what are the sales team and to show them look at what we can do this is we can do this now. And then they were amazed, is it? How is that possible? Or That's incredible. And then the next time, they they came back to me, and they said, we cannot sell this. Because we will have to make a desktop design, a mobile design and something in between of every page because that was what we used to do back then we used to make very detailed Photoshop designs of every single page out there. And yeah, yeah, of course, you cannot sell that because that's ridiculous. These are there that even left over designs, I mean, you throw them away, it's not something that you can use later on. It's just something right, so and so I, I've thought about that a lot. And so what I teach my students right now is you don't have to make highly detailed designs with everything but phrases. You make a desktop design, which is three columns. Well, I immediately see that there will be a problem between the one column and the three columns, right? So what's are not really a problem, but somebody has to think about, so what happens there. So you can say, okay, we get, we make a new design at 700 pixels, or whatever, whatever you want. But you can also say, let's look at the content. So and then you come back to what we discussed in a very early episode about the the measure. So if you say, the measure shouldn't be wider than 30 em or something, right? Just come up with a number, then you don't have to design all the stuff, you can simply say, the measure shouldn't be wider than 30em, and it shouldn't be smaller than 15 or something. So once you have this good design, a good developer has everything they need to to solve the problem
</p>

<p data-time="13:25"><b>Espen:</b>
Yep, on paper.
</p>

<p data-time="13:27"><b>Vasilis:</b>
So it's just but well, I think but this is also something that works on paper, literally. So you can, you can sketch this.
</p>

<p data-time="13:37"><b>Espen:</b>
Yeah. And there's the issue that of course, designers are we're notoriously bad for sort of understanding the concepts of CSS layouts in in our design thinking. But also developers have, you know, you can, if you line up 10 front end developers, you get 10 different approaches to front end implementation. So for example, what an issue that I see time and time again, which is not so big that I care to, to spend lots of time fixing it is exactly this, you jump from three columns to one column. And quite often two columns doesn't work, because I don't know maybe you have, maybe you have three items that need to be side by side, or maybe, for whatever reason, the measure doesn't work when you if you jump to two columns anyway, so you might as well just jump straight down to one column. Now, the I was trying to explain this particular issue that that often occurs when you jump from a wide layout to a narrow layout or to from a multi column layout to a single column layout. What most developers in my experience do is they jump immediately to whatever the margins and paddings and typography of the mobile viewport is. The problem is this happens maybe adds, I don't know 800 pixels or something like that. So suddenly, the measure becomes is extremely long, the font sizes are way too small for the size of your looking things that and this could so easily be solved if there was just way more padding either side. So when you jump from something that completely fills the screen, because you have three columns, you jump down to oh now is just one column that should no longer fill the entire screen that needs to be, you know, padded to be at the sort of legible size in the middle or whatever. Now—
</p>

<p data-time="15:28"><b>Vasilis:</b>
This is exactly what I teach my students. Exactly this.
</p>

<p data-time="15:32"><b>Espen:</b>
And it's such a simple desig—
</p>

<p data-time="15:34"><b>Vasilis:</b>
As a designer, you have to understand this problem.
</p>

<p data-time="15:39"><b>Espen:</b>
Yeah.
</p>

<p data-time="15:39"><b>Vasilis:</b>
Yeah. And I think the paper designers actually, so when you designed for paper, you knew this stuff, right? You wouldn't make a column too small, because it would be hard to read, and you wouldn't make it too wide, because it would be hard to read. So you'd come up with just clever measures, right?
</p>

<p data-time="15:59"><b>Espen:</b>
Yep. Yep. Absolutely.
</p>

<p data-time="16:01"><b>Vasilis:</b>
And the weird thing is that we somehow don't do that. When designing for the web, we'll forget about it.
</p>

<p data-time="16:10 "><b>Espen:</b>
Yeah, I think I think the issue is that designers don't do it because they do they've already done the mobile view. And they've done the, whatever, tablet view. And—
</p>

<p data-time="16:21"><b>Vasilis:</b>
Maybe we shouldn't have mobile view
</p>

<p data-time="16:24"><b>Espen:</b>
Oh, but if you don't do the mobile view, I'm sure there's there'll be issues at the other end.
</p>

<p data-time="16:28"><b>Vasilis:</b>
But what have you so what I, when I start, I don't start with a mobile view, I start somewhere in between, but a single column view? Yeah, the widest possible single column
</p>

<p data-time="16:39 "><b>Espen:</b>
Single column? that's smart.
</p>

<p data-time="16:41"><b>Vasilis:</b>
But the widest possible. So even with the whitespace. So I start with design, right before it breaks to two columns.
</p>

<p data-time="16:51"><b>Espen:</b>
Yep.
</p>

<p data-time="16:52"><b>Vasilis:</b>
So let's say if it's breaks at 800 pixels, I never know where it breaks, it just breaks.
</p>

<p data-time="16:57"><b>Espen:</b>
Yeah.
</p>

<p data-time="16:58"><b>Vasilis:</b>
But then I would design it at 799. Yep. For instance.
</p>

<p data-time="17:03"><b>Espen:</b>
Yeah.
</p>

<p data-time="17:04"><b>Vasilis:</b>
So this gives you what happens with a whitespace. What happens if a column reaches maximum width, what happens then it's not the you don't have a perfect mobile design, then, for instance, you might have a menu that you can show the whole menu that you don't have, you don't need a hamburger menu, maybe that's the case. So then you will probably need to redesign a few components, just to make sure that they look good on the small on a really small screen. And then you need to make a new layout for when that third, when the two columns right before they break, right before they turn into three columns, right? So if you design these points, then you need fewer designs, you need one design that these are where you design all the components and what they look like and what they feel like. And then you can make a few designs for the exceptions that need detailed attention. And then you're done.
</p>

<p data-time="18:11"><b>Espen:</b>
Yes, except the just as we have this problem where if you design for the smallest viewport, the the padding, or the margin, and padding for the smallest, are kept throughout all the way up to the break point. And I think, you know, if you have, okay, my paddings are very generous, because I need a lot of whitespace around this text at whatever, eight 900 pixels, then again, the developer will have to make a decision what happens to this padding as the screen shrinks. And you rely on having some sort of shared understanding that these patterns are are flexible, you know, whether they're viewport based or percentage based or something they have to flex. But again, maybe the many developers are work still in pixels, and maybe they use some sort of framework that is based on no actually, this doesn't fit with, you know, whatever, bootstrap, because we use a four column grid here. And what do you know this you've placed it off the grid, you know, there's, there's all this there's 100,000 million micro decisions that are difficult
</p>

<p data-time="19:19 "><b>Vasilis:</b>
That's hy designers should be able to code
</p>

<p data-time="19:25"><b>Espen:</b>
Yeah, no, you're absolutely right.
</p>

<p data-time="19:27"><b>Vasilis:</b>
Because it's really a pity because I think there's a real big problem, because the problem is, designers are not interested in CSS, but developers are not interested in CSS as well.
</p>

<p data-time="19:39"><b>Espen:</b>
Yeah.
</p>

<p data-time="19:40"><b>Vasilis:</b>
And this means we have websites that it's so underwhelming
</p>

<p data-time="19:47"><b>Espen:</b>
Yeah,
</p>

<p data-time="19:48 "><b>Vasilis:</b>
We know that there's so much possible I just gave a talk to in in Zurich, about what my students make in five days, right? So this is a course that we give It's just a fun course it's playing with CSS. That's literally the title of the course,
</p>

<p data-time="20:04"><b>Espen:</b>
Yes
</p>

<p data-time="20:05"><b>Vasilis:</b>
You can choose to do this course it's not, it's not mandatory. So some students choose it because they want to learn a little bit about CSS. They bring a poster that they like, and then they recreate the poster with CSS. These are students that they don't know CSS. So they've written a few lines of CSS, maybe, but they know, they know nothing about it. And after five days, they create these incredible, incredible works of art that are interactive, that are beautiful. And that are something that we never see, that's the most thing that strikes me most is that these are designs that are possible to make. But these are designs that we never see. And I think the reason why is because nobody's interested in CSS.
</p>

<p data-time="20:54"><b>Espen:</b>
Yeah. I think I think you're right. I think those kinds of designs know that I've seen these particular examples. But they require design decisions to be made with the tool. Not not before the tool and not following a sketch in some different medium. Not they have to you have to try different variables, different units, different stuff to see what sticks, right?
</p>

<p data-time="21:17"><b>Vasilis:</b>
Yeah, yeah.
</p>

<p data-time="21:18 "><b>Espen:</b>
Before this episode, I mentioned to you really briefly that I'm dabbling in some game design, and I'm just using game maker and it's, you know, I'm a complete novice when it comes to code. But what I find is it maybe I have an idea what's going to happen in my head. And when I try and write this stuff, I change it 10 times over because Oh, actually, you know, the speed needs to be this and it looks way cooler when is that then or if this happens, and actually, this other thing needs to change as well. And the whole the whole thing. It's, it's like a living sketch, just like when I work in figma. I change things all the time. But I think unless you do that with code, you're always going to just get 90% representation of the latest thing that you thought was going to work. Getting all getting all worked up now. You know—
</p>

<p data-time="22:18"><b>Vasilis:</b>
I think it's frustrating as well. So I taught. So we have a new school here in Amsterdam is an associate degree in front end development in front of design. So it's only that so it's a two year programme, full time school at the University of Applied Sciences here in Amsterdam, for front end developers in front of designers that just started out a few weeks ago, and I was invited to give a guest lecture. Yeah, last Friday, and I went there and I showed them the same similar presentation that I did in Zurich and the students stages were so eager. Oh, yes. Can we do that? Let us try it. Yes. So um, let's say I'm hopeful for the future.
</p>

<p data-time="23:05"><b>Espen:</b>
Well that's really, really good.
</p>

<p data-time="23:07"><b>Vasilis:</b>
There's a new generation coming up that does care about CSS, I hope and
</p>

<p data-time="23:13"><b>Espen:</b>
this is happening outside of Amsterdam as well?
</p>

<p data-time="23:17"><b>Vasilis:</b>
As far as I know, this is the the only front end school
</p>

<p data-time="23:20"><b>Espen:</b>
Jesus, its 2021.
</p>

<p data-time="23:23"><b>Vasilis:</b>
So there's lots of, let's say, commercial courses, three month courses, very intensive. But there you learn to become a react developer.
</p>

<p data-time="23:36"><b>Espen:</b>
Yeah.
</p>

<p data-time="23:37"><b>Vasilis:</b>
So any three months you're react developer, and you have a job.
</p>

<p data-time="23:42"><b>Espen:</b>
Yeah, yeah. And there's, of course, there's loads of courses that are this is introduction to web design, you know, these are the basic technologies, this is how you use them. But it's not—
</p>

<p data-time="23:52"><b>Vasilis:</b>
You're a pretty good react developer, probably. But once people don't need react anymore, you're out of a job.
</p>

<p data-time="23:58"><b>Espen:</b>
Yeah.
</p>

<p data-time="23:59"><b>Vasilis:</b>
Because it's just react. So the the things that I teach here at this school is JavaScript, HTML, CSS.
</p>

<p data-time="24:07"><b>Espen:</b>
Yeah.
</p>

<p data-time="24:08"><b>Vasilis:</b>
And they don't just teach you to develop with it. They teach you to design with it. It's really a design school, which I think is unique.
</p>

<p data-time="24:14"><b>Espen:</b>
That's the real difference right there. Yeah. There was a—
</p>

<p data-time="24:19"><b>Vasilis:</b>
They don't care about frameworks. Well, they do care about frameworks, but they don't teach them. Yeah. So they teach the students to reach a level where they can choose a framework or they can adapt to a framework, but they always have a much more thorough knowledge of what's beyond or behind or underneath the framework.
</p>

<p data-time="24:40"><b>Espen:</b>
It sounds a bit like in when I was in uni, we had almost no courses, maybe zero courses that taught us how to use Photoshop, Illustrator, InDesign, all the courses were about creating ideas and you know, the stuff that you're trying to express the rules of typography, history of design, whatever, not. This is the menu in Photoshop, you know what I mean? You don't you'll pick that stuff up. And I guess with with HTML, CSS and JavaScript, you do need to learn the tool because the tool is complex. But you don't need thorough knowledge of all the frameworks out there.
</p>

<p data-time="25:16"><b>Vasilis:</b>
No. And I think with Photoshop, there's some interesting stuff to learn. But these are not that much about Photoshop, but more about the principles that Photoshop is built upon. And this is light, how does light work? Hmm. So lots of, of the channels and things like that they're very interesting to understand, because once you understand them, you can actually stop upgrading Photoshop from Photoshop three, because everything that was possible with Photoshop three is possible. Or everything yeah. I once saw a lecture by a guy he was, he was really, he was an old fashioned photo manipulator from before Photoshop. So he did it with with I don't even know what these tools are. But these are scanning drums or something like that they used to talk about I don't even know what they are. But he was able to, to all the effects that we can do nowadays with Photoshop, he could do them back then without Photoshop.
</p>

<p data-time="26:23"><b>Espen:</b>
That's pretty amazing stuff.
</p>

<p data-time="26:24"><b>Vasilis:</b>
Yeah, that's incredible. The whole Photoshop is based on these techniques.
</p>

<p data-time="26:24"><b>Espen:</b>
Yes
</p>

<p data-time="26:24"><b>Vasilis:</b>
That's just digitization of the thing? So it is interesting to learn these things.
</p>

<p data-time="26:40"><b>Espen:</b>
Yeah
</p>

<p data-time="26:40"><b>Vasilis:</b>
Because then you know what you're doing. You're not just making pretty stuff. You know what, what actually a blend mode is
</p>

<p data-time="26:47"><b>Espen:</b>
Yeah, I to this day, I don't know what a blend mode is. Yeah. Just a generation generation too young.
</p>

<p data-time="26:54"><b>Vasilis:</b>
It is different ways that things can be transparent.
</p>

<p data-time="26:57"><b>Espen:</b>
Oh, yeah. That's a that's the layman's explanation, I suppose. Yeah. Yeah, there was a, there was a event thing that you invited me to Vasilis quite a long time ago, now. We're speaking to your students. Was it before the summer, I think, and I spoke to your students, and so did so this, this other guy nails, Nils yet. And I had a super interesting conversation with him. The day after a couple of days later on, on, on video chat somewhere. And we spoke about something he mentioned something that I think really resonates in terms of this discussion of design and code and the sort of overlap between the two disciplines. And he called it design intention, which, which, rather than your design file being what did used to be back in the day, like a very exhaustive, perfectly pixel rendered picture of the of the website, it is more of a visual guide to the intention behind the design. So you know, maybe if we were able to speak in terms of, I want this sort of behaviour, I want the padding to be airy, rather than tight, I want you know, I'll give you the sketch, and I'll explain to you how I feel this should work. But then you need to take that intention. And I guess use it when you when you implement. And I think the way they work at... I can't recall his agency.... it's a bit, you know, they can take some of that into the process. And I think if you have designers, developers working in the same room, this is something that might be possible as well.
</p>

<p data-time="28:47"><b>Vasilis:</b>
Yeah. And it's actually something that it's it's how I think about this is how I design, but I always design just with myself, right? And the designer, the developer, but exactly what Neal says this is, so this is also what I was trying to say about when you think about the for instance, the measure, you think, Okay, how small will it can it be in how wide can it be? And you can think about the padding in a similar way. Right? So there's a minimum and a maximum size there. So lots of it can be lots of this design can be just rules.
</p>

<p data-time="29:28"><b>Espen:</b>
Yeah. Yeah, actually, at Primate, we were a bit at least we were going in that direction. When I was there, where we would have rules we would even have rules for for, you know, vertical spacing, that we would define some unit and it was it's almost arbitrary, but you have a unit and then instead of saying all this space should be 15 pixels, you say no, that's like that's one and then you have a bigger space or that's a big or that's five you know, you have these like way wider terms, which means then When you're implementing something, you can see all that looks like, like a double space rather than a single space. And then you make a decision. And it's and it's correct, because it's not based on single pixels, it's based on overarching framework of Visual Thinking. And in that, in that process is also, you know, then then room to discuss the rules or to make decisions because you have this guiding principles or whatever. I quickly learned, of course, that stuff like that works when you've worked together as a team for a while, it does not work immediately when you start working with a new development team in a different country.
</p>

<p data-time="30:37"><b>Vasilis:</b>
Yeah, and it works when you have when you have developers that understand design.
</p>

<p data-time="30:42"><b>Espen:</b>
Yeah.
</p>

<p data-time="30:44"><b>Vasilis:</b>
Right. There's lots of developers, if you send them a file, they will just measure it with some sort of a measure tool and say, Okay, here, the sidebar is 272 pixels.
</p>

<p data-time="30:56"><b>Espen:</b>
Yeah
</p>

<p data-time="30:56"><b>Vasilis:</b>
Sidebar should be 272 pixels.
</p>

<p data-time="30:59"><b>Espen:</b>
Yeah.
</p>

<p data-time="31:00"><b>Vasilis:</b>
I but it's also—
</p>

<p data-time="31:02"><b>Espen:</b>
why why am I why isn't my design centred on the screen? Well, actually, if you look at your figma sketch, it is 272 on this side, but on the 282 on the other side, so you must have intended that otherwise, you wouldn't have made that mistake.
</p>

<p data-time="31:20"><b>Vasilis:</b>
It's true. Yeah, yeah. So you need a team.
</p>

<p data-time="31:23"><b>Espen:</b>
Yeah, you really need a team.
</p>

<p data-time="31:25"><b>Vasilis:</b>
And you need a good team to make good stuff. It's just It's that simple. And it's pretty hard nowadays, I think to find a good team, because they're not many people like Nils. Nils is incredible, right? He's a real CSS designer. Yeah, absolutely. Yes. dense. CSS is even maybe a CSS artist. He understands CSS. He plays with CSS. And he knows how to develop so yeah.
</p>

<p data-time="31:53"><b>Espen:</b>
He's the he's the unicorn right there. Yeah. And it's it is hard to find people all the time I get asked all you know, when is designers or developers, I'm even looking for developers. And it's it's where are they? Where are these people? That is I think, once again, it's your students facilities that will change the industry?
</p>

<p data-time="32:12"><b>Vasilis:</b>
Is not that many of them though.
</p>

<p data-time="32:15"><b>Espen:</b>
It's a slow start.
</p>

<p data-time="32:16"><b>Vasilis:</b>
I mean, if I ever look at this, every year, there's 50 students who do the minor web designer web development. And out of these 50 students, maybe 20 are good,
</p>

<p data-time="32:32"><b>Espen:</b>
Yeah
</p>

<p data-time="32:33"><b>Vasilis:</b>
and maybe five are really, really good.
</p>

<p data-time="32:35"><b>Espen:</b>
Yeah.
</p>

<p data-time="32:36"><b>Vasilis:</b>
And then of these five, most of them, will become developers who just do development stuff. So lots of talent goes wasted, because the industry doesn't know what to do with his talent.
</p>

<p data-time="32:49"><b>Espen:</b>
Now, it's—
</p>

<p data-time="32:49"><b>Vasilis:</b>
It's, it's really sad, it's really, really sad. And I really think that somehow, this is also something that I'm trying from within the universities, we should somehow try to change the industry, that they understand that this stuff come in, can be, it should be designed and should be. It should be be good enough. It's not good enough. It's not at all.
</p>

<p data-time="33:15"><b>Espen:</b>
Yeah, good luck with that.
</p>

<p data-time="33:17"><b>Vasilis:</b>
I am not going to hire you anymore
</p>

<p data-time="33:19"><b>Espen:</b>
Maybe, maybe the university anymore, maybe they need to set up a set up agency. I know other I think University of Edinburgh, they do like as a course for the students to have to make their own design agency, you know, and they have to get real clients and solve real problems and stuff. Maybe you can start there. And then you have a new model of of creating publications for the web instead of the old model. Because, you know, if you run into big shops, and there's like 200 people involved, how even going to begin to change the the process because this change that we're talking about, it's at some sort of basic, radical level, it's not a small tweak to the final step of the process. You know, it's it's a, changing the whole thing.
</p>

<p data-time="34:04"><b>Vasilis:</b>
I tell some of my students should, you should start a company.
</p>

<p data-time="34:09"><b>Espen:</b>
Yep.
</p>

<p data-time="34:10"><b>Vasilis:</b>
Don't go work somewhere. Start your own.
</p>

<p data-time="34:12"><b>Espen:</b>
Yep.
</p>

<p data-time="34:13"><b>Vasilis:</b>
And we'll send you our talents. Yeah, maybe maybe that will work in the future.
</p>

<p data-time="34:21"><b>Espen:</b>
Yeah.
</p>

<p data-time="34:21"><b>Vasilis:</b>
maybe this, this, this new school will somehow change stuff in the Netherlands? I don't know.
</p>

<p data-time="34:27"><b>Espen:</b>
I guess it's a matter of it's a matter of quantity of this new thinking. The more people think this way, the sooner these agencies will start popping up. And undoubtedly they'll produce better work.
</p>

<p data-time="34:42"><b>Vasilis:</b>
Yeah, well, the thing is, yeah, Will people recognise it as better work? What are people happy with?
</p>

<p data-time="34:51"><b>Espen:</b>
Yeah,
</p>

<p data-time="34:52"><b>Vasilis:</b>
I really don't know.
</p>

<p data-time="34:53"><b>Espen:</b>
Oh maybe not—
</p>

<p data-time="34:53"><b>Vasilis:</b>
Maybe limiting offers developers nowadays. They really like their frameworks, and they really like that development, optimization tooling, and they really like themselves. But they don't care about the people that work for it. Well, it seems to me like this, the trend is very much into what makes me happy. So I want lots of money. I want a big computer a good computer, and I want a nice workflow.
</p>

<p data-time="35:28"><b>Espen:</b>
Yeah.
</p>

<p data-time="35:30"><b>Vasilis:</b>
And I use frameworks that are so good. They think that whatever I do with it, the UX is fine. But it's not
</p>

<p data-time="35:39"><b>Espen:</b>
No,
</p>

<p data-time="35:40"><b>Vasilis:</b>
It's not good enough.
</p>

<p data-time="35:42"><b>Espen:</b>
I think that this new wave of talent coming from Amsterdam, not only will the will the the results or the or the websites be better from a design, accessibility, usability, even coding perspective, I think there'll be cheaper. I think a lot of the a lot of the things that we butt our heads against now in the current process in the old model, so to speak, that it's there, because it's saving us the agency's money, or it's avoiding risk, right, you have this waterfall model, because the designs are done here, they're signed off, then they get passed on, they'd signed off again, then it gets passed on to the developer. And it's not even if you have someone Super Mega creative and talented with a great understanding of design. There's nothing they could do at that point, like you've experienced in your career. Because all the decisions have been made. It's been signed off implemented. This is your budget. That's the end of it. And I think that's, that saves us from risk and you know, potential losses, but it also makes the whole process quite expensive to begin with.
</p>

<p data-time="36:52"><b>Vasilis:</b>
Yeah, so maybe, I mean, maybe that's fine for 90% of the of the clients 90% of the websites. I mean, they should, I mean, if you want to be a boring developer, be a boring developer, if you want to be a boring designer, be a boring design and make standard stuff just make stuff that other people have made before. I mean, it's always been that way. But what I'm missing on the web, is these this 10% that actually makes new stuff that comes up with fantastic stuff that plays with this stuff. Right? And it seems like even the clients that want that stuff, they don't exist.
</p>

<p data-time="37:32"><b>Espen:</b>
Yeah, I think you're right there. And I think that has always been the case. I think in every design course or every design student they look up to these amazing designers and they're like How the hell did you find a client that would let you do that on the cover of their magazine? You know, it's it's rare, but I feel like even humbler ambitions I feel like I have even humbler ambitions in that even the basic stuff, the stuff that's been done forever and the stuff that lots of my clients want, I just want a better way of doing that dude, I mean, I want to do that without all this faff without the back and forth and they're all sorry that's going to cost you now 30 hours of development time to fix this template. It's just come on. There must be a better way of doing this. Even the simple stuff.
</p>

<p data-time="38:20"><b>Vasilis:</b>
Yep. Agreed.
</p>

<p data-time="38:24"><b>Espen:</b>
I think I am going to take the rest of the day off, have a glass of wine.
</p>

<p data-time="38:31"><b>Vasilis:</b>
Yeah, I'm just going back to teaching so much easier than design.
</p>

<p data-time="38:37"><b>Espen:</b>
Oh my god, I like I like my new role now as more of a consultant but it is it's this exact this finding the talent, putting people to work together, creating even the most basic stuff of acceptable quality. It's so painfully slow and hard sometimes.
</p>

<p data-time="38:56"><b>Vasilis:</b>
Yeah.
</p>

<p data-time="38:58"><b>Espen:</b>
So send me your students.
</p>

<p data-time="39:04 "><b>Vasilis:</b>
Oh, I will send them all to you.
</p>

<p data-time="39:07"><b>Espen:</b>
Great
</p>

<p data-time="39:08"><b>Vasilis:</b>
Hope you have a big shed.
</p>

<p data-time="39:10"><b>Espen:</b>
No no they can can stick to work remotely. That's fine.
</p>

<p data-time="39:13"><b>Vasilis:</b>
Ah okay
</p>

<p data-time="39:13 "><b>Espen:</b>
Yeah, no problem.
</p>

<p data-time="39:18"><b>Vasilis:</b>
Okay, Espen it was really nice talking to you again.
</p>

<p data-time="39:20 "><b>Espen:</b>
Yeah likewise.
</p>

<p data-time="39:21"><b>Vasilis:</b>
Even though we did get a little bit agitated.
</p>

<p data-time="39:23"><b>Espen:</b>
Ah, that is the only way to get somewhere, to have some emotion. I speak to you next time—
</p>

<p data-time="39:23"><b>Vasilis:</b>
A Norwegian and a Dutch guy showing emotion that's—
</p>

<p data-time="39:34"><b>Espen:</b>
Yeah, exactly.
</p>

<p data-time="39:35"><b>Vasilis:</b>
It's rare.
</p>

<p data-time="39:36"><b>Espen:</b>
Or just two cranky old men screaming at the world.
</p>

</section>

<p class="closed-caption">Outro music by xyce</p>

</section>

<section class="episode-art fixed">

## Why does this page look like this?

Because this page is about coders, I wanted to give the design a bit of text-editor flavour. I've used a monospaced font—though I'm not entirely convinved of its readability—and colours inspired from my own editing environment.

During this process, I made a bunch of tweaks to the typography and layout in general. Some are visible when you arrive on the page, some are hidden behind a <code>.fixed</code> class. You can apply these tweaks by clicking the prompt above the transcript. Some are relatively noticeable, some less so. You may agree with some and disagree with others (for example the downsizing of the intro paragraph, a radical but necessary change in order to emulate the one-size-fits-all text editor environment).

What unites all the tweaks is that they're all the kind of micro-decision that's hard to communicate during a standard handover, and hard to predict in Figma. If more designers worked with code—or more coders worked with design—these kinds of details would be forgotten less often. (I think.)

<p class="sig">—Espen</p>

</section>
