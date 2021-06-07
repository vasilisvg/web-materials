---
episode: 5
title: Should we take the hamburger off the menu?
description: In which we discuss a certain infamous culinary interface element.
audio: /sound/WM003-design-truths.mp3
audiolength: 57362525 #mandatory, size in bytes! No idea how to do this in Eleventy )-:
duration: 00:59:42 #mandatory, duration in hh:mm:ss
date: 2021-06-07
# You can add (multiple) urls to stylesheets with 'csslinks'. (Use spaces, not tabs here)
csslinks:
  - /css/css.css
  - /css/episode5.css
# If you want to add a block of preformatted code to the head you can use 'head'
# Beware: use spaces, not tabs.
#head: |
# <link rel="stylesheet" href="/css/episode1.css">
# <link rel="stylesheet" href="https://fonts.typotheque.com/WF-023273-011456.css">
# If you want to add a block of preformatted code to the end of the document you can use 'foot'
# Beware: use spaces, not tabs.
foot: #<script src="/js/js.js"></script>
layout: layouts/episode5.njk
intro: In this episode we boldly assert that NO, the burger should not be taken off the menu, we should remove the whole navigation instead.

shownotes:
  - <a href="#why-does-this-page-look-like-this%3F">About this episode's art direction</a>
  - <a href="https://www.nngroup.com/articles/hamburger-menus/">Hamburger menus and hidden navigation hurt ux metrics (2016)</a>
  - <a href="https://www.invisionapp.com/inside-design/pros-and-cons-of-hamburger-menus/">Pros and cons of hamburger menus</a>
  - <a href="https://medium.muz.li/3-good-reason-why-you-might-want-to-remove-that-hamburger-menu-from-your-product-69b9499ba7e2">3 good reasons why you ight want to remove that hamburger menu from your product</a>
  - <a href="https://ux.stackexchange.com/questions/120256/if-the-hamburger-menu-is-bad-ux-why-do-google-still-use-it">But Google uses it!</a>
---

<section class="episode-transcript">

### Transcript

<p class="closed-caption">[Intro music by xyce]</p>

<section id="conversation">

**Espen:** This week's episode, you didn't do any preparations?

**Vasilis:** Nope.

**E:** Nope, good. Me, me, neither almost, I kind of left it very late to decide of topic. But I've landed on something. And I spent some time this morning, I'm doing some, some minor prep. And I think, because last week we spoke about, or the last episode, we spoke about interactivity. Before that, we spoke about whether there are truths in web design. And previously, we've spoken about, you know, certain patterns that stick and aren't necessarily fantastic. We spoke about navigation. And I think it's time that we tackle one of the great contentious issues of the last decade, namely, the hamburger menu. So my question to you is, it time we took the hamburger off the menu?

**V:** Nice question! No.

**E:** No?

**V:** And this is maybe an unexpected answer, because I know lots of people, they really dislike the hamburger menu. But, of course, there's lots to say about the icon itself, the icon is not very clear, it is clear once you understand the concept of the icon, but I think it's it's a bit of a conceptual artwork, it's not really an icon that makes anything clear. But once you add the words menu to it, or more, something like this,

**E:** some explainer Yeah.

**V:** Just in tiny lettering, or in large lettering, whatever you want. I think, then it's a good idea. And what it actually is, if you look at what it is why I really like, I really like the hamburger menu, I like the hamburger menu more than I like the traditional navigation at the top of the page

**E:** Very controversial statement.

**V:** Because if you look at what it is, it's basically a link to the navigation. And this means that if you add a link to the navigation at the top, you don't bother people with the complete navigation at the start of every webpage. You just add a link to the navigation and then you can decide, do I want this link? Do I want the navigation itself to be at the top? Which I think is a silly idea? Or do I want to put it in the footer? Which I think is an okayish idea? Or do I want to make an extra page where I spent some time on the navigation, and I give it the attention that it needs? Which I think might be the best idea to make a navigation page. Which gives you well, room to add some explanation to what it is what what, what is this link that you're going to click on. So that's my idea about the hamburger menu.

