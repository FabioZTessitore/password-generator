import string

def makeCharset(options):
    excluded = ['\\', '%', '`', '~']
    if options.excluded:
        excluded += options.excluded.split(',')

    lowercase = list(string.lowercase)
    uppercase = list(string.uppercase)
    digits = list(string.digits)
    punctuation = list(string.punctuation)

    charset = []
    if options.lowercase or options.forceLowercase:
        charset += lowercase
    if options.uppercase or options.forceUppercase:
        charset += uppercase
    if options.digits or options.forceDigits:
        charset += digits
    if options.punctuation or options.forcePuntuation:
        charset += punctuation

    for c in excluded:
        if c in lowercase:
            lowercase.remove(c)
        if c in uppercase:
            uppercase.remove(c)
        if c in digits:
            digits.remove(c)
        if c in punctuation:
            punctuation.remove(c)
        if c in charset:
            charset.remove(c)

    return (lowercase, uppercase, digits, punctuation, charset)
