# Password Generator

A simple random password generator.

### Usage
```
$ python main.py -n <len> OPTIONS

-n <len>              set password length (required), min 4

OPTIONS:
-l                    include lowercase letters
-L                    force at least one lowercase
-u                    include uppercase letters
-U                    force at least one uppercase
-p                    include punctuation (already excluded '\\', '%', '`', '~')
-P                    force at least one punctuation symbol
-d                    include digits
-D                    force at least one digit
-x <list_of_chars>    chars to esclude

Examples:

$ python main.py -lupd -n 4
3$CB

$ python main.py -Lupd -n 4
y$CB
```
