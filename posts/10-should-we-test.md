---
episode: 10
title: Should we test?
description: We wonder if, and why, we should test our designs.
audio: /sound/WM010-should-we-test.mp3
audiolength: 48398893 #mandatory, size in bytes! No idea how to do this in Eleventy )-:
duration: 00:40:12 #mandatory, duration in hh:mm:ss
date: 2021-09-25 #yyyy-mm-dd
# You can add (multiple) urls to stylesheets with 'csslinks'. (Use spaces, not tabs here)
csslinks:
  - /css/episode10.css
# If you want to add a block of preformatted code to the head you can use 'head'
# Beware: use spaces, not tabs.
#head: <link rel="stylesheet" href="https://fonts.typotheque.com/WF-023273-011643.css">
# If you want to add a block of preformatted code to the end of the document you can use 'foot'
# Beware: use spaces, not tabs.
foot:
layout: layouts/episode9.njk
intro: As designers we use all kinds of patterns. But has anybody ever really tested these? And did we consider everybody when we did? In this episode we talk about the testing we do, about the testing we did, about assumptions. And we tell some tales about testing gone horribly wrong.

shownotes:
  - <a href="#why-does-this-page-look-like-this%3F">About this episode's art direction</a>
  - <a href="https://usabilityhub.com/">Usability Hub</a>
  - <a href="https://exclusive-design.vasilis.nl/more-death-to-more-bullshit/">About testing with blind people</a>
  - <a href="https://xyce.bandcamp.com/">Music, as always, by xyce</a>

---

<section class="episode-transcript">

## Transcript

<p class="closed-caption">[Intro music by xyce]</p>

<section id="script" class="script">

<p data-time="0:05"><b>Vasilis:</b> I have the same issue you had last week that I don't really know what to talk about.. Well of course I know what to talk about but—</p>

<p data-time="0:15"><b>Espen:</b> I guess it's gonna be about accessibility.</p>

<p data-time="0:16"><b>Vasilis:</b> No, no, no. Well yeah. So I had two topics that I was in doubt about. So either about performance or, and this one, it's going to be. We're going to talk about testing.</p>

<p data-time="0:38"><b>Espen:</b> Oh, wow. Okay.</p>

<p data-time="0:40"><b>Vasilis:</b> So, should we test our designs? </p>

<p data-time="0:49"><b>Espen:</b> No. </p>

<p data-time="0:51"><b>Vasilis:</b> Oh, good.</p>

<p data-time="0:52"><b>Espen:</b> No, I'm joking. No, yeah, no, of course we should there. But how it testing to me is, in the same way as performance in a sense, it's like, really, the answer is so simple, yet, it seems so complicated actually get anything done with it, it seems to get lost in the whatever standard processes that are out there. Unless, you know, part of my job, we do product development. And so we, we do some designs. And so we talk about what we want to do we design something we sort of tested, quote, unquote, in house, you know, we make a prototype, click through it, everybody gets some input, we show it to people, and then we kind of iterate a little bit, and then we build whatever the thing is like a prototype, and then maybe we not release it, but you know, a soft launch or something. So we have something that's actually built, hooked up to a database, and then we tested some more. And then when we're when we want to do something, or we want to get real feedback, we released it to, you know, a few 1000 users maybe, then we get proper data. And it's great. And we iterate from there on and that process, I think, is really good. It's missing, we're missing a step in there, where we show it to 50 users, for example, although we sometimes use the it is called Usability hub, kind of online testing thing. I've used that a few times just to test simple prototypes, you know, do you do you know where to click next, that sort of thing. But to me, this is a, this is a good process it and it works. But I think it works. Because it's a small team, we do product development, there's no sort of necessarily deadlines or budget constraints, you know, we work until it's kind of ready, we tested, we do some more, we can always come back and change it, basically. And we're all on board with this one product. The other jobs I do when I work with clients, I'm beholden to whatever process is out there, and whatever budget is there and whatever deadline and whatever CMS and whatever developers, there's always something that I can't control. And testing seems to be for the most part, we just do it in house, you know. A very common process is we I speak to the client, I get some requirements, we do some sketches, we show the sketches to a development partner, they give us a quote, we go back to the client, they say, Okay, that sounds good. We start designing more, we sort of finish it again, quote, unquote, clients happy we send it over to the to the developers. And then a few weeks later, they say, okay, it's up on staging, for you to test. So somehow, it's like, it's it's on the client to test their own product. That's one thing. And not only that, we're also testing them to see, did they implemented correctly, are the buttons where they should be is does everything work? It's not really user testing. In terms of the user experience. It's more like quality assurance testing. </p>

