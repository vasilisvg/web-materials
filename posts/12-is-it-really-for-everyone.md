---
episode: 12
title:
  - Is it really for everyone?
description: The web is designed to work for everyone. At least, in theory.
audio: /sound/WM012-Is-it-really-for-everyone.mp3
audiolength: 56608136 #mandatory, size in bytes! No idea how to do this in Eleventy )-:
duration: 00:47:03 #mandatory, duration in hh:mm:ss
date: 2021-10-10 #yyyy-mm-dd
# You can add (multiple) urls to stylesheets with 'csslinks'. (Use spaces, not tabs here)
csslinks:
  - /css/episode12.css
head: <link rel="stylesheet" href="https://fonts.typotheque.com/WF-023273-011737.css">

# If you want to add a block of preformatted code to the head you can use 'head'
# Beware: use spaces, not tabs.
#head: <link rel="stylesheet" href="https://fonts.typotheque.com/WF-023273-011643.css">
# If you want to add a block of preformatted code to the end of the document you can use 'foot'
# Beware: use spaces, not tabs.

# foot: <script src="/js/e11.js"></script>
layout: layouts/episode12.njk
intro: In theory, the web is for everyone. It should work on whatever hardware you (have to) use, and whatever browser is on it. It should also work with whatever assistive tech you use, like screen readers. In practice things are not as ideal. In this episode we discuss this from a design prespective. We talk about the <em>fictional</em> 80% of people that most sites are designed for. Apart from this utilitarion approach we discuss design approaches based on intent, and result based design.

shownotes:
  - <a href="https://abookapart.com/products/design-for-real-life">Design for real life, where I first read the term <em>stress case</em></a>
  - <a href="https://en.wikipedia.org/wiki/Edge_case#Software_engineering">Edge cases in software engineering are not ignored</a>
  - <a href="#why-does-this-page-look-like-this%3F">About this episode's art direction</a>
  - <a href="https://xyce.bandcamp.com/">Music, as always, by xyce</a>
---

## Transcript

<p>Intro music by <a href="https://xyce.bandcamp.com/">xyce</a></p>

<p data-time="0:05"><b>Vasilis:</b>
Well, you know that I am a bit of an idealist. And that one of the reasons why I like the web so much is because, in theory, it is for everyone
</p>

<p data-time="0:17"><b>Espen:</b>
In theory.
</p>

<p data-time="0:19"><b>Vasilis:</b>
And so the question I have today, is it really for everyone?
</p>

<p data-time="0:28"><b>Espen:</b>
Oh, I guess you just answered that before you finish the question.
</p>

<p data-time="0:35"><b>Vasilis:</b>
Yeah
</p>

<p data-time="0:36"><b>Espen:</b>
As usual there's a simple answer, right? Is it for everyone? In theory. It's it's technically could be, but I don't think it's implemented in a way that it is truly for everyone. What are your thoughts?
</p>

<p data-time="0:51"><b>Vasilis:</b>
Yeah, yeah, well, exactly of course. So. So I've been thinking about this a lot recently. So back, when I was still working as a web developer, I used to work at a big design agency. And the approach there was, make it work for most people. And they will talk about the 80% or 90%, if it works for 90% is good, because then it's more than enough to make a good profit. And if you want to optimise it for the last 10%, that's a lot of work. So that's a very, I think it's called a utilitarian approach to design right? You just approach and if most people are happy, then it's good.
</p>

<p data-time="1:46"><b>Espen:</b>
Yep.
</p>

<p data-time="1:47"><b>Vasilis:</b>
And of course, there's something to be said about that. Unless, of course, you're in the 10%. And you really need this thing, then. And there's no alternative.
</p>

<p data-time="2:02"><b>Espen:</b>
Yeah.
</p>

<p data-time="2:03"><b>Vasilis:</b>
 Then, of course, it's not that—
</p>

<p data-time="2:05"><b>Espen:</b>
Yeah then it really sucks.
</p>

<p data-time="2:07"><b>Vasilis:</b>
Yeah. And then there's the other thing that I always thought about, what's this idea of the 80% based on, so if I looked at the personas that the designers would choose, they would always look like designers. And would always live somewhere in a neighbourhood where they live themselves, it was always—
</p>

<p data-time="2:32"><b>Espen:</b>
maybe just not a very diverse group—
</p>

<p data-time="2:33"><b>Vasilis:</b>
You could just change it a little bit? I'm not really sure if this 80% is really 80%. In my experience, it's based on nothing actually, it's just my hunch and not even a hunch. I think it's just laziness. And we like it. That's basically what it what it means. But it is from a business perspective, I think somehow it could make sense. Is that is that your experience as well?
</p>

<p data-time="3:10"><b>Espen:</b>
Yes, I think so in a nutshell. First of all, of course, you know, we make personas and stuff, when it's just based on guesswork anyway, it's bound to be you know, you might go oh, no, this this one is a woman. So it's very different to me. But it's this essentially is based on whomever writes the persona is going to be based on their experiences and or assumptions about what people are like. And then of course, you could assume like in in in a theatre, you could assume that we're going to have people in wheelchairs here, so we better have some ramps or, you know, whatever, we can consult someone maybe to help us install the right type of equipment. But yeah, no, this attitude, I'm guilty of the same attitude of, you know, we, it's gonna it's going to work for most of our audience, and to do this other thing is actually going to add x to the budget, or is going to be some other complications. So is it worth it from a business perspective? And maybe the client assumes No, they assume No, they don't know. But you know, it's just like, yeah, it works for most of us to do it works for the designers, the developers, the clients happy they've sent it to their friends and family. Everyone who's looked at it has given us decent feedback. But of course, we haven't sent it to blind people or you know, someone on a on a 2g phone in the Scottish Highlands.
</p>

