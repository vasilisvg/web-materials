---
episode: 4
title: What about interaction?
description: Where we talk about states, tools, screen readers and Nintendo games.
audio: /sound/WM004-what-about-interaction.mp3
audiolength: 41729163 #mandatory, size in bytes! No idea how to do this in Eleventy )-:
duration: 00:43:22 #mandatory, duration in hh:mm:ss
date: 2021-05-10
# You can add (multiple) urls to stylesheets with 'csslinks'. (Use spaces, not tabs here)
csslinks:
  - /css/css.css
  - /css/episode4.css
# If you want to add a block of preformatted code to the head you can use 'head'
# Beware: use spaces, not tabs.
#head: |
# <link rel="stylesheet" href="/css/episode1.css">
# <link rel="stylesheet" href="https://fonts.typotheque.com/WF-023273-011456.css">
# If you want to add a block of preformatted code to the end of the document you can use 'foot'
# Beware: use spaces, not tabs.
foot: #<script src="/js/js.js"></script>
layout: layouts/post.njk
intro: In the fourth episode of Web Materials, we talk about the lack of attention for interaction in design tools, and about sucky defaults when it comes to focus states. We talk about things like :focus-within and :focus-visible. Later on we discuss the similarities between Vim and screenreaders, and we end this episode by praising Nintendo games.
---

<section class="shownotes">

### Shownotes