<p data-time="3:50"><b>Vasilis:</b> Yep. Yeah. </p>

<p data-time="3:52"><b>Espen:</b> I'm, I'm waffling now,</p>

<p data-time="3:54"><b>Vasilis:</b> really good. So there's many, many aspects that you're already covered. They're really good. So there's all kinds of testing, of course. So good to hear that in your product work you do some usability testing and user testing, or testing with humans. That's really good. I guess. Because in my memory from when I worked, when, I before I became a lecturer, we never really tested so there were a few people at the organisations where I worked who really wanted to test so there was a guy who was actually setting up a test lab. But yeah, to be honest, we never really tested and everything was based on prior experience. So we know this works, or we assume this works. And that's, and we'll implement it again. Or this looks cool, we'll implement it. </p>

<p data-time="4:56"><b>Espen:</b> Yep, </p>

<p data-time="4:57"><b>Vasilis:</b> Something like that. That was the process. And I'm not sure if if things have changed, but I do. To be honest, I think that's the main process in most organisations still</p>

<p data-time="5:13"><b>Espen:</b> I agree, I don't have a, you know, I've worked for a handful of companies and obviously, you know, maybe hundreds of clients. And that's kind of it. But my my impression is without ever having worked at any of these bigger product companies, is that once you do product, you kind of have to test more just by you know, the whole business falls apart if this product doesn't work properly. And and everybody knows developing a product, no matter how simple you think it is, it takes a long time. And you're going to pit stumbling blocks, even internally. So I think there's a almost naturally built into the process. There's some testing, yes, at some point, you need to build a prototype and put it out there. And then you get feedback, right? Yeah.</p>

<p data-time="5:57"><b>Vasilis:</b> So what you see a lot is AB testing, or even ABC testing, or how you call it multivariable. Testing. That's something that I think happens a lot at large products. Human testing, I'm not... probably yeah, they should, should be doing I don't know. So what I see at my university, at least is always we tell our students, you have to test with real people. And then people that test with are the parents. And they're just the the student who's sitting next to them. Yep. And it's not real testing, of course. I mean, it's better than nothing, you get some feedback. But I always tell them just to travel by train, as the person next to you in the train. are they thinking about it? Do they understand it? Right, that's a much better test than asking your parents who are probably really proud of what you're doing.</p>

<p data-time="7:07"><b>Espen:</b> Yeah. Yeah. To be honest, I think parents are, it's better to ask your parents than your colleagues, for starters, but if you ask your colleagues or your fellow students, yeah, you're likely to get someone who's similar to you in at least one big way, which is, you know, they know design or development, whatever it is that you do, you're going to get someone from the same perspective. Yeah, if you ask, you can ask a colleague across the organisation, like someone in the works in accounting, or you know, someone just outside of the project often helps. Yeah, and this, at least in my experience, this happens, like a lot. I usually do this, you know, I get a second opinion. Now that I work from home, I get second opinions from my wife and my daughter, which is invaluable sometimes, although my daughter has a tendency to she's too afraid to hurt my feelings. So she's like, Oh, yeah, no, this is great. It's really is. I understand that. Whereas actually, what I want this, you know, I wanna I want people to point out where the flaws are. So my wife's really good at that.</p>

<p data-time="8:10"><b>Vasilis:</b> Yeah. My wife as well, really good. I make stuff I asked her. Do you get it? And she just, she destroys everything I make it.</p>

