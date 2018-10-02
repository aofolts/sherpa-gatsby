---
title: "The 5 Stages of Being a WordPress Developer (#4 is Moving On)"
path: "/journal/stages-wordpress-developer"
date: "2018-10-02"
category: "Web Development"
excerpt: "I “built” my first WordPress website in the summer of 2014—like a lot of newbie developers I didn’t have much skill with coding."
featuredImage: "./big-foot-toy-woods.jpg"
tags: [
  "WordPress",
  "Gatsby.js",
  "web development"
]
---

## Part 1: How I Discovered WordPress

I “built” my first WordPress website in the summer of 2014—like a lot of newbie developers I didn’t have much skill with coding, so I started out with a [pre-made theme](https://themeforest.net/item/lemonchili-a-restaurant-wordpress-theme/4565068) and proceeded to hack it into a semi-serviceable state.

_This is brilliant_, I thought.

For $40, you could buy a website, and (like magic) just add content. When my clients needed new features, I could simply install a plugin. Easy.

### Not so fast, sparky…

As it turns out, this was a _massive _over-simplification of what it took to create an effective website. After using pre-made themes for my first four or five projects, the limitations began to become _painfully clear_.

I was spending the vast majority of my time contacting support and doggedly searching StackOverflow, rather than actually building or designing.

Too often, when my clients requested a certain layout change or feature addition, I had to either tell them that it couldn’t be done or add YET ANOTHER plugin, making their sites more and more unstable.

### Copy-and-paste hell

Worse, most themes offered no way to reuse content. And while copy-and-pasting worked well initially, it became a nightmare when content changes meant editing 50 different theme options to change one color.

I didn’t know it at the time, but I was treading all over the principal rule of web development: DRY, aka “Don’t Repeat Yourself.”

Even though I generally _liked _WordPress, this wasn’t sustainable.

## Part 2: Coding Custom Themes

_Ahh_, I thought. _I know what the problem is…I just need to make MY OWN themes from scratch, instead of using pre-made templates._

By this point, I had already left a full-time job as a copywriter to start my own web design business, so I had an abundance of free time on my hands—it was the perfect time to learn how to code.

### My first WordPress theme

After spending two months getting the basics down, I took on my first _truly custom_ website project. Not surprisingly, it was MUCH more difficult than I expected, and I was **up for 36+ hours the night before launch**, tearing my hair out over a seemingly endless list of problems.

BUT…despite the extra work, coding websites was definitely more rewarding than hacking pre-made themes—it produced a higher-quality end product that I was actually _proud_ of. Things were looking up.

### “Don’t Repeat Yourself” revisited

While I was much more able to implement a DRY workflow coding websites from scratch, I was still repeating myself from _project-to-project_.

In mid 2015, I started writing a plugin, “WP Blueprint,” to normalize WordPress and make certain tasks easier—creating common fields, implementing a blog, adding a mobile menu, etc.

It wasn’t easy, but I eventually got to a point where I could build WordPress themes relatively quickly with less initial hassle.

Still, there was another problem looming…

## Part 3: Swamped By Maintenance

Hosting and maintenance were sticking points for many of my clients. They were frustrated by having to pay a monthly fee _on top of_ the sizable investment they had already made.

And while I was finally enjoying the process of building websites, I also hated being tied down by longterm maintenance—it was preventing me from getting a sense of satisfaction from finishing projects.

### Where there’s a fee, there’s a way…or not

At first, I charged $10/mo, then $20, then $35, and finally $75 in an attempt to make maintaining WordPress sites _worth it _for me.

The trouble is, WordPress sites need to receive frequent updates, and a single line of bad or incompatible code can take your entire site down—or worse, leave it vulnerable to hackers (who can smell _insecure WordPress sites_ like _sharks can smell blood in the water_).

Not to mention, all this stress felt like a ridiculous waste of my time and of my clients’ money. Something had to change.

## Part 4: Taking My Sanity Back

I’ve been hearing the term “[static site generator](https://gist.github.com/denji/7205625)” for years, but it was my frustration with WordPress that finally caused me to investigate deeper.

Simply put…

> A static site generator (SSG) is a tool that takes some raw data (say, a bunch of text files or a JSON response from an API) and compiles that data into a nice, neat package that can be served anywhere.

Given the lower cost, better performance, and easier development process, I was intrigued—and after knocking out a simple project in [Gatsby.js](https://www.gatsbyjs.org/) (one of many SSGs available), I was 100% sold.

I’ve since built one app and three more static websites.

### Goodbye PHP. Hello Node.js!

PHP will always have a special place in my heart—it’s a great language, and it’s also how (via WordPress) I first learned a lot of core coding concepts, like object-oriented programming and inheritance.

But it’s also stale, over-stuffed with antiquated, inconsistent features, and incapable of handling real-time user interaction.

With Node.js (and Javascript), I no longer have to worry about separating my code into two languages, and the clear dominance of Javascript over PHP offers a wider horizon of future possibilities.

### What maintenance?

Like I mentioned earlier, WordPress sites are _notoriously difficult to maintain_. Static sites, on the other hand, require little to no maintenance, and (barring feature additions or redesigns) can be left to their own devices for years.

Because content for static sites is either stored as raw files or requested from a highly secure content management system (CMS), like [Contentful](https://www.contentful.com/) or [Prismic](https://prismic.io/), the chances of getting hacked are _significantly_ lower than they would be for your average WordPress install.

Netlify won’t deploy a build with errors. #PeaceOfMind ✌️

Plus, when clients do make content changes, a static site host, like [Netlify](https://www.netlify.com/), will attempt to rebuild your app. If there are errors, the changes will _not_ go live—as opposed to WordPress errors, which can instantly take down your whole site.

This is an _absolute godsend_ for busy developers and non-tech-savvy clients.

## Part 5: Will I Ever Go Back to WordPress?

Probably not… 😢 While WordPress may appeal to entry-level audiences for years to come, I see nothing on the horizon that will make the platform attractive to developers.

### Gutenberg won’t save WordPress

As of version 5.0, WordPress will be switching over to [Gutenberg](https://wordpress.org/plugins/gutenberg/)—its shiny new visual editor—in an attempt to fend off competition from website builder platforms like Wix and Squarespace.

Don’t get me wrong, I think Gutenberg is a potentially great addition for users on a limited budget, but for developers…

> …it works about as well as a mechanic handing their customer a toolbox and saying, “Have at it, hoss!”

A much better solution is for developers to provide users with explicit inputs for their information and content—which can then be used to deliver a high-quality, well-thought-out front-end.

### Problems run deep

WordPress has been a hot mess for years — the tens of thousands of plugins in existence are less a testament to the flexibility of WordPress than they are an attempt to relentlessly shoehorn a **blogging platform** into roles it was never intended or built to fill.

Even if the REST API was production-ready (which it’s really not), it’s mostly pointless, because the vast majority of plugins that make WordPress a desirable solution don’t work with headless, API-driven apps.

At the end of the day, WordPress is stuck in the past, and while the sheer number of existing sites will keep it alive for years to come, its relevance to modern web development will decrease on a daily basis.

So, with al that said…

Farewell, WordPress; I’m off to greener pastures. <Happy coding!/>