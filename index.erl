-module(index).

data(_) ->
    #{
      title       => "Rainbows and Unikernels",
      description => "A presentation by Garrett Smith at City Code Chicago "
                     "on October 12, 2015",
      where       => "City Code Chicago",
      date        => "October 9, 2015",
      author      => "Garrett Smith",
      twitter     => "gar1t",
      blog        => "http://gar1t.com",

      transition  => "fade",
      theme       => "night",

      slides      => {apply, fun slides/1, {markdown, "slides.md"}}
     }.

slides(Markdown) ->
    format_slides(lpad_markdown:to_html(Markdown)).

format_slides(HTML) ->
    [buildout_list_items(Slide) || Slide <- split_slides(HTML)].

split_slides(HTML) ->
    re:split(HTML, "<hr />").

buildout_list_items(HTML) ->
    iolist_to_binary(
      re:replace(HTML, "<li>", "<li class=\"fragment\">", [global])).

site(_) ->
    #{
      "presentation/index.html" => {template, "templates/index.html"},
      "presentation"            => {dir,      "static"}
     }.
