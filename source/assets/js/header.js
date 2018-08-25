(function () {
  const els = {
    $header: $('header.main'),
    $navLinks: $('header.main nav [data-tooltip]')
  }

  if (!els.$header.length) return

  els.$navLinks.tooltip({
    position: "bottom",
    enterDelay: 200,
    exitDelay: 0,
  })
})()
