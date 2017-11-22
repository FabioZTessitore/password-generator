import random

def makePassword(passwordLength, charset):
    password = []
    for i in range(passwordLength):
        random.shuffle(charset)
        c = random.choice(charset)
        password.append(c)

    return password

def forceSubset(password, subset, touchable):
    # if any char in the subset is present in the password
    # add and mark its position as untouchable
    if not any(c in password for c in subset):
        random.shuffle(subset)
        c = random.choice(subset)
        i = random.choice(touchable)
        touchable.remove(i)
        password[i] = c
    # else search a random char from the subset
    # and mark its position as untouchable
    else:
        touchable_copy = touchable[:]
        random.shuffle(touchable_copy)
        for i in touchable_copy:
            if password[i] in subset:
                touchable.remove(i)
                break

    return (password, touchable)

def forcePassword(password, lowercase, uppercase, digits, punctuation, options):
    touchable = range(len(password))

    if options.forceLowercase:
        password, touchable = forceSubset(password[:], lowercase, touchable[:])
    if options.forceUppercase:
        password, touchable = forceSubset(password[:], uppercase, touchable[:])
    if options.forceDigits:
        password, touchable = forceSubset(password[:], digits, touchable[:])
    if options.forcePuntuation:
        password, touchable = forceSubset(password[:], punctuation, touchable[:])

    return password
