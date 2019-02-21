json.array! @guests do |guest|
    # debugger
    json.partial! 'guest', guest: guest
end