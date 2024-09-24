---
external: false
draft: true
title: Draft Post
description: This post is a draft and won't be built.
date: 2022-11-22
---

It's a beautiful world out there.


## Inline formatting

Bold: **This text is bold**.

Italics: _This text is italics_.

Strikethrough: You can ~~strikethrough~~ text.

Inline code: You can add inline code like this `const hello = "world"`.

## Headings

The following HTML `<h2>`—`<h6>` elements represent five levels of section headings. `<h1>` is also available but not recommended since the post title is already a `<h1>` element it is not a good practice to have more than one `<h1>` elements in a page.

## H2: Heading Two

### H3: Heading Three

#### H4: Heading Four

##### H5: Heading Five

###### H6: Heading Six

## Paragraph

A standalone single paragraph of text.

Paragraphs can be multiline too when they constitute words that make up more than one line, i.e they wrap to the next line. Wow! I am really smart to write two lines of text that makes zero sense.

## Blockquotes

> This is a blockquote. And it's pretty long too. Long enough to wrap to next line. Surely it will wrap.

> You can use other Markdown syntax like `inline code` within a blockquote.

## Tables

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## List Types

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- List item
- Another item
- And another item

### Nested list

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Code Blocks

Syntax highlighting is done using [Prism.js](https://github.com/PrismJS/prism). You can customise to whichever theme you want from the [plenty available prism themes](https://github.com/PrismJS/prism-themes).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## Images

![Blogster](/images/blogster.png)


This blog's markdown is powered by [Markdoc](https://markdoc.dev/). In addition to supporting all basic markdown syntax, this blog also supports extended syntax to render custom components that are not conventionally available via basic markdown. This post is an example to showcase all available extended markdown syntax.

## YouTube Video

You can embed YouTube videos in your blog posts.

{% youtube url="https://www.youtube-nocookie.com/embed/StTqXEQ2l-Y" label="Everything is awesome - Lego movie song" /%}

## CodePen

You can embed codepens in your blog posts.

{% codepen url="https://codepen.io/ruphaa/pen/eYJqjgq" title="Ecosystem - Pen in CSS by Ruphaa" /%}

## GitHub Gist

You can embed GitHub gists in your blog posts.

{% githubgist id="d96064c9c4ef2e8ef71c90a10ffcf3b2" /%}

## Lesser Known HTML Elements

### abbr

{% abbr title="Graphics Interchange Format" %}GIF{% /abbr %} is a bitmap image format.

### sub

H{% sub %}2{% /sub %}O

### sup

X{% sup %}n{% /sup %} + Y{% sup %}n{% /sup %} = Z{% sup %}n{% /sup %}

### kbd

Press {% kbd %}{% kbd %}CTRL{% /kbd %}+{% kbd %}ALT{% /kbd %}+{% kbd %}Delete{% /kbd %}{% /kbd %} to end the session.

### mark

Most {% mark %}salamanders{% /mark %} are nocturnal, and hunt for insects, worms, and other small creatures.
