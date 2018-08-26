(function () {
  const els = {
    $header: $('header.main'),
    $navLinks: $('header.main nav [data-tooltip]'),
    copyToClipboardLink: 'header.main a.copy-to-clipboard',
    socialShareContainer: 'header.main .social-share-container',
    socialShareLinks: 'header.main a.social-share'
  }

  if (!els.$header.length) return

  const initNavLinksTooltips = function () {
    els.$navLinks.tooltip({
      position: 'bottom',
      enterDelay: 200,
      exitDelay: 0
    })
  }

  const initSocialSharing = function () {
    if (!$(els.socialShareContainer).length || !$(els.socialShareLinks).length) return

    addthis.share({
      container_selector: els.socialShareContainer,
      button_selector: els.socialShareLinks,
      close: function (shareProps) {
        M.toast({html: `Shared to ${shareProps.service}!`, displayLength: 4000})
      }
    })
  }

  const initCopyLinkToClipboard = function () {
    if (!$(els.copyToClipboardLink).length) return

    $(els.copyToClipboardLink).unbind('click').on('click', (e) => { e.preventDefault() })

    new ClipboardJS(els.copyToClipboardLink, {
      text: function (trigger) {
        const $icon = $(trigger).find('i.material-icons')
        const iconText = $icon.text()

        M.toast({html: 'Copied!', displayLength: 4000})
        $icon.text('check')
        setTimeout(function () { $icon.text(iconText) }, 4000)

        return $(trigger).data('url')
      }
    })
  }

  initNavLinksTooltips()
  initSocialSharing()
  initCopyLinkToClipboard()
})()