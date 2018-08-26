(function () {
  const els = {
    $footer: $('footer.main'),
    $embedOptionsTrigger: $('footer.main .embed-options #embed-options-trigger'),
    $embedOptions: $('footer.main .embed-options .tap-target'),
    $embedOptionsFields: $('footer.main .embed-options .input-field')
  }

  if (!els.$footer.length) return

  const initEmbedOptionsTooltips = function () {
    els.$embedOptionsFields.tooltip({
      position: 'left',
      enterDelay: 0,
      exitDelay: 50
    })

    els.$embedOptionsFields.each(function () {
      const tooltipInstance = M.Tooltip.getInstance($(this))
      $(tooltipInstance.tooltipEl).addClass('embed-option-tooltip')
    })
  }

  const initEmbedOptionsPopout = function () {
    if (!els.$embedOptionsTrigger.length || !els.$embedOptions.length) return
    els.$embedOptions.tapTarget()
    const tapTargetInstance = M.TapTarget.getInstance(els.$embedOptions)

    els.$embedOptionsTrigger.on('click', function () {
      if (tapTargetInstance.isOpen) return
      tapTargetInstance.open()
    })
  }

  const initEmbedOptionsCopyToClipboard = function () {
    if (!els.$embedOptionsFields.length) return
  }

  initEmbedOptionsPopout()
  initEmbedOptionsTooltips()
  initEmbedOptionsCopyToClipboard()
})()