<p data-time="8:24"><b>Espen:</b> But that's, that's great. Yeah. But then the question I think, is you asked one person who is not a designer, or a developer, who's also not invested in your product or project or whatever the thing you're making. So you get a really, really valuable opinion. And of course, if that is actually this bit here, I don't get it. Like, why is that like that were, you know, explaining to me then then you have something to to, you know, improve? Which is great. But how many people that's still only one opinion, right? If you ask 10 people, you might get 10 opinions. And they might be different if you ask 100. But you you, what I'm getting at is I think the more people you ask, the more clearly you can see a pattern in the feedback. So if you only ask one or two or three, you can get some feedback. But maybe there's no clear pattern. Maybe it's harder to understand what the biggest thing to fix this or how to prioritise what you do next. So is there a golden number of how many people you need to—</p>

<p data-time="9:22"><b>Vasilis:</b> I think is even a number which is five is enough. With five you have probably 80% or 90% of the issues? You found them. And I think simple number is one is better than none. </p>

<p data-time="9:40"><b>Espen:</b> Yep. </p>

<p data-time="9:41"><b>Vasilis:</b> And then a few is better than one and then, but don't waste your time on asking 10 people when you found lots of issues, lots of obvious issues that you didn't see before.</p>

<p data-time="9:56"><b>Espen:</b> Exactly. You might as well weed those out before you branch out. Yeah, yeah.</p>

<p data-time="10:01"><b>Vasilis:</b> Yeah. So I think at most five</p>

<p data-time="10:07"><b>Espen:</b> More than more than five is a waste of time. Almost Right.</p>

<p data-time="10:11"><b>Vasilis:</b> Mayne not, but I don't know, I think five is enough. Yeah. Yeah. Yeah,</p>

<p data-time="10:15"><b>Espen:</b> I think the what we're getting at is, you know, more than more than yourself, already, you've done a big job, you know, get someone outside of the project, and then you get valuable feedback. And if you multiply that by five, it's really, really good.</p>

<p data-time="10:30"><b>Vasilis:</b> Yeah. And what I found is that it's, it gets even more interesting when you test with people who are not behind their computers all day. Hmm. Because we are, I mean, I look at my computer screen all day, from the morning till I go to sleep. And but there are many people who don't do that. And they, but they do use our products. So yeah, they do depend on what we make. I mean, they have to use it. And I think these are, these are people that are harder to design for. They don't know, the patterns that we use, for instance, they're not obvious to everybody. So and I think when you test with these real people with what maybe we could call them normal people. Then you find stuff that, well, the unknown unknowns. I found that really interesting. So testing with your neighbours, for instance, and they come up with with stuff, just observing them. And it's just it's obvious. There's the button. Yeah,</p>

<p data-time="11:48"><b>Espen:</b> Click the bloody thing.</p>

<p data-time="11:50"><b>Vasilis:</b> It's just not there. </p>

<p data-time="11:51"><b>Espen:</b> Yeah, </p>

<p data-time="11:52"><b>Vasilis:</b> Yeah. I think it's something that we tend to forget that, that there's just normal people using a product.</p>

<p data-time="12:02"><b>Espen:</b> Yeah, because we have, like you said earlier on there, there's, there's a tendency to design from assumption. And let me be the first to say that, of course, we have to design from assumption. I mean, I've been doing this 15 years, what else am I going to design from right? You got to make decisions? Yeah. But I guess if you if you rely rely on that, and only that you missing out on all these quirky, weird, normal perspectives, in the sense that we have websites that we visit, and we see I need a I need a pattern for this drop down menu. How do people do that again, and then maybe you visit your favourite products that you go to everyday you check out how YouTube does it and or in Gmail, they did like this. And there's all these tools that we maybe assume that everybody not only uses, but they use them a lot. And I think obviously working on the web, we use the more than most. So there's maybe there's maybe 50 patterns that we think everybody knows really, really well. Yeah, like you say they don't.</p>

