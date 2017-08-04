# main.py

# Password Generator

from options import handleOptions
from charset import makeCharset
from password import makePassword, forcePassword

passwordLength, options = handleOptions()

lowercase, uppercase, digits, punctuation, charset =  makeCharset(options)

password = makePassword(passwordLength, charset)
password = forcePassword(password[:], lowercase, uppercase, digits, punctuation, options)

print "".join(password)
