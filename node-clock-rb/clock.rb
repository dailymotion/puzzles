require 'artii'
require 'io/console'

def displayTime
  system 'clear'

  minutes = Time.now.min.to_s.length == 2 ? Time.now.min : "0#{Time.now.min}"
  seconds = Time.now.sec.to_s.length == 2 ? Time.now.sec : "0#{Time.now.sec}"
  time = "#{Time.now.hour} : #{minutes} : #{seconds}"

  ascii = Artii::CLI.new time
  data = ascii.output.split "\n"
  size = IO.console.winsize
  marginH = (size[1] - data[0].length) / 2
  marginV = (size[0] - data.length) / 2
  whiteSpaceH = Array.new(marginH.to_int).join ' '
  whiteSpaceV = Array.new(marginV.to_int)

  data = data.map do |l|
    "#{whiteSpaceH}#{l}"
  end

  puts whiteSpaceV.join("\n") + data.join("\n") + whiteSpaceV.join("\n")
  sleep 1
  displayTime
end

begin
  displayTime
rescue Exception => e
end