<p data-time="13:03"><b>Vasilis:</b> Yep. Yeah. So this is something of course, that I've been from an accessibility point of view, I've been testing with real people as well. And I had the assumption that if you just use proper semantics in your websites, yeah, that a website would be accessible to for instance, people with a screen reader. And then when I tested it with, I had tested it with some real nerdy screen reader users. So real, real power nerds. And, indeed, they just confirmed what I thought and they they just raced through the website. Then I tested it with a normal person who turned blind few years ago. Yeah. And just it was such a pain to look at. So the first thing we did when so he showed me so I just asked him some of the important stuff that you have to do. Can you show me how you do that? So he said, Okay, I'll show you I have to do some banking, he had to send 2000 euros, quite a lot of money at the set it from one bank account to another bank account. So he logged into his online banking environment, and he just couldn't do it. There was no way that he could send 2000 euros from one account to the other. It was impossible. So I did it for him. Can you imagine that? This total stranger comes into your house. And the first thing you ask him to do is can you please send 2000 euros and I won't look. Right, yeah. So a normal thing like, like sending money, which shouldn't be that complicated. There are some steps involved, of course, and there are some, some some. But but that that was impossible. Then ordering groceries, impossible, but also just reading the news. So it was it was just such a horrible experience, my whole web view, the so the view that I had of the web, the idea that the web is accessible to everybody. It just collapsed on that day. And</p>

<p data-time="15:41"><b>Espen:</b> so this was a bit of sort of general research where you asked about, you know, not your own design products. But you know, what, the web in general.</p>

<p data-time="15:51"><b>Vasilis:</b> Yeah so I was just observing just looking at, so I was trying to find things to solve. And then it turned out that everything was broken—</p>

<p data-time="16:01"><b>Espen:</b> Needs fixing. </p>

<p data-time="16:03"><b>Vasilis:</b> There was just too much work to be done. And then just smaller things like, for instance, we, this and, and, and there's lots of paradoxes, as well within this kind of research. So for instance, from a sort from one point of view, it makes total sense to put the navigation at the top of the page, because people are used to the navigation being on top of the page. So when they look for the navigation, they know where to find it. So that's an argument to put the navigation at the top of the page. But then I tested with a blind friend of mine again, or I didn't even test he wanted to show me his own website. And he wanted to show me a page in his website. And he had to go, he just was tabbing through the whole navigation and these drop down menus, they just opened up and it took him more than a minute to reach this page. </p>

<p data-time="17:12"><b>Espen:</b> On his own website?</p>

<p data-time="17:14"><b>Vasilis:</b> On his own website, on his own website, and then he came on this next page, and he wanted to do play, there was a sound file on this page, and he wanted to let me hear that sound file. And then he had to tap through the whole thing negation again, because it was the beginning of the page. And so power users power screen reader users will tell me yeah, but but you can just skip to the content. Or you can use headings instead of tabbing through everything. </p>

<p data-time="17:48"><b>Espen:</b> Yeah, yeah</p>

<p data-time="17:50"><b>Vasilis:</b> But he's not a power user. He's a normal person who uses his computer whenever he needs to use his computer. And the rest of the day, he does other stuff. So he doesn't remember all these settings, and you remember, doesn't remember all these keyboard shortcuts. So he had to tap through all this, it took him at least two minutes to get to this audio file. And it was just so painful to look at it. And then when he wanted to play the audio file, it was even worse, this modal dialogue popped up, which said, Do you want to download and then the name of the file, which was a horrible name, something like audio 160 gg, GG, five final, final real final dot mp3. And he just he didn't understand what was going on. So his solution was restarting the computer. And I saw him restart the computer. I asked her how many times do you restart the computer a day? Well, at least 10 times. That was just a normal thing to do.</p>

<p data-time="19:02"><b>Espen:</b> It's a really insight into into how I think technology in general is just not geared up for fringe cases, if you can call them that, you know, yeah, I get a I get a glimpse of this. When I'm out driving. I just put my phone in this little holder and I use it for Sat Nav and I use it for music as well. And there's a law in the UK where you can't touch your phone while you're driving or even even to change the music really. </p>

<p data-time="19:28"><b>Vasilis:</b> Yeah. </p>

