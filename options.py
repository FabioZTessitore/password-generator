import optparse
from usage import usage

def handleOptions():
    parser = optparse.OptionParser(usage)

    parser.add_option('-l', action='store_true', dest='lowercase', help='include lowercase')
    parser.add_option('-L', action='store_true', dest='forceLowercase', help='force lowercase')
    parser.add_option('-u', action='store_true', dest='uppercase', help='include uppercase')
    parser.add_option('-U', action='store_true', dest='forceUppercase', help='force uppercase')
    parser.add_option('-d', action='store_true', dest='digits', help='include digits')
    parser.add_option('-D', action='store_true', dest='forceDigits', help='force digit')
    parser.add_option('-p', action='store_true', dest='punctuation', help='include punctuation')
    parser.add_option('-P', action='store_true', dest='forcePuntuation', help='force punctuation')
    parser.add_option('-n', dest='passwordLength', help='password length')
    parser.add_option('-x', dest='excluded', help='chars to exclude')

    (options, args) = parser.parse_args()
    if options.passwordLength==None:
        print parser.usage
        exit(0)

    try:
        passwordLength = int(options.passwordLength)
        if passwordLength < 4:
            passwordLength = 4
    except:
        print "Password Lenght must be an Integer"
        print "Using default value 4\n"
        passwordLength = 4

    if not options.lowercase and not options.forceLowercase and \
        not options.uppercase and not options.forceUppercase and \
        not options.digits and not options.forceDigits and \
        not options.punctuation and not options.forcePuntuation:
        print "Charset is empty!!!"
        print "Choose at least one subset\n"
        exit(0)

    return (passwordLength, options)
