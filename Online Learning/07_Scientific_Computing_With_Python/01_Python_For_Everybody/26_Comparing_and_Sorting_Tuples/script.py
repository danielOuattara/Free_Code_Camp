# Sorting Lists of Tuples
print(70 * '-')
dic = {"a": 10, "c": 22, "b": 1}
print(dic.items())

print(70 * '-')

# Sort by key
print(sorted(dic.items()))

for k, v in sorted(dic.items()):
    print(k, v)

print(70 * '-')

# Sort by value

dic = {"a": 10, "b": 1, "c": 22, }

tmp_list = list()

for k, v in dic.items():
    tmp_list.append((v, k))

print(tmp_list)

list_tmp = sorted(tmp_list, reverse=True)
print(tmp_list)

print(70 * '-')

# Find The most used word in a text

file = open("demo.txt")
counts = dict()
for line in file:
    words = line.split()
    for word in words:
        counts[word] = counts.get(word, 0) + 1

new_list = list()
for key, val in counts.items():
    new_tuple = (val, key)
    new_list.append(new_tuple)

new_list = sorted(new_list, reverse=True)

for val, key in new_list[: 10]:
    print(key, val)

print(70 * '-')

# Including comprehension list in  the previous code

file = open("demo.txt")
counts = dict()
for line in file:
    words = line.split()
    for word in words:
        counts[word] = counts.get(word, 0) + 1

new_list = sorted([(v, k) for (k, v) in counts.items()], reverse=True)

for val, key in new_list[: 10]:
    print(key, val)
