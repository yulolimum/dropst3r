(function () {
  const config = window.dropst3r

  const els = {
    $preview: $('#preview'),
    $replaceInData: $('[data-url]'),
    $replaceInValue: $('[value]'),
    $replaceInHref: $('[href]')
  }

  const initUrlReplacement = function () {
    els.$replaceInData.each(function () {
      const $el = $(this)
      const str = swapUrl($el.data('url'))
      $el.data('url', str).attr('data-url', str)
    })

    els.$replaceInHref.each(function () {
      const $el = $(this)
      const str = swapUrl($el.attr('href'))
      $el.attr('href', str)
    })

    els.$replaceInValue.each(function () {
      const $el = $(this)
      const str = swapUrl($el.val())
      $el.val(str)
    })
  }

  const swapUrl = function (str) {
    if (str.includes('{--DIRECT_URL--}')) {
      str = directUrlSwap(str)
    } else if (str.includes('{--VIEWER_URL--}')) {
      str = viewerUrlSwap(str)
    }

    return str
  }

  const directUrlSwap = function (str) {
    return str.replace('{--DIRECT_URL--}', config.directFileUrl)
  }

  const viewerUrlSwap = function (str) {
    return str.replace('{--VIEWER_URL--}', config.viewerFileUrl)
  }

  els.$preview.on('config.ready', initUrlReplacement)
})()