<p data-time="4:29"><b>Vasilis:</b>
Yeah, exactly. Yeah. Okay, and then there's the other thing that so Okay, so this is, let's say, I think the vast majority of professional websites are based on this idea, right? If it works for most people, it's good enough. Let's not talk about the amateur websites, because I think that's really something else. But if we look at professional websites, really well made professional websites, then I think this is the the standard approach and then you have, of course, the approach based on intent, which is a think if you look at web accessibility, what they've been, we've been have they've been promoting for the last decades, is that if you just use these guidelines, this long list of guidelines, then your website will be accessible for much more than just 80% of the people.
</p>

<p data-time="5:31"><b>Espen:</b>
Yeah.
</p>

<p data-time="5:34"><b>Vasilis:</b>
And I always wonder, as a designer, how do you look at this approach?
</p>

<p data-time="5:43"><b>Espen:</b>
Right. So a while ago, I guess, pretty responsive. When fonts were loaded, using coupon and other things that I didn't understand. And where there were no variable since oh, my God, the the way things were implemented then was incredible. But—
</p>

<p data-time="6:06"><b>Vasilis:</b>
floats
</p>

<p data-time="6:07"><b>Espen:</b>
floats,
</p>

<p data-time="6:08"><b>Vasilis:</b>
remeber through floats?
</p>

<p data-time="6:08"><b>Espen:</b>
Yeah, I mean, back then I didn't touch code. So for me, it was I entered the room of the developers and, and sat down and we did design tweaks together, and it was a bit like, it just seemed crazy, we'd make all the changes, copy and paste the whole <abbr title="Cascading Style Sheet">CSS</abbr> sheet and just like <abbr title="File Transfer Protocol">FTP</abbr> it up somewhere and hit refresh. And, you know, back then I remember, there was a discussion around ems and pixels, and how like, if you set the font size to a certain pixel value, you will, you will screw it up for everybody who wants to zoom in and out. I didn't know enough about it now, or then. And I don't know what it was like, in older browsers. But there was, I remember, there was distinctly some some thing where you could you could literally screw it up for people, if you were too prescriptive in the code, people wouldn't be able to manipulate the browser to their own needs. But now my impression is that, as long as you implement properly, you know, you won't have an issue, people can still zoom in and out, and the browser itself will help in some way. Because there is a challenge, I think, first of all, philosophically, is it possible to make something that works for everybody? Is it actually, you know, by by catering for some niche? Are you going to exclude another niche? So philosophically, is it even theoretically possible? The other thing is to design something that is impactful, or you know, emotional, or some sort of it has, it has an impact? Is it possible to do that, and at the same time, cater for absolutely everything. An example of this is, when I was doing print design, you know, there's there are guidelines, especially if you work with public bodies, or, you know, agencies that speak to the to the public, there are guidelines to, for accessibility, essentially. And, and but their way that they're not as strict as the guidelines we have for the web, and they're not verifiable in the same way, you can't just run it through some sort of algorithm and get a grade. But obviously, it includes things like contrast, and you know, you have to have the text needs to be at a certain size, whatever. But of course, if you if you're designing a brochure or a prospectus or something like that, if you're going to do the whole thing at 12 points and one and a half line height, you're going to, it's going to blow your budget, you're going to have like 1000 page perspectives, right, you just can't do that. So I think the the approach that I've seen is that on small small leaflets and stuff, there's accessibility options available. So if you if this is not readable to you, you can order something in bigger print. Or you know, you can you can order you can have it an audio version, if you call the number and stuff like that. So, you the main thing is, is designed for the assumptive 80%. But then you provide alternatives for the fringe cases. And to me, that's the compromise in delivering something that actually has its own. I don't know personality or visual expression or, or, or something, you're you're able to do something in a certain way. But also you are catering for anyone who might struggle with your particular format. Does that make sense?
</p>

<p data-time="9:43"><b>Vasilis:</b>
Yeah, yeah, definitely. Yeah. Okay, and so some sort of similar approach to web design. Because, have you ever created a separate accessible website?
</p>

<p data-time="10:00"><b>Espen:</b>
No, I haven't. And I'm speaking to you about all these things, especially with screen readers and stuff, I think, at least for me, but you know, I'm quite nervous when it comes to implementation and build. The assumption is that if you do things by the book, well, then people with special requirements will be able to use their technology, their own technologies to access your content. But then you're saying, actually, screen readers suck. So, you know, so much to sit down and design an experience that is better catered for people who use a screen reading technology. So so that's where it ends? For me, I don't know what's outside of these boundaries. But I do assume Yeah, if I, if I follow the guidelines and contrast, if I don't mess around with kind of default browser settings, or implement font sizes and stuff correctly, I use ems for line height, you know, people can scale and adjust and use their own technology to to adjust the content to their needs. That's my assumption.
</p>

