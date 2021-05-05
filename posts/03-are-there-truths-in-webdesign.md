---
episode: 3
title: Are there truths in webdesign?
description: In which waste an hour before making an obvious conclusion.
audio: /sound/WM003-design-truths.mp3
audiolength: 28523289 #mandatory, size in bytes! No idea how to do this in Eleventy )-:
duration: 00:35:43 #mandatory, duration in hh:mm:ss
date: 2021-04-12
# You can add (multiple) urls to stylesheets with 'csslinks'. (Use spaces, not tabs here)
csslinks:
 - /css/css.css
 - /css/episode3.css
# If you want to add a block of preformatted code to the head you can use 'head'
# Beware: use spaces, not tabs.
#head: |
# <link rel="stylesheet" href="/css/episode1.css">
# <link rel="stylesheet" href="https://fonts.typotheque.com/WF-023273-011456.css">
# If you want to add a block of preformatted code to the end of the document you can use 'foot'
# Beware: use spaces, not tabs.
#foot: |
# <script>var hoi;</script>
# <script>var hoi;</script>
layout: layouts/post.njk
intro: In the third episode of Web Materials, we ask whether there are truths in web design. We quickly answer "no", before spending an hour making, well, more or less the same conclusion.

# styletoggle: I can’t read it.
---

## Shownotes

