import re


def main():
    print('hello world')
    # first examples:
    print(re.sub(r"[y]", " ", "Today is Thursday"))
    print(re.match(r"[today]", "today"))
    print(re.match(r"[today]*", "today"))
    print(re.match(r"[^today]", "today"))


if __name__ == '__main__':
    main()