<p data-time="11:01"><b>Vasilis:</b>
Yeah. Okay, yeah. So in my experience, I've seen these guidelines, or, well, I used to like the guidelines, and then. But when I worked with designers, they used to hate the guidelines, because after the fact, when their design was done, they would get this grade, and it would say, well, this is not good, you have to fix this and fix this and fix it. Some people don't like fixing bugs, or most people don't like it. And in many cases, it was even some major changes were necessary. So in my experience, is that people don't really like these things. But even if they do implement them, it doesn't even mean that the site is accessible that it or theoretically, it is accessible then, but it doesn't mean that in practice, it is usable. So this is something that really struck me that you have these websites that are actually accessible according to the guidelines, you can check it and you can test it and they get even get tested. But in practice, if you really want to use them, they're just such a horrible experience that cannot use them. So I once watched a blind guy, I met him for the first time that day, and he showed me how he uses the web. And he showed me that he wanted to send money from one bank account to another bank account, 2000 euros, it's not it's quite a big amount of money. He wanted to send it from his one bank account to his other bank account. With his banking websites, which is a huge website in the Netherlands, right? It's not not some sort of just a small thing. It's very big. He couldn't do it. He couldn't find the button that said, transfer money. Which, when we look at it, it's the biggest button, right? There is no way to miss it. He couldn't find it. It wasn't there. So I actually, I sent the money, I did it for him, which is ridiculous. I would never ask someone who enters my house for the first time. Transfer 2000 euros, right. So but this site, of course, in theory, it is accessible, and it's probably well built, but it's not accessible. And this is. So this is the the problem that I have with this approach that we have the accessibility world is that it's based on intent. So the intentions are very good.
</p>

<p data-time="11:01"><b>Espen:</b>
Yeah.
</p>

<p data-time="11:03"><b>Vasilis:</b>
So if we follow the guidelines, then we have an accessible website, but it's not about the outcome. It's very much about what it's just about, our intentions were good. So we're fine. We did whatever we could do.
</p>

<p data-time="14:05"><b>Espen:</b>
Yeah.
</p>

<p data-time="14:08"><b>Vasilis:</b>
So I think this is actually one of the biggest problems with web accessibility. And one of the reasons why it's not why people don't use it, it's because it's a set of guidelines and is not designed. Right? it's and you're not allowed to design with it, you have to use them, you have to use these guidelines. So then, I think there's a third approach to accessibility, which is results based, where, you know, don't just implement the intention, but you actually test it. And if it's not good enough, you fix it.
</p>

<p data-time="14:49"><b>Espen:</b>
Yeah.
</p>

<p data-time="14:50"><b>Vasilis:</b>
Right. Yeah. So and this is something that I'm more and more well as you may know... What I like a bit more, right that instead of just, yeah. And then testing for real people testing with real people and just checking what happens there. But this, of course, is pretty expensive, I guess or—
</p>

<p data-time="15:16"><b>Espen:</b>
It's all relative, isn't it? If you're, if you're the biggest bank or any, any other national bank in any country, you can afford it, you know what I mean? Maybe to your bottom line, it doesn't really matter if this guy is not able to transfer the 2000 euros because even if he says, well, screw you guys, I'm going to go to another bank. It won't really impact your bottom line too much. But you're providing what's close to a public service? Yes, it's a private enterprise. But come on is banking. You know, it's like you got to you should you should cater for everybody. It's kind of, you know, so then—
</p>

<p data-time="15:53"><b>Vasilis:</b>
it's mandatory to have a bank account in the Netherlands?
</p>

<p data-time="15:57"><b>Espen:</b>
Yeah,
</p>

<p data-time="15:57"><b>Vasilis:</b>
you're not allowed to live without one God.
</p>

<p data-time="15:59"><b>Espen:</b>
That's a whole other philosophical debate right there. So yeah, so then you got to you got to make it accessible in the same way, you need to have wheelchair accessible entrances to your building, you know, you need to allow people to use the services, maybe some people would argue, but actually, they can just call and we can do exactly the same thing on a on a on a call phone banking. But in this example, yes, maybe you should have a, I don't know a panel or something and figure out what what, you know, what's the full extent of our users abilities and then and then gets users in from all walks of life and actually test your product? That is quite a big process. And I think as a bank, you should then could afford to do it. As a many, many other instances, it's not even feasible to do it on timescales and budget wise.
</p>

<p data-time="16:56"><b>Vasilis:</b>
But then, let's say if such a bank, did this research and publish their research and publish their findings, then you could use it, right?
</p>

<p data-time="17:06"><b>Espen:</b>
Yeah, yeah.
</p>

<p data-time="17:08"><b>Vasilis:</b>
The end. So this could actually improve the stuff—
</p>

<p data-time="17:13"><b>Espen:</b>
Outside of the bank
</p>

<p data-time="17:13"><b>Vasilis:</b>
for making... Yeah. So it doesn't mean that everybody has to do the same research. I mean, if we share our findings. And this also brings me to another thing, which is the I think you, you call it fringe cases, right? We used to call it edge cases. So the 20% were edge cases. And the interesting thing is that designers would say, these are the edge cases, we don't have to think about them. While developers, the first thing that developers do is they look for the edge cases, and they just test the application to see what happens if instead of 100, I fill in 2 million, Does it still work? What if I mean, in the Netherlands, our surnames aren't that long... What if I'm Portuguese?
</p>

