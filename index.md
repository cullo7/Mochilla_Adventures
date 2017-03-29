---
layout: index
image: /images/bg-full.png
---

<section id="content" class="default alternate">
  <div class="content">
    Mochila means backpack in Spanish or Portuguese. It is derived from mochil meaning messenger/carrier. Every traveler is a messenger and story teller that uses a backpack on their journey. 

    The white zipper allows us to zip and unzip our experiences. We travel to learn and make new experiences that we store as memories to later share with friends and families. 
  </div>
</section>


<section id="posts" class="default">
  <div class="content">
  {% for post in site.posts %}
  <section class="spotlight post" id="two">
  <a href="{{ post.url }}">
    <div>
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
    </div>
  </a>
  </section>
  {% endfor %}
  </div>
</section>