<p data-time="19:29"><b>Espen:</b> So I rely on Siri, it is the only time I actually use Siri for anything and is to either find a place in the maps or to play some music. And being in a region with a Norwegian accent it's it's sometimes really hard. So I've had to make a playlist and is the only thing really that I play I will some albums are easier to find than others but I have a playlist is called Brunborg favourites. That's what I played because I've trained myself to talk to Siri in a way that she understands exactly this playlist. So you know, it's super frustrating and you're doing 50 miles down the road. And obviously, it's just music, you can just not play it or there may be someone else in the car that can play the music for you. So it's easy to see how it just compounds if it's not something as simple as playing a single playlist, but transferring 2000 euros to someone and getting the bank account number, correct.</p>

<p data-time="20:28"><b>Vasilis:</b> Yes, well, I think there's lots of testing to be done there. And there's this strange thing that in the usa.. in the accessibility world, I don't think that's very much of this kind of testing going on. Because if there were, we would have a completely different story. I mean, we wouldn't hear you just use semantics and things work fine, we would hear a very different story or a more nuanced story. But there's just not much testing going on there. If I think and I do this testing with my students as well. So the first thing I will let them just work with one person with a real disability, and it's really confronting. So these are third years students is the third year, it's the final course they get during their I mean, after that is just final exams. And an internship says the fine final, the last course of the university. And in this course, they just learned that everything they've learned so far is not true.</p>

<p data-time="21:44"><b>Espen:</b> Perfect survey to put that at the end.</p>

<p data-time="21:48"><b>Vasilis:</b> So that they make a prototype. So for instance, for a friend of mine, who is severely motor disabled, so he has to use his keyboard. Well, that's at least the assumption. So they designed this prototype to work perfectly well with tap key, so you can tap through everything and and then it turns out that he never uses a step key. Because we decided not to design focus states on the web a few years ago. So the tap keys broken overnight. </p>

<p data-time="22:24"><b>Espen:</b> Yeah, </p>

<p data-time="22:25"><b>Vasilis:</b> Yeah. So he uses a different way to navigate through pages. So their first assumption, the first prototype just fails miserably. And it's based on web best practices. It's based on what I've told them in previous courses is based on what what the accessibility world tells them to do, right? Design, well designed focus states. And then it turns out, this guy never uses them. And then they test with a blind person. And they learn yeah, you have to add semantics. And this person just hates semantics. He doesn't know what it means. It just doesn't understand what's a heading level? What's a navigation? These are just nerdy words, right? Yeah. Why do you put these words in your design? That's what? Yeah, that's what he asks us. So he thinks these are visible to us these words?</p>

<p data-time="23:23"><b>Espen:</b> Yeah, of course. Yeah. Because they're visible to him. Yeah. Yeah. Do you get, let me ask you this, because this is a real sort of reality, shattering feedback that you are getting, or these students of yours are getting right?. And in my experience, designers can be a bit sensitive sometimes to feedback, you know, whether it's peer or, or teacher feedback, or client feedback as well, sometimes designers have this tendency to sort of dig in a bit because maybe spent, you know, best part of a week getting all the semantics, right. So my question is, do you get sometimes students then who get defensive and maybe just blame the user or kind of go? Well, not sure what you're saying, but you know, the semantics are the way they should be?</p>

<p data-time="24:17"><b>Vasilis:</b> No, not not really in this course. Because after one day, they test, so after a few hours work, they they have the first test—</p>

<p data-time="24:25"><b>Espen:</b> All right, yeah. All right. </p>

<p data-time="24:26"><b>Vasilis:</b> So there's no... they cannot get attached to the design yet. </p>

<p data-time="24:29"><b>Espen:</b> I see what you mean yeah</p>

<p data-time="24:30"><b>Vasilis:</b> You make a prototype and you test and then the next week, you have a second prototype, and you test again. So it's all the time it's testing with this real person. So there's no time to get attached to your design. I've seen that before. And that was just incredible. So I was working for a large Dutch airline company. And so they of course, the main thing of the of their website was buying tickets. But they also had a large part of the website, which was just content, important content or just things to read. But somehow, I don't really know why. But somehow they thought that these pages were not visited enough. So instead of hiring a content strategist or content expert, they hired a advertising agency. And the advertising agency came up with a brilliant idea to make a rich content footer on every page. Okay, so this was so that they did all these productions that went with film crews, to designers, and they made all these movies. And then the idea was to put all these movies into an animating footer, large footer with all these things in but at the bottom of each page. This was their brilliant idea. And they had been working on these productions, these movies for four for months. And then they come up with came up with this beautiful animated thing, and it would have to go whoosh, whoosh, whoosh. And this was back in IE six time, right? </p>

