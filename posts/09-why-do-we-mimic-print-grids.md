---
episode: 9
title: Why do we mimic print grids?
description: Is there a better, more native way of doing grids on the web?
audio: /sound/WM009-why-do-we-mimic-paper-grids.mp3
audiolength: 51778201 #mandatory, size in bytes! No idea how to do this in Eleventy )-:
duration: 00:43:01 #mandatory, duration in hh:mm:ss
date: 2021-08-25 #yyyy-mm-dd
# You can add (multiple) urls to stylesheets with 'csslinks'. (Use spaces, not tabs here)
csslinks:
  - /css/episode9.css
# If you want to add a block of preformatted code to the head you can use 'head'
# Beware: use spaces, not tabs.
#head: <link rel="stylesheet" href="https://fonts.typotheque.com/WF-023273-011643.css">
# If you want to add a block of preformatted code to the end of the document you can use 'foot'
# Beware: use spaces, not tabs.
foot:
layout: layouts/episode9.njk
intro: Since the dawn of the modern web, designers have been emulating traditional graphic design layouts and grids made for print. Why do we do this, and is there a better way?

shownotes:
  - <a href="#why-does-this-page-look-like-this%3F">About this episode's art direction</a>
  - <a href="https://en.wikipedia.org/wiki/Jan_Tschichold">Jan Tschichold (Wikipedia)</a>
  - <a href="https://en.wikipedia.org/wiki/Josef_Müller-Brockmann">Josef Müller-Brockmann (Wikipedia)</a>
  - <a href="https://vasilis.nl">Vasilis' Flexbox homepage</a>

---

<section class="episode-transcript">

## Transcript

<p class="closed-caption">[Intro music by xyce]</p>

<section id="script" class="script">

<p data-time="0:01"><b>Espen:</b> Last Sunday I was thinking, agh I need to come up with a new topic, a new question for you. And then I left it for another week. And now, I find myself 20 minutes past the start time. And my decision is grids, we're going to talk about grids. And, you know, we've had a brief conversation just before we started recording now, and you said how, you know, our tools are conservative these days, we've spoke about that in a previous episode. But then you also mentioned, you know, web design, or responsive design without media queries. And that's something that I'm interested in. And from a purely visual perspective, last episode, we also covered, you know, accessibility for people who can't see, well like, how do we experience the web, when it's just sound, for example. But now going back to purely visuals, how do we present content? And how do we use CSS Grid? And I guess, in a sense, the question is, we have this tool now, which is fairly new. My question is, why do we mimic grids as they are in print?

<p data-time="1:18"><b>Vasilis:</b> I think because that's what happens when you have a new medium, it happens all the time. So we don't know how to use it. And so we look at previous media that used it and then mimic it. And then by mimicking it, we learn. And then by doing it, we learn how to make it more natively. So if you've seen that with television, you've seen that with, with movies. I mean, the first movies were just place, you had one camera, which had the point of view of the audience of the play, and then they were just playing their piece, right? Like theatre, exactly the same thing—

<p data-time="2:06 "><b>Espen:</b> Speaking to the camera—

<p data-time="2:08"><b>Vasilis:</b> Yeah.

<p data-time="2:08"><b>Espen:</b> One microphone—

<p data-time="2:09"><b>Vasilis:</b> Or speaking to each other. And just having the point of view from the audience.

<p data-time="2:14 "><b>Espen:</b> Yeah.

<p data-time="2:16"><b>Vasilis:</b> And later on, they found out that you can actually switch camera points of views and that you can move the camera and that this adds a completely new layer to the experience. And this turned out to be movies and movies are completely different from theatre.

<p data-time="2:36"><b>Espen:</b> Yeah, this is a really good analogy, I think, actually never thought of it like that.

<p data-time="2:40"><b>Vasilis:</b> So and I think the reason why we mimic what has been done before is because we don't know what to do with it. It's new material. And then we just look at what so what did some great great designers do back in the days? And can we mimic that? And then that's it is a sort of an artistic research, I think. Right? You just mimic it and you look? Does it work on the web?

<p data-time="3:08"><b>Espen:</b> Yeah. Because obviously it works. It works in print, I would say it's been it's been 100 years or so 150 years, maybe since people started experimenting with different layouts in print, you know, there was a period of I don't know how long, like centuries where everything was centre aligned. You know, books, books looked a certain way.