**E:** Fantastic, episode over. Done. And I'm very much aligned with you on that thinking actually, I think the hamburger menu is not this monster that a lot of the industry wants it to be. But before we make it make a sort of blanket statement. It says hamburger menus are good. I think we can explore some of the arguments against using it because there's there's no shortage of articles saying hamburger menus are bad. And from what I gather, there's three main arguments here. One is that it makes your pages somehow less important because you're hiding the pages.

**V:** Okay.

**E:** Whatever your main navigation would be what you're saying or doing by putting them inside a hidden menu is you saying Oh, these pages not so important. That's an argument.

**V:** Yeah. Shall we listen to all the arguments first? Or shall I reply to these arguments?

**E:** I'll list the three and then we can do them one by one.

**V:** Ok, yeah.

**E:** The other argument is that there's less engagement with the menu, because it's harder to reach maybe, with your thumb on a mobile if it's at the top, you have to stretch a bit further or on a desktop, maybe it's harder to find because it's smaller and you have to understand what the icon means. So you generally get less people clicking on the menu. And then the third argument is that is inefficient, meaning that if I want to reach whatever page using the navigation I now have to click twice instead of just once?

**V:** Yep.

**E:** And that's I think that just about sums it up. Yeah. So if we go through them one by one, we're making the pages on the website less important, because we're hiding them. What do you think?

**V:** I think they are less important. And so we should hide them. So when I... So most of the web pages that I visit are links that I follow. So this is either as a result of me searching for something very specific. Or somebody linking something on social media that I think is worth clicking on. And in both cases, I really don't care about the navigation. I'm there for the content and the content only. And if it's harder for me to find the content, then I think the webpage is not well designed. So if you add all kinds of links to somewhere else, before I reach the content, then I think you're not designing the page well. So I consider navigation, most of the time to be craft or just things that you don't need to just and what I see from many webpages is that they simply add a navigation because we have to add a navigation and then they start thinking, Okay, shall we need a navigation? What should we put in there? And then they put all kinds of not really necessary stuff in there, which you can better put in the footer? I think. So what I've seen in the past, is that navigation is often there, because we think it should be there. And then we add links to it. And so I, think, yeah I agree with the idea that it hides pages. But then I also think that it's that's good practice to hide stuff that you're not there for?

**E:** Because then you have a more focused experience.

**V:** Exactly

**E:** In the context that—

**V:** Yeah

**E:** Yeah, I agree. Certainly, there's, there's maybe I mean, there's, there's 100 different things you might do online, but if you're if you are clicking on a link to read a particular article, or you look up this item, or, you know, you search for something, or you click on something, like you said something that's been shared to you, you're there for whatever thing that you're you you want to look at, in which case, the navigation is, it should be out of the way. But there's, there's at least one other mode as well, when I visit websites. And that is, for example, if I'm if I'm opening up The Guardian or some newspaper, because I'm actually just I want to read the news. I haven't followed a specific link. I'm just yeah, I want to see what's happening. I do this, instead of scrolling on Facebook, for example, you know, I open it up, and I see. And there sometimes I want to check out politics or environment or culture, whatever it might be. And that's one use case that I can know about myself where I would actually use navigation. And another one is, if I'm shopping, not googling a specific item, but I've gone to whatever store, I've gone to Etsy and I and I want something specific, then I also might use the navigation or I might use search, but either way, I'll probably go to the homepage. And from there, I'll want to find whatever I'm after. In which case, removing it completely seems wrong.

