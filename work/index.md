---
title: 👨‍💻 Work
layout: layout.liquid
---

# {{ title }}

### The projects that have led me here.

<div class="work">

    {%- for work in collections.work reversed -%}

        <div class="work__item">
            <h4>
                <a href="{{work.url}}">{{ work.data.title }}</a>
                <small>{{ work.data.completeDate }}</small>
            </h4>
            <p>{{ work.data.tech }}</p>
        </div>
    
    {%- endfor -%}

</div>