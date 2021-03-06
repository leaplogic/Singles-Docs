# Templating
These are the base [Entry Type](https://docs.craftcms.com/v3/sections-and-entries.html#entry-types) templates developed as a starting point for the homepage and interior pages.

needs content
- All conventions that are heavily relied on and how they can be extended
- Known limitations caused by the conventions
- Define custom macros
- Define plugin-dependent templates and their purpose
- Define any conventions that are used with different types or variables within craft


## Interior
This *Entry Type* is for the base interior or subpage. This template has the content builder based on the Neo Plugin.

### Hero
The hero is the main page heading section. This section can have Heading, Sub Heading, and Background Image.  If there is no image only the heading and subheading will show while making the section smaller in height. 

### Inputs

* **Heading** -
If the Heading input is empty the Tile input is used, if Title is empty the Page Title input is used
* **Hero** - this is the background image.
* **Sub Title** - this is the simple rich text sub heading.


## Page Content
There are two parent layouts of content.  Standard and Full Width.
* **Standard** - Standard layout allows for a sidebar. So the main section can use any of the avilable blocks. The sidebar allows for a sub-navigation and widget. The widget gives the ability to add Image, Heading, Copy, and Action Links.

* **Full Width** - The Full Width layout has no sidebar so it spans the full width of the page. This section allows for two blocks Features & Grid.

### Content Blocks
All block templates can be found in the `templates > _blocks` directory.
* [Text](/templates/text.md)
* [Callout](/templates/callout.md)
* [Image](/templates/image.md)
* [Table](/templates/table.md)
* [Form](/templates/form.md)
* [Features](/templates/features.md)
* [Gallery](/templates/gallery.md)
* [Grid](/templates/grid.md)
* [Accordion](/templates/accordion.md)



## Homepage
This *Entry Type* is what you'd expect from the name. It is the template for the Home Page.

<Bit/>