<p data-time="24:37"><b>Espen:</b> Oh God</p>

<p data-time="24:52"><b>Vasilis:</b> And then they said, Okay, we have to test this. So okay, I'll make a prototype. But at first I said, this is just a silly idea. I mean, it's in the footer, nobody's gonna see it. Why do you spend so much money on the footer? That is a no, no, no, no, no, this is a brilliant idea. And we have to do this. So I made a prototype. And it kind of works. But not really, I mean, it did worked in in that single browser that was best at the time. And then we made a test. And they just tried to let people find that footer, but nobody found the footer. And then that I set up, make a banner and put it in the middle of the content, the banner, put it in the middle of the content during the test. And then you had this eye tracking. So you can see where people were watching what they were looking. So somebody was reading the text. And then he came at the, at the banner, and he just looked around it. Literally looked around it and then continued reads, it was it was just everything in that test showed us that it was just a disaster, a complete disaster, nobody found the footer. And when somebody by chance encountered the footer, they just didn't understand it at all what they was doing then. And then the art director said, that was brilliant. Let's continue. And that was it. It just completely ignored the test. Somehow, he just flipped it to being a complete success. And they threw a few more 100,000 euros at it. And it was just a complete disaster. Nobody ever saw it. It was ridiculous.</p>

<p data-time="28:36"><b>Espen:</b> It was a sunk cost fallacy. They spend so much already. And this data is too damaging to us. So we're just gonna pretend it never happened. </p>

<p data-time="28:44"><b>Vasilis:</b> Yeah, yeah. </p>

<p data-time="28:45"><b>Espen:</b> It sounds like at some point, there was maybe a you know, we talked we spoke about assumptions earlier on, I think someone with a different perspective. I.e. in this case, your perspective, the assumption would have been that this is a failed mission to begin with. You know, the idea, the core idea isn't really there. Because you're on the airline website. Why would you try and make something really fancy happening in the footer? This is just not really...</p>

<p data-time="29:10"><b>Vasilis:</b> Yeah. Yeah. And there were more than so I said from the beginning. We shouldn't do this. This is ridiculous. But, of course, the the advertising agency didn't want to hear that. But my colleagues didn't want to hear that as well, because it was a big project. And we needed the money. I thought, whoa, no, no, don't waste money on this crap. doesn't make any sense. It's not something that we're going to be proud of. Don't waste our time, right. Yeah. Yeah. They took me off the project after that.</p>

<p data-time="29:57"><b>Espen:</b> Yeah, rocking the boat Vasilis.</p>

<p data-time="30:02"><b>Vasilis:</b> So yeah, testing, but I mean, if you test often and you test early, then it doesn't hurt. If you get laid off later on in the project, and you've spent lots of money and lots of hours, and you begin to love the project, and then you get negative feedback, then it hurts. So that's too late to test. Yep. Basically.</p>

