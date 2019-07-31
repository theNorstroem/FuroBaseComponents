# Introduction to Furo Flowbased Programming

Write your applications like you make the concept for your application. 
Normaly you draw a few components and some arrows to connect the components, to describe your intention. 
Why you don’t do the same to write your app or component? Use existing web-components and wire them to build your application.

**TL/DR**: Furo-FBP is a shorthand notation for adding eventlisteners and invoking methods on elements without writing any javascript. Thats it.

But there is more then just eventlisteners in Furo-FBP. 
Watch the video below for a short introduction or read more in the [Flowbased Programming](/guide/md/fbp-wires/) section.

We also recommended the [Patterns] section, to get a better understanding how to wire the [components](/api/doc/input/) 
from the different packages to something useful.

### FBP 101

In furo-fbp you connect events from one component to methods of an ohter component. If you get this concept, you have understand
already 90% of the thing you need to write a program.

![101](/_page/images/fbp101.jpg)


### The introduction video
The video is a little bit old, but it gives you a short impression of the underlying concepts. There is not so much to learn.
 
<google-youtube video-id="vbMqbL5q9h0" height="270px" width="480px" rel="0"></google-youtube>



Inspired by the work of J Paul Morrison

### Some words from the discoverer of Flow Based Programming
        
        – Just as in the preparation and consumption of food there are the two roles of cook and diner, in FBP
        application development there are two distinct roles: the component builder and the component user or
        application designer. The component builder decides the specification of a component, which must also include
        constraints on the format of incoming data IPs (including option IPs) and the format of output IPs. The
        specification should not describe the internal logic of the component, although attributes sometimes “leak” from
        internal to external (restrictions on use are usually of this type). The application designer builds
        applications using already existing components, or, where satisfactory ones do not exist, s/he will specify a
        new component, and then see about getting it built.

        Component designers and users may of course be the same people, but there are two very different types of skill
        involved. This is somewhat like the designer of a recent popular game, who admitted he was not particularly fast
        at solving it - his skill was in designing games, not in playing them. The separation between makers and users
        is so widespread in real life that we don’t pay any attention to it unless it breaks down. In industry, as Wayne
        Stevens points out, we take for granted the idea that airplane builders do not build their own chairs - they
        subcontract them to chair manufacturers, who in turn subcontract the cloth to textile manufacturers and so on.
        In contrast, the world of conventional programming is as if every builder designed his own nails, lumber and
        dry-wall from scratch. Talk about “reinventing the wheel” - in conventional application development we reinvent
        the rubber, the nuts and bolts, and even the shape of the wheel! [van Norstand Rheinhold, Flow based Programming
        (1994). Page 53]