<p data-time="3:34"><b>Vasilis:</b> Yeah, but books, they had this. It was a mathematical layout. So they, they couldn't measure because they didn't have a centimetre. Right? So they used cross lines, and just old fashioned mathematics decide what the Page Layout should be. So there's this this, it has a consistent whitespace. And that whitespace even still works on the web today. I think it's much more than we're used to. But But this it's a yeah.

<p data-time="4:16"><b>Espen:</b> Yeah, no, this this is that's a good point. And it was it was ratio based in a sense, you know, there was someone figured out that it works best this way. And then this is how we're going to do it. But then at some point, I guess, with the invention of the printing press, and modern tools and industrialization and you know, the modernists thought, hang on, maybe we can do something more better stranger, you know, more expressive. And then we had like this explosion of different layouts—

<p data-time="4:47"><b>Vasilis:</b> On the one hand, it's expressive, on the other hand, with paper, the weird the other the reason why layout is the way it is and why font size is the way it is is because of economics. Yeah, because if you use a large font, it's expensive. And if you use a lot of whitespace around the, the content, it's expensive, because you will need more pages. Yeah. So I think from a modern from when the modernists started working with print with paper, which was a much more economy based design view they had. So this is when grits actually started to happen. And they because it is easy way to fill up the page. So before that we had lots of whitespace around the text, because then you could write some notes, you could scribble some notes in the margin. And later on, they said, No, it's not necessary to scribble notes, we just need to fill it up.

<p data-time="5:57"><b>Espen:</b> Especially then with the with newspapers. I guess newspapers are the archetypal example of grids for economy anyway?

<p data-time="6:06"><b>Vasilis:</b> Yeah, definitely.

<p data-time="6:08"><b>Espen:</b> You know, you don't see many books with with lots of grids, at least not novels.

<p data-time="6:13"><b>Vasilis:</b> Not novels, but but art books,

<p data-time="6:16"><b>Espen:</b> Art books, magazines...

<p data-time="6:18"><b>Vasilis:</b> Schoolbooks...

<p data-time="6:18"><b>Espen:</b> Yeah, yeah, for sure. And then yeah, it's if you have a broadsheet newspaper, or any certain size page, you want to fit them in as many words as possible, you can't have them all in one line. So you split them up into grids. And then as a natural result, we start to see what we now know us grid based layouts, or you know, you're basically squares and boxes and columns just fitting in with each other.

<p data-time="6:44"><b>Vasilis:</b> Yep.

<p data-time="6:44"><b>Espen:</b> And so yeah, it's natural that we want to mimic that on the web, or at least have the opportunity to do that. Because a lot of people working on the web came from print, at least in the early days, you look to print for graphic design for for references. And I guess for as long as I've worked on the web, to some degree, it's like you want to certainly me, specifically coming from magazine design, I was a big proponent of reusing elements of magazine design in in web because I thought it wasn't really done properly, you know, we need we need to use headers in the same way we need intro paragraphs and pull quotes. And we should you know, there's a there's techniques used in magazines that are valuable on the web, because it enhances the reading experience. However, I think I also tried maybe a bit too hard to be like, or we should use multiple columns, because then we can fit more or it looks better, or you know, the line length is too long here is winded split it up in the columns. And I brought a whole host of other problems that are native to the web, but not on print, right. So then fast forward a decade or so and we get better tools. So we move on from floats, and whatnot. And then we suddenly we get Grid. And it's amazing, we can do literally whatever we want to do in terms of mimicking prints. But as soon as I started playing with it, I felt like obviously, breaking things up into columns is cool and good and, you know, necessary and useful in very many contexts. But because you're talking responsive, if you have 1224, or whatever columns you would want as a print designer on a screen, that screen shrinks. And suddenly you have to rewrite a grid, every breakpoints. And this is now I'm getting to this this idea of of design without media queries. And I feel like with grid, we're potentially on the doorstep of something like something new, something different. I don't know what it is. But we're still kind of using the same terminology we use in columns. We have gutters we have... Everything comes from Prince. So how do we break through and create something that's native to the web, but also maybe better or different than just a single column? down the middle?