<p data-time="30:22"><b>Espen:</b> Yeah. In a sense, yeah. Or you just got to develop a an attitude? I think it depends on on the thing you're working on to. Like I said earlier, sometimes you use this usability hub. And it's like, obviously, in a sense, it's great. I test on 10-20 people. And it's just a single, or maybe two questions like, Hey, you landed on this screen, you want to book, you know, you want to find the latest movie? Where do you click. And that's really useful, because sometimes it goes completely to your assumption where, you know, I'm not, not that bad a UX designer, I made a big button that says, find a movie and people go find the movie. But you also get like people clicking in the weirdest places, and maybe it doesn't lead you to change things radically. But you change a word or something, just to clarify things or make it a little bit, you know, easier to understand. That sort of stuff, it's easy to do. Often. it's sometimes hard to sort of find out what warrants the tests, you know, if you if you work on something for half an hour, do you test it? Or do you just kind of go now that's probably fine. And then you test more later on. But I think at least for us, the bigger tests is like, it's really, really hard to do. Online in some sort of form, you know, usability hub, you submit the pictures, you put hotspots on, you write questions to go with each screen, and you kind of guide the person through it. And that's fine for these kind of preference tests or very simple instructions test. But as a whole, like we were working on a browser extension, for example, we know that it works, technically, we know that it's easy enough to use, but we don't know if, if this is something that people want? Or if if how do we integrate this this extension into people's daily surfing life. And that's, I think you only can really test it by by launching it, you know, you don't have to spend 2 million euros in advertising, but you have to actually make it, you have to show it to some people, you have to convince them to install it and then you have to just see, you know, not so much by calling them up. But seeing the data, seeing how they actually interact with it. Are they using it? Do they come back to it the next day? To see if it actually is something people want. At that point you have invested a lot of time. So if it doesn't work, you're sweating.</p>

<p data-time="32:53"><b>Vasilis:</b> Yeah, that's true. So that's why you have something like minimum viable product, right? That you launch it. Right, when, whenever it's the first minimal product is ready. You just launch it to check if it works. Yeah.</p>

<p data-time="33:07"><b>Espen:</b> If it actually is yeah, viable? </p>

<p data-time="33:09"><b>Vasilis:</b> Yeah. </p>

<p data-time="33:10"><b>Espen:</b> I think I think people should adopt that more when it comes to just your average website as well. The issue with at least the process I've been involved with is that it comes down to the single the single launch single budget thing, you only have enough to make the thing once. So essentially, no matter how much time you put into it, you are making a prototype because it's not existed before. So you launch it, and then if it doesn't work as well as you hoped, or if there's a big mistake that wasn't spotted by whomever? Well, that's kind of it. And obviously, if it's a bug, you got to fix it. But if if the product just isn't as good as it could be, you're not going to get another chance the next week to do iteration two, which of course in in product design, you would you know, of course you would, you would just keep working on it continuously. And I don't really know how to how to convince people that this is how they need to part with their money part with a little bit less at the time, but be aware that you should you need to do it four times, which is good.</p>

<p data-time="34:12"><b>Vasilis:</b> Yeah, it's really hard. Really hard to convince people to do that. </p>

<p data-time="34:15"><b>Espen:</b> Yeah, </p>

<p data-time="34:15"><b>Vasilis:</b> Yeah. Yeah. No, this is no, no, no, no, just start with homepage. No, no, no, no, no. </p>

<p data-time="34:24"><b>Espen:</b> Yeah, yeah. </p>

<p data-time="34:25"><b>Vasilis:</b> Yeah.</p>

<p data-time="34:26"><b>Espen:</b> Even even just designing something simple can be difficult because it's it looks boring. You know, where's the pictures? We spent loads of money taking. But yep.</p>

<p data-time="34:37"><b>Vasilis:</b> Yep. Okay, we're good. I'm happy to hear that you do testing on different parts in the process. Good.</p>

<p data-time="34:49"><b>Espen:</b> Yeah, I mean, I've actually historically not tested nearly enough. I've had lots of guilt over not testing enough. But now that we talk about it, I realised that you know, actually, I do test. Even if it's this kind of random test with with family, it helps to get someone else's perspective. I guess that's the that's the crux of it.</p>

<p data-time="35:09"><b>Vasilis:</b> That's it, and then accepting the the other person's perspective, that can be important.</p>

<p data-time="35:15"><b>Espen:</b> And not just with hard data, which is generally getting on getting feedback from people is a skill. I think you got to really learn how to deal with it and get accepted. Yeah.</p>

<p data-time="35:27"><b>Vasilis:</b> Yeah. That's why I think if you test early or get feedback early, then it doesn't hurt that much. Yeah.</p>

<p data-time="35:32"><b>Espen:</b> Yeah. And that also helps from the money side of things. If you test early when you're still in figma. And you do like a sketch. It doesn't cost so much to change it. That's true. True.</p>