- [About this episode’s art direction](https://webmaterials.design/posts/03-are-there-truths-in-webdesign/#why-does-this-page-look-like-this%3F)
- [About this episode’s art direction](#why-does-this-page-look-like-this%3F)
- [Jeremy Keith: The layers of the web](https://beyondtellerrand.com/events/berlin-2019/speakers/jeremy-keith)
- [The international measure slider](https://vasilis.nl/nerd/code/measure-help/)
- [An arm’s length regarding the pixel](https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel)
- [About semantics and screen readers](https://exclusive-design.vasilis.nl/design-like-its-1999/)
- [Podcast episode with Peter Biľak](https://vasilis.nl/gbi/2018/02/11/peter-bilak/)


</section>

## Transcript

<p class="closed-caption">[Intro music by xyce]</p>

<section id="conversation">

**Vasilis:** Hi Espen,

**Espen:** Hi Vasilis. This is a bit of an exciting episode for me, I know roughly what we're talking about but I'm going in blind.

**V:** Good, good, good. I really, really enjoy what we're doing, actually. So if I look at what I made last episode, and then that you took some of the elements of what I did, and turned it into something that's actually usable. It's fantastic. So I actually talked about this with a few friends of mine about how usually what I create is just artistic. And I don't really care if it works or not. If it works for me, it's fine. But but I like to experiment. And I like to play with CSS. And what I really love is that you took what I made and turned it into something. Yeah, that's, that can be called a design that's thought about, that's actually usable. So I really enjoy this. Just playing with what you made. And then I'll take that again and turn it into something weird, probably. And then I'm really looking forward to what you will make from it.

**E:** Yeah, I agree. It's, it's funny already feels like there's a pattern emerging where you break stuff, and then I try and and fix it. But in that process, I learned not only do I learn some CSS that I never seen before, obviously, I'm a I'm a novice when it comes to code. But it's fun to see, maybe you will use in this case, some some text decoration, and it looks broken in certain browsers, and it's inaccessible in others. But the basic idea, for example of colouring every other paragraph a different colour, because you know, we're, this is a two way conversation. I like that concept. And then hopefully, I made it a little bit more legible.

**V:** You definitely did. But also you used actually these huge text decorations, but only in the headings, right?

**E:** Yes.

**V:** Yeah.

**E:** And then I was terribly disappointed that it didn't look right in Safari. But you know, in the spirit of the podcast, I think we just, we just publish, and then we move on.

**V:** I was actually really, really happy that there were such big differences between these browsers. I really like that. So I'll try to find some differences in browsers again.

**E:** Excellent. Excellent.

**V:** So this episode, we're going to talk about designing interaction we're going to look at the so is not really about interaction design. If it's up to me, but it's about the, the, in my eyes, the lack of design when it comes to interaction. So this, and it's something that I've been wondering about, so why are there so few articles or so few talks on on conferences about interactivity. Because it is pretty strange because the web isn't... pages, it isn't something to only look at, it's something that you can actually interact with, you can do stuff with it. But then, if I look at the design tools, or if I look at the designs, it's usually about layout. Maybe a little bit about contrast, about typography, but it's not that much about how do you interact with this stuff, and what should it behave like. And then when there is when there are discussions about what it should behave like it's mostly about adding lots and lots of layers of JavaScript to make it behave incredibly amazing.

**E:** Yeah

**V:** Basics of interaction. This is probably what I'm talking about. This is something that when I look at, for instance, at my students, these are third year students they've been studying digital design, they've been studying interaction for three years. And they don't know the default state. So for instance, links or for instance, form fields, and there are, of course, default states, and not everybody knows them. And I suspect that after I teach the states to my students that they know more than most digital designers It might be right yeah Yeah

**E:** I think I, I'm coming at this from a pure design perspective, in that I studied magazine design, then I kind of stumbled into web design. We worked in Photoshop for years and years. And you know, Photoshop was never designed to make websites, somehow it ended up being the default. And obviously, Photoshop is extremely static. And it's just about making pictures that look like websites, and then someone else implements them. And throughout my career, up until maybe recently, the only real interaction consideration is that you know, designers should or go or usually care about to some degree is hover states. And that's, that's designers like me that are not digital natives, I would say, I think there's a new generation. And there's certainly other web designers that are more code savvy, that do care and do naturally build these things into the process. But yeah, coming from Photoshop, Illustrator, even Sketch, at least in the early days, it's certainly making flat pictures that someone else turns into code rather than making something interactive from the from the get go. Now, I would say with prototyping, especially in Figma, there's there's new technology coming out in this static image makers, that at least opened the door to making more interaction, you know, beyond hover states, even click states, or transitions or, you know, there's there's stuff built in to these tools now, where it's at least possible.

**V:** Okay, that's good to hear. So I didn't really know that. But yeah, I think it is, in part, of course, a tooling issue. We've been using the wrong tools for ages now. So I think, I mean, Sketch is obviously, a step in the right direction was, obviously, but there was there a lack of interaction. So. And I think tools could in this case, be maybe even opinionated that they tell you, hey, you forgot to add a hover state to this interactive element, or you forgot to add an active state, you have got to add a focus state or you added a focus state, but the focus state is not, it doesn't look like a focus state. You can reco—

**E:** Yeah. I think this is really interesting in that right now, in figma, which I think a lot of sketch designers jumped on the figma bandwagon in the last two years. Recently, they released something called very variables or something variants in components. So So basically, if you don't know figma, well, you can make components there. So you make a button, for example, you make it into a component. And now you can reuse that component anywhere else in your design, and you have one source of truth, you can update it, and it's reflected everywhere. Well, this new thing is you can inside your component, you can make variations on that component, and dif different states essentially. So if you made the button, you can now click, you know, you can make a duplicate and make the hover state and the click state and the focus state and whatever state you want to make. And then you can link those together. So that when you play your prototype, the hover states actually function as they should, and they click states work, etc. This is great. However, what you're saying there, wouldn't it be nice then is figma just said: Look, when you click this button to create a variation of your components, maybe there should be a drop down that says, make this into a button. And then you have all the states listed at just just having them presented to me as a designer would make me at least consider that maybe I ignore them. But as you know, it will be such an easy, small step just to expose designers to all the different states that we could consider.

**V:** Yeah, agreed there. And I think to do that, of course, I mean, they give you options anyway. So why not give you options? Oh, I think the "you, this looks like a button...", where's the disabled state? what would that look like? And if you don't design those states, I mean, those states, they do exist. So if you don't design them, but if they're needed in the application, then the front end developer or maybe even the back end developer will design them. And this is probably not what you want. Right?

**E:** Yeah. Yeah, it's a bit like, if you don't include a bold font in your font setup, the browser will just make one for you. And that's usually not what you want.

**V:** Yeah. Yeah. So and then, if we look at the different states, we've got hover. Hover is designed, usually. But if you look at focus states. So, we, my students, a group of students of mine, they designed applications of small prototypes for a friend of mine who's severely motor disabled. And the first time they designed for him, they assumed that he uses the tab key to tab, to focus from focus, small element to focus more elements. So they created the whole application, and they just designed the focus states to be easily recognised as something that is has focused. And then it turned out that he never uses the tab key. Just never. So even if you have all these, and then they asked him, of course, why don't you use it. And then he told me that he doesn't use it because focus is broken. I don't know if you ever tried to just tab through, for instance, The Guardian or something, just use the tab key to go from—

**E:** Every now and then I'm forced to, of course, because I'm working on a Mac. And I don't know, if you're aware of the Magic Mouse charging problem, where the the port to charge your mouse is on the underside of the mouse. So obviously, if you run on a battery, you don't have a mouse. So in those few rare cases, I do have to use the tab key, but I usually avoid browsing the internet during that period. But he said that focus is broken.

**V:** Yeah—

**E:** I'm assuming that means go goes beyond the visual state of focus.

**V:** Yeah, but but if you look at the default state of focus, then it's I think, even then it's broken. So if you try to tap through a just plain HTML page, it looks ugly. On Firefox, it's really hard to find the focus state, it's just a few dots. There's on Firefox has this weird issue where the focused element can actually disappear behind the status bar at the bottom of the page. Right? In Chrome, I'm not sure if they fixed that. But there's things like, large parts of the element that are focused can actually be under the fault. So it can be unreadable. So it has been broken for forever.

**E:** Yeah, the actually limitation of it.

**V:** Yeah, the actual implementation of it. And then there's the other problem that these default focus states, they are ugly. So for instance, the on Chrome, I think there's a blue, some sort of a shiny, outline. And many designers and art directors don't like it. So the front end developer remove it. And then the front end developer, they just remove the focus state. So on many websites, there is no focus state. So you can just tab through the whole thing, but it's just invisible, where the focus is. And this, I think, is a lack of understanding what the focus state is, right? what it what it's for, and what why you need it and who needs it. So I teach my students use the focus state, but or if the art director tells you to remove the focus state reply that you you cannot remove it, but you can make it better.

**E:** You can make it help. Yeah,

**V:** Yeah. You can. Yeah—

**E:** I think you're right, that is super ugly. And I've been guilty of removing it, too. I remember, I don't know if it's, this is still the case. But there's been times where, you know, you click a link on a webpage, and he gets a dotted line around the link. And as a designer, I go, Oh, my God, we can't have that. Let's just remove that. And then of course, yeah, then you break the experience for for someone else.

**V:** Yeah. The good thing is that they created a new thing called focus visible, which is when you want focus, then the focus outline becomes or then you can style it. So that's this, this this clicking thing that if you click it, you probably don't want the focus ring to appear. So you can now style only when somebody uses the keyboard. So it's a silver focus intent.

**E:** Yeah, that makes a lot of sense.

**V:** That so and then there's other really nice stuff like the focus within another focus within.

**E:** No?

**V:** Focus within is really great. You can, this is some sort of a magic thing. So if a form has something, in the form has focus, you can style the form.

**E:** I see. So if there's a field that has focus inside of the bigger form, you can tap to the form itself or highlight the form itself.

**V:** Yeah,

**E:** Right.

**V:** Yeah. And this way, you can, for instance, grow a form when it receives focus or change the colour. Some real nice things are possible there. This is something I think we haven't explored yet. Because this is something that you can use it's but can easily abused it as well. You can. If something receives focus, you can basically hide it. Or—

**E:** Yeah

**V:** ...hide your whole body.

**E:** Yeah  You can do anything you want. This will be a very interesting design for a next episode.

**V:** You should probably take a look at the webpage because there will be stuff like that.

**E:** Yeah, no, I had no idea about focus inside. I mean, it's, it, to be honest, the latest, the last episode, the design on the website, I made this little measure measure thing where you could change the measure of the of the paragraphs. Now, I hacked it together the way Google told me to because you know, I'm not an expert in these things. But then there's this issue of wrapping a radio button in the label, because you want the whole thing to be clickable, and maybe also focus bubble and hover bubble and all these things. And that's to me strikes me as a perfect mini example of being able to just style the containing element if you're focusing on what's inside it.

**V:** Okay, yeah, yeah. So with a label and the input inside it.

**E:** Well, if I want to know if I want a box in my radio buttons, if I select or focus on one of those radio buttons, I want the whole box to do something.

**V:** Yeah, exactly. Yeah. And this is what the focus within is probably meant for. But you can also style the complete body if something has focused.

**E:** Of course, yeah. Any any parents can be any experiment.

**V:** And this is strange, because we don't have the parent selector in in CSS. But with this we do, with interaction you do have the parents selector. Yeah.

**E:** All right, let's focus.

**V:** Yeah, focus. And then there's other. Then we, another group of students of mine, they worked with somebody who is slowly turning blind. And he has to get used to a screen reader. But he really, really hates the way his screen reader works. I don't know. Have you ever tried to use a screen reader?

**E:** No, no.

**V:** This is also something I think is a bit weird that most designers never tried to screen reader. While many of our users will actually use our websites with a screen reader. Screen readers a horrible horrible things. But they're it's fantastic that they exist because they open up the web, and they open up computers to people who cannot see but the the way they work. Do you know VI, the text editor, or vim?

**E:** Yes. Sadly, yes.

**V:** Screen readers, they work like Vim. They are fantastic if you really understand how that work, and if you manage to remember every shortcut, but if you don't remember every shortcut, then they're horrible. I mean, you're done with them. You don't know how to save or to clean.

**E:** I think there's a perfect example. I have nightmares of Vim, and when it pops up. When I don't want it to appear I get all flustered. My old colleague in primate Bart he is he's a boy used to be a Vim fanatic and that's that was his editor of choice. But yeah, I can I can relate to the feeling of your whole interface just disappearing.

**V:** Yeah. And the so the problem there with with there's a few problems with screen readers. But we actually expect people who are not very fluent with computers, but who just well, they're slowly turning blind. So they have to learn a new way to use a computer, we forced them to use Vim as an interface. And all of a sudden, every key on their keyboard, it has a new function, and it behaves differently in. And if I look at these people, everything works just doesn't work as they expect it to work. And it's it's so frustrating to look at. And one of my students, she was really ambitious. This is just a three week course. It's really, really short. And when I graded her, she said, Yeah, I made a new screen reader, but then the way it should work. She did that. Three weeks. Excellent. Of course, this was a prototype, but what she basically tapped through the whole thing. So she asked this guy that we're working for. So what, how would you want it to work. And he said, I just want to tap through the whole thing. And because now everything has different functions. And if you want to read out all the heading elements, you have to remember the shortcut key to do that. And you cannot expect people who don't use their computer that often to remember all those settings. So I think this is something that, well, screen reader makers should start working on to that maybe they should be redesigned. Another problem with screen readers is that you cannot actually design for them, or it's very hard to design for them. So the so what my students will try is to add shortcuts to keys to make it more accessible with keystrokes and things like that. But then every key already has a function. So you cannot do that. You cannot change the way of works.

**E:** Yeah, I mean, if you did, you wouldn't have to teach the user this new interface that you created.

**V:** yeah, it's true. Yeah. So it's probably not even a good idea. But it's, it's worth trying, of course. Yeah. So designing interaction for screen readers is probably the most horrible thing ever. So So how do you design interaction? So you said a little bit about figma, or things like that?

**E:** Yes. So I have no idea of the average designer out there, I can tell from my conversations with you that I'm well below the bar in terms of what I should be doing with interaction. I generally I don't care or think about focus, I didn't even know about, you know, some of the focus states. So depending on what I do, if I'm working with other developers, you have to be quite prescriptive in figma. And if there isn't a hover state, well, they'll make one or they'll even worse, they'll just not include one. So so it's generally with figma now you can you can set up fairly complex interactions, which means hover states are a piece of cake to do. And that could be hover states, or links or buttons, but also whole elements, you can zoom in or out or, you know, any sort of basic CSS transition, you can now make a fairly rudimentary prototype of in figma. But of course, working in codes would be better. As a designer, I almost never do because I'm all I'm hired to be the designer of the project, not the not the developer. So as mainly if I work on my own projects, I will I will dig into the code and actually make things for the web materials  I look at basic things like overstates there but you've seen my codes, you know, it stops shorts of focus and click states. I don't I don't worry about click states. And also, with with mobile design being such a big thing, I mean, we talk about designing for screen readers or people with disabilities. These are important use cases but but they are edge they're fringe cases, whereas mobile is huge. And of course, on mobile, there's no there's no hover states. There's no tabbing through or or you know, there's focus but in a different way and also on mobile do you have this weird thing of the hover state becomes your click states? If you don't do anything about that? Yeah. So it's it's, I think the answer to your question is, I don't consider it enough. I do some stuff and make the obvious things appear clickable. I think that's also a very important factor in this the default state of links or buttons or anything it needs to communicate that it is indeed clickable, or interactable. And then, if the hover state helps on on desktop, I'll do that. If the clicked state helps. I'll do that. From now on, I should also consider focus. But yeah, that's it. It's I think, I think it's fairly common. And I say that based on my own experience, to kind of do the basic stuff, where it where you where it hits your own experience, if you think all this hover state looks awful, or this is impossible to see that this is clickable, I need to do something, you fix it. But generally speaking, I think most of the edge and fringe cases are just dropped, they fizzle out, no one really looks looks at them. Because the I guess, because the use case is so far removed from our own experience. And also the, you know, the, there's not much feedback on the average website. So out of 1000 visitors, if you get one blind person, maybe that person will just walk away from your website and never, never returned. But how, you know, usually, you wouldn't know that unless you specifically test for it or target that audience and seek out feedback.

**V:** It's actually pretty easy to test. Just open up a screen reader and try it. And you'll be shocked at how hard it is.

**E:** So maybe maybe for for my certainly for my pleasure, but also the listeners, how does it work when you open up the average web page and in the screen is what happens.

**V:** So there are a few ways that they're different screen readers, and they all behave differently. So on a Mac, there's voiceover and it works pretty okay. It's what I hear from from for sure, for from people who are turning blind, so are new to screen readers. They like voiceover best. So what it basically does, it starts reading the web... well there are two settings, you can say read the whole web page. Or you can tab from, let's say, paragraph to paragraph. Not really tabbing. But but focus from paragraph to paragraph, and it will get read out loud.

**E:** But that requires interaction from the user. The second example.

**V:** Yep

**E:** Yeah

**V:** Yeah, yeah, yeah. And then there's more settings. So for instance, you can say, read out all the headings on the page. And this will give you an overview of what's on this website. So and it will read out the heading levels. So you can hear some sort of, you can get an image of the of the hierarchy of the page. If of course, the heading levels are used correctly. And yeah, mostly they're not. And but it's true. It's just most websites, but even really large websites. They just use heading levels at random.

**E:** Yeah, so honestly, talking about designers needing to sort of know, the possibilities, restrictions and the and the material that they're working with. It took me a long time before I kind of got why we have H1 to six. Do you know what I mean? This this connection with what the tagging a certain type of content with this header means, other than just purely visual, the H1 is bigger than H6. It's, it's not something that you see in figma. It's you know, it's not also it's not taught to us through the tools. It's just something that you relate to on a varying basis through the code.

**V:** And then you could say, well, we should teach every web designer about this. It's pretty complex to actually understand this. About semantics, we should teach them about semantics. You could also say, No, we should teach the tools we should teach the screen readers about visual hierarchy. So then it doesn't read out the heading levels that are actually probably wrongly used. But it should be reading out the intent. So what's the biggest headline? Well, that's probably the heading level one.

**E:** Yeah

**V:** Yeah.  Well, maybe I'm making this too easy. But—

**E:** No, I think if you did something like that, there would be cases where that broke too. But, but obviously, smarter readers would help. I wonder if if, if machine learning and AI will play a part in this, maybe you could get readers that would be able to describe the page for you. You know, it's not just here's the text on the page. But all this is a, you know, is, is a Yellow Page with huge typography. And there's some cool animations or you know, there's a big picture, or there's this video playing, and this is what's happening in the video. Currently, a lot of this stuff, we can feed the reader through old text, and, you know, semantics, but maybe readers can at some point be able to assess the visuals of a website.

**V:** Yeah, then they can. I mean, student of mine once made a prototype where they tried to give a first impression of the page. So if we look at a website, we get a first impression, right? We see, this is my little pony website, or this is a death metal website. Right? We—

**E:** Yeah, exactly.

**V:** immediately see that. But a screen reader will use the same voice to tell them this is a My Little Pony website. But it takes it takes ages to understand that this is a kid's website, and this is

**E:** Yeah

**V:** a different type of website. So I, or I, my student, he made this tool where he, I don't really remember how he did it. But he just looked at the the overall. Some things like, what colour is the main colour, what contrast is there and things like that. And then they used other tools to try to give some sort of a first impression. And describe that first impression. This was really interesting. This kind of research is interesting, of course

**E:** Definitely.

**V:** Yeah. I think we're hovering away from our subject of interaction.

**E:** We are we're walking a tightrope here between interaction and just design in general for accessibility.

**V:** Yeah

**E:** I have a... To pivot the conversation, I have some thoughts on interaction that aren't to do with buttons and usability, but to do with storytelling, because like I said, way, at the beginning of this conversation, you said, you know, the web isn't one way, it's not just showing us pictures and text. It's also something that we interact with. And obviously, this changed with the Web 2.0, you know, when we had blogs, and we got comment fields, and you could really, it's like a two way streets, you could also tell the website, what do you like, and the website will respond in some way. And I feel when it comes to storytelling, we don't use it. As much as we should. Interactivity I mean. There's, there's a very, very good example on this, an author called Alan Trotter, is an example I use all the time in my talks, where his website is just text, but it turns into this click, you know, click the link adventure style thing when you when you It starts with a sentence. And then 10 minutes later, you'll have a whole page full of text, and you've learned about this guy and his books and all this stuff. And there's a wonderful way of using interaction to create a connection with the reader, the reader actually has to engage with the text to to see what happens, you know, it's this, this thing that we don't explore enough, I think, what happens if I interact with this picture, or this animation. Cassie Evans as well, she has a lovely animation at the bottom of her page, where it's an illustration of herself, and it follows the mouse around when you look at it. That's it. It's just It's cute. It's nice, it's personable. And I think these things are becoming so easy to implement implement now that we should we should build it into our process. We should do it more rather than just focusing on layout and style. Let's focus on how can I use interactivity to emphasise a point or to surprise someone or to make this more exciting in some way.

**V:** Completely agreed. Yeah, yeah. So let's let's try to investigate what came be done with interaction.

**E:** Yeah. Now, we know the infocus states are focused inside states—

**V:** Focus within yeah yeah

**E:** Yeah, focus within. We'll we'll figure out something.

**V:** Yeah we will. And there's a similar thing on your website as well, right? That you?

**E:** Oh, yeah. I basically stole that from Alan Trotter. Yeah, yeah, I've. So on my website, if you read the opening paragraph, it says something about me. And then it says before that, and if you click that, it says, another paragraph. And then you click before that it's another paragraph, and you go back in history reading about me and my career and my studies, and then my parents, and then Norway's history, and then the Vikings, and then you know, the Big Bang. And for me, it's a fun way of telling people about myself, and then rewarding the people who, who, you know, dig deeper. We also did something similar on the Primate website. On the About section, there's a timeline, where you can scroll through the usual, you know, we won some awards, we hired these people, we've we, you know, we moved to a new office, and we were founded in this in this year, and then there's a big gap, and then the internet was created. And then you you're back into the evolution of the primate, essentially, again, that's just using scroll as interaction, but it's, it's essentially it's, it's hiding some content and rewarding people who engage with it.

**V:** Yeah.

**E:** I think we should—

**V:** That's fantastic. Play, we should play more video games. Don't you think? Because they are actually masters at interaction.

**E:** Absolutely. Imagine if every video game was showing you the whole story up front, you know, you just wouldn't get invested.

**V:** True. Yeah. And ways of interaction, there's this, this clever ways of doing things. with very limited, you just have a few buttons, you don't have a scroll wheel, you don't have all these things that we do have on our laptops. So it's, they're very good at showing where the focus is what you can interact, when. So yeah, we should probably play more games and steal their ideas.

**E:** I absolutely think so. I think the one advantage video games have is usually you sit down. And you're already focused on this game. And it's harder on the web to capture people's attention long enough for them to get engaged or interact with, you know, the opening sequence or whatever.

**V:** Yeah

**E:** But not impossible.

**V:** No

**E:** Maybe in the sea of fairly standard looking average websites, is maybe it's becoming easier to capture people's attention.

**V:** Yeah. So I saw this, a few students of mine who worked for this friend of mine with severe model motor disabilities, they worked on a drag and drop implementation. So he obviously has difficulty with dragging and dropping stuff. So I thought, okay, that's nice to see what they can do with that. And they made a sort of a click and drop thing, so that you click on something and then you can move somewhere else—

**E:** then you hold it

**V:** Yeah. And then when you click again, you drop it. And then they so but still, it was a large movement, you had to move the things. So if, for instance, if you look at Trello boards, sometimes you have to move it three or four rows to the right. So you still, that was pretty hard. So what they did is they brought the columns where you can drop it to the mouse, it was really clever. So you saw these nice animations where you just click on something and then all of a sudden, all these columns just went to the mouse and you could easily drop them there. And then I asked him, oh, this is brilliant. They said, yeah, this is how most computer games work. That's—

**E:**  Yeah,

**V:** That's what they do.

**E:** That's very interesting. Just making the the journey from your current position to where you want to go much more smaller.

**V:** Yeah. There's no just nice for this friend of mine. It's nice for everybody. It's easy to work with him. Yeah.

**E:** We can definitely learn from computer games just just for the fact that the interface and the controls are so rudimentary. They have to make all these interactions mega mega simple. And to be honest, it reflects on something was talked about in the last episode as well, or a couple episodes ago with with navigation. This idea that on a web with a mouse on a big screen, you can have everything visible and all the links there and you click on them, but on smaller devices, and in this context on a video game, you can't fill your screen with interface, you have to have some way of, you know, toggling it on and off and use maps and menus and all these things to actually jump around is a very different way to interact with it. And what we're being taught is the way to do it on the web anyway.

**V:** Yeah, and I think that video games are very good, very clever at showing an interface when you need it. Well, on the web, we're used to showing it all the time.

**E:** Yes, exactly.

**V:** Usually, most of the time you don't need it.

**E:** Yeah. And not only are we used to you showing it all the time, we're we're actively preaching that that's what we should do, rather than exploring anything else. Yeah, this reminds me of, there's a really good talk by Mark Rober, you know, Mark Rober? No, he's a ex NASA scientist who has a YouTube channel, who does he does a lot of science stuff for, I would say it's maybe geared towards younger people. But it's I find it's my very, very fascinating. For example, he built he built an obstacle course, for squirrels in the back garden, to... Basically he tried to make a bird feeder that was squirrel proof. And he ended up making an obstacle course and falling in love with squirrels as well as well. So they also got food, it was really lovely. But he has a thing about gamification and games and what we can learn from them. And what he says at the beginning is basically, imagine a game where you just have to push a button for X amount of seconds, then you have to push the other button for two seconds. And then you have to push another button for three seconds. And it just goes on and on with this long list of instructions for X amount of seconds, you have to do a certain action. And then it goes on to say this, that's basically what Supermario is, except they've put this wonderful, whimsical, funny, engaging interface on top of it. But the input is just the same. You're just pushing a few very few buttons for exact amount of time to complete levels. And that basically says what we do with the visual interface really has... It relates strongly to the input as well, and we it doesn't have to be boring.

**V:** I think that's a very good way to end this episode.

</section>

<p class="closed-caption">[Outro music by xyce]</p>

## Why does this page look like this?

In CSS we hardly focus on interaction. So when art directing this episode I played with some forms of interaction that you can design with CSS. I played a lot with `:hover` states in combination with `:focus-within`. That combination is responsible for the ridiculous colour-changes you see when you move your mouse over the screen, and when you interact with the interactive things. Of course I also added a few `:target` selectors. Curious to see if you can find them all.

<a href="#body">Flip flip flip</a>