<p data-time="9:08"><b>Vasilis:</b> So I think if you look at Grid, Grid, it's just an enormous spec. It's it's just ridiculous how much is in there. And but I think it's definitely Webby. So it's not just mimicking paper, there's absolutely certain ways to to make it super responsive. We used to have very responsive tools as well. I mean, if you look at floats, or display, inline block, you could make responsive websites without media queries with those. It was definitely possible. But I think the best one was multi column layout, which is almost never used, but it's it's actually a very nice spec, but it's it's pretty old. But you could say I want to use two columns, for instance. So you want, you could say I want to use three columns, it doesn't really work on the web, because if you have long text, you have to scroll down, and then you have to scroll up again, read the next column. So it doesn't work with long copy. But the nice thing about multi column is that you can also say, I wanted to be not shorter, I wanted to be a minimum width of 10 em or something, or 15 em, and then it becomes automatically it will be responsive, so it will make sure that the columns are never too small. And it will make multi columns if necessary, if there's room enough for multi columns, which I think is really nice, and then can Flexbox. And Flexbox is also very, very Webby, I think Flexbox is maybe the most Webby of all of them because it's it's in the name, right? It's flexible, it's meant to be flexible. But on the other hand, I think Flexbox is also pretty chaotic, because it looks at the content for to see how wide it should be. Which means that you have not as much control over the layout. So the Flexbox layout is a chaotic layout. I'm a bit disappointed that we don't have more chaotic layouts, because I think chaotic layouts are really Webby.

<p data-time="11:29 "><b>Espen:</b> Yeah, I mean, this is an area that I'm interested in to explore. Because in my brain coming from print, I really want things to align. And I used to when I studied we we learned about you know, David Carson, of course, famously didn't use grids. And you know, he was such a renegade. And then I dismissed that as being like, okay, one person can do it. And it was cool then and you know, now he's made a name for that. But now I'm kind of thinking, well, maybe maybe more people should be like that maybe like you say, with Flexbox is a chaotic layout. Why is it that we insist—

<p data-time="12:04"><b>Vasilis:</b> My homepage for instance, the vasilis.nl homepage—

<p data-time="12:08"><b>Espen:</b> Let me bring it up

<p data-time="12:09"><b>Vasilis:</b> Its Flexbox layout there is no grid there

<p data-time="12:14"><b>Espen:</b> Yes.

<p data-time="12:15"><b>Vasilis:</b> It's just based on how wide is each word, and then it goes to the next line if it doesn't fit anymore.

<p data-time="12:22 "><b>Espen:</b> Yes, exactly. Yeah, cuz I think—

<p data-time="12:23"><b>Vasilis:</b> And that's Flexbox.

<p data-time="12:25 "><b>Espen:</b> Yeah, you really run into problems. And I guess you run into needing something like grid, if you do want everything to align along certain invisible lines, you know, from the top of the page to the bottom, but what's actually stopping us from going nah let's just, we can we can design something that looks harmonious and cool and is inherently flexible. Certainly easier if we drop the this this need to make everything align, I'm obviously still not past it, I put gridlines in my figma files, I think maybe hard to decide otherwise, to be honest. But I can't shake this feeling that there are grids out there that are easier to implement, easier to, to use more native to the web. They're just not what we're used to. And I haven't really seen it yet. Maybe your homepage is good example of something that is a very Webby layout.

<p data-time="13:24"><b>Vasilis:</b> Yeah, and I think so if you look at grid grid is actually there are some very Webby ways to make responsive layouts with grids without media queries, so you can tell it to just repeat. So there's a certain complicated functions within grid where you can repeat and you can give each cell or each column a min and a max value. And you can use viewport relative units in there. And you can use calculations in there. And it gets really, really complicated. I mean, I've seen one liners of grid, which just make a complete, totally responsive and fluid layout. And it's just one enormous line, which looks like well, you need some sort of a programmers mind there. So—

<p data-time="14:22"><b>Espen:</b> Yeah, it's like you need documentation to understand the setup of the grid.

<p data-time="14:26"><b>Vasilis:</b> Which or you need to understand how to copy and paste. Just some, if you know where where the source is. You could just yeah, paste it. Yeah. And change some numbers. And it will work as well.

