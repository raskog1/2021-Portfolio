---
title: "ryanSkog. thoughts on webDev."
layout: "layouts/home.html"
pagination:
  data: collections.blogs
  size: 5
permalink: "blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
paginationPrevText: "Newer posts"
paginationNextText: "Older posts"
paginationAnchor: "#post-list"
---

Programming is all about adopting a logical mindset.