<p data-time="18:12"><b>Espen:</b>
Yeah.
</p>

<p data-time="18:12"><b>Vasilis:</b>
and married—
</p>

<p data-time="18:13"><b>Espen:</b>
Yeah.
</p>

<p data-time="18:14"><b>Vasilis:</b>
And have three double surname. Right? What happens then? So developers are actually trained to do that. And designers, I think that was just one of the weirdest insights that I ever had that, that is, the people who think about the stuff will create this stuff, have a different, completely opposite approach than the people who actually build the app.
</p>

<p data-time="18:40"><b>Espen:</b>
Yeah
</p>

<p data-time="18:41"><b>Vasilis:</b>
I thought that was weird.
</p>

<p data-time="18:42"><b>Espen:</b>
I think it's, I think it's with design, there's a constant battle of balancing. We can call it accessibility, I suppose, with expression. So when you when you choose a font, it lets if you make an A, I don't know what you're making, maybe making a movie poster, you want to you want to infuse that poster with the intent of the movie, you know, the feeling of the horror, or whatever it might be. And maybe you're choosing a font that's very floral or expressive. Now, of course, even on the movie poster, even if it's just three words, and they're big, they need to be legible. They need to be understood. And they need to be understood by people walking past it at a certain distance, you know, and you make this assumption in your tested in your office, and you kind of Yeah, this works. No one's told me they can't read this. Now, of course, this very poster, if you're, if people stand further away, and maybe they have severe, you know, poor eyesight, they won't be able to see it, they won't be able to read it. And at a certain point, designers have to go well, I'm really sorry. If you want this font or this type of expression, this picture is going to there's going to be some people at a certain distance where there's a line and On the other side of that line, it's inaccessible. And it's the same with all the small print on the poster, you know, all this stuff. So every single design decision is taken with this balance in mind. And of course, big display type on a poster is easier to do than, I don't know, technical texts or the document with with small print, or a Bible or something like that. I mean, a lot of people wouldn't be able to read the Bible, right? Because the writing is so small. So I think we're always fighting these constraints. And this is why designers hate accessibility guidelines, because they have spent three months picking this brand colour and now you're telling me I can't use it for my links? Because some algorithms says the contrast not good enough for everybody in the office can read it, you know, it's, it's this constant challenge. So I'm not really sure how you would begin to, to say, No, no, everything you do has to be completely 100% accessible to absolutely everybody. Because—
</p>

<p data-time="21:01"><b>Vasilis:</b>
but isn't there maybe a problem that we don't have expressive tools for accessibility? That it's just, if you look at the, not the previous bit, the pre previous or don't remember a previous episode in which I designed the the, the the episodes web page to look like what it sounds like, if you listen to a website, when you listen to a screen read, everything is just neutral. And if we look at a website, nothing is neutral. Never. I mean, even a not well designed website, we still get something out of it. And if it's really well designed, there's lots of emotion. I mean, especially your designs are just filled with emotion and humour or right or other expressions. And there's just no way to express ourselves. The most expressive stuff that I did with a screen reader is make it giggle.
</p>

<p data-time="22:02"><b>Espen:</b>
And that was a struggle.
</p>

<p data-time="22:05"><b>Vasilis:</b>
It's impossible to make it International.
</p>

<p data-time="22:07"><b>Espen:</b>
Yeah.
</p>

<p data-time="22:09"><b>Vasilis:</b>
Yeah. So I made screen readers say, Well, I made it say boing boing, boing boing, which was really cool. Which was the best thing they ever heard.
</p>

<p data-time="22:23"><b>Espen:</b>
Yeah, I don't know.
</p>

<p data-time="22:24"><b>Vasilis:</b>
So is maybe something like that, that we need more expression, that we need to be able to, for instance, emphasise stuff and to really emphasise stuff or to say things in a slower spade, how you call it? speed
</p>

<p data-time="22:42"><b>Espen:</b>
Yeah, of course, I mean, height, but how do you how do you in another maybe it was that episode about screen readers we talked about this, how the screen reader experience is not fit for purpose. And it's been, you know, the same for decades, and is based on old technology and whatnot. I guess in theory, soon we'll have <abbr title="Artificial Intelligence">AI</abbr> that can create human like voices, and maybe some of these things will become more accessible to designers and coders. So to actually use, I don't know, maybe you can tie it up to semantics. And if you use bold or emphasis or something like that the voice changes to maybe you can have in the same way you would choose the colour background colour of a document, you could maybe choose the background ambience or the background, you know, you can infuse this non visual experience exists—
</p>

<p data-time="23:36"><b>Vasilis:</b>
It does exist. So there's, there's this markup language for voice. Yeah, for sure. It's pretty primitive, but it's, I use it in one of my art projects, it's really nice. But you can lower the pitch in higher. And you can, even within a sentence, you can just make this wave of that it starts slowly, and then goes up and then goes down again, you can actually do this stuff, but it's not implemented on the web, you're going to use it on the web. And I think this is this is a pity, because I guess if we gave these tools to designers, they would probably love it.
</p>

