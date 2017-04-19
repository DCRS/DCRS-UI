###
	99Lime.com HTML KickStart by Joshua Gatcke
	kickstart.js
###

jQuery(document).ready ($) ->

  ###---------------------------------
  	Tabs
  -----------------------------------
  ###

  # tab setup
  $('.tab-content').addClass('clearfix').not(':first').hide()
  $('ul.tabs').each ->
    current = $(this).find('li.current')
    if current.length < 1
      $(this).find('li:first').addClass 'current'
    current = $(this).find('li.current a').attr('href')
    $(current).show()
    return
  # tab click
  $(document).on 'click', 'ul.tabs a[href^="#"]', (e) ->
    e.preventDefault()
    tabs = $(this).parents('ul.tabs').find('li')
    tab_next = $(this).attr('href')
    tab_current = tabs.filter('.current').find('a').attr('href')
    $(tab_current).hide()
    tabs.removeClass 'current'
    $(this).parent().addClass 'current'
    $(tab_next).show()
    history.pushState null, null, window.location.search + $(this).attr('href')
    false
  # tab hashtag identification and auto-focus
  wantedTag = window.location.hash
  if wantedTag != ''
    # This code can and does fail, hard, killing the entire app.
    # Esp. when used with the jQuery.Address project.
    try
      allTabs = $('ul.tabs a[href^=' + wantedTag + ']').parents('ul.tabs').find('li')
      defaultTab = allTabs.filter('.current').find('a').attr('href')
      $(defaultTab).hide()
      allTabs.removeClass 'current'
      $('ul.tabs a[href^=' + wantedTag + ']').parent().addClass 'current'
      $('#' + wantedTag.replace('#', '')).show()
    catch e
      # I have no idea what to do here, so I'm leaving this for the maintainer.
  return