<p data-time="35:47"><b>Vasilis:</b> Okay, Espen testing is good. Testing is good, I guess. Yep. Yep. Yep. We haven't really talked about AB testing. But I don't have really much experience in AB testing. So—</p>

<p data-time="35:58"><b>Espen:</b> No, I don't either. You know, what, with AB testing that I've always wondered, is that if you're if you're online shop, and you change or products, for that matter, if you if you do test the negative difference in whatever 3% or something I don't know, what would count as significant anyways, because I guess it matters how many users you have in your test, you know, but let's say you get a significant difference that you can prove, and yes, this version B is better than version A. For you, you need to have a sizable amount of your income directly relates to the website for it to be worth it. I feel, you know, Amazon, obviously, point 05 percent changes, you know, 20 million euros. Great. You can do that. Yeah, but for certainly my average projects, particularly websites for clients, like, it's it's hard to justify any grand project where you invest lots of money in in increasing traffic by 3%. Because it doesn't convert to anything.</p>

<p data-time="36:57"><b>Vasilis:</b> Not just that that's only usable at scale, real scale. </p>

<p data-time="37:01"><b>Espen:</b> Yeah. </p>

<p data-time="37:02"><b>Vasilis:</b> And then you need some real good analysts as well. So people who know how to analyse data. I've seen ridiculous conclusions being drawn from data. And then all designs being based on the ridiculous conclusion from wrong data. Yeah. So that's, that's something that I guess you need. When you you need some real good crew to be able to do AB testing.</p>

<p data-time="37:33"><b>Espen:</b> I think so. Yeah. The science of setting it up as well. It's just, it—</p>

<p data-time="37:38"><b>Vasilis:</b> I needs a lot of [unclear] as well. </p>

<p data-time="37:40"><b>Espen:</b> Yeah. Yeah. And if you want it to be scientific, you got to have controls you got to have... it's not that simple. No, we tried something recently, with some Google adverts for this extension we're making. And as far as I understand, there's this setup now in Google ads, where you, you can give your upload, whatever it was 10-15-20 images, and he writes 5-10-15 different pieces of text. And then you just push publish, and then the algorithm takes care of it. And after a certain periods, you've you know, which one performs best. Which, to be honest, sounds like a pretty chill way of doing AB testing for me, just let the computer handle it.</p>

<p data-time="38:28"><b>Vasilis:</b> Yeah, not very scientific. I mean, there's no transparency at all.</p>

<p data-time="38:34"><b>Espen:</b> No, no, </p>

<p data-time="38:34"><b>Vasilis:</b> No way it can be repeated.</p>

<p data-time="38:36"><b>Espen:</b> No, not. But this one brings in more cash.</p>

<p data-time="38:41"><b>Vasilis:</b> Yeah. Yeah. That's good enough, I guess.</p>

<p data-time="38:46"><b>Espen:</b> For this. Yeah.</p>

<p data-time="38:52"><b>Vasilis:</b> Okay, right. That was very interesting. Again Espen, thank  you very much for another episode.</p>

<p data-time="39:02"><b>Espen:</b> Likewise, it's good chatting to you, and good luck on your talk this week.</p>

<p data-time="39:07"><b>Vasilis:</b> Yeah. Thank you.</p>

<p data-time="39:07"><b>Espen:</b> Thank you.</p>


</section>

<p class="closed-caption">[Outro music by xyce]</p>

</section>

<section class="episode-art">

## Why does this page look like this?

I think web design is based on assumptions a little too much. And we all assume that these assumptions have been thoroughly been tested by someone before. Many patterns we use everyday may very well not be as friendly or logical for our users.

I added a few sticky notes throughout this page. Some of them are based on things we discuss in this episode, like for instance the "rich media footer". Others, for instance the ones about the transcript,  are based on observations. And some are just silly.

And other than that, I just copied <a href="https://webmaterials.design/posts/09-why-do-we-mimic-print-grids/">the design that Espen made for the previous episode</a> and chose a much worse accent colour.

<p class="sig">—Vasilis</p>

</section>