**V:** Well, okay, agreed. But then I think if removing it completely, okay, but if you turn the homepage into this super clever page, where you explain what can be found on the website, let's say, a navigation, but with some explanation, then you can link to the homepage and where you can find the navigation. So I think but but Okay, this is something that should be designed. This should be researched in more detail, I guess. And there has been lots of research to it. And I think homepages in many ways are already many homepages are like this, right? If you look at The Guardian, it's sectioned into all these different themes that you just mentioned. But you can also click on the navigation at the top of the page. So I think on the homepage, it makes sense to actually list the navigation to what can be found on this website, or what are the the sections that we have. But on every next page, so, for instance, when I'm shopping, and I clicked on, I want shoes, then yeah, it could make sense from a business perspective to link to trousers as well. But then I think there are more clever ways to do that. So for instance, when I picked my shoes, then you can tell them, you should add some matching trousers.

**E:** Yes, is interesting that you mentioned the business perspective. And the research has gone into this as well, because I did some research just this morning. For the for the 100th time about this hamburger menu issue. And of course, the the NN group comes up, they have research on on everything on the web. The and, of course, they have articles about the hamburger menus as well. And I read one from 2016. And the headline there says hamburger menus, and hidden navigation hurt UX metrics. And that's the key to the perspective, there is the metrics part, you know, it hurts your bottom line, or your engagement metrics, or whatever it might be. And they go on to say that, you know, if you have a hidden navigation, it's obviously less discoverable. If it's hidden, people are much less less likely to use it. If it's hidden, it's a worse user experience. Because hiding it affects the content that isn't directly accessible through an in page link. Now, that last part is basically what you're saying, If every page linked to everything else that you might want, as a as the next natural step. You wouldn't need the navigation at all. So I guess what I what I think you're saying is that, if we design websites really, really well, it's okay that the navigation is hidden, because you'll never ever need to click it.

**V:** Yeah, but Okay, so from a metrics, so what they say is, from a metrics perspective, so this is not from a user perspective, this is from a person who cares about an old fashioned way of how you measure if a website is successful. And that measure is, how many pages does somebody visits? This is a very old fashioned If you ask me, I think this is ridiculous way of—

**E:** or, even more specifically, to this not even how many pages are there is thing but how many times are they clicking on the navigation? I should say, and in the context of this study? We're talking 180 people, 179 people, they completed some tasks on six different websites. So I don't know what the specific tasks were, but assuming they were finding a particular piece of content or buying things or whatever. And so what they're saying is that in completing those tasks, if the navigation was hidden, they use the navigation less, or they use it later on in the in their journey.

**V:** I think this is this is, what, it says something but it also says nothing this research. I think, from a user's perspective. So how I look at it is I care about accessibility, and I've been designing for and with people who are blind. And what I notice is that these people struggle getting back, getting to the content when there's a long navigation at the beginning of the page. So this is really something a friend of mine I worked with, he really asked me why do you start every page with a link to somewhere else with not one link with 10 links to somewhere else? Why is that? It makes no sense. And if you look at it that way, it really makes no sense. So... And I don't believe the the idea that it would be less engaging. I think there are clever ways in the navigation at the top to engage people. So for instance, if after the first paragraph, you add a few links, this is not what you're looking for. We have other interesting stuff that might interest you, then this might be much more engaging than navigation at the top. So I think this is just research into existing patterns. research into trying to find reasons not to use the hamburger menu. But I don't think is a good argument.

**E:** No, I agree. And also, I think 179 people and six websites, it's a, it's a very small, you know, pool of answers, I would say compared to the vast landscape that is the internet. Yeah. And of course, measuring whether people use the menu or not, is not, certainly for my own websites, I don't really care if people click on items in my menu, or if they click on the end goal. I mean, as long as you get to where you want to be, and complete the task you want to complete or buy the product that I want you to buy. Who cares how you got there, right?

**V:** Yeah,

**E:** Another—

**V:** Ok yep.