<p data-time="14:41"><b>Espen:</b> Yeah, it's a bit like Mike Riethmuller's fluid typography. He wrote some functions for SAS that I used, and it was like, I didn't understand the maths at all, but I copied and pasted a function and now my, my typography was completely responsive. I loved it. I thought this is it. Then obviously, clamp() came along. And now we use that. So yeah, I'm not saying anything will replace the functions of grid, but it is it gets really complicated. Once you get into it. I even struggled with your grid for the first episode of web materials, you know, just this idea of fractions versus auto main content, whatever it was, you know, it does take a brain to work out what the different things mean, and and definitely not just technically what they mean. But what they mean for the layout. Like, conceptually, what happens if I do this? So yeah, that's that's definitely where we need to explore I think.

<p data-time="15:39"><b>Vasilis:</b> And I think that that understanding exactly that understanding of what happens, then, Hmm, this is something that our tools don't solve for us our current tools. Mm hmm. They are still very much inspired by pages, I think.

<p data-time="15:58"><b>Espen:</b> Absolutely yeah.

<p data-time="15:59"><b>Vasilis:</b> Right. You, you, you take one size, and then you draw a design for that size of the screen.

<p data-time="16:07"><b>Espen:</b> Yep.

<p data-time="16:08"><b>Vasilis:</b> And, and I think so, for instance, what I really like and what's really webby is the combination of grids, and these complicated functions within grid, and viewport relative units, because I think fewer relative units are something that we don't use as much as we should. So for instance, for width, it's obvious, you can use viewport relative units for the head heading for for text, and it will be like a poster layout, it will always stay the same size, right? You can make beautiful Poster-like layouts with viewport relative units for the headings or for text. But then there's for grid, you can also use the viewport relative height, the height of the browser is something that we don't much take into consideration while we—

<p data-time="17:04"><b>Espen:</b> Yeah, I've often thought that that we were missing out with our even just with media queries, really, we're always basing everything on the width rather than going now if it's on a tall, long monitor, I want to stretch it, more padding whatever. Yeah.

<p data-time="17:20"><b>Vasilis:</b> Yeah, so I use viewport relative units, for instance, for the whitespace. Around the copy.

<p data-time="17:26"><b>Espen:</b> Yep.

<p data-time="17:27"><b>Vasilis:</b> This is something that I use a lot. So it stretches depending on the size, the height and the width of the of the viewport. If I have a very wide screen, I often place the the title of the website to the left, for instance. Because doesn't make any sense to use expensive.

<p data-time="17:50"><b>Espen:</b> real estate on top. Yeah, you—

<p data-time="17:53"><b>Vasilis:</b> use just use the whitespace that's left. So things like that. And then you can use things like viewport relative units to scale the heading to always fits really nice tools, very very Webby tools. And it makes extremely Webby layouts. And it's really something that you Well, it is again inspired by poster design.

<p data-time="18:20"><b>Espen:</b> Yeah.

<p data-time="18:20"><b>Vasilis:</b> By using now that we have viewport relative units, we can actually be inspired by posters before that we couldn't we couldn't, because it would break at some point.

<p data-time="18:34"><b>Espen:</b> Yeah, let's use JavaScript, the charge widget for—

<p data-time="18:38"><b>Vasilis:</b> lots of media queries. Yep. Yep.

<p data-time="18:40"><b>Espen:</b> Yeah. But that's also shift, isn't it? This idea of you know, in fact, this the very same conference where I met you, there was a pretty good talk, actually about some case study of of a responsive layout. And it was very immediately rebase. And he actually argued, I think, there's no reason why you can't use just hard pixels as your column widths. And then you just have six different layouts. Like why not, it looked really nice, but obviously—

<p data-time="19:06"><b>Vasilis:</b> it was really, it was a very good talk, because what he even said that was they even gave the photographer instructions on how to make the pictures of the people. So they had portraits of people. And the photographer was given the order to make the centre composition with the person right in the middle, and three, basically a three column picture. So left and right should be equal space. Yeah, the person in the middle should be the same. And this way they had the picture of the person that was the basis of the design. I thought it was, indeed a brilliant talk.

<p data-time="19:52"><b>Espen:</b> Yeah, really interesting. But also really printy if we could use that word in the approach right, now—

<p data-time="20:02"><b>Vasilis:</b> It was very conceptual in the approach. So they said it was a website about the the Norwegian, I think it was some sort of a cancer hotline. So if you have a problem, if you have cancer yourself or a family member has cancer, you could call them and they would talk to you and listen to you. And they thought it was really important that you know who you are talking to. So the person who was on phone duty at that moment would be on the website, when you call them. So this was—