- [About this episode’s art direction](https://webmaterials.design/posts/03-are-there-truths-in-webdesign/#why-does-this-page-look-like-this%3F)

## Transcript

<p class="closed-caption">[Intro music by xyce]</p>

**Espen:** So is there such a thing as truth in web design?

**Vasilis:** If you break the rules, you'll go to jail.

**E:** Last week we spoke about we ... spoke about whether we're done with internet. Fairly quickly, we answered, No, we're not done. There's plenty to discover. There's plenty to explore. But, I still wonder, I think is related to this, that if we're not, if we're not completely done, is there any part of our industry, of the stuff that we've created over the last, you know, few decades, that can be considered truth? So, so is there such a thing as truth in web design? Are there elements of what we do that are defined already, that are done?

**V:** Very interesting question, I think. I think again, we could do a quick answer, and say, No. That will be a very boring podcast.

**E:** Absolutely.

**V:** Yeah.

**E:** Maybe, maybe, a good start is to talk about truth itself that in in this context, what do we mean by that? Obviously, some people might argue that there's no truth other than mathematical truths. And you know, if, if anything is offered for discussion, it can't be a truth. And I know you have some thoughts about truth, because your father was a scientist.

**V:** Yeah. So I live by... So he always taught me that there is no such thing as truth. There are hypotheses. So you can just find something that you may consider to be true. And then you live by this truth until you find a better hypothesis or a counter argument. And then it's not true anymore. And you just live by the next truth.

**E:** Yes.

**V:** I really like this attitude. And I think this is a attitude that. I mean, you see it all the time. I mean, it happens everywhere. There are no truths. I mean, if there were real truths, then we will be living like, I mean, people lived 20,000 years ago, but we don't.

**E:** That's a very, very good point. At the same time, the way, the way you describe truth there or the absence of truth, it means that you have these temporary truths. If something has been proven to work or not proven not to work, especially over a long period of time, I guess you can say, we consider this to be true. It's so far. So far, there's nothing to say that this isn't true. So we're going to just stick with it.

**V:** Yeah, completely agree. Have you seen that the last talk that Jeremy Keith did? Or, I don't know if it's the last one. But it's where he talks about, what did he call it? Let me see, I made a note. He said that the layers of the web. So he said there are, more than one layer and some layers, they move slowly, and others move faster. So for instance, the protocol that sends data over the internet, that's a very slow moving layer. And this could be considered a truth. Or if you want a slow moving truth, a slow changing truth. And things like HTML or CSS, they move faster, so they don't take decades to change, they take years to change. And then there's something like JavaScript, it changes all the time.

**E:** There's something about the fact that we use HTML has not changed. I guess that's where you're talking about the protocol of actually transferring the data.

**V:** Yeah, yeah. Yeah. So and that's no, that's even HTTP or TCP. Those things change really, really, really slowly or don't change at all. So, you could look at some things that maybe are not true, but they they just change so slowly that you could consider them to be true. And I think there are a few things. So for instance, and maybe there are even truths. So for instance, how do we perceive colour? This is just, this is... just how people how our eyes, how it works. So there are certain colour combinations that just you cannot use them for readability. So if you design something that needs to be readable, you cannot use orange on blue, I guess.

**E:** Yes. And similarly, you can't use really, really, really faint grey on white, or a really, really, really dark grey on black. There is a certain point for all human beings where the contrast is too slight, and you can't see anything. 

**V:** Yeah.

**E:** So in order to, there needs to be sufficient contrast for people to read.

**V:** I guess so, but then, of course, it's complicated to define sufficient. So it could be a rule to say this should be sufficient. But then we need research that says: What is sufficient. So for instance, you could use the contrast checker and it tells you this is AA or AAA according to the WCAC rules. But then a student of mine, last week, she did some testing with a real person with macular degeneration. So this means that in the centre of his eyes, there are these dots, and they are growing. So he, his eyesight is deteriorating. And he only has some eyesight on the left side of his left eye I think left. So it's in the periphery of his eye, he can still oversight, he can still see something. And for him, high contrasts they hurt, right. And the things that actually work for him are contrast that are not allowed, according to WCAG. So the things that work best for him. So for instance, I think red on black works really well for him. He just enjoys it, he really likes it. But this is something that you—

**E:** By the industry accepted standard, we shouldn't do that. Yeah, I also have only anecdotal issues with this standard that we've set for ourselves, in that it's very limited to, you know, there are certain criteria that are being fulfilled via an algorithm, which probably works for most people, right. But at a certain, I've noticed that, there's there's definition for small and large text. And anything above 24 pixels cancels as large text. Now for me, it would... it would, it would seem unnatural that the scale stops at 24 pixels. And something that maybe does not have enough contrast at that size would have enough contrast, if you blew it up to 100 pixels, a single word on a on a background and the word fills your screen, it's going to be more easily understood then a small word in a bunch of ,in amongst a bunch of other words in the paragraph, for example. So maybe the issue here is that contrast is not only subjective, but but context specific as well.

**V:** But that's something that I think of all the rules that it could come up with. Yeah, they apply unless, I mean, or until you start testing or until you meet somebody who says no, it doesn't work for me. 

**E:** Yeah. 

**V:** Yeah.

**E:** What about... what about things like—

**V:** I always tell my students that they are not rules. But they're good to understand. And they are good starting points. And if you're not a good designer, then they're pretty good rules to live by. I mean, then you, you'll know that it's not ugly, and it's usable, if you just follow those rules. But you should always – and they're not rules in the sense that if you break the rules, you'll go to jail.

**E:** This is very true

**V:** So on the contrary, I would say, if you know the rules, you know how you can break them and how you can bend them to make something more interesting or something better.

**E:** Yeah, sure. And also, if you were to design a website that works really, really well, for this particular person with the deteriorating eyesight, where contrast is an issue in the opposite way to a lot of other people were you're always going to upset the other side of that particular issue.

**V:** Yeah, or you could say there's some more research needed, and then you could probably come up with a few contrasts that work for everybody.

**E:** Potentially, yes.

**V:** Yeah. So this could definitely be done. Well, not for everybody. But a large large sum of people could read some stuff.

**E:** Yeah. I saw on Twitter, Vasilis, you also mentioned, measure or the line length as a potential truth. 

**V:** Yeah. 

**E:** Is that universal? Or or do people have different preferences or different—

**V:** That's very interesting again, So, the measure, of course, it's the width of the line over, the width of a paragraph, you could say, so. And so I read a few books about, about layout and about typography. And there are different ways to define the the best measure. So if you look at, for instance, Müller-Brockmann, he was I think a Swiss designer, he looked at words, so he looked at word length. So he said, if you have 10 to 12 words on a line, then it's easily readable. Now, this is, of course, very interesting, because this would mean that an English layout would be considerably smaller than a German layout. Which, words in German are just probably three times as wide as English words. I actually discussed this once with with KLM, the Dutch.. What do you call them? Airplane... airline? And so I said, should we make a different layout for every language? Whoah, whoah, whoah, different devices are hard enough. We don't need languages as well. So I think, from a practical point of view, so it really works. So if you if I made an international measure slider once where you can just based in your own text in there, and you can just slide until it reaches 12 words on average. And this is a nice measure, it really reads nice, nicely. But when we don't have the word unit in CSS, so it's it's hard to, say, max-width 12 words—

**E:** 12 words exactly, yeah

**V:** Yeah. So it's, it's it's not very practical to use that as a unit. But then Robert Bringhurst, he wrote, of course, the famous book "The Elements of Typographic Style", and this is an inspiration to many typographers, and designers on the web. I read it as well. And there's just one, I think, or two paragraphs about the measure. And at the end of that paragraph, he says, somewhere between 20 and 40 times the font size, that's the ideal measure. So that's not a rule, of course, because it's somewhere between, but there's somewhere between is very interesting from a responsive design point of view, of course, because the web is fluid, we don't know the exact size of the screen. So somewhere between 20 and 40 em, or 20, or 40 em, I mean, font size is em, so this is actually something that we can use in CSS, we can say, max width 30 em, and it will read well. And if you're German, you can just make it bigger than 40 and go to 40 em, and yes, be nice in German as well.

**E:** I've also I've also heard and the numbers that I tend to stick to are between 45 and 75 characters, I think it is, or 45 to 70, something like that. And I wonder if that probably correlates roughly to, you know, 20 to 40 em.

**V:** This is actually in the same paragraph. The thing is that that many designers, they only read the beginning of the paragraph. And then they start, they say, okay, 75 characters, how do we do that? Then we have the ch unit in CSS, but this is not really a character. So how do you count characters? Then at the end of that same paragraph, he says, this is roughly somewhere between 20 and 40 times the size of the font, which is the em, which is perfectly translatable to CSS.

**E:** Yes, it as if it's... it's designed to work with CSS and the em unit.

**V:** Yeah, almost. The problem is 20 em. Because the iPhone, the the older iPhones, they were the screens were 20 em wide. So this would mean that you cannot follow the rule on a smaller iPhone. Because it needs some whitespace left and right. Yeah.

**E:** Yeah, I also find that the lower end of those numbers, say 50 characters, 40 characters, even down into the 30s works way better for headlines, than, than for paragraphs. So if I'm setting a big paragraph of text, and it's quite a quite a lot of text on the page, you know, I tend to use the upper end of the scale, whereas if it's a headline, I'll use lower range, I think, even in the same layout, maybe the same number wouldn't apply to the different sizes of text that you have there.

**V:** I think it also, it has to do – I mean, the reason why the measure works? I mean, that's interesting, of course. So, I mean, you can just follow the rules. But why are those rules there? And the reason is simple, because you don't want to move your head too much. Right? So you don't want to move your eyes too much. You don't want to have to search for the next line. Yeah, just want to be able to read quickly. And in a book, it was it almost, you almost don't have to think about it because a book has a size. And I mean, you just read the end, you just reach the end of the paper, and you go to the next line. So it's there's just a physical limit to how wide you can make a measure. But on the web, of course, and you see that still, I think on Wikipedia, there is no such limits. The lines, just, if you don't give a max width to a paragraph, it'll just keep on growing.


**E:** Exactly. I actually wonder if this is, you know, back in the day, this is part of the reason why, you know, your typical print designers would violate the fluidity of the web, because we sat down and we thought, oh my God, I can't have the text run from completely on the left hand side of the screen to the right hand side of the screen. That's not how typography works. Whereas maybe the more hardcore web community, especially in the early days, were a bit like, well, no, the web is a fluid medium. It's... you should just leave it like that. And you can always adjust the size of your browser window, I suppose. 


**V:** Yeah. I think yeah, that came later. I mean, in the beginning, the web's the screens were 480 pixels wide. So we didn't have the measure problem then yet. 640 still not really a problem. 800 by then we had a sub navigation on the left, so wasn't really a problem.


**E:** Yeah, yeah. 


**V:** But now with a very, very big screens it of course, you need a max width. And and these are just, they're the fine numbers just don't go over 40 em, and it's okay. I actually usually sit somewhere around 30 em, and it's nice to read. And sometimes I use the international measure slider, will link to it in the show notes.

**E:** Yeah. Excellent.

**V:** Use it somewhere. Sometimes I use words.

**E:** Right. So we can say— 

**V:** yeah, no, go on, we can say...

**E:** Oh we can say that there's, there is such a thing as bad contrast. And there is such a thing as too short or too long a line of text, although exactly where those, what the numbers would be, are subject to individual preference and context.

**V:** And context, of course, I mean, if you look at somebody like David Carson, I mean, he used an extreme measure every now and then. And he used Wingdings as a font. When he said, "well this article isn't interesting anyway, so I'll just make it visually interesting". I mean, sometimes you just really have to break the rules all the way, which is, I think, very interesting as well. And that, this maybe brings us to font size, this is something that we could discuss a little bit. I mean, these are the classic things that are considered truths. Font size, you can see if a print designer designed a website, because they'll use a very small font size. And they like small fonts, and they don't like bigger fonts. And I think they forget why fonts are actually small on paper. And this is just an economic thing. It's, it's a concession between economics and readability. I mean, from an economic point of view, from a financial point of view, you want your letters to be as small as possible, because otherwise it's much too expensive to print a book. From a readability point of view, you want larger fonts, because then you don't need to put on your reading glasses. And this is nicer for people.

**E:** Yes, up to a certain point. Of course. If the font is large, you would have to turn the page like way too often. 

**V:** Yeah, yeah. 

**E:** Yeah.

**V:** Yeah. So there is a it's, it makes sense to keep it as small as possible on paper. And they came, I think, a 12 point, which I think is somewhere around 10 pixels. So that's why print is often so small. But on the web there is this, we don't have this limitation. So it doesn't make any sense to use small text, we can go much larger. And luckily, we see that in recent years, but still, sometimes you see print designers who say, No, we need smaller text. Yeah.

**E:** And then the where's the truth in this? Are you saying that there is no ideal font size as well?

**V:** Well, there is, of course, the default font size of your browser. Which mean, then we have to assume that browser makers thought about it. Or designed. And there is actually in the spec, there is this thing about how big should a pixel be? This is a really weird, this is, I think, probably the most weird thing in the definition of the web, or where it's decided decided how it works. So the pixel is, I think, 1/97 of an inch. At an arm's length. An arm's length! I mean, this is mediaeval measure, right? The size of your foot, the length of your arm.

**E:** It's a very accurate fraction of an inch, measured against a very inaccurate measurement of the arms.

**V:** Yeah. But it makes sense. It is about what's the diff, what's the distance, that you'll probably be using this device? Yeah. So for instance, a television is probably at at least two arm's length from your eye. So there a pixel should be twice as big as on your laptop. And this is also something. Yeah, so and it's actually how it works. So a telephone is probably used a bit closer to your eyes. So here pixels are smaller. So this is about the physical size of a pixel. So you could say that, yes, these device makers probably put some thought in it.

**E:** Kind of, but then when did they put this thought into it? The monitors that we see things on nowadays are much bigger than what they were when these, this.. this default size was defined? Are they not? 

**V:** Yeah but then it's it's about the CSS pixel, which is different than the physical picture pixels. So for instance, I look at a retina screen. And every CSS pixel is, I think, on my screen for physical picture, big pixels.

**E:** Yes, but what I mean is, let's, let's say the standard font size would be 16 pixels, obviously, that... that should appear roughly the same size, whether you're on a.. on a standard def or a high def, retina screen. However, the space that you have available is much bigger. So if we, if we still use 16 pixel as the ideal base font size, you would end up with paragraphs that are, you know, at the ideal measure, they only utilise a tiny, tiny amount of the screen available. And you see more and more now with fluid typography. We actually, once you get to larger desktop devices, you scale up the typography so that you have a much – you can almost sit back a bit in your chair to take it all in because the font size becomes larger ... I wonder if the original definition is tied to or at least influenced by smaller viewports that were, you know, dominant at the time.

**V:** Yeah. So I guess you could say 16 pixels is not the rule for all screens, but it should be a minimum size. It should probably not be smaller than 16 pixels.

**E:** For for body text, at least. Maybe on a on a phone in some interface elements, the small details here and there. I think you would struggle if everything was 16 pixels.

**E:** Okay, well, yeah, we can say that there's definitely something as being too small. And there's probably at some end of the scale, something is too big as well. At least for body text. Yeah.

**V:** Then, and it's also what's the, what's the text for so for instance, you have the small text, write the disclaimers, in and in books that used to be printed in real small font, and that's because it's not really something that anybody reads, but it should be there. And it takes up lots of space if you use a big font. So there, all the good typography rules suddenly don't apply anymore. And it's just put as much text as possible, on as little paper as possible. But I would say I would argue that on the web, we should use, we should call it not small font, or small text, but large text, we should actually print it in larger font, because it's always jargon. It's hard to read complicated sentences. So it really should be laid out in a way that is easier to read to make that makes it easier for people to read.

**E:**  Yeah, so we don't have the restriction of, of economy of paper and print. Yeah. What we do have, though, I would argue, at least on smaller devices, is the economy of viewports. And, you know, wanting to show a certain amount of content above the fold. And this is maybe more relevant in product design, or apps, like, I don't know, like YouTube, for example, you maybe want to show three or four, previews of a video. And there are going to be elements there, such as the view count, or the date or the, you know, likes things like these peripheral elements, that would eat up a lot of space, if it was all large type.

**V:** I think this is one of the great things that mobile design brought us that is that all of a sudden, we had to think about space. And we had to think about what's really important. And if you look at web design, before responsive design, and after responsive design, I think the biggest change is that we don't fill up all the whitespace with stuff anymore. We just leave the whitespace as it is and only show what's really necessary. I mean, it's not that's not a really a rule. You don't see that everywhere. But it makes it so much easier to make a responsive design if you have fewer things. 

**E:** Yeah. 

**V:** Right. So definitely, yeah.

**E:** I wonder if that's also come out of this acceptance that people actually scroll on a website, there certainly was a time in my career where everything had to be crammed into this, you know, 600 pixels height or something like that. Which of course makes it very difficult to create anything with contrast in size, anything that is airy, or anything that's open. So at least now there's an acceptance that yep, we know how to scroll things. Maybe that's a— 

**V:** I used to work for KLM long time ago. And back then the homepage was crammed into, I think 900 pixels, 960 pixels. And I think it was even something like 500 pixels height because they counted all kinds of possible bars at the top and the bottom of the browser. And there were these endless discussions about who would get some space on this.. really just just tiny postcard. And – incredible – so at one point, I just sent them a screenshot of, we back then we had these enormous iMacs and I sent them a screenshot of this tiny website, somewhere in the middle of this huge blank screen. Maybe we should discuss this idea, that people have this small, viewport. And then indeed, they accepted the fact that people scroll and if you design things correctly, you can even show people that there's more beyond the fold.

**E:** Yes, the whole scroll thing is, of course people scroll, but it's still challenging I think for for, especially people like KLM or, or larger organisations where the website is not only it's not just, you know, here's what we do take a look at our stuff. It's absolutely crucial to their business model. And a tiny change here or there could actually, you know, can make a difference of 1000s of euros or 1000s of pounds. Yeah, yeah. And I wonder if then this mindset of it all has to fit there. Obviously, after that we saw the carousel pattern of  – obviously some smart designer, said don't worry about it, we can put everything you want on this postcard because the postcard has multiple pages!

**V:** This is actually the most, the silly thing about carousels of course, is that you don't show everything you hide most of it.

**E:** Yes. And you hide it behind the mechanism that is way less intuitive than scrolling.

**V:** Yeah, yeah. I mean, how often have you miss clicked something because the character carousel start flipping When you wanted to click on something, this is of course a usability problem. Yep. So that's it. A carousel is not a rule and fitting everything into the fold is not a rule. 

**E:** It's not a rule. Yeah, I think at least there's some subset of our industry would think that not including a carousel is a rule. Yeah. To which to which I would say, iPhone interfaces are essentially carousels. But you know, that's, that's, I think that's a context specific as well. 

**V:** Yeah. Yeah. 

**E:** Semantics is another thing that you mentioned. We've talked so far, we've talked about a lot of typography, a lot of very, very basic design principles that I would argue are true, whether it's design as design for print, or design for web, that the context is slightly different, but the underlying principle stays the same. But on the web, we have, you know, web specific things like semantics and structure of the page that you also consider to be true, in some sense.

**V:** Well, I always considered the correct use of semantics to be true. And so I would go far, I would, I would use sectioning elements, like articles, sections, nav, footer, things like that, and use them a lot. So for instance, a homepage, if you look at our homepage, I would, until a few years ago, I would have probably used a few articles there. So every link to an article would be in an article. And every and these will all have their own headings inside them. Because this is what semantically that makes sense. And then I was taught that, why would you use semantics? Well, this is because it helps people with a screen reader. And this is a good reason, of course. So if this helps people, then you should do it. But then, one day, I decided to test with people with screen readers. And I, before that, I had only just assumed that it would be a good idea. And then I started testing. And I didn't really start testing with nerds with screen readers, but I started testing with real people who have to use a screen reader because they turned blind. And this is very different demographics. So these are people that don't really like this screen reader. And there's a lot not to like about screen readers. But so I started testing with this guy, and he said, Okay, I really want to use this website. It has all the Dutch documentaries on it. And it's just for, he is a designer, and he says, yep, for me, as a designer, this is just a great resource. And then we started testing, and the first thing the screen readers said to him, there are 150 headlines on this page and 200 links. This is just... and then this, the screen readers started saying, heading level one, level two, heading level two, heading level three, he was – why do you put all these words in your design? He just couldn't... he thought we actually wrote these words out. So if you look at semantics, semantics get read out aloud to people with a screen reader. So the semantics have to make sense. So it has to make sense. If you would read it out to somebody, you would really have to say this is a heading level here. Right? So in our example of our homepage, I didn't use articles. I didn't use heading levels. I just made it a list with items. And then it says episodes, three items. This is of course, also semantics. But these are designed semantics, I would say. So yes, it's not just use properly, but you really designed properly.

**E:** Yes, it's it's designed so that the human at the other end, might understand it better. Not so much that tech technology itself will understand it better.

**V:** Yep. Yeah. And it's really, and this is, I mean, I designed a website for this person specifically. And it doesn't have any semantics. It's just paragraphs and links. And he loves it. It's just so sometimes,

**E:** some things will be read out loud and and others won't. So heading will be read as headings but paragraphs won't for example, or list items won't be read as list items.

**V:** While there will be so it will say unordered list five items.

**E:** And right and then you just start. Yeah. Yeah, well, yeah, yeah.

**V:** But this is something that I mean, and this is also something that I think you should... For me, the only truth nowadays in design is that you should test with real people all the way along the design process. So not just, at the end, do one usability test, to validate your design decisions, but no, all the time keep on working with people. And when I mean working with really work with them, involve them. Then I would also say not designers or developers, but real people. I mean, these are the people that have to use your stuff. And these are the people who don't look at a computer screen all day. So that will be my only real rule would be that just know the rules. No, they're the the basics. But then test them and break them when necessary.

**E:**  When necessary. 

**V:** Yeah.

**E:** That that sounds like a perfect ending to this podcast Vasilis. But I have I have more stuff on my list that I want to ask you about.

**V:** I have more as well.

**E:** Good. If we if we briefly go back to this thing about semantics, I just want to add a point there as well that what might be super annoying for someone who's reliant on screen readers is super valuable for someone who relies on SEO and Google search results to display their page. So I guess, again, as with all the other stuff, we decided that these rules are or truths are context and user specific, it depends on what what do you want to get out of it. And maybe often, oftentimes, something that works for something will will break for something else or someone else. Yeah.

**V:** So I mean, of course, also, I created this website with no semantics in it at all only paragraphs. And I tested it with somebody who uses a screen reader, but he's a real power user. And he hated it. Of course, he said, there's no way for me to navigate over this page, there's no way for me to get an overview or a hierarchy of what's on it. So this was for him, it was broken. Well, for the person that I designed it for it was really good. And I think, of course, you can end up somewhere in the middle that should be there are things that work. Yeah, reasonably well for for more people. So I designed a really extreme example here, it was, of course, some way a provocative to, to look at, okay, what can we make on the opposite side of the spectrum? But then if you look at SEO, I mean, yeah. But I think they have a similar. If you look, what what does Google wants, they actually want, well written content content for people. So they're all the time working on the algorithm to say, if you write it well for people, then we will give you a bonus. If you design your website for people, but still search engine optimization, people will keep on optimising for a robots, which is weird if this robot really wants you to optimise for people. So if instead these people started focusing on people, then it would be I think there's just there's so much common ground there between what Google wants and what people want.

**E:** Yeah, I think I think part of the history is the interface in between Google and and people is that Google have to use a robot to define what what your thing does. So as long as the robot is the thing that assesses whether you've written it well, for people, well, essentially, what you're doing is writing for the robots to make the right conclusions. 

**V:** Yeah. 

**E:** You mentioned something just there to do with structure of a page. And if there's no semantics, power users on screen readers and Google and even even normal people might struggle to find their way on a web page. And the way we design web pages now is that we open with a navigation. We have a logo, a bunch of links, you know, we have a search field if their search on the page is a very, very, very well established pattern of putting your navigation up front and centre. There's even advocates that say not only should it be at the top, but it should be completely visible, not hidden. No... you should not have to click anything to see it or scroll down to it. It should always be there at the top, front right and centre. But I do know that you have your, your thoughts on this as well.

**V:** So, yeah, well, what I've seen on many websites is that the navigation is overrated. And if I go to a, if I follow a link, for instance, on Twitter, I think this is how I access most websites by clicking a link on Twitter. And this is probably most people end up on a website by clicking a link on Twitter. And this is usually accompanied by somebody who says, this is a very interesting article, read it, or here are some very beautiful animations of cats. Right? And then you click on it. And I'm really only interested in this article. In the beginning. I mean, if the article is really interesting, then I might be interested in what else is on this website. But it's not the first thing that I'm interested in. Definitely not. I'm not interested in what else is on this website. No, I'm here for the article. So don't bother me with what else. Because I have no context. I have don't have any yet. So a navigation for me, it makes sense on the homepage. So if I enter a website on the homepage, then it makes sense to tell me what's on this website. And then the navigation should be probably even bigger. If you ask me, it should be explained. Right? every element in the navigation could have a small paragraph, which explains what you can find there. So on the homepage, make it bigger if you ask me. But um, all and maybe you could even say on the first visit, you could make the navigation pretty big. But on next visits, you could just hide it because we know where it is. Or we know it's there. And we could use something like cookies for those make useful use of cookies,

**E:** Actual good use of cookies. Yeah, I think that's super interesting. I have I've had similar thoughts over over time. I've never, for example, I've never understood this, this real hatred towards the hamburger menu. Not not that I'm its biggest advocate. Because I think a lot of people see with nav items visible – and as we've seen in the last whatever few years on mobile, how these nav elements have been, I've shrunk down into icons that sit along the bottom of your mobile screen... 

**V:** Yeah

**E:** ...the data shows these, these biggest the biggest companies, YouTube, Twitter, you know, the big platforms that we use, they see uptick in "engagement", doing quote marks here, when the when the navigation is accessible, and there all the time, and there's plenty of at least anecdotal evidence that with navigation items visible, maybe there's a link to buy tickets or a link to you know, see the latest shows whatever some super, super important piece of your website. If it's written out and visible, you get more people interacting with it than not. Having said that, I really agree with this, this sense that most people end up on your website because they've clicked on something or they found something on Google, which means they've clicked on something as well. And so they're interested in this one thing. And my personal mantra for for designing web pages, or even writing web pages is on that page that people land on if there's other stuff on this website that they might be interested in. You should put that into the content that they're already looking at. You know, if that's ticket sales or the next article or whatever it is, you already have their attention. So that's where you want to put stuff that might be interesting. So in... with that, with that in mind, I feel like yeah, of course the homepage should be – not only have an expanded navigation, maybe the homepage should only be a navigation, just like you know on a, on a... in a magazine, you open up the first pages, the contents is very it's well laid out. There's pictures there, there's previews, you know, you kind of get a feel for the whole magazine. So that could be the homepage or it could be a hamburger – the hamburger could take over and be your one stop shop that just basically shows you everything that this website has to offer, as opposed to being a sort of list of links that are is maybe obscure or hidden somewhere

**V:** Or you could even make the hamburger, just read it, read it out is the Table of Contents or something like that and just link back to the homepage. Ah says, Okay, here it is, here's all the or or link to a sitemap or something like that. Why not? Yep, it's so limited, is limited. And it is... I think it's also overrated. And exactly what you say. I mean, there are probably just a few things that people can do on your website. So it doesn't make any sense to have five navigation items at the top of your page on every page, which is actually, it's also the, especially if you look at it from a at what you call landscape mode. So if you look at a desktop browser, it doesn't make any sense to put anything at the top, it should be at the left or at the right. I mean, there's room.

**E:** Yeah, we got wider and wider monitors. And instead of building on this sidebar that we had already started going no is all going to be at the top in multi layers, if possible, is interesting.

**V:** And this is also something that comes from it comes in a way from... Okay, it, I think it's just lazy design, or I would call it conservative design. This is how we do it. So this is how we do it. Right? This is very simple reasoning. We've always done it this way. So we'll keep on doing it. It's also a accessibility point of view. So some people in the accessibility worlds and no, people know where to find the navigation is at the top. So just keep it at the top because then people know where to find it.

**E:** But I think we have to be able to aknowledge—

**V:** that people are used nowadays to finding the navigation at the bottom of their websites on smaller screens or at the bottom of their app on smaller screens. So it's it's not a set in stone thing that people cannot get used to new patterns.

**E:** No, I think I think that's also down to some sort of economics at a certain level. Because if you and I, we made the web materials dot design, and we just stuck the navigation at the bottom, there's no arrow or indication it's just there. Most people will probably find it if they look for it.

**V:** But to be honest, there's really nothing to navigate to.

**E:** No, and we won't we won't lose any money if people struggle. Because you know, if people want the next episode, I'm sure they'll be able to find that. Oh, I actually, you know, if you're a KLM or a hotels.com, or whomever you are even smaller businesses, it directly ties into your revenue if people even have to think an extra three seconds to find something. So I do understand the reluctance to change things up. And of course, when there's reluctance, you create this, you know, feedback loop of a it's like a self fulfilling thing where it becomes incredibly risky to, to break out and try something different.

**V:** Yeah. Yeah. Okay. So I agree navigation, we could probably talk a whole episode about navigation. Maybe we—

**E:** I think we should. Yeah,

**V:** Yes so interesting. Then I got the... yeah, we'll we'll talk. Yeah, we'll talk about that more in another episode. Then there was a very interesting reaction to... So right before we started this podcast, I asked on Twitter if people had any design rules. And Theo Pleog, he's a colleague of mine, he answered. So I said that, for me, a real truth would be to test with people, right, and to validate, keep on validating all the time with real users and real people who don't use computers all day. I mean, this is the most interesting demographic, I think, to test with. Theo Ploeg goes one step further. He says his designs are sentience based. And I didn't know what that meant, just like you didn't. And so I asked him, and he says, it means that they focus on the impact of the design on all living beings, not only humans. So during the design process, they keep on asking themselves, what's the impact on not just me and not just my users and others, just maybe the rest of the people that we haven't considered yet. So this is the design that they do. So they think about the the consequences of their design decisions, and this this is the basis of their design. Practice. I thought that was very interesting. And this is something we don't go that far usually in our web design articles in our web design talks that we consider. So what's the result of what we make? Does it have...

**E:** Yeah, beyond, beyond ... more signups or we sold some more products? Yeah.

**V:** Is there any debris? Are there unforeseen effects?

**E:** Hmm. I mean, to me, the truth there is that whatever you put out there has an effect. It may not have a bad effect or a big effect, but it but has an effect. And and I personally believe that anything that's put together is designed in some sort of way. So if we look at just visuals to start not choosing a font is still choosing a font and not choosing a colour is still choosing colour – all, all the defaults are, that's still a choice if you want to, if you want to do that. So you can follow that same way of thinking all the way to, if I build, launch, attract people to this thing that I put out, it's going to affect the world in some way. And I'm guessing that's what they're saying, what is the wider implication?

**V:** Well, there's one way or another I before we, I used to have a podcast before this one, I'd actually talked with you on that podcast as well. So that was about quality. So I asked designers, what makes a thing good. And I talked to a lot of designers. And one of the answers that I got was from Peter Biľak. Peter Biľak, is a font designer. And he said, a thing is good, if it's good for everybody involved in the product. So it's not just so for instance, if I buy a pair of trousers, it can be good for me because it's cheap. And it could as well be very good for the business owner, because he makes a lot of money from selling lots and lots of cheap product. But it's probably not good for the people who manufacture the the trousers. So in that case, Peter says the product is not good. It's good business. And it's a good deal for me. But it's not a good product. Because in the whole product, the whole thing, there is this problem. And I think this is something that Theo uses as well. So he says it has to be good for literally every sentient based being...

**E:** that either interface with or or is affected by this product.

**V:** Yeah, yeah. So I saw yesterday, I saw this tweet from... pictures from, I think the these might have even been pictures from space. And you see these fields and fields and fields, enormous, enormous fields filled with bikes. And these are bike sharing bikes have failed bike sharing products in China. So the if you listen to bike sharing, businesses in the Netherlands, they will say we are thinking about the environments. But if I look at these pictures, No, they didn't think about the environment at all. They thought about making money from selling data. So this is I think what Theo means with, think about the consequences, the debris the unforeseen effects, and these are not unforeseen effects. I mean, they definitely knew that in four years time these bikes were done, and they didn't think about what do we do with the bikes then. So these are foreseen effects. And this is a consequence of design, I think.

**E:** Right? I agree. So So in terms of asking, Is there truth in web design? How do we relate that to that? Are we just saying, design has consequence?

**V:** And you should consider it? Yeah, yeah. And then, if you're in the luxurious position to say no, to certain design projects, because you think No, there's too much debris there, then you should say no. And if you're not in a luxurious position, then you should try to end up in this luxurious position. That's something... because I always think it's very easy for me to say, I mean, I work as a lecturer, I am in a very luxurious position, I can say no to everything. And I live in Amsterdam. So even if I wanted to work as a designer or as a developer, I would have worked more than enough here, because this is where in the Netherlands at least the design work just happens. So I could probably rather easily end up in a position where I could say no to assignments. But if you grow up somewhere in rural northern France, no way that you have this luxury, there's just not enough work there. Maybe the only real person that can give you a job is this huge Arms Factory or something like that. Right? So...

**E:** Absolutely, I don't think you need to go as far as the Arms Factory either. I think for most people, it's... it's hard to find something to work with, where there are – where everything is good all the way down the production chain, where there's no negative effects whatsoever. Many people's dream job is working at Facebook. Personally, I could never work there, for what... what, to me are obvious reasons, but I think, literally, you know, if you consider buying your jeans, there's always someone's going to be negatively affected by that process, it will be hard. And there's certainly not enough design jobs to go around in this consumerist based world, to – for all of us to work on products that are 100% good.

**V:** Yeah. But then, of course, you could mean, I have another podcast I'm doing. And this is actually about design ethics. And it's only about this subject. And it's really complicated. So what can you do as a junior designer? Who wants to work as a designer, but ends up at a company where well, some ethics are debatable. And so one of the things you could do is try to change things on a small scale there where you work, just just keep on changing the things on it on your scale. Yep. And if you don't have that choice, and you have to work at Facebook, then you will. But with Facebook, it's different. Most people have a choice. They're not most of them, but lots of them.

**E:** I think, so I don't think many people are forced to work at Facebook.

**V:** No, no.

**E:** Okay, we, we took a bit of a detour there into design ethics. I think we should potentially have an episode on that as well. Is there more? Are there more concrete examples of truths and design that we need to discuss? I'm aware that we're, this is the longest episode to date? Based on our time here now.

**V:** Well, we could of course, talk about the interaction. This, I think there are some truths in interaction. But maybe we should just have another episode about interaction and discuss it there. I think we can conclude that we talked about truths, there are some slow moving ideas that can be considered for a prolonged period of time to be truths. And there are things that people consider to be truths that are not truth and should be reconsidered.

**E:** Absolutely. And then there's a something in the middle that you know, there are guidelines available that are true in many contexts, and and not in all contexts. And there are truths that work for subsets of people or users and are truths that don't work for them. So it's it's tricky, isn't it? Maybe the answer is there's no universal truth for everything or for everyone.

**V:** I guess that's a very, we could have concluded that at the beginning.

**E:** We kind of did, didn't we – we just wasted wasted 45 minutes.

**V:** Sorry about that, everybody.

<p class="closed-caption">[Outro music by xyce]</p>

## Why does this page look like this?

For this podcast, we want to visually – and technically – play with the themes we're discussing, meaning we're leaving the door open to art direct each post individually. In this episode we talked about artistic approaches to web design. The nice thing about an artistic approach, if you ask me — Vasilis van Gemert — is that the result may feel or look off, or even wrong. It is not necessarily about creating the perfectly usable design, it is about exploring, and stretching the possibilities of the material, <abbr>CSS</abbr>.

I used Espen’s first design as a starting point, and I accepted the constraints he chose: only <abbr>CSS</abbr> colour names, default fonts, and, with the exception of the logo, no images. I used his colour pallete and only added the colour `plum`. I used `writing-mode`, for a more efficient use of space on wider screens. And I played with the rather new `text-decoration` properties. They are wonderfully unpredictable when you blow them up to ridiculous sizes. But the thing I like most about these new properties is that every browser implements them differently. `Text-decoration-style: wavy` with `text-decoration-thickness: 1.2em` looks entirely different on Firefox, Brave and Safari. Most designers still live by the strange idea that their websites should look the same in every browser. In this design I tried to do the opposite: it is a celebration of the differences.