**E:** Yep. Another sort of question that comes up. If you Google this and look at, you know, blogs, and whatever around hamburger menus is, there's a bunch of people asking, if this is so bad, why do people like Google still use it? I mean, the hamburger menu is part of material design. They have, you know, it's it's everywhere, really. Even though, everyone keeps saying, Oh, we shouldn't use it, we shouldn't use it, but it still is still there. And then also, I saw an article arguing on mobile views, instead of having a hamburger menu in the top, you should have, you know, that usual tab bar at the bottom with icons for your, you know, whatever, for most visited pages, or something like that. But then it goes on to say, look, if you don't have if you have more content than you can fit on this tab bar at the bottom, you just add, like a little button that says more in your tab bar, and then you get more items. So then we're just basically doing the you know, full circle, we're back to the hamburger menu. Which leads me to think that maybe because it's been in use for, what, 10 years, or longer if you look at the actual history of it, I suppose. But it's a popular pattern. And my question then is, is it so well known now that it's safe to use it? I mean, you mentioned early on that maybe the the icon is a bit wishy washy, is not self explanatory. But isn't this pattern so baked into how we use the internet that it's kind of self explanatory?

**V:** Well, the easy answer to that is no. Because, yes, we understand it. But we should remember that we don't design for ourselves, and that most people really are not using the internet the whole day, they're not on their way, while they may be on their phones all day, but then they're only checking Instagram or Twitter or whatever. So they're not experts in navigational patterns as we are and they don't care about it. And I've seen lots of people struggling with simple buttons that we think are common sense. So, no, I don't think this is a pattern that is understood by everybody. But I think it can be well designed. So if you add the words more to it. And you add this navigation at the bottom of your web page, or at the left side of your web page, I don't really mind where it is, then people will understand it, and especially on mobile. This is also something so from a more conservative design, few people say no, you should always add the navigation at the top because this is where people expect it to be. But we've seen that on mobile, people expect the navigation to be at the bottom. So and this is new. I mean, people learned that the navigation can be at the top and it can be at the top at the bottom as well. I don't think this is a very, so, I don't buy this idea that it should be at the top because people expect it to be there.

**E:** No—

**V:** I think the bottom is a perfect place for navigation

**E:** I you know I can see why people would be scared to move away from the top navigation pattern whether you have a list of links or you have a menu button or something like that, especially on pages where you rely on engagement for for the bottom line like a shop, for example. But on the other hand, I totally agree that it is possible to change user attitudes or user knowledge of how things work. And the tab bar at the bottom is a good example of that. Which kind of ties in with something else I read today as well, which is that, you know, the context of what you're doing is really key here and for for products, you run a big risk of, you're hiding all the pages. So if that was the shop, you're hiding all the categories, that could be bad. If it's a new app, maybe you're hiding all the features of the app, which could be bad. But then this, Nancy something. She she goes on to say that, the onboarding, then, becomes super, super important. And of course, in the product, when you first open an app, you need to learn how this app works. Because once you've learned it, well, then all the all the navigation, all the functionality can actually be hidden, it can be way more focused, if you actually know how it works. And I think the same principle applies to a website. If you somehow teach people, and you have to teach people, if it's a new pattern, you have to teach them how it works. It is possible to change things like moving things down. But it is a it's a, the bigger your website, the bigger your audience, the more money relies on the success of the UX, the more difficult that decision will be.

**V:** Yeah, I mean, I understand this idea. But it's still it goes from the idea that the only two possible patterns to navigate a website are a navigation at the top and navigation at the bottom or a hamburger menu. And I think there are other ways to navigate. Which are more contextual, contextual. So in the context of this page, a few categories make sense. So it makes sense to link to these categories from within your content. So for instance, if I have shoes, then it makes, and these are running shoes, and it makes sense to link to other sporty clothing.

**E:** Yeah

**V:** Right? And if these are specific tennis shoes or something, then it makes sense to link to tennis rackets. Right? So context, I think linking from a context is probably much more valuable and usable for a user, then telling them that there's a navigation to everything at the top of the page, or at the bottom of the page.

**E:** Yeah, yeah, no, I agree. Even if you if you run a shop and you have 10 different categories of clothing, it's, it's certainly more valuable for someone to see those 10 categories at the end of the first task they were there to do. If I go to supermarkets and I want to buy some toothpaste. I'll navigate to the toothpaste section. And then you know, on the way there they'll show me all this other stuff or on the way from the toothpaste to the tail. They'll show me all this other stuff.