<p data-time="24:20"><b>Espen:</b>
I think if the tools were—
</p>

<p data-time="24:21"><b>Vasilis:</b>
Some of them not all of them
</p>

<p data-time="24:22"><b>Espen:</b>
Yeah, if they were accessible, you'd definitely see some high profile advert campaigns using these technologies. And it would be a big huha in social media. But the average designer on the average website, I mean, we can't even It's hard enough to get people to use just basic accessibility guidelines to to dig into these technologies and implement them with intonation tone of voice on your websites. It's just it's a stretch, I guess. I mean, you would have to really—
</p>

<p data-time="24:48"><b>Vasilis:</b>
Couldn't it just work the other way that that once you start designing for screen readers, that then you get interested in Okay, so how do they actually work and what are what's the research that has already been done and then you come up with these guidelines Oh, look, we can use these guidelines so it could work the other way. And right now it's just it's it's a document that says, No.
</p>

<p data-time="25:14"><b>Espen:</b>
This is true.
</p>

<p data-time="25:14"><b>Vasilis:</b>
You did it wrong.
</p>

<p data-time="25:15"><b>Espen:</b>
Yeah that's true.
</p>

<p data-time="25:17"><b>Vasilis:</b>
And then it's a much more positive document where—
</p>

<p data-time="25:22"><b>Espen:</b>
All this stuff is possible. I don't know, either. It's, I find the whole thing, quite challenging. My main, my main thing is that in the physical world, it's it's been accepted that you got to supply a, I guess, a different experience to different needs. For example, wheelchair accessible entrances, most of them have stairs and a ramp, the stairs are cheaper to implement and quicker to walk up. So they don't remove them, they keep them in place for people who can use them, and then they add the ramp. I don't know if that's some sort of, I don't know implied discrimination that would take this need that is the minority need and make that the add on instead of the main thing, you know, maybe all interests should be no, it's mainly a big ramp. But you could take the stairs on the side if you want to take a shortcut or whatever. But you know—
</p>

<p data-time="26:20"><b>Vasilis:</b>
That's always something that surprises me with toilets that you have these wheelchair toilets, which are not allowed to be used by the rest of the world, which I think—
</p>

<p data-time="26:31"><b>Espen:</b>
Maybe, yeah, maybe all toilets should be like big, spacious and nice and easy to use for everybody. And then you can have like a tiny room with urinals if you want to just dip in for a quick, quick way. Right? But it's the same with Braille, right? You have we have books with with printed letters, in some cases, you can call a number and they could order you a large print book, or maybe you can call a number and have things read out to you. You also have books that are in Braille, and they're purely for blind people completely inaccessible if you haven't learned that language. So I, my feeling is to me that there has to be like some sort of hybrid approach where I don't think it's possible to design one experience that works equally, equally well for everybody. It's, it's more like, you've got one experience here, and maybe that caters for 68% of your audience, then there's another experience for 10% and so on until you've filled every single, you know, brackets of audience so to speak.
</p>

<p data-time="27:32"><b>Vasilis:</b>
I think that the problem that many accessibility people have there is that the same problem that we used to have with mobile websites that we had, up until 10 years ago? The mobile website was always an afterthought.
</p>

<p data-time="27:48"><b>Espen:</b>
Yes
</p>

<p data-time="27:49"><b>Vasilis:</b>
And it was always a subset of the real website. So the first mobile websites I remember, you just need the address.
</p>

<p data-time="27:57"><b>Espen:</b>
Yeah.
</p>

<p data-time="27:58"><b>Vasilis:</b>
Right. When because people are on the move, and they only need to know the address.
</p>

<p data-time="28:05"><b>Espen:</b>
And that's, that's also a budget thing, isn't it? It's like, Oh, my God, building the whole website, again, with this crazy constraint of a tiny screen, let's just at least just give them the phone number and the address. And that's good enough for now.
</p>

<p data-time="28:19"><b>Vasilis:</b>
So the, what accessibility people are afraid of, and I think that right, is that it will, it will be not as well maintained website as the original one.
</p>

<p data-time="28:34"><b>Espen:</b>
Yeah.
</p>

<p data-time="28:34"><b>Vasilis:</b>
So the content will always be behind even. Maybe they stopped updating it. Maybe they don't remember it.
</p>

<p data-time="28:41"><b>Espen:</b>
Right? Maybe it's not a separate website, per se. But maybe it's more akin to the difference between reading and seeing the content visually, and having it read to you from a screen reader. Those are the same thing. but different experiences, right?
</p>

<p data-time="28:58"><b>Vasilis:</b>
Not true. You could add a theme. Right? We're used to theming.
</p>

<p data-time="29:03"><b>Espen:</b>
Yeah you could have a theme yeah.
</p>

<p data-time="29:05"><b>Vasilis:</b>
You could see it as a theme. Yeah. And things like that should be possible. Why not?
</p>

<p data-time="29:09"><b>Espen:</b>
but all of those things are—
</p>

