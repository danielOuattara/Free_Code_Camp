print(100 * "~")


#  Read the whole file :
mail_box = open("mail_box.txt")
print(mail_box.read())

print(100 * "~")

#  Read the file Line by Line:
mail_box = open("mail_box.txt")
for line in mail_box:
    print(line)

print(100 * "~")

#  Read the file Line by Line + line upper():
mail_box = open("mail_box.txt")
for line in mail_box:
    line = line.upper()
    print(line)

print(100 * "~")

#  Read the file Line by Line, no new lines:
mail_box = open("mail_box.txt")
for line in mail_box:
    line = line.rstrip()
    print(line)


print(100 * "~")

#  Read the file Line by Line, no new lines + Lines uppper():
mail_box = open("mail_box.txt")
for line in mail_box:
    line = line.rstrip()
    line = line.upper()
    print(line)


print(100 * "~")