**V:** Exactly, naturally.

**E:** Yeah, cuz it's a physical environment. But that's, you know, that's, that's better. I don't I'm not I'm not met at the door of my supermarket with a huge map that tells me, this is where you need to go. And if you want to go somewhere else, you need to come back to this map.

**V:** Yeah, or will have the map in front of you all the time.

**E:** Yeah, exactly.

**V:** It's the same as at restaurant, I mean, the menu, then the name menu comes from a restaurant menu. Right? So I think I'm not sure if it's true, but this is, but if you're at a restaurant, you look at the menu, and then you put it away. Right. And then in the context of eating, when you need it again, because you want another glass of wine or something, then you ask for the menu. So you click on the link to receive menu. I mean, it's it's, it's a common practice. And if you're a well designed restaurant, the waiter will give you suggestions, right? And this is this is it's more complicated than adding a navigation at the top of every page. But it's much better, right? Yeah, the waiter who comes to give suggestions and knows and understands what they have.

**E:** And the waiting staff will will be there when you need it. If it's a well designed restaurant.

**V:** Exactly.

**E:** You know, you may never have to ask for the menu because they just bought it that you're done eating and it's time for dessert. Now, asking for the menu is more inefficient, one might say, clicking on this link to get the Table of Contents or the menu or the more section, whatever you might call it. It does require extra effort. You know, if I was on a restaurant and the table had menu options on it, maybe that would be more efficient than asking the waiter to come over.

**V:** Now you see these restaurants popping up every now and then, so there's, instead of a menu, there's an iPad, and you can click on stuff and then the waiter just comes in brings it to you. And this is—

**E:** Or, like Yo sushi. there's a conveyor belt.

**V:** Yeah. And this can be, can be a nice experience as well. Of course, yeah. Yeah.

**E:** Yeah.

**V:** But then we—

**E:** Maybe we should have a conveyor belt of contents at the bottom of every page just shows you like an endless stream. To be honest, isn't that what Twitter is? or Facebook? Or any of these apps? Yeah,

**V:** But then not at the bottom of the page here? Yeah. So inefficiency, I don't really care about efficiency too much. I think we focus too much on it. So one extra click, if the click is very clear what it does, it doesn't really matter. It's not. I mean, it does matter when you're in somewhere where there's really low bandwidth, and it takes a long time to load. So if that extra click loads an extra page, and then ok, then it matters. But I think most of the time, something like that really doesn't matter. I mean, a little bit of extra effort to get to a well designed experience in helping you get further. I think that's worth it, instead of just adding a few links at the top.

**E:** Yeah, this is, I think what we're getting at here is the the argument for the hamburger menu, even on the desktop side, or large viewport, which we haven't stated explicitly, is that if you remove all those links, of course, people using screen readers, they don't have to read through 16 items before they get to the content, that's a major win in my book. But the other is, of course, you can you can you have real estate to design something that's more focused, that doesn't necessarily mean a big hero image. But it could mean simplicity, or it can mean different colours at the top, it can mean you have a canvas that's more available to do something very specific to the content, you don't have to clutter, especially on the mobile screen, you don't have to clutter with a bunch of adverts for other pages at the top.

**V:** And I think on a desktop screen as well. So the the choice for putting the navigation at the top, I always thought that's a pretty weird place to put this stuff, because it's not the most important thing. But you still put it at the most important place. And then the real estate in height is actually not that large on desktop sides. While in width, it's usually there's lots of whitespace on the left and the right side. So it makes much more sense to put this kind of stuff on the left or on the right. This is something that you see in most applications, applications as well. Right? The tooling is always on the right or on the left. And not at the top because at the top it eats, just keeps on eating the little bit of real state—

**E:** proportionally it eats way more yeah,

**V:** yeah. So it doesn't really make any sense to put it there from a, yeah, from that perspective.