<p data-time="29:10"><b>Vasilis:</b>
And then there's the other approach where I think I thought that was a very interesting approach, if you don't call it edge cases, but stress cases, in these are the people that are in highest need or have the most have the most difficulty to use your website. I mean, if you see somebody who has a problem using your product and you help them, right, that's if I see somebody who has a problem, just crossing the street, I would help them or they can not pick something up high in the store I'll help them and a big hit for them. Right. So what if you instead of seeing them as edge cases you see them as stress cases and say, Okay, these are the people that we start with. So instead of designing for them as an afterthought, you start designing for them. And then you see the 80% as an afterthought, with the idea that, well, if these 10% can use it, the rest will probably be able to use it as well. Yeah.
</p>

<p data-time="30:24"><b>Espen:</b>
And this is this feels a bit like progressive enhancement, or the the intent or philosophy behind that where you start with, if it's just content on a page, you know, you have text, it's semantically correct. It's just there, it's readable for absolutely everybody. And then you go, I'm gonna add a menu. Okay, well, the menu starts off with just being a list of links, and now it's accessible to everybody. And then maybe you use some <abbr>CSS</abbr> or something to display it differently. But the core of it, it's still accessible to everybody. This was also something that we've thought of early and responsive is that, okay, you're going to have a mobile version, if it's too costly, or too difficult to make it feel and look exactly like the desktop version will at least just put all the content on the mobile version. And then people could read everything and access to everything, but maybe not as look as nice. So maybe the visual side of things this perfected like visual interface, maybe that's the add on. And if you add it on, progressively, you shouldn't break the sort of previous non visual version of it.
</p>

<p data-time="31:29"><b>Vasilis:</b>
Yeah, yeah. Yeah. It's also something that and this is hard to teach. So my students don't they have a hard time understanding it. So when you start designing content, then layout is optional. Yeah, yeah, it is not necessary. You don't need to put things in two or three columns. One column works, right. If it works for a phone, it works for a desktop, right? But but we, are tools somehow invite us to start visually instead of start with the content, right?
</p>

<p data-time="32:07"><b>Espen:</b>
Yeah, our tools and our I don't know what it is some sort of cultural heritage, not heritage, cultural conditioning. It's like—
</p>

<p data-time="32:22"><b>Vasilis:</b>
I'm not really sure though. Because if you look at the the magazines that you use to make the paper magazines, they were often right, based on the content of the or just like what we do with our website, we it's based on what we're talking about the design is. And now we're more of system designers. Maybe.
</p>

<p data-time="32:46"><b>Espen:</b>
Yeah, in that sense, it's a big difference. But with with magazines, there's always the argument that a Word document is just as good as the magazine because all the text is there and is one column, all the all the pictures and treatments and different fonts and columns, all this stuff. Some of its economical, but a lot of it is stylistic as well, right? So one is we need to fit this into the format of a magazine. And then you have concerns like, we know that if we add these elements, people will engage more with his article, like pull quotes or big headlines are really nice photography, you know, so you put that in there to help the experience and make the magazine cooler. And then you add visual decisions that are purely to give your magazine a flavour. So we use these fonts in these colours, because that's our brand and we write in this way, because that's our brand. But I think magazine design way more than web design is not inaccessible. But there's certainly print designers take much bigger liberties with contrasts. And there's crazy layouts and there's like grey on grey and there's a lot of decisions made that looks so cool, and it's bloody amazing, but it wouldn't pass accessibility tests online. I don't know what the question was or what I was even answering there but... [laughs]
</p>

<p data-time="34:14"><b>Vasilis:</b>
Yeah, we're talking about stress case we were talking about—
</p>

<p data-time="34:18"><b>Espen:</b>
I seem to remember that there was a designer at some point who felt like everything should just be designed using Helvetica because, one the human race had reached the perfect font. It works, everybody reads it. It's been stress tested. So just just use Helvetica everywhere. And in a way he is he or she would be correct right that it would be accessible where you would you know it would work, but it would be boring, it would be one sided, you know, nothing would stand out. And this is what I'm talking about is constant conflict with accessibility and expression is, is if you reduce everything to its most pure, accessible form. It will just single column text, big images, large font size, you know, Arial, you don't really need anything but Arial.
</p>

<p data-time="35:07"><b>Vasilis:</b>
Yeah. It's just very strict, very basic definition of usability, it has to be usable, while the expression is just not there. And I think expression is very important, right? The details that make a smile, right? And smiling is important. It's very hard to smile when you are, the only form of input is a screen reader.
</p>

<p data-time="35:34"><b>Espen:</b>
Totally. It's hard. Now, another way of looking at the same conflict, or the same challenge is not even going as far as screen readers. But you know, a few years ago, we had this real issue with browser compatibility as well. So you had constantly this challenge of Okay, you make something now, is that accessible in this form on all the different browsers? And for the longest time, the answer was no, on this browser, you get the text and the pictures on this browser, you get the text, the pictures and the visual details, because simply, we don't have the budget to sit and hack all these flourishes to make it work in the IE6, or whatever. We did, at my previous job, we we did our annual report for a big bank. And we had some illustrations at sort of the chapter intros or whatever you want to call them, that each section had its own illustration at the top. And I thought, I've been nice to animate these in some way. So there was some graphs and some whatnot that would fade in. And it wasn't anything critical. There was no critical information there. It was just this, it made the page come alive just slightly. But there was no real budget for this. And it was just me doing it. So I said, Look, give us two days, and I'll go and make some animations. And we did the animations, we came back. And suddenly it turns out, some of the things in some of the animations didn't work in in Safari. And then it raises for me an interesting philosophical question, because does that mean that you shouldn't have the animation at all? Because it doesn't work somewhere? It's inaccessible to some people? Does that mean it shouldn't be supplied to other people? Or should you change it in a way that's, I guess, more boring or different? Or not as nice, but it works everybody or everywhere? Or is it okay to say, you know, you have this equipment, so you get this version? You have this other equipment, you get this other version? It's the same, obviously, in this case, it's not important information. So it doesn't matter as much. But it's the same type of conflict, isn't it with accessible stuff and a non accessible stuff if I have the resources or the intent or the will or the idea to create some <abbr title="Graphics Library"><abbr>GL</abbr></abbr> 3d, crazy, funky looking thing? Should I not create that? Because I won't be able to recreate it for everybody?
</p>

