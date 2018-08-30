(function () {
  const els = {
    $preview: $('#preview'),
    $embeds: $('.embed-options'),
    $htmlEmbed: $('.embed-options input#embed-html'),
    $bbcodeEmbed: $('.embed-options input#embed-bbcode'),
    $markdownEmbed: $('.embed-options input#embed-markdown')
  }

  if (!els.$embeds.length) return

  const config = window.dropst3r

  const initEmbedBuilder = function () {
    try {
      eval(`${config.viewers[config.fileType]}Embed()`)
    } catch (e) {
      initGenericEmbed()
    }
  }

  const initImageEmbed = function () {
    els.$htmlEmbed.val(`<img src="{--DIRECT_URL--}" />`)
    els.$bbcodeEmbed.val(`[img]{--DIRECT_URL--}[/img]`)
    els.$markdownEmbed.val(`![]({--DIRECT_URL--})`)
  }

  const initVideoEmbed = function () {
    els.$htmlEmbed.val(`<a href="{--VIEWER_URL--}" target="_blank"><img src="{--WEBSITE_URL--}/assets/static/placeholder.video.jpg" /></a>`)
    els.$bbcodeEmbed.val(`[url={--VIEWER_URL--}][img]{--WEBSITE_URL--}/assets/static/placeholder.video.jpg[/img][/url]`)
    els.$markdownEmbed.val(`[![]({--WEBSITE_URL--}/assets/static/placeholder.video.jpg)]({--VIEWER_URL--})`)
  }

  const initGenericEmbed = function () {
    alert('embeds for non-images is not setup yet')
  }

  els.$preview.on('config.ready', initEmbedBuilder)
})()