<p data-time="20:37"><b>Espen:</b> That's, that was was amazing.

<p data-time="20:40"><b>Vasilis:</b> Yeah. And then they said, the picture of the person, that's the most important thing. So that always made sure that the the different pictures that were always right there, you could always see them. And so the complete layout was based on the picture of the person. And that's why it was pixel based.

<p data-time="21:04"><b>Espen:</b> Yes, but it could—

<p data-time="21:07"><b>Vasilis:</b> And not the text, that was the main thing on the website.

<p data-time="21:11"><b>Espen:</b> Sure. But obviously, with the if the picture scales, you could have scalable columns to write us, I remember thinking you could make that flexible in between the breakpoints. And for a while I wrestled with this idea, should it should it stretch and shrink in between breakpoints or should it not. And for the longest time, I thought, it doesn't really matter, maybe it still doesn't matter. But now at least, we have the tools to do so I come across the issue. Sometimes when I'm working with external developers, where, you know, we do some sketches for desktop or you know, a large screen, we do some sketches for mobile, we talk a little bit about what happens in between. But what I sometimes see is with with pure developers is that you have the font size of the header. It's this big on desktop, and it looks good for a certain screen size. And then suddenly, at 900 pixels, it's suddenly mobile. And it's Yeah, looks weird. It's tiny. It stretches all the way across the monitor, like what's going on here. There's nothing in between this state in between. So then do you do two or three media queries in between? That seems like hard work, right, either both for the developer and for the designer to design 10th versions of the same page. So obviously, fluid typography to me makes a lot of sense, where you have the minimum size and the maximum size, and somehow you scale in between.

<p data-time="22:34"><b>Vasilis:</b> It's actually the in between, that's always the problem. And this is something that I tell my design, my design students, I tell them, okay, you have these two designs of the extremes, so small screen and a very large screen. But what does it look in between? Because almost everybody will be somewhere in between? Most people don't have enormous screens. Most people don't have the smallest screen. But everybody is somewhere in between there. So does your design, does it solve this problem? Does it look good in between? So we make sure that it looks really good on the extremes. But then we just leave it over to developers of all people to make sure it looks good for everybody, which I think they are not the right people to solve this problem, because it's a complicated problem.

<p data-time="23:26"><b>Espen:</b> Yes. And also—

<p data-time="23:28"><b>Vasilis:</b> maybe need to be a completely detailed design of what it should look like in between for every pixel, but maybe you could some sketches might work. A description of what should the the font do? What should a column do? What should a grid column do? Things like that?

<p data-time="25:53"><b>Espen:</b> I think in this, this is where it really depends on who you're working with, and how much of a developer they are, contra, how much of a frontender or designer they are. Descriptions work up to a point I think the problem is there's so much subjectivity. And this is where we run into the issue of of working in non webby tools like figma. And then the end result is web, it's it is cold, it's flexible, it's whatever you want it to be. So you're not really so much saying this is what it should look like. It's more like this is how it should behave. Right? Of course, we know that we know how this website feels and looks. But we need to also express how it responds how it behaves. And that is a big topic of like designers should code or coders should design or there should be some hybrid or it's hard I think to get across all these things with—

<p data-time="24:50"><b>Vasilis:</b> I think there should be an extra role, the role that we used to have with magazine, magazines, I think you used to have we called them the desktop publishers, I don't know how they're called in real English, but these are the people that are not the art director, the person who actually just don't make sure that everything looks good. So they make the outline around the image where the text floats around, and they decide where the image goes. And they decide the grid and things like that. And they make sure that everything fits nicely. And they play with font size. And we don't have that role on the web. This would be a CSS designer.

<p data-time="25:34"><b>Espen:</b> Absolutely, yeah. Yeah.

<p data-time="25:35"><b>Vasilis:</b> And it would be somewhere I guess, a junior or a media role, and maybe even a senior role, where they take the design and make it really Webby.

<p data-time="25:50"><b>Espen:</b> Yeah. Yeah because I think—

<p data-time="25:52"><b>Vasilis:</b> But that role is done with by frontenders who are not really designers, there are more, most of frontend developers are more developers instead of designers. And yeah, this is a real design role.

