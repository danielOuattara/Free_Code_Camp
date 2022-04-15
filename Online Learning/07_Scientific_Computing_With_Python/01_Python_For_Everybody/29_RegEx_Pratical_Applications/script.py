import re

data = "From stephen.marquard@uct.ac.za Fri Jan  4 04:07:34 2008"

at_position = data.find("@")
print(at_position)

print()

space_position_after_at = data.find(" ", at_position)
print(space_position_after_at)

print()

host_name = data[at_position + 1: space_position_after_at]
print(host_name)

# Split technic
words = data.split()
email = words[1]
host_name = email.split("@")
print(host_name[1])

print()

# Same as above using RegEx
host_name = re.findall("@(\S+)", data)
print(host_name)

print()

host_name = re.findall("@([^ ]*)", data)
print(host_name)

print()

host_name = re.findall("^From.*@([^ ]*)", data)
print(host_name)

print()

# Spam Confidence


file = open("mail_box.txt")
number_list = list()
number_median = 0
for line in file:
    line = line.rstrip()
    stuff = re.findall("^X-DSPAM-Confidence: ([0-9.]+)", line)
    if len(stuff) == 0:
        continue
    number = float(stuff[0])
    number_list.append(number)
    number_median += number
print("Maximum:", max(number_list))
print("Mean Value: ", number_median / len(number_list))

# Escape Character

"""
\$
\.
\?
"""