<p data-time="36:45"><b>Vasilis:</b>
Very good question. And I think it's even a weird question. I mean, I have the same discussion over and over with, with all the clients. When progress financement was new, and <abbr title="Internet Explorer">IE</abbr> six, or <abbr>IE</abbr> seven, or eight, or the <abbr>IE</abbr> family was the biggest family by far. And we had all this cool stuff that we could use. And I would say, instead of just sending all these images to all these old browsers, let's just make square corners send square corners to old browsers and rounded corners to new browsers. And that was just no way—
</p>

<p data-time="38:49"><b>Espen:</b>
Right? Ugh
</p>

<p data-time="38:49"><b>Vasilis:</b>
And even later on, right, these things like the simple animations, then it will be not, then we won't do it for anybody. But the weird thing is that layout, they would accept it, that, well, if your device doesn't support layout—
</p>

<p data-time="39:04"><b>Espen:</b>
Single column is fine
</p>

<p data-time="39:05"><b>Vasilis:</b>
Because it is too small,
</p>

<p data-time="39:06"><b>Espen:</b>
Oh yeah
</p>

<p data-time="39:07"><b>Vasilis:</b>
Single column is fine. But then when it's wider, we need layout. And this was silly, because layout, making layout for <abbr>IE</abbr> was hard. And making layout for modern browsers is easy.
</p>

<p data-time="39:20"><b>Espen:</b>
Yeah.
</p>

<p data-time="39:20"><b>Vasilis:</b>
Right. And then we had to emulate layout with old fashioned techniques for old browsers. Because, this is something that's weird. Yeah. But browsers are getting better this. Should browsers actually should shouldn't. Shouldn't it be the thing that browsers should fix instead of us designers and developers fixing it? Because if you look at web accessibility, what is it 20 or 30 years brought us I think, only more inaccessible websites, right.
</p>

<p data-time="39:55"><b>Espen:</b>
I don't know. I don't know if that's a—
</p>

<p data-time="39:56"><b>Vasilis:</b>
We have much more inaccessible websites nowadays than we had 30 years—
</p>

<p data-time="40:00"><b>Espen:</b>
Yeah but i think i think that that's an explosion of, of technologies making the act of producing websites more accessible to people rather than the failings of the accessibility movement.
</p>

<p data-time="40:15"><b>Vasilis:</b>
Yeah
</p>

<p data-time="40:15"><b>Espen:</b>
You know, I can I have, I have technology at my fingertips that it allows me to make shit websites. So I'm gonna do that.
</p>

<p data-time="40:24"><b>Vasilis:</b>
Yeah. So but but then are we targeting the right people? So we are talking to designers and developers make your websites accessible? Well, if you look at just any website, that doesn't matter which one, you look at the heading level hierarchy, it's just not good. Probably. It's never good. If you look at link text it's probably not good. So all these basics, things, people just don't know it. So are we aren't we talking to the wrong people? And shouldn't browsers fix this stuff? So if it's, if all the links just say read more, then Shouldn't the browser add more context to it? Or Shouldn't the screen reader add more context to it, if you want to have it read out loud?
</p>

<p data-time="41:08"><b>Espen:</b>
That would be amazing. If but, you know, it's I think, in any case, it's really good advice or best practice to not say read more anyway, even for people who can see visually is more informative. If it says, check out the latest episode, instead of read more or view all episodes, you know. But a great example of this, I think, would be alt text for images. Because now it's not it's hardly designers or developers that are certainly responsible for the alt text is the publisher, some some person who wrote the blog article or a magazine article somewhere? They have to add this alt text in WordPress or whatever <abbr title="Content Management System">CMS</abbr>. So and that's something I think <abbr>AI</abbr> should be able to write for us. Here's a picture of a dog.
</p>

<p data-time="41:58"><b>Vasilis:</b>
I don't know if you've ever heard, have you ever heard generated alt text?
</p>

<p data-time="42:03"><b>Espen:</b>
No I haven't.
</p>

<p data-time="42:05"><b>Vasilis:</b>
I think it's the same 80 ?. It works, often. But when it doesn't work—
</p>