**E:** Hmm. Which is, which is odd, because there was a time where every website had a sidebar navigation.

**V:** Yeah, but those—

**E:** are widgets.

**V:** So we had

**E:** that was, yeah,

**V:** top navigation, left navigation.

**E:** Right navigation.

**V:** Yeah.

**£:** Yeah, no, it's interesting that we chose to drop that pattern but but stick to the one at the top. And then maybe we added another bar or two at the top as well. Yeah. If you look at physical ways of engaging with content, being books or magazines as well, obviously, there, you can't afford to print, you know, the your contents on every single page, it would be ludicrous, maybe there's an indicator to say what section or what chapter you're in. But ultimately, if you want to find your way through a book, and you want to jump from where you are to somewhere else, you have to go to the contents page, and you know that the content is at the front. And likewise, if you want to look up a specific word, you go to the index, and you know, that index is at the back. Yeah. So maybe, you know, I don't think people are complaining that books are too inefficient, because they have to go back and forth. Because simply you read the content on the page drawn and that's what you're interested in.

**V:** I really think inefficiency is not a problem if it's well designed.

**E:** Excellent. So I think we solved it, we solved it then Vasilis.

**V:** We definitely did—

**E:** And, basically, you are not making your pages less important. Actually, on that. I have I saw another quote which I quite liked. Basically, you know, think of your website as a music festival. The hamburger menu is a small stage, you wouldn't want to put your best artist and headliners there. Instead, you want them on the biggest stage where everyone can see them, ie, the main page. This is from Tony Ho Tran, maybe we should link to some of these—

**V:** we should definitely—

**E:** ...in the notes. And this again, it's basically saying, look, all this content is really important. hiding it is bad. But also you want to you want to put them on the main stage. And maybe this is an argument for a content table of contents page or a table of contents section, or something like that. But in effect, you're saying, and I agree with you that making pages less important by hiding them is good, because actually you're on this page for a specific reason. If you're on the homepage, maybe that means this page should be about Wayfinding and navigating to all the other pages on this website. It's, you get less engagement, so fewer people click the navigation. But they were saying well actually, if people click on the content instead, that's that's a good thing. Fewer clicks in the navigation maybe means more clicks in contextual navigation related products or related content, etc. And then the inefficiency argument, you're saying basically, an extra click doesn't really matter, because we can enhance the experience by removing this unnecessary navigation.

**V:** Yeah, and I think one thing that we forget is, in all these articles, it's basically two options. So it's the option hamburger menu or visible menu. And I think there is also the third option, which is a well designed menu, and both of them are not. So in the in the basic form, they are just not well designed. They're not thought of they're just there, because we put them there. They're just there, because these are the options that we know. But did anybody ever do any research into other navigational patterns? not really that much. And I think there are other patterns. And there are ways to design a navigation really, really well. To add a little extra context to it to add a little, just a small paragraph of what is it that you can expect on this page? Right, this is could be so much more valuable than just adding a link to whatever your copywriter came up with.

**E:** Absolutely

**V:** So I would argue for, use a navigation if you really believe that this is a good idea, use a hamburger menu. When you think, well that navigation is not that important anyway, which in most cases, I think should be the case ,and add some design love to it.

**E:** Absolutely. So then I'll go back to the question. Should we take the hamburger off the menu and once again, we managed to spend what 35 minutes answering the question in the same way we started. No, we don't take it off the menu but we make it better.

</section>

<p class="closed-caption">[Outro music by xyce]</p>

</section>

<section class="episode-art">

### Why does this page look like this?

This page does not have a menu bar, logo, or hamburger icon at the top of the page. This omission enables me to play with layout in a different way than I normally would. With no top menu, I can design the introduction like I would a magazine spread, with sole focus on the content. I can use sticky elements and vertical splits going down the whole page, without worrying about how this interferes with the navigation – or how the navigation might impact it visually.

I wonder if there should be a menu button somewhere though, or a shortcut to jump down to the links sections (and, to be honest, a link back up to the top).

</section>