<p data-time="26:05"><b>Espen:</b> Once hundred percent agree, because it does exist now in print, still, at the last place at work, they were, we didn't have that position in the company. But you know, we talked about people like that, whether we need someone like that. And I think here in the UK, you call them art workers. It's kind of a hybrid design, production role where you're not, I guess you're not left with the creative responsibility. But you're left with a finishing responsibility and like putting it together. But I think what makes it work in print now is that there's this is common knowledge or common pool of of tools and conventions that you can, it's inherent in, you know, you trust a person who's done it for a while you trust them to use the grids. And to do this, there's this this whole, yeah, pool of conventions that everybody kind of knows and feels. And the designer, the art worker, they may not do the final outputs, but they could have done it if they had to. Whereas in in the web, there's, there's such a divide in between the designers mind and the layout and the sketch and figma over here on the right hand side. And on the left hand side is this murky code that the designer often has no idea how it works, right? So there's a massive knowledge gap, meaning the communication becomes difficult. And even if you had someone like a CSS designer, now that person I think that that's way more than a junior, because there's real knowledge there that the designer doesn't have. So it's, it's real tricky.

<p data-time="27:46"><b>Vasilis:</b> Yeah. It is too—

<p data-time="27:47"><b>Espen:</b> And I feel like like you said earlier on, I struggle with these thoughts about the grid, and you're like, Well, everybody works like that now. And that's true, too. Like, we were kind of not even scratching the surface of what we can do with with with the web. Yet the whole we have an entire industry based on a process that is inherently slow and prone to misunderstandings.

<p data-time="28:12"><b>Vasilis:</b> Yeah, and this is, again, why I think, why I would really love to see more artistic designers on the web who use CSS as their material and not so much. developers who have a little bit of, who are studying graphic design, right? This is what I used to do. I used to study graphic design books from ancient or old graphic design books and see if I could translate those things into code. So I studied Tschichold, and I studied Müller-Brockmann, these are all these old grid designers, and they have all these. It's almost CSS functions they wrote for what an ideal measure would be. Right? Yeah. It's all based on these people. Yeah. And I just translated it to CSS. As I used to do that, but more of this more people who would you study this. And what we talked in the beginning about that you start with reproducing what they made, start mimicking poster designs, if you look at an old poster, and I mean, there's some incredible posters that have been made. We can make all of these posters on the web, nowadays, all of them, and we can they have fun technology, and they can be responsive. So we can add layers of interactivity to these posters. I mean, some of these old poses, they're just screaming to move, right. We can make them move.

<p data-time="29:44"><b>Espen:</b> Yep.

<p data-time="29:44"><b>Vasilis:</b> We can make them interactive. Yeah, we can make the letter dance. Not just a suggestion that they dance. They can really dance in CSS. He says, we can interact with them and we can add extra layers and we can transform them, this is really something we can do. But the tools that we have nowadays cannot do this for us.

<p data-time="30:06"><b>Espen:</b> No. And I think—

<p data-time="30:07"><b>Vasilis:</b> On the contrary, they, they, they, they try to solve a completely different problem, which is, I think, is making something that works in the system. This is something that our tools are pretty good at. But there's much more than systems—

<p data-time="30:22"><b>Espen:</b> There is much more than system. And obviously, we're veering into a completely different conversation here. But I do want to say that this systems based approach works really well, in an environment where there are lots of people involved. And there's lots of communication happening between a team of designers, a team of marketers, a team of developers, a team of whatever you need the system in the base. So everybody speaks from this shared truth in the modules worked in a predictable way, etc. Because otherwise, it will be extremely costly to, to design something, then check it off with marketing, then hand it off to developers complex explained the whole thing back and forth five times because it didn't look the way and the What about the in between state and blah, blah, blah. So we have these systems that are making it easier to to build and design at scale.

<p data-time="31:20"><b>Vasilis:</b> So my hopes are not that the large companies where I used to work, I mean, the hopes are at the smaller companies where one person or a very small team of people do everything and work together directly with a client who's open for experiment.

<p data-time="31:39"><b>Espen:</b> Yeah.

