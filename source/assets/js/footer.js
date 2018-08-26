(function () {
  const els = {
    $preview: $('#preview'),
    $footer: $('footer.main'),
    $embedOptionsTrigger: $('footer.main .embed-options #embed-options-trigger'),
    $embedOptions: $('footer.main .embed-options .tap-target'),
    $embedOptionsFields: $('footer.main .embed-options .input-field'),
    embedOptionsFields: 'footer.main .embed-options .input-field'
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

    new ClipboardJS(els.embedOptionsFields, {
      target: function (trigger) {
        return $(trigger).find('input')[0]
      }
    }).on('success', function (e) {
      const $option = $(e.trigger)
      const $icon = $option.find('i.prefix')
      const $label = $option.find('label')
      const labelText = $label.text()
      const iconText = $icon.data('icon')

      $icon.text('check')
      M.toast({html: `Copied ${labelText} embed code!`, displayLength: 4000})
      clearTimeout(window[`embedIconTimeoutFor${labelText}`])
      window[`embedIconTimeoutFor${labelText}`] = setTimeout(function () { $icon.text(iconText) }, 4000)

      e.clearSelection()
    })
  }

  els.$preview.on('config.ready', () => {
    initEmbedOptionsPopout()
    initEmbedOptionsTooltips()
    initEmbedOptionsCopyToClipboard()
  })
})()