<p data-time="42:14"><b>Espen:</b>
That's back to that question. Again, though, if you could do it for you know, quote, unquote, free, it was built into all browsers. And it worked in 80% of cases, the <abbr>AI</abbr> got it, right. But you would have a whole bunch of cases where it wasn't right. And your designers and developers and publisher would become lazy, because they wouldn't think about it anymore. Now, does that mean you should do it? Because most of the time it would work? Or should you not do it? Because it doesn't work all the time?
</p>

<p data-time="42:41"><b>Vasilis:</b>
Well, and in this case, we even assume that publishers take the time to add alternative text, but they don't know. Right? So if you add an <abbr>AI</abbr> to read out the images, it's probably better.
</p>

<p data-time="42:56"><b>Espen:</b>
Yeah, I'd maybe at least do it as a default. And then you can override it if it if you see that is wrong, if you happen to see it. It's the same way. Just slightly talking about performance. You can't expect publishers to have Photoshop installed and optimise their images. It has to be the technology that does this.
</p>

<p data-time="43:17"><b>Vasilis:</b>
Of course, of course, it's very easy to have the technology.
</p>

<p data-time="43:19"><b>Espen:</b>
Yeah you will think so.
</p>

<p data-time="43:22"><b>Vasilis:</b>
Yeah, well, I actually made it myself. And so if I can do it, a real developer should be able to—
</p>

<p data-time="43:29"><b>Espen:</b>
Actually i think i think it's built into to WordPress. Now of course, there's going to be opinions about what's the correct level of optimization? And how much do you do? Do you degrade images and stuff? And similarly, if there was <abbr>AI</abbr> that wrote alt text or or changed your semantics or added context to your link text? There would be some conversations about bias and opinion and you know, how to implement it. But of course, I think I don't I don't think in my lifetime that you'll have visual designers who have the time, resources, interest and technical ability to to recreate the screen reader experience, I do think it needs to come from a technical perspective you know, it has to be as a designer—
</p>

<p data-time="44:16"><b>Vasilis:</b>
or a sound designer, sound designer.
</p>

<p data-time="44:19"><b>Espen:</b>
Sure if you're the big bank and you can employ a team of 10 people to make this website that's great, but if there's two of you, you need you need the technology to do it just like you need WordPress or whatever to optimise your images. You would need the screen reader to optimise the text or to read it out properly or something but of course—
</p>

<p data-time="44:38"><b>Vasilis:</b>
I'm not I always start imagining design tools that you have your headphones on and you're designing this headline with colours and then it starts speaking to you what it would sound
</p>

<p data-time="44:49"><b>Espen:</b>
That would be amazing.
</p>

<p data-time="44:51"><b>Vasilis:</b>
Simply adjusted No, no, no, no, no, no the voice should be less pink sounds to red now. Yeah, tools could be so bad.
</p>

<p data-time="45:04"><b>Espen:</b>
At that level, I think it would work. You know, if you sit in. I guess at that point, you wouldn't even sit in figma. You maybe you just sit and you do this stuff in some sort of code based design tool with a headset. Yeah. Then I think you could grab people, if it was that accessible. It would be it would be fun to play with and then suddenly you would have this experiences there.
</p>

<p data-time="45:27"><b>Vasilis:</b>
Now it's the opposite. So last week, I tested or my students tested their own website that I've been in the last weeks they tested it with a screen reader. And just the class was just it was chaos. They were screaming and yeah—
</p>

<p data-time="45:42"><b>Espen:</b>
Revolution!
</p>

<p data-time="45:44"><b>Vasilis:</b>
No, no, no, they hated it. They they, they just did, they couldn't understand it. And they were just, they had headaches afterwards. It was just awful, awful experience. And then discuss with them and look at your website. It looks good, right? Well, not all of them of course, but they were happy with it. And there were some funny details. All was lost. All is lost on these screen readers. Yeah, we need better tooling for that. For sure.
</p>

<p data-time="46:15"><b>Espen:</b>
Yeah
</p>

<p data-time="46:18"><b>Vasilis:</b>
Ok. I thought we will be done in 10 minutes with these—
</p>

<p data-time="46:23"><b>Espen:</b>
I guess we are able to rant and rant.
</p>

<p data-time="46:32"><b>Vasilis:</b>
Okay, thanks again for a very nice conversation.
</p>

<p data-time="46:34"><b>Espen:</b>
Likewise. I'll see you next time.
</p>

<p>Outro music by xyce</p>

## Why does this page look like&nbsp;this?

It is a common practice to say that you design your websites for 80% of the visitors. The other 20% are edge cases and can be ignored. From a business perspective this <em>could</em> make sense. In the short term this may give you enough profit. And the idea is that the cost of developing the site stays low: it is easier to design something when you don’t have to think about so called <em>edge cases</em>

I took exactly this very common approach when I designed this page. Like all <em>good</em> designers I first picked a persona. And just like all designers I picked a persona that resembles someone I know very well. In this case, the persona resembles me. So I can now scientifically say that 80% of the visitors like lots of bright colours that slowly change. And 80% of the visitors want the logo to be in the footer. And 80% of the visitors agree that the best place for the navigation is also in the footer.

I took this 80% value quite literally when I picked <a href="https://www.typotheque.com/fonts/maro">the font</a>: 20% of each letter is invisible. Which of course, makes it harder to read. But after extensive research with our persona it turns out that 80% of our visitors don’t mind.

<p class="sig">—Vasilis</p>