<p data-time="31:39"><b>Vasilis:</b> Or, or the old fashioned way, which we used to have large organisations. Definitely in the Netherlands, I don't know how it was abroad, but definitely in Switzerland, as well, where large organisations would hire a really, really, really good artist. And they would give a big assignment to this artists. So for instance,our Dutch.. What's it called? The post office, they had, they hired the best designers in the Netherlands. So the, their branding was just incredible. It was really, really good. And it was really out there. Just like our money, we hired the best designers, but not, not conservative designers. No, we hired the most innovative designers. That's why the Dutch money was incredible. It was really, really beautiful.

<p data-time="32:39"><b>Espen:</b> Yeah.

<p data-time="32:41"><b>Vasilis:</b> Switzerland does that still, they have their own money, and they have beautiful money, because they hire exceptional designers to do that. So this is something that we could of course, try as well, right? As big organisations, they could hire for smaller projects, they could try and hire more artistic designers to come up with new ways, novel ways to do stuff.

<p data-time="33:07"><b>Espen:</b> Absolutely. But this is where I think if you're the post office in in the Netherlands, I think you can afford to spend a fair chunk of money. If you're a smaller company, and you want a website, even if you want it to be creative, or different or stand out, I think there's a real cost issue in today's process where you hire someone to design it conceptually, it's really beautiful, it's amazing. Maybe it gets passed over to a more wavy person to make it a bit more Webby. The problem occurs when when all these when the when the grid isn't standard, when you have a very functions based grid, or you have a very complex behaviour to solve something to make the layout actually maybe quite simple. Communicating all this to a set of developers costs a lot of money, and making the letters dance costs a lot of money, all these extra layers that are in theory, quite simple, cost a lot of money, because you now kind of need to communicate across two or three disciplines in order to make them happen.

<p data-time="34:09"><b>Vasilis:</b> That depends. I mean, if it's a really small website or ever look at the answers to some of my students, they can make this stuff. So they don't have to first open up illustrator, they can just start designing in the browser. And so this is actually I think it's pretty cost effective.

<p data-time="34:32"><b>Espen:</b> Ah Absolutely!

<p data-time="34:33"><b>Vasilis:</b> Working in the browser and making a website right away. And then they know how to use eleventy, for instance, and they just make it any level like we do, right? Yeah, it's pretty cost effective. So if you have people who are schooled into designing this way, and I think then the problem is there's no CSS design education anywhere in the world.

<p data-time="34:59"><b>Espen:</b> Except what you're doing—

<p data-time="35:00"><b>Vasilis:</b> Except what I'm doing. But there's not maybe there's a few. But there's a try to talk to real art schools in the Netherlands and they're not interested. They don't care. Yeah, it's just not the material they care about.

<p data-time="35:14"><b>Espen:</b> because there's nerdy—

<p data-time="35:16"><b>Vasilis:</b> Maybe I don't know.

<p data-time="35:17"><b>Espen:</b> It's maybe it feels it feels maybe murky or foggy or something I remember before I touched code at all, it feels impenetrable, because it's, it's so different from what you've used your whole life. But I hopefully it'll change I think what you're doing with your students, it hits the nail on the head, it does solve this problem, because it is cost effective, effective. Obviously, being a being a more visual designer, I think the best approach would be to combine your ideas, you sketch something out in figma, and then you just build it yourself. But the concept is that you build it yourself. That's a core thing, isn't it, you want to show something to a client. Here's the prototype, you want explain how something works responsively well, here's, here's HTML, you see how it works responsively.

<p data-time="35:18"><b>Vasilis:</b> I like I like the fact that you use the word sketch in figma, sketch it in figma. Because what I used to see a lot with visual designers is that they just keep on working on that visual design that they're going to present to the client until it looks absolutely gorgeous. I mean, every button will be polish. And they will polish every button for hours just to make it shine. Right. That's that's how my visual designers used to work in Photoshop back then. And that takes hours, it takes a long time to make every button shine. But if you sketch in these visual design tools, and you know when to stop, and I think you can stop pretty early. I mean, it's I think paper is actually pretty good design tool as well, just sketching on paper.

<p data-time="36:55"><b>Espen:</b> Yeah, yeah

<p data-time="36:56"><b>Vasilis:</b> in many ways, it will be enough

