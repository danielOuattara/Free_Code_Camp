import re

print(help(re))

print(70 * "~", "\n")

# using re.search()
# ==========================

file = open("mail_box.txt")
for line in file:
    line = line.strip()
    if line.find("From:") >= 0:
        print(line)

print(70 * "~", "\n")

file = open("mail_box.txt")
for line in file:
    line = line.strip()
    if re.search("From:", line):
        print(line)

print(70 * "~", "\n")

# using re.search() like startswith()
# ==================================

file = open("mail_box.txt")
for line in file:
    line = line.strip()
    if line.startswith("From:"):
        print(line)

print(70 * "~", "\n")

file = open("mail_box.txt")
for line in file:
    line = line.strip()
    if re.search("^From:", line):
        print(line)
