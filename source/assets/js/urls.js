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
    } else if (str.includes('{--WEBSITE_URL--}')) {
      str = websiteUrlSwap(str)
    }

    return str.match(/\{--[A-Z\_]*?--\}/) ? swapUrl(str) : str
  }

  const directUrlSwap = function (str) {
    return str.replace('{--DIRECT_URL--}', config.directFileUrl)
  }

  const viewerUrlSwap = function (str) {
    return str.replace('{--VIEWER_URL--}', config.viewerFileUrl)
  }

  const websiteUrlSwap = function (str) {
    return str.replace('{--WEBSITE_URL--}', config.websiteHostname)
  }

  els.$preview.on('config.ready', initUrlReplacement)
})()