<p data-time="36:58"><b>Espen:</b> If you're, if you're the person who's going to implement this. So you know, you know what you're sketching, and you know, where you want to get to, and you have the vision, you just need to test some colours, or check some sizes of typography, just do a quick, you know, surveys just to see if you can, if this works, this idea you have in your head. At the moment, you find that, yeah, this could work. If you do it yourself, you can stop there in figma. But, as you know, for a lot, if not most of designers these days, you don't do it yourself. So not only do you have to convince the client because you can't show them a sketch like that, they have to see something that looks like a website. But you also have to communicate the design to the developer. And sadly, there's a lot of there's a lot of stuff that naturally is the responsibility of the designer. So if it's not in the sketch file, or the figma file, it just simply doesn't get implemented. So then you end you have to do this, you have to do the most perfect buttons with the most perfect hover states across three different screen sizes. At least.

<p data-time="38:05"><b>Vasilis:</b> That's why I don't expect the really Webby stuff to come from larger organisations that work in this more waterfally way working. And I think the real solution is in small teams that are just in the same room and they work together and they talk to each other. And even if the designer is working on a new project, they're still there. And they can still come over and help a little bit with the design problems that the developer faces later on in the project. Yeah. And so I think that the more Webby designs should be expected from smaller teams. I just haven't seen them that much recently. There are a few—

<p data-time="38:50"><b>Espen:</b> There is stuff happening of course, yeah, I just think it'll take a while before it becomes mainstream, your type of education that you do is, I think necessary to just create the generation of designers that are that can work with code. Well, so we veered off track there. But I think it's all related. We mimic prints because you know, naturally we look at what's come before and I think in a way it holds us back. But it also pushes us to to explore the technology that we now have, right?

<p data-time="39:26"><b>Vasilis:</b> Yeah. Yeah. And I think we should mimic what we what has been before because that brilliant people have investigated that. But then mimic it and always remember that this is something else and then add the layers that we can add right responsiveness. interactivity. Yeah, time. We have time on the web, crawling these things that don't exist on paper, but we do have them. Yep. So—

<p data-time="37:55"><b>Espen:</b> I met you mentioned the Tschichold there earlier. Yeah, and and I've read, skim through the new typography when when I was a student, you know, it's a, it's a seminal book. But I think maybe it was a bit, maybe I should have another look at it now. It's a very important piece of work. But I think that period, it marks this this transition from old to new, where you had one layout, and that was it. And then you had rigid rules, but still more like a framework for creating modern layouts. And that kind of that became what we now do in print. Right? They lasted for a century, and probably going to last another century. Yeah. And I feel like maybe we're right at that point. Now, on the web, where we have the old web, it's mainly centred column, you know, it's, it's a fairly established way of designing websites now. We've just received this technology, which is giving us powers far beyond what we're even able to imagine right now. And maybe there someone will come along maybe, maybe you Vasilis, and write the new new typography and established you know, the, the more progressive way of making web layouts.

<p data-time="41:12"><b>Vasilis:</b> Let's hope that person wakes up soon.

<p data-time="41:16"><b>Espen:</b> There'll be one of your students for sure.

<p data-time="41:23"><b>Vasilis:</b> Wow, Espen this was a very nice conversation again, it was wasn't it?

<p data-time="41:26"><b>Espen:</b> I think we need to talk. I think we need to dedicate a whole episode or several to process.

<p data-time="41:34"><b>Vasilis:</b> Ah, you that know I really don't like process...

</section>

<p class="closed-caption">[Outro music by xyce]</p>

</section>

<section class="episode-art">

## Why does this page look like this?

For this episode I've created a stark, simple layout inspired by modernist design from the 20th century. I've used Helvetica (or Arial, if you don't have the original!), I've used bold colours and diagonals, but other than that the layout is pretty much the same as before.

In order to make the grid a visible component of this episode's art direction, I made empty divs with borders on them and manually calculated the height of elements to make things line up. If I was a real front-end developer I probably wouldn't do this—but thankfully, I'm not. If nothing else, hacking things together like this highlights a big difference between print and digital design:

In print design software, grids are manipulated at will and switched on and off like a background layer to guide the positioning of elements. In CSS, however, grids are an intrinsic part of your structure. They don't <em>guide</em> placement, they <em>are</em> the placement of elements.

This difference alone should inspire us to start thinking about CSS grid not as a means of recreating print layouts, but as a powerful tool to structure content on the web in ways only CSS can.

<p class="sig">—Espen</p>

</section>
